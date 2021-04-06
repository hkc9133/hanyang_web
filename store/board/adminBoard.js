import {createAction, handleActions} from 'redux-actions';
import {enableES5} from "immer"
enableES5()
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import * as adminBoardAPI from '../../lib/api/admin/board/board';
import * as boardAPI from "../../lib/api/board/board";


const [GET_BOARD_LIST,GET_BOARD_LIST_SUCCESS, GET_BOARD_LIST_FAILURE] = createRequestActionTypes('adminBoard/GET_BOARD_LIST')
const [GET_BOARD,GET_BOARD_SUCCESS, GET_BOARD_FAILURE] = createRequestActionTypes('adminBoard/GET_BOARD')
const [ADD_BOARD_CONTENT,ADD_BOARD_CONTENT_SUCCESS, ADD_BOARD_CONTENT_FAILURE] = createRequestActionTypes('adminBoard/ADD_BOARD_CONTENT')
const [UPDATE_BOARD_CONTENT,UPDATE_BOARD_CONTENT_SUCCESS, UPDATE_BOARD_CONTENT_FAILURE] = createRequestActionTypes('adminBoard/UPDATE_BOARD_CONTENT')
const [DELETE_BOARD_CONTENT,DELETE_BOARD_CONTENT_SUCCESS, DELETE_BOARD_CONTENT_FAILURE] = createRequestActionTypes('adminBoard/DELETE_BOARD_CONTENT')
const [GET_BOARD_CONTENT,GET_BOARD_CONTENT_SUCCESS, GET_BOARD_CONTENT_FAILURE] = createRequestActionTypes('adminBoard/GET_BOARD_CONTENT')
const [UPDATE_BOARD,UPDATE_BOARD_SUCCESS, UPDATE_BOARD_FAILURE] = createRequestActionTypes('adminBoard/UPDATE_BOARD')
const [GET_BOARD_INFO_ALL,GET_BOARD_INFO_ALL_SUCCESS, GET_BOARD_INFO_ALL_FAILURE] = createRequestActionTypes('adminBoard/GET_BOARD_INFO_ALL')
const [GET_BOARD_CONTENT_LIST,GET_BOARD_CONTENT_LIST_SUCCESS, GET_BOARD_CONTENT_LIST_FAILURE] = createRequestActionTypes('adminBoard/GET_BOARD_CONTENT_LIST')

const [ADD_REPLY,ADD_REPLY_SUCCESS, ADD_REPLY_FAILURE] = createRequestActionTypes('adminBoard/ADD_REPLY')
const [UPDATE_REPLY,UPDATE_REPLY_SUCCESS, UPDATE_REPLY_FAILURE] = createRequestActionTypes('adminBoard/UPDATE_REPLY')
const [DELETE_REPLY,DELETE_REPLY_SUCCESS, DELETE_REPLY_FAILURE] = createRequestActionTypes('adminBoard/DELETE_REPLY')

const INITIALIZE = 'adminBoard/INITIALIZE';
const INITIALIZE_FORM  = 'adminBoard/INITIALIZE_FORM';


export const initialize = createAction(INITIALIZE);
export const initializeForm = createAction(INITIALIZE_FORM);
export const getBoardList = createAction(GET_BOARD_LIST,data => data);
export const getBoard = createAction(GET_BOARD,boardName =>boardName);
export const getBoardContent = createAction(GET_BOARD_CONTENT, contentId => contentId);
export const addBoardContent = createAction(ADD_BOARD_CONTENT,contentInfo =>contentInfo);
export const updateBoardContent = createAction(UPDATE_BOARD_CONTENT,contentInfo =>contentInfo);
export const deleteBoardContent = createAction(DELETE_BOARD_CONTENT,contentId =>contentId);

//카테고리,카테고리 코드 전체
export const getBoardInfoAll = createAction(GET_BOARD_INFO_ALL);

export const updateBoard = createAction(UPDATE_BOARD,board =>board);

export const getBoardContentList = createAction(GET_BOARD_CONTENT_LIST,data =>data);


export const addReply = createAction(ADD_REPLY,reply =>reply);
export const updateReply = createAction(UPDATE_REPLY,reply =>reply);
export const deleteReply = createAction(DELETE_REPLY,reply =>reply);



