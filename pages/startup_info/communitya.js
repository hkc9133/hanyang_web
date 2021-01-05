import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from '../../public/assets/styles/startup_info/startup_info.module.css';
import classnames from "classnames/bind"
const cx = classnames.bind(styles);

import PageNavigation from "../../component/layout/PageNavigation";
import BoardSkinSelector from "../../component/skin/board/BoardSkinSelector";
import SearchBoxSelector from "../../component/skin/searchBox/SearchBoxSelector";
import wrapper from "../../store/configureStore";
import client from "../../lib/api/client";
import {getBoardContentList, getBoardInfoAll} from "../../store/board/board";
import {END} from "redux-saga";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";

import qs from 'qs';

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    const cookie = context.req && context.req.headers.cookie ? context.req.headers.cookie : '';
    client.defaults.headers.Cookie = cookie;
    const { page = 1,boardEnName = 'community',categoryId = null,categoryCodeId = null,searchValue = null,searchField = null} = context.query
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

const Communitya = () => {

    const router = useRouter();
    const dispatch = useDispatch();

    const [searchInfo, setSearchInfo] = useState({
        page:null,
        boardEnName:"community",
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
        const { page = 1,boardEnName = 'community',categoryId = null,categoryCodeId = null,searchValue = null,searchField = null} = router.query
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
                <h1 className={cx("sub_top_title")}>커뮤니티</h1>
                <p className={cx("sub_top_txt")}>한양대학교 창업지원단 관리자들이 만들어가는 커뮤니티 입니다. <br/>공유하고 싶은 아이디어를 공개하고 댓글로 이야기를 나눌 수 있습니다.</p>
                <SearchBoxSelector skinName="SearchBoxStyle01" changeSearchInfo={changeSearchInfo} searchInfo={searchInfo} searchContent={searchContent}/>
                <BoardSkinSelector skinName="ListType01" pageChange={pageChange} content={content}/>
            </section>


        </>
    );
};

export default Communitya;


