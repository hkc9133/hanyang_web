import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import PageNavigation from "../../component/layout/PageNavigation";
import wrapper from "../../store/configureStore";
import client from "../../lib/api/client";
import styles from '../../public/assets/styles/startup_info/startup_info.module.css';
import classnames from "classnames/bind"
import SearchBoxSelector from "../../component/skin/searchBox/SearchBoxSelector";
import BoardSkinSelector from "../../component/skin/board/BoardSkinSelector";
import {useRouter} from "next/router";
import {END} from "redux-saga";
import {useDispatch, useSelector} from "react-redux";
import {getBoardContentList, getBoardInfoAll} from "../../store/board/board";
const cx = classnames.bind(styles);

import qs from 'qs';

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    const cookie = context.req && context.req.headers.cookie ? context.req.headers.cookie : '';
    client.defaults.headers.Cookie = cookie;
    const { page = 1,boardEnName = 'data_room',categoryId = null,categoryCodeId = null,searchValue = null,searchField = null} = context.query
    const data = {
        page:page,
        boardEnName:boardEnName,
        categoryId:categoryId,
        categoryCodeId:categoryCodeId,
        searchValue:searchValue,
        searchField:searchField
    }
    context.store.dispatch(getBoardContentList(data));
    context.store.dispatch(getBoardInfoAll());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
})

const DataRoom = () => {


    const router = useRouter();
    const dispatch = useDispatch();

    console.log(router)

    const [searchInfo, setSearchInfo] = useState({
        page:null,
        boardEnName:"data_room",
        categoryId:"",
        categoryCodeId:"",
        searchValue:"",
        searchField:"title"
    });
    const {content,infoAll,contentListLoading} = useSelector(({board,loading})=> ({
        content:board.content,
        infoAll:board.infoAll,
        contentListLoading:loading['board/GET_BOARD_CONTENT_LIST'],
    }))

    useEffect(() => {
        setSearchInfo({
            ...searchInfo,
            ...router.query
        })
    },[])

    useEffect(() => {
        const { page = 1,boardEnName = 'data_room',categoryId = null,categoryCodeId = null,searchValue = null,searchField = null} = router.query
        const data = {
            page:page,
            boardEnName:boardEnName,
            categoryId:categoryId,
            categoryCodeId:categoryCodeId,
            searchValue:searchValue,
            searchField:searchField
        }
        dispatch(getBoardContentList(data));

    },[router.query])

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
        <>
            <PageNavigation/>
            <section className={cx("sub_container","online_content")}>
                <h1 className={cx("sub_top_title")}>자료실</h1>
                <p className={cx("sub_top_txt")}>창업지원관련 모든 서류는 본 자료실에서 확인 할 수 있습니다. </p>

                <SearchBoxSelector skinName="SearchBoxStyle01" changeSearchInfo={changeSearchInfo} searchInfo={searchInfo} searchContent={searchContent}/>
                <BoardSkinSelector skinName="ListType01" pageChange={pageChange} content={content}/>

            </section>

        </>
    );
};

export default DataRoom;
