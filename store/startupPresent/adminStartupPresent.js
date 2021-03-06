import {createAction, handleActions} from 'redux-actions';
import {enableES5} from "immer"
enableES5()
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import * as adminStartupPresentAPI from '../../lib/api/admin/startupPresent/startupPresent';

const [GET_FIELD_LIST,GET_FIELD_LIST_SUCCESS, GET_FIELD_LIST_FAILURE] = createRequestActionTypes('adminPartner/GET_FIELD_LIST')
const [GET_STARTUP_PRESENT,GET_STARTUP_PRESENT_SUCCESS, GET_STARTUP_PRESENT_FAILURE] = createRequestActionTypes('adminPartner/GET_STARTUP_PRESENT')
const [GET_STARTUP_PRESENT_LIST,GET_STARTUP_PRESENT_LIST_SUCCESS, GET_STARTUP_PRESENT_LIST_FAILURE] = createRequestActionTypes('adminPartner/GET_STARTUP_PRESENT_LIST')
const [ADD_STARTUP_PRESENT,ADD_STARTUP_PRESENT_SUCCESS, ADD_STARTUP_PRESENT_FAILURE] = createRequestActionTypes('adminPartner/ADD_STARTUP_PRESENT')
const [UPDATE_STARTUP_PRESENT,UPDATE_STARTUP_PRESENT_SUCCESS, UPDATE_STARTUP_PRESENT_FAILURE] = createRequestActionTypes('adminPartner/UPDATE_STARTUP_PRESENT')
const [DELETE_STARTUP_PRESENT,DELETE_STARTUP_PRESENT_SUCCESS, DELETE_STARTUP_PRESENT_FAILURE] = createRequestActionTypes('adminPartner/DELETE_STARTUP_PRESENT')


const INITIALIZE = 'adminPartner/INITIALIZE';
const INITIALIZE_FORM  = 'adminPartner/INITIALIZE_FORM';


export const initialize = createAction(INITIALIZE);
export const initializeForm = createAction(INITIALIZE_FORM, from => from);


export const getFieldList = createAction(GET_FIELD_LIST);
export const getStartupPresent = createAction(GET_STARTUP_PRESENT, startupId => startupId);
export const getStartupPresentList = createAction(GET_STARTUP_PRESENT_LIST, startupPresentInfo => startupPresentInfo);
export const addStartupPresent = createAction(ADD_STARTUP_PRESENT, startupPresentInfo => startupPresentInfo);
export const updateStartupPresent = createAction(UPDATE_STARTUP_PRESENT, startupInfo => startupInfo);
export const deleteStartupPresent = createAction(DELETE_STARTUP_PRESENT, startupId => startupId);


const getFieldListSaga = createRequestSaga(GET_FIELD_LIST, adminStartupPresentAPI.getFieldList);
const getStartupPresentListSaga = createRequestSaga(GET_STARTUP_PRESENT_LIST, adminStartupPresentAPI.getStartupPresentList);
const getStartupPresentSaga = createRequestSaga(GET_STARTUP_PRESENT, adminStartupPresentAPI.getStartupPresent);
const addStartupPresentSaga = createRequestSaga(ADD_STARTUP_PRESENT, adminStartupPresentAPI.addStartupPresent);
const updateStartupPresentSaga = createRequestSaga(UPDATE_STARTUP_PRESENT, adminStartupPresentAPI.updateStartupPresent);
const deleteStartupPresentSaga = createRequestSaga(DELETE_STARTUP_PRESENT, adminStartupPresentAPI.deleteStartupPresent);


export function* adminStartupPresentSaga(){


    yield takeLatest(GET_FIELD_LIST, getFieldListSaga);
    yield takeLatest(ADD_STARTUP_PRESENT, addStartupPresentSaga);
    yield takeLatest(GET_STARTUP_PRESENT, getStartupPresentSaga);
    yield takeLatest(GET_STARTUP_PRESENT_LIST, getStartupPresentListSaga);
    yield takeLatest(UPDATE_STARTUP_PRESENT, updateStartupPresentSaga);
    yield takeLatest(DELETE_STARTUP_PRESENT, deleteStartupPresentSaga);

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
    addStartupPresent:{
        result:null,
        error:null
    },
    updateStartupPresent:{
        result:null,
        error:null
    },
    deleteStartupPresent:{
        result:null,
        error:null
    },
};

const adminStartupPresent = handleActions(
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
        [GET_STARTUP_PRESENT_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.getStartupPresent = response.data
            }),
        [GET_STARTUP_PRESENT_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.getStartupPresent = null
            }),
        [ADD_STARTUP_PRESENT_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.addStartupPresent.result = true
                draft.addStartupPresent.error = null
            }),
        [ADD_STARTUP_PRESENT_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.addStartupPresent.result = false
                draft.addStartupPresent.error = 'error'
            }),
        [UPDATE_STARTUP_PRESENT_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.updateStartupPresent.result = true
                draft.updateStartupPresent.error = null
            }),
        [UPDATE_STARTUP_PRESENT_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.updateStartupPresent.result = false
                draft.updateStartupPresent.error = 'error'
            }),
        [DELETE_STARTUP_PRESENT_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.deleteStartupPresent.result = true
                draft.deleteStartupPresent.error = null
            }),
        [DELETE_STARTUP_PRESENT_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.deleteStartupPresent.result = false
                draft.deleteStartupPresent.error = 'error'
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
export default adminStartupPresent;
