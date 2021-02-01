import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import styles from '../../../public/assets/styles/startup_info/startup_info.module.css';
import classnames from "classnames/bind"
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {getStudentReportList, initialize} from "../../../store/studentReport/studentReport";

import moment from "moment";
import Pagination from "../../../component/common/Pagination";
const cx = classnames.bind(styles);

const StudentReportManagePage = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() =>{
        return () =>{
            dispatch(initialize())
        }
    },[])

    useEffect(() =>{
        dispatch(getStudentReportList())

    },[router])

    const {studentReportList} = useSelector(({studentReport, loading}) => ({
        studentReportList: studentReport.getStudentReportList,
    }))

    const pageChange = (pageNum) => {
        const queryString = qs.stringify({...router.query,page:pageNum});
        router.push(`${router.pathname}?${queryString}`)
    }

    return (
        <>
            <div>
                <section className={cx("container")}>
                    <div className={cx("sub_container","mentor_groupList")}>
                        <h1 className={cx("sub_top_title")}>관리</h1>
                        <p className={cx("sub_top_txt")}>전문 멘토로부터 듣는 창업 알짜 정보 예비창업자를 위한 <br/>창업 전문 상담코너입니다.</p>

                        <div className={cx("tab_style_2")}>
                            <ul>
                                <li><Link href="/mypage/mentee"><a>멘토링 현황</a></Link></li>
                                <li className={cx("on")}><Link href="/mypage/mentee/student_report"><a>학생창업신고 현황</a></Link></li>
                            </ul>
                        </div>

                        <h2>나의 멘토링 현황</h2>
                        <ul className={cx("current_situation")}>
                            <li>
                                <span className={cx("title")}>신청건수</span>
                                <span><strong>{studentReportList.page != null && studentReportList.page.totalCount}</strong>건</span>
                            </li>
                        </ul>
                        <div className={cx("th_title")}>
                            <ul>
                                <li className={cx("w_1")}>NO</li>
                                <li className={cx("w_1")}>기업명</li>
                                <li className={cx("w_1")}>사업자 유형</li>
                                <li className={cx("w_1")}>연락처</li>
                                <li className={cx("w_1")}>E-MAIL</li>
                                <li className={cx("w_1")}>창업일</li>
                                <li className={cx("w_1")}>등록일</li>
                            </ul>
                        </div>
                        <div className={cx("td_content")}>
                            {
                                studentReportList.list.map((item) =>(
                                    <Link href={`${router.pathname}/${item.studentReportId}`}><a>
                                    <ul>
                                        <li className={cx("question")}>
                                            <ul>
                                                <li className={cx("w_1")}>{item.rownum}</li>
                                                <li className={cx("w_1")}>{item.companyName}</li>
                                                <li className={cx("w_1")}>{item.companyKind}</li>
                                                <li className={cx("w_1")}>{item.studentPhoneNum}</li>
                                                <li className={cx("w_1")}>{item.studentEmail}</li>
                                                <li className={cx("w_1")}>{item.createDate}</li>
                                                <li className={cx("w_1")}>{moment(item.regDate).format("YYYY-MM-DD")}</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    </a></Link>
                                ))
                            }
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
                </section>
            </div>
        </>
    );
};

export default StudentReportManagePage;
