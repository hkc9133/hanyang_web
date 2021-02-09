import React from 'react';
import styles from '../../public/assets/styles/footer/footer.module.css';
import classnames from "classnames/bind"
import Link from "next/link";
import Image from 'next/image'
import {useSelector} from "react-redux";

const cx = classnames.bind(styles);

const Footer = () => {
    const {mainData} = useSelector(({main, loading}) => ({
        mainData: main.mainData
    }))
    return (
        <section className={cx("footer_wrap")}>
            <div className={cx("footer_top")}>
                <div className={cx("footer","clfx")}>
                    <div className={cx("cs_center")}>
                        <h1>원스톱 창업상담실</h1>
                        <div className={cx("tel")}>02-<br/>2220-3000</div>
                    </div>
                    <div className={cx("business_hours")}>
                        <ul>
                            <li>
                                <span>평일</span>
                                10:00 - 17:00
                            </li>
                            <li>
                                <span>휴일</span>
                                10:00 - 17:00
                            </li>
                            <li>
                                <span>E-mail</span>
                                startup@hanyang.ac.kr
                            </li>
                        </ul>
                    </div>
                    <div className={cx("footer_link")}>
                        <ul className={cx("clfx")}>
                            <li className={cx("icon_1")}><Link href="/"><a>FAQ</a></Link></li>
                            <li className={cx("icon_2")}><Link href="/"><a>Q&amp;A</a></Link></li>
                            <li className={cx("icon_3")}><Link href="/"><a>1:1문의</a></Link></li>
                        </ul>
                    </div>
                    <div className={cx("footer_notice")}>
                        <h1>아이디어 제안</h1>
                        <ul>
                            {mainData.notice.map( (item,index) =>
                                index < 3 && <li key={item.noticeId}><Link href={`/introduce/notice/${item.noticeId}`}><a>{item.title}</a></Link></li>

                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx("footer_menu")}>
                <div className={cx("footer")}>
                    <ul>
                        <li className={cx("mb_hide")}><Link href="/"><a>한양대학교 창업지원단 소개</a></Link></li>
                        <li><Link href="/"><a><strong>개인정보처리방침</strong></a></Link></li>
                        <li><Link href="/"><a>이용약관</a></Link></li>
                        <li><Link href="/"><a>이메일 주소무단 수집거부</a></Link></li>
                        <li className={cx("mb_hide")}><Link href="/"><a>공지사항</a></Link></li>
                        <li className={cx("mb_hide")}><Link href="/"><a>고객센터</a></Link></li>
                        <li className={cx("mb_hide")}><Link href="/"><a>뉴스레터</a></Link></li>
                    </ul>
                </div>
            </div>
            <div className={cx("footer_inner")}>
                <div className={cx("footer")}>

                    <div className={cx("footer_right")}>
                        <div className={cx("footer_family_site")}>
                            <button type="button" className={cx("open_footer_family_site")}>패밀리사이트</button>
                            <div className={cx("footer_family_list")}>
                                <ul>
                                    <li><Link href="/"><a>패밀리사이트1</a></Link></li>
                                    <li><Link href="/"><a>패밀리사이트2</a></Link></li>
                                    <li><Link href="/"><a>패밀리사이트3</a></Link></li>
                                    <li><Link href="/"><a>패밀리사이트4</a></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx("footer_sns")}>
                            <ul>
                                <li><Link href="/"><a><Image src="/assets/image/sns_icon_1.gif" width={24} height={24}  alt="naver_icon"/></a></Link></li>
                                <li><Link href="/"><a><Image src="/assets/image/sns_icon_2.gif"  width={24} height={24} alt="facebook_icon"/></a></Link></li>
                                <li><Link href="/"><a><Image src="/assets/image/sns_icon_3.gif"  width={24} height={24} alt="google_icon"/></a></Link></li>
                                <li><Link href="/"><a><Image src="/assets/image/sns_icon_4.gif"  width={24} height={24} alt="kakao_icon"/></a></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx("footer_logo")}><Image src="/assets/image/footer_logo.png"  width={238} height={38} alt="한양대학교 창업지원단"/></div>
                    <div className={cx("footer_cont")}>
                        <address>주소: (04763) 서울특별시 성동구 왕십리로 222 한양대학교 HIT 103호</address>
                        <p>홈페이지 책임자 : 구태용 / 관리자(담당자) : 장상길 / startup@hanyang.ac.kr </p>
                        <p className={cx("copyright")}>&copy; 2021. Startup Support Foundation, Hanyang University. All rights
                            reserved.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Footer);
