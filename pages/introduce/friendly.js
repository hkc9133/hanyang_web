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
                        <div className={cx("gray_bg")}>
                            <div className={cx("sub_cont")}>
                                <div className={cx("txt_style_1")}>
                                    <div className={cx("left_title")}>
                                        <h1 className={cx("title_style_2")}>창업대학원</h1>
                                    </div>
                                    <div className={cx("txtArea")}>
                                        <div className={cx("list_style_1")}>
                                            <ul>
                                                <li>
                                                    <span className={cx("title")}>목적 </span>
                                                    1. 창업기업가가 갖추어야 할 소양, 태도 및 역량을 체계적으로 교육함으로써 “준비된 기술창업인” 양성 <br/>
                                                    2. 실용인재 육성을 통해 국가발전의 큰 축을 담당해 온 한양대학교의 실용학풍과 건학이념을 지속적 계승.발전 <br/>
                                                    3. 지식 전달만이 아닌 현장 중심의 실질적 교육.훈련 실질적 교육.훈련을 통해 창업 성공률 제고 및 지속 경영능력 배양 <br/>
                                                    4. 기업가정신(Entrepreneurship) 부활 및 창업 마인드 고취를 통한 일자리 창출과 산업구조 고도화에 기여 <br/>
                                                    5. 우수한 예비창업자를 발굴하여 창업을 지원하고, 동문 인프라 연계를 통한 체계적 육성
                                                </li>
                                                <li>
                                                    <span className={cx("title")}>지원자격 </span>
                                                    · 국내·외 4년제 대학졸업자 및 2025년 8월 졸업 예정자 <br/>
                                                    · 법령에 의하여 위와 동등이상의 학력이 있다고 인정을 받은 자 <br/>
                                                    · 출신대학의 전공학과와 관계없이 지원 가능 <br/>
                                                    · 외국소재 대학 출신자의 경우, 대학이 해당 국가의 공인을 받은 경우에만 지원 가능
                                                </li>
                                                <li>
                                                    <span className={cx("title")}>특전 </span>
                                                    <div className={cx("benefit_list")}>
                                                        <ul>
                                                            <li>
                                                                <div className={cx("img_wrap")}>
                                                                    <img src="/assets/image/benefit_1.png" alt="창업장학금"/>
                                                                </div>
                                                                <div className={cx("txt_wrap")}>
                                                                    <h3>장학금</h3>
                                                                    <p>신입생 전원 등록금 20% 장학금 지급(입학 우수자 등록금 80% 추가지급)</p>
                                                                    <p>본교 학부졸업생 선배 창업가 장학금 지급</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className={cx("img_wrap")}>
                                                                    <img src="/assets/image/benefit_5.png" alt="프로그램"/>
                                                                </div>
                                                                <div className={cx("txt_wrap")}>
                                                                    <h3>프로그램</h3>
                                                                    <p>대학 동문 글로벌 멘토단 연계 연수프로그램(북미, 아시아, 유럽 등)</p>
                                                                    <p>원스톱창업상담실 통한 창업분야별 전문가 그룹(100명) 멘토링 상시지원</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className={cx("img_wrap")}>
                                                                    <img src="/assets/image/benefit_2.png" alt="사업화 지원"/>
                                                                </div>
                                                                <div className={cx("txt_wrap")}>
                                                                    <h3>사업화 지원</h3>
                                                                    <p>대학에서 수행중인 정부, 지자체 지원사업 통한 사업화자금 지원</p>
                                                                    <p>기업지원프로그램(대·중견기업 오픈이노베이션, 글로벌 액셀러레이팅) 참여기회 부여</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className={cx("img_wrap")}>
                                                                    <img src="/assets/image/benefit_3.png" alt="투자유치"/>
                                                                </div>
                                                                <div className={cx("txt_wrap")}>
                                                                    <h3>투자유치</h3>
                                                                    <p>창업기업의 투자역량 강화를 위한 IR활동 지원</p>
                                                                    <p>대학기술지주회사 및 대학 외부 투자컨소시엄을 통한 직접 투자유치 기회 제공</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className={cx("img_wrap")}>
                                                                    <img src="/assets/image/benefit_7.png" alt="동문"/>
                                                                </div>
                                                                <div className={cx("txt_wrap")}>
                                                                    <h3>동문네트워크</h3>
                                                                    <p>한양벤처동문회, HYU유니콘클럽 등 선배창업가들과의 협력 네트워크 활동 연계</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className={cx("img_wrap")}>
                                                                    <img src="/assets/image/benefit_4.png" alt="공간"/>
                                                                </div>
                                                                <div className={cx("txt_wrap")}>
                                                                    <h3>창업 인프라 지원</h3>
                                                                    <p>창업활동을 위한 전용 사무공간, 회의실, 시제품제작, 공용기자재 등 지원</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
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
                                                                - 기타휴학 인정 <br/>(3년 이내이며, 1년 단위의 휴학기간 연장이 허용 가능)<br/>
                                                                - 3년 초과 시 심의를 거친 후 1년 단위로 연장<br/>
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
                                                1인당 2,844,000원(1년)의 창업기숙사 장학금 지원
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
