import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {DatePicker, Form, Input, Modal, Typography} from "antd";

const { Text, Link } = Typography;
import {PlusOutlined} from "@ant-design/icons";
import moment from "moment";
import locale from "antd/lib/date-picker/locale/ko_KR";
import styles from '../../../public/assets/styles/admin/popup/popup.module.css';
import classnames from "classnames/bind"
import {addPopup,initialize} from "../../../store/popup/adminPopup";
import dynamic from "next/dynamic";
const cx = classnames.bind(styles);
const Editor = dynamic(() => import("../../../component/common/Editor"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
});

const PopupAddPage = () => {

    const dispatch = useDispatch();
    const router = useRouter();
    const [form] = Form.useForm();

    const {add,loading} = useSelector(({adminPopup, loading}) => ({
        add:adminPopup.addPopup,
        loading:loading['adminPopup/ADD_POPUP']
    }))

    const [popupInfo, setPopupInfo] = useState({
        title:"",
        leftPosition:0,
        topPosition:0,
        width:0,
        height:0,
        start:null,
        end:null,
        afterTime:0,
        popupImg:null,
        isPc:true,
        isMobile:true,
    });

    const [editor,setEditor] = useState(null);

    useEffect(() =>{

        return () =>{
            dispatch(initialize());
        }

    },[])


    const changePopupInfo = (e) =>{
        const {name, value} = e.target
        if(name == "isPc" || name == "isMobile" ){
            setPopupInfo({
                ...popupInfo,
                [name]:e.target.checked,
            })

        }else{
            setPopupInfo({
                ...popupInfo,
                [name]:value
            })
        }
    }

    const changeDate = (value) =>{
        setPopupInfo({
            ...popupInfo,
            start:value[0],
            end:value[1],
        })
    }


    const submit = () =>{
        const data = {
            ...popupInfo,
            start:popupInfo.start.format("YYYY-MM-DD HH:mm").toString(),
            end:popupInfo.end.format("YYYY-MM-DD HH:mm").toString(),
            content: editor.getData()
        }

        dispatch(addPopup(data))

    }

    useEffect(() =>{
        if(add.result && add.error == null){
            Modal.success({
                title: '저장이 완료되었습니다',
                onOk:() =>{router.push("/admin/popup")}
            });
        }

    },[add])


    return (
        <>
            <section className={cx("container")}>
                <h1 className={cx("top_title")}>팝업 관리</h1>
                <Form form={form} onFinish={submit}
                      initialValues={{
                          leftPosition: 0,
                          topPosition: 0,
                          width: 0,
                          height: 0,
                          afterTime: 0,
                      }}
                >
                    <div className={cx("adm_container")}>
                        <div className={cx("box")}>
                            <div className={cx("popup_detail")}>
                                <h2>팝업 정보</h2>
                                <div className={cx("tb_style_2")}>
                                    <table>
                                        <colgroup>
                                            <col style={{width:240}}/>
                                            <col />
                                        </colgroup>
                                        <tbody>
                                        <tr>
                                            <th scope="row">팝업 이름</th>
                                            <td>
                                                <Form.Item
                                                    name="title"
                                                    className={(cx("antd_input"))}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: '이름은 필수입니다',
                                                        },
                                                    ]}
                                                >
                                                    <input type="text" name="title" onChange={changePopupInfo} value={popupInfo.title} />
                                                </Form.Item>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">시간</th>
                                            <td>
                                                <Form.Item
                                                    name="afterTime"
                                                    className={(cx("antd_input"))}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: '시간은 필수입니다',
                                                        },
                                                    ]}
                                                >
                                                    <Input type="number" className={cx("w_100p")}
                                                           name="afterTime" onChange={changePopupInfo}
                                                           value={popupInfo.afterTime}
                                                           placeholder="시간 입력"/>
                                                </Form.Item>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">일시</th>
                                            <td>
                                                <Form.Item
                                                    name="start"
                                                    className={(cx("antd_input"))}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: '시간은 필수입니다',
                                                        },
                                                    ]}
                                                >
                                                    <DatePicker.RangePicker showTime locale={locale} value={[popupInfo.start,popupInfo.end]} onOk={changeDate} format="YYYY-MM-DD HH:mm"/>
                                                </Form.Item>
                                                {/*<input type="checkbox" name="isActive" checked={placeInfo.isActive} onChange={changePopupInfo}/><label htmlFor="">사용</label>*/}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">좌측</th>
                                            <td>
                                                <Form.Item
                                                    name="leftPosition"
                                                    className={(cx("antd_input"))}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: '좌측 위치',
                                                        },
                                                    ]}
                                                >
                                                    <Input type="number" className={cx("w_100p")}
                                                           name="leftPosition" onChange={changePopupInfo}
                                                           value={popupInfo.leftPosition}
                                                           placeholder=""/>
                                                </Form.Item>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">상단</th>
                                            <td>
                                                <Form.Item
                                                    name="topPosition"
                                                    className={(cx("antd_input"))}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: '상단 위치',
                                                        },
                                                    ]}
                                                >
                                                    <Input type="number" className={cx("w_100p")}
                                                           name="topPosition" onChange={changePopupInfo}
                                                           value={popupInfo.topPosition}
                                                           placeholder=""/>
                                                </Form.Item>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">넓이</th>
                                            <td>
                                                <Form.Item
                                                    name="width"
                                                    className={(cx("antd_input"))}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: '넓이',
                                                        },
                                                    ]}
                                                >
                                                    <Input type="number" className={cx("w_100p")}
                                                           name="width" onChange={changePopupInfo}
                                                           value={popupInfo.width}
                                                           placeholder="이미지 가로 크기 권장"/>
                                                </Form.Item>
                                                <Text type="danger">&#8251;모바일 최적화를 위해 362px 권장</Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">높이</th>
                                            <td>
                                                <Form.Item
                                                    name="height"
                                                    className={(cx("antd_input"))}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: '높이',
                                                        },
                                                    ]}
                                                >
                                                    <Input type="number" className={cx("w_100p")}
                                                           name="height" onChange={changePopupInfo}
                                                           value={popupInfo.height}
                                                           placeholder="이미지 세로 크기 권장"/>
                                                </Form.Item>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">사용</th>
                                            <td>
                                                <Form.Item
                                                    name="isPc"
                                                    className={(cx("antd_input"))}
                                                    rules={[
                                                        {
                                                            required:false
                                                        },
                                                    ]}
                                                >
                                                    <label htmlFor="pc">PC</label>
                                                    <Input id="pc" type="checkbox" className={cx("w_100p")}
                                                           name="isPc" onChange={changePopupInfo}
                                                           checked={popupInfo.isPc}/>

                                                    <label htmlFor="mobile">MOBILE</label>
                                                    <Input id="mobile" type="checkbox" className={cx("w_100p")}
                                                           name="isMobile" onChange={changePopupInfo}
                                                           checked={popupInfo.isMobile}/>
                                                </Form.Item>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">내용</th>
                                            <td>
                                                {/*<Form.Item*/}
                                                {/*    name="popupImg"*/}
                                                {/*    className={(cx("antd_input"))}*/}
                                                {/*    rules={[*/}
                                                {/*        {*/}
                                                {/*            required: true,*/}
                                                {/*            message: '팝업 이미지',*/}
                                                {/*        },*/}
                                                {/*    ]}*/}
                                                {/*>*/}
                                                <Editor setEditor={setEditor}/>
                                                    {/*<Upload*/}
                                                    {/*    listType="picture-card"*/}
                                                    {/*    fileList={popupInfo.addAttachFileList}*/}
                                                    {/*    onPreview={handlePreview}*/}
                                                    {/*    onChange={changeFileList}*/}
                                                    {/*    accept="image/png, image/jpeg"*/}
                                                    {/*    // previewFile={(e)=>{console.log(e)}}*/}
                                                    {/*>*/}
                                                    {/*    {popupInfo.addAttachFileList.length == 1 ? null : uploadButton}*/}
                                                    {/*</Upload>*/}
                                                {/*</Form.Item>*/}
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className={cx("txt_c pt_60")}>
                                    <button type="submit" className={cx("basic-btn02","btn-gray-bg")} >저장</button>
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

export default PopupAddPage;
