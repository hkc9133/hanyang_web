import React, {useCallback, useEffect, useState} from 'react';
import {Checkbox, DatePicker, Form, Input, Modal, Tag, Upload} from "antd";
import locale from "antd/lib/date-picker/locale/ko_KR";
import {PlusOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {
    deletePartner,
    getPartner,
    initialize, updatePartner,
    getContinentList
} from "../../../store/partner/adminPartner";
const {CheckableTag} = Tag;

import styles from '../../../public/assets/styles/admin/startupPresent/startupPresent.module.css';
import classnames from "classnames/bind"
import wrapper from "../../../store/configureStore";
import client from "../../../lib/api/client";
import {END} from "redux-saga";
import moment from "moment";
import {fileDownload} from "../../../store/file/file";
const cx = classnames.bind(styles);


export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    const cookie = context.req && context.req.headers.cookie ? context.req.headers.cookie : '';
    client.defaults.headers.Cookie = cookie;

    context.store.dispatch(getContinentList());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
})

const PartnerEditPage = () => {

    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const router = useRouter();

    const {partner,continentList,updateResult,deleteResult} = useSelector(({adminPartner,loading})=> ({
        partner:adminPartner.getPartner,
        continentList:adminPartner.getContinentList,
        updateResult:adminPartner.updatePartner,
        deleteResult:adminPartner.deletePartner
    }))
    const [showRemoveModal,setShowRemoveModal] = useState(false);
    const [partnerForm, setPartnerForm] = useState({
        companyName:"",
        field:"",
        homepage:"",
        location:"",
        oldAttachFileList:[],
        addAttachFileList:[],
        removeFileId:null
    });

    useEffect(() => {
        // dispatch(getFieldList());
        dispatch(getPartner(router.query.partnerId))

        return () => {
            dispatch(initialize());
        };
    }, []);

    useEffect(() => {

        if(partner != null){
            setPartnerForm({
                ...partner,
                addAttachFileList:[],
                oldAttachFileList: partner.attachFile != null &&  [{
                    uid: partner.attachFile.fileName,
                    name: partner.attachFile.fileOriginName,
                    fileOriginName:partner.attachFile.fileOriginName,
                    status: 'done',
                    fileId: partner.attachFile.fileId
                }]
            })
        }

    }, [partner]);

    const changePartnerFormValue = useCallback((e) =>{
        const {name, value} = e.target

        setPartnerForm(partnerForm =>({
            ...partnerForm,
            [name]: value,

        }))

    },[])



    const changeNewFileList = ({fileList}) =>{
        setPartnerForm({...partnerForm,addAttachFileList:fileList})
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
        setPartnerForm({
            ...partnerForm,
            removeFileId:file.fileId,
            oldAttachFileList: [],
            addAttachFileList: []
        })
    }


    const submit = () =>{
        const data = {
            ...partnerForm,
            companyLogo:partnerForm.addAttachFileList.length == 1 ? partnerForm.addAttachFileList[0].originFileObj : null
        }

        delete data.regDate;
        delete data.attachFile;
        delete data.continent;

        dispatch(updatePartner(data))

        // dispatch(addPartner(data))
    }

    useEffect(() =>{
        if(updateResult.result && updateResult.error == null){
            dispatch(initialize());
            Modal.success({
                title:'수정이 완료되었습니다',
                onOk:() => {router.back();}
            });
        }else if(updateResult.result == false && updateResult.error != null){
            Modal.warning({
                title: '수정 중 에러가 발생하였습니다'
            });
        }

    },[updateResult])

    const removeStartup = () =>{
        dispatch(deletePartner(partner.partnerId))
    }
    useEffect(() =>{
        if(deleteResult.result && deleteResult.error == null){
            Modal.success({
                title: '삭제가 완료되었습니다',
                onOk:() =>{router.push("/admin/startup_present")},
            });
        }else if(deleteResult.result == false && deleteResult.error != null){
            Modal.warning({
                title: '삭제 중 에러가 발생하였습니다'
            });
        }
    },[deleteResult])


    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );


    return (
        <>
            {partner != null && (
                <section className={cx("container")}>
                    <h1 className={cx("top_title")}>파트너 수정</h1>
                    <Form form={form} onFinish={submit}
                          initialValues={{...partner}}
                    >
                        <div className={cx("adm_container")}>
                            <div className={cx("box")}>
                                <div className={cx("startup_present_info")}>
                                    {/*<h2>팝업 정보</h2>*/}
                                    <div className={cx("tb_style_2")}>
                                        <table>
                                            <colgroup>
                                                {/*<col style={{width: 270}}/>*/}
                                                {/*<col style={{width: 400}}/>*/}
                                                {/*<col  style={{width: 270}}/>*/}
                                                {/*<col/>*/}
                                            </colgroup>
                                            <tbody>
                                            <tr>
                                                <th scope="row">기업명</th>
                                                <td>
                                                    <Form.Item
                                                        name="companyName"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: '기업명은 필수 입니다.',
                                                            },
                                                        ]}
                                                    >
                                                        <Input placeholder={"기업명"} name="companyName"
                                                               value={partnerForm.companyName}
                                                               onChange={(e) => {
                                                                   changePartnerFormValue(e)
                                                               }}/>
                                                    </Form.Item>
                                                </td>
                                                <th scope="row">관리</th>
                                                <td>
                                                    <button type="button" className={cx("basic-btn01","btn-red-bg")} onClick={() =>{setShowRemoveModal(true)}}>삭제</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">분야</th>
                                                <td colSpan={3}>
                                                    <Form.Item
                                                        name="field"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: false,
                                                                // message: '대표자 이름은 필수 입니다.',
                                                            },
                                                        ]}
                                                    >
                                                        <Input placeholder={"분야"} name="field" value={partnerForm.field}
                                                               onChange={(e) => {
                                                                   changePartnerFormValue(e)
                                                               }}/>
                                                    </Form.Item>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">구분</th>
                                                <td>
                                                    <Form.Item
                                                        name="continentId"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: '선택하여주세요',
                                                            },
                                                        ]}
                                                    >
                                                        <select value={partnerForm.continentId} name="continentId"
                                                                onChange={changePartnerFormValue}>
                                                            <option value="">선택</option>
                                                            {continentList.map((item) => (
                                                                <option
                                                                    value={item.continentId}>{item.continentName}</option>

                                                            ))}
                                                        </select>
                                                    </Form.Item>
                                                </td>
                                                <th scope="row">국가/지역</th>
                                                <td>
                                                    <Form.Item
                                                        name="location"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: false,
                                                                // message: "필수입력 입니다",
                                                            },
                                                        ]}
                                                    >
                                                        <Input placeholder={"국가/지역"} name="location"
                                                               value={partnerForm.location}
                                                               onChange={(e) => {
                                                                   changePartnerFormValue(e)
                                                               }}/>
                                                    </Form.Item>
                                                </td>

                                            </tr>
                                            <tr>
                                                <th scope="row">홈페이지</th>
                                                <td colSpan={3}>
                                                    <Form.Item
                                                        name="homepage"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message: '',
                                                            },
                                                        ]}
                                                    >
                                                        <Input placeholder={"https://....."} name="homepage"
                                                               value={partnerForm.homepage}
                                                               onChange={(e) => {
                                                                   changePartnerFormValue(e)
                                                               }}/>
                                                    </Form.Item>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">기업 로고</th>
                                                <td colSpan={3}>
                                                    <Form.Item
                                                        name="companyLogo"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            ({ getFieldValue }) => ({
                                                                validator(rule, value) {
                                                                    if(partnerForm.oldAttachFileList.length == 0 && partnerForm.addAttachFileList.length == 0){
                                                                        return Promise.reject('기업 로고를 추가해주세요')

                                                                    }
                                                                    return Promise.resolve()
                                                                }
                                                            })
                                                        ]}
                                                    >
                                                        <Upload
                                                            listType="picture-card"
                                                            fileList={partnerForm.oldAttachFileList}
                                                            showUploadList={{
                                                                showPreviewIcon: true,
                                                                showRemoveIcon: true,
                                                                showDownloadIcon: true
                                                            }}
                                                            onPreview={handlePreview}
                                                            onDownload={handleFileDownload}
                                                            onRemove={handleFileRemove}
                                                        />
                                                        <Upload
                                                            listType="picture-card"
                                                            fileList={partnerForm.addAttachFileList}
                                                            showUploadList={{
                                                                showPreviewIcon: true,
                                                                showRemoveIcon: true,
                                                                showDownloadIcon: false
                                                            }}
                                                            onPreview={handlePreview}
                                                            onChange={changeNewFileList}
                                                            accept="image/png, image/jpeg"
                                                        >
                                                            {(partnerForm.oldAttachFileList.length >= 1 || partnerForm.addAttachFileList.length>= 1) ? null : uploadButton}
                                                        </Upload>

                                                    </Form.Item>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className={cx("txt_c pt_60")}>
                                        <button type="submit" className={cx("basic-btn02", "btn-gray-bg")}>저장</button>
                                        <button type="button" className={cx("basic-btn02", "btn-gray-bd2")}
                                                onClick={() => {
                                                    router.push("/admin/startup_present")
                                                }}>목록
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                    <Modal
                        title="삭제하시겠습니까?"
                        visible={showRemoveModal}
                        // confirmLoading={deletePlaceResult.result}
                        onCancel={() =>{setShowRemoveModal(false)}}
                        footer={[
                            <button className={cx("basic-btn01","btn-red-bg")} onClick={() =>{removeStartup()}}>삭제</button>,
                            <button className={cx("basic-btn01","btn-gray-bg")} onClick={() =>{setShowRemoveModal(false);}}>취소</button>
                        ]}
                    >
                        <p className={cx("warning")}></p>
                        {/*<p>{modalText}</p>*/}
                    </Modal>
                </section>
            )}

        </>
    );
};

export default PartnerEditPage;
