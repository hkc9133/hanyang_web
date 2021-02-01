import client from '../../client';
import qs from 'query-string';

export const getPopup = (popupId) =>{
    return client.get(`/admin/popup/${popupId}`);
}

export const getPopupList = (popupInfo) =>{
    const queryString = qs.stringify(popupInfo);
    return client.get(`/admin/popup/list?${queryString}`);
}

export const updatePopup = (popupInfo) =>{
    return client.post(`/admin/popup/edit`,popupInfo);
}

export const addPopup = (popupInfo) =>{
    return client.post(`/admin/popup`,popupInfo);
}

export const deletePopup = (popupId) =>{
    return client.delete(`/admin/popup/${popupId}`);
}
