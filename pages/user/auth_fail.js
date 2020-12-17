import React, {useEffect} from 'react';
import Modal from "../../component/common/Modal";
import {useRouter} from "next/router";


const AuthFail =() => {
    const router = useRouter();
    useEffect(() => {
        // alert("권한 없음")

    },[])
    return (
        <Modal visible={true}  closable={true} maskClosable={true} onClose={() => {router.back()}}>권한 없음</Modal>
    );
};

export default AuthFail;
