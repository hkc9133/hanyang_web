import React, {useEffect} from 'react';
import styles from '../../../public/assets/styles/skin/search_box.module.css';
import classnames from "classnames/bind"
import {useRouter} from "next/router";
import Link from 'next/link';

const cx = classnames.bind(styles);

const SearchBoxStyle04 = ({searchContent,changeSearchInfo,category,searchInfo}) => {
    const router = useRouter();
    useEffect(()=>{
        // if(router.query.categoryCodeId == null || router.query.categoryCodeId == undefined){
        //     router.push(`/board/${router.query.boardName}/list?categoryCodeId=${category[0].categoryCodeId}`)
        // }

    },[])
    return (
        <div className={cx("tab_style_4")}>
            <div className={cx("search")}>
                <select name="searchField" value={searchInfo.searchField} style={{width:category !== null ? "19%" : "38%"}} onChange={changeSearchInfo}>
                    <option value="title">제목</option>
                    <option value="content">내용</option>
                    <option value="user_name">작성자 이름</option>
                </select>
                <div className={cx("sch_bar")}>
                    <input type="text" name="searchValue" value={searchInfo.searchValue} onChange={changeSearchInfo} className={cx("sch_input")} size="25" maxLength="20"
                           placeholder=" 검색어를 입력해주세요"/>
                    <button type="button" value="검색" className={cx("btn_search")} onClick={() => {searchContent();}}>검색</button>
                </div>
            </div>
            <ul className={"clfx"}>
                {category.map((item)=>
                    <li key={item.categoryCodeId} className={cx({on:router.query.categoryCodeId == item.categoryCodeId})}>
                        <Link href={`/board/${router.query.boardName}/list?categoryCodeId=${item.categoryCodeId}`}>
                            <a>
                                <span>{item.categoryCodeName}</span>
                            </a>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default SearchBoxStyle04;
