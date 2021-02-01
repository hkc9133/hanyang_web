import {createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import * as popupAPI from "../../lib/api/popup/popup";


const [GET_POPUP_LIST,GET_POPUP_LIST_SUCCESS, GET_POPUP_LIST_FAILURE] = createRequestActionTypes('popup/GET_POPUP_LIST')
const INITIALIZE = 'popup/INITIALIZE';


export const initialize = createAction(INITIALIZE);

export const getPopupList = createAction(GET_POPUP_LIST);

const getPopupListSaga = createRequestSaga(GET_POPUP_LIST, popupAPI.getPopupList);

export function* popupSaga(){

    yield takeLatest(GET_POPUP_LIST, getPopupListSaga);

}

const initialState = {
    getPopupList:{
        list:null,
    },

};

const popup = handleActions(
    {
        [GET_POPUP_LIST_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.getPopupList.list = response.data.list
            }),
        [GET_POPUP_LIST_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.getPopupList.list = []
            }),
        [INITIALIZE]: (state, {payload: form}) => ({
            ...initialState
        }),
    }
    ,
    initialState
);
export default popup;
