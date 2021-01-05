import client from '../client';
import qs from 'qs';

export const fileDownload = (fileId) =>{
    const config = {
        headers: {
            'responseType': 'blob'
        }
    }

    return client.get(`/resource/download/${fileId}`,config);
}
