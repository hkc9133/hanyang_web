import React, {useCallback, useEffect, useState} from 'react';
import Link from "next/link";
import Pagination from "../../../component/common/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import qs from "query-string";
import {getPartnerList} from "../../../store/partner/adminPartner";

import styles from '../../../public/assets/styles/admin/partner/partner.module.css';
import classnames from "classnames/bind"
import {Checkbox, Dropdown, Image} from "antd";
import {DownOutlined} from "@ant-design/icons";
import {getContinentList} from "../../../store/partner/adminPartner";

const cx = classnames.bind(styles);

const PartnerManagePage = () => {

    const dispatch = useDispatch();
    const router = useRouter();

    const {partnerList, continentList} = useSelector(({adminPartner, loading}) => ({
        partnerList: adminPartner.getPartnerList,
        continentList: adminPartner.getContinentList
    }))

    const [continent, setContinent] = useState([])

    const [searchInfo, setSearchInfo] = useState({
        searchValue: "",
        searchField: "company_name",
        pageNo: 1,
    })
    useEffect(() => {

        const data = {
            ...searchInfo
        }
        dispatch(getContinentList())
        dispatch(getPartnerList(data))
    }, [])

    useEffect(() => {
        const {pageNo = 1, searchField = null, searchValue = null} = router.query

        const data = {
            ...searchInfo,
            pageNo: pageNo
        }

        dispatch(getPartnerList(data))
    }, [router.query])

    useEffect(() => {
        setContinent(continentList)
    }, [continentList])

    const searchSubmit = () => {
        const data = {
            pageNo: 1,
            searchValue: searchInfo.searchValue,
            searchField: searchInfo.searchField
        }
        const queryString = qs.stringify(data);
        router.push(`${router.pathname}?${queryString}`)

    }

    const pageChange = useCallback((pageNo) => {
        const data = {
            pageNo: pageNo,
        }
        const queryString = qs.stringify(data);
        router.push(`${router.pathname}?${queryString}`)
    }, [searchInfo])


    return (
        <>
            <section className={cx("container")}>
                <h1 className={cx("top_title")}>국내외 파트너스 목록</h1>
                <div className={cx("adm_container")}>
                    <div className={`${cx("partner_info", "box")} clfx `}>
                        <ul className={"clfx"}>
                            <li>
                                <span className={cx("title", "icon_1")}>국내외 파트너스</span>
                                <div className={cx("number")}>
                                    <strong>{partnerList.page !== null && partnerList.page.totalCount}</strong>개
                                </div>
                            </li>
                        </ul>

                        <div className={`${cx("partner_search")} clfx`}>
                            <select name="continentId" value={searchInfo.continentId} onChange={(e) => {
                                setSearchInfo({...searchInfo, continentId: e.target.value})
                            }}>
                                <option value="">구분</option>
                                {continentList.map((item) =>(
                                    <option value={item.continentId}>{item.continentName}</option>
                                ))}
                            </select>
                            <select name="searchField" value={searchInfo.searchField} onChange={(e) => {
                                setSearchInfo({...searchInfo, searchField: e.target.value})
                            }}>
                                <option value="">검색 조건</option>
                                <option value="company_name">기업명</option>
                                <option value="homepage">홈페이지</option>
                                <option value="field">분야</option>
                                <option value="location">국가/지역</option>
                            </select>
                            <input type="text" placeholder="검색어를 입력하세요." value={searchInfo.searchValue}
                                   onChange={(e) => {
                                       setSearchInfo({...searchInfo, searchValue: e.target.value})
                                   }}/>
                            <button type="button" className={cx("btn_search")} onClick={() => {
                                searchSubmit()
                            }}>
                                <img src={"/assets/image/admin/btn_search.gif"}/>
                                {/*<Image src="/assets/image/admin/btn_search.gif" width={40} height={33} alt="검색하기"/>*/}
                            </button>
                            {/*</div>*/}

                            {/*    <select name="categoryCodeId" value={searchInfo.categoryCodeId} onChange={(e) => {changeSearchInfo(e)}}>*/}
                            {/*        <option value={""}>분류</option>*/}
                            {/*        {*/}
                            {/*            startupCalendar.cate.map((cate)=>(*/}
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
                        </div>
                    </div>

                    <p className={cx("txt_style_1")}>
                        {/*회원자료 삭제 시 다른 회원이 기존 회원아이디를 사용하지 못하도록 회원아이디, 이름, 닉네임은 삭제하지 않고 영구*/}
                        {/*보관합니다.*/}
                    </p>

                    <div className={cx("admin_cont")}>
                        <h2 className={cx("title_style_1")}><span>목록</span></h2>
                        <div className={cx("btn-box01")}>
                            <Link href={"/admin/partner/add"}><a className={cx("basic-btn03")}>파트너 추가</a></Link>
                        </div>
                        <div className={cx("tb_style_1", "partner_list")}>
                            <table>
                                <colgroup>
                                    <col style={{width: "4.6%"}}/>
                                    <col/>
                                    {/*<col style={{width: "1.5%"}}/>*/}
                                    <col/>
                                </colgroup>
                                <thead>
                                <tr>
                                    <th scope="col">번호</th>
                                    <th scope="col">구분</th>
                                    <th scope="col">기업명</th>
                                    <th scope="col">홈페이지</th>
                                    <th scope="col">분야</th>
                                    <th scope="col">국가/지역</th>
                                </tr>
                                </thead>
                                <tbody>
                                {partnerList.list.map((item) => {
                                    return (
                                        <tr key={item.rownum}>
                                            <td>{item.rownum}</td>
                                            <td>{item.continent.continentName}</td>
                                            <td><Link
                                                href={`${router.pathname}/${item.partnerId}`}><a>{item.companyName}</a></Link>
                                            </td>
                                            <td>{item.homepage}</td>
                                            <td>{item.location}</td>
                                            <td>{item.field}</td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                        </div>

                        {partnerList.page != null && (
                            <Pagination
                                totalRecords={partnerList.page.totalCount}
                                pageLimit={partnerList.page.pageSize}
                                pageNeighbours={1}
                                currentPage={partnerList.page.pageNo}
                                onPageChanged={pageChange}
                            />
                        )}
                    </div>

                </div>
            </section>
        </>
    );
};

export default PartnerManagePage;
