import {createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import client from '../../lib/api/client';
import {takeLatest} from 'redux-saga/effects';
import * as fileAPI from '../../lib/api/file/file';

const FILE_DOWNLOAD = 'file/FILE_DOWNLOAD';

// const [FILE_DOWNLOAD,FILE_DOWNLOAD_SUCCESS, FILE_DOWNLOAD_FAILURE] = createRequestActionTypes('file/FILE_DOWNLOAD')

// export const fileDownload = createAction(FILE_DOWNLOAD,fileId =>fileId);
export const fileDownload = createAction(FILE_DOWNLOAD);

// const fileDownloadSaga = createRequestSaga(FILE_DOWNLOAD);


export function* fileSaga(){

    // yield takeLatest(FILE_DOWNLOAD, fileDownloadSaga);

}

const initialState = {
};

const file = handleActions(
    {

        [FILE_DOWNLOAD]: (state, {payload: fileId}) =>
            produce(state, draft => {
                // console.log(res)
                // const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement('a');
                // const contentDisposition = res.headers['content-disposition']; // 파일 이름
                // let fileName = 'unknown.png';
                // if (contentDisposition) {
                //     const [ fileNameMatch ] = contentDisposition.split(';').filter(str => str.includes('filename'));
                //     if (fileNameMatch)
                //         [ , fileName ] = fileNameMatch.split('=');
                // }
                link.href = `${client.defaults.baseURL}/resource/download/${fileId}`;
                // link.setAttribute('download', `${fileName}`);
                // link.style.cssText = 'display:none';
                // document.body.appendChild(link);
                link.click();
                link.remove();
            }),

    }
    ,
    initialState
);
export default file;

