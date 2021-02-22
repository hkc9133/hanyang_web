import client from '../../client';
import qs from 'query-string';

export const getContinentList = () =>{
    return client.get(`/admin/partner/continent`);
}


export const getPartner = (partnerId) =>{
    return client.get(`/admin/partner/${partnerId}`);
}

export const getPartnerList = (partnerInfo) =>{
    return client.post(`/admin/partner/list`,partnerInfo);
}

export const updatePartner = (form) =>{
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
        if(value != null){
            formData.append(key, value);
        }
    });

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    return client.post(`/admin/partner/edit`,formData,config);
}

export const addPartner = (form) =>{
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
    });

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    return client.post(`/admin/partner`,formData,config);
}

export const deletePartner = (partnerId) =>{
    return client.delete(`/admin/partner/${partnerId}`);
}
