import React from 'react';
import styles from '../../../public/assets/styles/introduce/news.module.css';
import classnames from "classnames/bind"

const cx = classnames.bind(styles);
import Link from 'next/link';
import PageNavigation from "../../../component/layout/PageNavigation";
const Newsletter07 = () => {
    return (
        <>
            <PageNavigation/>
            <section className={cx("sub_container","newsletter_content")}>
                <h1 className={cx("sub_top_title")}>뉴스레터</h1>
                <p className={cx("sub_top_txt")}>뉴스레터 게시판 </p>
                <div className={cx("news_banner")}>
                    <p>한양스타트업뉴스레터는 창업을 준비하는 한양대학교 재학생, 동문 및 <br/>지역 사회 청년들에게 성공창업을 위한 정보를 부정기로 제공하는 온라인 소식지입니다.</p>
                </div>

                <div className={cx("news_board_wrap")}>
                    {/*<div className={cx("news_board_prev")}>*/}
                    {/*    <ul>*/}
                    {/*        <li><a href="#"><img src="/assets/image/icon_navi.gif" alt=""/></a></li>*/}
                    {/*        <li><a href="#"><span>창업지원단소개</span></a></li>*/}
                    {/*        <li><a href="./newsletter_temp.html"><span><strong>뉴스레터</strong></span></a></li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                    <div className={cx("news_board_cont")}>
                        <img src="/6assets/image/newsletter_temp_sub/07/1.png" alt="1"/>
                        <img src="/assets/image/newsletter_temp_sub/07/2.jpg" alt="2"/>
                        <img src="/assets/image/newsletter_temp_sub/07/3.jpg" alt="3"/>
                        <img src="/assets/image/newsletter_temp_sub/07/4.jpg" alt="4"/>
                        <img src="/assets/image/newsletter_temp_sub/07/5.jpg" alt="5"/>
                        <img src="/assets/image/newsletter_temp_sub/07/6.jpg" alt="6"/>
                        <img src="/assets/image/newsletter_temp_sub/07/7.jpg" alt="7"/>
                    </div>
                    <div className={cx("news_board_bottom")}>
                        <Link href={"/introduce/news"}>
                        <a className={cx("list_btn")}>목록보기</a>
                        </Link>
                    </div>
                </div>


            </section>
        </>
    );
};

export default Newsletter07;
