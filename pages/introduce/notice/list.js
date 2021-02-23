import React, {useCallback, useEffect, useState} from 'react';
import PageNavigation from "../../../component/layout/PageNavigation";
import SearchBoxSelector from "../../../component/skin/searchBox/SearchBoxSelector";
import Link from "next/link";
import BoardSkinSelector from "../../../component/skin/board/BoardSkinSelector";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {getNoticeList} from "../../../store/notice/notice";
import qs from "query-string";
import wrapper from "../../../store/configureStore";
import client from "../../../lib/api/client";
import {END} from "redux-saga";

import styles from '../../../public/assets/styles/skin/board.module.css';
import classnames from "classnames/bind"
const cx = classnames.bind(styles);

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    const cookie = context.req && context.req.headers.cookie ? context.req.headers.cookie : '';
    client.defaults.headers.Cookie = cookie;
    const { page = 1,  categoryCodeId = null,searchValue = null,searchField = null} = context.query
    const data ={
        page:page,
        categoryCodeId:categoryCodeId,
        searchValue:searchValue,
        searchField:searchField,
        showNotice:true
    }
    context.store.dispatch(getNoticeList(data));
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
})


const List = () => {


    const router = useRouter();
    const dispatch = useDispatch();

    const [searchInfo, setSearchInfo] = useState({
        page:null,
        categoryCodeId:"",
        searchValue:"",
        searchField:"title"
    });

    const {notice} = useSelector(({notice,loading})=> ({
        notice:notice.notice,
    }))

    useEffect(() => {
        setSearchInfo(searchInfo =>({
            ...searchInfo,
            ...router.query
        }))

            const { page = 1,  categoryCodeId = null,searchValue = null,searchField = null} = router.query

            const data ={
                page:page,
                categoryCodeId:categoryCodeId,
                searchValue:searchValue,
                searchField:searchField,
                showNotice:true

            }
            dispatch(getNoticeList(data));
    },[router.query])


    const changeSearchInfo = (e) =>{

        const {name, value} = e.target;
        setSearchInfo(searchInfo =>({
            ...searchInfo,
            [name]:value
        }))
    }

    const searchContent = useCallback((value) =>{
        const queryString = qs.stringify({...searchInfo,page:1});
        router.push(`${router.pathname}?${queryString}`)
    },[searchInfo])


    const pageChange = useCallback((pageNum) =>{
        const queryString = qs.stringify({...router.query,page:pageNum});
        router.push(`${router.pathname}?${queryString}`)
    },[router.query])

    return (
        <>
            {/*<PageNavigation/>*/}
                <section className={cx("sub_container","online_content")}>
                    <h1 className={cx("sub_top_title")}>공지사항</h1>
                    <p className={cx("sub_top_txt")}>공지사항 입니다</p>

                    <SearchBoxSelector skinName="SearchBoxStyle03" changeSearchInfo={changeSearchInfo} searchInfo={searchInfo} searchContent={searchContent} category={notice.cate}/>
                    <BoardSkinSelector skinName="NoticeListType01" pageChange={pageChange} content={notice}/>
                </section>

        </>
    );
};

export default List;
