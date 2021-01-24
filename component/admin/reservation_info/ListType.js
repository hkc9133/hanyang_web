import React from 'react';
import Link from "next/link";

const ListType = ({cx}) => {
    return (
        <div className={cx("tb_style_1")}>
            <table>
                <colgroup>
                    <col style={{width: "8.6%"}}/>
                    <col style={{width: "15.5%"}}/>
                    <col style={{width: "14.6%"}}/>
                    <col style={{width: "13.6%"}}/>
                    <col style={{width: "17.2%"}}/>
                    <col/>
                    <col/>
                    <col/>
                </colgroup>
                <thead>
                <tr>
                    <th scope="col">NO</th>
                    <th scope="col">예약번호</th>
                    <th scope="col">예약 정보</th>
                    <th scope="col">예약자 정보</th>
                    <th scope="col">진행 상태</th>
                    <th scope="col">사유</th>
                    <th scope="col">등록 날짜</th>
                    <th scope="col">관리</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        a
                    </td>
                    <td>
                        a
                    </td>
                    <td>
                        a
                    </td>
                    <td>
                        a
                    </td>
                    <td>
                        a
                    </td>
                    <td>
                        a
                    </td>
                    <td>
                        a
                    </td>
                    <td>
                        a
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ListType;
