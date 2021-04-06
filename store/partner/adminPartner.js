import {createAction, handleActions} from 'redux-actions';
import {enableES5} from "immer"
enableES5()
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import * as adminPartnerAPI from '../../lib/api/admin/partner/partner';

const [GET_CONTINENT_LIST,GET_CONTINENT_LIST_SUCCESS, GET_CONTINENT_LIST_FAILURE] = createRequestActionTypes('adminPartner/GET_CONTINENT_LIST')
const [GET_PARTNER,GET_PARTNER_SUCCESS, GET_PARTNER_FAILURE] = createRequestActionTypes('adminPartner/GET_PARTNER')
const [GET_PARTNER_LIST,GET_PARTNER_LIST_SUCCESS, GET_PARTNER_LIST_FAILURE] = createRequestActionTypes('adminPartner/GET_PARTNER_LIST')
const [ADD_PARTNER,ADD_PARTNER_SUCCESS, ADD_PARTNER_FAILURE] = createRequestActionTypes('adminPartner/ADD_PARTNER')
const [UPDATE_PARTNER,UPDATE_PARTNER_SUCCESS, UPDATE_PARTNER_FAILURE] = createRequestActionTypes('adminPartner/UPDATE_PARTNER')
const [DELETE_PARTNER,DELETE_PARTNER_SUCCESS, DELETE_PARTNER_FAILURE] = createRequestActionTypes('adminPartner/DELETE_PARTNER')


const INITIALIZE = 'adminPartner/INITIALIZE';
const INITIALIZE_FORM  = 'adminPartner/INITIALIZE_FORM';


export const initialize = createAction(INITIALIZE);
export const initializeForm = createAction(INITIALIZE_FORM, from => from);


export const getContinentList = createAction(GET_CONTINENT_LIST);
export const getPartner = createAction(GET_PARTNER, partnerId => partnerId);
export const getPartnerList = createAction(GET_PARTNER_LIST, startupPresentInfo => startupPresentInfo);
export const addPartner = createAction(ADD_PARTNER, startupPresentInfo => startupPresentInfo);
export const updatePartner = createAction(UPDATE_PARTNER, partnerInfo => partnerInfo);
export const deletePartner = createAction(DELETE_PARTNER, partnerId => partnerId);


const getContinentListSaga = createRequestSaga(GET_CONTINENT_LIST, adminPartnerAPI.getContinentList);
const getPartnerListSaga = createRequestSaga(GET_PARTNER_LIST, adminPartnerAPI.getPartnerList);
const getPartnerSaga = createRequestSaga(GET_PARTNER, adminPartnerAPI.getPartner);
const addPartnerSaga = createRequestSaga(ADD_PARTNER, adminPartnerAPI.addPartner);
const updatePartnerSaga = createRequestSaga(UPDATE_PARTNER, adminPartnerAPI.updatePartner);
const deletePartnerSaga = createRequestSaga(DELETE_PARTNER, adminPartnerAPI.deletePartner);


export function* adminPartnerSaga(){


    yield takeLatest(GET_CONTINENT_LIST, getContinentListSaga);
    yield takeLatest(ADD_PARTNER, addPartnerSaga);
    yield takeLatest(GET_PARTNER, getPartnerSaga);
    yield takeLatest(GET_PARTNER_LIST, getPartnerListSaga);
    yield takeLatest(UPDATE_PARTNER, updatePartnerSaga);
    yield takeLatest(DELETE_PARTNER, deletePartnerSaga);

}

const initialState = {

    getContinentList:[],
    getPartner:null,
    getPartnerList:{
        list:[],
        page:null
    },
    addPartner:{
        result:null,
        error:null
    },
    updatePartner:{
        result:null,
        error:null
    },
    deletePartner:{
        result:null,
        error:null
    },
};

const adminPartner = handleActions(
    {
        [GET_CONTINENT_LIST_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.getContinentList = response.data
            }),
        [GET_CONTINENT_LIST_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.getContinentList = []
            }),
        [GET_PARTNER_LIST_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.getPartnerList.list = response.data.list
                draft.getPartnerList.page = response.data.page
            }),
        [GET_PARTNER_LIST_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.getPartnerList.list = []
                draft.getPartnerList.page = null
            }),
        [GET_PARTNER_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.getPartner = response.data
            }),
        [GET_PARTNER_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.getPartner = null
            }),
        [ADD_PARTNER_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.addPartner.result = true
                draft.addPartner.error = null
            }),
        [ADD_PARTNER_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.addPartner.result = false
                draft.addPartner.error = 'error'
            }),
        [UPDATE_PARTNER_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.updatePartner.result = true
                draft.updatePartner.error = null
            }),
        [UPDATE_PARTNER_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.updatePartner.result = false
                draft.updatePartner.error = 'error'
            }),
        [DELETE_PARTNER_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.deletePartner.result = true
                draft.deletePartner.error = null
            }),
        [DELETE_PARTNER_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.deletePartner.result = false
                draft.deletePartner.error = 'error'
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
export default adminPartner;
