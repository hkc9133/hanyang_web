import React, {useEffect, useState} from 'react';
import NaverLogin from 'react-naver-login';
import GoogleLogin from 'react-google-login';
import KaKaoLogin from 'react-kakao-login';
import {socialLogin, socialSignUp} from "../../store/auth/auth";
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
const cx = classnames.bind(styles);


const Login = () => {

    const dispatch = useDispatch();
    const router = useRouter()

    const [showJoinInfoModal, setShowJoinInfoModal] = useState(false);
    const [showJoinSuccessModal, setShowJoinSuccessModal] = useState(false);
    const {user, signup, loginLoading, signUpLoading, loading} = useSelector(({auth, loading}) => ({
        user: auth.user,
        signup: auth.signup,
        loginLoading: loading['auth/SOCIAL_LOGIN'],
        signUpLoading: loading['auth/SOCIAL_SIGNUP'],
        loading: loading
    }))

    useEffect(() => {
        initFacebookSdk();
    },[])

    const initFacebookSdk = () =>{
        return new Promise(resolve => {
            // wait for facebook sdk to initialize before starting the react app
            window.fbAsyncInit = function () {
                window.FB.init({
                    appId: 718848628746534,
                    cookie: true,
                    xfbml: true,
                    version: 'v9.0'
                });
            };
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) { return; }
                js = d.createElement(s); js.id = id;
                js.src = "https://connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        });
    }

    const handleSocialLogin = (id, email, name, type) => {
        dispatch(socialLogin({id, email, name, type}))
    };

    const handleSignUp = (role) => {
        const signUpInfo = {
            ...user.info,
            role: role
        }
        console.log(signUpInfo)
        dispatch(socialSignUp(signUpInfo))
    };

    const fbLoginClick = async () => {
        window.FB.login((response) => {
            window.FB.api('/me?fields=email', function(response) {
                if (response.status === 'connected') {
                    handleSocialLogin(response.id, response.email, response.name, 'facebook')
                } else {
                    // The person is not logged into your webpage or we are unable to tell.
                }
            });
        }, {scope: 'email,public_profile'});
    }

    useEffect(() => {
        if (!loginLoading && user.login == false && user.code == 401) {
            setShowJoinInfoModal(true);
        }
        else if(!loginLoading && user.login == true && user.code == 200){
            router.push('/')
        }

    }, [user, loginLoading])

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
                                    <li><input type="text" placeholder="아이디"/></li>
                                    <li><input type="password" placeholder="비밀번호"/></li>
                                </ul>
                                <div className={`${cx("login_info")} clfx`}>
                                    <ul className={"clfx"}>
                                        <li>
                                            <input type="checkbox" id="id_save"/>
                                            <label htmlFor="id_save">ID저장하기</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="auto_login"/>
                                            <label htmlFor="auto_login">자동로그인</label>
                                        </li>
                                    </ul>
                                    <div className={cx("f-r")}>
                                        <a href="#">아이디/비밀번호 찾기</a>
                                    </div>
                                </div>
                                <div className={cx("btn_area")}>
                                    <input type="submit" value="로그인" className={cx("btn_login")}/>
                                </div>
                                <div className={`${cx("login_join")} clfx`}>
                                    <p>멘토링, 공간예약을 이용하시려면 <br/>회원가입이 필요합니다.</p>
                                    <div className={cx("btn")}><Link href="/user/join"><a>회원가입</a></Link></div>
                                </div>
                                <div className={cx("sns_login")}>
                                    <ul className={"clfx"}>
                                        <li className={cx("icon_1")}>
                                            <NaverLogin
                                                clientId="X1l09clZ_fftNuaDbjIz"
                                                redirectUri={`${url}${clientPort != null && `:${clientPort}`}`}
                                                render={(props) =>
                                                    <a href="#" onClick={props.onClick}>
                                                        <span>네이버 <br/>로그인</span>
                                                    </a>
                                                }
                                                onSuccess={(result) => {
                                                    handleSocialLogin(result.id, result.email, result.name, "naver");
                                                }}
                                                onFailure={() => {
                                                    console.error();
                                                }}
                                            />
                                        </li>
                                        <li className={cx("icon_2")}>
                                            <a href="#" onClick={() => {fbLoginClick()}}>
                                                <span>페이스북 <br/>로그인</span>
                                            </a>
                                        </li>
                                        <li className={cx("icon_3")}>
                                            <KaKaoLogin

                                                token='e30e8790c8207f560e3b47879051adb8'
                                                onSuccess={result => {
                                                    handleSocialLogin(result.profile.id, result.profile.kakao_account.email, result.profile.kakao_account.profile.nicname, "kakao")
                                                }}
                                                onFail={(e) => {
                                                    console.log(e)
                                                }}
                                                getProfile={true}
                                                render={({ onClick }) => {
                                                    return (
                                                        <a
                                                            href="#"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                onClick();
                                                            }}
                                                        >
                                                            <span>카카오 <br/>로그인</span>
                                                        </a>

                                                    );
                                                }}/>
                                        </li>
                                        <li className={cx("icon_4")}>
                                            <GoogleLogin
                                                clientId='437495859189-616u9auj0k1161lsur2g1g0l88emj026.apps.googleusercontent.com'
                                                // redirectUri={`${url}:${port}${serverAddr}/test/sns_result`}
                                                // uxMode="redirect"
                                                // isSignedIn={true}
                                                render={(props) => (
                                                    <a href="#" onClick={props.onClick}>
                                                        <span>구글 <br/>로그인</span>
                                                    </a>
                                                )}
                                                onSuccess={result => {
                                                    console.log("== Google Login ==")
                                                    console.log(result);
                                                    console.log("== Google Login ==")
                                                    handleSocialLogin(result.profileObj.googleId, result.profileObj.email, result.profileObj.name, "google")
                                                }}
                                                onFailure={result => console.log(result)}
                                                cookiePolicy={'single_host_origin'}
                                            />
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
