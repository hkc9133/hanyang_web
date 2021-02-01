import client from '../../client';
import qs from 'query-string';


export const getStatusCount = () =>{
    return client.get(`/admin/space_rental/status_count`);
}

export const getPlace = (placeId) =>{
    return client.get(`/admin/space_rental/place/${placeId}`);
}

export const updatePlace = (placeInfo) =>{
    const formData = new FormData();
    Object.entries(placeInfo).forEach(([key, value]) => {
        if(key == 'addAttachFileList'){
            if(value == []){
                formData.append('addAttachFileList', [])
            }else{
                Array.from(value).forEach((f) => {
                    formData.append('addAttachFileList', f)
                })
            }
        }else if(key == 'removeFiles'){
            Array.from(value).forEach((f) => {
                formData.append('removeFiles', f)
            })
        }else{
            formData.append(key, value);
        }
    });
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };
    return client.post(`/admin/space_rental/place/edit`,formData,config);
}

export const addPlace = (placeInfo) =>{
    const formData = new FormData();
    Object.entries(placeInfo).forEach(([key, value]) => {
        if(key == 'addAttachFileList'){
            if(value == []){
                formData.append('addAttachFileList', [])
            }else{
                Array.from(value).forEach((f) => {
                    formData.append('addAttachFileList', f)
                })
            }
        }else{
            formData.append(key, value);
        }
    });
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };
    return client.post(`/admin/space_rental/place`,formData,config);
}

export const deletePlace = (placeId) =>{
    return client.delete(`/admin/space_rental/place/${placeId}`);
}

export const getRoom = (roomId) =>{
    return client.get(`/admin/space_rental/room/${roomId}`);
}

export const updateRoom = (roomInfo) =>{

    const formData = new FormData();
    Object.entries(roomInfo).forEach(([key, value]) => {
        if(key == 'addAttachFileList'){
            if(value == []){
                formData.append('addAttachFileList', [])
            }else{
                Array.from(value).forEach((f) => {
                    formData.append('addAttachFileList', f)
                })
            }
        }
        else if(key == 'rentalRoomTimeList'){
            Array.from(value).forEach((f,i) => {
                formData.append(`rentalRoomTimeListStr`, JSON.stringify(f))
            })
        }
        else if(key == 'addRentalRoomTimeList'){
            Array.from(value).forEach((f,i) => {
                formData.append(`addRentalRoomTimeListStr`, JSON.stringify(f))
            })
        }
        else if(key == 'removeRentalRoomTimeList'){
            Array.from(value).forEach((f) => {
                formData.append('removeRentalRoomTimeList', f)
            })
        }
        else if(key == 'removeFiles'){
            Array.from(value).forEach((f) => {
                formData.append('removeFiles', f)
            })
        }else{
            formData.append(key, value);
        }

    });
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };

    return client.post(`/admin/space_rental/room/edit`,formData,config);
}

export const addRoom = (roomInfo) =>{

    const formData = new FormData();
    Object.entries(roomInfo).forEach(([key, value]) => {
        if(key == 'addAttachFileList'){
            if(value == []){
                formData.append('addAttachFileList', [])
            }else{
                Array.from(value).forEach((f) => {
                    formData.append('addAttachFileList', f)
                })
            }
        }
        else if(key == 'addRentalRoomTimeList'){
            Array.from(value).forEach((f,i) => {
                formData.append(`addRentalRoomTimeListStr`, JSON.stringify(f))
            })
        }
        else{
            formData.append(key, value);
        }
    });
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };

    return client.post(`/admin/space_rental/room`,formData,config);
}

export const deleteRoom = (roomId) =>{
    return client.delete(`/admin/space_rental/room/${roomId}`);
}

export const getPlaceInfoAll = (data) =>{
    return client.get(`/admin/space_rental/all`);
}


export const getRentalScheduleList  = (data) =>{
    const queryString = qs.stringify(data);
    return client.get(`/admin/space_rental/schedule?${queryString}`);
}

export const updateRentalSchedule  = (data) =>{
    return client.post(`/admin/space_rental/schedule/update/status`,data);
}
