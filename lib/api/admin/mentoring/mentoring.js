import client from '../../client';
import qs from 'query-string';

export const getCounselFieldCode  = () =>{
    return client.get(`/admin/mentoring/counsel_field_code`);
}

export const getMentor  = (mentorId) =>{
    return client.get(`/admin/mentoring/mentor/${mentorId}`);
}

export const updateMentor  = (mentor) =>{
    return client.put(`/admin/mentoring/mentor`,mentor);
}

export const getMentorList  = (form) =>{
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
    });

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    return client.post("/admin/mentoring/mentor",formData,config)
}

export const getCounselApply  = (formId) =>{

    return client.get(`/admin/mentoring/counsel_apply/${formId}`)
}

export const updateCounselApply  = (apply) =>{
    return client.put(`/admin/mentoring/counsel_apply`,apply);
}

export const getCounselApplyList  = (form) =>{
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
    });

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    return client.post("/admin/mentoring/counsel_apply",formData,config)
}

