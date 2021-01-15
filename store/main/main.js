import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import * as mainAPI from '../../lib/api/main/main';

const [GET_MAIN_DATA,GET_MAIN_DATA_SUCCESS, GET_MAIN_DATA_FAILURE] = createRequestActionTypes('main/GET_MAIN_DATA')
const INITIALIZE = 'main/INITIALIZE';


// export const selectCompany = createAction(SELECT_COMPANY,(id)=>(id));
export const initialize = createAction(INITIALIZE);
export const getMainData = createAction(GET_MAIN_DATA);

const getMainDataSaga = createRequestSaga(GET_MAIN_DATA, mainAPI.getMainData);

export function* mainSaga(){
    yield takeLatest(GET_MAIN_DATA, getMainDataSaga);
}

const initialState = {
    mainData:{
        result:null,
        notice:[],
        startup_info:[]
    }
    // selectCompany:{
    //     companyId:null,
    //     result:null,
    //     error:null
    // }
};

const main = handleActions(
    {
        [GET_MAIN_DATA_SUCCESS]: (state, {payload: response}) =>
            produce(state,draft => {
                draft.mainData.result = true;
                draft.mainData.notice = response.data.notice;
                draft.mainData.startup_info = response.data.startup_info;
            }),

        [GET_MAIN_DATA_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.mainData.result = false;
                draft.mainData.notice = [];
                draft.mainData.startup_info = [];
            }),
        [INITIALIZE]: (state, {payload: form}) => ({
            ...initialState
        }),
    },
    initialState
);
export default main;
