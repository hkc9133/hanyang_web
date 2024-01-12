import React, {useEffect, useState} from 'react';
import Modal from "../../component/common/Modal";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";


const AuthFail =() => {
    const router = useRouter();

    const {user,loading} = useSelector(({auth, loading}) => ({
        user: auth.user,
        loading: loading
    }))
    const [msg, setMsg] = useState("권한이 없습니다")

    useEffect(() => {
        if (router.pathname.startsWith("/admin")) {
            setMsg("권한이 없습니다")
        } else if(router.pathname.startsWith("/startup_counsel/counsel_apply") || router.pathname.startsWith("/startup_counsel/student_report")) {
            setMsg("창업상담신청은 로그인 후 이용하실 수 있습니다.")
        }else if(router.pathname.startsWith("/mypage/mentor")) {
            setMsg("멘토 권한이 아닙니다")
        }
        // else if(router.pathname.startsWith("/startup_counsel/mentor_apply")){
        //     setMsg(
        //     <div style={{textAlign:'center'}}>
        //         <h2>맨토신청은 당해년 05월 01일 부터 05월 31일까지 진행 합니다.</h2>
        //         <p>멘토신청을 원하시면 멘토로 회원가입 및 인증 후 신청 가능 합니다.</p>
        //     </div>
        //     )
        //     // setMsg("맨토신청은 당해년 05월 01일 부터 05월 31일까지 진행 합니다. \n" + "멘토신청을 원하시면 멘토로 회원가입 및 인증 후 신청 가능 합니다.")
        // }
        else if(router.pathname.startsWith("/introduce/space_reservation")){
            setMsg("로그인 후 이용 가능합니다")
        }

    },[user])

    if(loading['loading']){
        return null;
    }
    return (
        <Modal visible={true}  closable={true} maskClosable={true} onClose={() => {router.push("/")}}>{msg}</Modal>
    );
};

export default AuthFail;
