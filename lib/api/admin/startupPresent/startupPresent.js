import client from '../../client';
import qs from 'query-string';

export const getFieldList = () =>{
    return client.get(`/admin/startup_present/field`);
}


export const getStartupPresent = (startupId) =>{
    return client.get(`/admin/startup_present/${startupId}`);
}

export const getStartupPresentList = (startupPresentInfo) =>{
    return client.post(`/admin/startup_present/list`,startupPresentInfo);
}

export const updateStartupPresent = (form) =>{
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
        if(value != null){
            formData.append(key, value);
        }
        console.log(key,value)
    });

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    return client.post(`/admin/startup_present/edit`,formData,config);
}

export const addStartupPresent = (form) =>{
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
    });

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    return client.post(`/admin/startup_present`,formData,config);
}

export const deleteStartupPresent = (startupPresentId) =>{
    return client.delete(`/admin/startup_present/${startupPresentId}`);
}
