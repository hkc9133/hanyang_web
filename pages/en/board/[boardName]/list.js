import React, {useCallback, useEffect, useState} from 'react';
import wrapper from "../../../../store/configureStore";
// import {getBoard, getBoardContentList} from "../../../../store/board/board";
import {getBoard, getBoardContentList} from "../../../../store/board/board";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import PageNavigationEng from "../../../../component/layout/PageNavigation_eng";
import SearchBoxSelector from "../../../../component/skin/searchBox/SearchBoxSelector";
import BoardSkinSelector from "../../../../component/skin/board/BoardSkinSelector";
import Link from 'next/link'

import styles from '../../../../public/assets/styles/skin/board.module.css';
import classnames from "classnames/bind"

import qs from 'query-string';
import Head from "next/head";

const cx = classnames.bind(styles);

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    // const cookie = context.req && context.req.headers.cookie ? context.req.headers.cookie : '';
    // client.defaults.headers.Cookie = cookie;
    const { page = 1,boardName = context.params.boardName, categoryId = null,categoryCodeId = null,searchValue = null,searchField = null} = context.query
    // context.store.dispatch(getBoard(boardName));
    // context.store.dispatch(END);
    // await context.store.sagaTask.toPromise();
    return {
        props: {
            boardName: boardName
        }
    }
})

const List = ({boardName}) => {


    const router = useRouter();
    const dispatch = useDispatch();

    const [searchInfo, setSearchInfo] = useState({
        page:null,
        boardEnName:"",
        categoryId:"",
        categoryCodeId:"",
        searchValue:"",
        searchField:"title"
    });
    const [currentBoard, setCurrentBoard] = useState({
        board:null,
        category:[]
    });

    const {content,board,user,contentListLoading} = useSelector(({board,auth,loading})=> ({
        content:board.content,
        board:board.board,
        user:auth.user,
        contentListLoading:loading['board/GET_BOARD_CONTENT_LIST'],
    }))

    useEffect(() =>{
        dispatch(getBoard(boardName));
    },[router])

    useEffect(() => {
        setSearchInfo(searchInfo =>({
            ...searchInfo,
            ...router.query
        }))

        setCurrentBoard(currentBoard =>({
            ...currentBoard,
            board: board.board,
            cate: board.cate
        }))

        if(board.board != null){
            const { page = 1,boardName = null,categoryId = null,categoryCodeId = null,searchValue = null,searchField = null} = router.query

            const data = {
                page:page,
                boardEnName:boardName,
                categoryId:categoryId,
                categoryCodeId:categoryCodeId,
                searchValue:searchValue,
                searchField:searchField,
                pageSize:board.board.pageSize ? board.board.pageSize : 0
            }
            dispatch(getBoardContentList(data));
        }
    },[board.board,router])


    const changeSearchInfo = (e) =>{

        const {name, value} = e.target;
        setSearchInfo(searchInfo =>({
            ...searchInfo,
            [name]:value
        }))
    }

    const searchContent = useCallback((value) =>{
        const queryString = qs.stringify({...searchInfo,boardName:router.query.boardName,page:1});
        router.push(`${router.pathname}?${queryString}`)
    },[searchInfo])

    const pageChange = (pageNum) =>{
        const queryString = qs.stringify({...router.query,page:pageNum});
        router.push(`${router.pathname}?${queryString}`)

    }
    // const pageChange = useCallback((pageNum) =>{
    //     const queryString = qs.stringify({...router.query,page:pageNum});
    //     router.push(`${router.pathname}?${queryString}`)
    // },[router.query])

    return (
        <>
            <PageNavigationEng title={"Portfolio"} dep={"dep3"} />

            {currentBoard.board != null && (
                <>
                    <Head>
                        <title>HANYANG STARTUP - HYU Startup NOW</title>
                    </Head>
                <section className={cx("sub_container","online_content")}>
                    <h1 className={cx("sub_top_title")}>{currentBoard.board.boardKrName}</h1>
                    <p className={cx("sub_top_txt")}>{currentBoard.board.boardDesc}</p>

                    {(currentBoard.board.boardEnName == 'notice_en')  && (
                        <SearchBoxSelector skinName="SearchBoxStyle03" changeSearchInfo={changeSearchInfo} searchInfo={searchInfo} searchContent={searchContent} category={currentBoard.cate}/>
                    )}
                    {
                        currentBoard.board.writeRole != null && (currentBoard.board.writeRole.indexOf(user.role) > 0) && currentBoard.board.boardEnName == 'idea' && (
                            <div className={cx("btn_box")}>
                                <Link href={`/en/board/${currentBoard.board.boardEnName}/write`}><a className={cx("basic-btn03","write_btn")}>Write</a></Link>
                            </div>
                        )
                    }


                    {currentBoard.board.boardEnName == 'notice_en' && (
                        <BoardSkinSelector skinName="EnNoticeListType01" pageChange={pageChange} board={currentBoard.board} content={content} category={currentBoard.cate} loading={contentListLoading}/>
                    )}
                </section>
                    </>
            )}

        </>
    );
};

export default List;
