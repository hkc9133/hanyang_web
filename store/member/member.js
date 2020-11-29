import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import * as memberAPI from '../../lib/api/member/member';

const [SELECT_COMPANY,SELECT_COMPANY_SUCCESS, SELECT_COMPANY_FAILURE] = createRequestActionTypes('member/SELECT_COMPANY')
const [GET_CONTACT,GET_CONTACT_SUCCESS, GET_CONTACT_FAILURE] = createRequestActionTypes('member/GET_CONTACT')
const INITIALIZE = 'member/INITIALIZE';


// export const selectCompany = createAction(SELECT_COMPANY,(id)=>(id));
export const initialize = createAction(INITIALIZE);
export const getContact = createAction(GET_CONTACT);

const getContactSaga = createRequestSaga(GET_CONTACT, memberAPI.getContact);

export function* memberSaga(){
    yield takeLatest(GET_CONTACT, getContactSaga);
}

const initialState = {
    contact:{
        result:null,
        data:null,
    }
    // selectCompany:{
    //     companyId:null,
    //     result:null,
    //     error:null
    // }
};

const member = handleActions(
    {
        [GET_CONTACT_SUCCESS]: (state, {payload: response}) =>
            produce(state,draft => {
                draft.contact.result = true;
                draft.contact.data = response.data;
            }),

        [GET_CONTACT_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.contact.result = false;
                draft.contact.data = null;
            }),
        [INITIALIZE]: (state, {payload: form}) => ({
            ...initialState
        }),
    },
    initialState
);
export default member;
