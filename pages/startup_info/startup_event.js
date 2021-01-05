import React, {useCallback, useEffect, useState} from 'react';
import Link from 'next/link';
import styles from '../../public/assets/styles/startup_info/startup_info.module.css';
import classnames from "classnames/bind"
import BoardSkinSelector from "../../component/skin/board/BoardSkinSelector";
import {useRouter} from "next/router";
import qs from 'query-string';
import {useDispatch, useSelector} from "react-redux";
import {getStartupEventList} from "../../store/startupEvent/startupEvent";
const cx = classnames.bind(styles);

const events= [
    {
        id: 0,
        title: "All Day Event very long title",
        allDay: true,
        start: new Date(2015, 3, 0),
        end: new Date(2015, 3, 1)
    },
    {
        id: 1,
        title: "Long Event",
        start: new Date(2015, 3, 7),
        end: new Date(2015, 3, 10)
    },

    {
        id: 2,
        title: "DTS STARTS",
        start: new Date(2016, 2, 13, 0, 0, 0),
        end: new Date(2016, 2, 20, 0, 0, 0)
    },

    {
        id: 3,
        title: "DTS ENDS",
        start: new Date(2016, 10, 6, 0, 0, 0),
        end: new Date(2016, 10, 13, 0, 0, 0)
    },

    {
        id: 4,
        title: "Some Event",
        start: new Date(2015, 3, 9, 0, 0, 0),
        end: new Date(2015, 3, 9, 0, 0, 0)
    },
    {
        id: 5,
        title: "Conference",
        start: new Date(2015, 3, 11),
        end: new Date(2015, 3, 13),
        desc: "Big conference for important people"
    },
    {
        id: 6,
        title: "Meeting",
        start: new Date(2015, 3, 12, 10, 30, 0, 0),
        end: new Date(2015, 3, 12, 12, 30, 0, 0),
        desc: "Pre-meeting meeting, to prepare for the meeting"
    },
    {
        id: 7,
        title: "Lunch",
        start: new Date(2015, 3, 12, 12, 0, 0, 0),
        end: new Date(2015, 3, 12, 13, 0, 0, 0),
        desc: "Power lunch"
    },
    {
        id: 8,
        title: "Meeting",
        start: new Date(2015, 3, 12, 14, 0, 0, 0),
        end: new Date(2015, 3, 12, 15, 0, 0, 0)
    },
    {
        id: 9,
        title: "Happy Hour",
        start: new Date(2015, 3, 12, 17, 0, 0, 0),
        end: new Date(2015, 3, 12, 17, 30, 0, 0),
        desc: "Most important meal of the day"
    },
    {
        id: 10,
        title: "Dinner",
        start: new Date(2015, 3, 12, 20, 0, 0, 0),
        end: new Date(2015, 3, 12, 21, 0, 0, 0)
    },
    {
        id: 11,
        title: "Birthday Party",
        start: new Date(2015, 3, 13, 7, 0, 0),
        end: new Date(2015, 3, 13, 10, 30, 0)
    },
    {
        id: 12,
        title: "Late Night Event",
        start: new Date(2015, 3, 17, 19, 30, 0),
        end: new Date(2015, 3, 18, 2, 0, 0)
    },
    {
        id: 13,
        title: "Multi-day Event 신청기간",
        start: new Date(2020, 11, 1),
        end: new Date(2020, 11, 10),
    },
    {
        id: 16,
        title: "Multi-day Event 신청기간233",
        start: new Date(2020, 11, 1),
        end: new Date(2020, 11, 5),
    },
    {
        id: 15,
        title: "Multi-day Event 신청기간22",
        start: new Date(2020, 11, 1),
        end: new Date(2020, 11, 10),
    },
    {
        id: 13,
        title: "Multi-day Event",
        start: new Date(2020, 11, 12),
        end: new Date(2020, 11, 12),
        desc: "Pre-meeting meeting, to prepare for the meeting"
    },
    {
        id: 14,
        title: "X-TECH 창업경진대회",
        start: new Date(),
        end: new Date(),
    }
];

