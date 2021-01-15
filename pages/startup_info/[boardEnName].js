import React, {useEffect, useState} from 'react';
import wrapper from "../../store/configureStore";
import client from "../../lib/api/client";
import {getBoard, getBoardContentList, getBoardInfoAll} from "../../store/board/board";
import {END} from "redux-saga";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import PageNavigation from "../../component/layout/PageNavigation";
import SearchBoxSelector from "../../component/skin/searchBox/SearchBoxSelector";
import BoardSkinSelector from "../../component/skin/board/BoardSkinSelector";
import Link from 'next/link'

import styles from '../../public/assets/styles/skin/board.module.css';
import classnames from "classnames/bind"

import qs from 'query-string';
const cx = classnames.bind(styles);


export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    const cookie = context.req && context.req.headers.cookie ? context.req.headers.cookie : '';
    client.defaults.headers.Cookie = cookie;
    const { page = 1,boardEnName = context.params.boardName,categoryId = null,categoryCodeId = null,searchValue = null,searchField = null} = context.query
    const data = {
        page:page,
        boardEnName:boardEnName,
        categoryId:categoryId,
        categoryCodeId:categoryCodeId,
        searchValue:searchValue,
        searchField:searchField
    }
    context.store.dispatch(getBoardContentList(data));
    context.store.dispatch(getBoard(boardEnName));
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
})

const StartupInfoBoard = () => {


    const router = useRouter();
    const dispatch = useDispatch();

    const [searchInfo, setSearchInfo] = useState({
        page:null,
        boardEnName:router.query.boardEnName,
        categoryId:"",
        categoryCodeId:"",
        searchValue:"",
        searchField:"title"
    });
    const [currentBoard, setCurrentBoard] = useState({
        board:null,
        category:[]
    });

    const {content,board,infoAll,contentListLoading} = useSelector(({board,loading})=> ({
        content:board.content,
        board:board.board,
        contentListLoading:loading['board/GET_BOARD_CONTENT_LIST'],
    }))

    useEffect(() => {
        setSearchInfo({
            ...searchInfo,
            ...router.query
        })

    },[])

    useEffect(() => {
        const { page = 1,boardEnName = router.query.boardEnName,categoryId = null,categoryCodeId = null,searchValue = null,searchField = null} = router.query
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
                <h1 className={cx("sub_top_title")}>{board.board.boardKrName}</h1>
                <p className={cx("sub_top_txt")}>{board.board.boardDesc}</p>
                <SearchBoxSelector skinName="SearchBoxStyle01" changeSearchInfo={changeSearchInfo} searchInfo={searchInfo} searchContent={searchContent} category={board.cate.length > 0 ? board.cate : null}/>
                <div className={cx("btn_box")}>
                    <Link href={`/board/${router.query.boardEnName}/write`}><a className={cx("basic-btn03","write_btn")}>글쓰기</a></Link>
                </div>
                <BoardSkinSelector skinName="ListType02" pageChange={pageChange} board={board.board} content={content}/>

            </section>

        </>
    );
};

export default StartupInfoBoard;
