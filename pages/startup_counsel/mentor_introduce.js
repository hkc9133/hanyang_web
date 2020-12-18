import React from 'react';
import PageNavigation from "../../component/layout/PageNavigation";

import styles from '../../public/assets/styles/mentor/mentor.module.css';
import classnames from "classnames/bind"
import Image from "next/image";


const cx = classnames.bind(styles);

const MentorIntroduce = () => {
    return (
        <>
            <PageNavigation/>
            <div className={cx("sub_container","mentor_group")}>
                <h1 className={cx("sub_top_title")}>멘토단 소개</h1>
                <p className={cx("sub_top_txt")}>전문 멘토로부터 듣는 창업 알짜 정보 예비창업자를 위한 <br/>창업 전문 상담코너입니다.</p>
                <div className={cx("tab_style_1")}>
                    <ul>
                        <li className={cx("on")}><a href="#"><span>전체</span></a></li>
                        <li><a href="#"><span>세무·회계</span></a></li>
                        <li><a href="#"><span>법률·법무</span></a></li>
                        <li><a href="#"><span>지식재산권</span></a></li>
                        <li><a href="#"><span>마케팅·판로</span></a></li>
                        <li><a href="#"><span>노무</span></a></li>
                        <li><a href="#"><span>투자</span></a></li>
                        <li><a href="#"><span>초기 창업자금 조달</span></a></li>
                        <li><a href="#"><span>비즈니스모델링</span></a></li>
                        <li><a href="#"><span>시제품·개발</span></a></li>
                        <li><a href="#"><span>글로벌 진출</span></a></li>
                        <li><a href="#"><span>스케일업(코스탁 CEO등)</span></a></li>
                        <li><a href="#"><span>캠퍼스 기술자문(교수)</span></a></li>
                        <li><a href="#"><span>민간기술자문(대기업 임직원)</span></a></li>
                        <li><a href="#"><span>또래 CEO</span></a></li>
                    </ul>
                </div>

                <div className={cx("mentor_group_list")}>
                    <ul>
                        <li>
                            <div className={`${cx("mentor_top")} clfx `}>
                                <div className={cx("photo")}><Image src="/assets/image/mentor_group_photo.jpg" width={120} height={120} alt="login_bg"/></div>
                                <div className={cx("mentor")}>
                                    <strong className={cx("name")}>류창한</strong>
                                    <span>한양대학교 창업지원 단장</span>
                                </div>
                            </div>
                            <div className={cx("tag")}>
                                #엔젤투자 #비즈니스모델 #사업계획 수립
                            </div>
                            <ul>
                                <li>現한양대학교창업지원단장</li>
                                <li>現대학원창업융합학과주임교수</li>
                                <li>前(주)데이콤사이버패스창업 및 KOSDAQ</li>
                            </ul>
                            <div className={cx("btn_area")}>
                                <a href="#"><span>창업상담 하기</span></a>
                            </div>
                            <button type="button" className={cx("more")}
                                    onClick="popup_open('.mentor_detail_popup');"></button>
                        </li>
                        <li>
                            <div className={`${cx("mentor_top")} clfx `}>
                                <div className={cx("photo")}><Image src="/assets/image/mentor_group_photo.jpg" width={120} height={120} alt="login_bg"/></div>
                                <div className={cx("mentor")}>
                                    <strong className={cx("name")}>류창한</strong>
                                    <span>한양대학교 창업지원 단장</span>
                                </div>
                            </div>
                            <div className={cx("tag")}>
                                #엔젤투자 #비즈니스모델 #사업계획 수립
                            </div>
                            <ul>
                                <li>現한양대학교창업지원단장</li>
                                <li>現대학원창업융합학과주임교수</li>
                                <li>前(주)데이콤사이버패스창업 및 KOSDAQ</li>
                            </ul>
                            <div className={cx("btn_area")}>
                                <a href="#"><span>창업상담 하기</span></a>
                            </div>
                            <button type="button" className={cx("more")}
                                    onClick="popup_open('.mentor_detail_popup');"></button>
                        </li>
                        <li>
                            <div className={`${cx("mentor_top")} clfx `}>
                                <div className={cx("photo")}><Image src="/assets/image/mentor_group_photo.jpg" width={120} height={120} alt="login_bg"/></div>
                                <div className={cx("mentor")}>
                                    <strong className={cx("name")}>류창한</strong>
                                    <span>한양대학교 창업지원 단장</span>
                                </div>
                            </div>
                            <div className={cx("tag")}>
                                #엔젤투자 #비즈니스모델 #사업계획 수립
                            </div>
                            <ul>
                                <li>現한양대학교창업지원단장</li>
                                <li>現대학원창업융합학과주임교수</li>
                                <li>前(주)데이콤사이버패스창업 및 KOSDAQ</li>
                            </ul>
                            <div className={cx("btn_area")}>
                                <a href="#"><span>창업상담 하기</span></a>
                            </div>
                            <button type="button" className={cx("more")}
                                    onClick="popup_open('.mentor_detail_popup');"></button>
                        </li>
                        <li>
                            <div className={`${cx("mentor_top")} clfx `}>
                                <div className={cx("photo")}><Image src="/assets/image/mentor_group_photo.jpg" width={120} height={120} alt="login_bg"/></div>
                                <div className={cx("mentor")}>
                                    <strong className={cx("name")}>류창한</strong>
                                    <span>한양대학교 창업지원 단장</span>
                                </div>
                            </div>
                            <div className={cx("tag")}>
                                #엔젤투자 #비즈니스모델 #사업계획 수립
                            </div>
                            <ul>
                                <li>現한양대학교창업지원단장</li>
                                <li>現대학원창업융합학과주임교수</li>
                                <li>前(주)데이콤사이버패스창업 및 KOSDAQ</li>
                            </ul>
                            <div className={cx("btn_area")}>
                                <a href="#"><span>창업상담 하기</span></a>
                            </div>
                            <button type="button" className={cx("more")}
                                    onClick="popup_open('.mentor_detail_popup');"></button>
                        </li>
                        <li>
                            <div className={`${cx("mentor_top")} clfx `}>
                                <div className={cx("photo")}><Image src="/assets/image/mentor_group_photo.jpg" width={120} height={120} alt="login_bg"/></div>
                                <div className={cx("mentor")}>
                                    <strong className={cx("name")}>류창한</strong>
                                    <span>한양대학교 창업지원 단장</span>
                                </div>
                            </div>
                            <div className={cx("tag")}>
                                #엔젤투자 #비즈니스모델 #사업계획 수립
                            </div>
                            <ul>
                                <li>現한양대학교창업지원단장</li>
                                <li>現대학원창업융합학과주임교수</li>
                                <li>前(주)데이콤사이버패스창업 및 KOSDAQ</li>
                            </ul>
                            <div className={cx("btn_area")}>
                                <a href="#"><span>창업상담 하기</span></a>
                            </div>
                            <button type="button" className={cx("more")}
                                    onClick="popup_open('.mentor_detail_popup');"></button>
                        </li>
                        <li>
                            <div className={`${cx("mentor_top")} clfx `}>
                                <div className={cx("photo")}><Image src="/assets/image/mentor_group_photo.jpg" width={120} height={120} alt="login_bg"/></div>
                                <div className={cx("mentor")}>
                                    <strong className={cx("name")}>류창한</strong>
                                    <span>한양대학교 창업지원 단장</span>
                                </div>
                            </div>
                            <div className={cx("tag")}>
                                #엔젤투자 #비즈니스모델 #사업계획 수립
                            </div>
                            <ul>
                                <li>現한양대학교창업지원단장</li>
                                <li>現대학원창업융합학과주임교수</li>
                                <li>前(주)데이콤사이버패스창업 및 KOSDAQ</li>
                            </ul>
                            <div className={cx("btn_area")}>
                                <a href="#"><span>창업상담 하기</span></a>
                            </div>
                            <button type="button" className={cx("more")}
                                    onClick="popup_open('.mentor_detail_popup');"></button>
                        </li>
                    </ul>
                </div>

                <div className={cx("paging")}>
                    <a href="#"><Image src="/assets/image/page_prev.gif" width={8} height={14} alt="login_bg"/></a>
                    <a href="#" className={cx("on")}>1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#"><Image src="/assets/image/page_next.gif" width={8} height={14} alt="login_bg"/></a>
                </div>
            </div>
        </>
    );
};

export default MentorIntroduce;
