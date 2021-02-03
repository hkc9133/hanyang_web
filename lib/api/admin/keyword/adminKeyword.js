import client from '../../client';
import qs from 'query-string';

export const getKeyword = (keywordId) =>{
    return client.get(`/admin/keyword/${keywordId}`);
}

export const getKeywordList = (keywordInfo) =>{
    const queryString = qs.stringify(keywordInfo);
    return client.get(`/admin/keyword/list?${queryString}`);
}

export const updateKeyword = (keywordInfo) =>{
    return client.post(`/admin/keyword/edit`,keywordInfo);
}

export const addKeyword = (keywordInfo) =>{
    return client.post(`/admin/keyword`,keywordInfo);
}

export const deleteKeyword = (keywordId) =>{
    return client.delete(`/admin/keyword/${keywordId}`);
}
