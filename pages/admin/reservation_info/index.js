import React, {useCallback, useEffect, useState} from 'react';
import classnames from "classnames/bind"
import styles from '../../../public/assets/styles/admin/rental/rental.module.css';
import moment from "moment";
import locale from "antd/lib/date-picker/locale/ko_KR";
import {ConfigProvider, Form, DatePicker, Upload} from "antd";
import ListType from "../../../component/admin/reservation_info/ListType";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import qs from "query-string";
import {getPlaceInfoAll, getRentalScheduleList, initialize} from "../../../store/spaceRental/adminSpaceRental";

const {RangePicker} = DatePicker;
const cx = classnames.bind(styles);

const ReservationInfo = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [searchInfo, setSearchInfo] = useState({
        status: "",
        roomId: "",
        regStartDate: null,
        regEndDate: null,
        rentalStartDate: null,
        rentalEndDate: null,
    });

    const {scheduleList, all} = useSelector(({adminSpaceRental}) => ({
        scheduleList: adminSpaceRental.getRentalScheduleList,
        all: adminSpaceRental.all,
    }))

    useEffect(() => {
        dispatch(getPlaceInfoAll())
        return () => {
            dispatch(initialize());
        }

    }, [])

    useEffect(() => {
        const {
            page = 1,
            status = null,
            roomId = null,
            regStartDate = null,
            regEndDate = null,
            rentalStartDate = null,
            rentalEndDate = null
        } = router.query

        const data = {
            page: page,
            status: status,
            roomId: roomId,
            regStartDate: regStartDate,
            regEndDate: regEndDate,
            rentalStartDate: rentalStartDate,
            rentalEndDate: rentalEndDate,
        }

        dispatch(getRentalScheduleList(data))

    }, [router.query])


    const changeSearchInfo = (e) => {
        const {name, value} = e.target;

        setSearchInfo({
            ...searchInfo,
            [name]: value
        })
    }

    const changeRangeRegDate = (e) => {
        setSearchInfo({
            ...searchInfo,
            regStartDate: e[0],
            regEndDate: e[1],
        })
    }

    const changeRangeRentalDate = (e) => {
        setSearchInfo({
            ...searchInfo,
            rentalStartDate: e[0],
            rentalEndDate: e[1],
        })
    }

    const pageChange = useCallback((pageNum) => {
        const queryString = qs.stringify({...router.query, pageNo: pageNum});
        router.push(`${router.pathname}?${queryString}`)
    }, [router.query])

    const search = () => {
        const data = {
            ...searchInfo,
            page: 1,
            regStartDate: searchInfo.regStartDate != null ? searchInfo.regStartDate.format("YYYY-MM-DD").toString() : "",
            regEndDate: searchInfo.regEndDate != null ? searchInfo.regEndDate.format("YYYY-MM-DD").toString() : "",
            rentalStartDate: searchInfo.rentalStartDate != null ? searchInfo.rentalStartDate.format("YYYY-MM-DD").toString() : "",
            rentalEndDate: searchInfo.rentalEndDate != null ? searchInfo.rentalEndDate.format("YYYY-MM-DD").toString() : "",
        }
        const queryString = qs.stringify(data);
        router.push(`/admin/reservation_info?${queryString}`)

    }

    return (
        <>
            <section className={cx("container")}>
                <h1 className={cx("top_title")}>예약정보 목록보기</h1>

                <div className={cx("reservation_info_search", "box")}>
                    <ul className={"clfx"}>
                        <li>
                            <span>전체</span>
                            <strong>231 </strong>
                            <span>건</span>
                        </li>
                        <li>
                            <span>대기</span>
                            <strong>231 </strong>
                            <span>건</span>
                        </li>
                        <li>
                            <span>완료</span>
                            <strong>231 </strong>
                            <span>건</span>
                        </li>
                        <li>
                            <span>반려</span>
                            <strong>231 </strong>
                            <span>건</span>
                        </li>
                        <li>
                            <span>취소</span>
                            <strong>231 </strong>
                            <span>건</span>
                        </li>
                    </ul>
                </div>

                <div className={cx("adm_container")}>
                    <div className={cx("box")}>
                        <div className={cx("progress")}>
                            <span className={cx("title")}>진행상태</span>
                            <ul>
                                <li>
                                    <input type="radio" name="status" value="" checked={searchInfo.status == ""}
                                           onChange={changeSearchInfo}/>
                                    전체
                                </li>
                                <li>
                                    <input type="radio" name="status" value="APPLY"
                                           checked={searchInfo.status == "APPLY"} onChange={changeSearchInfo}/>
                                    대기
                                </li>
                                <li>
                                    <input type="radio" name="status" value="ACCEPT"
                                           checked={searchInfo.status == "ACCEPT"} onChange={changeSearchInfo}/>
                                    완료
                                </li>
                                <li>
                                    <input type="radio" name="status" value="RETURN"
                                           checked={searchInfo.status == "RETURN"} onChange={changeSearchInfo}/>
                                    반려
                                </li>
                                <li>
                                    <input type="radio" name="status" value="CANCEL"
                                           checked={searchInfo.status == "CANCEL"} onChange={changeSearchInfo}/>
                                    취소
                                </li>
                            </ul>
                            <span className={cx("title")}>장소선택</span>
                            <select name="roomId" value={searchInfo.roomId} onChange={changeSearchInfo}>
                                <option value="">전체</option>
                                {all.map((place) =>
                                    place.rentalRoomList.map((room) => (
                                            room.roomId != null && (
                                                <option value={room.roomId}>{`${place.placeName} ${room.roomName}`}</option>
                                            )
                                        )
                                        // <option value={room.roomId}>{`${place.placeName} ${room.roomName}`}</option>
                                    )
                                )}
                            </select>
                            <ul>
                                <li>
                                    <span className={cx("title")}>예약 신청일</span>
                                    <RangePicker name="regDate" value={[searchInfo.regStartDate, searchInfo.regEndDate]}
                                                 locale={locale} onChange={changeRangeRegDate}/>
                                </li>
                                <li>
                                    <span className={cx("title")}>이용일</span>
                                    <RangePicker name="rentalDate"
                                                 value={[searchInfo.rentalStartDate, searchInfo.rentalEndDate]}
                                                 locale={locale} onChange={changeRangeRentalDate}/>
                                </li>
                            </ul>
                            <button className={cx("basic-btn01", "btn-gray-bg", "search_btn")} onClick={() => {
                                search();
                            }}>검색
                            </button>
                        </div>
                        <ListType cx={cx} searchInfo={searchInfo} changeSearchInfo={changeSearchInfo}/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ReservationInfo;
