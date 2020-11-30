import React from 'react';
import Link from "next/link";

const Index = () => {
    return (
        <>
            <div>
                Welcome to Next.js!
                <Link href="/admin/dashboard"><a>대시보드 이동</a></Link>
            </div>
        </>
    );
};

export default Index;

