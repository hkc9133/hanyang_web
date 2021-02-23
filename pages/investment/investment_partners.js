import React, {useCallback, useEffect, useState} from 'react';
import Link from 'next/link';
import styles from '../../public/assets/styles/investment/investment.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {getContinentList, getPartnerList} from "../../store/partner/partner";
import qs from "query-string";
import Pagination from "../../component/common/Pagination";
import {getBoardContentList} from "../../store/board/board";
import client from "../../lib/api/client";
import {FileImageOutlined} from "@ant-design/icons";

const cx = classnames.bind(styles);

const InvestmentPartners = () => {

    const dispatch = useDispatch();
    const router = useRouter();

    const {partnerList, continentList} = useSelector(({partner, loading}) => ({
        partnerList: partner.getPartnerList,
        continentList: partner.getContinentList
    }))

    const [continent, setContinent] = useState([])

    const [searchInfo, setSearchInfo] = useState({
        searchValue: "",
        searchField: "",
        pageNo: 1,
    })

    useEffect(() => {

        dispatch(getContinentList())
        // dispatch(getPartnerList(data))
    }, [])

    useEffect(() => {
        setContinent(continentList)
    }, [continentList])

    useEffect(() => {
        setSearchInfo(searchInfo =>({
            ...searchInfo,
            ...router.query
        }))

        const { page = 1,continentId = null,searchValue = null,searchField = null} = router.query

        const data = {
            page:page,
            continentId:continentId,
            searchValue:searchValue,
            searchField:searchField,
        }
        dispatch(getPartnerList(data));
    },[router.query])

    const searchSubmit = () => {
        const { continentId = null} = router.query

        const data = {
            pageNo: 1,
            searchValue: searchInfo.searchValue,
            searchField: searchInfo.searchField,
            continentId:continentId
        }
        const queryString = qs.stringify(data);
        router.push(`${router.pathname}?${queryString}`)
    }

    const pageChange = useCallback((pageNo) => {
        const { continentId = null,searchValue = null,searchField = null} = router.query

        const data = {
            pageNo: pageNo,
            searchValue: searchValue,
            searchField: searchField,
            continentId:continentId
        }
        const queryString = qs.stringify(data);
        router.push(`${router.pathname}?${queryString}`)
    }, [router.query])

    return (
        <>
            <PageNavigation/>
        <section className={cx("sub_container","irWrap")}>
            <h1 className={cx("sub_top_title")}>국내외 투자파트너스</h1>
            <p className={cx("sub_top_txt")}>
                국내외 VC 및 액셀러레이터와 협업하여 유망 창업기업을 지원합니다.
            </p>

            <div className={cx("search_type_2")}>
                <select className={cx("long")} name="searchField" value={searchInfo.searchField} onChange={(e) => {
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
                <button type="button" className={cx("btn_search")} onClick={() =>{searchSubmit();}}>검색</button>
            </div>

            <div className={cx("area_list")}>
                <ul>
                    <li className={cx({on:router.query.continentId == null || router.query.continentId == ""})}><Link href={router.pathname}><a><span>전체</span></a></Link></li>
                    {continent.map((item) =>(
                        <li key={item.continentId} className={cx({on:item.continentId == router.query.continentId})}><Link href={`${router.pathname}?continentId=${item.continentId}`}><a><span>{item.continentName}</span></a></Link></li>
                    ))}
                </ul>
            </div>

            <div className={cx("bbs_tb_list")}>
                <table>
                    <colgroup>
                        <col style={{width:"11.7%"}}/>
                        <col style={{width:"18.18%"}}/>
                        <col style={{width:"24.24.%"}}/>
                        <col style={{width:"12.12%"}}/>
                        <col/>
                    </colgroup>
                    <thead>
                    <tr>
                        <th scope="col">구분</th>
                        <th scope="col">기관명</th>
                        <th scope="col">홈페이지</th>
                        <th scope="col">{router.query.continentId == 1 ? "지역" : "국가/지역" }</th>
                        <th scope="col">분야</th>
                    </tr>
                    </thead>
                    <tbody>
                    {partnerList.list.map((item) =>(
                        <tr key={item.partnerId}>
                            <td>{item.continent.continentName}</td>
                            <td>
                                <div className={cx("logo")}>
                                {item.attachFile != null ? <img src={`${client.defaults.baseURL}/resource${item.attachFile.filePath}/${item.attachFile.fileName+item.attachFile.fileExtension}`} width={38} height={38} alt={"LOGO"}/> : (
                                    <FileImageOutlined style={{fontSize:33,verticalAlign:'middle'}}/>
                                ) }
                                </div>
                                <span>{item.companyName}</span>
                            </td>
                            <td>{item.homepage}</td>
                            <td>{item.location}</td>
                            <td>{item.field}</td>
                        </tr>
                    ))}
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
        </section>
            </>
    );
};

export default InvestmentPartners;
