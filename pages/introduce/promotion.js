import React from 'react';

import Link from 'next/link';
import styles from '../../public/assets/styles/introduce/introduce.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";

const cx = classnames.bind(styles);

const Promotion = () => {
    return (
        <>
            <PageNavigation/>
            ㅋ <section className={cx("container")}>
            <div className={cx("sub_container", "promotion")}>
                <h1 className={cx("sub_top_title")}>홍보자료</h1>
                <p className={cx("sub_top_txt")}>한양대학교 창업지원단 홍보 영상 , 브로슈어 등을 소개합니다 .</p>
                <div className={cx("txt_style_1")}>
                    <div className={cx("left_title")}>
                        {/*<span>한양대학교 창업지원단 </span>*/}
                        <h3>소개 동영상</h3>
                    </div>
                    <div className={cx("vedioArea")}>
                        <img src="/assets/image/promotion_vedio.jpg" alt=""/>
                    </div>
                </div>

                <div className={cx("txt_style_1")}>
                    <div className={cx("left_title")}>
                        <span>한양대학교 창업지원단 </span>
                        <h3>브로슈어</h3>
                    </div>
                    <ul className={`${cx("brochure_list")} clfx `}>
                        <li>
                            <span>브로슈어 국문</span>
                            <Link href="#"><a>PDF로 보기</a></Link>
                        </li>
                        <li>
                            <span>브로슈어 영문</span>
                            <Link href="#"><a>PDF로 보기</a></Link>
                        </li>
                    </ul>
                </div>

                <div className={cx("txt_style_1")}>
                    <div className={cx("left_title")}>
                        <span>한양대학교 창업지원단 </span>
                        <h3>C.I</h3>
                    </div>
                    <div className={`${cx("ci_list")} clfx `}>
                        <div className={cx("left_ci")}>
                            <ul>
                                <li><img src="/assets/image/ci_img_1.jpg" alt=""/></li>
                                <li><img src="/assets/image/ci_img_2.jpg" alt=""/></li>
                                <li><img src="/assets/image/ci_img_3.jpg" alt=""/></li>
                            </ul>
                        </div>
                        <div className={cx("right_ci")}>
                            <ul>
                                <li><img src="/assets/image/ci_img_4.jpg" alt=""/></li>
                                <li><img src="/assets/image/ci_img_5.jpg" alt=""/></li>
                                <li><img src="/assets/image/ci_img_6.jpg" alt=""/></li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx("btn_area")}>
                        <ul className={`${cx("brochure_list")} clfx `}>
                            <li><Link href="#"><a>JPG 다운로드</a></Link></li>
                            <li><Link href="#"><a>AI 다운로드</a></Link></li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
        </>
    );
};

export default Promotion;
