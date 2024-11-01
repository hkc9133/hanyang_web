import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import styles from '../../../public/assets/styles/startup_info/startup_info.module.css';
import classnames from "classnames/bind"
import CounselApplyList from "./CounselApplyList";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {
    getCounselApply,
    getCounselApplyList, initializeForm,
    updateCounselApplyStatus,
    updateDiary
} from "../../../store/mentoring/mentoring";
import Pagination from "../../common/Pagination";
import {Modal} from "antd";
const cx = classnames.bind(styles);

const CounselApplyHistoryList = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [showAnswer, setShowAnswer] = useState(false);
    const [answer, setAnswer] = useState(null);

    const {user,counselApply,counselApplyList,statusUpdate,updateDiaryResult} = useSelector(({auth,mentoring, loading}) => ({
        user: auth.user,
        statusUpdate: mentoring.statusUpdate,
        counselApply:mentoring.getCounselApply.counselApply,
        counselApplyList:mentoring.counselApplyList,
        updateDiaryResult:mentoring.updateDiary
    }))

    useEffect(() =>{

    },[])

    useEffect(() => {
        fetchList()

    },[router.query])

    const fetchList = () =>{
        const { page = 1} = router.query
        const data = {
            page:page,
        }
        dispatch(getCounselApplyList(data))
    }

    useEffect(() =>{
        if(updateDiaryResult.result && updateDiaryResult.error == null){
            dispatch(getCounselApply(counselApply.formId));
        }
    },[updateDiaryResult])

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

    const handleUpdateScore = (formId,score) =>{
        const data = {
            formId:formId,
            score:score
        }
        console.log(data)
        dispatch(updateDiary(data))
    }

    const cancelConfirm = (formId) =>{
        Modal.confirm({
            title: '상담을 취소하시겠습니까?',
            onOk: () => {
                changeStatus(formId)
            },
            okText:"상담 취소",
            cancelText:"닫기",
        });
    }
    const changeStatus = (formId) => {
        const data = {
            formId: formId,
            applyStatus: "CANCEL"
        }
        dispatch(updateCounselApplyStatus(data));
    }

    useEffect(() => {
        if (statusUpdate.result) {
            Modal.info({
                title: '상담 취소가 완료되었습니다',
                okText:"닫기",
                maskClosable:false,
                onOk:() =>{router.reload();}
            });
            initializeForm('statusUpdate');
        }

    }, [statusUpdate])

    return (
        <div>
            <section className={cx("container")}>
                <div className={cx("sub_container","mentor_groupList")}>
                    {/*<h1 className={cx("sub_top_title")}>관리</h1>*/}
                    {/*<p className={cx("sub_top_txt")}>전문 멘토로부터 듣는 창업 알짜 정보 예비창업자를 위한 <br/>창업 전문 상담코너입니다.</p>*/}

                    <div className={cx("tab_style_2")}>
                        <ul>
                            <li className={cx("on")}><Link href="/mypage/mentee"><a>창업상담 현황</a></Link></li>
                            {/*<li><Link href="/mypage/mentee/student_report"><a>학생창업신고 현황</a></Link></li>*/}
                        </ul>
                    </div>

                    <h2>나의 창업상담 현황</h2>
                    <ul className={cx("current_situation")}>
                        <li>
                            <span className={cx("title")}>신청건수</span>
                            <span><strong>{counselApplyList.page != null && counselApplyList.page.totalCount}</strong>건</span>
                        </li>
                    </ul>
                    <div className={cx("th_title")}>
                        <ul>
                            <li className={cx("w_1")}>NO</li>
                            <li className={cx("w_2")}>신청일</li>
                            <li className={cx("w_3")}>상담 제목</li>
                            <li className={cx("w_4")}>상담진행 상태</li>
                            <li className={cx("w_5")}>담당멘토</li>
                            <li className={cx("w_6")}>관리</li>
                        </ul>
                    </div>
                    <div className={cx("td_content")}>
                        <CounselApplyList list={counselApplyList.list} cx={cx} handleShowAnswer={handleShowAnswer} showAnswer={showAnswer} handleUpdateScore={handleUpdateScore} cancelConfirm={cancelConfirm}/>
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

export default CounselApplyHistoryList;
