import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/"><a>메인</a></Link>
                </li>
                <li>
                    <Link href="/auth/login"><a>로그인 화면</a></Link>
                </li>
                <li>
                    <Link href="/board/board"><a>글쓰기</a></Link>
                </li>
                <li>
                    <Link href="/space/rental"><a>공간예약</a></Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
