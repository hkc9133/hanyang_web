import React, {useCallback, useEffect, useState} from 'react';
import wrapper from "../../../../../../store/configureStore";
import client from "../../../../../../lib/api/client";
import {
    addBoardContent,
    getBoard,
    getBoardContent,
    initialize,
    updateBoardContent
} from "../../../../../../store/board/adminBoard";
import {END} from "redux-saga";
import {Checkbox, Form, Input, Select, Tag, Upload, Modal, DatePicker} from "antd";
// import Modal from "../../../../../../component/common/Modal";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {PlusOutlined} from "@ant-design/icons";
import styles from '../.././../../../../public/assets/styles/admin/board/board.module.css';
import classnames from "classnames/bind"
import dynamic from "next/dynamic";
import {fileDownload} from "../../../../../../store/file/file";
import { Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const Editor = dynamic(() => import("../../../../../../component/common/Editor"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
});
const { Option } = Select;
const cx = classnames.bind(styles);
import moment from 'moment';
import locale from "antd/lib/date-picker/locale/ko_KR";

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    const cookie = context.req && context.req.headers.cookie ? context.req.headers.cookie : '';
    client.defaults.headers.Cookie = cookie;

    context.store.dispatch(getBoard(context.params.boardName));
    context.store.dispatch(getBoardContent(context.params.contentId));
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
        thumbFiles:[],
        thumb:[],
        removeFiles:[],
        categoryCodeId:null,
        isNotice:false
    })
    const [editor, setEditor] = useState(null)
    const [content,setContent] = useState("");
    const [newFileList,setNewFileList] = useState([]);
    const [newThumbList,setNewThumbList] = useState([]);
    const [updateResultModal, setUpdateResultModal] = useState(false)

    const {board,view,update,user} = useSelector(({adminBoard,auth,loading})=> ({
        board:adminBoard.board,
        view: adminBoard.view,
        update:adminBoard.update,
        user:auth.user,
    }))


    useEffect(() => {
        // dispatch(getBoard(router.query.boardName))
        return () => {
            dispatch(initialize());
        };
    }, []);

    useEffect(() =>{
        if(view.content != null){
            setWriteInfo({
                ...writeInfo,
                title:view.content.title,
                categoryCodeId:view.content.categoryCodeId,
                isNotice: view.content.isNotice,
                attachFiles: view.files,
                thumbFiles: view.thumb,
                regDate:moment(view.content.regDate),
                sub01:view.content.sub01,
                sub02:view.content.sub02,
                sub03:view.content.sub03,
                sub04:view.content.sub04,
                sub05:view.content.sub05,
                sub06:view.content.sub06,
                sub07:view.content.sub07,
            })
            // form.setFieldsValue({
            //     categoryCodeId:view.content.categoryCodeId
            // })
            // setContent(view.content.content)
        }

    },[view])

    // useEffect(() =>{
    //     console.log(writeInfo)
    //
    // },[writeInfo])

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

    const changeThumb = useCallback(({fileList}) =>{
        setNewThumbList(fileList)
    },[newThumbList])

    const handlePreview = useCallback((file) =>{
        const fileURL = URL.createObjectURL(file.originFileObj);
        window.open(fileURL);
    },[])

    const handleFileDownload = useCallback(({fileId}) => {
        if (fileId != undefined) {
            dispatch(fileDownload(fileId))
        }
    }, [])

    const changeRegDate = (e) =>{
        setWriteInfo({
            ...writeInfo,
            regDate:e,
        })
    }



    const handleFileRemove = (file) => {
        setWriteInfo({
            ...writeInfo,
            removeFiles: writeInfo.removeFiles.concat(file.fileId),
            attachFiles: writeInfo.attachFiles.filter((item)=> {return item.fileId != file.fileId})
        })
    }

    const handleThumbRemove = (file) => {
        setWriteInfo({
            ...writeInfo,
            removeFiles: writeInfo.removeFiles.concat(file.fileId),
            thumbFiles: writeInfo.thumbFiles.filter((item)=> {return item.fileId != file.fileId})
        })
    }

    useEffect(() =>{

        if(update.result && update.error == null){
            Modal.success({
                title:"글쓰기 완료",
                onOk:() =>{router.back();}
            });
        }
    },[update])



    const submitApply = (e) => {
        const data = {
            ...writeInfo,
            // ...form.getFieldsValue(),
            contentId:router.query.contentId,
            content:editor.getData(),
            files:newFileList.map((item) => (item.originFileObj)),
            thumb:newThumbList.map((item) => (item.originFileObj)),
            boardEnName:router.query.boardName,
            regDate:writeInfo.regDate.format("YYYY-MM-DD HH:mm").toString()
        }
        console.log(data)
        if(data.categoryCodeId == null){
            delete data.categoryCodeId
        }
        dispatch(updateBoardContent(data));
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
                                <span className={cx("title","icon_1")}>{board.board.boardKrName}</span>
                            </li>
                        </ul>
                    </div>

                    <p className={cx("txt_style_1")}>
                        {/*회원자료 삭제 시 다른 회원이 기존 회원아이디를 사용하지 못하도록 회원아이디, 이름, 닉네임은 삭제하지 않고 영구*/}
                        {/*보관합니다.*/}
                    </p>

                    <div className={cx("admin_cont")}>
                        <Form form={form} onFinish={(e) =>{submitApply(e)}}
                              // initialValues={{
                              //     ["title"]:view.content.title,
                              //     // ["categoryCodeId"]:view.content.categoryCodeId
                              // }}
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
                                {board.board.categoryId != null &&(
                                    <tr>
                                        <th>분류</th>
                                        <td>
                                            <select name='categoryCodeId' className={cx("cate")} onChange={changeWriteInfo} value={writeInfo.categoryCodeId}>
                                                {board.categoryCode.map((item) => {
                                                    return <option key={item.categoryCodeId} value={item.categoryCodeId}>{item.categoryCodeName}</option>
                                                })}
                                            </select>
                                        </td>
                                    </tr>
                                )}
                                <tr>
                                    <th>공지</th>
                                    <td>
                                        {/*<Form.Item*/}
                                        {/*>*/}
                                        {/*    <Checkbox checked={writeInfo.isNotice} onChange={(e) =>{setWriteInfo({...writeInfo,isNotice: e.target.checked})}}/>*/}
                                        {/*</Form.Item>*/}
                                        <Checkbox checked={writeInfo.isNotice} onChange={(e) =>{setWriteInfo({...writeInfo,isNotice: e.target.checked})}}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th>등록일</th>
                                    <td>
                                        <DatePicker locale={locale} showTime format={"YYYY-MM-DD HH:ss"} onOk={changeRegDate} value={writeInfo.regDate} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>제목</th>
                                    <td>
                                        <input type="text" placeholder={"제목을 입력하세요."} name="title" value={writeInfo.title} onChange={changeWriteInfo}/>
                                        {/*<Form.Item*/}
                                        {/*    name="title"*/}
                                        {/*    rules={[*/}
                                        {/*        {*/}
                                        {/*            required: true,*/}
                                        {/*            message: '제목을 입력하세요.',*/}
                                        {/*        },*/}
                                        {/*    ]}*/}
                                        {/*>*/}
                                        {/*    <Input placeholder={"제목을 입력하세요."} name="title" value={writeInfo.title} onChange={changeWriteInfo}/>*/}
                                        {/*</Form.Item>*/}
                                    </td>
                                </tr>
                                <tr>
                                    <th>썸네일</th>
                                    <td>
                                        <Upload
                                            listType="picture"
                                            fileList={writeInfo.thumbFiles.map((file) => {
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
                                            onRemove={handleThumbRemove}
                                        />
                                        <Upload
                                            listType="picture"
                                            fileList={newThumbList}
                                            showUploadList={{
                                                showPreviewIcon: true,
                                                showRemoveIcon: true,
                                                showDownloadIcon: false
                                            }}
                                            onPreview={handlePreview}
                                            onChange={changeThumb}
                                        >
                                            {(writeInfo.thumbFiles.length >= 1 || newThumbList.length >= 1) ? null : uploadButton}
                                        </Upload>
                                        <span className={cx("title")}>첨부파일 (10MB 미만)</span>
                                    </td>
                                </tr>
                                {board.board.subName01 != "" && board.board.subName01 != null &&(
                                    <tr>
                                        <th>{board.board.subName01}</th>
                                        <td>
                                            <input type="text" placeholder={""} name="sub01" value={writeInfo.sub01 == null ? "" : writeInfo.sub01} onChange={changeWriteInfo}/>
                                        </td>
                                    </tr>
                                )}
                                {board.board.subName02 != "" && board.board.subName02 != null &&(
                                    <tr>
                                        <th>{board.board.subName02}</th>
                                        <td>
                                            <input type="text" placeholder={""} name="sub02" value={writeInfo.sub02 == null ? "" : writeInfo.sub02} onChange={changeWriteInfo}/>
                                        </td>
                                    </tr>
                                )}
                                {board.board.subName03 != "" && board.board.subName03 != null &&(
                                    <tr>
                                        <th>{board.board.subName03}</th>
                                        <td>
                                            <input type="text" placeholder={""} name="sub03" value={writeInfo.sub03 == null ? "" : writeInfo.sub03} onChange={changeWriteInfo}/>
                                        </td>
                                    </tr>
                                )}
                                {board.board.subName04 != "" && board.board.subName04 != null &&(
                                    <tr>
                                        <th>{board.board.subName04}</th>
                                        <td>
                                            <input type="text" placeholder={""} name="sub04" value={writeInfo.sub04 == null ? "" : writeInfo.sub04} onChange={changeWriteInfo}/>
                                        </td>
                                    </tr>
                                )}
                                {board.board.subName05 != "" && board.board.subName05 != null &&(
                                    <tr>
                                        <th>{board.board.subName05}</th>
                                        <td>
                                            <input type="text" placeholder={""} name="sub05" value={writeInfo.sub05 == null ? "" : writeInfo.sub05} onChange={changeWriteInfo}/>
                                        </td>
                                    </tr>
                                )}
                                {board.board.subName06 != "" && board.board.subName06 != null &&(
                                    <tr>
                                        <th>{board.board.subName06}</th>
                                        <td>
                                            <input type="text" placeholder={""} name="sub06" value={writeInfo.sub06 == null ? "" : writeInfo.sub06} onChange={changeWriteInfo}/>
                                        </td>
                                    </tr>
                                )}
                                {board.board.subName07 != "" && board.board.subName07 != null &&(
                                    <tr>
                                        <th>{board.board.subName07}</th>
                                        <td>
                                            <input type="text" placeholder={""} name="sub07" value={writeInfo.sub07 == null ? "" : writeInfo.sub07} onChange={changeWriteInfo}/>
                                        </td>
                                    </tr>
                                )}
                                {board.board.boardEnName != 'corp_press' && (
                                    <tr>
                                        <th>내용</th>
                                        <td>
                                            {/*<QuillEditor Contents={content} QuillChange={setContent}/>*/}
                                            <Editor setEditor={setEditor} content={view.content.content}/>
                                        </td>
                                    </tr>
                                )}
                                {board.board.useFile && (
                                <tr>
                                    <th>첨부파일</th>
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
                                )}
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
