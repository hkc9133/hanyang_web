import client from '../client';
import qs from 'qs';

export const getBoard = (boardName) =>{
    return client.get(`/board/${boardName}`);
}

export const getBoardContentList = (data) =>{
    const queryString = qs.stringify(data);
    return client.get(`/board/content?${queryString}`);
}

export const getBoardContent = (contentId) =>{
    return client.get(`/board/content/${contentId}`);
}
export const addBoardContent = (contentInfo) =>{

    const formData = new FormData();

    Object.entries(contentInfo).forEach(([key, value]) => {
        console.log(key, value)
        if(key == 'files'){
            formData.append('files',value)
            Array.from(value).forEach((f) => {
                formData.append('files', f)
            })
        }else{
            formData.append(key, value);
        }
    });

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };

    return client.post(`/board/content`,formData,config);
}

export const addReply = (reply) =>{
    return client.post(`/board/reply`,reply);
}

export const updateReply = (reply) =>{
    return client.put(`/board/reply`,reply);
}
export const deleteReply = (reply) =>{
    return client.post(`/board/reply/delete`,reply);
}
