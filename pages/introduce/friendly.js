import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import styles from '../../public/assets/styles/startup_education/startup_education.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";
import {useRouter} from "next/router";
import Head from "next/head";

const cx = classnames.bind(styles);

const Friendly = () => {
    const router = useRouter();
    const [tab, setTab] =  useState(0);

    useEffect(() =>{
        if(router.query.tab == 0 ){
            setTab(0)
        }else if(router.query.tab == 1){
            setTab(1)
        }

    },[router.query])

    return (
        <>
            <Head>
                <title>한양대학교 창업지원단 -창업친화적 제도</title>
            </Head>
            <PageNavigation/>
            <section className={cx("container","friendlyCont")}>
                <div className={cx("sub_container","startup_procedure")}>
                    <h1 className={cx("sub_top_title")}>창업친화적 제도</h1>
                    <p className={cx("sub_top_txt")}><br/></p>

                    <div className={cx("tab_style_2")}>
                        <ul>
                            <li className={cx({on:tab == 0})}><a onClick={() =>{setTab(0)}}>학사제도</a></li>
                            <li className={cx({on:tab == 1})}><a onClick={() =>{setTab(1)}}>인사제도</a></li>
                        </ul>
                    </div>
                </div>

                {tab == 0 ? (
                    <div className={cx("friendly_1")}>
                        <div className={cx("sub_cont")}>
                            <div className={cx("txt_style_1")}>
                                <div className={cx("left_title")}>
                                    <h1 className={cx("title_style_2")}>창업휴학,<br/>창업현장실습(장기,단기)</h1>
                                </div>
                                <div className={cx("txtArea")}>
                                    <div className={cx("list_style_1")}>
                                        <ul>
                                            <li>
                                                <span className={cx("title")}>목적 </span>
                                                창업과 학업의 병행에 따른 어려움을 해소하여 창업으로 인한 학업중단을 최소화하고자 하는 학사제도
                                            </li>
                                            <li>
                                                <span className={cx("title")}>신청자격 </span>
                                                8 학기 미만 재학생, 창업강좌 1교과 이상 이수자, 신청일 당시 창업한 기업 (공동) 대표
                                            </li>
                                            <li>
                                                <span className={cx("title")}>혜택 </span>
                                                <div className={cx("tb_style_1")}>
                                                    <table>
                                                        <colgroup>
                                                            <col style={{width:"38%"}}/>
                                                            <col/>
                                                        </colgroup>
                                                        <tbody>
                                                        <tr>
                                                            <td>창업휴학</td>
                                                            <td>
                                                                - 기타휴학 1년 인정<br/>
                                                                - 1회 연장 가능(최대 2년)<br/>
                                                                - 일반휴학(최대 3년)에 추가 가능
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>창업현장실습<br/>(장기)</td>
                                                            <td>
                                                                - 정규학기 전공 최대 15학점 인정<br/>
                                                                (주전공, 창업융합전공, 교양, 일반선택)<br/>
                                                                - 재학 중 1회 허용
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>창업현장실습<br/>(단기)</td>
                                                            <td>
                                                                - 계절학기 3학점 인정<br/>
                                                                (창업융합전공, 교양, 일반선택)<br/>
                                                                - 매 계절학기 중 1회, 재학 중 최대 2회 허용
                                                            </td>
                                                        </tr>
                                                        {/*<tr>*/}
                                                        {/*    <td></td>*/}
                                                        {/*    <td>*/}
                                                        {/*        ※ 창업실습은 장기, 단기 포함하여 최대 18학점까지 인정 가능*/}
                                                        {/*    </td>*/}
                                                        {/*</tr>*/}
                                                        </tbody>
                                                    </table>
                                                    <p style={{marginTop:10}}>※ 창업실습은 장기, 단기 포함하여 최대 18학점까지 인정 가능</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx("gray_bg")}>
                            <div className={cx("sub_cont")}>
                                <div className={cx("txt_style_1")}>
                                    <div className={cx("left_title")}>
                                        <h1 className={cx("title_style_2")}>창업융합전공</h1>
                                    </div>
                                    <div className={cx("txtArea")}>
                                        <div className={cx("list_style_1")}>
                                            <ul>
                                                <li>
                                                    <span className={cx("title")}>목적 </span>
                                                    창업 기업가가 갖추어야 할 소양, 태도, 역량을 체계적으로 교육하여 기업가 정신을 갖춘 준비된 창업인 양성 (벤처창업학사 -
                                                    제2전공)
                                                </li>
                                                <li>
                                                    <span className={cx("title")}>신청자격 </span>
                                                    1학년 2학기(1학기 이상 성적 유효) 이상의 서울캠퍼스 재학생
                                                </li>
                                                <li>
                                                    <span className={cx("title")}>혜택 </span>
                                                    창업현장실습 이수 시 창업융합전공 최대 18학점 인정 및 우수 전공자 해외창업인턴십, 글로벌챌린지(해외탐방) 참가 우선권 부여
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("sub_cont")}>
                            <div className={cx("txt_style_1")}>
                                <div className={cx("left_title")}>
                                    <h1 className={cx("title_style_2")}>4차 산업혁명 창업<br/> 마이크로 전공</h1>
                                </div>
                                <div className={cx("txtArea")}>
                                    <div className={cx("list_style_1")}>
                                        <ul>
                                            <li>
                                                <span className={cx("title")}>목적 </span>
                                                미래 산업 분야의 핵심 기술을 선도할 수 있는 창의융합 인재 양성(성적증명서에만 표시)
                                            </li>
                                            <li>
                                                <span className={cx("title")}>신청자격 </span>
                                                학년, 학부성적 제한없음
                                            </li>
                                            <li>
                                                <span className={cx("title")}>혜택</span>
                                                최소 4과목(12학점) 이수 시 인정 및 창업융합전공 신청 시 우대
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx("gray_bg")}>
                        <div className={cx("sub_cont")}>
                            <div className={cx("txt_style_1")}>
                                <div className={cx("left_title")}>
                                    <h1 className={cx("title_style_2")}>창업장학금</h1>
                                </div>
                                <div className={cx("txtArea")}>
                                    <div className={cx("list_style_1")}>
                                        <ul>
                                            <li>
                                                <span className={cx("title")}>목적 </span>
                                                미래 성장 잠재력이 높고 우수한 창업아이디어를 가진 학생들을 발굴해 대학 창업지원사업·인프라를 연계해 “미래 스타창업·벤처”로 육성
                                            </li>
                                            <li>
                                                <span className={cx("title")}>신청자격 </span>
                                                한양대학교 대학(원)생 중 (예비)창업자
                                            </li>
                                            <li>
                                                <span className={cx("title")}>혜택 </span>
                                                1인당 1,984,000원(1년)의 창업기숙사 장학금 지원
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                ) : (
                    <div className={cx("friendly_2")}>
                        <div className={cx("sub_cont")}>
                            <div className={cx("txt_style_1")}>
                                <div className={cx("left_title")}>
                                    <h1 className={cx("title_style_2")}>창업친화적 인사제도</h1>
                                </div>
                                <div className={cx("txtArea")}>
                                    <div className={cx("list_style_1")}>
                                        <ul>
                                            <li>
                                                <span className={cx("title")}>교원창업 휴/겸직 제도 </span>
                                                교원이 벤처기업 또는 <a
                                                href="http://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%A4%91%EC%86%8C%EA%B8%B0%EC%97%85%EC%B0%BD%EC%97%85%EC%A7%80%EC%9B%90%EB%B2%95"
                                                target="_blank">「중소기업창업 지원법」 제 2조 제 2호</a>에 따른 창업자의 대표자나 임직원이 된 경우 총장의 허락하에
                                                휴직 또는 겸직을 허용하는 제도
                                            </li>
                                            <li>
                                                <span className={cx("title")}>교원 업적평가 </span>
                                                교원창업은, 교원 업적평가 시<br/>
                                                (국제 저명 학술논문 기준적용분야-이공계열) 30점 (SCI논문 3편에 해당)<br/>
                                                (국제전문학술 논문 기준적용분야-인문사회계열) 90점 (SCI논문 0.9편에 해당)
                                            </li>
                                            <li>
                                                <span className={cx("title")}>산학협력(창업)중점교수 </span>
                                                창업교육 및 기술창업 활성화를 위한 창업특화형 교원
                                            </li>
                                            <li>
                                                <span className={cx("title")}>산학창업연수제 </span>
                                                산학, 창업관련 활동을 위한 연구년(2년) 제도
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )}
            </section>
        </>
    );
};

export default Friendly;
