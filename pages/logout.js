import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {logout} from "../store/auth/auth";

const Logout = () => {

    const dispatch = useDispatch();
    const router = useRouter()
    // useEffect(() =>{
    //
    //
    // },[])
    //
    //
    // const [isLogin, setIsLogin] = useState(false);
    // const [showMenu, setShowMenu] = useState(false);
    // const [currentMenuItem, setCurrentMenuItem] = useState(null);
    // const [mypage, setMypage] = useState("");
    // const totalMenu = React.createRef();
    //
    //
    // const {user,logoutResult,signUpLoading} = useSelector(({auth, loading}) => ({
    //     user: auth.user,
    //     logoutResult:auth.logout.result,
    //     signUpLoading: loading['auth/LOGOUT'],
    // }))

    useEffect(() =>{
        router.push("/")
        dispatch(logout())
    },[])


    return (
        <div>

        </div>
    );
};

export default Logout;
