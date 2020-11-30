import React from 'react';
import withRedux from 'next-redux-wrapper';
import wrapper from '../store/configureStore';
import nextReduxSaga from 'next-redux-saga'
// import {Head} from 'next/document'





const _App = ({ Component, pageProps }) => {

    return (
        <>
            {/*<Head >*/}
            {/*    <title>기본</title>*/}
            {/*    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6,es7,es8,es9,NodeList.prototype.forEach&flags=gated" />*/}
            {/*    <meta name="viewport" content="initial-scale=1.0, width=device-width" />*/}
            {/*</Head>*/}
            <Component {...pageProps} />
        </>

    );
};

export default wrapper.withRedux(nextReduxSaga(_App));
