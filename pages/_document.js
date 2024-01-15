import Document, {Html, Main, NextScript} from 'next/document'
import React from "react";
import {Head} from 'next/document'
import {ServerStyleSheet} from 'styled-components'


class MyDocument extends Document {
    // static async getInitialProps(ctx) {
    //     const initialProps = await Document.getInitialProps(ctx)
    //     return {...initialProps}
    // }

    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html lang="ko">
                <Head>
                    {/*    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6,es7,es8,es9,NodeList.prototype.forEach&flags=gated" />*/}
                    {/*    <meta name="viewport" content="initial-scale=1.0, width=device-width" />*/}
                    {/*<script src="https://cdn.ckeditor.com/ckeditor5/26.0.0/decoupled-document/ckeditor.js"></script>*/}
                    {/*<script charSet="utf-8" src="//cdn.iframe.ly/embed.js?api_key=39e093f45ee70394f340cf"></script>*/}
                    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css"/>
                    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"/>
                    <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
                    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
                    <script src="/assets/ckeditor.js"></script>
                </Head>
                <body>
                <Main/>
                <div id="modal-root"/>
                <NextScript/>


                <script dangerouslySetInnerHTML={{
                    __html : `(function (d, t) {
                                var v = d.createElement(t),
                                s = d.getElementsByTagName(t)[0];
                                v.onload = function () { window.orca.setup("PU4VlBbloEpiOth2YZh9");
                                };
                                v.src = "https://storage.googleapis.com/orca-ai-module/bundle.min.js"; v.type = "text/javascript";
                                s.parentNode.insertBefore(v, s);
                                })(document, "script");`
                }}>
                </script>


                </body>
            </Html>
        )
    }
}

export default MyDocument
