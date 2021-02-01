import React, {useCallback, useEffect, useState} from 'react';
import styles from '../../../../../../public/assets/styles/admin/rental/rental.module.css';
import classnames from "classnames/bind"
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {deletePlace, getPlace, initialize, updatePlace} from "../../../../../../store/spaceRental/adminSpaceRental";
import {Form, Upload, Modal, Button} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {fileDownload} from "../../../../../../store/file/file";
// import Modal from "../../../../../../component/common/Modal";
const cx = classnames.bind(styles);
const PlaceDetail = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [form] = Form.useForm();

    const {place,update,deletePlaceResult,loading} = useSelector(({adminSpaceRental, loading}) => ({
        place: adminSpaceRental.getPlace,
        update:adminSpaceRental.updatePlace,
        deletePlaceResult:adminSpaceRental.deletePlace,
        loading:loading['adminPopup/GET_PLACE']
    }))

    const [placeInfo, setPlaceInfo] = useState({
        placeName:"",
        placeDesc:"",
        placeAttachFileList:[],
        addAttachFileList:[],
        removeFiles:[]
    });
    const [showResultModal,setShowResultModal] = useState(false);
    const [showRemoveModal,setShowRemoveModal] = useState(false);

    useEffect(() =>{
        dispatch(getPlace(router.query.placeId))
        return () =>{
            dispatch(initialize());
        }

    },[])

    useEffect(() =>{
        if(place != null){
            setPlaceInfo({
                ...placeInfo,
                ...place,
                placeName: place.placeName == "null" || place.placeName == null ? "" : place.placeName,
                placeDesc: place.placeDesc == "null" || place.placeDesc == null ? "" : place.placeDesc,
                placeAttachFileList:place.placeAttachFileList == null ? [] : place.placeAttachFileList,
                addAttachFileList:[],
                rentalRoomList:[],
                removeFiles:[]
            })
        }
    },[place])

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

    const handleFileDownload = useCallback(({fileId}) => {
        if (fileId != undefined) {
            dispatch(fileDownload(fileId))
        }
    }, [])


    const handleFileRemove = (file) => {
        setPlaceInfo({
            ...placeInfo,
            removeFiles: placeInfo.removeFiles.concat(file.fileId),
            placeAttachFileList: placeInfo.placeAttachFileList.filter((item)=> {return item.fileId != file.fileId})
        })
    }

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

        delete data.placeAttachFileList;
        delete data.rentalRoomList;

        dispatch(updatePlace(data));
    }

    const removePlace = () =>{
        dispatch(deletePlace(placeInfo.placeId))
    }

    useEffect(() =>{
        if(update.result && update.error == null){
            Modal.success({
                title: '저장이 완료되었습니다',
                onOk:() =>{router.push("/admin/rental_place/manage");}
            });
        }

    },[update])

    useEffect(() =>{
        if(deletePlaceResult.result && deletePlaceResult.error == null){
            Modal.success({
                title: '삭제가 완료되었습니다',
                onOk:() =>{router.push("/admin/rental_place/manage")}
            });
        }
    },[deletePlaceResult])


    // useEffect(() =>{
    //     if(update.result && update.error == null){
    //         setShowRemoveModal(true)
    //     }
    //
    // },[delete])
    return (
        <>
            {place != null && (
                <section className={cx("container")}>
                    <h1 className={cx("top_title")}>이용정보관리</h1>
                    <Form form={form}
                          initialValues={{
                              placeName: place.placeName == "null" || place.placeName == null ? "" : place.placeName,
                              placeDesc: place.placeDesc == "null" || place.placeDesc == null ? "" : place.placeDesc,
                          }}
                    >
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
                                                <th scope="row">관리</th>
                                                <td>
                                                    <button type="button" className={cx("basic-btn01","btn-red-bg")} onClick={() =>{setShowRemoveModal(true)}}>삭제</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">간단설명</th>
                                                <td colSpan={3}>
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
                                                <td colSpan={3}>
                                                    <input type="checkbox" name="isActive" checked={placeInfo.isActive} onChange={changePlaceInfo}/><label htmlFor="">사용</label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">대표이미지</th>
                                                <td colSpan={3}>
                                                    <Upload
                                                        listType="picture-card"
                                                        fileList={placeInfo.placeAttachFileList.map((file) => {
                                                            return {
                                                                uid: file.fileName,
                                                                name: file.fileOriginName,
                                                                fileOriginName:file.fileOriginName,
                                                                status: 'done',
                                                                fileId: file.fileId
                                                            }
                                                        })}
                                                        showUploadList={{
                                                            showPreviewIcon: false,
                                                            showRemoveIcon: true,
                                                            showDownloadIcon: true
                                                        }}
                                                        onPreview={handlePreview}
                                                        onDownload={handleFileDownload}
                                                        onRemove={handleFileRemove}
                                                    />
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
                                                        {placeInfo.addAttachFileList.length + placeInfo.placeAttachFileList.length >= 3 ? null : uploadButton}
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
                    <Modal
                        title="삭제하시겠습니까?"
                        visible={showRemoveModal}
                        onOk={() =>{removePlace()}}
                        // confirmLoading={deletePlaceResult.result}
                        onCancel={() =>{setShowRemoveModal(false)}}
                        footer={[
                            <button className={cx("basic-btn01","btn-red-bg")} onClick={() =>{removePlace()}}>삭제</button>,
                            <button className={cx("basic-btn01","btn-gray-bg")} onClick={() =>{setShowRemoveModal(false);}}>취소</button>
                        ]}
                    >
                        <p className={cx("warning")}>삭제 시 관련 장소, 시간 정보가 모두 삭제 됩니다.</p>
                        {/*<p>{modalText}</p>*/}
                    </Modal>
                    {/*<Modal visible={showResultModal} closable={true} maskClosable={true} onClose={() => {*/}
                    {/*    setShowResultModal(false);*/}
                    {/*}} cx={cx} className={"rental_popup"}>*/}
                    {/*    <h2 className={cx("popup_title")}>저장이 완료되었습니다</h2>*/}
                    {/*    <div className={cx("btn_box")}>*/}
                    {/*        <button className={cx("basic-btn02","btn-gray-bg")} onClick={() =>{setShowResultModal(false);router.push("/admin/rental_place/manage")}}>확인</button>*/}
                    {/*    </div>*/}
                    {/*</Modal>*/}

                    {/*<Modal visible={showRemoveModal} closable={true} maskClosable={true} onClose={() => {*/}
                    {/*    setShowRemoveModal(false);*/}
                    {/*}} cx={cx} className={"rental_popup"}>*/}
                    {/*    {deletePlaceResult.result ?  (*/}
                    {/*        <>*/}
                    {/*            <h2 className={cx("popup_title")}>삭제가 완료되었습니다</h2>*/}
                    {/*            <div className={cx("btn_box")}>*/}
                    {/*                    <button className={cx("basic-btn01","btn-gray-bg")} onClick={() =>{router.push("/admin/rental_place/manage")}}>확인</button>*/}
                    {/*            </div>*/}
                    {/*        </>*/}
                    {/*    ) : (*/}
                    {/*        <>*/}
                    {/*            <h2 className={cx("popup_title")}>삭제하시겠습니까?</h2>*/}
                    {/*            <p className={cx("warning")}>삭제 시 관련 장소, 시간 정보가 모두 삭제 됩니다.</p>*/}
                    {/*            <div className={cx("btn_box")}>*/}
                    {/*                <button className={cx("basic-btn01","btn-red-bg")} onClick={() =>{removePlace()}}>삭제</button>*/}
                    {/*                <button className={cx("basic-btn01","btn-gray-bg")} onClick={() =>{setShowRemoveModal(false);}}>취소</button>*/}
                    {/*            </div>*/}
                    {/*        </>*/}
                    {/*    )}*/}
                    {/*</Modal>*/}

                </section>

            )}

        </>
    );
};

export default PlaceDetail;
