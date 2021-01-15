import React from 'react';

import Link from 'next/link';
import styles from '../../public/assets/styles/investment/investment.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";

const cx = classnames.bind(styles);

const IR = () => {
    return (
        <>
            <PageNavigation/>
        <section className={cx("sub_container","irWrap")}>
            <h1 className={cx("sub_top_title")}>IR/투자안내</h1>
            <p className={cx("sub_top_txt")}>HYU Holdings는 아이템에 대한 확신과 사업 성공의 역량을 지닌 <br/>기술기반 창업 기업과의 동반 성장을 추구합니다.</p>

            <div className={cx("gallery_list_2")}>
                <ul className={"clfx"}>
                    <li>
                        <div className={cx("img_area")}>
                            <a href="#">
                                <img src="/assets/image/gallery_img.jpg" alt=""/>
                            </a>
                        </div>
                        <div className={cx("txt_area")}>
                            <a href="#">
                                <div className={cx("title")}>
                                    팁스(TIPS) 프로그램
                                </div>
                                <div className={cx("txt_2")}>
                                    <ul>
                                        <li>4IR분야 우수기술을 보유한 초기 창업 기업에게 투자·보육하고 엔젤투자·R&D자금 매칭 등을 지원하는 글로벌시장 지향 집중 육성
                                            프로그램
                                        </li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className={cx("img_area")}>
                            <a href="#">
                                <img src="/assets/image/gallery_img.jpg" alt=""/>
                            </a>
                        </div>
                        <div className={cx("txt_area")}>
                            <a href="#">
                                <div className={cx("title")}>
                                    한양대학교 창업엔진 개인투자조합 1호
                                    <span className={cx("txt_1")}>한국모태펀드 교육계정</span>
                                </div>
                                <div className={cx("txt_2")}>
                                    <ul>
                                        <li>대학(원)생 및 5년 이내 졸업한 창업자</li>
                                        <li>대학 교원</li>
                                        <li>창업 3년 이내 초기 창업 기업</li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className={cx("img_area")}>
                            <a href="#">
                                <img src="/assets/image/gallery_img.jpg" alt=""/>
                            </a>
                        </div>
                        <div className={cx("txt_area")}>
                            <a href="#">
                                <div className={cx("title")}>
                                    한양대학교 창업엔진 개인투자조합 1호
                                    <span className={cx("txt_1")}>한국모태펀드 교육계정</span>
                                </div>
                                <div className={cx("txt_2")}>
                                    <ul>
                                        <li>대학(원)생 및 5년 이내 졸업한 창업자</li>
                                        <li>대학 교원</li>
                                        <li>창업 3년 이내 초기 창업 기업</li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className={cx("img_area")}>
                            <a href="#">
                                <img src="/assets/image/gallery_img.jpg" alt=""/>
                            </a>
                        </div>
                        <div className={cx("txt_area")}>
                            <a href="#">
                                <div className={cx("title")}>
                                    팁스(TIPS) 프로그램
                                </div>
                                <div className={cx("txt_2")}>
                                    <ul>
                                        <li>4IR분야 우수기술을 보유한 초기 창업 기업에게 투자·보육하고 엔젤투자·R&D자금 매칭 등을 지원하는 글로벌시장 지향 집중 육성
                                            프로그램
                                        </li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className={cx("img_area")}>
                            <a href="#">
                                <img src="/assets/image/gallery_img.jpg" alt=""/>
                            </a>
                        </div>
                        <div className={cx("txt_area")}>
                            <a href="#">
                                <div className={cx("title")}>
                                    한양대학교 창업엔진 개인투자조합 1호
                                    <span className={cx("txt_1")}>한국모태펀드 교육계정</span>
                                </div>
                                <div className={cx("txt_2")}>
                                    <ul>
                                        <li>대학(원)생 및 5년 이내 졸업한 창업자</li>
                                        <li>대학 교원</li>
                                        <li>창업 3년 이내 초기 창업 기업</li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className={cx("img_area")}>
                            <a href="#">
                                <img src="/assets/image/gallery_img.jpg" alt=""/>
                            </a>
                        </div>
                        <div className={cx("txt_area")}>
                            <a href="#">
                                <div className={cx("title")}>
                                    한양대학교 창업엔진 개인투자조합 1호
                                    <span className={cx("txt_1")}>한국모태펀드 교육계정</span>
                                </div>
                                <div className={cx("txt_2")}>
                                    <ul>
                                        <li>대학(원)생 및 5년 이내 졸업한 창업자</li>
                                        <li>대학 교원</li>
                                        <li>창업 3년 이내 초기 창업 기업</li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>

            <div className={"paging"}>
                <Link href="#"><a><img src="/assets/image/page_prev.gif" alt=""/></a></Link>
                <Link href="#" className={cx("on")}><a>1</a></Link>
                <Link href="#"><a>2</a></Link>
                <Link href="#"><a>3</a></Link>
                <Link href="#"><a>4</a></Link>
                <Link href="#"><a>5</a></Link>
                <Link href="#"><a><img src="/assets/image/page_next.gif" alt=""/></a></Link>
            </div>
        </section>
            </>
    );
};

export default IR;
