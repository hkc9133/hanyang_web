import React, {useState} from 'react';
import {Input} from "antd";
import ReplyItem from "./ReplyItem";

const ReplyList = (props) => {

    return (
        <div>
            {props.list.map((reply) =>
                <>
                    <ReplyItem reply={reply}{...props}/>
                </>
            )}
        </div>
    );
};

export default React.memo(ReplyList);
