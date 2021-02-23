import React, {useCallback, useEffect, useState} from 'react';
import wrapper from "../../../../../store/configureStore";
import client from "../../../../../lib/api/client";
import {deleteBoardContent, getBoard, getBoardContent, initialize} from "../../../../../store/board/adminBoard";
import {END} from "redux-saga";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {fileDownload} from "../../../../../store/file/file";
import {addReply, deleteReply, updateReply} from "../../../../../store/board/adminBoard";
import moment from "moment";
import {Checkbox, Form, Input, Modal, Select, Upload} from "antd";
import ReplyList from "../../../../../component/admin/board/reply/ReplyList";
import ReplyAdd from "../../../../../component/admin/board/reply/ReplyAdd";
import Link from "next/link";

import styles from '../.././../../../public/assets/styles/admin/board/board.module.css';
import classnames from "classnames/bind"

const cx = classnames.bind(styles);


export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    const cookie = context.req && context.req.headers.cookie ? context.req.headers.cookie : '';
    client.defaults.headers.Cookie = cookie;

    context.store.dispatch(getBoard(context.params.boardName));
    context.store.dispatch(getBoardContent(context.params.contentId));
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
})

const ContentView = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [newReply, setNewReply] = useState({
        replyContent: "",
        parentId: ""
    })

    const [newReReply, setNewReReply] = useState({
        replyContent: "",
        parentId: ""
    })

    const [updateReplyValue, setUpdateReplyValue] = useState({
        replyContent: "",
        parentId: ""
    })

    const [showInput, setShowInput] = useState(null);
    const [showUpdateInput, setShowUpdateInput] = useState(null);
    const [showRemoveModal, setShowRemoveModal] = useState(false);

    const {board, view,deleteResult,reply} = useSelector(({adminBoard, loading}) => ({
        board: adminBoard.board,
        view: adminBoard.view,
        deleteResult:adminBoard.delete,
        reply: adminBoard.reply
    }))

    useEffect(() => {
        setNewReReply({
            replyContent: "",
            parentId: ""
        })
    }, [showInput])

    const handleFileDownload = useCallback(({fileId}) => {
        if (fileId != undefined) {
            dispatch(fileDownload(fileId))
        }
    }, [])


    const changeAddReply = useCallback((e) => {
        const {name, value} = e.target;

        setNewReply(newReply => ({
            ...newReply,
            [name]: value
        }))

    }, [])

    const changeAddReReply = useCallback((e) => {
        const {name, value} = e.target;

        setNewReReply(newReply => ({
            ...newReply,
            [name]: value
        }))

    }, [])

    const changeUpdateReply = useCallback((e) => {
        const {name, value} = e.target;

        setUpdateReplyValue(updateReplyValue => ({
            ...updateReplyValue,
            [name]: value
        }))

    }, [])

    const addNewReply = () => {
        const data = {
            ...newReply,
            contentId: view.content.contentId
        }
        dispatch(addReply(data));

        setNewReply({
            replyContent: "",
            parentId: ""
        })
    }

    const addNewReReply = ({parent, parentReply}) => {
        const data = {
            ...newReReply,
            parentId: parent,
            parentReplyId: parentReply,
            contentId: view.content.contentId
        }
        dispatch(addReply(data));

        setNewReReply({
            replyContent: "",
            parentId: ""
        })
        setShowInput(null);
    }

    const handleUpdateReply = (replyId) => {
        const data = {
            ...updateReplyValue,
            replyId: replyId
        }
        dispatch(updateReply(data));

        setUpdateReplyValue({
            replyContent: "",
            parentId: "",
            replyId: ""
        })
        setShowUpdateInput(null);

        dispatch(getBoardContent(view.content.contentId))
    }

    const handleDeleteContent = () =>{
        dispatch(deleteBoardContent(view.content.contentId))
    }

    useEffect(() =>{
        if(deleteResult.result && deleteResult.error == null){
            Modal.success({
                content: '글 삭제 완료되었습니다',
                onOk:() => {dispatch(initialize());router.back();}
            });
        }else if(deleteResult.result == false && deleteResult.error != null){
            Modal.warning({
                title: '삭제 중 에러가 발생하였습니다'
            });
            // dispatch(initialize())
        }

    },[deleteResult])

    const handleDeleteReply = (replyId) => {
        const data = {
            replyId: replyId,
            contentId: view.content.contentId
        }

        dispatch(deleteReply(data))

    }

    return (
        view.content != null && (
            <>
            <section className={cx("container","board_container")}>
                <h1 className={cx("top_title")}>글 내용</h1>
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
                            <h2 className={cx("title_style_1")}><span>내용</span></h2>
                            <div className={cx("tb_style_2","edit_form")}>
                                <div className={cx("btn_box")}>
                                    <Link href={`/admin/board/content/list?boardEnName=${router.query.boardName}`}><a className={cx("basic-btn01")}>목록</a></Link>
                                    <Link href={`/admin/board/content/${view.content.boardEnName}/edit/${view.content.contentId}`}><a className={cx("basic-btn02")}>수정</a></Link>
                                    <button onClick={() =>{setShowRemoveModal(true)}} className={cx("basic-btn02","btn-red-bg")}>삭제</button>
                                </div>
                                <table>
                                    <colgroup>
                                        <col style={{width:"30%"}}/>
                                        <col/>
                                    </colgroup>
                                    <thead>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className={cx("title_box")}>
                                            <h1 className={cx("title")}>
                                                {view.content.isNotice && (
                                                    <span className={cx("notice_icon")}>공지</span>
                                                )}
                                                {view.content.title}
                                            </h1>
                                            <span className={cx("cate")}>{view.content.categoryCodeName}</span>
                                            <span className={cx("date")}>작성일: {moment(view.content.regDate).format("YYYY.MM.DD HH:MM")}</span>
                                            <span className={cx("view_cnt")}>조회수: {view.content.viewCnt}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div dangerouslySetInnerHTML={{__html: view.content.content}} className={"ql-editor"}/>
                                        </td>
                                    </tr>
                                    {
                                        board.board.useFile && view.files.length > 0 && (
                                            <tr className={cx("bbs_attach_file")}>
                                                <td>
                                                <Upload
                                                    listType="picture-card"
                                                    fileList={view.files.map((file) => {
                                                        return {
                                                            uid: file.fileName,
                                                            name: file.fileOriginName,
                                                            status: 'done',
                                                            fileId: file.fileId
                                                        }
                                                    })}
                                                    showUploadList={{
                                                        showPreviewIcon: false,
                                                        showRemoveIcon: false,
                                                        showDownloadIcon: true
                                                    }}
                                                    onDownload={handleFileDownload}
                                                >
                                                </Upload>
                                                </td>
                                            </tr>
                                        )
                                    }
                                    </tbody>
                                </table>
                                <div className={cx("prev_next")}>
                                    <ul>
                                        {view.next != null && (
                                            <li>
                                                <span className={cx("title")}>다음글</span>
                                                <Link
                                                    href={`/board/${router.query.boardName}/view/${view.next.contentId}`}><a>{view.next.title}</a></Link>
                                                <span
                                                    className={cx("date")}>{moment(view.next.regDate).format("YYYY.MM.DD")}</span>
                                            </li>
                                        )}
                                        {view.prev != null && (
                                            <li>
                                                <span className={cx("title")}>이전글</span>
                                                <Link
                                                    href={`/board/${router.query.boardName}/view/${view.prev.contentId}`}><a>{view.prev.title}</a></Link>
                                                <span
                                                    className={cx("date")}>{moment(view.prev.regDate).format("YYYY.MM.DD")}</span>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                {board.board.useComment && (
                                    <div className={cx("reply_box")}>
                                        <ReplyList list={reply.list} addNewReReply={addNewReReply}
                                                   changeAddReReply={changeAddReReply} newReReply={newReReply}
                                                   setShowInput={setShowInput} showInput={showInput}
                                                   handleUpdateReply={handleUpdateReply} showUpdateInput={showUpdateInput}
                                                   setShowUpdateInput={setShowUpdateInput} updateReplyValue={updateReplyValue}
                                                   changeUpdateReply={changeUpdateReply} handleDeleteReply={handleDeleteReply}

                                        />
                                        <div className={cx("add_box")}>
                                            <ReplyAdd addNewReply={addNewReply} changeAddReply={changeAddReply} newReply={newReply}/>
                                        </div>
                                    </div>
                                )}
                            </div>
                    </div>
                </div>
            </section>
                <Modal
                    title="삭제하시겠습니까?"
                    visible={showRemoveModal}
                    onCancel={() =>{setShowRemoveModal(false)}}
                    footer={[
                        <button key={"cancel_btn"} className={cx("basic-btn01","btn-gray-bg")} onClick={() =>{setShowRemoveModal(false);}}>취소</button>,
                        <button key={"delete_btn"} className={cx("basic-btn02","btn-red-bg")} onClick={handleDeleteContent}>삭제</button>
                    ]}
                >
                    <p className={cx("warning")}>{view.content.title}</p>
                </Modal>
            </>
        )
    );
};

export default ContentView;
