import client from '../client';
import qs from 'query-string';


export const getPopupList = () =>{
    return client.get(`/popup/list`);
}
