import React, {useCallback, useEffect, useState} from 'react';
import {Checkbox, DatePicker, Form, Input, Modal, Tag, Upload} from "antd";
import locale from "antd/lib/date-picker/locale/ko_KR";
import {PlusOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {
    addStartupPresent, deleteStartupPresent,
    getFieldList,
    getStartupPresent,
    initialize, updateStartupPresent
} from "../../../store/startupPresent/adminStartupPresent";
const {CheckableTag} = Tag;

import styles from '../../../public/assets/styles/admin/startupPresent/startupPresent.module.css';
import classnames from "classnames/bind"
import wrapper from "../../../store/configureStore";
import client from "../../../lib/api/client";
import {getNotice, getNoticeCategoryCodeList} from "../../../store/notice/adminNotice";
import {END} from "redux-saga";
import moment from "moment";
import {fileDownload} from "../../../store/file/file";
const cx = classnames.bind(styles);


export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    const cookie = context.req && context.req.headers.cookie ? context.req.headers.cookie : '';
    client.defaults.headers.Cookie = cookie;

    context.store.dispatch(getFieldList());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
})

const StartupEditPage = () => {

    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const router = useRouter();

    const {startup,fieldList,updateResult,deleteResult} = useSelector(({adminStartupPresent,loading})=> ({
        startup:adminStartupPresent.getStartupPresent,
        fieldList:adminStartupPresent.getFieldList,
        updateResult:adminStartupPresent.updateStartupPresent,
        deleteResult:adminStartupPresent.deleteStartupPresent
    }))
    const [showRemoveModal,setShowRemoveModal] = useState(false);
    const [startUpForm, setStartUpForm] = useState({
        companyName:"",
        companyOwner:"",
        companyPhoneNum:"",
        companyEmail:"",
        address:"",
        gubun:"",
        companyKind:"",
        homepage:"",
        item:"",
        createDate:null,
        businessIdList:[],
        techIdList:[],
        oldAttachFileList:[],
        addAttachFileList:[],
        removeFileId:null
    });

    useEffect(() => {
        // dispatch(getFieldList());
        dispatch(getStartupPresent(router.query.startupId))

        return () => {
            dispatch(initialize());

        };
    }, []);

    useEffect(() => {

        if(startup != null){
            setStartUpForm({
                ...startup,
                createDate:moment(startup.createDate),
                businessIdList: startup.businessFieldList.map((item)=>item.businessId),
                techIdList: startup.techFieldList.map((item)=>item.techId),
                addAttachFileList:[],
                oldAttachFileList: startup.attachFile != null &&  [{
                    uid: startup.attachFile.fileName,
                    name: startup.attachFile.fileOriginName,
                    fileOriginName:startup.attachFile.fileOriginName,
                    status: 'done',
                    fileId: startup.attachFile.fileId
                }]
            })
        }

    }, [startup]);

    const changeStartUpFormValue = useCallback((e) =>{
        const {name, value} = e.target

        setStartUpForm(reportForm =>({
            ...reportForm,
            [name]: value,

        }))

    },[])

    const changeBusinessId = (tag, checked) => {
        const nextSelectedTags = checked ? [...startUpForm.businessIdList, tag.businessId] : startUpForm.businessIdList.filter(t => t !== tag.businessId);

        setStartUpForm({
            ...startUpForm,
            businessIdList: nextSelectedTags
        })
    }
    const changeTechId = (tag, checked) => {
        const nextSelectedTags = checked ? [...startUpForm.techIdList, tag.techId] : startUpForm.techIdList.filter(t => t !== tag.techId);

        setStartUpForm({
            ...startUpForm,
            techIdList: nextSelectedTags
        })
    }

    const changeNewFileList = ({fileList}) =>{
        setStartUpForm({...startUpForm,addAttachFileList:fileList})
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
        console.log(file)
        setStartUpForm({
            ...startUpForm,
            removeFileId:file.fileId,
            oldAttachFileList: [],
            addAttachFileList: []
        })
    }


    const submit = () =>{
        const data = {
            ...startUpForm,
            createDate:startUpForm.createDate.format("YYYY-MM-DD").toString(),
            companyLogo:startUpForm.addAttachFileList.length == 1 ? startUpForm.addAttachFileList[0].originFileObj : null
        }

        console.log(data)

        delete data.businessFieldList;
        delete data.techFieldList;
        delete data.regDate;
        delete data.attachFile;

        dispatch(updateStartupPresent(data))

        // dispatch(addStartupPresent(data))
    }

    useEffect(() =>{
        if(updateResult.result && updateResult.error == null){
            // dispatch(initialize());
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
        dispatch(deleteStartupPresent(startup.startupId))
    }
    useEffect(() =>{
        if(deleteResult.result && deleteResult.error == null){
            // dispatch(initialize());
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
            {startup != null && (
                <section className={cx("container")}>
                    <h1 className={cx("top_title")}>스타트업 수정</h1>
                    <Form form={form} onFinish={submit}
                          initialValues={{...startup,createDate:moment(startup.createDate)}}
                    >
                        <div className={cx("adm_container")}>
                            <div className={cx("box")}>
                                <div className={cx("startup_present_info")}>
                                    {/*<h2>팝업 정보</h2>*/}
                                    <div className={cx("tb_style_2")}>
                                        <table>
                                            <colgroup>
                                                <col style={{width: 270}}/>
                                                <col style={{width: 400}}/>
                                                <col  style={{width: 270}}/>
                                                <col/>
                                            </colgroup>
                                            <tbody>
                                            <tr>
                                                <th scope="row">우수 스타트업</th>
                                                <td colSpan={3}>
                                                    <Form.Item
                                                        name="isBest"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: false,
                                                            },
                                                        ]}
                                                    >
                                                        <Checkbox checked={startUpForm.isBest} onChange={(e) =>{setStartUpForm({...startUpForm,isBest: e.target.checked})}}/>
                                                    </Form.Item>
                                                </td>
                                            </tr>
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
                                                        <Input placeholder={"기업명"} name="companyName" value={startUpForm.companyName}
                                                               onChange={(e) => {changeStartUpFormValue(e)}}/>
                                                    </Form.Item>
                                                </td>
                                                <th scope="row">관리</th>
                                                <td>
                                                    <button type="button" className={cx("basic-btn01","btn-red-bg")} onClick={() =>{setShowRemoveModal(true)}}>삭제</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">대표자명</th>
                                                <td>
                                                    <Form.Item
                                                        name="companyOwner"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: '대표자 이름은 필수 입니다.',
                                                            },
                                                        ]}
                                                    >
                                                        <Input placeholder={"소속"} name="companyOwner" value={startUpForm.companyOwner}
                                                               onChange={(e) => {
                                                                   changeStartUpFormValue(e)
                                                               }}/>
                                                    </Form.Item>
                                                </td>
                                                <th scope="row">설립일</th>
                                                <td>
                                                    <Form.Item
                                                        name="createDate"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: "필수입력 입니다",
                                                            },
                                                        ]}
                                                    >
                                                        <DatePicker locale={locale} format={"YYYY-MM-DD"} value={startUpForm.createDate} onChange={(v) =>{setStartUpForm({...startUpForm,createDate:v})}}/>
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
                                                        <Input placeholder={"https://....."} name="homepage" value={startUpForm.homepage}
                                                               onChange={(e) => {
                                                                   changeStartUpFormValue(e)
                                                               }}/>
                                                    </Form.Item>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">인스타그램</th>
                                                <td>
                                                    <Form.Item
                                                        name="insta"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message: '',
                                                            },
                                                        ]}
                                                    >
                                                        <Input placeholder={"https://....."} name="insta" value={startUpForm.insta}
                                                               onChange={(e) => {
                                                                   changeStartUpFormValue(e)
                                                               }}/>
                                                    </Form.Item>
                                                </td>
                                                <th scope="row">페이스북</th>
                                                <td>
                                                    <Form.Item
                                                        name="facebook"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message: '',
                                                            },
                                                        ]}
                                                    >
                                                        <Input placeholder={"https://....."} name="facebook" value={startUpForm.facebook}
                                                               onChange={(e) => {
                                                                   changeStartUpFormValue(e)
                                                               }}/>
                                                    </Form.Item>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">네이버 블로그</th>
                                                <td>
                                                    <Form.Item
                                                        name="naverBlog"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message: '',
                                                            },
                                                        ]}
                                                    >
                                                        <Input placeholder={"https://....."} name="naverBlog" value={startUpForm.naverBlog}
                                                               onChange={(e) => {
                                                                   changeStartUpFormValue(e)
                                                               }}/>
                                                    </Form.Item>
                                                </td>
                                                <th scope="row">트위터</th>
                                                <td>
                                                    <Form.Item
                                                        name="twitter"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message: '',
                                                            },
                                                        ]}
                                                    >
                                                        <Input placeholder={"https://....."} name="twitter" value={startUpForm.twitter}
                                                               onChange={(e) => {
                                                                   changeStartUpFormValue(e)
                                                               }}/>
                                                    </Form.Item>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">연락처</th>
                                                <td>
                                                    <Form.Item
                                                        name="companyPhoneNum"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: false,
                                                                pattern: new RegExp(
                                                                    /^-?\d*(\.\d*)?$/
                                                                ),
                                                                message: "'-' 없이 숫자만 입력 가능합니다",
                                                            },
                                                        ]}
                                                    >
                                                        <Input placeholder={"연락처"} name="companyPhoneNum" value={startUpForm.companyPhoneNum}
                                                               onChange={(e) => {
                                                                   changeStartUpFormValue(e)
                                                               }}/>
                                                    </Form.Item>
                                                </td>
                                                <th scope="row">E-MAIL</th>
                                                <td>
                                                    <Form.Item
                                                        name="companyEmail"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: false,
                                                                type: 'email',
                                                                message: 'E-MAIL은 필수 입니다.',
                                                            },
                                                        ]}
                                                    >
                                                        <Input placeholder={"E-MAIL"} name="companyEmail" value={startUpForm.companyEmail}
                                                               onChange={(e) => {
                                                                   changeStartUpFormValue(e)
                                                               }}/>
                                                    </Form.Item>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">주소</th>
                                                <td colSpan={3}>
                                                    <Form.Item
                                                        name="address"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message: '주소',
                                                            },
                                                        ]}
                                                    >
                                                        <Input placeholder={"주소"} name="address" value={startUpForm.address}
                                                               onChange={(e) => {
                                                                   changeStartUpFormValue(e)
                                                               }}/>
                                                    </Form.Item>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">구분</th>
                                                <td>
                                                    <Form.Item
                                                        name="gubun"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: '선택하여주세요',
                                                            },
                                                        ]}
                                                    >
                                                        <select value={startUpForm.gubun}  name="gubun" onChange={changeStartUpFormValue}>
                                                            <option value="">선택</option>
                                                            <option value="학생">학생</option>
                                                            <option value="동문">동문</option>
                                                            <option value="교원">교원</option>
                                                            <option value="일반인">일반인</option>
                                                        </select>
                                                    </Form.Item>
                                                </td>
                                                <th scope="row">사업자 유형</th>
                                                <td>
                                                    <Form.Item
                                                        name="companyKind"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message: '사업자 유형을 선택해주세요',
                                                            },
                                                        ]}
                                                    >
                                                        <select name="companyKind" id="" value={startUpForm.companyKind} onChange={changeStartUpFormValue}>
                                                            <option value="">선택</option>
                                                            <option value="법인">법인</option>
                                                            <option value="개인">개인</option>
                                                        </select>
                                                    </Form.Item>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">비즈니스 분야</th>
                                                <td colSpan={3}>
                                                    <Form.Item
                                                        name="businessIdList"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            ({ getFieldValue }) => ({
                                                                validator(rule, value) {
                                                                    if(startUpForm.businessIdList < 1){
                                                                        return Promise.reject('1개 이상 선택')

                                                                    }
                                                                    return Promise.resolve()
                                                                }
                                                            })
                                                        ]}
                                                    >
                                                        {fieldList.business.map(tag => (
                                                            <CheckableTag
                                                                className={cx("tag", {checked: startUpForm.businessIdList.indexOf(tag.businessId) > -1})}
                                                                key={tag.businessId}
                                                                checked={startUpForm.businessIdList.indexOf(tag.businessId) > -1}
                                                                onChange={checked => {
                                                                    changeBusinessId(tag, checked)
                                                                }}
                                                            >
                                                                {tag.businessName}
                                                            </CheckableTag>
                                                        ))}
                                                    </Form.Item>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">활용기술</th>
                                                <td colSpan={3}>
                                                    <Form.Item
                                                        name="techIdList"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            ({ getFieldValue }) => ({
                                                                validator(rule, value) {
                                                                    if(startUpForm.techIdList < 1){
                                                                        return Promise.reject('1개 이상 선택')

                                                                    }
                                                                    return Promise.resolve()
                                                                }
                                                            })
                                                        ]}
                                                    >
                                                        {fieldList.tech.map(tag => (
                                                            <CheckableTag
                                                                className={cx("tag", {checked: startUpForm.techIdList.indexOf(tag.techId) > -1})}
                                                                key={tag.techId}
                                                                checked={startUpForm.techIdList.indexOf(tag.techId) > -1}
                                                                onChange={checked => {
                                                                    changeTechId(tag, checked)
                                                                }}
                                                            >
                                                                {tag.techName}
                                                            </CheckableTag>
                                                        ))}
                                                    </Form.Item>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">사업 아이템</th>
                                                <td colSpan={3}>
                                                    <Form.Item
                                                        name="item"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message: '',
                                                            },
                                                        ]}
                                                    >
                                                        <Input placeholder={"사업 아이템"} name="item" value={startUpForm.item}
                                                               onChange={(e) => {
                                                                   changeStartUpFormValue(e)
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
                                                                    if(startUpForm.oldAttachFileList.length == 0 && startUpForm.addAttachFileList.length == 0){
                                                                        return Promise.reject('기업 로고를 추가해주세요')

                                                                    }
                                                                    return Promise.resolve()
                                                                }
                                                            })
                                                        ]}
                                                    >
                                                        <Upload
                                                            listType="picture-card"
                                                            fileList={startUpForm.oldAttachFileList}
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
                                                            fileList={startUpForm.addAttachFileList}
                                                            showUploadList={{
                                                                showPreviewIcon: true,
                                                                showRemoveIcon: true,
                                                                showDownloadIcon: false
                                                            }}
                                                            onPreview={handlePreview}
                                                            onChange={changeNewFileList}
                                                            accept="image/png, image/jpeg"
                                                        >
                                                            {(startUpForm.oldAttachFileList.length >= 1 || startUpForm.addAttachFileList.length>= 1) ? null : uploadButton}
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

export default StartupEditPage;
