import client from '../../client';
import qs from 'query-string';

export const getStartupPresent = (startupPresentId) =>{
    return client.get(`/admin/startup_present/${startupPresentId}`);
}

export const getStartupPresentList = (startupPresentInfo) =>{
    const queryString = qs.stringify(startupPresentInfo);
    return client.get(`/admin/startup_present/list?${queryString}`);
}

export const updateStartupPresent = (startupPresentInfo) =>{
    return client.post(`/admin/startup_present/edit`,startupPresentInfo);
}

export const addStartupPresent = (startupPresentInfo) =>{
    return client.post(`/admin/startup_present`,startupPresentInfo);
}

export const deleteStartupPresent = (startupPresentId) =>{
    return client.delete(`/admin/startup_present/${startupPresentId}`);
}
