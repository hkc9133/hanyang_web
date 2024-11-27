import React, {useCallback, useEffect, useState} from 'react';
import wrapper from "../../../../../store/configureStore";
import {
    deleteBoardContent,
    getBoard,
    getBoardContent,
    initialize,
    updateBoardContent
} from "../../../../../store/board/board";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import moment from 'moment';
import styles from '../../../../../public/assets/styles/board/board.module.css';
import classnames from "classnames/bind"
import {Button, Form, Modal, Upload} from "antd";
import {fileDownload} from "../../../../../store/file/file";
import Head from "next/head";
import PageNavigation from "../../../../../component/layout/PageNavigation";
import {UploadOutlined} from '@ant-design/icons';
import dynamic from "next/dynamic";

const cx = classnames.bind(styles);
const Editor = dynamic(() => import("../../../../../component/common/Editor"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
});

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    const cookie = context.req && context.req.headers.cookie ? context.req.headers.cookie : '';
    // client.defaults.headers.Cookie = cookie;
    //
    // context.store.dispatch(getBoard(context.params.boardName));
    // context.store.dispatch(getBoardContent(context.params.contentId));
    // context.store.dispatch(END);
    // await context.store.sagaTask.toPromise();

    return {
        props: {
            boardName: context.params.boardName,
            contentId:context.params.contentId
        }
    }
})

const BoardView = ({boardName,contentId}) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const [show, setShow] = useState(false);
    const [editor, setEditor] = useState(null)
    const [showInput, setShowInput] = useState(null);
    const [showUpdateInput, setShowUpdateInput] = useState(null);
    const [showRemoveModal, setShowRemoveModal] = useState(false);
    const [writeInfo, setWriteInfo] = useState({
        title: "",
        attachFiles:[],
        thumbFiles:[],
        thumb:[],
        removeFiles:[],
        categoryCodeId:null,
        isNotice:false
    })
    const [newFileList,setNewFileList] = useState([]);
    const [newThumbList,setNewThumbList] = useState([]);
    const [updateResultModal, setUpdateResultModal] = useState(false)

    const {board, user, view, deleteResult,update} = useSelector(({board, auth, loading}) => ({
        user: auth.user,
        board: board.board,
        view: board.view,
        deleteResult: board.delete,
        update: board.update,
    }))

    useEffect(() => {
        dispatch(getBoard(boardName));
        dispatch(getBoardContent(contentId));

        return () =>{
            dispatch(initialize())
        }
    }, [])

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
        }

    },[view])

    const changeWriteInfo = useCallback((e) =>{
        const {name, value} = e.target

        setWriteInfo(writeInfo =>({
            ...writeInfo,
            [name]: value,
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


    const handleFileRemove = (file) => {
        setWriteInfo({
            ...writeInfo,
            removeFiles: writeInfo.removeFiles.concat(file.fileId),
            attachFiles: writeInfo.attachFiles.filter((item)=> {return item.fileId != file.fileId})
        })
    }

    useEffect(() => {
        if (user.login != null) {
            if (board.board != null && user.login && view.content != null) {

                if (board.board.isPrivacy && (user.role != 'ROLE_ADMIN' && user.info.userId != view.content.writerId)) {
                    Modal.warning({
                        title: "작성자만 확인 가능합니다",
                        onOk: () => {
                            router.back();
                        }
                    });
                } else {
                    setShow(true)
                }
            } else if (board.board != null && !user.login && view.content != null) {
                if (board.board.isPrivacy) {
                    Modal.warning({
                        title: "작성자만 확인 가능합니다",
                        onOk: () => {
                            router.back();
                        }
                    });
                } else {
                    setShow(true)
                }

            }

        }
    }, [board, user, view])


    const handleFileDownload = useCallback(({fileId}) => {
        if (fileId != undefined) {
            dispatch(fileDownload(fileId))
        }
    }, [])

    const handleDeleteContent = () => {
        dispatch(deleteBoardContent(view.content.contentId))
    }

    useEffect(() => {
        if (deleteResult.result && deleteResult.error == null) {
            Modal.success({
                content: '글 삭제 완료되었습니다',
                onOk: () => {
                    router.back();
                }
            });
        } else if (deleteResult.result == false && deleteResult.error != null) {
            Modal.warning({
                title: '삭제 중 에러가 발생하였습니다'
            });
            // dispatch(initialize())
        }

    }, [deleteResult])
    useEffect(() =>{

        if(update.result && update.error == null){
            Modal.success({
                title:"글 저장 완료",
                onOk:() =>{router.back();}
            });
        }
    },[update])

    const submitApply = (e) => {
        const data = {
            ...writeInfo,
            // ...form.getFieldsValue(),
            contentId:router.query.contentId,
            content: board.board.boardEnName != 'corp_press' ? editor.getData() : null,
            files:newFileList.map((item) => (item.originFileObj)),
            thumb:newThumbList.map((item) => (item.originFileObj)),
            boardEnName:router.query.boardName,
            regDate:writeInfo.regDate.format("YYYY-MM-DD HH:mm").toString()
        }
        if(data.categoryCodeId == null){
            delete data.categoryCodeId
        }
        dispatch(updateBoardContent(data));
    }

    const uploadButton = (
        <Button style={{marginTop:7}} className={"upload"} icon={<UploadOutlined />}>업로드</Button>
    );

    return (
        (show && board.board != null && view.content != null) && (
            <>
                <Head>
                    <title>한양대학교 창업지원단 -{board.board.boardKrName}</title>
                </Head>
                <PageNavigation title={view.content.title} desc={view.content.content.replace(/(<([^>]+)>)/ig,"")}/>
                <section className={cx("sub_container")}>
                    {/*<div className={cx("sub_container", "board_view")}>*/}
                        <h1 className={cx("sub_top_title")}>{board.board.boardKrName}</h1>
                        <p className={cx("sub_top_txt")}>{board.board.boardDesc}</p>

                        <Form form={form} onFinish={(e) =>{submitApply(e)}}
                            // initialValues={{
                            //     ["title"]:view.content.title,
                            //     // ["categoryCodeId"]:view.content.categoryCodeId
                            // }}
                        >
                            <div className={cx("bbs_write")}>
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
                                                    {board.cate.map((item) => {
                                                        return <option key={item.categoryCodeId} value={item.categoryCodeId}>{item.categoryCodeName}</option>
                                                    })}
                                                </select>
                                            </td>
                                        </tr>
                                    )}
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
                                <div className={"txt_c"}>
                                    <button type="submit" className={cx("basic-btn02","btn-blue-bd")}>저장</button>
                                    <button type="button" className={cx("basic-btn02","btn-gray-bd")} onClick={router.back}>취소</button>
                                </div>
                            </div>
                        </Form>
                    {/*</div>*/}
                    <Modal
                        title="삭제하시겠습니까?"
                        visible={showRemoveModal}
                        onCancel={() => {
                            setShowRemoveModal(false)
                        }}
                        footer={[
                            <button key={"cancel_btn"} className={cx("basic-btn06", "btn-gray-bg")} onClick={() => {
                                setShowRemoveModal(false);
                            }}>취소</button>,
                            <button key={"delete_btn"} className={cx("basic-btn07", "btn-red-bg")}
                                    onClick={handleDeleteContent}>삭제</button>
                        ]}
                    >
                        <p className={cx("warning")}>{view.content.title}</p>
                    </Modal>
                </section>
            </>
        )
    );
};

export default BoardView;
