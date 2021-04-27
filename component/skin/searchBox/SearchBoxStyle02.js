import React, {useEffect} from 'react';
import styles from '../../../public/assets/styles/skin/search_box.module.css';
import classnames from "classnames/bind"
import {useRouter} from "next/router";
import Link from 'next/link';

const cx = classnames.bind(styles);

const SearchBoxStyle02 = ({searchContent,changeSearchInfo,category,searchInfo}) => {
    const router = useRouter();
    useEffect(()=>{
        // if(router.query.categoryCodeId == null || router.query.categoryCodeId == undefined){
        //     router.push(`/board/${router.query.boardName}/list?categoryCodeId=${category[0].categoryCodeId}`)
        // }

    },[])
    return (
        <div className={cx("tab_style_3")}>
            <ul className={"clfx"}>
                {category.map((item)=>
                    <li key={item.categoryCodeId} className={cx({on:router.query.categoryCodeId == item.categoryCodeId})}>
                            <a href={`/board/${router.query.boardName}/list?categoryCodeId=${item.categoryCodeId}`}>
                            <div className={cx("inner")}>
                                <strong>{item.categoryCodeName}</strong>
                                <span>{item.categoryCodeDesc}</span>
                            </div>
                            </a>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default SearchBoxStyle02;
