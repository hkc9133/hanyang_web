import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import wrapper from "../../../../store/configureStore";
import client from "../../../../lib/api/client";
import {getBoard, getBoardContentList, getBoardInfoAll} from "../../../../store/board/adminBoard";
import {END} from "redux-saga";
import qs from 'query-string';
import Image from "next/image";
import Link from "next/link";

import styles from '../.././../../public/assets/styles/admin/board/board.module.css';
import classnames from "classnames/bind"
import {useDispatch, useSelector} from "react-redux";
import BoardContentListTable from "../../../../component/admin/board/BoardContentListTable";
import Pagination from "../../../../component/common/Pagination";

const cx = classnames.bind(styles);

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    const cookie = context.req && context.req.headers.cookie ? context.req.headers.cookie : '';
    client.defaults.headers.Cookie = cookie;
    const { page = 1,boardEnName = null,categoryId = null,categoryCodeId = null,searchValue = null,searchField = null} = context.query
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
    })
    const [currentBoard, setCurrentBoard]= useState(null);

    const {content,infoAll,contentListLoading} = useSelector(({adminBoard,loading})=> ({
        content:adminBoard.content,
        infoAll:adminBoard.infoAll,
        contentListLoading:loading['adminBoard/GET_BOARD_CONTENT_LIST'],
    }))

    useEffect(() => {
        setSearchInfo({
            ...searchInfo,
            boardEnName:router.query.boardEnName,
            ...router.query
        })
    },[router.query])
    useEffect(() => {
        const {boardEnName = null} = router.query
        if(infoAll.boardList.length > 0 && boardEnName != null){
            infoAll.boardList.forEach( (item) => item.boardEnName == boardEnName && setCurrentBoard(item));


        }
    },[infoAll])

    useEffect(() => {
        const { page = 1,boardEnName = null,categoryId = null,categoryCodeId = null,searchValue = null,searchField = null} = router.query
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

    const moveBoardContent = () =>{
    }

    const changeSearchInfo = (e) =>{
        const {name, value} = e.target;

        setSearchInfo({
            ...searchInfo,
            [name]:value
        })
    }

    const searchContent = (e) =>{
        const queryString = qs.stringify({...searchInfo,page:1});
        router.push(`${router.pathname}?${queryString}`)
    }

    const pageChange = (pageNum) => {
        const queryString = qs.stringify({...router.query,page:pageNum});
        router.push(`${router.pathname}?${queryString}`)
    }

    return (
        <>
            <section className={cx("container")}>
                <h1 className={cx("top_title")}>게시판 글 목록</h1>
                <div className={cx("adm_container")}>
                    <div className={`${cx("member_info","box")} clfx `}>
                        <ul className={"clfx"}>
                            <li>
                                <span className={cx("title","icon_1")}>검색 게시글</span>
                                <div className={cx("number")}>
                                    <strong>{content.page !== null && content.page.totalCount}</strong>개
                                </div>
                            </li>
                        </ul>

                        <div className={`${cx("member_id_search")} clfx`}>
                            {/*<select name="boardEnName" value={searchInfo.boardEnName} onChange={(e) =>{changeSearchInfo(e)}}>*/}
                            {/*    <option value="">게시판 선택</option>*/}
                            {/*    {infoAll.boardList.map((item)=>{*/}
                            {/*        return <option key={item.boardEnName} value={item.boardEnName}>{item.boardKrName}</option>*/}
                            {/*    })}*/}
                            {/*</select>*/}
                            <select name="categoryCodeId" value={searchInfo.categoryCodeId} onChange={(e) => {changeSearchInfo(e)}}>
                                <option value="">카테고리 선택</option>
                                {currentBoard != null && (
                                    infoAll.categoryCodeList.map((item)=>
                                            currentBoard.categoryId == item.categoryId &&(
                                                <option key={item.categoryCodeId} value={item.categoryCodeId}>{`${item.categoryCodeName}(${item.categoryName})`}</option>
                                            )
                                        )
                                )}
                            </select>
                            <select name="searchField" value={searchInfo.searchField} onChange={(e) => {changeSearchInfo(e)}}>
                                <option value="title">제목</option>
                                <option value="content">내용</option>
                                <option value="writerId">작성자 아이디</option>
                                <option value="userName">작성자 이름</option>
                            </select>
                            <input type="text" name="searchValue" value={searchInfo.searchValue} onChange={(e) => {changeSearchInfo(e)}}/>
                            <button type="button" className={cx("btn_search")} onClick={()=>{searchContent()}}>
                                <Image src="/assets/image/admin/btn_search.gif" width={40} height={33} alt="검색하기"/>
                            </button>
                        </div>
                    </div>

                    <p className={cx("txt_style_1")}>
                        {/*회원자료 삭제 시 다른 회원이 기존 회원아이디를 사용하지 못하도록 회원아이디, 이름, 닉네임은 삭제하지 않고 영구*/}
                        {/*보관합니다.*/}
                    </p>

                    <div className={cx("admin_cont")}>
                        <h2 className={cx("title_style_1")}><span>목록</span></h2>
                        <div className={cx("top_btn_box")}>
                            {currentBoard != null &&(
                                <Link href={`/admin/board/content/${currentBoard.boardEnName}/write`}>글 쓰기</Link>
                            )}
                        </div>
                        {content.list.length !== 0 &&
                            <BoardContentListTable cx={cx} moveBoardContent={moveBoardContent} list={content.list} currentBoard={currentBoard}/>
                        }

                        {content.page != null && (
                            <Pagination
                                totalRecords={content.page.totalCount}
                                pageLimit={content.page.pageSize}
                                pageNeighbours={1}
                                currentPage={content.page.pageNo}
                                onPageChanged={pageChange}
                            />
                        )}
                    </div>

                </div>
            </section>
        </>
    );
};

export default List;
