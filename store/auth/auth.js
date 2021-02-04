import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import * as authAPI from '../../lib/api/auth/auth';
import {HYDRATE} from 'next-redux-wrapper';

const [SOCIAL_LOGIN,SOCIAL_LOGIN_SUCCESS, SOCIAL_LOGIN_FAILURE] = createRequestActionTypes('auth/SOCIAL_LOGIN')
const [NORMAL_LOGIN,NORMAL_LOGIN_SUCCESS, NORMAL_LOGIN_FAILURE] = createRequestActionTypes('auth/NORMAL_LOGIN')
const [SOCIAL_SIGNUP,SOCIAL_SIGNUP_SUCCESS, SOCIAL_SIGNUP_FAILURE] = createRequestActionTypes('auth/SOCIAL_SIGNUP')

const [LOGOUT,LOGOUT_SUCCESS, LOGOUT_FAILURE] = createRequestActionTypes('auth/LOGOUT')
const [SIGNUP,SIGNUP_SUCCESS, SIGNUP_FAILURE] = createRequestActionTypes('auth/SIGNUP')
const [LOGIN,LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN')
const [AUTH_CHECK,AUTH_CHECK_SUCCESS, AUTH_CHECK_FAILURE] = createRequestActionTypes('auth/AUTH_CHECK')
const INITIALIZE = 'auth/INITIALIZE';
const INITIALIZE_FORM  = 'auth/INITIALIZE_FORM';

export const normalLogin = createAction(NORMAL_LOGIN,(loginInfo) => (loginInfo));
export const socialLogin = createAction(SOCIAL_LOGIN,(loginInfo) => (loginInfo));
export const socialSignUp= createAction(SOCIAL_SIGNUP,(signUpInfo) => (signUpInfo));


export const authCheck = createAction(AUTH_CHECK);
export const logout = createAction(LOGOUT);
export const signup = createAction(SIGNUP, (userInfo)=>(userInfo));
export const login = createAction(LOGIN, (loginInfo) => (loginInfo))
export const initialize = createAction(INITIALIZE);
export const initializeForm = createAction(INITIALIZE_FORM, from => from);



const socialLoginSaga = createRequestSaga(SOCIAL_LOGIN, authAPI.socialLogin);
const socialSignUpSaga = createRequestSaga(SOCIAL_SIGNUP, authAPI.socialSignUp);

const normalLoginSaga = createRequestSaga(NORMAL_LOGIN, authAPI.normalLogin);

const logoutSaga = createRequestSaga(LOGOUT, authAPI.logout);
const authCheckSaga = createRequestSaga(AUTH_CHECK, authAPI.authCheck);
const signupSaga = createRequestSaga(SIGNUP, authAPI.signup);
const loginSaga = createRequestSaga(LOGIN, authAPI.socialLogin)

export function* authSaga(){

    yield takeLatest(SOCIAL_LOGIN, socialLoginSaga);
    yield takeLatest(SOCIAL_SIGNUP, socialSignUpSaga);
    yield takeLatest(NORMAL_LOGIN, normalLoginSaga);
    yield takeLatest(AUTH_CHECK, authCheckSaga);
    yield takeLatest(LOGOUT, logoutSaga);
    yield takeLatest(SIGNUP, signupSaga);
    yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
    user:{
        login:null,
        info:null,
        code:null,
        role:null,
        token:null
    },
    signup:{
        result:null,
        error:null
    },
    login:{
        result:null,
        error:null
    },
    loginCode:{
        code:null
    },
    logout:{
        result:null,
    },
    // signup:{
    //     result:null,
    //     error:{
    //         userPassword: null,
    //         userPhone: null,
    //         userName: null,
    //         userId: null
    //     }
    // }
};

const auth = handleActions(
    {
        [SOCIAL_LOGIN_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.user.login = response.code == 200 ? true : false
                draft.user.info = response.data.user != null ? response.data.user : response.data;
                draft.user.role = response.code == 200 && response.data.user.role;
                draft.loginCode.code = response.code;
                draft.login.result = true;
                draft.login.error = null;
            }),
        [NORMAL_LOGIN_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.user.login = false;
                draft.login.result = false;
                draft.login.error = error.response.data;
            }),
        [NORMAL_LOGIN_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.user.login = response.code == 200 ? true : false
                draft.user.info = response.data.user != null ? response.data.user : response.data;
                draft.user.role = response.code == 200 && response.data.user.role;
                draft.loginCode.code = response.code;
                draft.login.result = true;
                draft.login.error = null;
            }),
        [SOCIAL_LOGIN_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.user.login = false;
                draft.login.result = false;
                draft.loginCode.code = error.response.code;
                draft.login.error = error.response.data;
            }),
        [SOCIAL_SIGNUP_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.user.login = response.code == 200 ? true : false
                draft.user.info = response.data.user;
                draft.user.role = response.data.user.role;
                draft.user.code = response.code;
                // draft.user.token = response.data.token;
                draft.signup.result = true;
                draft.signup.error = null;
                // localStorage.setItem('token',response.data.token);
            }),
        [SOCIAL_SIGNUP_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.user.login = false;
                draft.signup.result = false;
                draft.signup.error = error.response.data;
            }),
        [AUTH_CHECK_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.user.login = true
                draft.user.info = response.data;
                draft.user.role = response.data.role;
                // draft.user.code = response.code;
                // localStorage.setItem('token',response.data.token);
            }),
        [AUTH_CHECK_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.user.login = false;
                draft.login.result = false;
                draft.user.role = null;
                draft.login.error = error.response.data;
            }),
        [LOGIN_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.user.login = response.code == 200 ? true : false
                draft.user.info = response.data.user;
                draft.user.role = response.data.user.role;
                draft.loginCode.code = response.code;
                draft.login.result = true;
                draft.login.error = null;
            }),
        [LOGIN_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.user.login = false;
                draft.login.result = false;
                draft.login.error = error.response.data;
            }),
        [LOGOUT_SUCCESS]: (state, {payload: data}) =>
            produce(state, draft => {
                draft.logout.result = true;
                draft.user = initialState.user;
            }),
        [LOGOUT_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.logout.result = false;
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
        [INITIALIZE_FORM]: (state, {payload: form}) => ({
            ...state,
            [form]: initialState[form],
        }),
    }
    ,
    initialState
);
export default auth;
