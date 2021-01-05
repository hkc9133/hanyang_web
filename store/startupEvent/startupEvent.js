import {createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import * as startupEventAPI from '../../lib/api/startupEvent/startupEvent';

const [GET_STARTUP_EVENT_LIST,GET_STARTUP_EVENT_LIST_SUCCESS, GET_STARTUP_EVENT_LIST_FAILURE] = createRequestActionTypes('startupEvent/GET_STARTUP_EVENT_LIST')

const INITIALIZE = 'startupEvent/INITIALIZE';
const INITIALIZE_FORM  = 'startupEvent/INITIALIZE_FORM';


export const initialize = createAction(INITIALIZE);
export const initializeForm = createAction(INITIALIZE_FORM);
export const getStartupEventList = createAction(GET_STARTUP_EVENT_LIST,data =>data);

const getStartupEventListSaga = createRequestSaga(GET_STARTUP_EVENT_LIST, startupEventAPI.getStartupEventList);


export function* startupEventSaga(){
    yield takeLatest(GET_STARTUP_EVENT_LIST, getStartupEventListSaga);
}

const initialState = {
    event:{
        result:null,
        list:[],
        cate:[],
        page:null,
    },
};

const startupEvent = handleActions(
    {
        [GET_STARTUP_EVENT_LIST_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.event.result = true
                draft.event.list = response.data.list
                draft.event.cate = response.data.cate
                draft.event.page = response.data.page
            }),
        [GET_STARTUP_EVENT_LIST_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.event.result = false
                draft.event.list = []
                draft.event.cate = []
                draft.event.page = null
            }),
        [INITIALIZE]: (state, {payload: form}) => ({
            ...initialState
        }),
        [INITIALIZE_FORM]: (state, {payload: form}) => ({
            ...state,
            [form]: initialState[form],
        }),
    }
    ,
    initialState
);
export default startupEvent;
