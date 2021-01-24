import React, {useCallback, useEffect} from 'react';
import styles from '../../../public/assets/styles/rental/rental.module.css';
import classnames from "classnames/bind"
import Link from "next/link";
import ScheduleList from "../../../component/rental/ScheduleList";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {getRentalScheduleList, initialize} from "../../../store/spaceRental/spaceRental";
import qs from "query-string";
import Pagination from "../../../component/common/Pagination";

const cx = classnames.bind(styles);

const Check = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const {scheduleList} = useSelector(({spaceRental}) => ({
        scheduleList: spaceRental.getRentalScheduleList,
    }))

    useEffect(() =>{
        return () =>{
            dispatch(initialize());
        }

    },[])

    useEffect(() =>{
        const data = {
            page:1
        }
        dispatch(getRentalScheduleList(data))
    },[router.query])

    const pageChange = useCallback((pageNum) =>{
        const queryString = qs.stringify({...router.query,pageNo:pageNum});
        router.push(`${router.pathname}?${queryString}`)
    },[router.query])

    return (
        <>
            <section className={cx("container")}>
                <div className={`${cx("sub_container","sssup_step2","sssup")} `}>
                    <h1 className={cx("sub_top_title")}>공간 예약 시스템</h1>
                    <div className={`${cx("tab_style_2")} mb_30`}>
                        <ul>
                            <li><Link href="/introduce/space_reservation"><a><span>공간 신청하기</span></a></Link></li>
                            <li className={cx("on")}><Link
                                href="/introduce/space_reservation/check"><a><span> 확인/ 취소하기</span></a></Link></li>
                        </ul>
                    </div>
                    <h2 className={`${cx("title_style_2")} mb_10`}>예약시설안내</h2>
                    <div className={cx("purpose")}>
                        <ul>
                            <li><span className={cx("num")}>1. </span>꼭확인하세요!</li>
                        </ul>
                    </div>

                    <ScheduleList cx={cx} list={scheduleList.list} page={scheduleList.page}/>
                    {scheduleList.page != null && (
                        <Pagination
                            totalRecords={scheduleList.page.totalCount}
                            pageLimit={scheduleList.page.pageSize}
                            pageNeighbours={1}
                            currentPage={scheduleList.page.pageNo}
                            onPageChanged={pageChange}
                        />
                    )}
                </div>
            </section>
        </>
    );
};

export default Check;
