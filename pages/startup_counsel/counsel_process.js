import React from 'react';
import PageNavigation from "../../component/layout/PageNavigation";
import Link from 'next/link'
import styles from '../../public/assets/styles/mentor/mentor.module.css';
import classnames from "classnames/bind"
import Image from "next/image";
const cx = classnames.bind(styles);

const CounselApply = () => {
    return (
        <>
            <PageNavigation/>
            <section className={cx("sub_container","consultation")}>
                <h1 className={cx("sub_top_title")}>창업상담신청</h1>
                <p className={cx("sub_top_txt")}>
                    한양대학교는 (예비)창업자가 창업과정에서 겪는 다양한 문제점을 <br/>
                    해결하고 창업자의 사업화 수준별 맞춤형 컨설팅을 제공하기 위한 <br/>
                    원스톱 창업상담 플랫폼을 구축, 온오프라인 창업상담을 지원하고 있습니다.
                </p>
                <div className={cx("txt_c")}>
                    <Link href={"/startup_counsel/mentor_introduce"}><a className={`${cx("basic-btn03","btn-blue-bg2")} mr_10`}>멘토찾기</a></Link>
                    <Link href="/startup_counsel/counsel_apply"><a className={cx("basic-btn03","btn-blue-bd")}>창업 상담하기</a></Link>
                </div>


                <div className={`${cx("mentor_month")} clfx`}>
                    <div className={cx("title")}>
                        <h2>이달의 멘토</h2>
                        <p>
                            멘티로 부터 추천을 받은 <br/>이달의 멘토
                        </p>
                    </div>
                    <div className={cx("photoArea")}>
                        <div className={cx("photo")}>
                            <Image src="/assets/image/mentor_photo.jpg" width={198} height={198} alt="mentor_photo"/>
                        </div>
                        <span className={cx("name")}>류창한</span>
                        <span className={cx("job")}>한양대학교 창업지원 단장</span>
                    </div>
                    <div className={cx("txt_area")}>
                        <div className={cx("tag")}>#엔젤투자 #비즈니스모델 #사업계획 수립</div>
                        <ul>
                            <li>現한양대학교창업지원단장</li>
                            <li>現대학원창업융합학과주임교수</li>
                            <li>前(주)데이콤사이버패스창업 및 KOSDAQ</li>
                        </ul>
                        <p>
                            “평생 직장도, 평생 직업도 없는 21세기에는 누구나 한번 이상은 창업의 기회를 마주하게 될 것입니다. <br/>
                            아이디어나 기술만으로도 창업에 도전할 수 있지만 지속 가능한 성공을 위해서는 체계적인 교육과 훈련이 필요합니다. <br/>
                            다양한 문야의 전문지식을 알아야 하고 실전 경험을 통해 취득해야 합니다. “
                        </p>
                    </div>
                </div>

                <div className={cx("before_counseling","txt_style_1")}>
                    <div className={cx("left_title")}>
                        <h2 className={cx("title_style_3")}>상담하기 전에 <br/>이것부터 보고가세요!</h2>
                    </div>
                    <div className={cx("txtArea")}>
                        <ul className={`${cx("icon_list")} clfx`}>
                            <li className={cx("icon_1")}>
                                <a href="#">
                                    세무,회계 <br/>기본지식 알고가기
                                </a>
                            </li>
                            <li className={cx("icon_2")}>
                                <a href="#">
                                    알면 도움되는 <br/> 스타트업 법률상식
                                </a>
                            </li>
                            <li className={cx("icon_3")}>
                                <a href="#">
                                    스타트업 <br/>투자유치 A to Z
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx("consultation_csCenter")}>
                    <div className={cx("txt_style_1")}>
                        <div className={cx("left_title")}>
                            <h2 className={cx("title_style_3")}>창업이 <br/>궁금할땐?</h2>
                        </div>
                        <div className={cx("txtArea")}>
                            <ul>
                                <li>
                                    <h3>창업상담 대표번호</h3>
                                    02-2220-3000
                                </li>
                                <li className={cx("kakao")}>
                                    카카오톡채널. 한양스타트업톡톡
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={cx("counselingBtnArea")}>
                    <Link href={"/startup_counsel/mentor_apply"}><a>멘토지원하기</a></Link>
                </div>

                <div className={cx("step")}>
                    <div className={cx("txt_style_1")}>
                        <div className={cx("left_title")}>
                            <h2 className={cx("title_style_3")}>상담절차</h2>
                            <p>
                                온오프라인 창업상담을 <br/>지원하고 있습니다.
                            </p>
                        </div>
                        <div className={cx("txtArea")}>
                            <ol>
                                <li>
                                    <span className={cx("number")}><strong>01.</strong> 상담신청</span>
                                    <ul>
                                        <li><span>상담대상: </span>한양대 창업지원단 창업지원사업 및 프로그램 수혜자, 한양대학교(원) 재(휴)학생 및 동문,
                                            한양사이버대학교 재학생
                                        </li>
                                        <li><span>상담분야: </span>세무,회계 / 법률법무 / 지식재산권 / 마케팅판로 / 노무 / 투자 / 초기 창업자금 조달 /
                                            비즈니스모델링 / 시제품개발 / 글로벌진출 / 스케일업(코스닥 CEO등) / 민간 기술자문(대기업 임직원) / 또래CEO
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span className={cx("number")}><strong>02.</strong> 멘토 배정</span>
                                    <p>
                                        멘토 배정에는 최대 일주일의 시간이 소요됩니다.
                                    </p>
                                </li>
                                <li>
                                    <span className={cx("number")}><strong>03.</strong> 만족도 조사</span>
                                    <p>
                                        최종 배정된 멘토가 멘티에게 연락해 가능한 상담 일정을 조율합니다.
                                    </p>
                                </li>
                                <li>
                                    <span className={cx("number")}><strong>04.</strong> 상담일정 조율</span>
                                    <p>
                                        온라인(회상), 오프라인 전화, 이메일 등 다양한 방식으로 상담을 진행합니다.
                                    </p>
                                </li>
                                <li>
                                    <span className={cx("number")}><strong>05.</strong> 멘토링 진행</span>
                                    <p>
                                        양질의 멘토링 서비스 제공을 위해 멘토링 만족도를 조사합니다. <br/>
                                        만족도 조사 후에 멘토의 종합의견을 열람할 수 있습니다.
                                    </p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>

            </section>

        </>
    );
};

export default CounselApply;
