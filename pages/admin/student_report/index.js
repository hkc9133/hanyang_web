import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import qs from "query-string";
import Link from "next/link";
import Pagination from "../../../component/common/Pagination";
import {getStudentReportList} from "../../../store/studentReport/adminStudentReport";

import styles from '../../../public/assets/styles/admin/studentReport/studentReport.module.css';
import classnames from "classnames/bind"
const cx = classnames.bind(styles);

const StudentReportManagePage = () => {

    const dispatch = useDispatch();
    const router = useRouter();

    const [searchInfo, setSearchInfo] = useState({
        searchField:"",
        searchValue:"",
    })

    const {studentReportList} = useSelector(({adminStudentReport,loading})=> ({
        studentReportList:adminStudentReport.getStudentReportList,
    }))


    useEffect(() => {

        const { page = 1,searchValue = null,searchField = null} = router.query

        const data = {
            page:page,
            searchValue:searchValue,
            searchField:searchField,
        }

        dispatch(getStudentReportList(data))
    },[router.query])

    const pageChange = useCallback((page) =>{
        const {} = router.query
        const data = {
            page:page,
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
                <h1 className={cx("top_title")}>학생창업 신고 목록</h1>
                <div className={cx("adm_container")}>
                    <div className={`${cx("student_report_info","box")} clfx `}>
                        <ul className={"clfx"}>
                            <li>
                                <span className={cx("title","icon_1")}>학생창업</span>
                                <div className={cx("number")}>
                                    <strong>{studentReportList.page !== null && studentReportList.page.totalCount}</strong>개
                                </div>
                            </li>
                        </ul>

                        {/*<div className={`${cx("popup_id_search","startup_event_search")} clfx`}>*/}
                        {/*    <select name="categoryCodeId" value={searchInfo.categoryCodeId} onChange={(e) => {changeSearchInfo(e)}}>*/}
                        {/*        <option value={""}>분류</option>*/}
                        {/*        {*/}
                        {/*            notice.cate.map((cate)=>(*/}
                        {/*                <option key={cate.categoryCodeId} value={cate.categoryCodeId}>{cate.categoryCodeName}</option>*/}
                        {/*            ))*/}
                        {/*        }*/}
                        {/*    </select>*/}
                        {/*    <select name="progressStatus" value={searchInfo.progressStatus} onChange={(e) => {changeSearchInfo(e)}}>*/}
                        {/*        <option value="">상태</option>*/}
                        {/*        <option value="OPEN">진행</option>*/}
                        {/*        <option value="CLOSE">마감</option>*/}
                        {/*    </select>*/}
                        {/*    <select name="searchField" value={searchInfo.searchField} onChange={(e) =>{changeSearchInfo(e)}}>*/}
                        {/*        <option value="">검색조건</option>*/}
                        {/*        <option value="eventName">행사명</option>*/}
                        {/*    </select>*/}
                        {/*    <input type="text" name="searchValue" value={searchInfo.searchValue} onChange={(e) => {changeSearchInfo(e)}}/>*/}
                        {/*    <button type="button" className={cx("btn_search")} onClick={()=>{searchEvent()}}>*/}
                        {/*        <Image src="/assets/image/admin/btn_search.gif" width={40} height={33} alt="검색하기"/>*/}
                        {/*    </button>*/}
                        {/*    <RangePicker className={cx("date_range")} placeholder={["기간 시작","기간 종료"]} locale={locale} onChange={changeSearchDate} />*/}
                        {/*</div>*/}
                    </div>

                    <p className={cx("txt_style_1")}>
                        {/*회원자료 삭제 시 다른 회원이 기존 회원아이디를 사용하지 못하도록 회원아이디, 이름, 닉네임은 삭제하지 않고 영구*/}
                        {/*보관합니다.*/}
                    </p>

                    <div className={cx("admin_cont")}>
                        <h2 className={cx("title_style_1")}><span>목록</span></h2>
                        <div className={cx("btn-box01")}>
                            <Link  href={"/admin/student_report/add"}><a className={cx("basic-btn03")}>학생창업 추가</a></Link>
                        </div>
                        <div className={cx("tb_style_1","student_report_list")}>
                            <table>
                                <colgroup>
                                    <col style={{width: "4.6%"}}/>
                                    <col/>
                                    <col/>
                                    <col/>
                                </colgroup>
                                <thead>
                                <tr>
                                    <th scope="col">NO</th>
                                    <th scope="col">기업명</th>
                                    <th scope="col">사업자 유형</th>
                                    <th scope="col">학생 이름</th>
                                    <th scope="col">학번</th>
                                    <th scope="col">연락처</th>
                                    <th scope="col">E-MAIL</th>
                                    <th scope="col">창업일</th>
                                </tr>
                                </thead>
                                <tbody>
                                {studentReportList.list.map((item) => {
                                    return (
                                        <tr key={item.studentReportId}>
                                            <td>{item.rownum}</td>
                                            <td><Link href={`${router.pathname}/${item.studentReportId}`}><a>{item.companyName}</a></Link></td>
                                            <td>{item.companyKind}</td>
                                            <td>{`${item.studentName}`}(<Link href={"/"}><a>{item.userId}</a></Link>)</td>
                                            <td>{item.studentClassYear}</td>
                                            <td>{item.studentPhoneNum}</td>
                                            <td>{item.studentEmail}</td>
                                            <td>{item.createDate}</td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                        </div>

                        {studentReportList.page != null && (
                            <Pagination
                                totalRecords={studentReportList.page.totalCount}
                                pageLimit={studentReportList.page.pageSize}
                                pageNeighbours={1}
                                currentPage={studentReportList.page.pageNo}
                                onPageChanged={pageChange}
                            />
                        )}
                    </div>

                </div>
            </section>
        </>
    );
};

export default StudentReportManagePage;