const getBoardListSaga = createRequestSaga(GET_BOARD_LIST, adminBoardAPI.getBoardList);
const getBoardSaga = createRequestSaga(GET_BOARD, adminBoardAPI.getBoard);
const getBoardInfoAllSaga = createRequestSaga(GET_BOARD_INFO_ALL, adminBoardAPI.getBoardInfoAll);
const updateBoardSaga = createRequestSaga(UPDATE_BOARD, adminBoardAPI.updateBoard);
const getBoardContentListSaga = createRequestSaga(GET_BOARD_CONTENT_LIST, adminBoardAPI.getBoardContentList);
const getBoardContentSaga = createRequestSaga(GET_BOARD_CONTENT, adminBoardAPI.getBoardContent);
const addBoardContentSaga = createRequestSaga(ADD_BOARD_CONTENT, adminBoardAPI.addBoardContent);
const updateBoardContentSaga = createRequestSaga(UPDATE_BOARD_CONTENT, adminBoardAPI.updateBoardContent);
const deleteBoardContentSaga = createRequestSaga(DELETE_BOARD_CONTENT, adminBoardAPI.deleteBoardContent);

const addReplySaga = createRequestSaga(ADD_REPLY, adminBoardAPI.addReply);
const updateReplySaga = createRequestSaga(UPDATE_REPLY, adminBoardAPI.updateReply);
const deleteReplySaga = createRequestSaga(DELETE_REPLY, adminBoardAPI.deleteReply);

export function* adminBoardSaga(){

    yield takeLatest(GET_BOARD_LIST, getBoardListSaga);
    yield takeLatest(GET_BOARD, getBoardSaga);
    yield takeLatest(GET_BOARD_INFO_ALL, getBoardInfoAllSaga);
    yield takeLatest(UPDATE_BOARD, updateBoardSaga);


    yield takeLatest(GET_BOARD_CONTENT, getBoardContentSaga);
    yield takeLatest(GET_BOARD_CONTENT_LIST, getBoardContentListSaga);
    yield takeLatest(ADD_BOARD_CONTENT, addBoardContentSaga);
    yield takeLatest(UPDATE_BOARD_CONTENT, updateBoardContentSaga);
    yield takeLatest(DELETE_BOARD_CONTENT, deleteBoardContentSaga);


    yield takeLatest(ADD_REPLY, addReplySaga);
    yield takeLatest(UPDATE_REPLY, updateReplySaga);
    yield takeLatest(DELETE_REPLY, deleteReplySaga);


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
    add:{
        result:null,
        error:null
    },
    view:{
        content:null,
        prev:null,
        next:null,
        files:[],
        thumb:[]
    },
    update:{
        result:null,
        error:null
    },
    delete:{
        result:null,
        error:null
    },
    content:{
        result:null,
        list:[],
        page:null
    },
    reply:{
        add:{
            result:false
        },
        update:{
            result:false
        },
        delete:{
            result:false
        },
        list:[]
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
        [ADD_BOARD_CONTENT_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.add.result = true
                draft.add.error = null
            }),
        [ADD_BOARD_CONTENT_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.add.result = false
                draft.add.error = error.response.data
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
        [GET_BOARD_CONTENT_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.view.content = response.data.content
                draft.view.prev = response.data.prev
                draft.view.next = response.data.next
                draft.reply.list = response.data.reply
                draft.view.files = response.data.files
                draft.view.thumb = response.data.thumb
            }),
        [GET_BOARD_CONTENT_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.view.content = null
                draft.view.prev = null
                draft.view.next = null
                draft.reply.list = []
                draft.view.files = []
            }),
        [UPDATE_BOARD_CONTENT_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.update.result = true
                draft.update.error = null
            }),
        [UPDATE_BOARD_CONTENT_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.update.result = false
                draft.update.error = error.response.data
            }),
        [DELETE_BOARD_CONTENT_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.delete.result = true
                draft.delete.error = null
            }),
        [DELETE_BOARD_CONTENT_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.delete.result = false
                draft.delete.error = error.response.data
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
        [ADD_REPLY_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.reply.add = true
                draft.reply.list = response.data
            }),
        [ADD_REPLY_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.reply.add = false
                draft.reply.list = error.response.data
            }),
        [UPDATE_REPLY_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.reply.update = true
                draft.reply.list = response.data
            }),
        [UPDATE_REPLY_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.reply.update = false
                draft.reply.list = error.response.data
            }),
        [DELETE_REPLY_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.reply.delete = true
                draft.reply.list = response.data
            }),
        [DELETE_REPLY_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.reply.delete = false
                draft.reply.list = error.response.data
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
