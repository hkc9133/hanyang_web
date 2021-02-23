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
import {DownOutlined, FileImageOutlined} from '@ant-design/icons';

import { Select } from 'antd';
import moment from "moment";
import Pagination from "../../component/common/Pagination";
import client from "../../lib/api/client";

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
            <section className={cx("sub_container","startup_emissions")}>
                <h1 className={cx("sub_top_title")}>스타트업배출현황</h1>
                <p className={cx("sub_top_txt")}>한양대학교는 창업기업은 3939개 기업과 함께하고 있습니다. <br/>검색 버튼을 활용하면 한양대학교와 함께하는 창업기업들을 모두 확인 할
                    수 있습니다. </p>

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
                            <col style={{width:"14.3%"}}/>
                            <col style={{width:"16.3%"}}/>
                            <col style={{width:"15.15%"}}/>
                            <col/>
                            <col/>
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
                                    <a href={item.homepage} target="_blank">
                                    {item.attachFile != null ? <img src={`${client.defaults.baseURL}/resource${item.attachFile.filePath}/${item.attachFile.fileName+item.attachFile.fileExtension}`} width={35} height={35} alt={"LOGO"}/> : (
                                        <FileImageOutlined style={{fontSize:30,verticalAlign:'middle'}}/>
                                    ) }
                                    </a>
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
