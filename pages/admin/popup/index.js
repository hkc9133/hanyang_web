import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {getNoticeList} from "../../../store/notice/adminNotice";
import qs from "query-string";
import Image from "next/image";
import locale from "antd/lib/date-picker/locale/ko_KR";
import Link from "next/link";
import NoticeListTable from "../../../component/admin/notice/NoticeListTable";
import Pagination from "../../../component/common/Pagination";

import styles from '../../../public/assets/styles/admin/popup/popup.module.css';
import classnames from "classnames/bind"
import {getPopupList} from "../../../store/popup/adminPopup";
import moment from "moment";
const cx = classnames.bind(styles);

const PopupManagePage = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [searchInfo, setSearchInfo] = useState({
        searchField:"",
        searchValue:"",
    })

    const {popupList} = useSelector(({adminPopup,loading})=> ({
        popupList:adminPopup.getPopupList,
    }))


    useEffect(() => {

        const { page = 1,searchValue = null,searchField = null} = router.query

        const data = {
            page:page,
            searchValue:searchValue,
            searchField:searchField,
        }

        dispatch(getPopupList(data))
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
                <h1 className={cx("top_title")}>팝업 목록</h1>
                <div className={cx("adm_container")}>
                    <div className={`${cx("popup_info","box")} clfx `}>
                        <ul className={"clfx"}>
                            <li>
                                <span className={cx("title","icon_1")}>팝업</span>
                                <div className={cx("number")}>
                                    <strong>{popupList.page !== null && popupList.page.totalCount}</strong>개
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
                            <Link  href={"/admin/popup/add"}><a className={cx("basic-btn03")}>팝업 추가</a></Link>
                        </div>
                        <div className={cx("tb_style_1","popup_list")}>
                            <table>
                                <colgroup>
                                    <col style={{width: "4.6%"}}/>
                                    <col/>
                                    <col style={{width: "25.5%"}}/>
                                    <col/>
                                </colgroup>
                                <thead>
                                <tr>
                                    <th scope="col">NO</th>
                                    <th scope="col">이름</th>
                                    <th scope="col">기간</th>
                                    <th scope="col">PC</th>
                                    <th scope="col">MOBILE</th>
                                    <th scope="col">등록일</th>
                                </tr>
                                </thead>
                                <tbody>
                                {popupList.list.map((item) => {
                                    return (
                                        <tr key={item.popupId}>
                                            <td>
                                                {item.rownum}
                                            </td>
                                            <td>
                                                <Link href={`${router.pathname}/${item.popupId}`}><a>{item.title}</a></Link>
                                            </td>
                                            <td>
                                                {`${item.start} ~ ${item.end}`}
                                            </td>
                                            <td>
                                                {item.isPc ? "사용" : '미사용'}
                                            </td>
                                            <td>
                                                {item.isMobile ? "사용" : '미사용'}
                                            </td>
                                            <td>
                                                {item.regDate}
                                            </td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                        </div>

                        {popupList.page != null && (
                            <Pagination
                                totalRecords={popupList.page.totalCount}
                                pageLimit={popupList.page.pageSize}
                                pageNeighbours={1}
                                currentPage={popupList.page.pageNo}
                                onPageChanged={pageChange}
                            />
                        )}
                    </div>

                </div>
            </section>
        </>
    );
};

export default PopupManagePage;
