import client from '../client';

export const fileDownload = (fileId) =>{
    const config = {
        headers: {
            'responseType': 'blob'
        }
    }

    return client.get(`/resource/download/${fileId}`,config);
}
