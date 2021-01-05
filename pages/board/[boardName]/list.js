import React, {useCallback, useEffect, useState} from 'react';
import wrapper from "../../../store/configureStore";
import client from "../../../lib/api/client";
import {getBoard, getBoardContentList, getBoardInfoAll} from "../../../store/board/board";
import {END} from "redux-saga";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import PageNavigation from "../../../component/layout/PageNavigation";
import SearchBoxSelector from "../../../component/skin/searchBox/SearchBoxSelector";
import BoardSkinSelector from "../../../component/skin/board/BoardSkinSelector";
import Link from 'next/link'

import styles from '../../../public/assets/styles/skin/board.module.css';
import classnames from "classnames/bind"

import qs from 'qs';
const cx = classnames.bind(styles);


export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    const cookie = context.req && context.req.headers.cookie ? context.req.headers.cookie : '';
    client.defaults.headers.Cookie = cookie;
    const { page = 1,boardName = context.params.boardName, categoryId = null,categoryCodeId = null,searchValue = null,searchField = null} = context.query
    // const data = {
    //     page:page,
    //     boardEnName:boardName,
    //     categoryId:categoryId,
    //     categoryCodeId:categoryCodeId,
    //     searchValue:searchValue,
    //     searchField:searchField
    // }
    // context.store.dispatch(getBoardContentList(data));
    context.store.dispatch(getBoard(boardName));
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
    // return {
    //     props: { boardName: context.params.boardName },
    // };
})

const List = () => {


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

    const {content,board,contentListLoading} = useSelector(({board,loading})=> ({
        content:board.content,
        board:board.board,
        contentListLoading:loading['board/GET_BOARD_CONTENT_LIST'],
    }))

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
    },[board,router.query])


    // useEffect(() => {
    //
    //     if(board.board != null){
    //         const { page = 1,boardName = null,categoryId = null,categoryCodeId = null,searchValue = null,searchField = null} = router.query
    //
    //         const data = {
    //             page:page,
    //             boardEnName:boardName,
    //             categoryId:categoryId,
    //             categoryCodeId:categoryCodeId,
    //             searchValue:searchValue,
    //             searchField:searchField,
    //             pageSize:board.board.pageSize ? board.board.pageSize : 0
    //         }
    //         dispatch(getBoardContentList(data));
    //     }
    //
    // },[router.query])


    const changeSearchInfo = (e) =>{

        const {name, value} = e.target;
        setSearchInfo(searchInfo =>({
            ...searchInfo,
            [name]:value
        }))
    }

    // const searchContent = (e) =>{
    //     const queryString = qs.stringify({...searchInfo,boardEnName:currentBoard.board.boardEnName});
    //     router.push(`${router.pathname}?${queryString}`)
    // }

    const searchContent = useCallback((value) =>{
        const queryString = qs.stringify({...searchInfo,boardName:router.query.boardName,page:1});
        router.push(`${router.pathname}?${queryString}`)
    },[searchInfo])


    const pageChange = useCallback((pageNum) =>{
        const queryString = qs.stringify({...router.query,page:pageNum});
        router.push(`${router.pathname}?${queryString}`)
    },[router.query])


    return (
        <>
            <PageNavigation/>
            {currentBoard.board != null && (
                <section className={cx("sub_container","online_content")}>
                    <h1 className={cx("sub_top_title")}>{currentBoard.board.boardKrName}</h1>
                    <p className={cx("sub_top_txt")}>{currentBoard.board.boardDesc}</p>

                    {currentBoard.board.boardEnName == 'people' && (
                        <SearchBoxSelector skinName="SearchBoxStyle02" changeSearchInfo={changeSearchInfo} searchInfo={searchInfo} searchContent={searchContent} category={currentBoard.cate}/>
                    )}
                    {currentBoard.board.boardEnName == 'data_room' || currentBoard.board.boardEnName == 'community' || currentBoard.board.boardEnName == "startup_info" && (
                        <SearchBoxSelector skinName="SearchBoxStyle01" changeSearchInfo={changeSearchInfo} searchInfo={searchInfo} searchContent={searchContent} category={currentBoard.cate}/>
                    )}


                    {currentBoard.board.boardEnName == 'online_content' || currentBoard.board.boardEnName == 'community'  && (
                        <SearchBoxSelector skinName="SearchBoxStyle01" changeSearchInfo={changeSearchInfo} searchInfo={searchInfo} searchContent={searchContent} category={currentBoard.cate}/>
                    )}

                    <div className={cx("btn_box")}>
                        <Link href={`/board/${currentBoard.board.boardEnName}/write`}><a className={cx("basic-btn03","write_btn")}>글쓰기</a></Link>
                    </div>
                    {currentBoard.board.boardEnName == 'data_room' && (
                        <BoardSkinSelector skinName="ListType01" pageChange={pageChange} board={currentBoard.board} content={content} category={currentBoard.cate} loading={contentListLoading}/>
                    )}
                    {currentBoard.board.boardEnName == 'community' && (
                        <BoardSkinSelector skinName="ListType02" pageChange={pageChange} board={currentBoard.board} content={content} category={currentBoard.cate} loading={contentListLoading}/>
                    )}
                    {currentBoard.board.boardEnName == 'startup_info' && (
                        <BoardSkinSelector skinName="ListType02" pageChange={pageChange} board={currentBoard.board} content={content} category={currentBoard.cate} loading={contentListLoading}/>
                    )}
                    {currentBoard.board.boardEnName == 'people' && (
                        <BoardSkinSelector skinName="GalleryType01" pageChange={pageChange} board={currentBoard.board} content={content} category={currentBoard.cate} loading={contentListLoading}/>
                    )}
                    {currentBoard.board.boardEnName == 'online_content' && (
                        <BoardSkinSelector skinName="GalleryType02" pageChange={pageChange} board={currentBoard.board} content={content} category={currentBoard.cate} loading={contentListLoading}/>
                    )}

                </section>
            )}

        </>
    );
};

export default List;
