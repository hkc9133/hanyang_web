import React, {useEffect, useState} from 'react';
import Image from "next/image";
import MentorListTable from "../../../component/admin/mentor/MentorListTable";
import Pagination from "../../../component/common/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {getBoardList} from "../../../store/board/adminBoard";
import qs from "query-string";

import styles from '../../../public/assets/styles/admin/mentor/mentor.module.css';
import classnames from "classnames/bind"
import {getCounselApplyList, getMentorList} from "../../../store/mentoring/adminMentoring";
import CounselApplyListTable from "../../../component/admin/counsel_apply/CounselApplyListTable";
import Link from "next/link";
import {port, url} from "../../../lib/api/client";

const cx = classnames.bind(styles);

const CounselApplyListPage = () => {

    const dispatch = useDispatch();
    const router = useRouter();

    const [searchInfo, setSearchInfo] = useState({
        searchField:"",
        searchValue:""
    })

    const {counselApplyList} = useSelector(({adminMentoring,loading})=> ({
        counselApplyList:adminMentoring.counselApplyList,
    }))

    useEffect(() => {
    },[])

    useEffect(() => {
        const { page = 1,searchValue = null,searchField = null,mentorStatus = null} = router.query
        const data = {
            page:page,
            ...searchInfo
        }
        dispatch(getCounselApplyList(data));
    },[router.query])

    const changeSearchInfo = (e) => {
        const {name, value} = e.target;

        setSearchInfo({
            ...searchInfo,
            [name]:value
        })
    }

    const searchUser = (e) => {
        const queryString = qs.stringify(router.query);
        router.push(`${router.pathname}?${queryString}`)
    }

    const pageChange = (pageNum) => {
        const queryString = qs.stringify({...router.query,page:pageNum});
        router.push(`${router.pathname}?${queryString}`)
    }
    return (
        <section className={cx("container")}>
            <h1 className={cx("top_title")}>상담신청서 관리</h1>
            <div className={cx("adm_container")}>
                <div className={`${cx("mentor_info","box")} clfx `}>
                    <ul className={"clfx"}>
                        <li>
                            <span className={cx("title","icon_1")}>신청서 검색 수</span>
                            <div className={cx("number")}>
                                <strong>{counselApplyList.page != null && counselApplyList.page.totalCount}</strong>명
                            </div>
                        </li>
                    </ul>

                    <div className={`${cx("mentor_id_search")} clfx`}>

                        {/*<select name="mentorStatus" onChange={(e) =>{changeSearchInfo(e)}}>*/}
                        {/*    <option value="">승인 상태</option>*/}
                        {/*    <option value="STANDBY">미승인</option>*/}
                        {/*    <option value="ACCEPT">승인</option>*/}
                        {/*</select>*/}
                        <select name="searchField" onChange={(e) =>{changeSearchInfo(e)}}>
                            <option value="">검색조건</option>
                            <option value="user_id">아이디</option>
                            <option value="mentor_name">이름</option>
                            <option value="mentor_company">소속</option>
                            <option value="mentorPhoneNumber">핸드폰번호</option>
                            <option value="mentor_email">E-MAIL</option>
                        </select>
                        <input type="text" name="searchValue" onChange={(e) =>{changeSearchInfo(e)}} />
                        <button type="button" className={cx("btn_search")} onClick={()=>{searchUser()}}>
                            <Image src="/assets/image/admin/btn_search.gif" width={40} height={33} alt="검색하기"/>
                        </button>
                    </div>
                </div>

                <p className={cx("txt_style_1")}>
                    {/*회원자료 삭제 시 다른 회원이 기존 회원아이디를 사용하지 못하도록 회원아이디, 이름, 닉네임은 삭제하지 않고 영구*/}
                    {/*보관합니다.*/}
                </p>

                <div className={cx("admin_cont")}>
                    <h2 className={cx("title_style_1")}><span>전체목록</span></h2>
                    <div className={cx("btn-box02")}>
                        <Link href={`${url}:${port}/api/admin/mentoring/counsel_apply/excel_download`}><a className={cx("basic-btn04")} download target="_blank">액셀 다운로드</a></Link>
                    </div>
                    <div className={cx("tb_style_1")}>
                        <CounselApplyListTable cx={cx} list={counselApplyList.list}/>
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

            </div>
        </section>
    );
};

export default CounselApplyListPage;
