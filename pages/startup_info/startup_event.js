import React, {useCallback, useEffect, useState} from 'react';
import Link from 'next/link';
import styles from '../../public/assets/styles/startup_info/startup_info.module.css';
import classnames from "classnames/bind"
import BoardSkinSelector from "../../component/skin/board/BoardSkinSelector";
import {useRouter} from "next/router";
import qs from 'query-string';
import {useDispatch, useSelector} from "react-redux";
import {getNoticeList} from "../../store/notice/notice";
import PageNavigation from "../../component/layout/PageNavigation";

const cx = classnames.bind(styles);

const StartupEvent = () => {

    const router = useRouter();
    const dispatch = useDispatch();


    const [searchInfo, setSearchInfo] = useState({
        type: "",
        categoryCodeId: "",
        page: ""
    })

    const {notice} = useSelector(({notice, loading}) => ({
        notice: notice.notice,
    }))

    useEffect(() => {

    }, [])

    useEffect(() => {

        const {type = "C"} = router.query
        setSearchInfo(searchInfo => ({
            ...searchInfo,
            type: type
        }))

        const {page = 1, date = null, categoryCodeId = null, searchValue = null, searchField = null} = router.query

        const data = {
            page: page,
            categoryCodeId: categoryCodeId,
            searchValue: searchValue,
            searchField: searchField,
            date: date,
            showCalendar:true
        }

        dispatch(getNoticeList(data))

    }, [router.query])


    const changeCategory = useCallback((e) => {
        const {type} = router.query
        const data = {
            type: type,
            page: 1,
            categoryCodeId: e
        }
        const queryString = qs.stringify(data);
        router.push(`${router.pathname}?${queryString}`)
    }, [router.query])

    const changeType = useCallback((e) => {
        const {type = "C", page = 1, categoryCodeId = ""} = router.query
        const data = {
            type: e,
            page: page,
            categoryCodeId: categoryCodeId
        }
        const queryString = qs.stringify(data);
        router.push(`${router.pathname}?${queryString}`)
    }, [])

    const pageChange = useCallback((page) => {
        const {type = "C", categoryCodeId = ""} = router.query
        const data = {
            type: type,
            page: page,
            categoryCodeId: categoryCodeId
        }
        const queryString = qs.stringify(data);
        router.push(`${router.pathname}?${queryString}`)
    }, [router.query])


    return (
        <>
            <PageNavigation/>
            <section className={cx("container")}>
                <div className={cx("sub_container", "calendar")}>
                    <h1 className={cx("sub_top_title")}>창업행사</h1>
                    <p className={cx("sub_top_txt")}>(예비)창업자를 위한 유익한 창업지원 소식을 제공합니다.</p>
                    {searchInfo.type == "C" && (
                        <BoardSkinSelector skinName={'Calendar01'} events={notice.list} cateList={notice.cate}
                                           changeCategory={changeCategory} changeType={changeType}/>

                    )}
                    {searchInfo.type == "L" && (
                        <BoardSkinSelector skinName={'EventListType01'} list={notice.list} cateList={notice.cate}
                                           page={notice.page} pageChange={pageChange} changeCategory={changeCategory}
                                           changeType={changeType}/>
                    )}

                </div>
            </section>
        </>

    );
};

export default StartupEvent;
