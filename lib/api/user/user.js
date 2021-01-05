import client from '../client';
import qs from 'qs';
export const getUserList = (data) =>{
    const queryString = qs.stringify(data);
    return client.get(`/admin/user?${queryString}`);
}
