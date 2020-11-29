import client from '../client';

export const getCompanyList = () =>{
    return client.get('/company/list');
}

export const createCompany = (companyName) =>{
    return client.post('/company/create',companyName);
}

export const joinCompany =  (joinCode) =>{
    return client.post(`/company/join`,joinCode);
}

export const selectCompany =  (id) =>{
    return client.get(`/company/selectCompany?companyId=${id}`);
}


export const uploadProfileImage =  (fileInfo) =>{
    let formData = new FormData();
    const data = {
        name:fileInfo.filename,
        type: fileInfo.mime,
        uri: fileInfo.path }

    formData.append("file", data);

    return client.post(`/company/uploadProfileImage`,formData,{ headers: { "content-type": "multipart/form-data" } });
}
