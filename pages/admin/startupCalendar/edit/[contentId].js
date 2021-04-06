import React, {useCallback, useEffect, useState} from 'react';
import wrapper from "../../../../store/configureStore";
import client from "../../../../lib/api/client";
import {
    initialize,
} from "../../../../store/board/adminBoard";
import {END} from "redux-saga";
import {Checkbox, Form, Input, Select, Tag, Upload, Modal, Button} from "antd";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {PlusOutlined} from "@ant-design/icons";
import styles from '../.././../../public/assets/styles/admin/board/board.module.css';
import classnames from "classnames/bind"
import dynamic from "next/dynamic";
import {fileDownload} from "../../../../store/file/file";
import {getStartupCalendar, getStartupCalendarCategoryCodeList, updateStartupCalendar} from "../../../../store/startupCalendar/adminStartupCalendar";
import locale from "antd/lib/date-picker/locale/ko_KR";
import moment from "moment";
const Editor = dynamic(() => import("../../../../component/common/Editor"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
});
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;
const { Option } = Select;
const cx = classnames.bind(styles);
import { UploadOutlined } from '@ant-design/icons';

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    const cookie = context.req && context.req.headers.cookie ? context.req.headers.cookie : '';
    client.defaults.headers.Cookie = cookie;

    context.store.dispatch(getStartupCalendarCategoryCodeList());
    context.store.dispatch(getStartupCalendar(context.params.contentId));
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
})

