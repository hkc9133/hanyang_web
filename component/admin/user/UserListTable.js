import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import {getUserRole, getUserType} from "../../common/util/StatusUtil";
const UserListTable = ({cx,list}) => {

    return (
        <table>
            <colgroup>
                <col style={{width:"8.6%"}}/>
                <col style={{width:"15.5%"}}/>
                <col style={{width:"14.6%"}}/>
                {/*<col style={{width:"13.7%"}}/>*/}
                <col style={{width:"13.6%"}}/>
                <col style={{width:"17.2%"}}/>
                <col/>
            </colgroup>
            <thead>
            <tr>
                <th scope="col">번호</th>
                <th scope="col">아이디</th>
                <th scope="col">이름</th>
                <th scope="col">E-MAIL</th>
                {/*<th scope="col">메일인증</th>*/}
                {/*<th scope="col">상태</th>*/}
                {/*<th scope="col">최근접속일</th>*/}
                <th scope="col">권한</th>
                <th scope="col">가입일</th>
            </tr>
            </thead>
            <tbody>
            {
                list.map((item)=>(
                    <tr key={item.rownum}>
                        <td>{item.rownum}</td>
                        <td>
                            <Link href={`/admin/users/edit/${item.userId}`}><a><span className={cx(getUserType(item.type), "id_name")}>{item.userId}</span></a></Link>
                        </td>
                        <td>{item.userName}</td>
                        <td>{item.userEmail}</td>
                        {/*<td className={cx("c-blue")}>{item.status}</td>*/}
                        {/*<td>{moment(item.lastLogin).format("YYYY-MM-DD hh:mm:ss")}</td>*/}
                        <td>{getUserRole(item.role)}</td>
                        <td>{moment(item.regDate).format("YYYY-MM-DD  hh:mm:ss")}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
};

export default UserListTable;
