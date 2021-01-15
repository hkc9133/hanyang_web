import client from '../client';
import qs from 'query-string';
export const getUserList = (data) =>{
    const queryString = qs.stringify(data);
    return client.get(`/admin/user?${queryString}`);
}

export const getUser = (userId) =>{
    return client.get(`/admin/user/${userId}`);
}

export const updateUser = (user) =>{
    return client.put(`/admin/user`,user);
}
