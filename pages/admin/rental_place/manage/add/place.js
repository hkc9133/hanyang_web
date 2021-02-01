import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {Form, Upload,Modal} from "antd";
import {addPlace, getPlace, initialize, updatePlace} from "../../../../../store/spaceRental/adminSpaceRental";
import {fileDownload} from "../../../../../store/file/file";
import {PlusOutlined} from "@ant-design/icons";
// import Modal from "../../../../../component/common/Modal";
import styles from '../../../../../public/assets/styles/admin/rental/rental.module.css';
import classnames from "classnames/bind"
const cx = classnames.bind(styles);
const PlaceAdd = () => {

    const dispatch = useDispatch();
    const router = useRouter();
    const [form] = Form.useForm();

    const {add,loading} = useSelector(({adminSpaceRental, loading}) => ({
        add:adminSpaceRental.addPlace,
        loading:loading['adminPopup/GET_PLACE']
    }))

    const [placeInfo, setPlaceInfo] = useState({
        placeName:"",
        placeDesc:"",
        addAttachFileList:[],
    });
    const [showResultModal,setShowResultModal] = useState(false);

    useEffect(() =>{

        return () =>{
            dispatch(initialize());
        }

    },[])


    const changePlaceInfo = (e) =>{
        const {name, value} = e.target
        if(name == "isActive"){
            setPlaceInfo({
                ...placeInfo,
                [name]:e.target.checked,
            })

        }else{
            setPlaceInfo({
                ...placeInfo,
                [name]:value
            })
        }
    }

    const changeNewFileList = ({fileList}) =>{
        setPlaceInfo({...placeInfo,addAttachFileList:fileList})
    }

    const handlePreview = useCallback((file) =>{
        const fileURL = URL.createObjectURL(file.originFileObj);
        window.open(fileURL);
    },[])


    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    const submit = () =>{
        const data = {
            ...placeInfo,
            addAttachFileList:placeInfo.addAttachFileList.map((item) => (item.originFileObj))
        }

        dispatch(addPlace(data));
    }

    useEffect(() =>{
        if(add.result && add.error == null){
            Modal.success({
                title: '저장이 완료되었습니다',
                onOk:() =>{router.push("/admin/rental_place/manage")}
            });
        }

    },[add])

    return (
        <>
                <section className={cx("container")}>
                    <h1 className={cx("top_title")}>이용정보관리</h1>
                    <Form form={form}>
                        <div className={cx("adm_container")}>
                            <div className={cx("box")}>
                                <div className={cx("mentor_detail")}>
                                    <h2>공간 정보</h2>
                                    <div className={cx("tb_style_2")}>
                                        <table>
                                            <colgroup>
                                                <col style={{width:240}}/>
                                                <col />
                                            </colgroup>
                                            <tbody>
                                            <tr>
                                                <th scope="row">공간 이름</th>
                                                <td>
                                                    <Form.Item
                                                        name="placeName"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: '이름은 필수입니다',
                                                            },
                                                        ]}
                                                    >
                                                        <input type="text" name="placeName" onChange={changePlaceInfo} value={placeInfo.placeName} />
                                                    </Form.Item>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">간단설명</th>
                                                <td>
                                                    <Form.Item
                                                        name="placeDesc"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message: '간단한 설명을 입력해주세요',
                                                            },
                                                        ]}
                                                    >
                                                        <input type="text" className={cx("w_100p")}
                                                               name="placeDesc" onChange={changePlaceInfo}
                                                               value={placeInfo.placeDesc}
                                                               placeholder="창업지원단에 소속되어 있는 기업들만 사용가능합니다."/>
                                                    </Form.Item>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">사용여부</th>
                                                <td>
                                                    <input type="checkbox" name="isActive" checked={placeInfo.isActive} onChange={changePlaceInfo}/><label htmlFor="">사용</label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">대표이미지</th>
                                                <td>
                                                    <Upload
                                                        listType="picture-card"
                                                        fileList={placeInfo.addAttachFileList}
                                                        showUploadList={{
                                                            showPreviewIcon: true,
                                                            showRemoveIcon: true,
                                                            showDownloadIcon: false
                                                        }}
                                                        onPreview={handlePreview}
                                                        onChange={changeNewFileList}
                                                        accept="image/png, image/jpeg"
                                                    >
                                                        {placeInfo.addAttachFileList.length>= 3 ? null : uploadButton}
                                                    </Upload>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className={cx("txt_c pt_60")}>
                                        <button type="button" className={cx("basic-btn02","btn-gray-bg")} onClick={() =>{submit()}}>저장</button>
                                        <button type="button" className={cx("basic-btn02","btn-gray-bd2")} onClick={() =>{router.push("/admin/rental_place/manage")}}>목록</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                    {/*<Modal visible={showResultModal} closable={true} maskClosable={true} onClose={() => {*/}
                    {/*    setShowResultModal(false);*/}
                    {/*}} cx={cx} className={"rental_popup"}>*/}
                    {/*    <h2 className={cx("popup_title")}>저장이 완료되었습니다</h2>*/}
                    {/*    <div className={cx("btn_box")}>*/}
                    {/*        <button className={cx("close_btn")} onClick={() =>{setShowResultModal(false);router.push("/admin/rental_place/manage")}}>확인</button>*/}
                    {/*    </div>*/}
                    {/*</Modal>*/}
                </section>
        </>
    );
};

export default PlaceAdd;
