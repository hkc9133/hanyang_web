import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import * as authAPI from '../../lib/api/auth/auth';
import {HYDRATE} from 'next-redux-wrapper';

const [LOGOUT,LOGOUT_SUCCESS, LOGOUT_FAILURE] = createRequestActionTypes('auth/LOGOUT')
const [SIGNUP,SIGNUP_SUCCESS, SIGNUP_FAILURE] = createRequestActionTypes('auth/SIGNUP')
const [LOGIN,LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN')
const [AUTH_CHECK,AUTH_CHECK_SUCCESS, AUTH_CHECK_FAILURE] = createRequestActionTypes('auth/AUTH_CHECK')
const INITIALIZE = 'auth/INITIALIZE';


export const logout = createAction(LOGOUT);
export const authCheck = createAction(AUTH_CHECK);
export const signup = createAction(SIGNUP, (userInfo)=>(userInfo));
export const login = createAction(LOGIN, (loginInfo) => (loginInfo))
export const initialize = createAction(INITIALIZE);

const logoutSaga = createRequestSaga(LOGOUT, authAPI.logout);
const authCheckSaga = createRequestSaga(AUTH_CHECK, authAPI.authCheck);
const signupSaga = createRequestSaga(SIGNUP, authAPI.signup);
const loginSaga = createRequestSaga(LOGIN, authAPI.login)

export function* authSaga(){
    yield takeLatest(AUTH_CHECK, authCheckSaga);
    yield takeLatest(LOGOUT, logoutSaga);
    yield takeLatest(SIGNUP, signupSaga);
    yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
    user:{
        login:null,
    },
    login:{
        result:null,
        error:null
    },
    logOut:{
        result:null,
    },
    signup:{
        result:null,
        error:{
            userPassword: null,
            userPhone: null,
            userName: null,
            userId: null
        }
    }
};

const auth = handleActions(
    {
        [HYDRATE]: (state, action) => ({
             ...state.auth,
            ...action.payload.auth
        }),
        [AUTH_CHECK_SUCCESS]: (state, {payload: data}) =>
            produce(state, draft => {
                draft.user.login = true;
            }),
        [AUTH_CHECK_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.user.login = true
                // AsyncStorage.clear()
            }),
        [LOGIN_SUCCESS]: (state, {payload: data}) =>
            produce(state, draft => {
                draft.user.login = true;
                draft.login.result = true;
                draft.login.error = null;
                // AsyncStorage.setItem('userToken', data.data);
            }),

        [LOGIN_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.user.login = false;
                draft.login.result = false;
                draft.login.error = error.response.data;
                // AsyncStorage.clear()
            }),
        [LOGOUT_SUCCESS]: (state, {payload: data}) =>
            produce(state, draft => {
                draft.logOut.result = true;
            }),
        [LOGOUT_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.logOut.result = false;
                // AsyncStorage.clear()
            }),
        [SIGNUP_SUCCESS]: (state, {payload: data}) =>
            produce(state, draft => {
                draft.signup.result = true;
                draft.signup.error = true;
            }),

        [SIGNUP_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.signup.result = false;
                draft.signup.error = error.response.data.data;
            }),
        [INITIALIZE]: (state, {payload: form}) => ({
            ...initialState
        }),
    }
    ,
    initialState
);
export default auth;
