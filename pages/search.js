import React, {useEffect, useState} from 'react';
import styles from '../public/assets/styles/startup_info/startup_info.module.css';
import classnames from "classnames/bind"
import wrapper from "../store/configureStore";
import client from "../lib/api/client";
import {getBoardContentList, getBoardInfoAll} from "../store/board/adminBoard";
import {END} from "redux-saga";
import Link from "next/link";
import {getBoardSearchList} from "../store/main/main";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import qs from "query-string";
import moment from "moment";
import Pagination from "../component/common/Pagination";
const cx = classnames.bind(styles);

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    // const cookie = context.req && context.req.headers.cookie ? context.req.headers.cookie : '';
    // client.defaults.headers.Cookie = cookie;
    const { page = 1,boardEnName = null,searchValue = null,searchField = null} = context.query
    // const data = {
    //     page:page,
    //     boardEnName:boardEnName,
    //     searchValue:searchValue,
    //     searchField:searchField
    // }
    // context.store.dispatch(getBoardSearchList(data));
    // context.store.dispatch(END);
    // await context.store.sagaTask.toPromise();

    return {
        props: {
            info: {
                page:page,
                boardEnName:boardEnName,
                searchValue:searchValue,
                searchField:searchField
            }
        }
    }
})


const SearchPage = ({info}) => {

    const router = useRouter();
    const dispatch = useDispatch();

    const [searchInfo, setSearchInfo] = useState({
        page:null,
        boardEnName:router.query.boardEnName,
        searchValue:"",
        searchField:"title"
    });

    const {boardSearch} = useSelector(({main,loading})=> ({
        boardSearch:main.boardSearch,
    }))

    useEffect(() => {
        setSearchInfo({
            ...searchInfo,
            ...router.query
        })

        dispatch(getBoardSearchList(info))

    },[])


    useEffect(() => {
        // if(boardSearch.list.length != 0){
            const { page = 1,boardEnName = router.query.boardEnName,searchValue = null,searchField = null} = router.query
            const data = {
                page:page,
                boardEnName:boardEnName,
                searchValue:searchValue,
                searchField:searchField
            }
            dispatch(getBoardSearchList(data));
        // }

    },[router])

    const changeSearchInfo = (e) =>{
        const {name, value} = e.target;

        setSearchInfo({
            ...searchInfo,
            [name]:value
        })
    }

    const searchContent = (e) =>{
        const queryString = qs.stringify(searchInfo);
        router.push(`${router.pathname}?${queryString}`)
    }

    const pageChange = (pageNum) => {
        const queryString = qs.stringify({...router.query,page:pageNum});
        router.push(`${router.pathname}?${queryString}`)
    }



    return (
        <section className={cx("sub_container","online_content")}>
            <h1 className={cx("sub_top_title")}>검색결과</h1>
            <p className={cx("sub_top_txt")}>검색하신 결과를 확인하세요. </p>

            <div className={cx("searchArea")}>
                <select name="boardEnName" value={searchInfo.boardEnName} onChange={changeSearchInfo}>
                    <option value="" name={""}>전체</option>
                    {boardSearch.boardList.map((item) =>(
                        <option key={item.boardEnName} value={item.boardEnName} name="boardEnName">{item.boardKrName}</option>
                    ))}
                </select>
                <select name="searchField" value={searchInfo.searchField} onChange={changeSearchInfo} >
                    <option value="title" onChange={changeSearchInfo}>제목</option>
                    <option value="content" onChange={changeSearchInfo}>내용</option>
                </select>
                <input type="text" placeholder="검색어를 입력하세요." name={"searchValue"} value={searchInfo.searchValue} onChange={changeSearchInfo}/>
                <button type="button" className={cx("btn_search")} onClick={() =>{searchContent()}}>검색</button>
            </div>

            <div className={cx("search_list")}>
                <h3 className={cx("search_num")}>{router.query.searchValue != null && `${router.query.searchValue}에 대한 검색결과가`} <strong>총 {boardSearch.page != null && boardSearch.page.totalCount}건</strong>이 검색되었습니다.</h3>

                <ul className={cx("search_list_wrap")}>
                    {boardSearch.list.map((item) =>(
                        <li key={item.contentId}>
                            <a href={`/board/${item.boardEnName}/view/${item.contentId}`}>
                                <h3>{item.title}</h3>
                                <div className={cx("search_list_content")} dangerouslySetInnerHTML={{__html: item.content.replace(/<(\/img|img)([^>]*)>/gi,"")}}></div>
                                <span>{moment(item.regDate).format("YYYY-MM-DD").toString()}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {boardSearch.page != null && (
                <Pagination
                    totalRecords={boardSearch.page.totalCount}
                    pageLimit={boardSearch.page.pageSize}
                    pageNeighbours={1}
                    currentPage={boardSearch.page.pageNo}
                    onPageChanged={pageChange}
                />
            )}


        </section>
    );
};

export default SearchPage;
