import React from 'react';
import CounselApplyHistory from "../../../component/mypage/student/CounselApplyHistory";
import Head from "next/head";

const MyComponent = () => {
    return (
        <>
            <Head>
                <title>한양대학교 창업지원단 -창업상담현황</title>
            </Head>
            <CounselApplyHistory/>
        </>
    );
};

export default MyComponent;
