import {createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import * as adminNoticeAPI from '../../lib/api/admin/notice/adminNotice';

const [GET_NOTICE,GET_NOTICE_SUCCESS, GET_NOTICE_FAILURE] = createRequestActionTypes('adminNotice/GET_NOTICE')
const [ADD_NOTICE,ADD_NOTICE_SUCCESS, ADD_NOTICE_FAILURE] = createRequestActionTypes('adminNotice/ADD_NOTICE')
const [UPDATE_NOTICE,UPDATE_NOTICE_SUCCESS, UPDATE_NOTICE_FAILURE] = createRequestActionTypes('adminBoard/UPDATE_NOTICE')
const [DELETE_NOTICE,DELETE_NOTICE_SUCCESS, DELETE_NOTICE_FAILURE] = createRequestActionTypes('adminBoard/DELETE_NOTICE')
const [GET_NOTICE_LIST,GET_NOTICE_LIST_SUCCESS, GET_NOTICE_LIST_FAILURE] = createRequestActionTypes('adminNotice/GET_NOTICE_LIST')
const [GET_NOTICE_CATEGORY_CODE_LIST,GET_NOTICE_CATEGORY_CODE_LIST_SUCCESS, GET_NOTICE_CATEGORY_CODE_LIST_FAILURE] = createRequestActionTypes('adminNotice/GET_NOTICE_CATEGORY_CODE_LIST')

const INITIALIZE = 'adminNotice/INITIALIZE';
const INITIALIZE_FORM  = 'adminNotice/INITIALIZE_FORM';


export const initialize = createAction(INITIALIZE);
export const initializeForm = createAction(INITIALIZE_FORM);
export const getNotice = createAction(GET_NOTICE,noticeId =>noticeId);
export const addNotice = createAction(ADD_NOTICE,form =>form);
export const updateNotice = createAction(UPDATE_NOTICE,form =>form);
export const deleteNotice = createAction(DELETE_NOTICE,noticeId =>noticeId);
export const getNoticeList = createAction(GET_NOTICE_LIST,data =>data);
export const getNoticeCategoryCodeList = createAction(GET_NOTICE_CATEGORY_CODE_LIST);

const getNoticeSaga = createRequestSaga(GET_NOTICE, adminNoticeAPI.getNotice);
const updateNoticeSaga = createRequestSaga(UPDATE_NOTICE, adminNoticeAPI.updateNotice);
const deleteNoticeSaga = createRequestSaga(DELETE_NOTICE, adminNoticeAPI.deleteNotice);
const addNoticeSaga = createRequestSaga(ADD_NOTICE, adminNoticeAPI.addNotice);
const getNoticeListSaga = createRequestSaga(GET_NOTICE_LIST, adminNoticeAPI.getNoticeList);
const getNoticeCategoryCodeListSaga = createRequestSaga(GET_NOTICE_CATEGORY_CODE_LIST, adminNoticeAPI.getNoticeCategoryCodeList);


export function* adminNoticeSaga(){
    yield takeLatest(GET_NOTICE, getNoticeSaga);
    yield takeLatest(ADD_NOTICE, addNoticeSaga);
    yield takeLatest(UPDATE_NOTICE, updateNoticeSaga);
    yield takeLatest(DELETE_NOTICE, deleteNoticeSaga);
    yield takeLatest(GET_NOTICE_LIST, getNoticeListSaga);
    yield takeLatest(GET_NOTICE_CATEGORY_CODE_LIST, getNoticeCategoryCodeListSaga);
}

const initialState = {
    notice:{
        result:null,
        list:[],
        cate:[],
        page:null,
    },
    view:{
        result:null,
        notice:null,
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

const adminNotice = handleActions(
    {
        [GET_NOTICE_LIST_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.notice.result = true
                draft.notice.list = response.data.list
                draft.notice.cate = response.data.cate
                draft.notice.page = response.data.page
            }),
        [GET_NOTICE_LIST_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.notice.result = false
                draft.notice.list = []
                draft.notice.cate = []
                draft.notice.page = null
            }),
        [GET_NOTICE_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.view.result = true
                draft.view.notice = response.data.notice
                draft.view.prev = response.data.prev
                draft.view.next = response.data.next
                draft.view.files = response.data.files
            }),
        [GET_NOTICE_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.view.result = true
                draft.view.notice = null
                draft.view.prev = null
                draft.view.next = null
                draft.view.files = null
            }),
        [ADD_NOTICE_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.add.result = true
                draft.add.error = null
            }),
        [ADD_NOTICE_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.add.result = false
                draft.add.error = 'error'
            }),
        [UPDATE_NOTICE_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.update.result = true
                draft.update.error = null
            }),
        [UPDATE_NOTICE_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.update.result = false
                draft.update.error = 'error'
            }),
        [DELETE_NOTICE_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.delete.result = true
                draft.delete.error = null
            }),
        [DELETE_NOTICE_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.delete.result = false
                draft.delete.error = 'error'
            }),
        [GET_NOTICE_CATEGORY_CODE_LIST_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.cate = response.data
            }),
        [GET_NOTICE_CATEGORY_CODE_LIST_FAILURE]: (state, {payload: error}) =>
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
export default adminNotice;
