import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import * as commuteAPI from '../../lib/api/commute/commue';

const [GET_COMMUTE_STATUS,GET_COMMUTE_STATUS_SUCCESS, GET_COMMUTE_STATUS_FAILURE] = createRequestActionTypes('commute/GET_COMMUTE_STATUS')
const [WORK_IN,WORK_IN_SUCCESS, WORK_IN_FAILURE] = createRequestActionTypes('commute/WORK_IN')
const [WORK_OUT,WORK_OUT_SUCCESS, WORK_OUT_FAILURE] = createRequestActionTypes('commute/WORK_OUT')
const INITIALIZE = 'commute/INITIALIZE';
const INITIALIZE_FORM = 'commute/INITIALIZE_FORM';


export const getCommuteStatus = createAction(GET_COMMUTE_STATUS);
export const workIn = createAction(WORK_IN,location => location);
export const workOut = createAction(WORK_OUT,location => location);
export const initialize = createAction(INITIALIZE);
export const initializeForm = createAction(INITIALIZE_FORM, from => from);

const getCommuteStatusSaga = createRequestSaga(GET_COMMUTE_STATUS, commuteAPI.getCommuteStatus);
const workInSaga = createRequestSaga(WORK_IN, commuteAPI.workIn);
const workOutSaga = createRequestSaga(WORK_OUT, commuteAPI.workOut);

export function* commuteSaga(){
    yield takeLatest(GET_COMMUTE_STATUS, getCommuteStatusSaga);
    yield takeLatest(WORK_IN, workInSaga);
    yield takeLatest(WORK_OUT, workOutSaga);
}

const initialState = {
    commuteStatus:{
        result:null,
        isWorkIn:null,
        commuteInfo:null
    },
    workIn:{
        result:null
    },
    workOut:{
        result:null
    }
};

const commute = handleActions(
    {
        [GET_COMMUTE_STATUS_SUCCESS]: (state, {payload: response}) =>
            produce(state,draft => {
                draft.commuteStatus.result = true
                draft.commuteStatus.isWorkIn = response.data != null ? true : false
                draft.commuteStatus.commuteInfo = response.data

            }),

        [GET_COMMUTE_STATUS_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.commuteStatus.result = false
                draft.commuteStatus.isWorkIn = false
                draft.commuteStatus.commuteInfo = null

            }),
        [WORK_IN_SUCCESS]: (state, {payload: response}) =>
            produce(state,draft => {
                draft.workIn.result = true
                draft.workOut.result = null
                // draft.commuteStatus.isWorkIn = true
            }),

        [WORK_IN_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.workIn.result = false
                // draft.commuteStatus.isWorkIn = null
            }),
        [WORK_OUT_SUCCESS]: (state, {payload: response}) =>
            produce(state,draft => {
                draft.workOut.result = true
                draft.workIn.result = null
                // draft.commuteStatus.isWorkIn = false
            }),

        [WORK_OUT_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.workOut.result = false
                // draft.commuteStatus.isWorkIn = null

            }),
        [INITIALIZE]: (state, {payload: form}) => ({
            ...initialState
        }),
        [INITIALIZE_FORM]: (state, {payload: form}) => ({
            ...state,
            [form]: initialState[form]
        }),
    },
    initialState
);
export default commute;
