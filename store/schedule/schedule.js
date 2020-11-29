import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import * as scheduleAPI from '../../lib/api/schedule/schedule';

const [GET_SCHEDULE,GET_SCHEDULE_SUCCESS, GET_SCHEDULE_FAILURE] = createRequestActionTypes('schedule/GET_SCHEDULE')
const [GET_RANGE_MEMBER_SCHEDULE,GET_RANGE_MEMBER_SCHEDULE_SUCCESS, GET_RANGE_MEMBER_SCHEDULE_FAILURE] = createRequestActionTypes('schedule/GET_RANGE_MEMBER_SCHEDULE')

const [ADD_SCHEDULE,ADD_SCHEDULE_SUCCESS, ADD_SCHEDULE_FAILURE] = createRequestActionTypes('schedule/ADD_SCHEDULE')
const [GET_MONTH_SCHEDULE,GET_MONTH_SCHEDULE_SUCCESS, GET_MONTH_SCHEDULE_FAILURE] = createRequestActionTypes('schedule/GET_MONTH_SCHEDULE')

// const [WORK_IN,WORK_IN_SUCCESS, WORK_IN_FAILURE] = createRequestActionTypes('schedule/WORK_IN')
// const [WORK_OUT,WORK_OUT_SUCCESS, WORK_OUT_FAILURE] = createRequestActionTypes('schedule/WORK_OUT')
// const INITIALIZE = 'schedule/INITIALIZE';
const INITIALIZE_FORM = 'schedule/INITIALIZE_FORM';


export const getSchedule = createAction(GET_SCHEDULE, day => day);
export const getRangeMemberSchedule = createAction(GET_RANGE_MEMBER_SCHEDULE, date => date);
export const addSchedule = createAction(ADD_SCHEDULE, scheduleInfo => scheduleInfo);
export const getMonthSchedule = createAction(GET_MONTH_SCHEDULE, dateInfo => dateInfo);

// export const workIn = createAction(WORK_IN,location => location);
// export const workOut = createAction(WORK_OUT,location => location);
// export const initialize = createAction(INITIALIZE);
export const initializeForm = createAction(INITIALIZE_FORM, from => from);

const getScheduleSaga = createRequestSaga(GET_SCHEDULE, scheduleAPI.getSchedule);
const getRangeMemberScheduleSaga = createRequestSaga(GET_RANGE_MEMBER_SCHEDULE, scheduleAPI.getRangeMemberSchedule);
const addScheduleSaga = createRequestSaga(ADD_SCHEDULE, scheduleAPI.addSchedule);
const getMonthScheduleSaga = createRequestSaga(GET_MONTH_SCHEDULE, scheduleAPI.getMonthSchedule);

// const workOutSaga = createRequestSaga(WORK_OUT, scheduleAPI.workOut);

export function* scheduleSaga(){
    yield takeLatest(GET_SCHEDULE, getScheduleSaga);
    yield takeLatest(GET_RANGE_MEMBER_SCHEDULE, getRangeMemberScheduleSaga);
    yield takeLatest(ADD_SCHEDULE, addScheduleSaga);
    yield takeLatest(GET_MONTH_SCHEDULE, getMonthScheduleSaga);
}

const initialState = {
    schedule:{
        result:null,
        data:null
    },
    add:{
        result:null,
        data:null,
        code:null
    },
    monthList:{
        result:null,
        data:null
    },
    memberScheduleList:{
        result:null,
        data:null
    }
};

const schedule = handleActions(
    {
        [GET_SCHEDULE_SUCCESS]: (state, {payload: response}) =>
            produce(state,draft => {
                draft.schedule.result = true
                draft.schedule.data = response.data
            }),

        [GET_SCHEDULE_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.schedule.result = false
                draft.schedule.data = null
            }),
        [GET_RANGE_MEMBER_SCHEDULE_SUCCESS]: (state, {payload: response}) =>
            produce(state,draft => {
                draft.memberScheduleList.result = true
                draft.memberScheduleList.data = response.data
            }),

        [GET_RANGE_MEMBER_SCHEDULE_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.memberScheduleList.result = false
                draft.memberScheduleList.data = null
            }),
        [ADD_SCHEDULE_SUCCESS]: (state, {payload: response}) =>
            produce(state,draft => {
                draft.add.result = true
                draft.add.data = response.data
            }),

        [ADD_SCHEDULE_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.add.result = false
                draft.add.data = null
                draft.add.code = error.response.status
            }),
        [GET_MONTH_SCHEDULE_SUCCESS]: (state, {payload: response}) =>
            produce(state,draft => {
                draft.monthList.result = true
                draft.monthList.data = response.data
            }),

        [GET_MONTH_SCHEDULE_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.monthList.result = false
                draft.monthList.data = null
            }),
        [INITIALIZE_FORM]: (state, {payload: form}) => ({
            ...state,
            [form]: initialState[form]
        }),
    },
    initialState
);
export default schedule;
