import React, {useCallback, useEffect, useState} from 'react';
import wrapper from "../../../../store/configureStore";
import client from "../../../../lib/api/client";
import {addReply, deleteReply, getBoard, updateReply} from "../../../../store/board/board";
import {END} from "redux-saga";
import {useRouter} from "next/router";
import {getBoardContent} from "../../../../store/board/board";
import {useDispatch, useSelector} from "react-redux";

import Link from 'next/link'
import moment from 'moment';
import styles from '../../../../public/assets/styles/board/board.module.css';
import classnames from "classnames/bind"
import qs from 'query-string';
import {Input, Upload} from "antd";
import {fileDownload, fileDownload2} from "../../../../store/file/file";
import ReplyAdd from "../../../../component/board/ReplyAdd";
import ReplyList from "../../../../component/board/ReplyList";

const cx = classnames.bind(styles);

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    const cookie = context.req && context.req.headers.cookie ? context.req.headers.cookie : '';
    client.defaults.headers.Cookie = cookie;


    context.store.dispatch(getBoard(context.params.boardName));
    context.store.dispatch(getBoardContent(context.params.contentId));
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
})

const BoardView = () => {
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

    const {board,user, view, reply} = useSelector(({board,auth, loading}) => ({
        user:auth.user,
        board: board.board,
        view: board.view,
        reply: board.reply
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
    }

    const handleDeleteReply = (replyId) => {
        const data = {
            replyId: replyId,
            contentId: view.content.contentId
        }

        dispatch(deleteReply(data))

    }

    return (
        view.content != null && (
            <section className={cx("container")}>
                <div className={cx("sub_container", "board_view")}>
                    <h1 className={cx("sub_top_title")}>{board.board.boardKrName}</h1>
                    <p className={cx("sub_top_txt")}>{board.board.boardDesc}</p>

                    <div className={cx("bbs_view")}>
                        <div className={cx("topTitleArea")}>
                            <h2>{view.content.title}</h2>
                            <span className={cx("date")}>{moment(view.content.regDate).format("YYYY.MM.DD HH:MM")}</span>
                        </div>

                        <div className={cx("bbs_viewCont")}>
                            <div dangerouslySetInnerHTML={{__html: view.content.content}}/>
                        </div>
                        {
                            board.board.useFile && view.files.length > 0 && (
                                <div className={cx("bbs_attach_file")}>
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
                                </div>
                            )
                        }

                        {board.board.useComment && (
                            <div className={cx("reply_box")}>
                                <ReplyList list={reply.list} addNewReReply={addNewReReply}
                                           changeAddReReply={changeAddReReply} newReReply={newReReply}
                                           setShowInput={setShowInput} showInput={showInput}
                                           handleUpdateReply={handleUpdateReply} showUpdateInput={showUpdateInput}
                                           setShowUpdateInput={setShowUpdateInput} updateReplyValue={updateReplyValue}
                                           changeUpdateReply={changeUpdateReply} handleDeleteReply={handleDeleteReply}

                                />
                                {user.login ? (
                                    <div className={cx("add_box")}>
                                        <ReplyAdd addNewReply={addNewReply} changeAddReply={changeAddReply} newReply={newReply}/>
                                    </div>
                                ):(
                                    <div className={"txt_c"}>
                                        <Link href={'/user/login'}><a>로그인 후 이용...</a></Link>
                                    </div>
                                )}
                            </div>
                        )}

                        <div className={cx("txt_c")}>
                            <Link href={`/board/${board.board.boardEnName}/list?${qs.stringify({
                                ...router.query,
                                contentId: null
                            })}`}><a className={cx("basic-btn04", "btn-black-bd")}>목록보기</a></Link>
                        </div>

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
                    </div>
                </div>
            </section>
        )
    );
};

export default BoardView;
