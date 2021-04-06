import {createAction, handleActions} from 'redux-actions';
import {enableES5} from "immer"
enableES5()
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import * as startupCalendarAPI from '../../lib/api/startupCalendar/startupCalendar';

const [GET_STARTUP_CALENDAR,GET_STARTUP_CALENDAR_SUCCESS, GET_STARTUP_CALENDAR_FAILURE] = createRequestActionTypes('startupCalendar/GET_STARTUP_CALENDAR')
const [GET_STARTUP_CALENDAR_LIST,GET_STARTUP_CALENDAR_LIST_SUCCESS, GET_STARTUP_CALENDAR_LIST_FAILURE] = createRequestActionTypes('startupCalendar/GET_STARTUP_CALENDAR_LIST')

const INITIALIZE = 'startupCalendar/INITIALIZE';
const INITIALIZE_FORM  = 'startupCalendar/INITIALIZE_FORM';


export const initialize = createAction(INITIALIZE);
export const initializeForm = createAction(INITIALIZE_FORM);
export const getStartupCalendar = createAction(GET_STARTUP_CALENDAR,startupCalendarId =>startupCalendarId);
export const getStartupCalendarList = createAction(GET_STARTUP_CALENDAR_LIST,data =>data);

const getStartupCalendarSaga = createRequestSaga(GET_STARTUP_CALENDAR, startupCalendarAPI.getStartupCalendar);
const getStartupCalendarListSaga = createRequestSaga(GET_STARTUP_CALENDAR_LIST, startupCalendarAPI.getStartupCalendarList);


export function* startupCalendarSaga(){
    yield takeLatest(GET_STARTUP_CALENDAR, getStartupCalendarSaga);
    yield takeLatest(GET_STARTUP_CALENDAR_LIST, getStartupCalendarListSaga);
}

const initialState = {
    startupCalendar:{
        result:null,
        list:[],
        cate:[],
        page:null,
    },
    view:{
        result:null,
        startupCalendar:null,
        prev:null,
        next:null,
        files:[]
    }
};

const startupCalendar = handleActions(
    {
        [GET_STARTUP_CALENDAR_LIST_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.startupCalendar.result = true
                draft.startupCalendar.list = response.data.list
                draft.startupCalendar.cate = response.data.cate
                draft.startupCalendar.page = response.data.page
            }),
        [GET_STARTUP_CALENDAR_LIST_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.startupCalendar.result = false
                draft.startupCalendar.list = []
                draft.startupCalendar.cate = []
                draft.startupCalendar.page = null
            }),
        [GET_STARTUP_CALENDAR_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.view.result = true
                draft.view.startupCalendar = response.data.startupCalendar
                draft.view.prev = response.data.prev
                draft.view.next = response.data.next
                draft.view.files = response.data.files
            }),
        [GET_STARTUP_CALENDAR_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.view.result = true
                draft.view.startupCalendar = null
                draft.view.prev = null
                draft.view.next = null
                draft.view.files = null
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
export default startupCalendar;
