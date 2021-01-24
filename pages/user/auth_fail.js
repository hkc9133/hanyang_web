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
        } else if(router.pathname.startsWith("/mypage/mentee") || router.pathname.startsWith("/startup_counsel/counsel_apply")) {
            setMsg("학생 권한이 아닙니다")
        }else if(router.pathname.startsWith("/mypage/mentor") || router.pathname.startsWith("/startup_counsel/mentor_apply")) {
            setMsg("멘토 권한이 아닙니다")
        }else if(router.pathname.startsWith("/introduce/space_reservation")){
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
