import React, {useCallback, useEffect, useState} from 'react';
import wrapper from "../../../store/configureStore";
import client from "../../../lib/api/client";
import {getBoard, getBoardContent} from "../../../store/board/adminBoard";
import {END} from "redux-saga";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {fileDownload} from "../../../store/file/file";
import moment from "moment";
import {Checkbox, Form, Input, Select, Upload} from "antd";
import Link from "next/link";

import styles from '../../../public/assets/styles/admin/board/board.module.css';
import classnames from "classnames/bind"
import {getNotice} from "../../../store/notice/adminNotice";

const cx = classnames.bind(styles);


export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    const cookie = context.req && context.req.headers.cookie ? context.req.headers.cookie : '';
    client.defaults.headers.Cookie = cookie;

    context.store.dispatch(getNotice(context.params.contentId));
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
})

const ContentView = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    // const [newReply, setNewReply] = useState({
    //     replyContent: "",
    //     parentId: ""
    // })
    //
    // const [newReReply, setNewReReply] = useState({
    //     replyContent: "",
    //     parentId: ""
    // })
    //
    // const [updateReplyValue, setUpdateReplyValue] = useState({
    //     replyContent: "",
    //     parentId: ""
    // })
    //
    // const [showInput, setShowInput] = useState(null);
    // const [showUpdateInput, setShowUpdateInput] = useState(null);
    //
    const {view} = useSelector(({adminNotice, loading}) => ({
        view: adminNotice.view,
    }))
    //
    // useEffect(() => {
    //     setNewReReply({
    //         replyContent: "",
    //         parentId: ""
    //     })
    // }, [showInput])

    const handleFileDownload = useCallback(({fileId}) => {
        if (fileId != undefined) {
            dispatch(fileDownload(fileId))
        }
    }, [])


    // const changeAddReply = useCallback((e) => {
    //     const {name, value} = e.target;
    //
    //     setNewReply(newReply => ({
    //         ...newReply,
    //         [name]: value
    //     }))
    //
    // }, [])
    //
    // const changeAddReReply = useCallback((e) => {
    //     const {name, value} = e.target;
    //
    //     setNewReReply(newReply => ({
    //         ...newReply,
    //         [name]: value
    //     }))
    //
    // }, [])
    //
    // const changeUpdateReply = useCallback((e) => {
    //     const {name, value} = e.target;
    //
    //     setUpdateReplyValue(updateReplyValue => ({
    //         ...updateReplyValue,
    //         [name]: value
    //     }))
    //
    // }, [])
    //
    // const addNewReply = () => {
    //     const data = {
    //         ...newReply,
    //         contentId: view.content.contentId
    //     }
    //     dispatch(addReply(data));
    //
    //     setNewReply({
    //         replyContent: "",
    //         parentId: ""
    //     })
    // }
    //
    // const addNewReReply = ({parent, parentReply}) => {
    //     const data = {
    //         ...newReReply,
    //         parentId: parent,
    //         parentReplyId: parentReply,
    //         contentId: view.content.contentId
    //     }
    //     dispatch(addReply(data));
    //
    //     setNewReReply({
    //         replyContent: "",
    //         parentId: ""
    //     })
    //     setShowInput(null);
    // }
    //
    // const handleUpdateReply = (replyId) => {
    //     const data = {
    //         ...updateReplyValue,
    //         replyId: replyId
    //
    //     }
    //     dispatch(updateReply(data));
    //
    //     setUpdateReplyValue({
    //         replyContent: "",
    //         parentId: "",
    //         replyId: ""
    //     })
    //     setShowUpdateInput(null);
    // }
    //
    // const handleDeleteReply = (replyId) => {
    //     const data = {
    //         replyId: replyId,
    //         contentId: view.content.contentId
    //     }
    //
    //     dispatch(deleteReply(data))
    //
    // }

    return (
        view.notice != null && (
            <>
            <section className={cx("container","board_container")}>
                <h1 className={cx("top_title")}>글 내용</h1>
                <div className={cx("adm_container")}>
                    <div className={`${cx("member_info","box")} clfx `}>
                        <ul className={"clfx"}>
                            <li>
                                <span className={cx("title","icon_1")}>{"공지사항"}</span>
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
                                    <Link href={`/admin/notice/list`}><a className={cx("basic-btn01")}>목록</a></Link>
                                    <Link href={`/admin/notice/edit/${view.notice.noticeId}`}><a className={cx("basic-btn02")}>수정</a></Link>
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
                                                {view.notice.isNotice && (
                                                    <span className={cx("notice_icon")}>공지</span>
                                                )}
                                                {view.notice.title}
                                            </h1>
                                            <span className={cx("cate")}>{view.notice.categoryCodeName}</span>
                                            <span className={cx("date")}>작성일: {moment(view.notice.regDate).format("YYYY.MM.DD HH:MM")}</span>
                                            <span className={cx("view_cnt")}>조회수: {view.notice.viewCnt}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className={"ql-editor"} angerouslySetInnerHTML={{__html: view.notice.content}}/>
                                        </td>
                                    </tr>
                                    {
                                        view.files.length > 0 && (
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
                                                    href={`/admin/notice/${view.next.noticeId}`}><a>{view.next.title}</a></Link>
                                                <span
                                                    className={cx("date")}>{moment(view.next.regDate).format("YYYY.MM.DD")}</span>
                                            </li>
                                        )}
                                        {view.prev != null && (
                                            <li>
                                                <span className={cx("title")}>이전글</span>
                                                <Link
                                                    href={`/admin/notice/${view.prev.noticeId}`}><a>{view.prev.title}</a></Link>
                                                <span
                                                    className={cx("date")}>{moment(view.prev.regDate).format("YYYY.MM.DD")}</span>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                {/*{board.board.useComment && (*/}
                                {/*    <div className={cx("reply_box")}>*/}
                                {/*        <ReplyList list={reply.list} addNewReReply={addNewReReply}*/}
                                {/*                   changeAddReReply={changeAddReReply} newReReply={newReReply}*/}
                                {/*                   setShowInput={setShowInput} showInput={showInput}*/}
                                {/*                   handleUpdateReply={handleUpdateReply} showUpdateInput={showUpdateInput}*/}
                                {/*                   setShowUpdateInput={setShowUpdateInput} updateReplyValue={updateReplyValue}*/}
                                {/*                   changeUpdateReply={changeUpdateReply} handleDeleteReply={handleDeleteReply}*/}

                                {/*        />*/}
                                {/*        <div className={cx("add_box")}>*/}
                                {/*            <ReplyAdd addNewReply={addNewReply} changeAddReply={changeAddReply} newReply={newReply}/>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*)}*/}
                            </div>
                    </div>
                </div>
            </section>

            {/*<section className={cx("container")}>*/}
            {/*    <div className={cx("sub_container", "board_view")}>*/}
            {/*        <h1 className={cx("sub_top_title")}>{board.board.boardKrName}</h1>*/}
            {/*        <p className={cx("sub_top_txt")}>{board.board.boardDesc}</p>*/}

            {/*        <div className={cx("bbs_view")}>*/}
            {/*            <div className={cx("topTitleArea")}>*/}
            {/*                <h2>{view.content.title}</h2>*/}
            {/*                <span className={cx("date")}>{moment(view.content.regDate).format("YYYY.MM.DD HH:MM")}</span>*/}
            {/*                <span className={cx("date")}>조회수 {view.content.viewCnt}</span>*/}
            {/*            </div>*/}

            {/*            <div className={cx("bbs_viewCont")}>*/}
            {/*                <div dangerouslySetInnerHTML={{__html: view.content.content}}/>*/}
            {/*            </div>*/}
            {/*            {*/}
            {/*                board.board.useFile && view.files.length > 0 && (*/}
            {/*                    <div className={cx("bbs_attach_file")}>*/}
            {/*                        <Upload*/}
            {/*                            listType="picture-card"*/}
            {/*                            fileList={view.files.map((file) => {*/}
            {/*                                return {*/}
            {/*                                    uid: file.fileName,*/}
            {/*                                    name: file.fileOriginName,*/}
            {/*                                    status: 'done',*/}
            {/*                                    fileId: file.fileId*/}
            {/*                                }*/}
            {/*                            })}*/}
            {/*                            showUploadList={{*/}
            {/*                                showPreviewIcon: false,*/}
            {/*                                showRemoveIcon: false,*/}
            {/*                                showDownloadIcon: true*/}
            {/*                            }}*/}
            {/*                            onDownload={handleFileDownload}*/}
            {/*                        >*/}
            {/*                        </Upload>*/}
            {/*                    </div>*/}
            {/*                )*/}
            {/*            }*/}

            {/*            {board.board.useComment && (*/}
            {/*                <div className={cx("reply_box")}>*/}
            {/*                    <ReplyList list={reply.list} addNewReReply={addNewReReply}*/}
            {/*                               changeAddReReply={changeAddReReply} newReReply={newReReply}*/}
            {/*                               setShowInput={setShowInput} showInput={showInput}*/}
            {/*                               handleUpdateReply={handleUpdateReply} showUpdateInput={showUpdateInput}*/}
            {/*                               setShowUpdateInput={setShowUpdateInput} updateReplyValue={updateReplyValue}*/}
            {/*                               changeUpdateReply={changeUpdateReply} handleDeleteReply={handleDeleteReply}*/}

            {/*                    />*/}
            {/*                    <ReplyAdd addNewReply={addNewReply} changeAddReply={changeAddReply} newReply={newReply}/>*/}
            {/*                </div>*/}
            {/*            )}*/}

            {/*            <div className={cx("txt_c")}>*/}
            {/*                <Link href={`/admin/board/content/list?boardEnName=${router.query.boardName}`}><a className={cx("basic-btn04", "btn-black-bd")}>목록보기</a></Link>*/}
            {/*                <Link href={`/admin/board/content/${view.content.boardEnName}/edit/${view.content.contentId}`}><a className={cx("basic-btn04", "btn-black-bd")}>수정</a></Link>*/}
            {/*            </div>*/}

            {/*            <div className={cx("prev_next")}>*/}
            {/*                <ul>*/}
            {/*                    {view.next != null && (*/}
            {/*                        <li>*/}
            {/*                            <span className={cx("title")}>다음글</span>*/}
            {/*                            <Link*/}
            {/*                                href={`/board/${router.query.boardName}/view/${view.next.contentId}`}><a>{view.next.title}</a></Link>*/}
            {/*                            <span*/}
            {/*                                className={cx("date")}>{moment(view.next.regDate).format("YYYY.MM.DD")}</span>*/}
            {/*                        </li>*/}
            {/*                    )}*/}
            {/*                    {view.prev != null && (*/}
            {/*                        <li>*/}
            {/*                            <span className={cx("title")}>이전글</span>*/}
            {/*                            <Link*/}
            {/*                                href={`/board/${router.query.boardName}/view/${view.prev.contentId}`}><a>{view.prev.title}</a></Link>*/}
            {/*                            <span*/}
            {/*                                className={cx("date")}>{moment(view.prev.regDate).format("YYYY.MM.DD")}</span>*/}
            {/*                        </li>*/}
            {/*                    )}*/}
            {/*                </ul>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            </>
        )
    );
};

export default ContentView;