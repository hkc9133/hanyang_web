import React from 'react';
import withRedux from 'next-redux-wrapper';
import { useStore } from "react-redux";
import wrapper from '../store/configureStore';
import withReduxSaga from 'next-redux-saga'
import Header from "../component/layout/Header";
import { PersistGate } from "redux-persist/integration/react";

import '../assets/styles/styles.css'
import client from '../lib/api/client'
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import ko from 'date-fns/locale/ko';
import {getSpaceRentalInfoAll} from "../store/spaceRental/spaceRental";
import {END} from "redux-saga";
registerLocale('ko', ko)
// import {Head} from 'next/document'



// "dev": "NODE_ENV='development' node server.js",


const _App = ({ Component, pageProps }) => {
    const store = useStore((state) => state)



    return (
        <>

            <PersistGate persistor={store.__persistor} loading={<div>Loading...</div>}>
                <Header/>
                <Component {...pageProps} />
                <div id="modal-root"></div>
            </PersistGate>
        </>

    );
};

_App.getInitialProps = async (context) => {
    const { ctx, Component } = context;
    let pageProps = {};
    if(ctx.req != undefined){
        console.log("흐음111")
        console.log(ctx)
        console.log("흐음")
        const state = ctx.store.getState();
        const cookie = ctx.req.headers.cookie;
        // 모든 axios 헤더에 기본적으로 쿠키가 담기도록
        client.defaults.headers.Cookie = cookie;
        // if (!state.user.me) {
        //     ctx.store.dispatch({
        //         type : LOAD_USER_REQUEST,
        //     })
        // }
    }
    if (Component.getServerSideProps) {
        pageProps = await context.Component.getInitialProps(ctx);
    }
    return { pageProps };
};

export default wrapper.withRedux(withReduxSaga(_App));
