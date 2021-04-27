import React from 'react';

import styles from '../../../public/assets/styles/skin/search_box.module.css';
import classnames from "classnames/bind"

const cx = classnames.bind(styles);

const SearchBoxStyle01 = ({searchContent,changeSearchInfo,category,searchInfo}) => {

    const handleEnter = (e) => {
        if (e.key == "Enter") {
            searchContent();
        }
    }

    return (
        <fieldset className={cx("search_wrap")}>
                <div className={cx("search")}>
                    {/*{category !== null && (*/}
                    {/*    <select name="categoryCodeId" value={searchInfo.categoryCodeId} style={{width:category !== null ? "19%" : "38%"}} onChange={changeSearchInfo}>*/}
                    {/*        <option value={""}>분류</option>*/}
                    {/*        {category.map((item) =>*/}
                    {/*            (*/}
                    {/*                <option key={item.categoryCodeId} value={item.categoryCodeId}>{item.categoryCodeName}</option>*/}
                    {/*            )*/}
                    {/*        )}*/}
                    {/*    </select>*/}
                    {/*)}*/}
                    <select name="searchField" value={searchInfo.searchField} style={{width:category !== null ? "19%" : "38%"}} onChange={changeSearchInfo}>
                        <option value="title">제목</option>
                        {/*<option value="user_name">작성자 이름</option>*/}
                    </select>
                    <div className={cx("sch_bar")}>
                        <input type="text" name="searchValue" value={searchInfo.searchValue} onChange={changeSearchInfo} className={cx("sch_input")} size="25" maxLength="20"
                               placeholder=" 검색어를 입력해주세요"onKeyPress={handleEnter}/>
                        <button type="button" value="검색" className={cx("btn_search")} onClick={() => {searchContent();}}>검색</button>
                    </div>
                </div>
        </fieldset>
    );
};

export default React.memo(SearchBoxStyle01);
