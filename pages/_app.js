
// import "@babel/polyfill";
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector, useStore} from "react-redux";
import wrapper from '../store/configureStore';
import {useRouter} from "next/router";
import client, {baseUrl, port} from '../lib/api/client'
import {registerLocale} from "react-datepicker";
import ko from 'date-fns/locale/ko';
import "react-big-calendar/lib/css/react-big-calendar.css";
registerLocale('ko', ko)
import AuthFail from "./user/auth_fail";
import AdminHeader from "../component/layout/AdminHeader";
import Footer from "../component/layout/Footer";
import Header from "../component/layout/Header";
import Header_eng from "../component/layout/Header_eng";
import Footer_eng from "../component/layout/Footer_eng";

import {authCheck} from "../store/auth/auth";

import 'antd/dist/antd.css';
import "../public/assets/styles/font.css";
import "../public/assets/styles/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import '../public/assets/styles/slick.css'
import "../public/assets/styles/date-picker.css"
import "../public/assets/styles/imagestyle.css"
import 'react-quill/dist/quill.snow.css';
import Head from "next/head";


import ScrollToTop from "../component/common/ScrollToTop";

import GlobalStyles from '../public/assets/styles/global'
import AdminGlobalStyles from '../public/assets/styles/admin_global'
import {getMainData, getMediaList} from "../store/main/main";
import {
    isIE
} from "react-device-detect";
// import Favicon from '../public/assets/image/favicon.ico';

// "dev": "NODE_ENV='development' node server.js",


const _App = ({Component, pageProps}) => {

    const dispatch = useDispatch();
    const router = useRouter();
    const {user, authLoading} = useSelector(({auth, loading}) => ({
        user: auth.user,
        authLoading: loading["auth/AUTH_CHECK"]
    }))

    const [role, setRole] = useState(null);

    // useEffect(() => {
    //     if(isIE){
    //         window.open("microsoft-edge:"+ "https://startup.hanyang.ac.kr");
    //     }
    // }, [router])

    useEffect(() => {
        if(isIE){
            window.open("microsoft-edge:"+ "https://startup.hanyang.ac.kr");
        }
        dispatch(authCheck())

        if (!router.pathname.startsWith("/admin")) {
            dispatch(getMediaList())
        }
    }, [router])

    useEffect(() => {
        if (user.login && user.info.role !== null) {
            setRole(user.info.role !== null ? user.info.role : null)
        }
    }, [user, router.pathname])

    let allowed = true;
    if (router.pathname.startsWith("/admin") && role !== "ROLE_ADMIN") {
        allowed = false;
    } else if ((router.pathname.startsWith("/mypage/mentee")) && (user.login !== true && role != 'ROLE_SD')) {
        allowed = false;
    }else if(router.pathname.startsWith("/startup_counsel/student_report")  && (user.login === false || role == 'ROLE_MT')) {
        allowed = false;
    } else if ((router.pathname.startsWith("/mypage/mentor") || router.pathname.startsWith("/startup_counsel/mentor_apply")) && (user.login !== true || role != 'ROLE_MT')) {
        allowed = false;
    }

    if(role == "ROLE_ADMIN"){
        allowed = true;
    }

    const ComponentToRender = allowed ? Component : AuthFail;


    return (
        <>
            <Head>
                <title>한양대학교 창업지원단</title>
                <link rel="shortcut icon" href="/assets/image/favicon.ico"/>
                {/*<script*/}
                {/*    // src="https://polyfill.io/v3/polyfill.min.js?features=es6,es7,es8,es9,NodeList.prototype.forEach&flags=gated"/>*/}
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
                <meta name="description"
                      content="예비창업자 및 초기 기업가, 각 분야 전문가 멘토 간의 정보 교류, 한양대 글로벌기업가센터, 한양대 창업지원단, 한양대 창업지원단"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="한양대학교 창업지원단"/>
                <meta property="og:description"
                      content="예비창업자 및 초기 기업가, 각 분야 전문가 멘토 간의 정보 교류, 한양대 글로벌기업가센터, 한양대 창업지원단, 한양대 창업지원단"/>
                <meta name="naver-site-verification"
                      content="7418ad80b2b649e57cf89a6496ee646c915aea9c"/>
                <meta name="naver-site-verification" content="02b2936f394809c03fee674b83c3d69b16f04e11" />
                <meta name="google-site-verification" content="0VqHl3NcslQqx6a4A6zb_lqg2DlKDFl9Z8_egKnahFw" />
                <meta property="og:image" content={`${baseUrl}/api/image/bg.jpg`}/>
                <meta property="og:url" content="http://startup.hanyang.ac.kr"/>
            </Head>
            <div id="wrap">
                <ScrollToTop>
                    {router.pathname.startsWith("/admin") ? allowed ?
                        <>
                            <style jsx global>
                                {AdminGlobalStyles}
                            </style>
                            <AdminHeader/>
                            <ComponentToRender {...pageProps} />
                        </>
                        :
                        <ComponentToRender {...pageProps} />
                        : null
                    }
                    {(!router.pathname.startsWith("/admin/") || !router.pathname.startsWith("/admin/")) ? allowed ?
                        <>
                            <style jsx global>
                                {GlobalStyles}
                            </style>
                            {(router.pathname.startsWith("/en")) ? <Header_eng /> : <Header />}
                            {/*<Header/>*/}
                            <div className="container">
                                <ComponentToRender {...pageProps} />
                            </div>
                            {(router.pathname.startsWith("/en")) ? <Footer_eng /> : <Footer />}
                            {/*<Footer/>*/}
                            <div className="kakao_menu">
                                <a href="https://pf.kakao.com/_fWsJd/chat" target="_blank">
                                    <img src="/assets/image/hanyang_talk.png" alt="상담톡"/>
                                </a>
                            </div>
                        </>
                        :
                        <ComponentToRender {...pageProps} />
                        : null
                    }
                </ScrollToTop>
            </div>
        </>

    );
};

// _App.getInitialProps = async (context) => {
//     const {ctx, Component} = context;
//     const cookie = ctx.isServer ? ctx.req.headers.cookie : '';
//
//     let pageProps = {};
//     if (ctx.req) {
//         // 서버 환경일 때만 쿠키를 심어줌. 클라이언트 환경일 때는 브라우저가 자동으로 쿠키를 넣어줌
//         client.defaults.headers.Cookie = cookie;
//         // defaluts: 모든 axios 요청 시에 쿠키 데이터를 심어줌.
//     } else {
//
//     }
//     if (Component.getServerSideProps) {
//         pageProps = await context.Component.getInitialProps(ctx);
//     }
//
//     if (Component.getStaticProps) {
//         pageProps = await context.Component.getInitialProps(ctx);
//     }
//
//     return {pageProps};
// };

export default wrapper.withRedux(_App);
