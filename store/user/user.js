import {createAction, handleActions} from 'redux-actions';
import {enableES5} from "immer"
enableES5()
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import * as userAPI from '../../lib/api/user/user';


const [GET_USER_LIST,GET_USER_LIST_SUCCESS, GET_USER_LIST_FAILURE] = createRequestActionTypes('user/GET_USER_LIST')
const [GET_USER,GET_USER_SUCCESS, GET_USER_FAILURE] = createRequestActionTypes('user/GET_USER')
const [UPDATE_USER,UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE] = createRequestActionTypes('user/UPDATE_USER')


const INITIALIZE = 'user/INITIALIZE';
const INITIALIZE_FORM  = 'user/INITIALIZE_FORM';


export const initialize = createAction(INITIALIZE);
export const initializeForm = createAction(INITIALIZE_FORM);
export const getUserList = createAction(GET_USER_LIST,data => data);
export const getUser = createAction(GET_USER,formId => formId);
export const updateUser = createAction(UPDATE_USER,user => user);



const getUserListSaga = createRequestSaga(GET_USER_LIST, userAPI.getUserList);
const getUserSaga = createRequestSaga(GET_USER, userAPI.getUser);
const updateUserSaga = createRequestSaga(UPDATE_USER, userAPI.updateUser);


export function* userSaga(){

    yield takeLatest(GET_USER_LIST, getUserListSaga);
    yield takeLatest(GET_USER, getUserSaga);
    yield takeLatest(UPDATE_USER, updateUserSaga);


}

const initialState = {
    user:{
        result:null,
        list:[],
        page:null,
    },
    searchUser:{
        user:null
    },
    update:{
        result:null,
        error:null
    }
};

const user = handleActions(
    {
        [GET_USER_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.searchUser.user = response.data.user
            }),
        [GET_USER_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.searchUser.user = null
            }),
        [UPDATE_USER_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.update.result = true
                draft.update.error = null
            }),
        [UPDATE_USER_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.update.result = false
                draft.update.error = 'error'
            }),
        [GET_USER_LIST_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.user.result = true
                draft.user.list = response.data.list
                draft.user.page = response.data.page
            }),
        [GET_USER_LIST_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.user.result = false
                draft.user.list = []
                draft.user.page = []
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
export default user;
