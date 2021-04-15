import React, {useCallback, useEffect, useState} from 'react';
import wrapper from "../../../../store/configureStore";
import client from "../../../../lib/api/client";
import {addReply, deleteReply, getBoard, updateReply} from "../../../../store/board/board";
import {END} from "redux-saga";
import {useRouter} from "next/router";
import {getBoardContent, deleteBoardContent, initialize} from "../../../../store/board/board";
import {useDispatch, useSelector} from "react-redux";
import Link from 'next/link'
import moment from 'moment';
import styles from '../../../../public/assets/styles/board/board.module.css';
import classnames from "classnames/bind"
import qs from 'query-string';
import {Input, Modal, Upload} from "antd";
import {fileDownload, fileDownload2} from "../../../../store/file/file";
import ReplyAdd from "../../../../component/board/ReplyAdd";
import ReplyList from "../../../../component/board/ReplyList";
import Head from "next/head";
import PageNavigation from "../../../../component/layout/PageNavigation";

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

    const [show, setShow] = useState(false);
    const [showInput, setShowInput] = useState(null);
    const [showUpdateInput, setShowUpdateInput] = useState(null);
    const [showRemoveModal, setShowRemoveModal] = useState(false);

    const {board, user, view, reply, deleteResult} = useSelector(({board, auth, loading}) => ({
        user: auth.user,
        board: board.board,
        view: board.view,
        reply: board.reply,
        deleteResult: board.delete
    }))

    useEffect(() => {
        if (user.login != null) {
            if (board != null && user.login && view.content != null) {

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
            } else if (board != null && !user.login && view.content != null) {
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

    useEffect(() => {

    }, [])

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

        if(newReply.replyContent != null && newReply.replyContent != ""){
            const data = {
                ...newReply,
                contentId: view.content.contentId
            }
            dispatch(addReply(data));

            setNewReply({
                replyContent: "",
                parentId: ""
            })
        }else{
            Modal.warning({
                title:"내용을 입력해주세요"
            })
        }
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
            replyId: replyId,
            contentId: view.content.contentId

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

    return (
        show && (
            <>
                <Head>
                    <title>한양대학교 창업지원단 -{board.board.boardKrName}</title>
                </Head>
                <PageNavigation/>
                <section className={cx("container")}>
                    <div className={cx("sub_container", "board_view")}>
                        <h1 className={cx("sub_top_title")}>{board.board.boardKrName}</h1>
                        <p className={cx("sub_top_txt")}>{board.board.boardDesc}</p>

                        <div className={cx("bbs_view")}>
                            <div className={cx("topTitleArea")}>
                                {/*{*/}
                                {/*    user.info != null && (user.role == 'ROLE_ADMIN' || user.info.userId != view.content.writerId) &&(*/}
                                {/*        <button className={cx("basic-btn05","btn-red-bd")} onClick={() =>{setShowRemoveModal(true)}}>삭제</button>*/}
                                {/*    )*/}
                                {/*}*/}
                                <h2>{view.content.title}</h2>
                                <span
                                    className={cx("date")}>{moment(view.content.regDate).format("YYYY.MM.DD HH:MM")}</span>
                                <span>작성자 : {view.content.userName}</span>
                            </div>

                            <div className={cx("bbs_viewCont")}>
                                <div className={"ck-content"} dangerouslySetInnerHTML={{__html: view.content.content}}/>
                            </div>
                            {
                                board.board.useFile && view.files.length > 0 && (
                                    <div className={cx("bbs_attach_file")}>
                                        <Upload
                                            listType="picture"
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
                                               setShowUpdateInput={setShowUpdateInput}
                                               updateReplyValue={updateReplyValue}
                                               changeUpdateReply={changeUpdateReply}
                                               handleDeleteReply={handleDeleteReply}

                                    />
                                    {user.login ? (
                                        <div className={cx("add_box")}>
                                            <ReplyAdd addNewReply={addNewReply} changeAddReply={changeAddReply}
                                                      newReply={newReply}/>
                                        </div>
                                    ) : (
                                        <div className={"txt_c"}>
                                            <Link href={'/user/login'}><a>로그인 후 이용...</a></Link>
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className={cx("txt_c")}>
                                {board.board.boardEnName == "Issue" ?
                                    <Link href={"/"}>
                                    <a className={cx("basic-btn04", "btn-black-bd")}>뒤로가기</a>
                                    </Link>
                                    :
                                    <Link href={`/board/${board.board.boardEnName}/list?${qs.stringify({
                                    ...router.query,
                                    contentId: null
                                })}`}>
                                    <a className={cx("basic-btn04", "btn-black-bd")}>목록보기</a>
                                </Link>}
                                {/*<Link href={`/board/${board.board.boardEnName}/list?${qs.stringify({*/}
                                {/*    ...router.query,*/}
                                {/*    contentId: null*/}
                                {/*})}`}>*/}
                                {/*    <a className={cx("basic-btn04", "btn-black-bd")}>목록보기</a>*/}
                                {/*</Link>*/}
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
