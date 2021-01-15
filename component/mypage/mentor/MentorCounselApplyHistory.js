import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import styles from '../../../public/assets/styles/startup_info/startup_info.module.css';
import classnames from "classnames/bind"
import Image from 'next/image'
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {getCounselApply, getCounselApplyList, getMentorCounselApplyList} from "../../../store/mentoring/mentoring";
import Pagination from "../../common/Pagination";
import MentorCounselApplyList from "./MentorCounselApplyList";
const cx = classnames.bind(styles);

const MentorCounselApplyHistoryList = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [showAnswer, setShowAnswer] = useState(false);
    const [answer, setAnswer] = useState(null);

    const {user,counselApply,counselApplyList} = useSelector(({auth,mentoring, loading}) => ({
        user: auth.user,
        counselApply:mentoring.getCounselApply.counselApply,
        counselApplyList:mentoring.counselApplyList,
    }))

    useEffect(() =>{

    },[])

    useEffect(() => {
        const { page = 1} = router.query
        const data = {
            page:page,
        }
        dispatch(getMentorCounselApplyList(data))

    },[router.query])

    const pageChange = (pageNum) => {
        const queryString = qs.stringify({...router.query,page:pageNum});
        router.push(`${router.pathname}?${queryString}`)
    }

    const handleShowAnswer = (formId) =>{
        if(formId == showAnswer){
            setShowAnswer(null)
        }else{
            dispatch(getCounselApply(formId));
            setShowAnswer(formId)
        }
    }

    return (
        <div>
            <section className={cx("container")}>
                <div className={cx("sub_container","mentor_groupList")}>
                    <h1 className={cx("sub_top_title")}>관리</h1>
                    <p className={cx("sub_top_txt")}>전문 멘토로부터 듣는 창업 알짜 정보 예비창업자를 위한 <br/>창업 전문 상담코너입니다.</p>

                    <div className={cx("tab_style_2")}>
                        <ul>
                            <li className={cx("on")}><a href="mentoring_management.html">나의 멘토링현황</a></li>
                            <li><a href="change_profile.html">프로필변경</a></li>
                            <li><a href="appointment.html">위촉장 리스트</a></li>
                        </ul>
                    </div>

                    <h2>나의 멘토링 현황</h2>
                    <ul className={cx("current_situation")}>
                        <li>
                            <span className={cx("title")}>신청건수</span>
                            <span><strong>{counselApplyList.page != null && counselApplyList.page.totalCount}</strong>건</span>
                        </li>
                        {/*<li>*/}
                        {/*    <span className={cx("title")}>진행건수</span>*/}
                        {/*    <span><strong>5</strong>건</span>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <span className={cx("title")}>완료건수</span>*/}
                        {/*    <span><strong>5</strong>건</span>*/}
                        {/*</li>*/}
                    </ul>
                    <div className={cx("th_title")}>
                        <ul>
                            <li className={cx("w_1")}>NO</li>
                            <li className={cx("w_2")}>신청일</li>
                            <li className={cx("w_3")}>상담 제목</li>
                            <li className={cx("w_4")}>상담진행 상태</li>
                            <li className={cx("w_5")}>담당멘토</li>
                        </ul>
                    </div>
                    <div className={cx("td_content")}>
                        <MentorCounselApplyList list={counselApplyList.list} cx={cx} handleShowAnswer={handleShowAnswer} showAnswer={showAnswer}/>
                    </div>
                    {counselApplyList.page != null && (
                        <Pagination
                            totalRecords={counselApplyList.page.totalCount}
                            pageLimit={counselApplyList.page.pageSize}
                            pageNeighbours={1}
                            currentPage={counselApplyList.page.pageNo}
                            onPageChanged={pageChange}
                        />
                    )}
                </div>
            </section>
        </div>
    );
};

export default MentorCounselApplyHistoryList;
