import {createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import * as adminSpaceRentalAPI from '../../lib/api/admin/spaceRental/spaceRental';

const [GET_PLACE,GET_PLACE_SUCCESS, GET_PLACE_FAILURE] = createRequestActionTypes('adminSpaceRental/GET_PLACE')
const [ADD_PLACE,ADD_PLACE_SUCCESS, ADD_PLACE_FAILURE] = createRequestActionTypes('adminSpaceRental/ADD_PLACE')
const [UPDATE_PLACE,UPDATE_PLACE_SUCCESS, UPDATE_PLACE_FAILURE] = createRequestActionTypes('adminSpaceRental/UPDATE_PLACE')
const [DELETE_PLACE,DELETE_PLACE_SUCCESS, DELETE_PLACE_FAILURE] = createRequestActionTypes('adminSpaceRental/DELETE_PLACE')

const [GET_ROOM,GET_ROOM_SUCCESS, GET_ROOM_FAILURE] = createRequestActionTypes('adminSpaceRental/GET_ROOM')
const [ADD_ROOM,ADD_ROOM_SUCCESS, ADD_ROOM_FAILURE] = createRequestActionTypes('adminSpaceRental/ADD_ROOM')
const [UPDATE_ROOM,UPDATE_ROOM_SUCCESS, UPDATE_ROOM_FAILURE] = createRequestActionTypes('adminSpaceRental/UPDATE_ROOM')
const [DELETE_ROOM,DELETE_ROOM_SUCCESS, DELETE_ROOM_FAILURE] = createRequestActionTypes('adminSpaceRental/DELETE_ROOM')

const [GET_RENTAL_SCHEDULE_LIST,GET_RENTAL_SCHEDULE_LIST_SUCCESS, GET_RENTAL_SCHEDULE_LIST_FAILURE] = createRequestActionTypes('adminSpaceRental/GET_RENTAL_SCHEDULE_LIST')

const [GET_PLACE_INFO_ALL,GET_PLACE_INFO_ALL_SUCCESS, GET_PLACE_INFO_ALL_FAILURE] = createRequestActionTypes('adminSpaceRental/GET_PLACE_INFO_ALL')
const INITIALIZE = 'adminSpaceRental/INITIALIZE';


export const initialize = createAction(INITIALIZE);

export const getPlace = createAction(GET_PLACE);
export const addPlace = createAction(ADD_PLACE, placeInfo => placeInfo);
export const updatePlace = createAction(UPDATE_PLACE, placeInfo => placeInfo);
export const deletePlace = createAction(DELETE_PLACE, placeId => placeId);

export const getRoom = createAction(GET_ROOM);
export const addRoom = createAction(ADD_ROOM, roomInfo => roomInfo);
export const updateRoom = createAction(UPDATE_ROOM, roomInfo => roomInfo);
export const deleteRoom = createAction(DELETE_ROOM, roomId => roomId);


export const getRentalScheduleList = createAction(GET_RENTAL_SCHEDULE_LIST,data => data);

export const getPlaceInfoAll = createAction(GET_PLACE_INFO_ALL);


const getPlaceSaga = createRequestSaga(GET_PLACE, adminSpaceRentalAPI.getPlace);
const addPlaceSaga = createRequestSaga(ADD_PLACE, adminSpaceRentalAPI.addPlace);
const updatePlaceSaga = createRequestSaga(UPDATE_PLACE, adminSpaceRentalAPI.updatePlace);
const deletePlaceSaga = createRequestSaga(DELETE_PLACE, adminSpaceRentalAPI.deletePlace);

const getRoomSaga = createRequestSaga(GET_ROOM, adminSpaceRentalAPI.getRoom);
const addRoomSaga = createRequestSaga(ADD_ROOM, adminSpaceRentalAPI.addRoom);
const updateRoomSaga = createRequestSaga(UPDATE_ROOM, adminSpaceRentalAPI.updateRoom);
const deleteRoomSaga = createRequestSaga(DELETE_ROOM, adminSpaceRentalAPI.deleteRoom);


const getRentalScheduleListSaga = createRequestSaga(GET_RENTAL_SCHEDULE_LIST, adminSpaceRentalAPI.getRentalScheduleList);


const getPlaceInfoAllSaga = createRequestSaga(GET_PLACE_INFO_ALL, adminSpaceRentalAPI.getPlaceInfoAll);

export function* adminSpaceRentalSaga(){

    yield takeLatest(ADD_PLACE, addPlaceSaga);
    yield takeLatest(GET_PLACE, getPlaceSaga);
    yield takeLatest(UPDATE_PLACE, updatePlaceSaga);
    yield takeLatest(DELETE_PLACE, deletePlaceSaga);

    yield takeLatest(ADD_ROOM, addRoomSaga);
    yield takeLatest(GET_ROOM, getRoomSaga);
    yield takeLatest(UPDATE_ROOM, updateRoomSaga);
    yield takeLatest(DELETE_ROOM, deleteRoomSaga);

    yield takeLatest(GET_RENTAL_SCHEDULE_LIST, getRentalScheduleListSaga);


    yield takeLatest(GET_PLACE_INFO_ALL, getPlaceInfoAllSaga);

}

const initialState = {
    all:[],
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
};

const adminSpaceRental = handleActions(
    {
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

        [INITIALIZE]: (state, {payload: form}) => ({
            ...initialState
        }),
    }
    ,
    initialState
);
export default adminSpaceRental;
