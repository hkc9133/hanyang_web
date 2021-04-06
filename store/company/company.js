import {createAction, handleActions} from 'redux-actions';
import {enableES5} from "immer"
enableES5()
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import * as companyAPI from '../../lib/api/company/company';

const [GET_COMPANY_LIST,GET_COMPANY_LIST_SUCCESS, GET_COMPANY_LIST_FAILURE] = createRequestActionTypes('company/GET_COMPANY_LIST')
const [CREATE_COMPANY,CREATE_COMPANY_SUCCESS, CREATE_COMPANY_FAILURE] = createRequestActionTypes('company/CREATE_COMPANY')
const [JOIN_COMPANY,JOIN_COMPANY_SUCCESS, JOIN_COMPANY_FAILURE] = createRequestActionTypes('company/JOIN_COMPANY')
const [SELECT_COMPANY,SELECT_COMPANY_SUCCESS, SELECT_COMPANY_FAILURE] = createRequestActionTypes('company/SELECT_COMPANY')
const [UPLOAD_PROFILE_IMAGE,UPLOAD_PROFILE_IMAGE_SUCCESS, UPLOAD_PROFILE_IMAGE_FAILURE] = createRequestActionTypes('company/UPLOAD_PROFILE_IMAGE')
const INITIALIZE = 'company/INITIALIZE';
const INITIALIZE_COMPANY = 'company/INITIALIZE_COMPANY';
const INITIALIZE_UPLOAD_RESULT = 'company/INITIALIZE_UPLOAD_RESULT';
const SETTING_COMPANY = 'company/SETTING_COMPANY';


export const getCompanyList = createAction(GET_COMPANY_LIST);
export const joinCompany = createAction(JOIN_COMPANY,(joinCode)=> (joinCode));
export const createCompany = createAction(CREATE_COMPANY,(companyName)=> (companyName));
export const selectCompany = createAction(SELECT_COMPANY,(id)=>(id));
export const initialize = createAction(INITIALIZE);
export const initializeCompany = createAction(INITIALIZE_COMPANY);
export const initializeUploadResult = createAction(INITIALIZE_UPLOAD_RESULT);
export const settingCompany = createAction(SETTING_COMPANY, (companyId)=>(companyId));
export const uploadProfileImage = createAction(UPLOAD_PROFILE_IMAGE, (fileInfo)=>(fileInfo));

const joinCompanyListSaga = createRequestSaga(JOIN_COMPANY, companyAPI.joinCompany);
const getCompanyListSaga = createRequestSaga(GET_COMPANY_LIST, companyAPI.getCompanyList);
const createCompanySaga = createRequestSaga(CREATE_COMPANY, companyAPI.createCompany);
const selectCompanySaga = createRequestSaga(SELECT_COMPANY, companyAPI.selectCompany);
const uploadProfileImageSaga = createRequestSaga(UPLOAD_PROFILE_IMAGE, companyAPI.uploadProfileImage);

export function* companySaga(){
    yield takeLatest(JOIN_COMPANY, joinCompanyListSaga);
    yield takeLatest(CREATE_COMPANY, createCompanySaga);
    yield takeLatest(GET_COMPANY_LIST, getCompanyListSaga);
    yield takeLatest(SELECT_COMPANY, selectCompanySaga);
    yield takeLatest(UPLOAD_PROFILE_IMAGE, uploadProfileImageSaga);

}

const initialState = {
    myInfo:{
        memberName:null,
        memberRole:null,
        memberPhone:null,
        profileImage:{
            result:null,
            image:null,
        }
    },
    company:{
        list:null,
        error:null
    },
    selectCompany:{
        companyId:null,
        result:null,
        error:null
    },
    create:{
        result:null
    },
    join:{
        result:null,
        error:null
    }
};

const company = handleActions(
    {
        [GET_COMPANY_LIST_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.company.list = response.data;
                draft.company.error = false;
            }),

        [GET_COMPANY_LIST_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.company.list = null;
                draft.company.error = error.response.data.data;
            }),
        [CREATE_COMPANY_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.create.result = true;
            }),
        [CREATE_COMPANY_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.create.result = false;
            }),
        [JOIN_COMPANY_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.join.result = true;
                draft.join.error = null;
            }),
        [JOIN_COMPANY_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.join.result = false;
                draft.join.error = error.response.data.message;
            }),
        [SELECT_COMPANY_SUCCESS]: (state, {payload: response}) =>
            produce(state,draft => {
                draft.selectCompany.companyId = response.data.companyId;
                draft.myInfo.memberName = response.data.memberInfo.memberName;
                draft.myInfo.memberRole = response.data.memberInfo.memberRole;
                draft.myInfo.memberPhone = response.data.memberInfo.memberPhone;
                // draft.myInfo.profileImage.result = true;
                draft.myInfo.profileImage.image = response.data.memberInfo.profileImage;
                draft.selectCompany.result = true;
                draft.selectCompany.error = false;
            }),

        [SELECT_COMPANY_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.myInfo = initialState.myInfo;
                draft.selectCompany.result = false;
                draft.selectCompany.error = error.response.data;
            }),
        [UPLOAD_PROFILE_IMAGE_SUCCESS]: (state, {payload: response}) =>
            produce(state,draft => {
                draft.myInfo.profileImage.result = true;
                draft.myInfo.profileImage.image = response.data;
            }),

        [UPLOAD_PROFILE_IMAGE_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.myInfo.profileImage.result = false;
                draft.myInfo.profileImage.image = myInfo.profileImage.image != null ? myInfo.profileImage.image : null;
            }),
        [SETTING_COMPANY]: (state, {payload: id}) =>
            produce(state, draft => {
                draft.selectCompany.companyId = id;
                draft.selectCompany.result = true;
            }),
        [INITIALIZE_COMPANY]: (state, {payload: form}) =>
            produce(state, draft => {
                draft.selectCompany.companyId = initialState.selectCompany.companyId;
                draft.selectCompany.result = initialState.selectCompany.result;
                draft.selectCompany.error = initialState.selectCompany.error;
            }),
        [INITIALIZE_UPLOAD_RESULT]: (state, {payload: form}) =>
            produce(state, draft => {
                draft.myInfo.profileImage.result = null;
            }),
        [INITIALIZE]: (state, {payload: form}) => ({
            ...initialState
        }),
    }
    ,
    initialState
);
export default company;
