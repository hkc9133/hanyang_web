import {createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import * as spaceRentalAPI from '../../lib/api/spaceRental/spaceRental';
import {HYDRATE} from 'next-redux-wrapper';


const [GET_SPACE_RENTAL_INFO_ALL,GET_SPACE_RENTAL_INFO_ALL_SUCCESS, GET_SPACE_RENTAL_INFO_ALL_FAILURE] = createRequestActionTypes('spaceRental/GET_SPACE_RENTAL_INFO_ALL')
const [GET_AVAILABLE_ROOM_TIME_LIST,GET_AVAILABLE_ROOM_TIME_LIST_SUCCESS, GET_AVAILABLE_ROOM_TIME_LIST_FAILURE] = createRequestActionTypes('spaceRental/GET_AVAILABLE_ROOM_TIME_LIST')

const [ADD_RENTAL_SCHEDULE,ADD_RENTAL_SCHEDULE_SUCCESS, ADD_RENTAL_SCHEDULE_FAILURE] = createRequestActionTypes('spaceRental/ADD_RENTAL_SCHEDULE')
const INITIALIZE = 'spaceRental/INITIALIZE';


export const initialize = createAction(INITIALIZE);

export const getSpaceRentalInfoAll = createAction(GET_SPACE_RENTAL_INFO_ALL);
export const getAvailableRoomTimeList = createAction(GET_AVAILABLE_ROOM_TIME_LIST,(roomId,date) => ({roomId,date}));
export const addRentalSchedule = createAction(ADD_RENTAL_SCHEDULE,scheduleInfo => scheduleInfo);



const getSpaceRentalInfoAllSaga = createRequestSaga(GET_SPACE_RENTAL_INFO_ALL, spaceRentalAPI.getSpaceRentalInfoAll);
const getAvailableRoomTimeListSaga = createRequestSaga(GET_AVAILABLE_ROOM_TIME_LIST, spaceRentalAPI.getAvailableRoomTimeList);

const addRentalScheduleSaga = createRequestSaga(ADD_RENTAL_SCHEDULE, spaceRentalAPI.addRentalSchedule);

export function* spaceRentalSaga(){

    yield takeLatest(GET_SPACE_RENTAL_INFO_ALL, getSpaceRentalInfoAllSaga);
    yield takeLatest(GET_AVAILABLE_ROOM_TIME_LIST, getAvailableRoomTimeListSaga);

    yield takeLatest(ADD_RENTAL_SCHEDULE, addRentalScheduleSaga);

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
    }
};

const spaceRental = handleActions(
    {
        // [HYDRATE]: (state, action) => ({
        //     ...state.spaceRental,
        //     ...action.payload.spaceRental
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

        [INITIALIZE]: (state, {payload: form}) => ({
            ...initialState
        }),
    }
    ,
    initialState
);
export default spaceRental;
