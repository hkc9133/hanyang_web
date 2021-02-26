import React from 'react';
import styles from '../../../public/assets/styles/skin/event_list.module.css';
import classnames from "classnames/bind"
import Image from "next/image";

import Link from 'next/link'
import moment from "moment";
import {useRouter} from "next/router";
import Pagination from "../../common/Pagination";


const cx = classnames.bind(styles);

const EventListType01 = ({list,cateList,page,pageChange,changeCategory,changeType,handleShowContent}) => {
    const router = useRouter();
    return (
        <>
            <div className={cx("calendar_top")}>
                <div className={cx("calendar_year")}>
                </div>

                <ul className={cx("category")}>
                    <li><a href="#" onClick={() =>{changeCategory("")}} className={cx({on:router.query.categoryCodeId == null || router.query.categoryCodeId == ""})}>전체</a></li>
                    {cateList.map((item) =>(
                        <li key={item.categoryCodeId}><a href="#" className={cx({on:router.query.categoryCodeId == item.categoryCodeId})} onClick={() =>{changeCategory(item.categoryCodeId)}}>{item.categoryCodeName}</a></li>
                    ))}
                </ul>

                <ul className={`${cx("type")} clfx`}>
                    <li>
                        <button type="button" className={cx("icon_calendar_type")} onClick={() =>{changeType("C")}}>달력형</button>
                    </li>
                    <li className={cx("on")}>
                        <button type="button" className={cx("icon_list_type")}  onClick={() =>{changeType("L")}}>목록형</button>
                    </li>
                </ul>
            </div>
        <div className={cx("list_type")}>
            <div className={cx("bbs_tb_list")}>
                <table>
                    <colgroup>
                        <col style={{width:"5%"}}/>
                        <col style={{width:"12%"}}/>
                        <col/>
                        <col style={{width:"15%"}}/>
                        {/*<col style={{width:"20%"}}/>*/}
                    </colgroup>
                    <thead>
                    <tr>
                        <th scope="col">번호</th>
                        <th scope="col">진행</th>
                        <th scope="col">행사명</th>
                        <th scope="col">일시</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        list.map((item)=>{
                            return (
                                <tr key={item.noticeId}>
                                    <td>{item.rownum}</td>
                                    <td><span className={cx("category",{red:item.progressStatus == "OPEN"})}>{item.progressStatus == "OPEN" ? "진행중" : "마감"}</span></td>
                                    <td className={cx("txt_l")}><a onClick={(e) =>{e.preventDefault();handleShowContent(item)}}>{item.title}</a></td>
                                    <td>{item.eventDate != null && moment(item.eventDate).format("YYYY-MM-DD HH시mm분")}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
            {page != null && (
                <Pagination
                    totalRecords={page.totalCount}
                    pageLimit={page.pageSize}
                    pageNeighbours={1}
                    currentPage={page.pageNo}
                    onPageChanged={pageChange}
                />
            )}
        </div>
        </>
    );
};

export default React.memo(EventListType01);
