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
                        <Link href={`/board/${router.query.boardName}/list?categoryCodeId=${item.categoryCodeId}`}>
                            <a>
                            <div className={cx("inner")}>
                                <strong>{item.categoryCodeName}</strong>
                                <span>{item.categoryCodeDesc}</span>
                            </div>
                            </a>
                        </Link>
                    </li>
                )}
                {/*<li className={cx("on")}>*/}
                {/*    <a href="#">*/}
                {/*        <div className={cx("inner")}>*/}
                {/*            <strong>스타트업 Learn</strong>*/}
                {/*            <span>창업을 시작하는 일반인을 위한 <br/>엑셀러레이팅 프로그램</span>*/}
                {/*        </div>*/}
                {/*    </a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="#">*/}
                {/*        <div className={cx("inner")}>*/}
                {/*            <strong>스타트업 Make</strong>*/}
                {/*            <span>창업을 시작하는 일반인을 위한 <br/>엑셀러레이팅 프로그램</span>*/}
                {/*        </div>*/}
                {/*    </a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="#">*/}
                {/*        <div className={cx("inner")}>*/}
                {/*            <strong>스타트업 Launch</strong>*/}
                {/*            <span>창업을 시작하는 일반인을 위한 <br/>엑셀러레이팅 프로그램</span>*/}
                {/*        </div>*/}
                {/*    </a>*/}
                {/*</li>*/}
            </ul>
        </div>
    );
};

export default SearchBoxStyle02;
