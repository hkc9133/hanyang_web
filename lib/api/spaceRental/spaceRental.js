import client from '../client';


export const getSpaceRentalInfoAll  = () =>{
    console.log("렌탈 요청")
    return client.get('/space_rental');
}

export const getAvailableRoomTimeList  = ({roomId,date}) =>{
    console.log(roomId,date)
    return client.get(`/space_rental/place/room/${roomId}/time/?date=${date}&type=available`);
}


export const addRentalSchedule  = (scheduleInfo) =>{
    return client.post(`/space_rental/schedule/apply`,scheduleInfo);
}
