import {createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import * as noticeAPI from '../../lib/api/notice/notice';

const [GET_NOTICE,GET_NOTICE_SUCCESS, GET_NOTICE_FAILURE] = createRequestActionTypes('notice/GET_NOTICE')
const [GET_NOTICE_LIST,GET_NOTICE_LIST_SUCCESS, GET_NOTICE_LIST_FAILURE] = createRequestActionTypes('notice/GET_NOTICE_LIST')

const INITIALIZE = 'notice/INITIALIZE';
const INITIALIZE_FORM  = 'notice/INITIALIZE_FORM';


export const initialize = createAction(INITIALIZE);
export const initializeForm = createAction(INITIALIZE_FORM);
export const getNotice = createAction(GET_NOTICE,noticeId =>noticeId);
export const getNoticeList = createAction(GET_NOTICE_LIST,data =>data);

const getNoticeSaga = createRequestSaga(GET_NOTICE, noticeAPI.getNotice);
const getNoticeListSaga = createRequestSaga(GET_NOTICE_LIST, noticeAPI.getNoticeList);


export function* noticeSaga(){
    yield takeLatest(GET_NOTICE, getNoticeSaga);
    yield takeLatest(GET_NOTICE_LIST, getNoticeListSaga);
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
    }
};

const notice = handleActions(
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
export default notice;
