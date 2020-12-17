import React, {useEffect, useState} from 'react';
import {eventChannel, END} from 'redux-saga';
import wrapper from '../../store/configureStore';
import {useSelector,useDispatch} from "react-redux";
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styles from '../../public/assets/styles/rental/rental.module.css';
import classnames from "classnames/bind"
import {
    addRentalSchedule,
    getAvailableRoomTimeList,
    getSpaceRentalInfoAll,
    initialize
} from "../../store/spaceRental/spaceRental";
import RentalApply from "../../component/rental/RentalApply";


const cx = classnames.bind(styles);

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
    store.dispatch(getSpaceRentalInfoAll());
    store.dispatch(END);
    await store.sagaTask.toPromise();
})

const Rental = () => {

    const dispatch = useDispatch();
    const [space, setSpace] = useState({
        place: null,
        room: null,
        time:null,
    })

    const [selectPlace, setSelectPlace] = useState(null);
    const [selectRoom, setSelectRoom] = useState(null);
    const [selectDate, setSelectDate] = useState(new Date());
    const [selectTime, setSelectTime] = useState({
        time:null,
        timeId:null
    });
    const [personCount, setPersonCount] = useState(null);
    const [purpose, setPurpose] = useState(null);

    const [applyActive, setApplyActive] = useState(false);


    const {spaceInfo,addSchedule, spaceInfoLoading,timeListLoading,addScheduleLoading} = useSelector(({spaceRental, loading}) => ({
        spaceInfo: spaceRental.spaceInfo,
        addSchedule: spaceRental.addSchedule,
        spaceInfoLoading: loading['spaceRental/GET_SPACE_RENTAL_INFO_ALL'],
        timeListLoading: loading['spaceRental/GET_AVAILABLE_ROOM_TIME_LIST'],
        addScheduleLoading: loading['spaceRental/ADD_RENTAL_SCHEDULE']
    }))


    useEffect(() => {
        // dispatch(getSpaceRentalInfoAll());

        return () => {
            dispatch(initialize());
        }

    },[])

    useEffect(() => {
        if(selectPlace != null && selectRoom != null && selectDate != null && selectTime.timeId != null){
            setApplyActive(true);
        }else{
            setApplyActive(false);
        }
    },[selectPlace,selectRoom,selectDate,selectTime])


    useEffect(() => {
        if (!spaceInfoLoading) {
            setSpace({
                ...space,
                place: spaceInfo.place,
                time: spaceInfo.time
            })
        }
    }, [spaceInfo, spaceInfoLoading])

    const handleSelectPlace = (place) => {
        setSpace({
            ...space,
            room: spaceInfo.room.filter(room => room.placeId == place.placeId),
            time:null
        })
        setSelectPlace(place);
        setSelectRoom(null);
        setSelectTime({
            time:null,
            endTime:null,
            timeId:null
        })
    }

    const handleSelectRoom = (room) => {
        setSelectRoom(room);
        setSelectTime({
            time:null,
            endTime:null,
            timeId:null
        })
        setSpace({
            ...space,
            time: null
        })
        const today = moment().format("YYYY-MM-DD").toString()
        dispatch(getAvailableRoomTimeList(room.roomId,today));
    }

    const handleDateChange = (date) => {
        setSelectDate(date)
        // setSelectTime({
        //     time:null,
        //     endTime:null,
        //     timeId:null
        // })


        const changeDate = moment(date).format("YYYY-MM-DD").toString();
        dispatch(getAvailableRoomTimeList(selectRoom.roomId, changeDate));

    }

    const handleTimeChange = (time) => {

        setSelectTime({
            time:moment(time.time,"hh:mm:ss").format("H:mm").toString(),
            endTime:moment(time.time,"hh:mm:ss").add(time.rentalTime, 'hours').format("H:mm").toString(),
            timeId:time.timeId
        })

    }

    const handleRentalApply = () => {
        const data = {
            roomId:selectRoom.roomId,
            rentalDate:moment(selectDate).format("YYYY-MM-DD").toString(),
            rentalStartTime:selectTime.time,
            rentalEndTime:selectTime.endTime,
            personCount:personCount,
            purpose:purpose

        }
        dispatch(addRentalSchedule(data));
    }
    useEffect(() => {
        if(!addScheduleLoading && addSchedule.result && addSchedule.error == null){
            alert("신청 완료")
            setSpace({
                ...space,
                room:null,
                time:null,
            })
            setSelectPlace(null)
            setSelectRoom(null)
            setSelectDate(new Date());
            setSelectTime({
                time:null,
                timeId:null
            })
            dispatch(getSpaceRentalInfoAll());
        }else if(!addScheduleLoading && !addSchedule.result && addSchedule.code == 409){
            alert("중복된 일정입니다")
            const today = moment().format("YYYY-MM-DD").toString()
            dispatch(getAvailableRoomTimeList(selectRoom.roomId,today));
        }

    },[addSchedule,addScheduleLoading])

    const isWeekday = date => {
        let isActive;
        const day = moment(date).day();
        const possibleDay = selectRoom.possibleDay.split(";");
        isActive = possibleDay.some(item =>{
            if(day === parseInt(item)){
                return day === parseInt(item);
            }
        })
        if(!selectRoom.holidayAvailable){
            isActive = day !== 0 && day !== 6;
        }
        return isActive;
    };

    return (
        <div className={cx("container")}>
            <div className={cx("box")}>
                <div className={cx("box_inner")}>
                    <ul>
                        {space.place != null && space.place.map((place) =>
                            <li key={place.placeId}>
                                <button onClick={() => {
                                    handleSelectPlace(place)
                                }}>{place.placeName}</button>
                            </li>
                        )}
                    </ul>
                </div>
                <div className={cx("box_inner")}>
                    <ul>
                        {space.room != null && space.room.map((room) =>
                            <li key={room.roomId}>
                                <button onClick={() => {
                                    handleSelectRoom(room)
                                }}>{room.roomName}</button>
                            </li>
                        )}
                        {selectPlace != null && space.room != null && space.room.length == 0 && <span>예약 가능한 공간이없습니</span>}
                    </ul>
                </div>
                <div className={cx("box_inner","date_picker")}>
                    {selectRoom != null && (
                        <DatePicker
                            locale="ko"
                            minDate={new Date()}
                            popperModifiers={{preventOverflow: {enabled: true,},}}
                            dayClassName={date => moment(date).day() === 0 ? "saturday" : moment(date).day() === 6 ? "sunday" : undefined}
                            filterDate={isWeekday}
                            selected={selectDate}
                            onChange={date => handleDateChange(date)}
                            onMonthChange={date => handleDateChange(date)}
                            inline
                            disabledKeyboardNavigation
                        />
                    )}
                </div>
                <div className={cx("box_inner")}>
                    <ul>
                        {space.time != null && space.time.map((time) =>
                            <li key={time.timeId}>
                                {/*<button>{time.time}</button>*/}
                                <button className={cx(!time.duplicate && time.timeId == selectTime.timeId ? "selected" : !time.duplicate ?'active': "disable")} disabled={time.duplicate} onClick={() => {handleTimeChange(time)}}>
                                    {moment(time.time,"hh:mm:ss").format("H:mm").toString()}
                                    ~
                                    {moment(time.time,"hh:mm:ss").add(time.rentalTime, 'hours').format("H:mm").toString()}
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <RentalApply selectPlace={selectPlace} selectRoom={selectRoom} selectDate={selectDate} selectTime={selectTime} applyActive={applyActive} cx={cx} handleRentalApply={handleRentalApply}/>
        </div>
    );
};
//
// Rental.getServerSideProps = wrapper.getServerSideProps(
//     async ({store, preview}) => {
//
//         store.dispatch(getSpaceRentalInfoAll());
//         // store.dispatch(END);
//         // await store.sagaTask.toPromise();
//     }
// );


export default Rental;
