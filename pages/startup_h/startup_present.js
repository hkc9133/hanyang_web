import React, {useCallback, useEffect, useState} from 'react';
import Link from 'next/link'
import styles from '../../public/assets/styles/startup_h/startup_h.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";
import {useDispatch, useSelector} from "react-redux";
import {getFieldList, getStartupPresentList} from "../../store/startupPresent/startupPresent";
import qs from "query-string";
import {useRouter} from "next/router";
import {Menu, Checkbox, Button, Modal, Dropdown} from "antd";
const {SubMenu} = Menu;
import {DownOutlined, FileImageOutlined,HomeOutlined} from '@ant-design/icons';

import { Select } from 'antd';
import moment from "moment";
import Pagination from "../../component/common/Pagination";
import client from "../../lib/api/client";
import Image from "next/image";
import Head from "next/head";

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const cx = classnames.bind(styles);


const plainOptions = ['Apple', 'Pear', 'Orange'];

const StartupPresent = () => {

    const dispatch = useDispatch();
    const router = useRouter();

    const {startupPresentList,fieldList} = useSelector(({startupPresent,loading})=> ({
        startupPresentList:startupPresent.getStartupPresentList,
        fieldList:startupPresent.getFieldList
    }))

    const [field, setFields] = useState({business:[],tech:[]})

    const [showBusinessField, setShowBusinessField] = useState(false)
    const [showTechField, setShowTechField] = useState(false)

    const [businessAll, setBusinessAll] = useState(false)
    const [techAll, setTechAll] = useState(false)

    const [searchInfo, setSearchInfo] = useState({
        searchValue:"",
        searchField:"company_name",
        businessIdList:[],
        techIdList:[],
        pageNo:1,
    })
    useEffect(() => {

        const data = {
            ...searchInfo
        }
        dispatch(getFieldList())
        dispatch(getStartupPresentList(data))
    },[])

    useEffect(() => {
        const {pageNo = 1,searchField = null, searchValue = null} = router.query

        const data = {
            ...searchInfo,
            searchField:searchField,
            searchValue:searchValue,
            pageNo:pageNo
        }

        dispatch(getStartupPresentList(data))
    },[router.query])

    useEffect(() =>{
        setFields({
            business:fieldList.business.map((item) =>({label:item.businessName,value:item.businessId})),
            tech:fieldList.tech.map((item) =>({label:item.techName,value:item.techId})),
        })
    },[fieldList])

    const searchSubmit = () =>{
        const data = {
            pageNo:1,
            searchValue:searchInfo.searchValue,
            searchField:searchInfo.searchField
        }
        const queryString = qs.stringify(data);
        router.push(`${router.pathname}?${queryString}`)

    }

    const pageChange = useCallback((pageNo) =>{
        const data = {
            pageNo:pageNo,
        }
        const queryString = qs.stringify(data);
        router.push(`${router.pathname}?${queryString}`)
    },[searchInfo])


    const changeBusiness = (value) =>{
        setSearchInfo({
            ...searchInfo,
            businessIdList: value
        })
        setBusinessAll(false)

    }
    const changeTech = (value) =>{
        setSearchInfo({
            ...searchInfo,
            techIdList: value
        })
        setTechAll(false)
    }

    const changeBusinessAll = (e) =>{
        setSearchInfo({
            ...searchInfo,
            businessIdList: e.target.checked ? fieldList.business.map((item) =>(item.businessId)) : []
        })
        setBusinessAll(e.target.checked)

    }
    const changeTechAll = (e) =>{
        setSearchInfo({
            ...searchInfo,
            techIdList: e.target.checked ? fieldList.tech.map((item) =>(item.techId)) : []
        })
        setTechAll(e.target.checked)

    }


    const businessList = (
        <div className={cx("checkbox_g")} >
            <Checkbox checked={businessAll} onChange={changeBusinessAll}>
                전체
            </Checkbox>
            <Checkbox.Group options={field.business} value={searchInfo.businessIdList} onChange={changeBusiness}/>
        </div>
    )

    const techList = (
        <div className={cx("checkbox_g")} >
            <Checkbox checked={techAll} onChange={changeTechAll}>
                전체
            </Checkbox>
            <Checkbox.Group options={field.tech} value={searchInfo.techIdList} onChange={changeTech}/>
        </div>
    )

    return (
        <>
            <Head>
                <title>한양대학교 창업지원단 -스타트업 배출현황</title>
            </Head>
            <PageNavigation/>
            <section className={cx("sub_container","startup_emissions")}>
                <h1 className={cx("sub_top_title")}>스타트업 배출현황</h1>
                <p className={cx("sub_top_txt")}>한양대학교에서 발굴하고 육성한 스타트업을 소개합니다. </p>

                <div className={cx("search_type_2")}>
                    <Dropdown className={cx("search_01")} overlay={businessList} trigger={['click']} visible={showBusinessField} onVisibleChange={() =>{setShowBusinessField(!showBusinessField)}}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            비즈니스 분야<DownOutlined style={{marginLeft:10}}/>
                        </a>
                    </Dropdown>

                    <Dropdown className={cx("search_01")} overlay={techList} trigger={['click']} visible={showTechField} onVisibleChange={() =>{setShowTechField(!showTechField)}}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            활용 기술<DownOutlined style={{marginLeft:10}}/>
                        </a>
                    </Dropdown>
                    <select name="searchField" value={searchInfo.searchField} onChange={(e) =>{setSearchInfo({...searchInfo,searchField: e.target.value})}}>
                        <option value="company_name">기업명</option>
                        <option value="item">아이템</option>
                    </select>
                    <input type="text" placeholder="검색어를 입력하세요." value={searchInfo.searchValue} onChange={(e) =>{setSearchInfo({...searchInfo,searchValue: e.target.value})}}/>
                    <button type="button" className={cx("btn_search")} onClick={() =>{searchSubmit()}}>검색</button>
                </div>

                <div className={cx("bbs_tb_list")}>
                    <table>
                        <colgroup>
                            <col style={{width:"5%"}}/>
                            <col style={{width:"12%"}}/>
                            <col style={{width:"6%"}}/>
                            <col style={{width:"6%"}}/>
                            <col style={{width:"20%"}}/>
                            <col style={{width:"10%"}}/>
                        </colgroup>
                        <thead>
                        <tr>
                            <th scope="col">번호</th>
                            <th scope="col">기업명</th>
                            <th scope="col">비즈니스 분야</th>
                            <th scope="col">활용 기술</th>
                            <th scope="col">사업 아이템</th>
                            <th scope="col">링크</th>
                        </tr>
                        </thead>
                        <tbody>
                        {startupPresentList.list.map((item) =>(
                            <tr key={item.rownum}>
                                <td>{item.rownum}</td>
                                <td>{item.companyName}</td>
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
                                <td>{item.item}</td>
                                <td>
                                    {item.homepage != null && (
                                        <Link href={item.homepage}>
                                            <a target="_blank">
                                                <HomeOutlined style={{fontSize:22,verticalAlign:'top'}}/>
                                            </a>
                                        </Link>
                                    )}
                                    {item.insta != null && item.insta != "" &&
                                    <a href={item.insta} target="_blank"><Image
                                        src="/assets/image/startup_insta.png" width={25} height={25}
                                        alt="sns_logo"/></a>}
                                    {item.facebook != null && item.facebook != "" &&
                                    <a href={item.facebook} target="_blank"><Image
                                        src="/assets/image/startup_facebook.png" width={25} height={25}
                                        alt="sns_logo"/></a>}
                                    {item.naverBlog != null && item.naverBlog != "" &&
                                    <a href={item.naverBlog} target="_blank"><Image
                                        src="/assets/image/startup_naver_blog.png" width={25} height={25}
                                        alt="sns_logo"/></a>}
                                    {item.twitter != null && item.twitter != "" &&
                                    <a href={item.twitter} target="_blank"><Image
                                        src="/assets/image/startup_twitter.png" width={25} height={25}
                                        alt="sns_logo"/></a>}
                                </td>
                            </tr>
                        ))}

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

            </section>

        </>
    );
};

export default StartupPresent;
