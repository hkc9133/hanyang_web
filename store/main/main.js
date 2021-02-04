import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import * as mainAPI from '../../lib/api/main/main';

const [GET_MAIN_DATA,GET_MAIN_DATA_SUCCESS, GET_MAIN_DATA_FAILURE] = createRequestActionTypes('main/GET_MAIN_DATA')
const [GET_BOARD_SEARCH_LIST,GET_BOARD_SEARCH_LIST_SUCCESS, GET_BOARD_SEARCH_LIST_FAILURE] = createRequestActionTypes('main/GET_BOARD_SEARCH_LIST')
const INITIALIZE = 'main/INITIALIZE';


// export const selectCompany = createAction(SELECT_COMPANY,(id)=>(id));
export const initialize = createAction(INITIALIZE);
export const getMainData = createAction(GET_MAIN_DATA);
export const getBoardSearchList = createAction(GET_BOARD_SEARCH_LIST);

const getMainDataSaga = createRequestSaga(GET_MAIN_DATA, mainAPI.getMainData);
const getBoardSearchListSaga = createRequestSaga(GET_BOARD_SEARCH_LIST, mainAPI.getBoardSearchList);

export function* mainSaga(){
    yield takeLatest(GET_MAIN_DATA, getMainDataSaga);
    yield takeLatest(GET_BOARD_SEARCH_LIST, getBoardSearchListSaga);
}

const initialState = {
    mainData:{
        result:null,
        notice:[],
        startup_info:[],
        popup:[],
        keyword:[],
    },
    boardSearch:{
        list:[],
        page:null,
        cate:[],
        boardList:[]
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
                draft.mainData.popup = response.data.popup;
                draft.mainData.keyword = response.data.keyword;
            }),

        [GET_MAIN_DATA_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.mainData.result = false;
                draft.mainData.notice = [];
                draft.mainData.startup_info = [];
                draft.mainData.popup = [];
                draft.mainData.keyword = [];
            }),
        [GET_BOARD_SEARCH_LIST_SUCCESS]: (state, {payload: response}) =>
            produce(state,draft => {
                draft.boardSearch.list = response.data.list;
                draft.boardSearch.page = response.data.page;
                draft.boardSearch.cate = response.data.cate;
                draft.boardSearch.boardList = response.data.boardList;
            }),

        [GET_BOARD_SEARCH_LIST_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.boardSearch.list = [];
                draft.boardSearch.page = null;
                draft.boardSearch.cate = [];
                draft.boardSearch.boardList = [];
            }),
        [INITIALIZE]: (state, {payload: form}) => ({
            ...initialState
        }),
    },
    initialState
);
export default main;
