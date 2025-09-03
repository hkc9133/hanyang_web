import React from 'react';

import Link from 'next/link';
import styles from '../../public/assets/styles/investment/investment.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";
import Head from "next/head";

const cx = classnames.bind(styles);

const IR = () => {
    return (
        <>
            <Head>
                <title>한양대학교 창업지원단 -IR/투자 안내</title>
            </Head>
            <PageNavigation/>
            <section className={cx("sub_container","irWrap")}>
                <h1 className={cx("sub_top_title")}>IR/투자 안내</h1>
                <p className={cx("sub_top_txt")}>유망 스타트업을 대상으로 IR 및 투자를 지원합니다.</p>
                <div className={cx("ir_top_box")}>
                    <img src="/assets/image/ir_cont.png" alt="mission_img"/>
                </div>

                <div className={cx("ir_box")}>

                    <div className={cx("ir_box_content")}>
                        <div className={cx("ir_box_top_line")}></div>
                        <div className={cx("ir_box_content_top")}>
                            <img src="/assets/image/ir_img01.gif" alt="tips"/>
                            <div className={cx("ir_text_box")}>
                                <p className={cx("ir_text_title")}>팁스(TIPS) 프로그램</p>
                            </div>
                        </div>
                        <div className={cx("ir_box_content_bottom")}>
                            <p className={cx("ir_text")}>4IR분야 우수 기술을 보유한 초기 창업 기업에게 투자 · 보육하고 엔젤투자 · R&amp;D자금 매칭 등을 지원하는 글로벌
                                시장 지향 집중 육성 프로그램</p>

                        </div>
                    </div>

                    <div className={cx("ir_box_content")}>
                        <div className={cx("ir_box_top_line")}></div>
                        <div className={cx("ir_box_content_top")}>
                            <div className={cx("ir_text_box")}>
                                <p className={cx("ir_text_title")}>한양대학교 창업엔진<br/>개인투자조합 1호</p>
                                <p className={cx("ir_text_title")}>한국 모태펀드 교육 계정</p>
                            </div>
                        </div>
                        <div className={cx("ir_box_content_bottom")}>
                            <p className={cx("ir_text")}>- 대학(원)생 및 5년 이내 졸업한 창업자<br/>- 대학교원<br/>- 창업 3년 이내 초기 창업 기업</p>
                        </div>
                    </div>

                    <div className={cx("ir_box_content")}>
                        <div className={cx("ir_box_top_line")}></div>
                        <div className={cx("ir_box_content_top")}>
                            <div className={cx("ir_text_box")}>
                                <p className={cx("ir_text_title")}>한양대학교 창업엔진<br/>개인투자조합 2호</p>
                                <p className={cx("ir_text_title")}>한국 모태펀드 교육 계정</p>
                            </div>
                        </div>
                        <div className={cx("ir_box_content_bottom")}>
                            <p className={cx("ir_text")}>- 대학(원)생 및 5년 이내 졸업한 창업자<br/>- 대학교원<br/>- 창업 3년 이내 초기 창업 기업</p>
                        </div>
                    </div>


                    <div className={cx("ir_box_content")}>
                        <div className={cx("ir_box_top_line")}></div>
                        <div className={cx("ir_box_content_top")}>
                            <div className={cx("ir_text_box")}>
                                <p className={cx("ir_text_title")}>한양대학교 스타트업<br/>개인투자조합</p>
                                <p className={cx("ir_text_title")}>엔젤모펀드</p>
                            </div>
                        </div>
                        <div className={cx("ir_box_content_bottom")}>
                            <p className={cx("ir_text")}>- 기술기반 유망 기업<br/>- 창업 3년 이내 초기 창업 기업<br/>- 매출 20억 미만 창업 기업</p>
                        </div>
                    </div>

                    <div className={cx("ir_box_content")}>
                        <div className={cx("ir_box_top_line")}></div>
                        <div className={cx("ir_box_content_top")}>
                            <div className={cx("ir_text_box")}>
                                <p className={cx("ir_text_title")}>한양대학교 기술창업<br/>개인투자조합</p>
                                <p className={cx("ir_text_title")}>기술창업펀드</p>
                            </div>
                        </div>
                        <div className={cx("ir_box_content_bottom")}>
                            <p className={cx("ir_text")}>- 우수기술 보유기업<br/>- 창업 3년 이내 초기 창업 기업</p>
                        </div>
                    </div>

                    <div className={cx("ir_box_content")}>
                        <div className={cx("ir_box_top_line")}></div>
                        <div className={cx("ir_box_content_top")}>
                            <img src="/assets/image/ir_img02.gif" alt="hyu holdings"/>
                            <div className={cx("ir_text_box")}>
                                <p className={cx("ir_text_title")}>HYU Holdings 고유계정</p>
                            </div>
                        </div>
                        <div className={cx("ir_box_content_bottom")}>
                            <p className={cx("ir_text")}>- 공공 기술 이전 희망 기업<br/>- 공공 기술 기반 창업 기업</p>
                        </div>
                    </div>

                    <div className={cx("ir_box_content")}>
                        <div className={cx("ir_box_top_line")}></div>
                        <div className={cx("ir_box_content_top")}>
                            <img src="/assets/image/ir_img03.gif" alt="WINGS"/>
                            <div className={cx("ir_text_box")}>
                                <p className={cx("ir_text_title")}>경기 WINGS 프로그램</p>
                                <p className={cx("ir_text_title")}>(경기도 민간투자연계형 기술창업지원사업)</p>
                            </div>
                        </div>
                        <div className={cx("ir_box_content_bottom")}>
                            <p className={cx("ir_text")}>
                                민간의 우수 자원(자금, 전문성 등)을 활용한 지속가능하고 경쟁력있는 민간 연계형 기술창업지원정책을 도입하여 미래 유망 기술분야의 우수 창업기업 지원 및 육성 프로그램
                            </p>
                        </div>
                    </div>

                    <div className={cx("ir_box_content")}>
                        <div className={cx("ir_box_top_line")}></div>
                        <div className={cx("ir_box_content_top")}>
                            <div className={cx("ir_text_box")}>
                                <p className={cx("ir_text_title")}>한양대학교 창업엔진<br/>개인투자조합 3호</p>
                                <p className={cx("ir_text_title")}>한국 모태펀드 교육 계정</p>
                            </div>
                        </div>
                        <div className={cx("ir_box_content_bottom")}>
                            <p className={cx("ir_text")}>- 대학(원)생 및 5년 이내 졸업한 창업자<br/>- 대학교원<br/>- 창업 3년 이내 초기 창업 기업</p>
                        </div>
                    </div>

                    <div className={cx("ir_box_content")}>
                        <div className={cx("ir_box_top_line")}></div>
                        <div className={cx("ir_box_content_top")}>
                            <div className={cx("ir_text_box")}>
                                <p className={cx("ir_text_title")}>한양대학교 블루라이언 <br/>벤처투자조합</p>
                                <p className={cx("ir_text_title")}>벤처투자조합 벤처펀드</p>
                            </div>
                        </div>
                        <div className={cx("ir_box_content_bottom")}>
                            <p className={cx("ir_text")}>- 대학(원)생 및 5년 이내 졸업한 창업자<br/>- 대학교원<br/>- 창업 3년 이내 초기 창업 기업</p>
                        </div>
                    </div>

                    <p className={cx("sub_top_txt")}>문의: 한양대학교 기술지주회사(Tel. 02-2220-4071)</p>

                    <div className={cx("btn_area")}>
                        <a href="http://www.hyuholdings.com/html/sub02/sub02_0201.php" target="_blank">
                            한양대학교 기술지주회사 - 알아보기
                        </a>
                    </div>

                </div>

            </section>

        </>
);
};

export default IR;
