import React from 'react';
import moment from "moment";

const RentalApply = ({cx,selectPlace, selectRoom, selectDate,selectTime,applyActive, handleRentalApply}) => {
    return (
        <div className={cx("apply_result_box")}>
            <p>{selectPlace != null && selectPlace.placeName}</p>
            <p>{selectRoom != null && selectRoom.roomName}</p>
            <p>{selectRoom != null && selectDate != null && moment(selectDate).format("YYYY-MM-DD").toString()}</p>
            <p>{selectTime.timeId != null && `${selectTime.time} ~ ${selectTime.endTime}`}</p>
            <button disabled={!applyActive} onClick={() => {handleRentalApply();}}>공간 예약 신청</button>
        </div>
    );
};

export default RentalApply;
