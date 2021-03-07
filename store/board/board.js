import {createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import * as boardAPI from '../../lib/api/board/board';
// import * as adminBoardAPI from '../../lib/api/admin/board/board';


const [GET_BOARD,GET_BOARD_SUCCESS, GET_BOARD_FAILURE] = createRequestActionTypes('board/GET_BOARD')
const [ADD_BOARD_CONTENT,ADD_BOARD_CONTENT_SUCCESS, ADD_BOARD_CONTENT_FAILURE] = createRequestActionTypes('board/ADD_BOARD_CONTENT')
const [DELETE_BOARD_CONTENT,DELETE_BOARD_CONTENT_SUCCESS, DELETE_BOARD_CONTENT_FAILURE] = createRequestActionTypes('board/DELETE_BOARD_CONTENT')
const [GET_BOARD_CONTENT,GET_BOARD_CONTENT_SUCCESS, GET_BOARD_CONTENT_FAILURE] = createRequestActionTypes('board/GET_BOARD_CONTENT')
const [GET_BOARD_CONTENT_LIST,GET_BOARD_CONTENT_LIST_SUCCESS, GET_BOARD_CONTENT_LIST_FAILURE] = createRequestActionTypes('board/GET_BOARD_CONTENT_LIST')

const [ADD_REPLY,ADD_REPLY_SUCCESS, ADD_REPLY_FAILURE] = createRequestActionTypes('board/ADD_REPLY')
const [UPDATE_REPLY,UPDATE_REPLY_SUCCESS, UPDATE_REPLY_FAILURE] = createRequestActionTypes('board/UPDATE_REPLY')
const [DELETE_REPLY,DELETE_REPLY_SUCCESS, DELETE_REPLY_FAILURE] = createRequestActionTypes('board/DELETE_REPLY')

const INITIALIZE = 'board/INITIALIZE';
const INITIALIZE_FORM  = 'board/INITIALIZE_FORM';


export const initialize = createAction(INITIALIZE);
export const initializeForm = createAction(INITIALIZE_FORM);
export const getBoard = createAction(GET_BOARD,boardName =>boardName);
export const getBoardContent = createAction(GET_BOARD_CONTENT, contentId => contentId);
export const getBoardContentList = createAction(GET_BOARD_CONTENT_LIST,data =>data);
export const addBoardContent = createAction(ADD_BOARD_CONTENT,contentInfo =>contentInfo);
export const deleteBoardContent = createAction(DELETE_BOARD_CONTENT,contentId =>contentId);

export const addReply = createAction(ADD_REPLY,reply =>reply);
export const updateReply = createAction(UPDATE_REPLY,reply =>reply);
export const deleteReply = createAction(DELETE_REPLY,reply =>reply);


const getBoardSaga = createRequestSaga(GET_BOARD, boardAPI.getBoard);
const getBoardContentSaga = createRequestSaga(GET_BOARD_CONTENT, boardAPI.getBoardContent);
const getBoardContentListSaga = createRequestSaga(GET_BOARD_CONTENT_LIST, boardAPI.getBoardContentList);
const addBoardContentSaga = createRequestSaga(ADD_BOARD_CONTENT, boardAPI.addBoardContent);
const deleteBoardContentSaga = createRequestSaga(DELETE_BOARD_CONTENT, boardAPI.deleteBoardContent);

const addReplySaga = createRequestSaga(ADD_REPLY, boardAPI.addReply);
const updateReplySaga = createRequestSaga(UPDATE_REPLY, boardAPI.updateReply);
const deleteReplySaga = createRequestSaga(DELETE_REPLY, boardAPI.deleteReply);


export function* boardSaga(){

    yield takeLatest(GET_BOARD, getBoardSaga);
    yield takeLatest(GET_BOARD_CONTENT, getBoardContentSaga);
    yield takeLatest(GET_BOARD_CONTENT_LIST, getBoardContentListSaga);

    yield takeLatest(ADD_BOARD_CONTENT, addBoardContentSaga);
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
        cate:[],
        categoryCode:null
    },
    add:{
        result:null,
        error:null
    },
    delete:{
        result:null,
        error:null
    },
    view:{
        content:null,
        prev:null,
        next:null,
        files:[]
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
    }
};

const board = handleActions(
    {
        [GET_BOARD_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.board.board = response.data.board
                draft.board.cate = response.data.cate != null ? response.data.cate : []
            }),
        [GET_BOARD_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.board.board = null
                draft.board.cate = []
            }),
        [GET_BOARD_CONTENT_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.view.content = response.data.content
                draft.view.prev = response.data.prev
                draft.view.next = response.data.next
                draft.reply.list = response.data.reply
                draft.view.files = response.data.files
            }),
        [GET_BOARD_CONTENT_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.view.content = null
                draft.view.prev = null
                draft.view.next = null
                draft.reply.list = []
                draft.view.files = []
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
export default board;
