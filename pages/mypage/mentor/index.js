import React, {useEffect, useState} from 'react';
import MentorCounselApplyHistory from "../../../component/mypage/mentor/MentorCounselApplyHistory";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {commissionDownload, getCounselApply, getMentorCounselApplyList} from "../../../store/mentoring/mentoring";
import Link from "next/link";
import MentorCounselApplyList from "../../../component/mypage/mentor/MentorCounselApplyList";
import Pagination from "../../../component/common/Pagination";


import styles from '../../../public/assets/styles/startup_info/startup_info.module.css';
import classnames from "classnames/bind"
import client from "../../../lib/api/client";

const cx = classnames.bind(styles);
const MyComponent = () => {

    const dispatch = useDispatch();
    const router = useRouter();

    const [showAnswer, setShowAnswer] = useState(false);
    const [answer, setAnswer] = useState(null);

    const {user, counselApply, counselApplyList} = useSelector(({auth, mentoring, loading}) => ({
        user: auth.user,
        counselApply: mentoring.getCounselApply.counselApply,
        counselApplyList: mentoring.counselApplyList,
    }))

    useEffect(() => {

    }, [])

    useEffect(() => {
        const {page = 1} = router.query
        const data = {
            page: page,
        }
        dispatch(getMentorCounselApplyList(data))

    }, [router.query])

    const pageChange = (pageNum) => {
        const queryString = qs.stringify({...router.query, page: pageNum});
        router.push(`${router.pathname}?${queryString}`)
    }

    const handleShowAnswer = (formId) => {
        if (formId == showAnswer) {
            setShowAnswer(null)
        } else {
            dispatch(getCounselApply(formId));
            setShowAnswer(formId)
        }
    }

    const handleDownload = () => {
        dispatch(commissionDownload())
    }
    return (
        <div>
            <section className={cx("container")}>
                <div className={cx("sub_container", "mentor_groupList")}>
                    <h1 className={cx("sub_top_title")}>관리</h1>
                    <p className={cx("sub_top_txt")}>전문 멘토로부터 듣는 창업 알짜 정보 예비창업자를 위한 <br/>창업 전문 상담코너입니다.</p>

                    <div className={cx("tab_style_2")}>
                        <ul>
                            <li className={cx("on")}><Link href="/mypage/mentor"><a>나의 멘토링현황</a></Link></li>
                            <li><Link href="/mypage/mentor/profile"><a>프로필 변경</a></Link></li>
                            <li><a href={`${client.defaults.baseURL}/mentoring/commission`}>위촉장 발급</a></li>
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
                    <MentorCounselApplyHistory counselApplyList={counselApplyList} handleShowAnswer={handleShowAnswer}
                                               showAnswer={showAnswer} cx={cx} pageChange={pageChange}/>
                </div>
            </section>
        </div>
    );
};

export default MyComponent;
