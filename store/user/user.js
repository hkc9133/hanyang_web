import {createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import * as userAPI from '../../lib/api/user/user';


const [GET_USER_LIST,GET_USER_LIST_SUCCESS, GET_USER_LIST_FAILURE] = createRequestActionTypes('user/GET_USER_LIST')

const INITIALIZE = 'user/INITIALIZE';
const INITIALIZE_FORM  = 'user/INITIALIZE_FORM';


export const initialize = createAction(INITIALIZE);
export const initializeForm = createAction(INITIALIZE_FORM);
export const getUserList = createAction(GET_USER_LIST,data => data);



const getUserListSaga = createRequestSaga(GET_USER_LIST, userAPI.getUserList);


export function* userSaga(){

    yield takeLatest(GET_USER_LIST, getUserListSaga);

}

const initialState = {
    user:{
        result:null,
        list:[],
        page:null,

    },
};

const user = handleActions(
    {
        [GET_USER_LIST_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.user.result = true
                draft.user.list = response.data.list
                draft.user.page = response.data.page
            }),
        [GET_USER_LIST_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.user.result = false
                draft.user.list = []
                draft.user.page = []
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
export default user;
