import React from 'react';
import {Input} from "antd";

import styles from '../../public/assets/styles/board/board.module.css';
import classnames from "classnames/bind"
import {useSelector} from "react-redux";

const cx = classnames.bind(styles);

const ReplyItem = ({reply,addNewReReply,newReReply,changeAddReReply,showInput,setShowInput,changeUpdateReply,showUpdateInput,setShowUpdateInput,updateReply,updateReplyValue,handleUpdateReply,handleDeleteReply}) => {

    const {user} = useSelector(({auth}) => ({
        user:auth.user,
    }))

    const addReReply = () =>{
        const data = {
            parent:reply.parentId != null ? reply.parentId : reply.replyId,
            parentReply:reply.parentId != null ? reply.replyId : null
        }
        addNewReReply(data)
    }

    const updateBtnClick = () =>{
        setShowUpdateInput(reply.replyId);

        const data = {
            target:{
                name:"replyContent",
                value:reply.replyContent
            }
        }
        changeUpdateReply(data)

    }

    return (
        <>
            <div className={cx("reply_content_box", {rereply:reply.parentId != null})}>
                {reply.status != 'D' && (
                    <span className={cx("to_name")}>{reply.userName}</span>
                )}
                <div key={reply.replyId}>{reply.status == 'D' ? "삭제된 댓글 입니다." :
                    (
                        <>
                            {reply.toName != null && (
                                <span className={cx("to_name")}>{reply.toName}</span>
                            )}
                            <span className={cx("reply_content")}>{reply.replyContent}</span>
                        </>
                    )
                }</div>
                {reply.status != 'D' && (
                    <div className={cx("reply_content_btn_box")}>
                        {user.login && (
                            <button onClick={() =>{setShowInput(reply.replyId)}}>답글 쓰기</button>
                        )}
                        {user.login && user.info.userId == reply.replyWriter && (
                            <>
                                <button onClick={updateBtnClick}>수정</button>
                                <button onClick={() =>{handleDeleteReply(reply.replyId)}}>삭제</button>
                            </>
                        )}
                    </div>
                )}
            </div>
            {reply.replyId == showUpdateInput && (
                <div className={cx("edit_box")}>
                    <Input.TextArea name="replyContent" value={updateReplyValue.replyContent} onChange={changeUpdateReply}/>
                    <button className={cx("reply_edit_btn")} onClick={() =>{handleUpdateReply(reply.replyId)}}>저장</button>
                    <button className={cx("reply_cancel_btn")} onClick={() =>{setShowUpdateInput(null)}}>닫기</button>
                </div>
            )}

            {reply.replyId == showInput && (
                <div className={cx("edit_box")}>
                    <Input.TextArea name="replyContent" value={newReReply.replyContent} onChange={changeAddReReply}/>
                    <button className={cx("reply_edit_btn")} onClick={() =>{addReReply()}}>추가</button>
                    <button className={cx("reply_cancel_btn")} onClick={() =>{setShowInput(null)}}>닫기</button>
                </div>
            )}
        </>
    );
};


export default React.memo(ReplyItem);
