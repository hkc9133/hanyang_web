import React, {useCallback, useEffect, useState} from 'react';
import classnames from "classnames/bind"
import styles from '../../../public/assets/styles/admin/rental/rental.module.css';
import moment from "moment";
import locale from "antd/lib/date-picker/locale/ko_KR";
import {ConfigProvider, Form, DatePicker,Modal, Upload, Button} from "antd";
import ListType from "../../../component/admin/reservation_info/ListType";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import qs from "query-string";
import {
    getPlaceInfoAll,
    getRentalScheduleList, getStatusCount,
    initialize, initializeForm,
    updateRentalSchedule
} from "../../../store/spaceRental/adminSpaceRental";
import CalendarType from "../../../component/admin/reservation_info/CalendarType";
import Link from 'next/link';

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
    const [manageItem, setManageItem] = useState(null);
    const [showResultModal,setShowResultModal] = useState(false);
    const [showErrorModal,setShowErrorModal] = useState(false);
    const [totalCount,setTotalCount] = useState(null);
    const [total,setTotal] = useState(0);

    const {statusCount,scheduleList,updateScheduleStatus, all} = useSelector(({adminSpaceRental}) => ({
        statusCount:adminSpaceRental.getStatusCount,
        scheduleList: adminSpaceRental.getRentalScheduleList,
        all: adminSpaceRental.all,
        updateScheduleStatus:adminSpaceRental.updateScheduleStatus
    }))

    useEffect(() => {
        dispatch(getStatusCount())
        dispatch(getPlaceInfoAll())
        return () => {
            dispatch(initialize());
        }

    }, [])

    useEffect(() => {
        if(statusCount != null){
            let data = {};
            let count = 0;
            statusCount.map((status) =>{
                data[status.status] = status.count;
                count += status.count;
            })
            setTotalCount(data);
            setTotal(count);
        }

    }, [statusCount])


    useEffect(() => {
        const {
            page = 1,
            status = null,
            roomId = null,
            regStartDate = null,
            regEndDate = null,
            rentalStartDate = null,
            rentalEndDate = null,
            date = null
        } = router.query

        const data = {
            page: page,
            status: status,
            roomId: roomId,
            regStartDate: regStartDate,
            regEndDate: regEndDate,
            rentalStartDate: rentalStartDate,
            rentalEndDate: rentalEndDate,
            date:date
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

    const pageChange = useCallback((page) => {
        const queryString = qs.stringify({...router.query, page: page});
        router.push(`${router.pathname}?${queryString}`)
    }, [router.query])

    const saveStatus = (scheduleInfo) =>{
        dispatch(updateRentalSchedule(scheduleInfo))
    }

    useEffect(() =>{
        if(updateScheduleStatus != null){
            if(updateScheduleStatus){
                Modal.success({
                    title: '저장이 완료되었습니다',
                    mask:false,
                    // content: 'some messages...some messages...',
                });
                // setShowResultModal(true)
            }else{
                Modal.error({
                    title: '작업 중 에러가 발생하였습니다'
                });
                // setShowErrorModal(true)
            }

            const {
                page = 1,
                status = null,
                roomId = null,
                regStartDate = null,
                regEndDate = null,
                rentalStartDate = null,
                rentalEndDate = null,
                date = null
            } = router.query

            const data = {
                page: page,
                status: status,
                roomId: roomId,
                regStartDate: regStartDate,
                regEndDate: regEndDate,
                rentalStartDate: rentalStartDate,
                rentalEndDate: rentalEndDate,
                date:date
            }

            dispatch(getRentalScheduleList(data))
            dispatch(initializeForm('updateScheduleStatus'))

        }

    },[updateScheduleStatus])

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
                    {totalCount != null && (
                        <ul className={"clfx"}>
                            <li>
                                <span>전체</span>
                                <strong>{total}</strong>
                                <span>건</span>
                            </li>
                            <li>
                                <span>대기</span>
                                <strong>{totalCount.APPLY != null ? totalCount.APPLY : 0}</strong>
                                <span>건</span>
                            </li>
                            <li>
                                <span>완료</span>
                                <strong>{totalCount.ACCEPT != null ? totalCount.ACCEPT : 0}</strong>
                                <span>건</span>
                            </li>
                            <li>
                                <span>반려</span>
                                <strong>{totalCount.RETURN != null ? totalCount.RETURN : 0}</strong>
                                <span>건</span>
                            </li>
                            <li>
                                <span>취소</span>
                                <strong>{totalCount.CANCEL != null ? totalCount.CANCEL : 0}</strong>
                                <span>건</span>
                            </li>
                        </ul>
                    )}
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
                                                <option key={room.roomId} value={room.roomId}>{`${place.placeName} [${room.roomName}]`}</option>
                                            )
                                        )
                                    )
                                )}
                            </select>
                            <button className={cx("basic-btn01", "btn-gray-bg","type_btn")} onClick={() => {
                                router.push(`/admin/reservation_info?type=C&date=${moment().format("YYYY-MM").toString()}`)
                            }}>달력
                            </button>
                            <button className={cx("basic-btn01", "btn-gray-bg","type_btn")} onClick={() => {
                                router.push("/admin/reservation_info?type=L")
                            }}>목록
                            </button>
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
                        {router.query.type == "C" ? (
                            <CalendarType cx={cx} scheduleList={scheduleList} manageItem={manageItem} setManageItem={setManageItem} saveStatus={saveStatus}/>
                        ) : (
                            <ListType cx={cx} scheduleList={scheduleList} pageChange={pageChange} manageItem={manageItem} setManageItem={setManageItem} saveStatus={saveStatus}/>
                        )}
                    </div>
                </div>
                {/*<Modal visible={showResultModal} closable={true} maskClosable={true} onClose={() => {*/}
                {/*    setShowResultModal(false);*/}
                {/*}} cx={cx} className={"rental_popup"}>*/}
                {/*    <h2 className={cx("popup_title")}>저장이 완료되었습니다</h2>*/}
                {/*    <div className={cx("btn_box")}>*/}
                {/*        <button className={cx("basic-btn01","btn-gray-bg")} onClick={() =>{setShowResultModal(false);}}>확인</button>*/}
                {/*    </div>*/}
                {/*</Modal>*/}
                {/*<Modal.success title='저장이 완료되었습니다' visible={showResultModal} zIndex={5}*/}
                {/*       onCancel={() => {*/}
                {/*           setShowResultModal(false);*/}
                {/*       }}*/}
                {/*       footer={[*/}
                {/*           <button className={cx("basic-btn01","btn-gray-bg")} onClick={() =>{setShowResultModal(false);}}>확인</button>*/}
                {/*       ]}*/}
                {/*>*/}
                {/*</Modal.success>*/}
                {/*<Modal.error title='작업 중 에러가 발상하였습니다' visible={showErrorModal}*/}
                {/*       zIndex={5}*/}
                {/*       onCancel={() => {*/}
                {/*           setShowErrorModal(false);*/}
                {/*       }}*/}
                {/*       footer={[*/}
                {/*           <button className={cx("basic-btn01","btn-gray-bg")} onClick={() =>{setShowErrorModal(false);}}>확인</button>*/}
                {/*       ]}*/}
                {/*>*/}
                {/*</Modal.error>*/}


                {/*<Modal visible={showErrorModal} closable={true} maskClosable={true} onClose={() => {*/}
                {/*    setShowErrorModal(false);*/}
                {/*}} cx={cx} className={"rental_popup"}>*/}
                {/*    <>*/}
                {/*        <h2 className={cx("popup_title")}>작업 중 에러가 발상하였습니다</h2>*/}
                {/*        /!*<p className={cx("warning")}>다시 시도해주세요</p>*!/*/}
                {/*        <div className={cx("btn_box")}>*/}
                {/*            <button className={cx("basic-btn01","btn-gray-bg")} onClick={() =>{setShowErrorModal(false);}}>확인</button>*/}
                {/*        </div>*/}
                {/*    </>*/}
                {/*</Modal>*/}
            </section>
        </>
    );
};

export default ReservationInfo;
