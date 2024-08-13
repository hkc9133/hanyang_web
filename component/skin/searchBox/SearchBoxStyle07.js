import React, {useEffect} from 'react';
import styles from '../../../public/assets/styles/skin/search_box.module.css';
import classnames from "classnames/bind"
import {useRouter} from "next/router";
import Link from 'next/link';

const cx = classnames.bind(styles);

const SearchBoxStyle03 = ({searchContent,changeSearchInfo,category,searchInfo}) => {

    const handleEnter = (e) => {
        if (e.key == "Enter") {
            searchContent();
        }
    }

    return (
        <fieldset className={cx("search_wrap","search_03")}>
            <div className={cx("search")}>
                <select name="searchField" value={searchInfo.searchField} style={{width:category !== null ? "19%" : "38%"}} onChange={changeSearchInfo}>
                    <option value="title">Name</option>
                </select>
                <div className={cx("sch_bar")}>
                    <input type="text" name="searchValue" value={searchInfo.searchValue} onChange={changeSearchInfo} className={cx("sch_input")} size="25" maxLength="20"
                           placeholder=" " onKeyPress={handleEnter}/>
                    <button type="button" value="Search" className={cx("btn_search")} onClick={() => {searchContent();}}>Search</button>
                </div>
            </div>
        </fieldset>
    );
};

export default React.memo(SearchBoxStyle03);
