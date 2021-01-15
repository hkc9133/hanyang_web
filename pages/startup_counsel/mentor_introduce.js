import React, {useCallback, useEffect, useState} from 'react';
import PageNavigation from "../../component/layout/PageNavigation";

import styles from '../../public/assets/styles/mentor/mentor.module.css';
import classnames from "classnames/bind"
import Image from "next/image";
import Link from 'next/link';
import SignUpInfo from "../../component/auth/SignUpInfo";
import Modal from "../../component/common/Modal";
import {useDispatch, useSelector} from "react-redux";
import CounselFieldCateList from "../../component/mentor_introduce/CounselFieldCateList";
import {getCounselFieldCode, getMentorList} from "../../store/mentoring/mentoring";
import qs from 'query-string';
import {useRouter} from "next/router";
import Pagination from "../../component/common/Pagination";


const cx = classnames.bind(styles);

const MentorIntroduce = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [showMentorDetail, setShowMentorDetail] = useState(false);

    const {mentorList,counselField,counselFiledLoading} = useSelector(({mentoring, loading}) => ({
        mentorList:mentoring.mentorList,
        counselField: mentoring.counselField,
        counselFiledLoading: loading['mentoring/GET_COUNSEL_FIELD_CODE'],
    }))

    useEffect(() => {
        const {page = 1,counselField = null} = qs.parse(router.pathname,{
            ignoreQueryPrefix:true,
        });

        dispatch(getMentorList())

        dispatch(getCounselFieldCode(router.query));
    },[])

    useEffect(() => {
        dispatch(getMentorList(router.query))
        // dispatch(getCounselFieldCode(router.query));
    },[router.query])

    const pageChange = useCallback((page) =>{
        const { counselField = ""} = router.query
        const data = {
            counselField:counselField,
            page:page,
        }
        const queryString = qs.stringify(data);
        router.push(`${router.pathname}?${queryString}`)
    },[router.query])

    return (
        <>
            <PageNavigation/>
            <div className={cx("sub_container","mentor_group")}>
                <h1 className={cx("sub_top_title")}>멘토단 소개</h1>
                <p className={cx("sub_top_txt")}>전문 멘토로부터 듣는 창업 알짜 정보 예비창업자를 위한 <br/>창업 전문 상담코너입니다.</p>
                    {counselField.result && counselField.list !== null && (
                        <CounselFieldCateList cx={cx} list={counselField.list}/>
                    )}
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
                                <Link href="#"><a><span>창업상담 하기</span></a></Link>
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
                                <Link href="#"><a><span>창업상담 하기</span></a></Link>
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
                                <Link href="#"><a><span>창업상담 하기</span></a></Link>
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
                                <Link href="#"><a><span>창업상담 하기</span></a></Link>
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
                                <Link href="#"><a><span>창업상담 하기</span></a></Link>
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
                                <Link href="#"><a><span>창업상담 하기</span></a></Link>
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

                {mentorList.page != null && (
                    <Pagination
                        totalRecords={mentorList.page.totalCount}
                        pageLimit={mentorList.page.pageSize}
                        pageNeighbours={1}
                        currentPage={mentorList.page.pageNo}
                        onPageChanged={pageChange}
                    />
                )}
            </div>
        </>
    );
};

export default MentorIntroduce;
