import React from 'react';
import {Input} from "antd";
import styles from '../../public/assets/styles/board/board.module.css';
import classnames from "classnames/bind"

const cx = classnames.bind(styles);
const ReplyAdd = ({addNewReply,changeAddReply,newReply}) => {
    return (
        <>
            <Input.TextArea name="replyContent" value={newReply.replyContent} onChange={changeAddReply}/>
            <button className={cx("reply_add_btn")} onClick={addNewReply}>등록</button>
        </>
    );
};

export default React.memo(ReplyAdd);
