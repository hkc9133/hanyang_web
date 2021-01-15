import React, {useEffect} from 'react';
import Modal from "../../component/common/Modal";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";


const AuthFail =() => {
    const router = useRouter();

    const {loading} = useSelector(({auth, loading}) => ({
        user: auth.user,
        loading: loading
    }))

    useEffect(() => {


    },[])

    if(loading['loading']){
        return null;
    }
    return (
        <Modal visible={true}  closable={true} maskClosable={true} onClose={() => {router.push("/")}}>권한 없음</Modal>
    );
};

export default AuthFail;
