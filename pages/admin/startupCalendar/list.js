import React, {useCallback, useEffect, useState} from 'react';
import Image from "next/image";

import styles from '../.././../public/assets/styles/admin/board/board.module.css';
import classnames from "classnames/bind"
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import qs from 'query-string';
import {getStartupCalendarList} from "../../../store/startupCalendar/adminStartupCalendar";
import StartupCalendarListTable from "../../../component/admin/startupCalendar/StartupCalendarListTable";
import Pagination from "../../../component/common/Pagination";
import { DatePicker } from 'antd';
const {RangePicker} = DatePicker;
const cx = classnames.bind(styles);
import locale from 'antd/lib/date-picker/locale/ko_KR';
import { Input } from 'antd';

import Link from 'next/link';
const { Search } = Input;

const List = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [searchInfo, setSearchInfo] = useState({
        searchField:"",
        searchValue:"",
        categoryCodeId:"",
        progressStatus:""
    })

    const {startupCalendar} = useSelector(({adminStartupCalendar,loading})=> ({
        startupCalendar:adminStartupCalendar.startupCalendar,
    }))


    useEffect(() => {

        // const { type = "L"} = router.query
        // setSearchInfo(searchInfo =>({
        //     ...searchInfo,
        //     type:type
        // }))

        const { page = 1,date = null,categoryCodeId = null,searchValue = null,searchField = null,startDate = null, endDate=null,progressStatus=null} = router.query

        const data = {
            page:page,
            categoryCodeId:categoryCodeId,
            searchValue:searchValue,
            searchField:searchField,

            startDate:startDate,
            progressStatus:progressStatus,
            endDate:endDate
        }

        dispatch(getStartupCalendarList(data))
    },[router.query])

    const pageChange = useCallback((page) =>{
        const { type = "L",categoryCodeId = ""} = router.query
        const data = {
            type:type,
            page:page,
            categoryCodeId:categoryCodeId
        }
        const queryString = qs.stringify(data);
        router.push(`${router.pathname}?${queryString}`)
    },[router.query])

    const changeSearchInfo = (e) => {
        const {name, value} = e.target;

        setSearchInfo({
            ...searchInfo,
            [name]:value
        })
    }

    const changeSearchDate = (e) => {
        setSearchInfo({
            ...searchInfo,
            startDate:e[0].format("YYYY-MM-DD").toString(),
            endDate:e[1].format("YYYY-MM-DD").toString(),
        })
    }

    const searchEvent = (e) => {
        const queryString = qs.stringify(searchInfo);
        router.push(`${router.pathname}?${queryString}`)
    }

        return (
        <>
            <section className={cx("container")}>
                <h1 className={cx("top_title")}>창업캘린더 목록</h1>
                <div className={cx("adm_container")}>
                    <div className={`${cx("member_info","box")} clfx `}>
                        <ul className={"clfx"}>
                            <li>
                                <span className={cx("title","icon_1")}>공지</span>
                                <div className={cx("number")}>
                                    <strong>{startupCalendar.page !== null && startupCalendar.page.totalCount}</strong>개
                                </div>
                            </li>
                        </ul>

                        <div className={`${cx("member_id_search","startup_event_search")} clfx`}>
                            <select name="categoryCodeId" value={searchInfo.categoryCodeId} onChange={(e) => {changeSearchInfo(e)}}>
                                <option value={""}>분류</option>
                                {
                                    startupCalendar.cate.map((cate)=>(
                                        <option key={cate.categoryCodeId} value={cate.categoryCodeId}>{cate.categoryCodeName}</option>
                                    ))
                                }
                            </select>
                            <select name="progressStatus" value={searchInfo.progressStatus} onChange={(e) => {changeSearchInfo(e)}}>
                                <option value="">상태</option>
                                <option value="OPEN">진행</option>
                                <option value="CLOSE">마감</option>
                            </select>
                            <select name="searchField" value={searchInfo.searchField} onChange={(e) =>{changeSearchInfo(e)}}>
                                <option value="">검색조건</option>
                                <option value="eventName">행사명</option>
                            </select>
                            <input type="text" name="searchValue" value={searchInfo.searchValue} onChange={(e) => {changeSearchInfo(e)}}/>
                            <button type="button" className={cx("btn_search")} onClick={()=>{searchEvent()}}>
                                <Image src="/assets/image/admin/btn_search.gif" width={40} height={33} alt="검색하기"/>
                            </button>
                            <RangePicker className={cx("date_range")} placeholder={["기간 시작","기간 종료"]} locale={locale} onChange={changeSearchDate} />
                        </div>
                    </div>

                    <p className={cx("txt_style_1")}>
                        {/*회원자료 삭제 시 다른 회원이 기존 회원아이디를 사용하지 못하도록 회원아이디, 이름, 닉네임은 삭제하지 않고 영구*/}
                        {/*보관합니다.*/}
                    </p>

                    <div className={cx("admin_cont")}>
                        <h2 className={cx("title_style_1")}><span>목록</span></h2>
                        <div className={cx("btn-box01")}>
                        <Link  href={"/admin/startupCalendar/write"}><a className={cx("basic-btn01")}>글쓰기</a></Link>
                        </div>
                        {startupCalendar.list.length !== 0 &&
                        <StartupCalendarListTable cx={cx} list={startupCalendar.list}/>
                        }

                        {startupCalendar.page != null && (
                            <Pagination
                                totalRecords={startupCalendar.page.totalCount}
                                pageLimit={startupCalendar.page.pageSize}
                                pageNeighbours={1}
                                currentPage={startupCalendar.page.pageNo}
                                onPageChanged={pageChange}
                            />
                        )}
                    </div>

                </div>
            </section>
        </>
    );
};

export default List;
