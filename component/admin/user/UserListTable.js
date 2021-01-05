import React from 'react';
import moment from 'moment';
const UserListTable = ({cx,list}) => {

    const setUserRole = (role) =>{
        switch (role){
            case 'ROLE_USER':
                return "일반(미승인)"
            case 'ROLE_ST':
                return "학생"
            case 'ROLE_TC':
                return "교직"
            case 'ROLE_MT':
                return "멘토"
            case 'ROLE_ADMIN':
                return "관리자"
        }
    }
    const setType = (type) =>{
        switch (type){
            case 'KAKAO':
                return "kakao_icon"
            case 'GOOGLE':
                return "google_icon"
            case 'FACEBOOK':
                return "facebook_icon"
            case 'NAVER':
                return "naver_icon"
            case 'HANYANG':
                return "hanyang_icon"
        }
    }
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
                <th scope="col">닉네임</th>
                <th scope="col">E-MAIL</th>
                {/*<th scope="col">메일인증</th>*/}
                <th scope="col">상태</th>
                <th scope="col">최근접속일</th>
                <th scope="col">권한</th>
                <th scope="col">가입일</th>
            </tr>
            </thead>
            <tbody>
            {
                list.map((item)=>(
                    <tr>
                        <td>{item.rownum}</td>
                        <td>
                            <span className={cx(setType(item.type), "id_name")}>{item.userId}</span>
                        </td>
                        <td>{item.userName}</td>
                        <td>{item.userEmail}</td>
                        <td className={cx("c-blue")}>{item.status}</td>
                        <td>{moment(item.lastLogin).format("YYYY-MM-DD hh:mm:ss")}</td>
                        <td>{setUserRole(item.role)}</td>
                        <td>{moment(item.regDate).format("YYYY-MM-DD  hh:mm:ss")}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
};

export default UserListTable;
