import client from '../../client';
import qs from 'query-string';
export const getBoardList = (data) =>{
    const queryString = qs.stringify(data);
    return client.get(`/admin/board?${queryString}`);
}

export const getBoard = (boardName) =>{
    return client.get(`/admin/board/${boardName}`);
}

export const getBoardInfoAll = () =>{
    return client.get(`/admin/board/board_info`);
}
export const updateBoard = (board) =>{
    return client.put(`/admin/board/${board.boardEnName}`,board);
}
export const getBoardContentList = (data) =>{
    const queryString = qs.stringify(data);
    return client.get(`/admin/board/content?${queryString}`);
}

export const getBoardContent = (contentId) =>{
    return client.get(`/admin/board/content/${contentId}`);
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
    return client.post(`/admin/board/content`,formData,config);
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
    return client.post(`/admin/board/content/edit`,formData,config);
}

export const deleteBoardContent = (contentId) =>{
    return client.delete(`/admin/board/content/delete/${contentId}`);
}

export const addReply = (reply) =>{
    return client.post(`/admin/board/reply`,reply);
}

export const updateReply = (reply) =>{
    return client.put(`/admin/board/reply`,reply);
}
export const deleteReply = (reply) =>{
    return client.post(`/admin/board/reply/delete`,reply);
}
