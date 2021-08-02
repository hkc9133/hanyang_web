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
import client,{baseUrl}from "../../lib/api/client";
import Head from "next/head";


const cx = classnames.bind(styles);

const MentorIntroduce = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [showMentorDetail, setShowMentorDetail] = useState(false);
    const [mentorDetail, setMentorDetail] = useState(null);

    const {mentorList,counselField,counselFiledLoading} = useSelector(({mentoring, loading}) => ({
        mentorList:mentoring.mentorList,
        counselField: mentoring.counselField,
        counselFiledLoading: loading['mentoring/GET_COUNSEL_FIELD_CODE'],
    }))

    useEffect(() => {
        const {pageSize = 6,counselField = null} = qs.parse(router.pathname,{
            ignoreQueryPrefix:true,
        });

        const data = {
            counselField:counselField,
            pageSize:6
        }
        const queryString = qs.stringify(data);
        // router.push(`${router.pathname}?${queryString}`)
        dispatch(getCounselFieldCode(router.query));
    },[])

    useEffect(() => {
        dispatch(getMentorList(router.query))
    },[router.query])

    const pageChange = useCallback((page) =>{
        const { counselField = ""} = router.query
        const data = {
            counselField:counselField,
            page:page,
            pageSize:6
        }
        const queryString = qs.stringify(data);
        router.push(`${router.pathname}?${queryString}`)
    },[router.query])

    const showMentorInfoModal = (mentorId) =>{
        setMentorDetail(mentorId)
        setShowMentorDetail(true)
    }

    const getProfileImage =(item) =>{

    }

    return (
        <>
            <Head>
                <title>한양대학교 창업지원단 -멘토단 소개</title>
            </Head>
            <PageNavigation/>
            <div className={cx("sub_container","mentor_group")}>
                <h1 className={cx("sub_top_title")}>멘토단 소개</h1>
                <p className={cx("sub_top_txt")}>전문 멘토로부터 듣는 창업 알짜 정보 예비창업자를 위한 <br/>창업 전문 상담코너입니다.</p>
                    {counselField.result && counselField.list !== null && (
                        <CounselFieldCateList cx={cx} list={counselField.list}/>
                    )}
                <div className={cx("mentor_group_list")}>
                    <ul>
                        {mentorList.list.map((item) =>(
                            <li key={item.mentorId}>
                            <div className={`${cx("mentor_top")} clfx `}>
                                <div className={cx("photo")}><img src={item.filePath != null ? `${baseUrl}/resource${item.filePath}/${item.fileName+item.fileExtension}` : "/assets/image/main_startup_1.png"} width={120} height={120} alt="mentor_group_photo"/></div>
                                <div className={cx("mentor")}>
                                    <strong className={cx("name")}>{item.mentorName}</strong>
                                    <span>{item.mentorPosition}</span>
                                    <span>{item.mentorCompany}</span>
                                </div>
                            </div>
                            <div className={cx("tag")}>
                                {item.mentorKeyword.map((keyword)=>(`#${keyword} `))}
                            </div>
                            <ul>
                                {item.mentorCareer.map((career,i)=>(
                                    i < 3 && <li key={career}>{career}</li>
                                ))}
                            </ul>
                            <div className={cx("btn_area")}>
                                <Link href="/startup_counsel/counsel_process"><a><span>창업상담 하기</span></a></Link>
                            </div>
                            <button type="button" className={cx("more")}
                                    onClick={() => {showMentorInfoModal(item)}}></button>
                        </li>
                        ))}
                    </ul>
                </div>
                {mentorDetail != null && (
                    <Modal visible={showMentorDetail} closable={true} maskClosable={true} onClose={() => setShowMentorDetail(false)} cx={cx} className={cx("mentor_detail_popup")}>
                        <strong className={cx("name")}>{mentorDetail.mentorName}</strong>
                        <ul className={cx("title")}>
                            <li>{mentorDetail.mentorCompany}</li>
                        </ul>
                        <div className={cx("career")}>
                            <ul>
                                {mentorDetail.mentorCareer.map((career)=>(
                                    <li key={career}>{career}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={cx("keyword")}>
                            <span>멘토링Keyword</span>
                            <p className={cx("c-blue")}>
                                {mentorDetail.mentorKeyword.map((keyword)=>(`#${keyword} `))}
                            </p>
                        </div>
                        <div className={cx("self_introduction")}>
                            {mentorDetail.mentorIntroduction}
                        </div>
                    </Modal>
                )}

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
