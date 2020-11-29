import React from 'react';
import Link from "next/link";
import Head from 'next/Head';

const Index = () => {
    return (
        <>
            <Head >
                <title>My page title</title>
                <script src="https://polyfill.io/v3/polyfill.min.js?features=es6,es7,es8,es9,NodeList.prototype.forEach&flags=gated" />
            </Head>
            <div>
                Welcome to Next.js!
                <Link href="/admin/dashboard"><a>대시보드 이동</a></Link>
            </div>
        </>
    );
};

export default Index;

