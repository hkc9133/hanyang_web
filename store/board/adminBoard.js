import {createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
// import * as boardAPI from '../../lib/api/board/board';
import * as adminBoardAPI from '../../lib/api/admin/board/board';


const [GET_BOARD_LIST,GET_BOARD_LIST_SUCCESS, GET_BOARD_LIST_FAILURE] = createRequestActionTypes('adminBoard/GET_BOARD_LIST')
const [GET_BOARD,GET_BOARD_SUCCESS, GET_BOARD_FAILURE] = createRequestActionTypes('adminBoard/GET_BOARD')
const [UPDATE_BOARD,UPDATE_BOARD_SUCCESS, UPDATE_BOARD_FAILURE] = createRequestActionTypes('adminBoard/UPDATE_BOARD')
const [GET_BOARD_INFO_ALL,GET_BOARD_INFO_ALL_SUCCESS, GET_BOARD_INFO_ALL_FAILURE] = createRequestActionTypes('adminBoard/GET_BOARD_INFO_ALL')
const [GET_BOARD_CONTENT_LIST,GET_BOARD_CONTENT_LIST_SUCCESS, GET_BOARD_CONTENT_LIST_FAILURE] = createRequestActionTypes('adminBoard/GET_BOARD_CONTENT_LIST')

const INITIALIZE = 'adminBoard/INITIALIZE';
const INITIALIZE_FORM  = 'adminBoard/INITIALIZE_FORM';


export const initialize = createAction(INITIALIZE);
export const initializeForm = createAction(INITIALIZE_FORM);
export const getBoardList = createAction(GET_BOARD_LIST,data => data);
export const getBoard = createAction(GET_BOARD,boardName =>boardName);

//카테고리,카테고리 코드 전체
export const getBoardInfoAll = createAction(GET_BOARD_INFO_ALL);

export const updateBoard = createAction(UPDATE_BOARD,board =>board);

export const getBoardContentList = createAction(GET_BOARD_CONTENT_LIST,data =>data);



const getBoardListSaga = createRequestSaga(GET_BOARD_LIST, adminBoardAPI.getBoardList);
const getBoardSaga = createRequestSaga(GET_BOARD, adminBoardAPI.getBoard);
const getBoardInfoAllSaga = createRequestSaga(getBoardInfoAll, adminBoardAPI.getBoardInfoAll);
const updateBoardSaga = createRequestSaga(UPDATE_BOARD, adminBoardAPI.updateBoard);
const getBoardContentListSaga = createRequestSaga(GET_BOARD_CONTENT_LIST, adminBoardAPI.getBoardContentList);

export function* adminBoardSaga(){

    yield takeLatest(GET_BOARD_LIST, getBoardListSaga);
    yield takeLatest(GET_BOARD, getBoardSaga);
    yield takeLatest(GET_BOARD_INFO_ALL, getBoardInfoAllSaga);
    yield takeLatest(UPDATE_BOARD, updateBoardSaga);

    yield takeLatest(GET_BOARD_CONTENT_LIST, getBoardContentListSaga);

}

const initialState = {
    board:{
        result:null,
        list:[],
        page:null,
        board:null,
        category:null,
        categoryCode:null
    },
    update:{
        result:null,
        error:null
    },
    content:{
        result:null,
        list:[],
        page:null
    },
    infoAll:{
        result:null,
        boardList:[],
        categoryList:[],
        categoryCodeList:[]
    },
};

const adminBoard = handleActions(
    {
        [GET_BOARD_LIST_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.board.result = true
                draft.board.list = response.data.list
                draft.board.page = response.data.page
            }),
        [GET_BOARD_LIST_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.board.result = false
                draft.board.list = []
                draft.board.page = []
            }),
        [GET_BOARD_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.board.board = response.data.board
                draft.board.category = response.data.category
                draft.board.categoryCode = response.data.categoryCode
            }),
        [GET_BOARD_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.board.board = null
                draft.board.category = null
                draft.board.categoryCode = null
            }),
        [UPDATE_BOARD_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.update.result = true
                draft.update.error = null
            }),
        [UPDATE_BOARD_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.update.result = false
                draft.update.error = error.response.data
            }),
        [GET_BOARD_CONTENT_LIST_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.content.result = true
                draft.content.list = response.data.list
                draft.content.page = response.data.page
            }),
        [GET_BOARD_CONTENT_LIST_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.content.result = false
                draft.content.list = []
                draft.content.page = null
            }),
        [GET_BOARD_INFO_ALL_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.infoAll.result = true
                draft.infoAll.boardList = response.data.boardList
                draft.infoAll.categoryList = response.data.categoryList
                draft.infoAll.categoryCodeList = response.data.categoryCodeList
            }),
        [GET_BOARD_INFO_ALL_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.infoAll.result = false
                draft.infoAll.boardList = []
                draft.infoAll.categoryList = []
                draft.infoAll.categoryCodeList = []
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
export default adminBoard;
