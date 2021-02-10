import {createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import * as startupPresentAPI from "../../lib/api/startupPresent/startupPresent";
import * as adminStartupPresentAPI from "../../lib/api/admin/startupPresent/startupPresent";

const [GET_FIELD_LIST,GET_FIELD_LIST_SUCCESS, GET_FIELD_LIST_FAILURE] = createRequestActionTypes('startupPresent/GET_FIELD_LIST')
const [GET_BEST_STARTUP_LIST,GET_BEST_STARTUP_LIST_SUCCESS, GET_BEST_STARTUP_LIST_FAILURE] = createRequestActionTypes('startupPresent/GET_BEST_STARTUP_LIST')
const [GET_STARTUP_PRESENT,GET_STARTUP_PRESENT_SUCCESS, GET_STARTUP_PRESENT_FAILURE] = createRequestActionTypes('startupPresent/GET_STARTUP_PRESENT')
const [GET_STARTUP_PRESENT_LIST,GET_STARTUP_PRESENT_LIST_SUCCESS, GET_STARTUP_PRESENT_LIST_FAILURE] = createRequestActionTypes('startupPresent/GET_STARTUP_PRESENT_LIST')
const INITIALIZE = 'startupPresent/INITIALIZE';


export const initialize = createAction(INITIALIZE);

export const getBestStartupList = createAction(GET_BEST_STARTUP_LIST);
export const getFieldList = createAction(GET_FIELD_LIST);

export const getStartupPresent = createAction(GET_STARTUP_PRESENT,startupId => startupId);
export const getStartupPresentList = createAction(GET_STARTUP_PRESENT_LIST, searchInfo => searchInfo);

const getBestStartupListSaga = createRequestSaga(GET_BEST_STARTUP_LIST, startupPresentAPI.getBestStartupList);
const getFieldListSaga = createRequestSaga(GET_FIELD_LIST, startupPresentAPI.getFieldList);

const getStartupPresentSaga = createRequestSaga(GET_STARTUP_PRESENT, startupPresentAPI.getStartupPresent);
const getStartupPresentListSaga = createRequestSaga(GET_STARTUP_PRESENT_LIST, startupPresentAPI.getStartupPresentList);

export function* startupPresentSaga(){
    yield takeLatest(GET_FIELD_LIST, getFieldListSaga);
    yield takeLatest(GET_BEST_STARTUP_LIST, getBestStartupListSaga);
    yield takeLatest(GET_STARTUP_PRESENT, getStartupPresentSaga);
    yield takeLatest(GET_STARTUP_PRESENT_LIST, getStartupPresentListSaga);

}

const initialState = {
    getFieldList:{
        business:[],
        tech:[]
    },
    getStartupPresent:null,
    getStartupPresentList:{
        list:[],
        page:null
    },
    getBestStartupList:{
        list:[],
        count:[]
    }

};

const startupPresent = handleActions(
    {
        [GET_FIELD_LIST_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.getFieldList.business = response.data.business
                draft.getFieldList.tech = response.data.tech
            }),
        [GET_FIELD_LIST_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.getFieldList.business = []
                draft.getFieldList.tech = []
            }),
        [GET_BEST_STARTUP_LIST_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.getBestStartupList.list = response.data.list
                draft.getBestStartupList.count = response.data.count
            }),
        [GET_BEST_STARTUP_LIST_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.getBestStartupList.list = []
                draft.getBestStartupList.count = []
            }),
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
                draft.getStartupPresentList.page = response.data.page
            }),
        [GET_STARTUP_PRESENT_LIST_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.getStartupPresentList.list = []
                draft.getStartupPresentList.page = null
            }),
        [INITIALIZE]: (state, {payload: form}) => ({
            ...initialState
        }),
    }
    ,
    initialState
);
export default startupPresent;
