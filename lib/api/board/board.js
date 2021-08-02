import client from '../client';
import qs from 'query-string';

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
        if(key == 'files'){
            if(value == []){
                formData.append('files', [])
            }else{
                Array.from(value).forEach((f) => {
                    formData.append('files', f)
                })
            }
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
export const deleteBoardContent = (contentId) =>{
    return client.delete(`/board/content/delete/${contentId}`);
}

export const updateBoardContent = (contentInfo) =>{
    const formData = new FormData();
    Object.entries(contentInfo).forEach(([key, value]) => {
        if(key == 'files'){
            if(value == []){
                formData.append('files', [])
            }else{
                Array.from(value).forEach((f) => {
                    formData.append('files', f)
                })
            }
        }else if(key == 'thumb'){
            if(value == []){
                formData.append('thumb', [])
            }else{
                Array.from(value).forEach((f) => {
                    formData.append('thumb', f)
                })
            }
        }else if(key == 'removeFiles'){
            Array.from(value).forEach((f) => {
                formData.append('removeFiles', f)
            })
        }else if(key == 'isNotice'){
            formData.append('isNotice', value ? 1 : 0)
        }else{
            formData.append(key, value);
        }
    });
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };
    return client.post(`/board/content/edit`,formData,config);
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
