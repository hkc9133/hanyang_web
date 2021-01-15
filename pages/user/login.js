import React, {useEffect, useState} from 'react';
import {initializeForm, normalLogin, socialLogin, socialSignUp} from "../../store/auth/auth";
import {useDispatch, useSelector} from "react-redux";
import { useRouter } from 'next/router'
import Modal from "../../component/common/Modal";
import PageNavigation from "../../component/layout/PageNavigation";
import SignUpInfo from "../../component/auth/SignUpInfo";
import Link from "next/link";
// import {initFacebookSdk} from "../../component/auth/initFacebookSdk";

import {url, clientPort, port, serverAddr} from '../../lib/api/client';

import Image from 'next/image'

import styles from '../../public/assets/styles/user/user.module.css';
import classnames from "classnames/bind"
import FaceBookLoginButton from "../../component/auth/FaceBookLoginButton";
import KakaoLoginButton from "../../component/auth/KakaoLoinButton";
import GoogleLoginButton from "../../component/auth/GoogleLoginButton";
import NaverLoginButton from "../../component/auth/NaverLoginButton";
const cx = classnames.bind(styles);


const Login = () => {

    const dispatch = useDispatch();
    const router = useRouter()

    const [showJoinInfoModal, setShowJoinInfoModal] = useState(false);
    const [showJoinSuccessModal, setShowJoinSuccessModal] = useState(false);
    const [loginInfo,setLoginInfo] = useState({
        userId:"",
        userPassword:""
    })
    const {user,loginCode, signup, loginLoading, signUpLoading,normalLoginLoading, loading} = useSelector(({auth, loading}) => ({
        user: auth.user,
        loginCode:auth.loginCode.code,
        signup: auth.signup,
        loginLoading: loading['auth/SOCIAL_LOGIN'],
        normalLoginLoading: loading['auth/NORMAL_LOGIN'],
        signUpLoading: loading['auth/SOCIAL_SIGNUP'],
        loading: loading
    }))

    useEffect(() => {
    },[])

    const handleChangeLoginInfo = (e) => {
        const {name, value} = e.target
        setLoginInfo({
            ...loginInfo,
            [name]:value
        })
    };

    const handleSocialLogin = (id, email, name, type) => {
        dispatch(socialLogin({id, email, name, type}))
    };

    const handleLogin = () => {
        dispatch(normalLogin(loginInfo))
    };

    const handleSignUp = (role) => {
        const signUpInfo = {
            ...user.info,
            role: role
        }
        dispatch(socialSignUp(signUpInfo))
    };


    useEffect(() => {
        console.log(loginCode)
        if (!loginLoading && user.login == false && loginCode == 401) {
            dispatch(initializeForm('loginCode'))
            router.push('/user/join')
            // setShowJoinInfoModal(true);
        }
        else if(!loginLoading && user.login == true && loginCode == 200){
            router.push('/')
        }else if(!normalLoginLoading && user.login == false && loginCode == 400){
            alert("에러 발생")
        }
    }, [user.login,loginCode,loginLoading, normalLoginLoading])

    useEffect(() => {
        if (!signUpLoading && signup.result == true && signup.error == null) {
            console.log("가입 성공")
            router.push('/')
        }
    }, [signup, signUpLoading])

    return (
        <>
            {/*{user.login == true ? null : (*/}
                <>
                    <PageNavigation/>
                    <section className={cx("container")}>
                        <div className={`${cx("login_wrap")} clfx`}>
                            <h1>로그인</h1>
                            <div className={cx("loginArea")}>
                                <p>한양인으로 로그인 하려면 아이디/비번을 입력해주세요</p>
                                <ul className={cx("login_form")}>
                                    <li><input type="text" name="userId" placeholder="아이디" onChange={handleChangeLoginInfo}/></li>
                                    <li><input type="password" name="userPassword" placeholder="비밀번호" onChange={handleChangeLoginInfo}/></li>
                                </ul>
                                <div className={`${cx("login_info")} clfx`}>
                                    {/*<ul className={"clfx"}>*/}
                                    {/*    <li>*/}
                                    {/*        <input type="checkbox" id="id_save"/>*/}
                                    {/*        <label htmlFor="id_save">ID저장하기</label>*/}
                                    {/*    </li>*/}
                                    {/*    <li>*/}
                                    {/*        <input type="checkbox" id="auto_login"/>*/}
                                    {/*        <label htmlFor="auto_login">자동로그인</label>*/}
                                    {/*    </li>*/}
                                    {/*</ul>*/}
                                    {/*<div className={cx("f-r")}>*/}
                                    {/*    <a href="#">아이디/비밀번호 찾기</a>*/}
                                    {/*</div>*/}
                                </div>
                                <div className={cx("btn_area")}>
                                    <input type="button" onClick={handleLogin} value="로그인" className={cx("btn_login")}/>
                                </div>
                                <div className={`${cx("login_join")} clfx`}>
                                    <p>멘토링, 공간예약을 이용하시려면 <br/>회원가입이 필요합니다.</p>
                                    <div className={cx("btn")}><Link href="/user/join"><a>회원가입</a></Link></div>
                                </div>
                                <div className={cx("sns_login")}>
                                    <ul className={"clfx"}>
                                        <li className={cx("icon_1")}>
                                            <NaverLoginButton handleSocialLogin={handleSocialLogin}/>
                                        </li>
                                        <li className={cx("icon_2")}>
                                            <FaceBookLoginButton handleSocialLogin={handleSocialLogin}/>
                                        </li>
                                        <li className={cx("icon_3")}>
                                            <KakaoLoginButton handleSocialLogin={handleSocialLogin}/>
                                        </li>
                                        <li className={cx("icon_4")}>
                                            <GoogleLoginButton handleSocialLogin={handleSocialLogin}/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={cx("login_img")}><Image src="/assets/image/login_bg.jpg" width={420} height={462} alt="login_bg"/></div>
                        </div>
                    </section>
                    {showJoinInfoModal && <Modal visible={showJoinInfoModal} closable={true} maskClosable={true}
                                                 onClose={() => setShowJoinInfoModal(false)}>
                        <SignUpInfo handleSignUp={handleSignUp}/>
                        {showJoinSuccessModal && <Modal visible={showJoinSuccessModal} closable={true} maskClosable={true} onClose={() => {setShowJoinSuccessModal(false);setShowJoinInfoModal(false);router.push('/')}}><div>가입 완료</div></Modal>}
                    </Modal>
                    }
                </>
            {/*)}*/}

        </>
    );
};

export default Login;
