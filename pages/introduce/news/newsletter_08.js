import React from 'react';
import styles from '../../../public/assets/styles/introduce/news.module.css';
import classnames from "classnames/bind"

const cx = classnames.bind(styles);
import Link from 'next/link';
import PageNavigation from "../../../component/layout/PageNavigation";

const Newsletter08 = () => {
    return (
        <>
            <PageNavigation/>
            <section className={cx("sub_container", "newsletter_content")}>
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
                        <img src="/assets/image/newsletter_temp_sub/08/01.jpg" alt="1"/>
                        <img src="/assets/image/newsletter_temp_sub/08/01-1.jpg" alt="2"/>
                        <img src="/assets/image/newsletter_temp_sub/08/01-2.JPG" alt="3"/>
                        <img src="/assets/image/newsletter_temp_sub/08/01-3.jpg" alt="4"/>
                        <img src="/assets/image/newsletter_temp_sub/08/01-4.jpg" alt="5"/>
                        <img src="/assets/image/newsletter_temp_sub/08/01-5.jpg" alt="6"/>
                        <img src="/assets/image/newsletter_temp_sub/08/01-6.JPG" alt="7"/>
                        <img src="/assets/image/newsletter_temp_sub/08/02.JPG" alt="8"/>
                        <img src="/assets/image/newsletter_temp_sub/08/02-1.JPG" alt="9"/>
                        <img src="/assets/image/newsletter_temp_sub/08/02-2.JPG" alt="10"/>
                        <img src="/assets/image/newsletter_temp_sub/08/02-3.JPG" alt="11"/>
                        <img src="/assets/image/newsletter_temp_sub/08/03-1.JPG" alt="12"/>
                        <img src="/assets/image/newsletter_temp_sub/08/03-2.JPG" alt="13"/>
                        <img src="/assets/image/newsletter_temp_sub/08/03-3.JPG" alt="14"/>
                        <img src="/assets/image/newsletter_temp_sub/08/04-1.JPG" alt="15"/>
                        <img src="/assets/image/newsletter_temp_sub/08/04-2.JPG" alt="16"/>
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

export default Newsletter08;
