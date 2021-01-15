import React from 'react';
import moment from "moment";
import Link from "next/link";
import {EditOutlined} from "@ant-design/icons";

const NoticeListTable = ({list,cx}) => {
    return (
        <div className={cx("tb_style_1","board_list")}>
            <table>
                <colgroup>
                    <col style={{width: "4.6%"}}/>
                    <col/>
                    <col style={{width: "25.5%"}}/>
                    <col/>
                </colgroup>
                <thead>
                <tr>
                    <th scope="col">NO</th>
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
                        <tr key={item.noticeId}>
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
                                <Link href={`/admin/notice/${item.noticeId}`}><a>{item.title}</a></Link>
                            </td>
                            <td>
                                {item.categoryCodeName}
                            </td>
                            <td>
                                {moment(item.eventDate).format("YYYY-MM-DD HH:mm")}
                            </td>
                            <td>
                                {moment(item.applyStartDate).format("YYYY-MM-DD HH:mm")} ~
                                {moment(item.applyEndDate).format("YYYY-MM-DD HH:mm")}
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
};

export default NoticeListTable;
