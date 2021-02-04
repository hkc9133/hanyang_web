import {createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import * as adminKeywordAPI from '../../lib/api/admin/keyword/adminKeyword';

const [GET_KEYWORD,GET_KEYWORD_SUCCESS, GET_KEYWORD_FAILURE] = createRequestActionTypes('adminKeyword/GET_KEYWORD')
const [GET_KEYWORD_LIST,GET_KEYWORD_LIST_SUCCESS, GET_KEYWORD_LIST_FAILURE] = createRequestActionTypes('adminKeyword/GET_KEYWORD_LIST')
const [ADD_KEYWORD,ADD_KEYWORD_SUCCESS, ADD_KEYWORD_FAILURE] = createRequestActionTypes('adminKeyword/ADD_KEYWORD')
const [UPDATE_KEYWORD,UPDATE_KEYWORD_SUCCESS, UPDATE_KEYWORD_FAILURE] = createRequestActionTypes('adminKeyword/UPDATE_KEYWORD')
const [DELETE_KEYWORD,DELETE_KEYWORD_SUCCESS, DELETE_KEYWORD_FAILURE] = createRequestActionTypes('adminKeyword/DELETE_KEYWORD')
// const [UPDATE_KEYWORD_SEARCH,UPDATE_KEYWORD_SEARCH_SUCCESS, UPDATE_KEYWORD_SEARCH_FAILURE] = createRequestActionTypes('adminKeyword/UPDATE_KEYWORD_SEARCH')


const INITIALIZE = 'adminKeyword/INITIALIZE';
const INITIALIZE_FORM  = 'adminKeyword/INITIALIZE_FORM';


export const initialize = createAction(INITIALIZE);
export const initializeForm = createAction(INITIALIZE_FORM, from => from);


export const getKeyword = createAction(GET_KEYWORD, keywordId => keywordId);
export const getKeywordList = createAction(GET_KEYWORD_LIST, keywordInfo => keywordInfo);
export const addKeyword = createAction(ADD_KEYWORD, keywordInfo => keywordInfo);
export const updateKeyword = createAction(UPDATE_KEYWORD, keywordInfo => keywordInfo);
export const deleteKeyword = createAction(DELETE_KEYWORD, keywordId => keywordId);
// export const updateKeywordSearch = createAction(UPDATE_KEYWORD_SEARCH, keywordId => keywordId);


const getKeywordListSaga = createRequestSaga(GET_KEYWORD_LIST, adminKeywordAPI.getKeywordList);
const getKeywordSaga = createRequestSaga(GET_KEYWORD, adminKeywordAPI.getKeyword);
const addKeywordSaga = createRequestSaga(ADD_KEYWORD, adminKeywordAPI.addKeyword);
const updateKeywordSaga = createRequestSaga(UPDATE_KEYWORD, adminKeywordAPI.updateKeyword);
const deleteKeywordSaga = createRequestSaga(DELETE_KEYWORD, adminKeywordAPI.deleteKeyword);
// const updateKeywordSearchSaga = createRequestSaga(UPDATE_KEYWORD_SEARCH, adminKeywordAPI.updateKeywordSearch);


export function* adminKeywordSaga(){


    yield takeLatest(ADD_KEYWORD, addKeywordSaga);
    yield takeLatest(GET_KEYWORD, getKeywordSaga);
    yield takeLatest(GET_KEYWORD_LIST, getKeywordListSaga);
    yield takeLatest(UPDATE_KEYWORD, updateKeywordSaga);
    yield takeLatest(DELETE_KEYWORD, deleteKeywordSaga);
    // yield takeLatest(UPDATE_KEYWORD_SEARCH, updateKeywordSearchSaga);

}

const initialState = {

    getKeyword:null,
    getKeywordList:{
        list:[],
        page:null
    },
    addKeyword:{
        result:null,
        error:null
    },
    updateKeyword:{
        result:null,
        error:null
    },
    deleteKeyword:{
        result:null,
        error:null
    },
    // updateKeywordSearch:{
    //     result:null,
    //     error:null
    // },
};

const adminKeyword = handleActions(
    {
        [GET_KEYWORD_LIST_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.getKeywordList.list = response.data.list
                draft.getKeywordList.page = response.data.page
            }),
        [GET_KEYWORD_LIST_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.getKeywordList.list = []
                draft.getKeywordList.page = null
            }),
        [GET_KEYWORD_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.getKeyword = response.data
            }),
        [GET_KEYWORD_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.getKeyword = null
            }),
        [ADD_KEYWORD_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.addKeyword.result = true
                draft.addKeyword.error = null
            }),
        [ADD_KEYWORD_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.addKeyword.result = false
                draft.addKeyword.error = 'error'
            }),
        [UPDATE_KEYWORD_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.updateKeyword.result = true
                draft.updateKeyword.error = null
            }),
        [UPDATE_KEYWORD_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.updateKeyword.result = false
                draft.updateKeyword.error = 'error'
            }),
        [DELETE_KEYWORD_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.deleteKeyword.result = true
                draft.deleteKeyword.error = null
            }),
        [DELETE_KEYWORD_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.deleteKeyword.result = false
                draft.deleteKeyword.error = 'error'
            }),
        // [UPDATE_KEYWORD_SEARCH_SUCCESS]: (state, {payload: response}) =>
        //     produce(state, draft => {
        //         draft.updateKeywordSearch.result = true
        //         draft.updateKeywordSearch.error = null
        //     }),
        // [UPDATE_KEYWORD_SEARCH_FAILURE]: (state, {payload: error}) =>
        //     produce(state, draft => {
        //         draft.updateKeywordSearch.result = false
        //         draft.updateKeywordSearch.error = 'error'
        //     }),
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
export default adminKeyword;
