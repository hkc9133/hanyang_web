import React from 'react';
import Link from "next/link";
import moment from "moment";
import {getRentalType} from "../common/util/StatusUtil";

const ScheduleList = ({cx,list,page}) => {
    return (
        <>
            <div className={cx("bbs_tb_list")}>
                <table>
                    <colgroup>
                        <col style={{width:"30%"}}/>
                        <col style={{width:"10%"}}/>
                        <col style={{width:"30%"}}/>
                        <col style={{width:"10%"}}/>
                    </colgroup>
                    <thead>
                    <tr>
                        <th scope="col">예약자정보</th>
                        <th scope="col">예약자명</th>
                        <th scope="col">대관일시</th>
                        <th scope="col">예약상태</th>
                        <th scope="col">신청일</th>
                    </tr>
                    </thead>
                    <tbody>
                    {list.map((item) =>(
                        <ScheduleListItem key={item.scheduleId} item={item}/>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};


const ScheduleListItem = ({item}) =>{
    return (
        <tr>
            <td><Link href={`/introduce/space_reservation/${item.scheduleId}`}><a>{`${item.placeName} ${item.roomName}`}</a></Link></td>
            <td>{item.userName}</td>
            <td>{`${moment(item.rentalDate).format("YYYY년 MM월 DD일").toString()}`}
                <br/>
                {`${item.rentalStartTime}~${item.rentalEndTime}`}
            </td>
            <td>{getRentalType(item.status)}</td>
            <td>{moment(item.regDate).format("YYYY년 MM월 DD일").toString()}</td>
        </tr>
    )
}



export default ScheduleList;
