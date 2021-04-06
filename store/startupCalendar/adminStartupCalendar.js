import {createAction, handleActions} from 'redux-actions';
import {enableES5} from "immer"
enableES5()
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import * as adminStartupCalendarAPI from '../../lib/api/admin/startupCalendar/adminStartupCalendar';

const [GET_STARTUP_CALENDAR,GET_STARTUP_CALENDAR_SUCCESS, GET_STARTUP_CALENDAR_FAILURE] = createRequestActionTypes('adminStartupCalendar/GET_STARTUP_CALENDAR')
const [ADD_STARTUP_CALENDAR,ADD_STARTUP_CALENDAR_SUCCESS, ADD_STARTUP_CALENDAR_FAILURE] = createRequestActionTypes('adminStartupCalendar/ADD_STARTUP_CALENDAR')
const [UPDATE_STARTUP_CALENDAR,UPDATE_STARTUP_CALENDAR_SUCCESS, UPDATE_STARTUP_CALENDAR_FAILURE] = createRequestActionTypes('adminStartupCalendar/UPDATE_STARTUP_CALENDAR')
const [DELETE_STARTUP_CALENDAR,DELETE_STARTUP_CALENDAR_SUCCESS, DELETE_STARTUP_CALENDAR_FAILURE] = createRequestActionTypes('adminStartupCalendar/DELETE_STARTUP_CALENDAR')
const [GET_STARTUP_CALENDAR_LIST,GET_STARTUP_CALENDAR_LIST_SUCCESS, GET_STARTUP_CALENDAR_LIST_FAILURE] = createRequestActionTypes('adminStartupCalendar/GET_STARTUP_CALENDAR_LIST')
const [GET_STARTUP_CALENDAR_CATEGORY_CODE_LIST,GET_STARTUP_CALENDAR_CATEGORY_CODE_LIST_SUCCESS, GET_STARTUP_CALENDAR_CATEGORY_CODE_LIST_FAILURE] = createRequestActionTypes('adminStartupCalendar/GET_STARTUP_CALENDAR_CATEGORY_CODE_LIST')

const INITIALIZE = 'adminStartupCalendar/INITIALIZE';
const INITIALIZE_FORM  = 'adminStartupCalendar/INITIALIZE_FORM';


export const initialize = createAction(INITIALIZE);
export const initializeForm = createAction(INITIALIZE_FORM);
export const getStartupCalendar = createAction(GET_STARTUP_CALENDAR,startupCalendarId =>startupCalendarId);
export const addStartupCalendar = createAction(ADD_STARTUP_CALENDAR,form =>form);
export const updateStartupCalendar = createAction(UPDATE_STARTUP_CALENDAR,form =>form);
export const deleteStartupCalendar = createAction(DELETE_STARTUP_CALENDAR,startupCalendarId =>startupCalendarId);
export const getStartupCalendarList = createAction(GET_STARTUP_CALENDAR_LIST,data =>data);
export const getStartupCalendarCategoryCodeList = createAction(GET_STARTUP_CALENDAR_CATEGORY_CODE_LIST);

const getStartupCalendarSaga = createRequestSaga(GET_STARTUP_CALENDAR, adminStartupCalendarAPI.getStartupCalendar);
const updateStartupCalendarSaga = createRequestSaga(UPDATE_STARTUP_CALENDAR, adminStartupCalendarAPI.updateStartupCalendar);
const deleteStartupCalendarSaga = createRequestSaga(DELETE_STARTUP_CALENDAR, adminStartupCalendarAPI.deleteStartupCalendar);
const addStartupCalendarSaga = createRequestSaga(ADD_STARTUP_CALENDAR, adminStartupCalendarAPI.addStartupCalendar);
const getStartupCalendarListSaga = createRequestSaga(GET_STARTUP_CALENDAR_LIST, adminStartupCalendarAPI.getStartupCalendarList);
const getStartupCalendarCategoryCodeListSaga = createRequestSaga(GET_STARTUP_CALENDAR_CATEGORY_CODE_LIST, adminStartupCalendarAPI.getStartupCalendarCategoryCodeList);


export function* adminStartupCalendarSaga(){
    yield takeLatest(GET_STARTUP_CALENDAR, getStartupCalendarSaga);
    yield takeLatest(ADD_STARTUP_CALENDAR, addStartupCalendarSaga);
    yield takeLatest(UPDATE_STARTUP_CALENDAR, updateStartupCalendarSaga);
    yield takeLatest(DELETE_STARTUP_CALENDAR, deleteStartupCalendarSaga);
    yield takeLatest(GET_STARTUP_CALENDAR_LIST, getStartupCalendarListSaga);
    yield takeLatest(GET_STARTUP_CALENDAR_CATEGORY_CODE_LIST, getStartupCalendarCategoryCodeListSaga);
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
    },
    add:{
        result:null,
        error:null
    },
    update:{
        result:null,
        error:null
    },
    delete:{
        result:null,
        error:null
    },
    cate:[]
};

const adminStartupCalendar = handleActions(
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
        [ADD_STARTUP_CALENDAR_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.add.result = true
                draft.add.error = null
            }),
        [ADD_STARTUP_CALENDAR_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.add.result = false
                draft.add.error = 'error'
            }),
        [UPDATE_STARTUP_CALENDAR_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.update.result = true
                draft.update.error = null
            }),
        [UPDATE_STARTUP_CALENDAR_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.update.result = false
                draft.update.error = 'error'
            }),
        [DELETE_STARTUP_CALENDAR_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.delete.result = true
                draft.delete.error = null
            }),
        [DELETE_STARTUP_CALENDAR_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.delete.result = false
                draft.delete.error = 'error'
            }),
        [GET_STARTUP_CALENDAR_CATEGORY_CODE_LIST_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.cate = response.data
            }),
        [GET_STARTUP_CALENDAR_CATEGORY_CODE_LIST_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.cate = []
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
export default adminStartupCalendar;
