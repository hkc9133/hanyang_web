import React,{useState} from 'react';
import PageNavigation from "../../component/layout/PageNavigation";

import styles from '../../public/assets/styles/mentor/mentor.module.css';
import classnames from "classnames/bind"
import Image from "next/image";
import SignUpInfo from "../../component/auth/SignUpInfo";
import Modal from "../../component/common/Modal";


const cx = classnames.bind(styles);

const MentorIntroduce = () => {

    const [showMentorDetail, setShowMentorDetail] = useState(false);
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
                                <div className={cx("photo")}><Image src="/assets/image/mentor_group_photo.jpg" width={120} height={120} alt="mentor_group_photo"/></div>
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
                                    onClick={() => {setShowMentorDetail(true)}}></button>
                        </li>
                        <li>
                            <div className={`${cx("mentor_top")} clfx `}>
                                <div className={cx("photo")}><Image src="/assets/image/mentor_group_photo.jpg" width={120} height={120} alt="mentor_group_photo"/></div>
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
                                    onClick={() => {setShowMentorDetail(true)}}></button>
                        </li>
                        <li>
                            <div className={`${cx("mentor_top")} clfx `}>
                                <div className={cx("photo")}><Image src="/assets/image/mentor_group_photo.jpg" width={120} height={120} alt="mentor_group_photo"/></div>
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
                                    onClick={() => {setShowMentorDetail(true)}}></button>
                        </li>
                        <li>
                            <div className={`${cx("mentor_top")} clfx `}>
                                <div className={cx("photo")}><Image src="/assets/image/mentor_group_photo.jpg" width={120} height={120} alt="mentor_group_photo"/></div>
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
                                    onClick={() => {setShowMentorDetail(true)}}></button>
                        </li>
                        <li>
                            <div className={`${cx("mentor_top")} clfx `}>
                                <div className={cx("photo")}><Image src="/assets/image/mentor_group_photo.jpg" width={120} height={120} alt="mentor_group_photo"/></div>
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
                                    onClick={() => {setShowMentorDetail(true)}}></button>
                        </li>
                        <li>
                            <div className={`${cx("mentor_top")} clfx `}>
                                <div className={cx("photo")}><Image src="/assets/image/mentor_group_photo.jpg" width={120} height={120} alt="mentor_group_photo"/></div>
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
                                    onClick={() => {setShowMentorDetail(true)}}></button>
                        </li>
                    </ul>
                </div>
                <Modal visible={showMentorDetail} closable={true} maskClosable={true} onClose={() => setShowMentorDetail(false)} cx={cx} className={cx("mentor_detail_popup")}>
                    <strong className={cx("name")}>류창한</strong>
                    <ul className={cx("title")}>
                        <li>한양대학교창업지원단단장</li>
                        <li>한양대학교경영학박사</li>
                    </ul>
                    <div className={cx("career")}>
                        <ul>
                            <li>現한양대학교창업지원단장</li>
                            <li>現대학원창업융합학과주임교수</li>
                            <li>前(주)데이콤사이버패스창업 및 KOSDAQ</li>
                        </ul>
                    </div>
                    <div className={cx("keyword")}>
                        <span>멘토링Keyword</span>
                        <p className={cx("c-blue")}>#엔젤투자 #비즈니스모델 #사업계획 수립</p>
                    </div>
                    <div className={cx("self_introduction")}>
                        평생 직장도, 평생 직업도 없는 21세기에는 누구나 한번 이상은 창업의 기회를 마주하게될 것 입니다. 아이디어나 기술만으로도 창업에 도전할 수 있지만, 지속가능한 성공을
                        위해서는 체계적인 교육과 훈련이 필요합니다. 다양한분야의 전문지식을 알아야 하고, 실전경험을 통해‘촉’을 체득해야 합니다.
                    </div>
                </Modal>

                <div className={cx("paging")}>
                    <a href="#"><Image src="/assets/image/page_prev.gif" width={8} height={14} alt="page_prev"/></a>
                    <a href="#" className={cx("on")}>1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#"><Image src="/assets/image/page_next.gif" width={8} height={14} alt="page_next"/></a>
                </div>
            </div>
        </>
    );
};

export default MentorIntroduce;
