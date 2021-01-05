import client from '../client';
import qs from 'qs';
export const getCounselFieldCode  = () =>{
    return client.get(`/mentoring/counsel_field_code`);
}
export const getProgressItem  = () =>{
    return client.get(`/mentoring/progress_item`);
}
export const getSortationItem  = () =>{
    return client.get(`/mentoring/sortation_item`);
}
export const getWayItem  = () =>{
    return client.get(`/mentoring/way_item`);
}

export const getMentor  = () =>{
    return client.get(`/mentoring/mentor`);
}

export const getMentorList  = () =>{
    return client.get(`/mentoring/mentor/list`);
}

export const applyMentor  = (form) =>{
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
        console.log(key, value)
        formData.append(key, value);
    });

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    return client.post(`/mentoring/mentor/apply`,formData,config);
}

export const applyCounsel  = (form) =>{
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
        console.log(key, value)
        if(key == 'uploadResultList'){
            formData.append('uploadResultList[]', value);

        }else{
            formData.append(key, value);
        }
    });

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    return client.post(`/mentoring/counsel/apply`,formData,config);
}

export const getCounselApplyList  = (data) =>{
    const queryString = qs.stringify(data);
    return client.get(`/mentoring/counsel/apply?${queryString}`);
}
