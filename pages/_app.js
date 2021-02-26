import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector, useStore} from "react-redux";
import wrapper from '../store/configureStore';
import {useRouter} from "next/router";
import client from '../lib/api/client'
import {registerLocale} from "react-datepicker";
import ko from 'date-fns/locale/ko';
import "react-big-calendar/lib/css/react-big-calendar.css";
// import '../public/assets/styles/antd.less'

registerLocale('ko', ko)
import AuthFail from "./user/auth_fail";
import AdminHeader from "../component/layout/AdminHeader";
import Footer from "../component/layout/Footer";
import Header from "../component/layout/Header";

import {authCheck} from "../store/auth/auth";

import 'antd/dist/antd.css';
import "../public/assets/styles/font.css";
import "../public/assets/styles/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import '../public/assets/styles/slick.css'
import "../public/assets/styles/date-picker.css"
import 'react-quill/dist/quill.snow.css';
import Head from "next/head";

import ScrollToTop from "../component/common/ScrollToTop";

import GlobalStyles from '../public/assets/styles/global'
import AdminGlobalStyles from '../public/assets/styles/admin_global'
import {getMainData, getNoticeList} from "../store/main/main";

// "dev": "NODE_ENV='development' node server.js",


const _App = ({Component, pageProps}) => {

    const dispatch = useDispatch();
    const router = useRouter();
    const {user, authLoading} = useSelector(({auth, loading}) => ({
        user: auth.user,
        authLoading: loading["auth/AUTH_CHECK"]
    }))

    const [role, setRole] = useState(null);

    useEffect(() => {

    }, [])

    useEffect(() => {
        dispatch(authCheck())

        if(!router.pathname.startsWith("/admin")){
            dispatch(getNoticeList())
        }
    }, [router])

    useEffect(() => {
        if (user.login && user.info.role !== null) {
            setRole(user.info.role !== null ? user.info.role : null)
        }
    }, [user,router.pathname])

    let allowed = true;
    if (router.pathname.startsWith("/admin") && role !== "ROLE_ADMIN") {
        allowed = false;
    } else if((router.pathname.startsWith("/mypage/mentee") || router.pathname.startsWith("/startup_counsel/counsel_apply") || router.pathname.startsWith("/startup_counsel/student_report") )   && (user.login !== true || role != 'ROLE_SD')) {
        allowed = false;
    }else if((router.pathname.startsWith("/mypage/mentor") || router.pathname.startsWith("/startup_counsel/mentor_apply")) && (user.login !== true || role != 'ROLE_MT')) {
        allowed = false;
    }else if((router.pathname.startsWith("/introduce/space_reservation")) && role == null){
        allowed = false;
    }

    const ComponentToRender = allowed ? Component : AuthFail;


    return (
        <>
            <Head>
                <title>한양대학교 창업지원단</title>
                    <link rel="shortcut icon" href="/assets/image/favicon.jpg" />
                <script
                    src="https://polyfill.io/v3/polyfill.min.js?features=es6,es7,es8,es9,NodeList.prototype.forEach&flags=gated"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
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
                    {(!router.pathname.startsWith("/admin/") || !router.pathname.startsWith("/admin/") ) ? allowed ?
                    <>
                        <style jsx global>
                            {GlobalStyles}
                        </style>
                        <Header/>
                        <div className="container">
                            <ComponentToRender {...pageProps} />
                        </div>
                        <Footer/>
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
