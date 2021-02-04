import React from 'react';

import Link from 'next/link';
import styles from '../../public/assets/styles/introduce/introduce.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";

const cx = classnames.bind(styles);

const Infra = () => {
    return (
        <>
            <PageNavigation/>
        <section className={cx("container")}>
            <div className={cx("sub_container", "infrastructure")}>
                <h1 className={cx("sub_top_title")}>인프라</h1>
                <p className={cx("sub_top_txt")}>창업 실행시 필요한 시제품 제작, 제품디자인, 기술디자인, 투자 등<br/>인프라를 지원하고 있습니다 .</p>
                <div className={cx("infrastructure_top")}>
                    <div className={cx("img_area")}>
                        <img src="/assets/image/infrastructure_img.jpg" alt="infrastructure_img"/>
                    </div>
                    <ul className={cx("infrastructure_list")}>
                        <li className={cx("list_1")}>
                            <div className={cx("title")}>아이디어 고도화</div>
                            <ul>
                                <li>
                                    <span className={cx("s_title")}>휴온스팹랩</span>
                                    -시제품 디자인 및 제작지원
                                </li>
                                <li>
                                    <span className={cx("s_title")}>Art&amp; Technology 학과</span>
                                    -예술, 기술 융합/ 시제품 판매

                                </li>
                                <li>
                                    <span className={cx("s_title")}>Imagine Lab</span>
                                    -가상 3D설계 및 3D프린팅기술지원

                                </li>
                                <li>
                                    <span className={cx("s_title")}>Design Lab</span>
                                    -융합캡스톤디자인/아이디어고도화
                                </li>
                            </ul>
                        </li>
                        <li className={cx("list_2")}>
                            <div className={cx("title")}>기술사업화 교육지원</div>
                            <ul>
                                <li>
                                    <span className={cx("s_title")}>기술경영전문대학원</span>
                                    -신제품 개발 및 기술사업화 교육
                                </li>
                                <li>
                                    <span className={cx("s_title")}>공과대학원</span>
                                    -AI, 로봇, 바이오등 연구 기술지원
                                </li>
                                <li>
                                    <span className={cx("s_title")}>융합전공대학</span>
                                    -융합기술교육 및 창업융합전공
                                </li>
                                <li>
                                    <span className={cx("s_title")}>공학교육혁신센터</span>
                                    -캡스톤디자인 및 공학교육
                                </li>
                            </ul>
                        </li>
                        <li className={cx("list_3")}>
                            <div className={cx("title")}>기술이전/산학협력</div>
                            <ul>
                                <li>
                                    <span className={cx("s_title")}>기업혁신지원센터</span>
                                    -ALL-SET 지원 및 기술협의회
                                </li>
                                <li>
                                    <span className={cx("s_title")}>기술이전센터</span>
                                    -기술이전 및 지재권상담 가치평가
                                </li>
                                <li>
                                    <span className={cx("s_title")}>공동기기원</span>
                                    -공동장비 활용 및 분석, 인증
                                </li>
                            </ul>
                        </li>
                        <li className={cx("list_4")}>
                            <div className={cx("title")}>실험실 창업지원</div>
                            <ul>
                                <li>
                                    <span className={cx("s_title")}>기술사업화센터</span>
                                    -실험실 창업 <br/>
                                    -기술검증 및 기술 사업호 <br/>
                                    -우수IP창출, 기술 마케팅 <br/>
                                    -출자회사 설립지원
                                </li>
                            </ul>
                        </li>
                        <li className={cx("list_5")}>
                            <div className={cx("title")}>투자</div>
                            <ul>
                                <li>
                                    <span className={cx("s_title")}>한양엔젤클럽</span>
                                </li>
                                <li>
                                    <span className={cx("s_title")}>대학기술지주회사</span>
                                    -TIPS프로그램 운영사 <br/>
                                    -교육부 대학창업펀드 운영사 <br/>
                                    -투자자와 비공개IR <br/>
                                    -엔젤투자 매칭펀드 <br/>
                                    -코칭 및 멘토링 <br/>
                                    -기술사업화 및 기술자문
                                </li>
                            </ul>
                        </li>
                        <li className={cx("list_6")}>
                            <div className={cx("title")}>산학협력협의회</div>
                            <ul>
                                <li>
                                    <span className={cx("s_title")}>창업지원단 IAB</span>
                                    -대학창업지원, 산학연계교육
                                </li>
                                <li>
                                    <span className={cx("s_title")}>Art&amp; Technology 학과</span>
                                    -대학 스타트업 생태계 활성화

                                </li>
                                <li>
                                    <span className={cx("s_title")}>한양VC동문회</span>
                                    -동문기업 자금지원, 컨설팅

                                </li>
                                <li>
                                    <span className={cx("s_title")}>글로벌 스타트업 멘토단</span>
                                    -글로벌 진출, 시장동향 자문
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className={cx("infrastructure_btm")}>
                    <div className={"clfx"}>
                        <div className={cx("left_area")}>
                            <h2>코맥스 스타트업타운</h2>
                            <ul>
                                <li>
                                    <img src="/assets/image/infra_town_1.jpg" alt="infra_town_1"/>
                                </li>
                                <li>
                                    <img src="/assets/image/infra_town_2.jpg" alt="infra_town_2" />
                                </li>
                            </ul>
                            <span className={cx("txt")}>학생창업자, 창업동아리를 위한 전용공간(면적 468.6㎡)</span>
                        </div>
                        <div className={cx("right_area")}>
                            <h2>247 스타트업 돔</h2>
                            <ul>
                                <li>
                                    <img src="/assets/image/infra_dom_1.jpg" alt="infra_dom_1"/>
                                </li>
                                <li>
                                    <img src="/assets/image/infra_dom_2.jpg" alt="infra_dom_2" />
                                </li>
                            </ul>
                            <span className={cx("txt")}>코워킹스페이스, 기숙사(10개실), 회의실 등 (면적 637㎡)</span>
                        </div>
                    </div>

                    <div className={"clfx"}>
                        <div className={cx("left_area")}>
                            <h2>휴온스팹랩</h2>
                            <ul>
                                <li>
                                    <img src="/assets/image/infra_lab_1.jpg" alt="infra_lab_1"/>
                                </li>
                                <li>
                                    <img src="/assets/image/infra_lab_2.jpg" alt="infra_lab_2" />
                                </li>
                            </ul>
                            <span className={cx("txt")}>학생창업자를 위한 시제품 구현공간(면적 941㎡)</span>
                        </div>
                        <div className={cx("right_area")}>
                            <h2>창업보육센터</h2>
                            <ul>
                                <li>
                                    <img src="/assets/image/infra_center_1.jpg" alt="infra_center_1"/>
                                </li>
                                <li>
                                    <img src="/assets/image/infra_center_2.jpg" alt="infra_center_2" />
                                </li>
                            </ul>
                            <span className={cx("txt")}>창업자인큐베이팅을 위한 전용공간(면적 1,459㎡)</span>
                        </div>
                    </div>

                    <div className={"txt_c"}>
                        <Link href="/introduce/space_reservation"><a className={cx("basic-btn03","btn-blue-bd")}>공간예약하기</a></Link>
                    </div>
                </div>

            </div>
        </section>
            </>
    );
};

export default Infra;
