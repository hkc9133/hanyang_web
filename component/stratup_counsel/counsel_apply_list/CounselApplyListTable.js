import React from 'react';
import moment from 'moment';
const CounselApplyListTable = ({list,cx}) => {
    const setApplyStatus = (item) =>{
        switch (item){
            case "APPLY":
                return "신청 완료"
        }
    }
    return (
        list.map((item) =>{
            return (
                <li className={cx("question")}>
                    <ul>
                        <li className={cx("w_1")}>{item.rownum}</li>
                        <li className={cx("w_2")}>{moment(item.regDate).format("YYYY-MM-DD")}</li>
                        <li className={cx("w_3")}>{item.title}</li>
                        <li className={cx("w_4")}>{setApplyStatus(item.applyStatus)}</li>
                        <li className={cx("w_5")}>{}</li>
                    </ul>
                </li>
                )
        })
    );
};

export default CounselApplyListTable;
