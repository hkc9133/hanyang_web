import {createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import * as adminPopupAPI from '../../lib/api/admin/popup/popup';

const [GET_POPUP,GET_POPUP_SUCCESS, GET_POPUP_FAILURE] = createRequestActionTypes('adminPopup/GET_POPUP')
const [GET_POPUP_LIST,GET_POPUP_LIST_SUCCESS, GET_POPUP_LIST_FAILURE] = createRequestActionTypes('adminPopup/GET_POPUP_LIST')
const [ADD_POPUP,ADD_POPUP_SUCCESS, ADD_POPUP_FAILURE] = createRequestActionTypes('adminPopup/ADD_POPUP')
const [UPDATE_POPUP,UPDATE_POPUP_SUCCESS, UPDATE_POPUP_FAILURE] = createRequestActionTypes('adminPopup/UPDATE_POPUP')
const [DELETE_POPUP,DELETE_POPUP_SUCCESS, DELETE_POPUP_FAILURE] = createRequestActionTypes('adminPopup/DELETE_POPUP')


const INITIALIZE = 'adminPopup/INITIALIZE';
const INITIALIZE_FORM  = 'adminPopup/INITIALIZE_FORM';


export const initialize = createAction(INITIALIZE);
export const initializeForm = createAction(INITIALIZE_FORM, from => from);


export const getPopup = createAction(GET_POPUP);
export const getPopupList = createAction(GET_POPUP_LIST, popupInfo => popupInfo);
export const addPopup = createAction(ADD_POPUP, popupInfo => popupInfo);
export const updatePopup = createAction(UPDATE_POPUP, popupInfo => popupInfo);
export const deletePopup = createAction(DELETE_POPUP, popupId => popupId);


const getPopupListSaga = createRequestSaga(GET_POPUP_LIST, adminPopupAPI.getPopupList);
const getPopupSaga = createRequestSaga(GET_POPUP, adminPopupAPI.getPopup);
const addPopupSaga = createRequestSaga(ADD_POPUP, adminPopupAPI.addPopup);
const updatePopupSaga = createRequestSaga(UPDATE_POPUP, adminPopupAPI.updatePopup);
const deletePopupSaga = createRequestSaga(DELETE_POPUP, adminPopupAPI.deletePopup);


export function* adminPopupSaga(){


    yield takeLatest(ADD_POPUP, addPopupSaga);
    yield takeLatest(GET_POPUP, getPopupSaga);
    yield takeLatest(GET_POPUP_LIST, getPopupListSaga);
    yield takeLatest(UPDATE_POPUP, updatePopupSaga);
    yield takeLatest(DELETE_POPUP, deletePopupSaga);

}

const initialState = {

    getPopup:null,
    getPopupList:{
        list:[],
        page:null
    },
    addPopup:{
        result:null,
        error:null
    },
    updatePopup:{
        result:null,
        error:null
    },
    deletePopup:{
        result:null,
        error:null
    },
};

const adminPopup = handleActions(
    {
        [GET_POPUP_LIST_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.getPopupList.list = response.data.list
                draft.getPopupList.page = response.data.page
            }),
        [GET_POPUP_LIST_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.getPopupList.list = []
                draft.getPopupList.page = null
            }),
        [GET_POPUP_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.getPopup = response.data
            }),
        [GET_POPUP_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.getPopup = null
            }),
        [ADD_POPUP_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.addPopup.result = true
                draft.addPopup.error = null
            }),
        [ADD_POPUP_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.addPopup.result = false
                draft.addPopup.error = 'error'
            }),
        [UPDATE_POPUP_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.updatePopup.result = true
                draft.updatePopup.error = null
            }),
        [UPDATE_POPUP_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.updatePopup.result = false
                draft.updatePopup.error = 'error'
            }),
        [DELETE_POPUP_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.deletePopup.result = true
                draft.deletePopup.error = null
            }),
        [DELETE_POPUP_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.deletePopup.result = false
                draft.deletePopup.error = 'error'
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
export default adminPopup;
