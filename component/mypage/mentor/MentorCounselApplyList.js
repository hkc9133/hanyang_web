import React, {createRef, useRef, useState} from 'react';
import Link from "next/link";
import moment from "moment";
import {getCounselStatus} from "../../common/util/StatusUtil";
import {useSelector} from "react-redux";

const MentorCounselApplyList = (props) => {
    return (
        <>
            {
                props.list.map((item) =>{
                    return (
                        <MentorCounselApplyListItem key={item.formId} item={item} {...props}/>
                    )
                })
            }
        </>

    );
};

const MentorCounselApplyListItem = React.memo(({item,handleShowAnswer,showAnswer,cx}) =>{

    const {user,counselApply,loading} = useSelector(({auth,mentoring, loading}) => ({
        user: auth.user,
        counselApply:mentoring.getCounselApply.counselApply,
        loading:loading['mentoring/GET_COUNSEL_APPLY']
    }))



    return (
        <ul>
            <Link href={`/mypage/mentor/apply_manage/${item.formId}`}>
                <a>
                    <li  className={cx("question")}>
                        <ul>
                            <li className={cx("w_1")}>{item.rownum}</li>
                            <li className={cx("w_2")}>{moment(item.regDate).format("YYYY.MM.DD")}</li>
                            <li className={cx("w_3")}>{item.title}</li>
                            <li className={cx("w_4")}>{getCounselStatus(item.applyStatus)}</li>
                            <li className={cx("w_5")}>{item.menteeName}</li>
                        </ul>
                    </li>
                </a>
            </Link>
        </ul>

    )
})
export default MentorCounselApplyList;
