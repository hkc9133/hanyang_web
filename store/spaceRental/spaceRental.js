import {createAction, handleActions} from 'redux-actions';
import {enableES5} from "immer"
enableES5()
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import * as spaceRentalAPI from '../../lib/api/spaceRental/spaceRental';
import {HYDRATE} from 'next-redux-wrapper';


const [GET_SPACE_RENTAL_INFO_ALL,GET_SPACE_RENTAL_INFO_ALL_SUCCESS, GET_SPACE_RENTAL_INFO_ALL_FAILURE] = createRequestActionTypes('popup/GET_SPACE_RENTAL_INFO_ALL')
const [GET_AVAILABLE_ROOM_TIME_LIST,GET_AVAILABLE_ROOM_TIME_LIST_SUCCESS, GET_AVAILABLE_ROOM_TIME_LIST_FAILURE] = createRequestActionTypes('popup/GET_AVAILABLE_ROOM_TIME_LIST')

const [ADD_RENTAL_SCHEDULE,ADD_RENTAL_SCHEDULE_SUCCESS, ADD_RENTAL_SCHEDULE_FAILURE] = createRequestActionTypes('popup/ADD_RENTAL_SCHEDULE')
const [UPDATE_RENTAL_SCHEDULE,UPDATE_RENTAL_SCHEDULE_SUCCESS, UPDATE_RENTAL_SCHEDULE_FAILURE] = createRequestActionTypes('popup/UPDATE_RENTAL_SCHEDULE')
const [GET_RENTAL_SCHEDULE_LIST,GET_RENTAL_SCHEDULE_LIST_SUCCESS, GET_RENTAL_SCHEDULE_LIST_FAILURE] = createRequestActionTypes('popup/GET_RENTAL_SCHEDULE_LIST')
const [GET_RENTAL_SCHEDULE,GET_RENTAL_SCHEDULE_SUCCESS, GET_RENTAL_SCHEDULE_FAILURE] = createRequestActionTypes('popup/GET_RENTAL_SCHEDULE')
const INITIALIZE = 'popup/INITIALIZE';


export const initialize = createAction(INITIALIZE);

export const getSpaceRentalInfoAll = createAction(GET_SPACE_RENTAL_INFO_ALL);
export const getAvailableRoomTimeList = createAction(GET_AVAILABLE_ROOM_TIME_LIST,(roomId,date) => ({roomId,date}));
export const addRentalSchedule = createAction(ADD_RENTAL_SCHEDULE,scheduleInfo => scheduleInfo);
export const updateRentalSchedule = createAction(UPDATE_RENTAL_SCHEDULE,schedule => schedule);
export const getRentalScheduleList = createAction(GET_RENTAL_SCHEDULE_LIST,data => data);
export const getRentalSchedule = createAction(GET_RENTAL_SCHEDULE,scheduleId => scheduleId);



const getSpaceRentalInfoAllSaga = createRequestSaga(GET_SPACE_RENTAL_INFO_ALL, spaceRentalAPI.getSpaceRentalInfoAll);
const getAvailableRoomTimeListSaga = createRequestSaga(GET_AVAILABLE_ROOM_TIME_LIST, spaceRentalAPI.getAvailableRoomTimeList);

const addRentalScheduleSaga = createRequestSaga(ADD_RENTAL_SCHEDULE, spaceRentalAPI.addRentalSchedule);
const updateRentalScheduleSaga = createRequestSaga(UPDATE_RENTAL_SCHEDULE, spaceRentalAPI.updateRentalSchedule);
const getRentalScheduleListSaga = createRequestSaga(GET_RENTAL_SCHEDULE_LIST, spaceRentalAPI.getRentalScheduleList);
const getRentalScheduleSaga = createRequestSaga(GET_RENTAL_SCHEDULE, spaceRentalAPI.getRentalSchedule);

export function* spaceRentalSaga(){

    yield takeLatest(GET_SPACE_RENTAL_INFO_ALL, getSpaceRentalInfoAllSaga);
    yield takeLatest(GET_AVAILABLE_ROOM_TIME_LIST, getAvailableRoomTimeListSaga);

    yield takeLatest(ADD_RENTAL_SCHEDULE, addRentalScheduleSaga);
    yield takeLatest(UPDATE_RENTAL_SCHEDULE, updateRentalScheduleSaga);
    yield takeLatest(GET_RENTAL_SCHEDULE_LIST, getRentalScheduleListSaga);
    yield takeLatest(GET_RENTAL_SCHEDULE, getRentalScheduleSaga);

}

const initialState = {
    spaceInfo:{
        place:null,
        room:null,
        time:null
    },
    addSchedule:{
        result:null,
        error:null,
        code:null,
    },
    updateSchedule:{
        result:null,
        error:null
    },
    getRentalScheduleList:{
        list:[],
        page:null
    },
    getRentalSchedule:null
};

const spaceRental = handleActions(
    {
        // [HYDRATE]: (state, action) => ({
        //     ...state.popup,
        //     ...action.payload.popup
        // }),
        [GET_SPACE_RENTAL_INFO_ALL_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.spaceInfo.place = response.data.place
                draft.spaceInfo.room = response.data.room
                draft.spaceInfo.time = null
            }),
        [GET_SPACE_RENTAL_INFO_ALL_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.spaceInfo.place = null
                draft.spaceInfo.room = null
                draft.spaceInfo.time = null
            }),
        [GET_AVAILABLE_ROOM_TIME_LIST_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.spaceInfo.time = response.data
            }),
        [GET_AVAILABLE_ROOM_TIME_LIST_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.spaceInfo.time = null
            }),
        [ADD_RENTAL_SCHEDULE_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.addSchedule.result = true
                draft.addSchedule.error = null
                draft.addSchedule.code = null
            }),
        [ADD_RENTAL_SCHEDULE_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.addSchedule.result = false
                draft.addSchedule.error = error.response.data.data
                draft.addSchedule.code = error.response.data.code
            }),
        [UPDATE_RENTAL_SCHEDULE_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.updateSchedule.result = true
                draft.updateSchedule.error = null
            }),
        [UPDATE_RENTAL_SCHEDULE_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.updateSchedule.result = false
                draft.updateSchedule.error = error.response.data.data
            }),
        [GET_RENTAL_SCHEDULE_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.getRentalSchedule = response.data
            }),
        [GET_RENTAL_SCHEDULE_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.getRentalSchedule = null
            }),
        [GET_RENTAL_SCHEDULE_LIST_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.getRentalScheduleList.list = response.data.list
                draft.getRentalScheduleList.page = response.data.page
            }),
        [GET_RENTAL_SCHEDULE_LIST_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.getRentalScheduleList.list = []
                draft.getRentalScheduleList.page = null
            }),

        [INITIALIZE]: (state, {payload: form}) => ({
            ...initialState
        }),
    }
    ,
    initialState
);
export default spaceRental;
