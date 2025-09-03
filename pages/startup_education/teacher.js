import React from 'react';
import PageNavigation from "../../component/layout/PageNavigation";
import Link from 'next/link'
import Image from "next/image";
import styles from '../../public/assets/styles/startup_education/startup_education.module.css';
import classnames from "classnames/bind"
import Head from "next/head";


const cx = classnames.bind(styles);

const Teacher = () => {
    return (
        <>
            <Head>
                <title>한양대학교 창업지원단 -교원 대상</title>
            </Head>
            <PageNavigation/>
            <section className={cx("container","teacherCont")}>
                <div className={cx("sub_cont","sub_cont_top")}>
                    <h1 className={cx("sub_top_title")}>교원 대상</h1>
                    <p className={cx("sub_top_txt")}>대학(원) 실험실 기술 중 창업 적합성 및 가능성이 우수하고, <br />1년 내 실제 창업이 가능한 기술을 선정해 실험실 창업 지원</p>
                </div>

                <div className={cx("gray_bg")}>
                    <div className={cx("sub_cont")}>
                        <div className={cx("txt_style_1")}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_2")}>한양교원창업 포럼</h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <p className={cx("txt_1")}>한양대학교 교수 및 연구원, 실험실 창업 우수 기업 기술창업 유관 기관등이 참가하는 대학내 긍정적인 교원 창업 문화 조성을 위한 실전 창업 정보 공유, 소통 및 교류의 장입니다.</p>
                                <div className={cx("list_style_1")}>
                                    <ul>
                                        <li>
                                            <span className={cx("title")}>모집대상 </span>
                                            한양대학교(서울·ERICA) 교원창업자 및 실험실 소속 대학원생, 창업에 관심있는 (예비)교원창업자
                                        </li>
                                        <li>
                                            <span className={cx("title")}>일정</span>
                                            연 1회
                                        </li>
                                        <li>
                                            <span className={cx("title")}>세부내용</span>
                                            교수, 대학원생, 교원창업 성공기업 CEO 간 정보 공유와 교류의 장을 마련하여 교원창업 유경험자의 성공 사례 및 창업 과정에서의 문제 해결 방안을 모색하는 등 교원 창업 분위기 확산에 기여할 수 있는 네트워크 구축
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
                            <h1 className={cx("title_style_2")}>원스톱 창업상담실</h1>
                        </div>
                        <div className={cx("txtArea")}>
                            <p className={cx("txt_1")}>한양대학교 전담 창업상담실을 조성하여 창업특화 전문가 2인 이상이 상주하며 교원 및 대학원생을 대상으로 멘토링을 지원합니다.</p>
                            <div className={cx("list_style_1")}>
                                <ul>
                                    <li>
                                        <span className={cx("title")}>모집대상 </span>
                                        한양대학교 실험실 및 교원창업에 관심있는 교원
                                    </li>
                                    <li>
                                        <span className={cx("title")}>일정</span>
                                        수시운영
                                    </li>
                                    <li>
                                        <span className={cx("title")}>세부내용</span>
                                        창업기업 운영에 필요한 필수사항 및 창업자의 애로사항에 대해 대학이 보유하고 있는 분야별 전문가와 맞춤형 멘토링을 진행하여 문제점 해결 및 개선방안 도출
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
                                <h1 className={cx("title_style_2")}>IR-Deck 컨설팅</h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <p className={cx("txt_1")}>한양대학교 소속 혁신창업실험실을 대상으로 기술사업화를 위한 실험실 유망기술 소개 및 투자유치를 위한 IR-Deck 작성 컨설팅을 진행합니다.</p>
                                <div className={cx("list_style_1")}>
                                    <ul>
                                        <li>
                                            <span className={cx("title")}>지원대상 </span>
                                            한양대학교(서울) 실험실 중, 2025년 실험실 특화형 창업선도대학 사업 참여 실험실
                                        </li>
                                        <li>
                                            <span className={cx("title")}>일정</span>
                                            연 1회
                                        </li>
                                        <li>
                                            <span className={cx("title")}>세부내용</span>
                                            혁신창업실험실의 기술사업화 전략을 구체화하여 투자유치 가능성을 높이고 실험실의 사업화 진입을 가속화 하기위한 IR-Deck 디자인 및 제작
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
                            <h1 className={cx("title_style_2")}>BM보완 및 고도화</h1>
                        </div>
                        <div className={cx("txtArea")}>
                            <p className={cx("txt_1")}>한양대학교 소속 혁신창업실험실을 대상으로 기술(비즈니스모델)의 타당성을 검증하고 시장에 적합한 사업화를 위한 고객 관점에서의 분석(가설수립 및 고객인터뷰 등)을 통해 개선 및 보완하여 수요 맞춤형 아이템으로 고도화합니다. </p>
                            <div className={cx("list_style_1")}>
                                <ul>
                                    <li>
                                        <span className={cx("title")}>지원대상 </span>
                                        한양대학교(서울) 실험실 중, 2025년 실험실 특화형 창업선도대학 사업 참여 실험실
                                    </li>
                                    <li>
                                        <span className={cx("title")}>일정</span>
                                        연 1회
                                    </li>
                                    <li>
                                        <span className={cx("title")}>세부내용</span>
                                        혁신창업실험실별 전담 인스트럭터를 매칭하여 각 실험실의 비즈니스 모델을 실제고객(시장)의 관점에서 분석하고 검증하는 과정을 통해 시장수요에 적합한 비즈니스 모델 보완 및 고도화
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
                                <h1 className={cx("title_style_2")}>IP R&amp;D 컨설팅</h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <p className={cx("txt_1")}>한양대학교 소속 혁신창업실험실의 기술보호 및 기술가치 제고를 위한 맞춤형 컨설팅을 진행하여 핵심기술 도출, 독자적 기술(특허)확보 전략 수립 등 지식재산권 경쟁력을 강화하고 기술사업화 성공률을 높일 수 있는 개선점을 도출합니다.</p>
                                <div className={cx("list_style_1")}>
                                    <ul>
                                        <li>
                                            <span className={cx("title")}>지원대상 </span>
                                            한양대학교(서울) 실험실 중, 2025년 실험실 특화형 창업선도대학 사업 참여 실험실
                                        </li>
                                        <li>
                                            <span className={cx("title")}>일정</span>
                                            연 1회
                                        </li>
                                        <li>
                                            <span className={cx("title")}>세부내용</span>
                                            원천기술 보호, 핵심특허 발굴 및 IP리스크 대응 전략 수립 등을 통한 BM-IP 연계 핵심기술 도출
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
                            <h1 className={cx("title_style_2")}>Final Demo Day <br/>(Lab to Biz Challenge)</h1>
                        </div>
                        <div className={cx("txtArea")}>
                            <p className={cx("txt_1")}>한양대학교 소속 혁신창업실험실을 대상으로  핵심기술 개발 성과를 공유하며 기업의 사업성 검증 및 투자유치 기회를 제공하고, (예비)창업실험실의 기술 설명 및 사업화 전략 발표 등 교원창업 생태계 조성을 위한 기회를 마련합니다.</p>
                            <div className={cx("list_style_1")}>
                                <ul>
                                    <li>
                                        <span className={cx("title")}>참여대상 </span>
                                        한양대학교(서울) 실험실 중 2025년 실험실 특화형 창업선도대학 사업 참여 실험실 및 실험실 창업에 관심있는 교원
                                    </li>
                                    <li>
                                        <span className={cx("title")}>일정</span>
                                        연 1회
                                    </li>
                                    <li>
                                        <span className={cx("title")}>세부내용</span>
                                        2025년 실험실 특화형 창업선도대학 사업 참여 실험실의 우수성과 발표(우수기업 시상 및 후속사업 연계 등) 및 차년도 유망 (예비)혁신창업실험실의 기술 설명 및 사업화 전략 발표
                                    </li>
                                </ul>
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
                        <Link href="/introduce/friendly?tab=1"><a className={cx("basic-btn01","btn-gray-bd")}>창업친화적 인사제도</a></Link>
                        <Link href="/startup_counsel/startup_procedure?tab=1"><a className={cx("basic-btn01","btn-blue-bg")}>교원창업 절차</a></Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Teacher;
