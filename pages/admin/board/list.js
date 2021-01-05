import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Image from "next/image";
import Link from "next/link";
import styles from '../.././../public/assets/styles/admin/board/board.module.css';
import classnames from "classnames/bind"
import {useRouter} from "next/router";

import {getBoardContentList, getBoardList} from "../../../store/board/adminBoard";
import BoardListTable from "../../../component/admin/board/BoardListTable";
import qs from 'qs';

const cx = classnames.bind(styles);

const List = () => {

    const dispatch = useDispatch();
    const router = useRouter();

    const [searchInfo, setSearchInfo] = useState({
        searchField:"board_kr_name",
        searchValue:""
    })

    const {boardList,boardListLoading} = useSelector(({adminBoard,loading})=> ({
        boardList:adminBoard.board,
        boardListLoading:loading['adminBoard/GET_BOARD_LIST'],
    }))

    useEffect(() => {
        // dispatch(getBoardList(router.query))
    },[])

    useEffect(() => {
        const { page = 1,searchValue = null,searchField = null} = router.query
        const data = {
            page:page,
            searchValue:searchValue,
            searchField:searchField
        }
        dispatch(getBoardList(data));
    },[router.query])

    const moveBoardConfig = (boardName) =>{
        router.push(`/admin/board/${boardName}/edit`)
    }

    const moveBoardContentList = (boardEnName) =>{
        const queryString = qs.stringify({
            boardEnName
        });
        router.push(`/admin/board/content/list?${queryString}`)
    }

    const changeSearchInfo = (e) => {
        const {name, value} = e.target;

        setSearchInfo({
            ...searchInfo,
            [name]:value
        })
    }

    const searchBoard = (e) => {
        const queryString = qs.stringify(searchInfo);
        router.push(`${router.pathname}?${queryString}`)
    }

    return (
        <section className={cx("container")}>
            <h1 className={cx("top_title")}>게시판 관리</h1>
            <div className={cx("adm_container")}>
                <div className={`${cx("member_info","box")} clfx`}>
                    <ul className={"clfx"}>
                        <li>
                            <span className={cx("title","icon_1")}>총 게시판</span>
                            <div className={cx("number")}>
                                <strong>{boardList.list.length}</strong>개
                            </div>
                        </li>
                    </ul>

                    <div className={`${cx("member_id_search")} clfx`}>
                        <select name="searchField" onChange={(e) => {changeSearchInfo(e)}}>
                            <option value="board_kr_name">게시판 이름(한글)</option>
                            <option value="board_en_name">게시판 이름(영문)</option>
                        </select>
                        <input name="searchValue" type="text" onChange={(e) =>{changeSearchInfo(e)}}/>
                        <button type="button" className={cx("btn_search")} onClick={() => {searchBoard();}}>
                            <Image src="/assets/image/admin/btn_search.gif" width={40} height={33} alt="검색하기"/>
                        </button>
                    </div>
                </div>

                <p className={cx("txt_style_1")}>
                    {/*회원자료 삭제 시 다른 회원이 기존 회원아이디를 사용하지 못하도록 회원아이디, 이름, 닉네임은 삭제하지 않고 영구*/}
                    {/*보관합니다.*/}
                </p>

                <div className={cx("admin_cont")}>
                    <h2 className={cx("title_style_1")}><span>전체목록</span></h2>
                    <BoardListTable cx={cx} list={boardList.list} moveBoardConfig={moveBoardConfig} moveBoardContentList={moveBoardContentList}/>
                    <div className={cx("paging")}>
                        <Link href="/admin/users">
                            <a>
                                <Image src="/assets/image/admin/page_prev.gif" width={40} height={40} alt="page_prev"/>
                            </a>
                        </Link>
                        <Link href="/admin/users" className={cx("on")}><a>1</a></Link>
                        <Link href="/admin/users"><a>2</a></Link>
                        <Link href="/admin/users"><a>3</a></Link>
                        <Link href="/admin/users"><a>4</a></Link>
                        <Link href="/admin/users"><a>5</a></Link>
                        <Link href="/admin/users">
                            <a>
                                <Image src="/assets/image/admin/page_next.gif" width={40} height={40} alt="page_prev"/>
                            </a>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default List;
