import React, {useEffect, useState} from 'react';
import styles from '../../../public/assets/styles/startup_info/startup_info.module.css';
import classnames from "classnames/bind"
import Pagination from "../../common/Pagination";
import MentorCounselApplyList from "./MentorCounselApplyList";
const cx = classnames.bind(styles);

const MentorCounselApplyHistoryList = ({counselApplyList,handleShowAnswer,showAnswer,pageChange }) => {
    // const dispatch = useDispatch();
    // const router = useRouter();
    //
    // const [showAnswer, setShowAnswer] = useState(false);
    // const [answer, setAnswer] = useState(null);
    //
    // const {user,counselApply,counselApplyList} = useSelector(({auth,mentoring, loading}) => ({
    //     user: auth.user,
    //     counselApply:mentoring.getCounselApply.counselApply,
    //     counselApplyList:mentoring.counselApplyList,
    // }))
    //
    // useEffect(() =>{
    //
    // },[])
    //
    // useEffect(() => {
    //     const { page = 1} = router.query
    //     const data = {
    //         page:page,
    //     }
    //     dispatch(getMentorCounselApplyList(data))
    //
    // },[router.query])
    //
    // const pageChange = (pageNum) => {
    //     const queryString = qs.stringify({...router.query,page:pageNum});
    //     router.push(`${router.pathname}?${queryString}`)
    // }
    //
    // const handleShowAnswer = (formId) =>{
    //     if(formId == showAnswer){
    //         setShowAnswer(null)
    //     }else{
    //         dispatch(getCounselApply(formId));
    //         setShowAnswer(formId)
    //     }
    // }

    return (
        <>
            <div className={cx("th_title")}>
                <ul>
                    <li className={cx("w_1")}>NO</li>
                    <li className={cx("w_2")}>신청일</li>
                    <li className={cx("w_3")}>상담 제목</li>
                    <li className={cx("w_4")}>상담진행 상태</li>
                    <li className={cx("w_5")}>상담 신청자</li>
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
        </>
    );
};

export default MentorCounselApplyHistoryList;
