import React, {useEffect, useState} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/ko';

const localizer = momentLocalizer(moment)

import styles from '../../../public/assets/styles/skin/calendar.module.css';
import classnames from "classnames/bind"
import Image from "next/image";

import Link from 'next/link'
import {useRouter} from "next/router";
import qs from "query-string";
import {Button, Modal} from "antd";


const cx = classnames.bind(styles);

// id: 0,
//     title: "All Day Event very long title",
//     allDay: true,
//     start: new Date(2015, 3, 0),
//     end: new Date(2015, 3, 1)

const Calendar01 = ({events,cateList,changeCategory,changeType}) => {

    const router = useRouter();

    const [eventList, setEventList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [moreEvent, setMoreEvent] = useState({
        date:null,
        events:[]
    });

    useEffect(() =>{
        if(router.query.date == null || router.query.date == undefined){
            const month = moment().format("YYYY-MM").toString()

            const { type,categoryCodeId} = router.query
            const data = {
                type:type,
                categoryCodeId:categoryCodeId,
                date:month
            }
            const queryString = qs.stringify(data);
            router.push(`${router.pathname}?${queryString}`)
        }

    },[])
    useEffect(() =>{
        let result = [];
        const a = events.map((item)=>{
            return [{id:item.noticeId,title:item.title+" 신청기간",start:item.applyStartDate,end:item.applyEndDate},{id:item.noticeId,title:item.title,start:item.eventDate,end:item.eventDate}]
        })
        a.forEach((item) =>{
            item.forEach((event) =>{
                result.push(event)
            })
        })
        setEventList(result)
    },[events])

    const changeMonth = (date) =>{
        const month = moment(date).format("YYYY-MM").toString()

        const { type,categoryCodeId} = router.query
        const data = {
            type:type,
            categoryCodeId:categoryCodeId,
            date:month
        }
        const queryString = qs.stringify(data);
        router.push(`${router.pathname}?${queryString}`)

    }


    let MyCustomHeader = ({label}) => (
        <div>
            <div className={cx("header")}>{label}</div>
        </div>
    )

    const CustomEvent = (event) => {
        return (
            <ul>
                <li>
                    <a className={cx("event_title")}>{event.title}</a>
                </li>
            </ul>
        )
    }

    const YourCalendarDateHeader = ({label}) => {
        return (
            <p className={cx("date")}>{label}</p>
        )
    }

    const CustomToolbar = (toolbar) => {

        const goToBack = () => {

            toolbar.onNavigate('PREV');
        };

        const goToNext = () => {

            toolbar.onNavigate('NEXT');
        };

        const goToCurrent = () => {
            const now = new Date();
            toolbar.date.setMonth(now.getMonth());
            toolbar.date.setYear(now.getFullYear());
            toolbar.onNavigate('current');
        };

        const label = () => {
            const date = moment(toolbar.date);
            return (
                <span><b>{date.format('YYYY.MM')}</b></span>
            );
        };

        return (
            <div className={cx("calendar_top")}>
                <div className={cx("calendar_year")}>
                    <button type="button" onClick={goToBack}><Image src="/assets/image/calendar_prev.png" width={16} height={28} alt="photo_btn"/></button>
                    {label()}
                    <button type="button" onClick={goToNext}><Image src="/assets/image/calendar_next.png" width={16} height={28} alt="photo_btn"/></button>
                </div>

                <ul className={cx("category")}>
                    <li><a href="#" onClick={() =>{changeCategory("")}} className={cx({on:router.query.categoryCodeId == null  || router.query.categoryCodeId == ""})}>전체</a></li>
                    {cateList.map((item) =>(
                        <li key={item.categoryCodeId}><a href="#" className={cx({on:router.query.categoryCodeId == item.categoryCodeId})} onClick={() =>{changeCategory(item.categoryCodeId)}}>{item.categoryCodeName}</a></li>
                    ))}
                </ul>

                <ul className={cx("type","clfx")}>
                    <li className={cx("on")}>
                        <button type="button" className={cx("icon_calendar_type")} onClick={() =>{changeType("C")}}>달력형</button>
                    </li>
                    <li>
                        <button type="button" className={cx("icon_list_type")}  onClick={() =>{changeType("L")}}>목록형</button>
                    </li>
                </ul>
            </div>
        );
    };

    return (
        <div className={cx("calendar_type")}>
            <Calendar
                localizer={localizer}
                events={eventList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 850 }}
                onNavigate={changeMonth}
                popup={true}
                canRenderSlotEvent={2}
                onShowMore={(events, date) => {setShowModal(true);setMoreEvent({...moreEvent,date:date, events:events});}}
                components={{
                    month: { header: MyCustomHeader,dateHeader:YourCalendarDateHeader },
                    event: CustomEvent,
                    toolbar: CustomToolbar,
                }}
            />

            <Modal title={moment(moreEvent.date).format("YYYY년 MM월 DD일")} visible={showModal}
                   onCancel={() =>{setShowModal(false)}}
                   footer={[
                       <Button key="back" onClick={() =>{setShowModal(false)}}>
                           확인
                       </Button>,
                   ]}
            >
                {
                    moreEvent.events.map((event) =>
                        <div key={event.id}>{event.title}</div>
                    )
                }
            </Modal>
        </div>
    );
};

export default React.memo(Calendar01);
