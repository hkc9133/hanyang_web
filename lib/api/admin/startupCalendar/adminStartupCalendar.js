import client from '../../client';
import qs from 'query-string';

export const getStartupCalendarList = (data) =>{
    const queryString = qs.stringify(data);
    return client.get(`/admin/startup_calendar/list?${queryString}`);
}


export const getStartupCalendar = (startupCalendarId) =>{
    return client.get(`/admin/startup_calendar/${startupCalendarId}`);
}


export const addStartupCalendar = (form) =>{
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
        if(key == 'files'){
            if(value == []){
                formData.append('files', [])
            }else{
                Array.from(value).forEach((f) => {
                    formData.append('files', f)
                })
            }
        }else if(key == 'isNotice'){
            formData.append('isNotice', value ? 1 : 0)
        }else{
            formData.append(key, value);
        }
    });
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };
    return client.post(`/admin/startup_calendar/content`,formData,config);
}

export const updateStartupCalendar = (form) =>{
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
        if(key == 'files'){
            if(value == []){
                formData.append('files', [])
            }else{
                Array.from(value).forEach((f) => {
                    formData.append('files', f)
                })
            }
        }else if(key == 'removeFiles'){
            Array.from(value).forEach((f) => {
                formData.append('removeFiles', f)
            })
        }else if(key == 'isStartupCalendar'){
            formData.append('isStartupCalendar', value ? 1 : 0)
        }else{
            formData.append(key, value);
        }
    });
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };
    return client.post(`/admin/startup_calendar/content/edit`,formData,config);
}

export const deleteStartupCalendar = (startupCalendarId) =>{
    return client.delete(`/admin/startup_calendar/content/delete/${startupCalendarId}`);
}


export const getStartupCalendarCategoryCodeList = () =>{
    return client.get(`/admin/startup_calendar/cate`);
}

