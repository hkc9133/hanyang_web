import React, {useEffect, useState} from 'react';
import Link from "next/link";
import styles from '../../public/assets/styles/admin/users/users.module.css';
import classnames from "classnames/bind"
import Image from 'next/image'
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {getBoardList} from "../../store/board/board";
import {getUserList} from "../../store/user/user";
import UserListTable from "../../component/admin/user/UserListTable";
import Pagination from "../../component/common/Pagination";
import qs from 'qs';

const cx = classnames.bind(styles);

const Users = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [searchInfo, setSearchInfo] = useState({
        searchField:"user_id",
        searchValue:""
    })

    const {user,userListLoading} = useSelector(({user,loading})=> ({
        user:user.user,
        userListLoading:loading['board/GET_USER_LIST'],
    }))

    useEffect(() => {
        // dispatch(getBoardList(router.query))
    },[])

    useEffect(() => {
        const { page = 1,searchValue = null,searchField = null,type = null} = router.query
        const data = {
            page:page,
            type:type,
            searchValue:searchValue,
            searchField:searchField
        }
        dispatch(getUserList(data));
    },[router.query])

    // const moveBoardConfig = (boardName) =>{
    //     router.push(`/admin/board/${boardName}/edit`)
    // }
    //
    // const moveBoardContentList = (boardEnName) =>{
    //     const queryString = qs.stringify({
    //         boardEnName
    //     });
    //     router.push(`/admin/board/content/list?${queryString}`)
    // }

    const changeSearchInfo = (e) => {
        const {name, value} = e.target;

        setSearchInfo({
            ...searchInfo,
            [name]:value
        })
    }

    const searchUser = (e) => {
        const queryString = qs.stringify(searchInfo);
        router.push(`${router.pathname}?${queryString}`)
    }
    const pageChange = (pageNum) => {
        const queryString = qs.stringify({...router.query,page:pageNum});
        router.push(`${router.pathname}?${queryString}`)
    }

    return (
        <section className={cx("container")}>
            <h1 className={cx("top_title")}>회원관리</h1>
            <div className={cx("adm_container")}>
                <div className={`${cx("member_info","box")} clfx `}>
                    <ul className={"clfx"}>
                        <li>
                            <span className={cx("title","icon_1")}>총회원수</span>
                            <div className={cx("number")}>
                                <strong>{user.page != null && user.page.totalCount}</strong>명
                            </div>
                        </li>
                        {/*<li>*/}
                        {/*    <span className={cx("title","icon_3")}>삭제</span>*/}
                        {/*    <div className={cx("number")}>*/}
                        {/*        <strong>0</strong>명*/}
                        {/*    </div>*/}
                        {/*</li>*/}
                    </ul>

                    <div className={`${cx("member_id_search")} clfx`}>
                        <select name="type" onChange={(e) =>{changeSearchInfo(e)}}>
                            <option value="">가입 유형</option>
                            <option value="GOOGLE">구글</option>
                            <option value="KAKAO">카카오</option>
                            <option value="NAVER">네이버</option>
                            <option value="FACEBOOOK">페이스북</option>
                            <option value="HANYANG">한양인</option>
                        </select>
                        <select name="searchField" onChange={(e) =>{changeSearchInfo(e)}}>
                            <option value="user_id">아이디</option>
                            <option value="user_name">이름</option>
                            <option value="user_email">E-MAIL</option>
                        </select>
                        <input type="text" name="searchValue" onChange={(e) =>{changeSearchInfo(e)}} />
                        <button type="button" className={cx("btn_search")} onClick={()=>{searchUser()}}>
                            <Image src="/assets/image/admin/btn_search.gif" width={40} height={33} alt="검색하기"/>
                        </button>
                    </div>
                </div>

                <p className={cx("txt_style_1")}>회원자료 삭제 시 다른 회원이 기존 회원아이디를 사용하지 못하도록 회원아이디, 이름, 닉네임은 삭제하지 않고 영구
                    보관합니다.</p>

                <div className={cx("admin_cont")}>
                    <h2 className={cx("title_style_1")}><span>전체목록</span></h2>
                    <div className={cx("tb_style_1")}>
                        <UserListTable cx={cx} list={user.list}/>
                    </div>
                    {user.page != null && (
                        <Pagination
                            totalRecords={user.page.totalCount}
                            pageLimit={user.page.pageSize}
                            pageNeighbours={1}
                            currentPage={user.page.pageNo}
                            onPageChanged={pageChange}
                        />
                    )}
                </div>

            </div>
        </section>
    );
};

export default Users;
