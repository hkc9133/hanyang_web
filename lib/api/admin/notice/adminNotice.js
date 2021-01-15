import client from '../../client';
import qs from 'query-string';

export const getNoticeList = (data) =>{
    const queryString = qs.stringify(data);
    return client.get(`/admin/notice/list?${queryString}`);
}


export const getNotice = (noticeId) =>{
    return client.get(`/admin/notice/${noticeId}`);
}


export const addNotice = (form) =>{
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
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
    return client.post(`/admin/notice/content`,formData,config);
}

export const updateNotice = (form) =>{
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
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
    return client.post(`/admin/notice/content/edit`,formData,config);
}

export const getNoticeCategoryCodeList = () =>{
    return client.get(`/admin/notice/cate`);
}

