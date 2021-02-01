import React from 'react';
import Link from "next/link";
import {getRentalType} from "../../common/util/StatusUtil";
import Pagination from "../../common/Pagination";
import moment from "moment";
import ListTypeItem from "./ListTypeItem";

const ListType = ({cx, scheduleList,pageChange,manageItem,setManageItem,saveStatus}) => {

    return (
        <>
        <div className={cx("tb_style_1","reservation_info_tb")}>
            <table>
                <colgroup>
                    <col style={{width: "5.6%"}}/>
                    <col style={{width: "11.5%"}}/>
                    <col style={{width: "14.6%"}}/>
                    <col style={{width: "8%"}}/>
                    <col style={{width: "7%"}}/>
                    <col/>
                    <col style={{width: "7%"}}/>
                    <col style={{width: "7%"}}/>
                    <col style={{width: "14%"}}/>
                </colgroup>
                <thead>
                <tr>
                    <th scope="col">NO</th>
                    <th scope="col">예약번호</th>
                    <th scope="col">예약 정보</th>
                    <th scope="col">예약자 정보</th>
                    <th scope="col">진행 상태</th>
                    <th scope="col">사유</th>
                    <th scope="col">이용일</th>
                    <th scope="col">신청일</th>
                    <th scope="col">관리</th>
                </tr>
                </thead>
                <tbody>
                {scheduleList.list.map((schedule) =>
                    (
                        <ListTypeItem key={schedule.scheduleId} schedule={schedule} manageItem={manageItem} setManageItem={setManageItem} saveStatus={saveStatus}/>
                    )
                )}
                </tbody>
            </table>
        </div>
            {scheduleList.page != null &&(
                <Pagination
                    totalRecords={scheduleList.page.totalCount}
                    pageLimit={scheduleList.page.pageSize}
                    pageNeighbours={1}
                    currentPage={scheduleList.page.pageNo}
                    onPageChanged={pageChange}
                />
            )}
        </>
    );
};

export default ListType;
