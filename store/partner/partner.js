import {createAction, handleActions} from 'redux-actions';
import {enableES5} from "immer"
enableES5()
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import * as partnerAPI from "../../lib/api/partner/partner";

const [GET_CONTINENT_LIST,GET_CONTINENT_LIST_SUCCESS, GET_CONTINENT_LIST_FAILURE] = createRequestActionTypes('partner/GET_CONTINENT_LIST')
const [GET_PARTNER,GET_PARTNER_SUCCESS, GET_PARTNER_FAILURE] = createRequestActionTypes('partner/GET_PARTNER')
const [GET_PARTNER_LIST,GET_PARTNER_LIST_SUCCESS, GET_PARTNER_LIST_FAILURE] = createRequestActionTypes('partner/GET_PARTNER_LIST')
const INITIALIZE = 'partner/INITIALIZE';
const INITIALIZE_FORM  = 'partner/INITIALIZE_FORM';


export const initialize = createAction(INITIALIZE);
export const initializeForm = createAction(INITIALIZE_FORM, from => from);

export const getContinentList = createAction(GET_CONTINENT_LIST);
export const getPartner = createAction(GET_PARTNER, partnerId => partnerId);
export const getPartnerList = createAction(GET_PARTNER_LIST, partnerInfo => partnerInfo);

const getContinentListSaga = createRequestSaga(GET_CONTINENT_LIST, partnerAPI.getContinentList);
const getPartnerListSaga = createRequestSaga(GET_PARTNER_LIST, partnerAPI.getPartnerList);
const getPartnerSaga = createRequestSaga(GET_PARTNER, partnerAPI.getPartner);

export function* partnerSaga(){
    yield takeLatest(GET_CONTINENT_LIST, getContinentListSaga);
    yield takeLatest(GET_PARTNER, getPartnerSaga);
    yield takeLatest(GET_PARTNER_LIST, getPartnerListSaga);

}

const initialState = {
    getContinentList:[],
    getPartner:null,
    getPartnerList:{
        list:[],
        page:null
    },

};

const partner = handleActions(
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
export default partner;
