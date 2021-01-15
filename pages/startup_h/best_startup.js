import React from 'react';
import Image from "next/image";
import styles from '../../public/assets/styles/startup_h/startup_h.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";

const cx = classnames.bind(styles);
const BestStartup = () => {
    return (
        <>
            <PageNavigation/>
        <section className={cx("sub_container", "best_startup")}>
            <h1 className={cx("sub_top_title")}>우수스타트업</h1>
            <p className={cx("sub_top_txt")}>한양대학교는 창업기업은 3939개 기업과 함께하고 있습니다. <br/>검색 버튼을 활용하면 한양대학교와 함께하는 창업기업들을 모두 확인
                할 수
                있습니다.</p>

            <div className={cx("search_type_2")}>
                <select name="" id="" className={cx("long")}>
                    <option value="#">학생창업기업</option>
                </select>
                <select name="" id="">
                    <option value="#">IT</option>
                </select>
                <select name="" id="">
                    <option value="#">2020</option>
                </select>
                <input type="text" placeholder="검색어를 입력하세요."/>
                <button type="button" className={cx("btn_search")}>검색</button>
            </div>

            <div className={cx("graph_area")}>
                <Image src="/assets/image/best_startup_graph.jpg" width={1318} height={288} alt="best_startup_graph"/>
            </div>

            <div className={cx("best_startup_list")}>
                <div className={cx("box")}>
                    <div className={cx("title_area")}>
                        <h2>한양학생 창업기업</h2>
                        <span className={cx("txt_1")}>
					한양대학교 배출 <br/>학생 창업기업
				</span>
                        <span className={cx("number")}><strong>287</strong>개</span>
                    </div>

                    <div className={cx("info")}>
                        <ul>
                            <li>매출액 382억원</li>
                            <li>고용인원 382명</li>
                            <li>투자유치 392억원</li>
                        </ul>
                    </div>

                    <div className={cx("logo_list")}>
                        <ul>
                            <li>
                                <div className={cx("logo")}>
                                    <img src="/assets/image/best_startup_logo1.jpg" alt="" />
                                </div>
                                <span className={cx("name")}>라이언로켓</span>
                            </li>
                            <li>
                                <div className={cx("logo")}>
                                    <img src="/assets/image/best_startup_logo2.jpg" alt="" />
                                </div>
                                <span className={cx("name")}>래빗홀</span>
                            </li>
                            <li>
                                <div className={cx("logo")}>
                                    <img src="/assets/image/best_startup_logo3.jpg" alt="" />
                                </div>
                                <span className={cx("name")}>버브앤코</span>
                            </li>
                            <li>
                                <div className={cx("logo")}>
                                    <img src="/assets/image/best_startup_logo4.jpg" alt="" />
                                </div>
                                <span className={cx("name")}>트랙라인</span>
                            </li>
                            <li>
                                <div className={cx("logo")}>
                                    <img src="/assets/image/best_startup_logo5.jpg" alt="" />
                                </div>
                                <span className={cx("name")}>뮤팟</span>
                            </li>
                            <li>
                                <div className={cx("logo")}>
                                    <img src="/assets/image/best_startup_logo6.jpg" alt="" />
                                </div>
                                <span className={cx("name")}>뻔뻔한친구들</span>
                            </li>
                            <li>
                                <div className={cx("logo")}>
                                    <img src="/assets/image/best_startup_logo7.jpg" alt="" />
                                </div>
                                <span className={cx("name")}>에이아이엠디</span>
                            </li>
                            <li>
                                <div className={cx("logo")}>
                                    <img src="/assets/image/best_startup_logo8.jpg" alt="" />
                                </div>
                                <span className={cx("name")}>레티널</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={cx("box")}>
                    <div className={cx("title_area")}>
                        <h2>한양학생 창업기업</h2>
                        <span className={cx("txt_1")}>
					한양대학교 배출 <br/>학생 창업기업
				</span>
                        <span className={cx("number")}><strong>287</strong>개</span>
                    </div>

                    <div className={cx("info")}>
                        <ul>
                            <li>매출액 382억원</li>
                            <li>고용인원 382명</li>
                            <li>투자유치 392억원</li>
                        </ul>
                    </div>

                    <div className={cx("logo_list")}>
                        <ul>
                            <li>
                                <div className={cx("logo")}>
                                    <img src="/assets/image/best_startup_logo1.jpg" alt="" />
                                </div>
                                <span className={cx("name")}>라이언로켓</span>
                            </li>
                            <li>
                                <div className={cx("logo")}>
                                    <img src="/assets/image/best_startup_logo2.jpg" alt="" />
                                </div>
                                <span className={cx("name")}>래빗홀</span>
                            </li>
                            <li>
                                <div className={cx("logo")}>
                                    <img src="/assets/image/best_startup_logo3.jpg" alt="" />
                                </div>
                                <span className={cx("name")}>버브앤코</span>
                            </li>
                            <li>
                                <div className={cx("logo")}>
                                    <img src="/assets/image/best_startup_logo4.jpg" alt="" />
                                </div>
                                <span className={cx("name")}>트랙라인</span>
                            </li>
                            <li>
                                <div className={cx("logo")}>
                                    <img src="/assets/image/best_startup_logo5.jpg" alt="" />
                                </div>
                                <span className={cx("name")}>뮤팟</span>
                            </li>
                            <li>
                                <div className={cx("logo")}>
                                    <img src="/assets/image/best_startup_logo6.jpg" alt="" />
                                </div>
                                <span className={cx("name")}>뻔뻔한친구들</span>
                            </li>
                            <li>
                                <div className={cx("logo")}>
                                    <img src="/assets/image/best_startup_logo7.jpg" alt="" />
                                </div>
                                <span className={cx("name")}>에이아이엠디</span>
                            </li>
                            <li>
                                <div className={cx("logo")}>
                                    <img src="/assets/image/best_startup_logo8.jpg" alt="" />
                                </div>
                                <span className={cx("name")}>레티널</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={cx("box")}>
                    <div className={cx("title_area")}>
                        <h2>한양학생 창업기업</h2>
                        <span className={cx("txt_1")}>
					한양대학교 배출 <br/>학생 창업기업
				</span>
                        <span className={cx("number")}><strong>287</strong>개</span>
                    </div>

                    <div className={cx("info")}>
                        <ul>
                            <li>매출액 382억원</li>
                            <li>고용인원 382명</li>
                            <li>투자유치 392억원</li>
                        </ul>
                    </div>

                    <div className={cx("logo_list")}>
                        <ul>
                            <li>
                                <div className={cx("logo")}>
                                    <img src="/assets/image/best_startup_logo1.jpg" alt="" />
                                </div>
                                <span className={cx("name")}>라이언로켓</span>
                            </li>
                            <li>
                                <div className={cx("logo")}>
                                    <img src="/assets/image/best_startup_logo2.jpg" alt="" />
                                </div>
                                <span className={cx("name")}>래빗홀</span>
                            </li>
                            <li>
                                <div className={cx("logo")}>
                                    <img src="/assets/image/best_startup_logo3.jpg" alt="" />
                                </div>
                                <span className={cx("name")}>버브앤코</span>
                            </li>
                            <li>
                                <div className={cx("logo")}>
                                    <img src="/assets/image/best_startup_logo4.jpg" alt="" />
                                </div>
                                <span className={cx("name")}>트랙라인</span>
                            </li>
                            <li>
                                <div className={cx("logo")}>
                                    <img src="/assets/image/best_startup_logo5.jpg" alt="" />
                                </div>
                                <span className={cx("name")}>뮤팟</span>
                            </li>
                            <li>
                                <div className={cx("logo")}>
                                    <img src="/assets/image/best_startup_logo6.jpg" alt="" />
                                </div>
                                <span className={cx("name")}>뻔뻔한친구들</span>
                            </li>
                            <li>
                                <div className={cx("logo")}>
                                    <img src="/assets/image/best_startup_logo7.jpg" alt="" />
                                </div>
                                <span className={cx("name")}>에이아이엠디</span>
                            </li>
                            <li>
                                <div className={cx("logo")}>
                                    <img src="/assets/image/best_startup_logo8.jpg" alt="" />
                                </div>
                                <span className={cx("name")}>레티널</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
            </>
    );
};

export default BestStartup;
