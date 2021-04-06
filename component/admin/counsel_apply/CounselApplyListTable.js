import React from 'react';
import Link from "next/link";
import moment from "moment";
import {getCounselStatus} from '../../common/util/StatusUtil'
const MyComponent = ({list,cx}) => {
    return (
        <table>
            <colgroup>
                <col style={{width:"8.6%"}}/>
                <col style={{width:"8.5%"}}/>
                <col style={{width:"10.6%"}}/>
                <col style={{width:"16.7%"}}/>
                <col style={{width:"13.6%"}}/>
                <col style={{width:"17.2%"}}/>
                <col/>
                <col/>
            </colgroup>
            <thead>
            <tr>
                <th scope="col">번호</th>
                <th scope="col">아이디</th>
                <th scope="col">이름</th>
                <th scope="col">상담 제목</th>
                <th scope="col">핸드폰번호</th>
                <th scope="col">E-MAIL</th>
                <th scope="col">승인 상태</th>
                <th scope="col">신청일</th>
            </tr>
            </thead>
            <tbody>
            {
                list.map((item)=>(
                    <CounselApplyListItem key={item.formId} item={item}/>

                ))
            }
            </tbody>
        </table>
    );
};

const CounselApplyListItem = ({item}) =>{
    return(
        <tr key={item.rownum}>
            <td>{item.rownum}</td>
            <td>{item.userId}</td>
            <td>{item.menteeName}</td>
            <td><Link href={`/admin/counsel_apply/detail/${item.formId}`}><a>{item.title}</a></Link></td>
            <td>{item.menteePhoneNumber}</td>
            <td>{item.menteeEmail}</td>
            <td>{getCounselStatus(item.applyStatus)}</td>
            <td>{moment(item.regDate).format("YYYY년 MM월 DD일 HH:MM")}</td>
        </tr>
    )
}

export default MyComponent;
