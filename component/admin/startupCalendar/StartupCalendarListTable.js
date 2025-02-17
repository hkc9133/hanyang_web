import React from 'react';
import moment from "moment";
import Link from "next/link";
import {EditOutlined} from "@ant-design/icons";

const StartupCalendarListTable = ({list,cx}) => {
    return (
        <div className={cx("tb_style_1","popup_list")}>
            <table>
                <colgroup>
                    <col style={{width: "4.6%"}}/>
                    <col/>
                    <col style={{width: "25.5%"}}/>
                    <col/>
                </colgroup>
                <thead>
                <tr>
                    <th scope="col">번호</th>
                    <th scope="col">상태</th>
                    <th scope="col">제목</th>
                    <th scope="col">분류</th>
                    <th scope="col">일시</th>
                    <th scope="col">신청 기간</th>
                </tr>
                </thead>
                <tbody>
                {list.map((item) => {
                    return (
                        <tr key={item.startupCalendarId}>
                            <td>
                                {item.rownum}
                            </td>
                            <td>
                                <span className={cx("category",{red:item.progressStatus == "OPEN"})}>{item.progressStatus == "OPEN" ? "진행중" : "마감"}</span>
                                {
                                    new Date(item.eventDate) < new Date() && <span>(지난 일정)</span>
                                }
                            </td>
                            <td>
                                <Link href={`/admin/startupCalendar/${item.startupCalendarId}`}><a>{item.title}</a></Link>
                            </td>
                            <td>
                                {item.categoryCodeName}
                            </td>
                            <td>

                                {item.eventDate != null && moment(item.eventDate).format("YYYY-MM-DD HH:mm")}
                            </td>
                            <td>
                                {item.applyStartDate != null && moment(item.applyStartDate).format("YYYY-MM-DD HH:mm")} ~
                                {item.applyEndDate != null && moment(item.applyEndDate).format("YYYY-MM-DD HH:mm")}
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
};

export default StartupCalendarListTable;
