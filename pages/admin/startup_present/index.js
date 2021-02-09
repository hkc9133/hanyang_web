import React, {useCallback, useEffect, useState} from 'react';
import Link from "next/link";
import Pagination from "../../../component/common/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import qs from "query-string";
import {getStartupPresentList} from "../../../store/startupPresent/adminStartupPresent";

import styles from '../../../public/assets/styles/admin/startupPresent/startupPresent.module.css';
import classnames from "classnames/bind"
const cx = classnames.bind(styles);

const StartupPresentManagePage = () => {

    const dispatch = useDispatch();
    const router = useRouter();

    const [searchInfo, setSearchInfo] = useState({
        searchField:"",
        searchValue:"",
        page:1
    })

    const {startupPresentList} = useSelector(({adminStartupPresent,loading})=> ({
        startupPresentList:adminStartupPresent.getStartupPresentList,
    }))


    const search = (data) => {
        dispatch(getStartupPresentList(data))
    }

    useEffect(() => {


        const data = {
            page:1,
            searchValue:"",
            searchField:"",
        }

        dispatch(getStartupPresentList(data))
    },[])

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
                <h1 className={cx("top_title")}>스타트업 배출 목록</h1>
                <div className={cx("adm_container")}>
                    <div className={`${cx("startup_present_info","box")} clfx `}>
                        <ul className={"clfx"}>
                            <li>
                                <span className={cx("title","icon_1")}>스타트업 배출</span>
                                <div className={cx("number")}>
                                    <strong>{startupPresentList.page !== null && startupPresentList.page.totalCount}</strong>개
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
                            <Link  href={"/admin/startup_present/add"}><a className={cx("basic-btn03")}>스타트업 추가</a></Link>
                        </div>
                        <div className={cx("tb_style_1","startup_present_list")}>
                            <table>
                                <colgroup>
                                    <col style={{width: "4.6%"}}/>
                                    <col/>
                                    {/*<col style={{width: "1.5%"}}/>*/}
                                    <col/>
                                </colgroup>
                                <thead>
                                <tr>
                                    <th scope="col">NO</th>
                                    <th scope="col">구분</th>
                                    <th scope="col">회사명</th>
                                    <th scope="col">비지니스 분야</th>
                                    <th scope="col">활용 기술</th>
                                    <th scope="col">대표자명</th>
                                    <th scope="col">회사 번호</th>
                                    <th scope="col">회사 페이지</th>
                                </tr>
                                </thead>
                                <tbody>
                                {startupPresentList.list.map((item) => {
                                    return (
                                        <tr key={item.rownum}>
                                            <td>{item.rownum}</td>
                                            <td>{item.gubun}</td>
                                            <td><Link href={`${router.pathname}/${item.startupId}`}><a>{item.companyName}</a></Link></td>
                                            <td>
                                                {item.businessFieldList.map((field,i) =>(
                                                    `${field.businessName} ${i != item.businessFieldList.length-1 ? '|' :  ''} `
                                                ))}
                                            </td>
                                            <td>
                                                {item.techFieldList.map((field,i) =>(
                                                    `${field.techName} ${i != item.techFieldList.length-1 ? '|' :  ''} `
                                                ))}
                                            </td>
                                            <td>{item.companyOwner}</td>
                                            <td>{item.companyPhoneNum}</td>
                                            <td>{item.homepage}</td>

                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                        </div>

                        {startupPresentList.page != null && (
                            <Pagination
                                totalRecords={startupPresentList.page.totalCount}
                                pageLimit={startupPresentList.page.pageSize}
                                pageNeighbours={1}
                                currentPage={startupPresentList.page.pageNo}
                                onPageChanged={pageChange}
                            />
                        )}
                    </div>

                </div>
            </section>
        </>
    );
};

export default StartupPresentManagePage;
