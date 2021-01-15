import React from 'react';
import moment from "moment";
import Link from 'next/link';

const MentorListTable = ({list,cx}) => {
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
                <th scope="col">NO</th>
                <th scope="col">아이디</th>
                <th scope="col">이름</th>
                <th scope="col">소속</th>
                <th scope="col">핸드폰번호</th>
                <th scope="col">E-MAIL</th>
                <th scope="col">승인 상태</th>
                <th scope="col">가입일</th>
            </tr>
            </thead>
            <tbody>
            {
                list.map((item)=>(
                    <MentorListItem key={item.mentorId} item={item}/>

                ))
            }
            </tbody>
        </table>
    );
};

const MentorListItem = ({item}) =>{
    return(
        <tr key={item.rownum}>
            <td>{item.rownum}</td>
            <td>{item.userId}</td>
            <td><Link href={`/admin/mentor/detail/${item.mentorId}`}><a>{item.mentorName}</a></Link></td>
            <td>{item.mentorCompany}</td>
            <td>{item.mentorPhoneNumber}</td>
            <td>{item.mentorEmail}</td>
            <td>{item.mentorStatus == "ACCEPT" ? "승인"  : "미승인"}</td>
            <td>{moment(item.regDate).format("YYYY년 MM월 DD일")}</td>
        </tr>
    )

}
export default MentorListTable;
