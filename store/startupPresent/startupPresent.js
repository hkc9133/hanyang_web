import {createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import * as startupPresentAPI from "../../lib/api/startupPresent/startupPresent";


const [GET_STARTUP_PRESENT,GET_STARTUP_PRESENT_SUCCESS, GET_STARTUP_PRESENT_FAILURE] = createRequestActionTypes('startupPresent/GET_STARTUP_PRESENT')
const [GET_STARTUP_PRESENT_LIST,GET_STARTUP_PRESENT_LIST_SUCCESS, GET_STARTUP_PRESENT_LIST_FAILURE] = createRequestActionTypes('startupPresent/GET_STARTUP_PRESENT_LIST')
const INITIALIZE = 'startupPresent/INITIALIZE';


export const initialize = createAction(INITIALIZE);

export const getStartupPresent = createAction(GET_STARTUP_PRESENT);
export const getStartupPresentList = createAction(GET_STARTUP_PRESENT_LIST);

const getStartupPresentSaga = createRequestSaga(GET_STARTUP_PRESENT, startupPresentAPI.getStartupPresent);
const getStartupPresentListSaga = createRequestSaga(GET_STARTUP_PRESENT_LIST, startupPresentAPI.getStartupPresentList);

export function* startupPresentSaga(){

    yield takeLatest(GET_STARTUP_PRESENT, getStartupPresentSaga);
    yield takeLatest(GET_STARTUP_PRESENT_LIST, getStartupPresentListSaga);

}

const initialState = {
    getStartupPresent:null,
    getStartupPresentList:{
        list:null,
    },

};

const startupPresent = handleActions(
    {
        [GET_STARTUP_PRESENT_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.getStartupPresent = response.data
            }),
        [GET_STARTUP_PRESENT_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.getStartupPresent = null
            }),

        [GET_STARTUP_PRESENT_LIST_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.getStartupPresentList.list = response.data.list
            }),
        [GET_STARTUP_PRESENT_LIST_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.getStartupPresentList.list = []
            }),
        [INITIALIZE]: (state, {payload: form}) => ({
            ...initialState
        }),
    }
    ,
    initialState
);
export default startupPresent;
