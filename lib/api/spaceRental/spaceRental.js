import client from '../client';
import qs from "query-string";


export const getSpaceRentalInfoAll  = () =>{
    return client.get('/space_rental');
}

export const getAvailableRoomTimeList  = ({roomId,date}) =>{
    return client.get(`/space_rental/place/room/${roomId}/time/?date=${date}&type=available`);
}

export const addRentalSchedule  = (scheduleInfo) =>{
    return client.post(`/space_rental/schedule/apply`,scheduleInfo);
}

export const getRentalScheduleList  = (data) =>{
    const queryString = qs.stringify(data);
    return client.get(`/space_rental/schedule/apply?${queryString}`);
}

export const getRentalSchedule = (scheduleId) =>{
    return client.get(`/space_rental/schedule/apply/${scheduleId}`);
}

export const updateRentalSchedule = (schedule) =>{
    return client.post(`/space_rental/schedule/apply/update`,schedule);
}