const list = [
    {
        id: 1,
        title: "Multi-day Event 신청기간",
        start: new Date(2020, 11, 1),
        end: new Date(2020, 11, 2),
        eventDate:new Date(2020, 11, 3),
        status:"COLSE"
    },
    {
        id: 2,
        title: "X-TECH 창업경진대회",
        eventDate:new Date(2020, 11, 4),
        status:"COLSE"
    },
    {
        id: 4,
        title: "Multi-day Event 신청기간",
        start: new Date(2020, 11, 5),
        end: new Date(2020, 11, 6),
        eventDate:new Date(2020, 11, 8),
        status:"COLSE"
    },
    {
        id: 5,
        title: "X-TECH 창업경진대회",
        eventDate:new Date(2020, 11, 10),
        status:"COLSE"
    },
    {
        id: 6,
        title: "Multi-day Event 신청기간",
        eventDate:new Date(2020, 11, 11),
        status:"COLSE"
    },
    {
        id: 7,
        title: "X-TECH 창업경진대회",
        eventDate:new Date(2020, 11, 12),
        status:"COLSE"
    },
    {
        id: 8,
        title: "Multi-day Event 신청기간",
        start: new Date(2020, 11, 1),
        end: new Date(2020, 11, 10),
        eventDate:new Date(2020, 11, 12),
        status:"OPEN"
    },
    {
        id: 14,
        title: "X-TECH 창업경진대회",
        eventDate:new Date(2020, 11, 12,14,30),
        status:"OPEN"
    }
];

const StartupEvent = () => {

    const router = useRouter();
    const dispatch = useDispatch();


    const [searchInfo, setSearchInfo] = useState({
        type:"",
        categoryCodeId:"",
        page:""
    })

    const {startupEvent} = useSelector(({startupEvent,loading})=> ({
        startupEvent:startupEvent.event,
    }))

    useEffect(() =>{
        // dispatch(getStartupEventList())

    },[])

    useEffect(() => {
        // const { type = "C"} = router.query
        // const data = {
        //     page:page,
        //     boardEnName:boardEnName,
        //     categoryId:categoryId,
        //     categoryCodeId:categoryCodeId,
        //     searchValue:searchValue,
        //     searchField:searchField
        // }
        // // dispatch(getBoardContentList(data));

        const { type = "C"} = router.query
        setSearchInfo(searchInfo =>({
            ...searchInfo,
            type:type
        }))

        const { page = 1,date = null,categoryCodeId = null,searchValue = null,searchField = null} = router.query

        const data = {
            page:page,
            categoryCodeId:categoryCodeId,
            searchValue:searchValue,
            searchField:searchField,
            date:date,
        }

        dispatch(getStartupEventList(data))
    },[router.query])


    const changeCategory = useCallback((e) =>{
        const { type,page = 1} = router.query
        const data = {
            type:type,
            page:page,
            categoryCodeId:e
        }
        const queryString = qs.stringify(data);
        router.push(`${router.pathname}?${queryString}`)
    },[router.query])

    const changeType = useCallback((e) =>{
        const { type = "C",page = 1, categoryCodeId =""} = router.query
        const data = {
            type:e,
            page:page,
            categoryCodeId:categoryCodeId
        }
        const queryString = qs.stringify(data);
        router.push(`${router.pathname}?${queryString}`)
    },[])

    const pageChange = useCallback((page) =>{
        const { type = "C",categoryCodeId = ""} = router.query
        const data = {
            type:type,
            page:page,
            categoryCodeId:categoryCodeId
        }
        const queryString = qs.stringify(data);
        router.push(`${router.pathname}?${queryString}`)
    },[router.query])


    return (
        <section className={cx("container")}>
            <div className={cx("sub_container","calendar")}>
                <h1 className={cx("sub_top_title")}>창업행사</h1>
                <p className={cx("sub_top_txt")}>(예비)창업자를 위한 유익한 창업지원 소식을 제공합니다.</p>
                {searchInfo.type == "C" && (
                    <BoardSkinSelector skinName={'Calendar01'} events={startupEvent.list} cateList={startupEvent.cate} changeCategory={changeCategory} changeType={changeType}/>

                )}
                {searchInfo.type == "L" &&(
                    <BoardSkinSelector skinName={'EventListType01'} list={startupEvent.list} cateList={startupEvent.cate} page={startupEvent.page} pageChange={pageChange} changeCategory={changeCategory} changeType={changeType}/>
                )}

            </div>
        </section>

    );
};

export default StartupEvent;
