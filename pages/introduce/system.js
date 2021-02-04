import React from 'react';

import Link from 'next/link';
import styles from '../../public/assets/styles/introduce/introduce.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";

const cx = classnames.bind(styles);

const System = () => {
    return (
        <>
            <PageNavigation/>
        <section className={cx("container")}>
            <div className={cx("sub_container","startup_support_step")}>
                <h1 className={cx("sub_top_title")}>창업지원단 지원체계</h1>
                <p className={cx("sub_top_txt")}> 창업준비부터 창업실행, EXIT까지 창업 전주기 맞춤형 지원체계를 구축하고 있습니다</p>

                <ol>
                    <li>
                        <div className={cx("step")}>
                            <span>01<strong>창업준비</strong></span>
                        </div>
                        <div className={cx("list")}>
                            <ul>
                                <li>
                                    <div className={cx("title")}>01 <span>기본교육</span></div>
                                    <ul>
                                        <li>
                                            <span className={cx("s_title")}>창업강좌</span>
                                            (학부)창업융합전공, (대학원)창업융합학과, 실전창업강좌
                                        </li>
                                        <li>
                                            <span className={cx("s_title")}>제도</span>
                                            창업대체학점인정제, 창업학점교류제
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div className={cx("title")}>02 <span>아이디어 창출</span></div>
                                    <ul>
                                        <li>
                                            <span className={cx("s_title")}>프로그램</span>
                                            창업경진대회, 기술창업자양성프로그램, 글로벌기업가정신 함양 프로그램 (글로벌 트랙), 창업캠프
                                        </li>
                                        <li>
                                            <span className={cx("s_title")}>제도</span>
                                            기술창업스카우터, 국내.외 창업인턴십
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div className={cx("title")}>03 <span>사업검증</span></div>
                                    <ul>
                                        <li>
                                            <span className={cx("s_title")}>프로그램</span>
                                            시장.기술 검증 프로그램
                                        </li>
                                        <li>
                                            <span className={cx("s_title")}>제도</span>
                                            3D프린터, 레이저컷팅기, CNC 등 장비활용 지원
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className={cx("step")}>
                            <span>02<strong>창업실행</strong></span>
                        </div>
                        <div className={cx("list")}>
                            <ul>
                                <li>
                                    <div className={cx("title")}>04 <span>창업초기</span></div>
                                    <ul>
                                        <li>
                                            <span className={cx("s_title")}>인프라 지원</span>
                                            247 스타트업 돔(기숙형 창업공간), 코맥스 스타트업타운, 한양스타트업 사우나, 창업보육센터
                                        </li>
                                        <li>
                                            <span className={cx("s_title")}>프로그램</span>
                                            한양스타트업아카데미, 한양스타트업포럼, 교원창업포럼, 비즈니스허브데이, 원스톱 창업상담, 멘토스온콜
                                        </li>
                                        <li>
                                            <span className={cx("s_title")}>제도</span>
                                            창업유학
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div className={cx("title")}>05 <span>펀딩</span></div>
                                    <ul>
                                        <li>
                                            <span className={cx("s_title")}>자금지원</span>
                                            한양창업지원단투자펀드, 한양엔젤클럽, 대학창업펀드, 엔젤모펀드, 기술창업펀드, 기보.신보 스타트업 보증 연계 투자 프로그램
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className={cx("step")}>
                            <span>03<strong>창업성장</strong></span>
                        </div>
                        <div className={cx("list")}>
                            <ul>
                                <li>
                                    <div className={cx("title")}>06 <span>성장지원</span></div>
                                    <ul>
                                        <li>
                                            <span className={cx("s_title")}>프로그램</span>
                                            스타트업 성장촉진(스케일업)프로그램
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div className={cx("title")}>07 <span>글로벌 확장</span></div>
                                    <ul>
                                        <li>
                                            <span className={cx("s_title")}>인프라 지원</span>
                                            글로벌 창업거점센터 운영(미국 실리콘벨리 뉴욕,중국 상해, 베트남 하노이) 글로벌 스타트업 멘토단, 글로벌 엑셀러레이팅 프로그램
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className={cx("step")}>
                            <span>04<strong>EXIT</strong></span>
                        </div>
                        <div className={cx("list")}>
                            <ul>
                                <li>
                                    <div className={cx("title")}>08 <span>IPO/M&A</span></div>
                                    <ul>
                                        <li>
                                            <span className={cx("s_title")}>프로그램</span>
                                            대학 기술지주회사와 연계한 유망 창업기업 성장지원, 창업기업M&amp;A를 위한 맞춤 컨설팅
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ol>
            </div>
        </section>
            </>
    );
};

export default System;
