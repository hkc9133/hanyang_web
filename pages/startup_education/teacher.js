import React from 'react';
import PageNavigation from "../../component/layout/PageNavigation";
import Link from 'next/link'
import Image from "next/image";
import styles from '../../public/assets/styles/startup_education/startup_education.module.css';
import classnames from "classnames/bind"


const cx = classnames.bind(styles);

const Teacher = () => {
    return (
        <>
            <PageNavigation/>
            <section className={cx("container","teacherCont")}>
                <div className={cx("sub_cont","sub_cont_top")}>
                    <h1 className={cx("sub_top_title")}>교원 대상</h1>
                    <p className={cx("sub_top_txt")}>창의적융합인재 양성을 위하여 체계적인 창업교육 커리큘럼을 운영</p>
                </div>

                <div className={cx("gray_bg")}>
                    <div className={cx("sub_cont")}>
                        <div className={cx("txt_style_1")}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_2")}>교원 창업포럼</h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <p className={cx("txt_1")}>한양대 교수 및 연구원, 실험실 창업 우수 기업 기술창업 유관 기관등이 참가하는 대학내 긍정적인 교원 창업 문화 조성을
                                    위한 실전 창업 정보 공유, 소통 및 교류의 장입니다.</p>
                                <div className={cx("list_style_1")}>
                                    <ul>
                                        <li>
                                            <span className={cx("title")}>모집대상 </span>
                                            교내 실험실 창업을 준비 또는 창업한 교수, 연구원, 대학원생, 기타 관계자 등​
                                        </li>
                                        <li>
                                            <span className={cx("title")}>일정</span>
                                            년 총 2 회​
                                        </li>
                                        <li>
                                            <span className={cx("title")}>참석대상 </span>
                                            교원, 실험실 연구원, 유관단체 산학협력단, 창업지원단, 한양대 지주회사, 기타​
                                        </li>
                                        <li>
                                            <span className={cx("title")}>세부내용</span>
                                            <ul>
                                                <li>본교 교원의 기술창업 활성화를 위한 현직 대학교수 및 연구원, 창업전문가, 교원창업 성공기업 CEO들의 정보공유 및 소통의 장 마련​
                                                </li>
                                                <li>교원 창업 유경험자로부터 성공 창업 스토리를 공유하고, 실험실 창업팀의 창업기술 과제 발표와 각 기술 분야별 전문가와의 심사와
                                                    멘토링을 통해 사업화 단계별 맞춤형 문제 해결 방안을 모색하는 등 교원의 창업 분위기 확산의 장 마련
                                                </li>
                                            </ul>
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
                            <h1 className={cx("title_style_2")}>Lab 2 Market <br/>Incubating</h1>
                        </div>
                        <div className={cx("txtArea")}>
                            <p className={cx("txt_1")}>한양대학교 소속 실험실을 대상으로 하는 집체 실습 교육 프로그램으로 기술사업화 로드맵에 근거한 타겟 기술의 사업화 타당성을 검증과
                                실제 시장 내 고객의 탐색 (Customer Discovery) 과정을 진행합니다.</p>
                            <div className={cx("list_style_1")}>
                                <ul>
                                    <li>
                                        <span className={cx("title")}>모집대상 </span>
                                        한양대학교 실험실 중 , 2020 실험실 특화형 창업선도대학 사업참여 실험실 팀
                                    </li>
                                    <li>
                                        <span className={cx("title")}>일정</span>
                                        연 1 회​
                                    </li>
                                    {/*<li>
                                        <span className={cx("title")}>참석대상 </span>
                                        교원, 실험실 연구원, 유관단체 산학협력단, 창업지원단, 한양대 지주회사, 기타​
                                    </li>*/}
                                    <li>
                                        <span className={cx("title")}>세부내용</span>
                                        <ul>
                                            <li>실험실창업 및 기술창업 투자유치 성공사례를 공유하여 참여 실험실 팀들의 창업을 독려​</li>
                                            <li>실험실 팀 별 기술 사업계획서 작성 및 전문가 멘토링을 통해 BMP 고도화 도모</li>
                                        </ul>
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
                                <h1 className={cx("title_style_2")}>Lab Startup <br/>데모데이</h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <p className={cx("txt_1")}>한양대학교 소속 실험실을 대상으로 하는 Lab 2 Market 아이템 검증 및 고객 탐색 프로그램의 결과를 바탕으로 최종<br/>
                                    성과에 대해 IR 발표를 진행하고, 이를 통해 실험실별 창업역량을 강화합니다.</p>
                                <div className={cx("list_style_1")}>
                                    <ul>
                                        <li>
                                            <span className={cx("title")}>모집대상 </span>
                                            한양대학교 실험실 중 , 2020 실험실 특화형 창업선도대학 사업참여 실험실 팀
                                        </li>
                                        <li>
                                            <span className={cx("title")}>일정</span>
                                            연 1 회​
                                        </li>
                                        {/*<li>
                                            <span className={cx("title")}>참석대상 </span>
                                            교원, 실험실 연구원, 유관단체 산학협력단, 창업지원단, 한양대 지주회사, 기타​
                                        </li>*/}
                                        <li>
                                            <span className={cx("title")}>세부내용</span>
                                            <ul>
                                                <li>실험실별로 기술자체분석 보고서를 기반으로 기술사업화 로드맵 방법론을 근거하여 해당 기술의 사업화 타당성을 검증하고
                                                    해당기술이 실제 창업을 통해시장에서 적합하게 사업화 될 수 있는가에 대한 타당성 검증을 위한 고객 탐색
                                                    (Customer Discovery) 과정을 수행해보고 최종 성과 실험실 기술사업화를 발표함으로써 실험실별 창업역량을 강화​
                                                </li>
                                                <li>참여 실험실 특화형 창업선도대학 사업 참여 지원 기술 팀들의 사업화 성과 공유 및 사후 지원, 후속 투자 유치 방안 모색 등
                                                    논의​
                                                </li>
                                            </ul>
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
                            <h1 className={cx("title_style_2")}>문의</h1>
                        </div>
                        <div className={cx("txtArea")}>
                            <p className={cx("txt_1")}>Tel. 02-2220-2215</p>
                        </div>
                    </div>

                    <div className={`${cx("pt_80")} txt_c`}>
                        <Link href="#"><a className={cx("basic-btn01","btn-gray-bd")}>창업친화적 인사제도</a></Link>
                        <Link href="#"><a className={cx("basic-btn01","btn-blue-bg")}>교원창업 절차</a></Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Teacher;
