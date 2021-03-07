import client from '../client';
import qs from "query-string";

export const getMainData = () =>
    client.get('/main/data');


export const getBoardSearchList = (data) =>{
    const queryString = qs.stringify(data);
    return client.get(`/board/search?${queryString}`);
}

export const getMediaList = () =>
    client.get('/main/media');
