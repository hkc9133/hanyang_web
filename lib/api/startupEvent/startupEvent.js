import client from '../client';
import qs from 'qs';

export const getStartupEventList = (data) =>{
    const queryString = qs.stringify(data);
    return client.get(`/startup_event/list?${queryString}`);
}
