import client from '../client';
import qs from 'query-string';

export const getNoticeList = (data) =>{
    const queryString = qs.stringify(data);
    return client.get(`/notice/list?${queryString}`);
}


export const getNotice = (noticeId) =>{
    return client.get(`/notice/${noticeId}`);
}
