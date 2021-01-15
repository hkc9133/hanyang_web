import {createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import * as adminMentoringAPI from '../../lib/api/admin/mentoring/mentoring';


const [GET_COUNSEL_FIELD_CODE,GET_COUNSEL_FIELD_CODE_SUCCESS, GET_COUNSEL_FIELD_CODE_FAILURE] = createRequestActionTypes('adminMentoring/GET_COUNSEL_FIELD_CODE')
const [GET_MENTOR,GET_MENTOR_SUCCESS, GET_MENTOR_FAILURE] = createRequestActionTypes('adminMentoring/GET_MENTOR')
const [UPDATE_MENTOR,UPDATE_MENTOR_SUCCESS, UPDATE_MENTOR_FAILURE] = createRequestActionTypes('adminMentoring/UPDATE_MENTOR')
const [GET_MENTOR_LIST,GET_MENTOR_LIST_SUCCESS, GET_MENTOR_LIST_FAILURE] = createRequestActionTypes('adminMentoring/GET_MENTOR_LIST')
const [GET_COUNSEL_APPLY_LIST,GET_COUNSEL_APPLY_LIST_SUCCESS, GET_COUNSEL_APPLY_LIST_FAILURE] = createRequestActionTypes('adminMentoring/GET_COUNSEL_APPLY_LIST')
const [GET_COUNSEL_APPLY,GET_COUNSEL_APPLY_SUCCESS, GET_COUNSEL_APPLY_FAILURE] = createRequestActionTypes('adminMentoring/GET_COUNSEL_APPLY')
const [UPDATE_COUNSEL_APPLY,UPDATE_COUNSEL_APPLY_SUCCESS, UPDATE_COUNSEL_APPLY_FAILURE] = createRequestActionTypes('adminMentoring/UPDATE_COUNSEL_APPLY')

const INITIALIZE = 'adminMentoring/INITIALIZE';
const INITIALIZE_FORM  = 'adminMentoring/INITIALIZE_FORM';


export const initializeForm = createAction(INITIALIZE_FORM);
export const initialize = createAction(INITIALIZE);

export const getMentor = createAction(GET_MENTOR, mentorId=>mentorId);
export const updateMentor = createAction(UPDATE_MENTOR, mentor=>mentor)
export const getMentorList = createAction(GET_MENTOR_LIST, form => form);
export const getCounselFieldCode = createAction(GET_COUNSEL_FIELD_CODE);

export const getCounselApplyList = createAction(GET_COUNSEL_APPLY_LIST,form =>form);
export const getCounselApply = createAction(GET_COUNSEL_APPLY,formId =>formId);
export const updateCounselApply = createAction(UPDATE_COUNSEL_APPLY, apply=>apply)



const getMentorSaga = createRequestSaga(GET_MENTOR, adminMentoringAPI.getMentor);
const updateMentorSaga = createRequestSaga(UPDATE_MENTOR, adminMentoringAPI.updateMentor);
const getMentorListSaga = createRequestSaga(GET_MENTOR_LIST, adminMentoringAPI.getMentorList);
const getCounselFieldCodeSaga = createRequestSaga(GET_COUNSEL_FIELD_CODE, adminMentoringAPI.getCounselFieldCode);


const getCounselApplyListSaga = createRequestSaga(GET_COUNSEL_APPLY_LIST, adminMentoringAPI.getCounselApplyList);
const getCounselApplySaga = createRequestSaga(GET_COUNSEL_APPLY, adminMentoringAPI.getCounselApply);
const updateCounselApplySaga = createRequestSaga(UPDATE_COUNSEL_APPLY, adminMentoringAPI.updateCounselApply);


export function* adminMentoringSaga(){

    yield takeLatest(GET_COUNSEL_FIELD_CODE, getCounselFieldCodeSaga);

    yield takeLatest(GET_MENTOR, getMentorSaga);
    yield takeLatest(UPDATE_MENTOR, updateMentorSaga);
    yield takeLatest(GET_MENTOR_LIST, getMentorListSaga);

    yield takeLatest(GET_COUNSEL_APPLY_LIST, getCounselApplyListSaga);
    yield takeLatest(GET_COUNSEL_APPLY, getCounselApplySaga);
    yield takeLatest(UPDATE_COUNSEL_APPLY, updateCounselApplySaga);


}

const initialState = {
    counselField:{
        result:null,
        list:[]
    },
    mentorList:{
        result:null,
        list:[],
        cate:[],
        page:null
    },
    mentor:{
        result:false,
        mentor:null,
        error:null
    },
    update:{
        result:null,
        error:null

    },
    counselApply:{
        result:false,
        counselApply:null,
        files:[],
        error:null
    },
    counselApplyUpdate:{
        result:null,
        error:null
    },
    counselApplyList:{
        result:null,
        list:[],
        page:null
    },
};

const adminMentoring = handleActions(
    {
        [GET_COUNSEL_FIELD_CODE_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.counselField.result = true
                draft.counselField.list = response.data.map((item =>{return {label:item.fieldName,value:item.fieldId} }))
            }),
        [GET_COUNSEL_FIELD_CODE_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.counselField.result = false
                draft.counselField.list = null
            }),
        [GET_MENTOR_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.mentor.result = true
                draft.mentor.mentor = response.data.mentor
            }),
        [GET_MENTOR_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.mentor.result = false
                draft.mentor.mentor = null
            }),
        [UPDATE_MENTOR_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.update.result = true
                draft.update.error = null
            }),
        [UPDATE_MENTOR_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.update.result = false
                draft.update.error = error.response.data
            }),
        [GET_MENTOR_LIST_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.mentorList.result = true
                draft.mentorList.list = response.data.list
                draft.mentorList.page = response.data.page
                draft.mentorList.cate = response.data.cate
            }),
        [GET_MENTOR_LIST_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.mentorList.result = false
                draft.mentorList.list = []
                draft.mentorList.page = null
                draft.mentorList.cate = []
            }),
        [GET_COUNSEL_APPLY_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.counselApply.result = true
                draft.counselApply.counselApply = response.data.counselApply
                draft.counselApply.files = response.data.files
            }),
        [GET_COUNSEL_APPLY_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.counselApply.result = false
                draft.counselApply.error = error.response.data
                draft.counselApply.files = []
            }),
        [UPDATE_COUNSEL_APPLY_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.counselApplyUpdate.result = true
                draft.counselApplyUpdate.error = null
            }),
        [UPDATE_COUNSEL_APPLY_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.counselApplyUpdate.result = false
                draft.counselApplyUpdate.error = error.response.data
            }),
        [GET_COUNSEL_APPLY_LIST_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.counselApplyList.result = true
                draft.counselApplyList.list = response.data.list
                draft.counselApplyList.page = response.data.page
            }),
        [GET_COUNSEL_APPLY_LIST_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.counselApplyList.result = false
                draft.counselApplyList.list = []
                draft.counselApplyList.page = null
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
export default adminMentoring;