const ContentEditView = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const [writeInfo, setWriteInfo] = useState({
        title: "",
        attachFiles:[],
        removeFiles:[],
        categoryCodeId:"",
        isNotice:false
    })
    const [content,setContent] = useState("");
    const [editor,setEditor] = useState(null);
    const [newFileList,setNewFileList] = useState([]);
    const [updateResultModal, setUpdateResultModal] = useState(false)

    const {view,update,cate,user} = useSelector(({adminStartupCalendar,auth,loading})=> ({
        view: adminStartupCalendar.view,
        update:adminStartupCalendar.update,
        cate:adminStartupCalendar.cate,
        user:auth.user,
    }))


    useEffect(() => {
        // dispatch(getBoard(router.query.boardName))
        return () => {
            dispatch(initialize());
        };
    }, []);

    useEffect(() =>{
        if(view.startupCalendar != null){
            setWriteInfo({
                ...writeInfo,
                startupCalendarId:view.startupCalendar.startupCalendarId,
                title:view.startupCalendar.title,
                progressStatus:view.startupCalendar.progressStatus,
                categoryCodeId:view.startupCalendar.categoryCodeId,
                isNotice: view.startupCalendar.isNotice,
                attachFiles: view.files,
                applyStartDate:view.startupCalendar.applyStartDate != null ? moment(view.startupCalendar.applyStartDate) : null,
                applyEndDate:view.startupCalendar.applyEndDate != null ? moment(view.startupCalendar.applyEndDate) : null,
                eventDate:view.startupCalendar.eventDate != null ? moment(view.startupCalendar.eventDate) : null,
                applyStartDateStr:moment(view.startupCalendar.applyStartDate).format("YYYY-MM-DD HH:mm:ss").toString(),
                applyEndDateStr:moment(view.startupCalendar.applyEndDate).format("YYYY-MM-DD HH:mm:ss").toString(),
                eventDateStr:moment(view.startupCalendar.eventDate).format("YYYY-MM-DD HH:mm:ss").toString(),
            })
            // form.setFieldsValue({
            //     categoryCodeId:view.content.categoryCodeId
            // })
            setContent(view.startupCalendar.content)
        }

    },[view])


    const changeWriteInfo = useCallback((e) =>{
        const {name, value} = e.target

        setWriteInfo(writeInfo =>({
            ...writeInfo,
            [name]: value,
        }))
    },[])

    const changeCategory = useCallback((value) =>{
        setWriteInfo(writeInfo =>({
            ...writeInfo,
            categoryCodeId: value,
        }))
    },[])

    const changeNewFileList = useCallback(({fileList}) =>{
        setNewFileList(fileList)
    },[newFileList])

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
        setWriteInfo({
            ...writeInfo,
            removeFiles: writeInfo.removeFiles.concat(file.fileId),
            attachFiles: writeInfo.attachFiles.filter((item)=> {return item.fileId != file.fileId})
        })
    }

    useEffect(() =>{
        if(update.result && update.error == null){
            // dispatch(initialize());
            Modal.success({
                title: '수정이 완료되었습니다',
                onOk:() => {router.back();}
            });
        }else if(update.result == false && update.error != null){
            Modal.warning({
                title: '수정 중 에러가 발생하였습니다'
            });
        }
    },[update])

    const changeApplyDate = (e) =>{
        setWriteInfo({
            ...writeInfo,
            applyStartDate:e[0],
            applyEndDate:e[1],
            applyStartDateStr:e[0].format("YYYY-MM-DD HH:mm:ss").toString(),
            applyEndDateStr:e[1].format("YYYY-MM-DD HH:mm:ss").toString(),
        })
    }
    const changeEventDate = (e) =>{
        setWriteInfo({
            ...writeInfo,
            eventDate:e,
            eventDateStr:e.format("YYYY-MM-DD HH:mm:ss").toString(),
        })
    }


    const submitApply = (e) => {
        const data = {
            ...writeInfo,
            // startupCalendarId:view.startupCalendar.startupCalendarId,
            eventDateStr:writeInfo.eventDate != null ? writeInfo.eventDate.format("YYYY-MM-DD HH:mm").toString() : null,
            applyStartDateStr:writeInfo.applyStartDate != null ? writeInfo.applyStartDate.format("YYYY-MM-DD HH:mm").toString() : null,
            applyEndDateStr:writeInfo.applyEndDate != null ? writeInfo.applyEndDate.format("YYYY-MM-DD HH:mm").toString() : null,
            content:editor.getData(),
            files:newFileList.map((item) => (item.originFileObj)),
        }
        delete data.eventDate;
        delete data.applyStartDate;
        delete data.applyEndDate;

        data.eventDateStr == null && delete data.eventDateStr;
        data.applyStartDateStr == null && delete data.applyStartDateStr;
        data.applyEndDateStr == null && delete data.applyEndDateStr;


        console.log(data)
        dispatch(updateStartupCalendar(data));
    }


    const uploadButton = (
        <Button style={{marginTop:7}} className={"upload"} icon={<UploadOutlined />}>업로드</Button>
    );

    return (
            <section className={cx("container","board_container")}>
                <h1 className={cx("top_title")}>글 수정</h1>
                <div className={cx("adm_container")}>
                    <div className={`${cx("member_info","box")} clfx `}>
                        <ul className={"clfx"}>
                            <li>
                                <span className={cx("title","icon_1")}>{"창업캘린더"}</span>
                            </li>
                        </ul>
                    </div>

                    <p className={cx("txt_style_1")}>
                        {/*회원자료 삭제 시 다른 회원이 기존 회원아이디를 사용하지 못하도록 회원아이디, 이름, 닉네임은 삭제하지 않고 영구*/}
                        {/*보관합니다.*/}
                    </p>

                    <div className={cx("admin_cont")}>
                        <Form form={form} onFinish={(e) =>{submitApply(e)}}
                              initialValues={{
                                  title:view.startupCalendar.title
                              }}
                        >
                        <h2 className={cx("title_style_1")}><span>수정</span></h2>
                        <div className={cx("tb_style_1","edit_form","content")}>
                            <table>
                                <colgroup>
                                    <col style={{width:"30%"}}/>
                                    <col/>
                                </colgroup>
                                <thead>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">분류</th>
                                    <td>
                                        <select name='categoryCodeId' className={cx("cate")} onChange={changeWriteInfo} value={writeInfo.categoryCodeId}>
                                            {cate.map((item) => {
                                                return <option key={item.categoryCodeId} value={item.categoryCodeId}>{item.categoryCodeName}</option>
                                            })}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">진행 상태</th>
                                    <td>
                                        <select name='progressStatus' className={cx("cate")} onChange={changeWriteInfo} value={writeInfo.progressStatus}>
                                            <option value={"CLOSE"}>마감</option>
                                            <option value={"OPEN"}>진행중</option>
                                        </select>
                                    </td>
                                </tr>
                                {/*<tr>*/}
                                {/*    <th scope="row">공지</th>*/}
                                {/*    <td>*/}
                                {/*        <Checkbox checked={writeInfo.isNotice} onChange={(e) =>{setWriteInfo({...writeInfo,isNotice: e.target.checked})}}/>*/}
                                {/*    </td>*/}
                                {/*</tr>*/}
                                <tr>
                                    <th scope="row">신청 기간</th>
                                    <td>
                                        <RangePicker
                                            placeholder={["기간 시작","기간 종료"]} locale={locale}
                                            showTime={{ format: 'HH:mm' }}
                                            format="YYYY-MM-DD HH:mm"
                                            value={[writeInfo.applyStartDate,writeInfo.applyEndDate]}
                                            onOk={changeApplyDate}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">행사일</th>
                                    <td>
                                        <DatePicker locale={locale} showTime onOk={changeEventDate} value={writeInfo.eventDate} />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">제목</th>
                                    <td>
                                        <Form.Item
                                            name="title"
                                            className={(cx("antd_input"))}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '제목은 필수 입니다.',
                                                },
                                            ]}
                                        >
                                        <input type="text" placeholder={"제목을 입력하세요."} name="title" value={writeInfo.title} onChange={changeWriteInfo}/>
                                        </Form.Item>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">내용</th>
                                    <td>
                                        <Form.Item
                                            name="content"
                                            className={(cx("antd_input"))}
                                            // rules={[
                                            //     ({ getFieldValue }) => ({
                                            //         validator(rule, value) {
                                            //             if(content == null || content == ""){
                                            //                 return Promise.reject('내용을 입력해주세요')
                                            //             }
                                            //             return Promise.resolve()
                                            //         }
                                            //     })
                                            // ]}
                                        >
                                        <Editor setEditor={setEditor} content={content}/>
                                        </Form.Item>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">첨부파일</th>
                                    <td>
                                        <Upload
                                            listType="picture"
                                            fileList={writeInfo.attachFiles.map((file) => {
                                                return {
                                                    uid: file.fileName,
                                                    name: file.fileOriginName,
                                                    fileOriginName:file.fileOriginName,
                                                    status: 'done',
                                                    fileId: file.fileId
                                                }
                                            })}
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
                                            listType="picture"
                                            fileList={newFileList}
                                            showUploadList={{
                                                showPreviewIcon: true,
                                                showRemoveIcon: true,
                                                showDownloadIcon: false
                                            }}
                                            onPreview={handlePreview}
                                            onChange={changeNewFileList}
                                        >
                                            {writeInfo.attachFiles.length >= 8 ? null : uploadButton}
                                        </Upload>
                                        <span className={cx("title")}>첨부파일 (10MB 미만)</span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div className={cx("btn-box01")}>
                                <button className={cx("basic-btn01")}>저장</button>
                                <button type="button" className={cx("basic-btn02","btn-gray-bd")} onClick={router.back}>취소</button>
                            </div>
                        </div>
                        </Form>
                    </div>
                </div>
                {/*<Modal visible={updateResultModal} closable={true} maskClosable={true} onClose={() => {setUpdateResultModal(false);router.back();}} cx={cx} className={"add_result_popup"}>*/}
                {/*    <h1 className={cx("popup_title")}>글쓰기 완료</h1>*/}
                {/*</Modal>*/}
            </section>
    );
};

export default ContentEditView;
