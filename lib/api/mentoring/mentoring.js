import client from '../client';
import qs from 'query-string';
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

export const getMentorCheck  = () =>{
    return client.get(`/mentoring/mentor/check`);
}

export const getMentor  = () =>{
    return client.get(`/mentoring/mentor`);
}
export const getBestMentor  = () =>{
    return client.get(`/mentoring/mentor/best`);
}

export const getMentorList  = (form) =>{
    const queryString = qs.stringify(form);
    return client.get(`/mentoring/mentor/list?${queryString}`);
}

export const applyMentor  = (form) =>{
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
    });

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    return client.post(`/mentoring/mentor/apply`,formData,config);
}

export const updateMentorProfile  = (form) =>{
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
    });

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    return client.post(`/mentoring/mentor/update`,formData,config);
}

export const applyCounsel  = (form) =>{
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
        console.log(key, value)
        if(key == 'uploadResultList'){
            formData.append('uploadResultList[]', value);

        }else if(key == 'removeFiles'){
            formData.append('removeFiles[]', value);
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
export const updateApplyCounsel  = (form) =>{
    const formData = new FormData();

    console.log(form)

    Object.entries(form).forEach(([key, value]) => {
        console.log(key, value)
        if(key == 'uploadResultList'){
            formData.append('uploadResultList[]', value);
        }else if(key == 'removeFiles'){
            formData.append('removeFiles[]', value);
        }else{
            formData.append(key, value);
        }
    });

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    return client.put(`/mentoring/counsel/apply`,formData,config);
}


export const getCounselApply  = (formId) =>{
    return client.get(`/mentoring/counsel_apply/${formId}`)
}
export const updateCounselApplyStatus  = (apply) =>{
    return client.put(`/mentoring/counsel_apply/status`,apply);
}
export const getMentorCounselApply  = (formId) =>{
    return client.get(`/mentoring/counsel_apply/mentor/${formId}`)
}

export const getCounselApplyList  = (data) =>{
    const queryString = qs.stringify(data);
    return client.get(`/mentoring/counsel/apply?${queryString}`);
}
export const getMentorCounselApplyList  = (data) =>{
    const queryString = qs.stringify(data);
    return client.get(`/mentoring/counsel_apply/mentor?${queryString}`);
}

export const addDiary  = (form) =>{
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
        }else{
            formData.append(key, value);
        }
    });
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };
    return client.post(`/mentoring/counsel_apply/diary`,formData,config);
}


export const updateDiary  = (form) =>{
    return client.put(`/mentoring/counsel_apply/diary`,form);
}

export const commissionDownload  = () =>{
    return client.get(`/mentoring/commission`);
}
