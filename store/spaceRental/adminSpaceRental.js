import {createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import * as adminSpaceRentalAPI from '../../lib/api/admin/spaceRental/spaceRental';

const [GET_STATUS_COUNT,GET_STATUS_COUNT_SUCCESS, GET_STATUS_COUNT_FAILURE] = createRequestActionTypes('adminPopup/GET_STATUS_COUNT')



const [GET_PLACE,GET_PLACE_SUCCESS, GET_PLACE_FAILURE] = createRequestActionTypes('adminPopup/GET_PLACE')
const [ADD_PLACE,ADD_PLACE_SUCCESS, ADD_PLACE_FAILURE] = createRequestActionTypes('adminPopup/ADD_PLACE')
const [UPDATE_PLACE,UPDATE_PLACE_SUCCESS, UPDATE_PLACE_FAILURE] = createRequestActionTypes('adminPopup/UPDATE_PLACE')
const [DELETE_PLACE,DELETE_PLACE_SUCCESS, DELETE_PLACE_FAILURE] = createRequestActionTypes('adminPopup/DELETE_PLACE')

const [GET_ROOM,GET_ROOM_SUCCESS, GET_ROOM_FAILURE] = createRequestActionTypes('adminPopup/GET_ROOM')
const [ADD_ROOM,ADD_ROOM_SUCCESS, ADD_ROOM_FAILURE] = createRequestActionTypes('adminPopup/ADD_ROOM')
const [UPDATE_ROOM,UPDATE_ROOM_SUCCESS, UPDATE_ROOM_FAILURE] = createRequestActionTypes('adminPopup/UPDATE_ROOM')
const [DELETE_ROOM,DELETE_ROOM_SUCCESS, DELETE_ROOM_FAILURE] = createRequestActionTypes('adminPopup/DELETE_ROOM')

const [GET_RENTAL_SCHEDULE_LIST,GET_RENTAL_SCHEDULE_LIST_SUCCESS, GET_RENTAL_SCHEDULE_LIST_FAILURE] = createRequestActionTypes('adminPopup/GET_RENTAL_SCHEDULE_LIST')
const [UPDATE_RENTAL_SCHEDULE,UPDATE_RENTAL_SCHEDULE_SUCCESS, UPDATE_RENTAL_SCHEDULE_FAILURE] = createRequestActionTypes('adminPopup/UPDATE_RENTAL_SCHEDULE')

const [GET_PLACE_INFO_ALL,GET_PLACE_INFO_ALL_SUCCESS, GET_PLACE_INFO_ALL_FAILURE] = createRequestActionTypes('adminPopup/GET_PLACE_INFO_ALL')
const INITIALIZE = 'adminPopup/INITIALIZE';
const INITIALIZE_FORM  = 'adminPopup/INITIALIZE_FORM';


export const initialize = createAction(INITIALIZE);
export const initializeForm = createAction(INITIALIZE_FORM, from => from);

export const getStatusCount = createAction(GET_STATUS_COUNT);

export const getPlace = createAction(GET_PLACE);
export const addPlace = createAction(ADD_PLACE, placeInfo => placeInfo);
export const updatePlace = createAction(UPDATE_PLACE, placeInfo => placeInfo);
export const deletePlace = createAction(DELETE_PLACE, placeId => placeId);

export const getRoom = createAction(GET_ROOM);
export const addRoom = createAction(ADD_ROOM, roomInfo => roomInfo);
export const updateRoom = createAction(UPDATE_ROOM, roomInfo => roomInfo);
export const deleteRoom = createAction(DELETE_ROOM, roomId => roomId);


export const getRentalScheduleList = createAction(GET_RENTAL_SCHEDULE_LIST,data => data);
export const updateRentalSchedule = createAction(UPDATE_RENTAL_SCHEDULE,data => data);

export const getPlaceInfoAll = createAction(GET_PLACE_INFO_ALL);

const getStatusCountSaga = createRequestSaga(GET_STATUS_COUNT, adminSpaceRentalAPI.getStatusCount);

const getPlaceSaga = createRequestSaga(GET_PLACE, adminSpaceRentalAPI.getPlace);
const addPlaceSaga = createRequestSaga(ADD_PLACE, adminSpaceRentalAPI.addPlace);
const updatePlaceSaga = createRequestSaga(UPDATE_PLACE, adminSpaceRentalAPI.updatePlace);
const deletePlaceSaga = createRequestSaga(DELETE_PLACE, adminSpaceRentalAPI.deletePlace);

const getRoomSaga = createRequestSaga(GET_ROOM, adminSpaceRentalAPI.getRoom);
const addRoomSaga = createRequestSaga(ADD_ROOM, adminSpaceRentalAPI.addRoom);
const updateRoomSaga = createRequestSaga(UPDATE_ROOM, adminSpaceRentalAPI.updateRoom);
const deleteRoomSaga = createRequestSaga(DELETE_ROOM, adminSpaceRentalAPI.deleteRoom);


const getRentalScheduleListSaga = createRequestSaga(GET_RENTAL_SCHEDULE_LIST, adminSpaceRentalAPI.getRentalScheduleList);
const updateRentalScheduleSaga = createRequestSaga(UPDATE_RENTAL_SCHEDULE, adminSpaceRentalAPI.updateRentalSchedule);


const getPlaceInfoAllSaga = createRequestSaga(GET_PLACE_INFO_ALL, adminSpaceRentalAPI.getPlaceInfoAll);

export function* adminSpaceRentalSaga(){


    yield takeLatest(GET_STATUS_COUNT, getStatusCountSaga);

    yield takeLatest(ADD_PLACE, addPlaceSaga);
    yield takeLatest(GET_PLACE, getPlaceSaga);
    yield takeLatest(UPDATE_PLACE, updatePlaceSaga);
    yield takeLatest(DELETE_PLACE, deletePlaceSaga);

    yield takeLatest(ADD_ROOM, addRoomSaga);
    yield takeLatest(GET_ROOM, getRoomSaga);
    yield takeLatest(UPDATE_ROOM, updateRoomSaga);
    yield takeLatest(DELETE_ROOM, deleteRoomSaga);

    yield takeLatest(GET_RENTAL_SCHEDULE_LIST, getRentalScheduleListSaga);
    yield takeLatest(UPDATE_RENTAL_SCHEDULE, updateRentalScheduleSaga);



    yield takeLatest(GET_PLACE_INFO_ALL, getPlaceInfoAllSaga);

}

const initialState = {
    all:[],
    getStatusCount:null,
    getPlace:null,
    addPlace:{
        result:null,
        error:null
    },
    updatePlace:{
        result:null,
        error:null
    },
    deletePlace:{
        result:null,
        error:null
    },
    getRoom:null,
    addRoom:{
        result:null,
        error:null
    },
    updateRoom:{
        result:null,
        error:null
    },
    deleteRoom:{
        result:null,
        error:null
    },
    getRentalScheduleList:{
        list:[],
        page:null
    },
    updateScheduleStatus:null
};

const adminSpaceRental = handleActions(
    {
        [GET_STATUS_COUNT_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.getStatusCount = response.data
            }),
        [GET_STATUS_COUNT_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.getStatusCount = null
            }),
        [GET_PLACE_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.getPlace = response.data
            }),
        [GET_PLACE_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.getPlace = null
            }),
        [ADD_PLACE_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.addPlace.result = true
                draft.addPlace.error = null
            }),
        [ADD_PLACE_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.addPlace.result = false
                draft.addPlace.error = 'error'
            }),
        [UPDATE_PLACE_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.updatePlace.result = true
                draft.updatePlace.error = null
            }),
        [UPDATE_PLACE_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.updatePlace.result = false
                draft.updatePlace.error = 'error'
            }),
        [DELETE_PLACE_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.deletePlace.result = true
                draft.deletePlace.error = null
            }),
        [DELETE_PLACE_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.deletePlace.result = false
                draft.deletePlace.error = 'error'
            }),

        [GET_ROOM_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.getRoom = response.data
            }),
        [GET_ROOM_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.getRoom = null
            }),
        [ADD_ROOM_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.addRoom.result = true
                draft.addRoom.error = null
            }),
        [ADD_ROOM_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.addRoom.result = false
                draft.addRoom.error = 'error'
            }),
        [UPDATE_ROOM_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.updateRoom.result = true
                draft.updateRoom.error = null
            }),
        [UPDATE_ROOM_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.updateRoom.result = false
                draft.updateRoom.error = 'error'
            }),
        [DELETE_ROOM_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.deleteRoom.result = true
                draft.deleteRoom.error = null
            }),
        [DELETE_ROOM_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.deleteRoom.result = false
                draft.deleteRoom.error = 'error'
            }),


        [GET_PLACE_INFO_ALL_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.all = response.data
            }),
        [GET_PLACE_INFO_ALL_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.all = null
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
        [UPDATE_RENTAL_SCHEDULE_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.updateScheduleStatus = true
            }),
        [UPDATE_RENTAL_SCHEDULE_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.updateScheduleStatus = false
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
export default adminSpaceRental;
