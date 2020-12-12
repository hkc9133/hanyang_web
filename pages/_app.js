import React,{useEffect} from 'react';
import withRedux from 'next-redux-wrapper';
import {useDispatch, useStore} from "react-redux";
import wrapper from '../store/configureStore';
import withReduxSaga from 'next-redux-saga'
import Header from "../component/layout/Header";
// import { PersistGate } from "redux-persist/integration/react";

import '../assets/styles/styles.css'
import client from '../lib/api/client'
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import ko from 'date-fns/locale/ko';
registerLocale('ko', ko)
import {getSpaceRentalInfoAll} from "../store/spaceRental/spaceRental";
import {END} from "redux-saga";
import {authCheck} from "../store/auth/auth";
// import {Head} from 'next/document'



// "dev": "NODE_ENV='development' node server.js",


const _App = ({ Component, pageProps }) => {
    const store = useStore((state) => state)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("첵첵")
        dispatch(authCheck())
    },[Component])



    return (
        <>

            {/*<PersistGate persistor={store.__persistor} loading={<div>Loading...</div>}>*/}
                <Header/>
                <Component {...pageProps} />
                <div id="modal-root"></div>
            {/*</PersistGate>*/}
        </>

    );
};

_App.getInitialProps = async (context) => {
    const { ctx, Component } = context;
    const cookie = ctx.isServer ? ctx.req.headers.cookie : '';

    console.log("11112")
    console.log(ctx.isServer);
    console.log("11113")

    let pageProps = {};
    if (ctx.req) {
        console.log(ctx.req)
        console.log(ctx.req.headers)
        console.log("4444")
        // 서버 환경일 때만 쿠키를 심어줌. 클라이언트 환경일 때는 브라우저가 자동으로 쿠키를 넣어줌
        client.defaults.headers.Cookie = ctx.req.headers.cookie;
        // defaluts: 모든 axios 요청 시에 쿠키 데이터를 심어줌.
    }else{
        console.log("5555")
    }

    // if(ctx.req != undefined){
    //     const state = ctx.store.getState();
    //     const cookie = ctx.req.headers.cookie;
    //     // 모든 axios 헤더에 기본적으로 쿠키가 담기도록
    //     client.defaults.headers.Cookie = cookie;
    //     // if (!state.user.me) {
    //     //     ctx.store.dispatch({
    //     //         type : LOAD_USER_REQUEST,
    //     //     })
    //     // }
    // }
    if (Component.getServerSideProps) {
        pageProps = await context.Component.getInitialProps(ctx);
    }

    if (Component.getStaticProps) {
        pageProps = await context.Component.getInitialProps(ctx);
    }

    console.log("====")
    console.log(context.Component.getStaticProps)
    console.log(context.Component.getServerSideProps)
    console.log("====")
    return { pageProps };
};

export default wrapper.withRedux(_App);
