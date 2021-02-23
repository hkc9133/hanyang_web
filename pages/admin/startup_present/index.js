import React, {useCallback, useEffect, useState} from 'react';
import Link from "next/link";
import Pagination from "../../../component/common/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import qs from "query-string";
import {getStartupPresentList, getFieldList} from "../../../store/startupPresent/adminStartupPresent";

import styles from '../../../public/assets/styles/admin/startupPresent/startupPresent.module.css';
import classnames from "classnames/bind"
import {Checkbox, Dropdown, Image} from "antd";
import {DownOutlined} from "@ant-design/icons";

const cx = classnames.bind(styles);

const StartupPresentManagePage = () => {

    const dispatch = useDispatch();
    const router = useRouter();

    const {startupPresentList, fieldList} = useSelector(({adminStartupPresent, loading}) => ({
        startupPresentList: adminStartupPresent.getStartupPresentList,
        fieldList: adminStartupPresent.getFieldList
    }))

    const [field, setFields] = useState({business: [], tech: []})

    const [showBusinessField, setShowBusinessField] = useState(false)
    const [showTechField, setShowTechField] = useState(false)

    const [businessAll, setBusinessAll] = useState(false)
    const [techAll, setTechAll] = useState(false)

    const [searchInfo, setSearchInfo] = useState({
        searchValue: "",
        searchField: "company_name",
        businessIdList: [],
        techIdList: [],
        pageNo: 1,
    })
    useEffect(() => {

        const data = {
            ...searchInfo
        }
        dispatch(getFieldList())
        dispatch(getStartupPresentList(data))
    }, [])

    useEffect(() => {
        const {pageNo = 1, searchField = null, searchValue = null} = router.query

        const data = {
            ...searchInfo,
            pageNo: pageNo
        }

        dispatch(getStartupPresentList(data))
    }, [router.query])

    useEffect(() => {
        setFields({
            business: fieldList.business.map((item) => ({label: item.businessName, value: item.businessId})),
            tech: fieldList.tech.map((item) => ({label: item.techName, value: item.techId})),
        })
    }, [fieldList])

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


    const changeBusiness = (value) => {
        setSearchInfo({
            ...searchInfo,
            businessIdList: value
        })
        setBusinessAll(false)

    }
    const changeTech = (value) => {
        setSearchInfo({
            ...searchInfo,
            techIdList: value
        })
        setTechAll(false)
    }

    const changeBusinessAll = (e) => {
        setSearchInfo({
            ...searchInfo,
            businessIdList: e.target.checked ? fieldList.business.map((item) => (item.businessId)) : []
        })
        setBusinessAll(e.target.checked)

    }
    const changeTechAll = (e) => {
        setSearchInfo({
            ...searchInfo,
            techIdList: e.target.checked ? fieldList.tech.map((item) => (item.techId)) : []
        })
        setTechAll(e.target.checked)

    }


    const businessList = (
        <div className={cx("checkbox_g")}>
            <Checkbox checked={businessAll} onChange={changeBusinessAll}>
                전체
            </Checkbox>
            <Checkbox.Group options={field.business} value={searchInfo.businessIdList} onChange={changeBusiness}/>
        </div>
    )

    const techList = (
        <div className={cx("checkbox_g")}>
            <Checkbox checked={techAll} onChange={changeTechAll}>
                전체
            </Checkbox>
            <Checkbox.Group options={field.tech} value={searchInfo.techIdList} onChange={changeTech}/>
        </div>
    )

    return (
        <>
            <section className={cx("container")}>
                <h1 className={cx("top_title")}>스타트업 배출 목록</h1>
                <div className={cx("adm_container")}>
                    <div className={`${cx("startup_present_info", "box")} clfx `}>
                        <ul className={"clfx"}>
                            <li>
                                <span className={cx("title", "icon_1")}>스타트업 배출</span>
                                <div className={cx("number")}>
                                    <strong>{startupPresentList.page !== null && startupPresentList.page.totalCount}</strong>개
                                </div>
                            </li>
                        </ul>

                        <div className={`${cx("startup_present_search")} clfx`}>
                            {/*<div className={`${cx("popup_id_search","startup_event_search")} clfx`}>*/}
                            <Dropdown className={cx("search_01")} overlay={businessList} trigger={['click']}
                                      visible={showBusinessField} onVisibleChange={() => {
                                setShowBusinessField(!showBusinessField)
                            }}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    비즈니스 분야<DownOutlined style={{marginLeft: 10}}/>
                                </a>
                            </Dropdown>

                            <Dropdown className={cx("search_01")} overlay={techList} trigger={['click']}
                                      visible={showTechField} onVisibleChange={() => {
                                setShowTechField(!showTechField)
                            }}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    활용 기술<DownOutlined style={{marginLeft: 10}}/>
                                </a>
                            </Dropdown>
                            <select name="searchField" value={searchInfo.searchField} onChange={(e) => {
                                setSearchInfo({...searchInfo, searchField: e.target.value})
                            }}>
                                <option value="company_name">기업명</option>
                                <option value="item">아이템</option>
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
                        </div>
                    </div>

                    <p className={cx("txt_style_1")}>
                        {/*회원자료 삭제 시 다른 회원이 기존 회원아이디를 사용하지 못하도록 회원아이디, 이름, 닉네임은 삭제하지 않고 영구*/}
                        {/*보관합니다.*/}
                    </p>

                    <div className={cx("admin_cont")}>
                        <h2 className={cx("title_style_1")}><span>목록</span></h2>
                        <div className={cx("btn-box01")}>
                            <Link href={"/admin/startup_present/add"}><a className={cx("basic-btn03")}>스타트업
                                추가</a></Link>
                        </div>
                        <div className={cx("tb_style_1", "startup_present_list")}>
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
                                    <th scope="col">비즈니스 분야</th>
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
                                            <td><Link
                                                href={`${router.pathname}/${item.startupId}`}><a>{item.companyName}</a></Link>
                                            </td>
                                            <td>
                                                {item.businessFieldList.map((field, i) => (
                                                    `${field.businessName} ${i != item.businessFieldList.length - 1 ? '|' : ''} `
                                                ))}
                                            </td>
                                            <td>
                                                {item.techFieldList.map((field, i) => (
                                                    `${field.techName} ${i != item.techFieldList.length - 1 ? '|' : ''} `
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
