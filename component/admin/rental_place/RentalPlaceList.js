import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {getUserRole, getUserType} from "../../common/util/StatusUtil";
import moment from "moment";
import { EditOutlined, PlusCircleOutlined } from '@ant-design/icons';


const RentalPlaceItem = ({place}) => {

    const getTotalCnt = (place) => {
        let roomCnt = 0;
        let timeCnt = 0;
        place.rentalRoomList.forEach(room => {
            roomCnt += 1
            timeCnt += room.rentalRoomTimeList.length == 0 ? 1 : room.rentalRoomTimeList.length
        })
        return timeCnt >= roomCnt ? timeCnt : roomCnt;
    }

    const getDay = (dayStr) =>{
        if(dayStr == null){
            return
        }
        dayStr = dayStr.replace(/;/g, ' ');
        dayStr = dayStr.replace(/0/g, '일');
        dayStr = dayStr.replace(/1/g, '월');
        dayStr = dayStr.replace(/2/g, '화');
        dayStr = dayStr.replace(/3/g, '수');
        dayStr = dayStr.replace(/4/g, '목');
        dayStr = dayStr.replace(/5/g, '금');
        dayStr = dayStr.replace(/6/g, '토');

        return dayStr;


    }

    return (
        <>
            <tr>
                <td rowSpan={getTotalCnt(place) + 1}><Link
                    href={`/admin/rental_place/manage/edit/place/${place.placeId}`}><a>{place.placeName}&nbsp;<EditOutlined/></a></Link></td>
                <td rowSpan={getTotalCnt(place) + 1}>{place.isActive ? "사용중" : "미사용"}</td>
            </tr>
            {place.rentalRoomList.map((room, index) => (
                room.rentalRoomTimeList.length == 0 ?
                    (<tr key={room.roomId}>
                            <td>
                                {room.roomId != null ? <Link href={`/admin/rental_place/manage/edit/room/${room.roomId}`}>
                                        <a>{room.roomName}&nbsp;<EditOutlined/></a>
                                    </Link>
                                    :
                                    "-"
                                }
                            </td>
                            <td>{getDay(room.possibleDay)}</td>
                            <td>{room.isHoliday ? "예약 가능" : "예약 불가"}</td>
                            <td>-</td>
                            <td>{room.capacity}</td>
                            <td>{room.isActive ? "사용중" : "미사용"}</td>
                            <td><Link href={`/admin/rental_place/manage/add/${place.placeId}/room`}><a>장소추가&nbsp;<PlusCircleOutlined/></a></Link></td>
                            {/*<td>버튼</td>*/}
                            {/*<td>버튼2</td>*/}
                        </tr>
                    )
                    : room.rentalRoomTimeList.map((time, timeIndex) => (
                        timeIndex == 0 ? (
                            <>
                                <tr key={time.timeId}>
                                    <td rowSpan={room.rentalRoomTimeList.length}>
                                        {room.roomId != null ? <Link href={`/admin/rental_place/manage/edit/room/${room.roomId}`}>
                                            <a>{room.roomName}&nbsp;<EditOutlined/></a>
                                        </Link>
                                        :
                                            "-"
                                        }
                                    </td>
                                    <td rowSpan={room.rentalRoomTimeList.length}>{getDay(room.possibleDay)}</td>
                                    <td rowSpan={room.rentalRoomTimeList.length}>{room.isHoliday ? "예약 가능" : "예약 불가"}</td>
                                    <td>
                                        {time.timeId != null ?
                                            `${moment(time.startTime, "HH:mm:ss").format("HH:mm").toString()} ~
                                        ${moment(time.endTime, "HH:mm:ss").format("HH:mm").toString()}
                                        `
                                            : "-"}
                                    </td>
                                    <td rowSpan={room.rentalRoomTimeList.length}>{room.capacity}</td>
                                    <td rowSpan={room.rentalRoomTimeList.length}>{room.isActive ? "사용중" : "미사용"}</td>
                                    {index == 0 && (
                                        <td rowSpan={getTotalCnt(place)}><Link
                                            href={`/admin/rental_place/manage/add/${place.placeId}/room`}><a>장소추가&nbsp;<PlusCircleOutlined/></a></Link></td>
                                    )}
                                </tr>
                                {/*<tr>
                                    <td rowSpan={room.rentalRoomTimeList.length}>버튼</td>
                                </tr>*/}
                            </>
                        ) : (
                            <>
                                <tr key={time.timeId}>
                                    <td>
                                        {moment(time.startTime, "HH:mm:ss").format("HH:mm").toString()} ~
                                        {moment(time.endTime, "HH:mm:ss").format("HH:mm").toString()}
                                    </td>
                                </tr>
                            </>
                        )
                    ))
            ))}

        </>
    )


}
const RentalPlaceList = ({all, cx}) => {
    return (
        <table>
            <colgroup>
                <col style={{width: "8.6%"}}/>
                <col style={{width: "15.5%"}}/>
                <col style={{width: "14.6%"}}/>
                {/*<col style={{width:"13.7%"}}/>*/}
                <col style={{width: "13.6%"}}/>
                <col style={{width: "17.2%"}}/>
                <col/>
                <col/>
                <col/>
            </colgroup>
            <thead>
            <tr>
                <th scope="col">구분</th>
                <th scope="col">구분 사용 여부</th>
                <th scope="col">장소</th>
                <th scope="col">예약 가능 요일</th>
                <th scope="col">공휴일 예약 허용</th>
                <th scope="col">시간 정보</th>
                <th scope="col">인원</th>
                <th scope="col">사용 여부</th>
                <th scope="col">장소 관리</th>
            </tr>
            </thead>
            <tbody>
            {all.map((place) =>
                (<RentalPlaceItem key={place.placeName} place={place}/>)
            )}
            </tbody>
        </table>
    );
};

export default RentalPlaceList;
