import {createAction, handleActions} from 'redux-actions';
import {enableES5} from "immer"
enableES5()
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import * as mentoringAPI from '../../lib/api/mentoring/mentoring';
import {HYDRATE} from 'next-redux-wrapper';
import * as adminMentoringAPI from "../../lib/api/admin/mentoring/mentoring";
import client from "../../lib/api/client";


const [GET_COUNSEL_FIELD_CODE,GET_COUNSEL_FIELD_CODE_SUCCESS, GET_COUNSEL_FIELD_CODE_FAILURE] = createRequestActionTypes('mentoring/GET_COUNSEL_FIELD_CODE')
const [GET_PROGRESS_ITEM,GET_PROGRESS_ITEM_SUCCESS, GET_PROGRESS_ITEM_FAILURE] = createRequestActionTypes('mentoring/GET_PROGRESS_ITEM')
const [GET_SORTATION_ITEM,GET_SORTATION_ITEM_SUCCESS, GET_SORTATION_ITEM_FAILURE] = createRequestActionTypes('mentoring/GET_SORTATION_ITEM')
const [GET_WAY_ITEM,GET_WAY_ITEM_SUCCESS, GET_WAY_ITEM_FAILURE] = createRequestActionTypes('mentoring/GET_WAY_ITEM')
const [GET_MENTOR,GET_MENTOR_SUCCESS, GET_MENTOR_FAILURE] = createRequestActionTypes('mentoring/GET_MENTOR')
const [GET_BEST_MENTOR,GET_BEST_MENTOR_SUCCESS, GET_BEST_MENTOR_FAILURE] = createRequestActionTypes('mentoring/GET_BEST_MENTOR')
const [GET_MENTOR_CHECK,GET_MENTOR_CHECK_SUCCESS, GET_MENTOR_CHECK_FAILURE] = createRequestActionTypes('mentoring/GET_MENTOR_CHECK')
const [GET_MENTOR_LIST,GET_MENTOR_LIST_SUCCESS, GET_MENTOR_LIST_FAILURE] = createRequestActionTypes('mentoring/GET_MENTOR_LIST')
const [APPLY_MENTOR,APPLY_MENTOR_SUCCESS, APPLY_MENTOR_FAILURE] = createRequestActionTypes('mentoring/APPLY_MENTOR')
const [UPDATE_MENTOR_PROFILE,UPDATE_MENTOR_PROFILE_SUCCESS, UPDATE_MENTOR_PROFILE_FAILURE] = createRequestActionTypes('mentoring/UPDATE_MENTOR_PROFILE')
const [APPLY_COUNSEL,APPLY_COUNSEL_SUCCESS, APPLY_COUNSEL_FAILURE] = createRequestActionTypes('mentoring/APPLY_COUNSEL')
const [UPDATE_APPLY_COUNSEL,UPDATE_APPLY_COUNSEL_SUCCESS, UPDATE_APPLY_COUNSEL_FAILURE] = createRequestActionTypes('mentoring/UPDATE_APPLY_COUNSEL')
const [GET_COUNSEL_APPLY_LIST,GET_COUNSEL_APPLY_LIST_SUCCESS, GET_COUNSEL_APPLY_LIST_FAILURE] = createRequestActionTypes('mentoring/GET_COUNSEL_APPLY_LIST')
const [GET_COUNSEL_APPLY,GET_COUNSEL_APPLY_SUCCESS, GET_COUNSEL_APPLY_FAILURE] = createRequestActionTypes('mentoring/GET_COUNSEL_APPLY')
const [UPDATE_COUNSEL_APPLY_STATUS,UPDATE_COUNSEL_APPLY_STATUS_SUCCESS, UPDATE_COUNSEL_APPLY_STATUS_FAILURE] = createRequestActionTypes('mentoring/UPDATE_COUNSEL_APPLY_STATUS')
const [GET_MENTOR_COUNSEL_APPLY,GET_MENTOR_COUNSEL_APPLY_SUCCESS, GET_MENTOR_COUNSEL_APPLY_FAILURE] = createRequestActionTypes('mentoring/GET_MENTOR_COUNSEL_APPLY')
const [GET_MENTOR_COUNSEL_APPLY_LIST,GET_MENTOR_COUNSEL_APPLY_LIST_SUCCESS, GET_MENTOR_COUNSEL_APPLY_LIST_FAILURE] = createRequestActionTypes('mentoring/GET_MENTOR_COUNSEL_APPLY_LIST')

const [ADD_DIARY,ADD_DIARY_SUCCESS, ADD_DIARY_FAILURE] = createRequestActionTypes('mentoring/ADD_DIARY')
const [UPDATE_DIARY,UPDATE_DIARY_SUCCESS, UPDATE_DIARY_FAILURE] = createRequestActionTypes('mentoring/UPDATE_DIARY')

const [COMMISSION_DOWNLOAD,COMMISSION_DOWNLOAD_SUCCESS, COMMISSION_DOWNLOAD_FAILURE] = createRequestActionTypes('mentoring/COMMISSION_DOWNLOAD')

const INITIALIZE = 'mentoring/INITIALIZE';
const INITIALIZE_FORM  = 'mentoring/INITIALIZE_FORM';
const CHANGE_MENTOR_LIST  = 'mentoring/CHANGE_MENTOR_LIST';


export const initializeForm = createAction(INITIALIZE_FORM);
export const initialize = createAction(INITIALIZE);
export const changeMentorList = createAction(CHANGE_MENTOR_LIST);

export const getMentor = createAction(GET_MENTOR);
export const getBestMentor = createAction(GET_BEST_MENTOR);
export const getMentorCheck = createAction(GET_MENTOR_CHECK);
export const getMentorList = createAction(GET_MENTOR_LIST, form => form);
export const applyMentor = createAction(APPLY_MENTOR, form => form);
export const updateMentorProfile = createAction(UPDATE_MENTOR_PROFILE, form => form);
export const applyCounsel = createAction(APPLY_COUNSEL, form => form);
export const updateApplyCounsel = createAction(UPDATE_APPLY_COUNSEL, form => form);
export const getCounselFieldCode = createAction(GET_COUNSEL_FIELD_CODE);
export const getProgressItem = createAction(GET_PROGRESS_ITEM);
export const getSortationItem = createAction(GET_SORTATION_ITEM);
export const getWayItem = createAction(GET_WAY_ITEM);

export const getCounselApply = createAction(GET_COUNSEL_APPLY,formId =>formId);
export const updateCounselApplyStatus = createAction(UPDATE_COUNSEL_APPLY_STATUS,form =>form);
export const getMentorCounselApply = createAction(GET_MENTOR_COUNSEL_APPLY,formId =>formId);
export const getCounselApplyList = createAction(GET_COUNSEL_APPLY_LIST,data =>data);
export const getMentorCounselApplyList = createAction(GET_MENTOR_COUNSEL_APPLY_LIST,data =>data);

export const addDiary = createAction(ADD_DIARY,form =>form);
export const updateDiary = createAction(UPDATE_DIARY,form =>form);
export const commissionDownload = createAction(COMMISSION_DOWNLOAD);





const getMentorSaga = createRequestSaga(GET_MENTOR, mentoringAPI.getMentor);
const getBestMentorSaga = createRequestSaga(GET_BEST_MENTOR, mentoringAPI.getBestMentor);
const getMentorCheckSaga = createRequestSaga(GET_MENTOR_CHECK, mentoringAPI.getMentorCheck);
const getMentorListSaga = createRequestSaga(GET_MENTOR_LIST, mentoringAPI.getMentorList);
const getCounselFieldCodeSaga = createRequestSaga(GET_COUNSEL_FIELD_CODE, mentoringAPI.getCounselFieldCode);
const applyMentorSaga = createRequestSaga(APPLY_MENTOR, mentoringAPI.applyMentor);
const updateMentorProfileSaga = createRequestSaga(UPDATE_MENTOR_PROFILE, mentoringAPI.updateMentorProfile);
const applyCounselSaga = createRequestSaga(APPLY_COUNSEL, mentoringAPI.applyCounsel);
const updateApplyCounselSaga = createRequestSaga(UPDATE_APPLY_COUNSEL, mentoringAPI.updateApplyCounsel);


const getProgressItemSaga = createRequestSaga(GET_PROGRESS_ITEM, mentoringAPI.getProgressItem);
const getSortationItemSaga = createRequestSaga(GET_SORTATION_ITEM, mentoringAPI.getSortationItem);
const getWayItemSaga = createRequestSaga(GET_WAY_ITEM, mentoringAPI.getWayItem);


const getCounselApplySaga = createRequestSaga(GET_COUNSEL_APPLY, mentoringAPI.getCounselApply);
const updateCounselApplyStatusSaga = createRequestSaga(UPDATE_COUNSEL_APPLY_STATUS, mentoringAPI.updateCounselApplyStatus);
const getMentorCounselApplySaga = createRequestSaga(GET_MENTOR_COUNSEL_APPLY, mentoringAPI.getMentorCounselApply);
const getCounselApplyListSaga = createRequestSaga(GET_COUNSEL_APPLY_LIST, mentoringAPI.getCounselApplyList);
const getMentorCounselApplyListSaga = createRequestSaga(GET_MENTOR_COUNSEL_APPLY_LIST, mentoringAPI.getMentorCounselApplyList);

const addDiarySaga = createRequestSaga(ADD_DIARY, mentoringAPI.addDiary);
const updateDiarySaga = createRequestSaga(UPDATE_DIARY, mentoringAPI.updateDiary);
// const commissionDownloadSaga = createRequestSaga(COMMISSION_DOWNLOAD, mentoringAPI.commissionDownload);


export function* mentoringSaga(){

    yield takeLatest(GET_COUNSEL_FIELD_CODE, getCounselFieldCodeSaga);
    yield takeLatest(GET_PROGRESS_ITEM, getProgressItemSaga);
    yield takeLatest(GET_SORTATION_ITEM, getSortationItemSaga);
    yield takeLatest(GET_WAY_ITEM, getWayItemSaga);


    yield takeLatest(GET_MENTOR, getMentorSaga);
    yield takeLatest(GET_BEST_MENTOR, getBestMentorSaga);
    yield takeLatest(GET_MENTOR_CHECK, getMentorCheckSaga);
    yield takeLatest(GET_MENTOR_LIST, getMentorListSaga);

    yield takeLatest(APPLY_MENTOR, applyMentorSaga);
    yield takeLatest(UPDATE_MENTOR_PROFILE, updateMentorProfileSaga);
    yield takeLatest(APPLY_COUNSEL, applyCounselSaga);
    yield takeLatest(UPDATE_APPLY_COUNSEL, updateApplyCounselSaga);

    yield takeLatest(GET_COUNSEL_APPLY, getCounselApplySaga);
    yield takeLatest(UPDATE_COUNSEL_APPLY_STATUS, updateCounselApplyStatusSaga);
    yield takeLatest(GET_MENTOR_COUNSEL_APPLY, getMentorCounselApplySaga);
    yield takeLatest(GET_COUNSEL_APPLY_LIST, getCounselApplyListSaga);
    yield takeLatest(GET_MENTOR_COUNSEL_APPLY_LIST, getMentorCounselApplyListSaga);

    yield takeLatest(ADD_DIARY, addDiarySaga);
    yield takeLatest(UPDATE_DIARY, updateDiarySaga);

    // yield takeLatest(COMMISSION_DOWNLOAD, commissionDownloadSaga);



}

const initialState = {
    mentor:null,
    bestMentor:[],
    mentorUpdate:{
        result:null,
        error:null,

    },
    counselField:{
        result:null,
        list:[]
    },
    progressItem:{
        result:null,
        list:[]
    },
    sortationItem:{
        result:null,
        list:[]
    },
    wayItem:{
        result:null,
        list:[]
    },
    mentorList:{
        result:null,
        list:[]
    },
    apply:{
        result:null,
        error:null
    },
    updateCounsel:{
        result:null,
        error:null
    },
    counselApply:{
        result:null,
        error:null
    },
    counselApplyList:{
        result:null,
        list:[],
        page:null
    },
    statusUpdate:{
        result:null
    },
    getCounselApply:{
        result:false,
        counselApply:null,
        files:[],
        answerFiles:[],
        wayItemList:[],
        error:null
    },
    mentorCheck:{
        result:null,
        code:null,
    },
    addDiary:{
        result:null,
        error:null
    },
    updateDiary:{
        result:null,
        error:null
    }
};

const mentoring = handleActions(
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
        [GET_PROGRESS_ITEM_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.progressItem.result = true
                draft.progressItem.list = response.data.map((item =>{return {label:item.item,value:item.itemId} }))
            }),
        [GET_PROGRESS_ITEM_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.progressItem.result = false
                draft.progressItem.list = null
            }),
        [GET_SORTATION_ITEM_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.sortationItem.result = true
                draft.sortationItem.list = response.data.map((item =>{return {label:item.item,value:item.itemId} }))
            }),
        [GET_SORTATION_ITEM_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.sortationItem.result = false
                draft.sortationItem.list = null
            }),
        [GET_WAY_ITEM_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.wayItem.result = true
                draft.wayItem.list = response.data.map((item =>{return {label:item.item,value:item.itemId} }))
            }),
        [GET_WAY_ITEM_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.wayItem.result = false
                draft.wayItem.list = null
            }),
        [APPLY_MENTOR_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.apply.result = true
                draft.apply.error = null
            }),
        [APPLY_MENTOR_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.apply.result = false
                draft.apply.error = error.response.data
            }),
        [UPDATE_MENTOR_PROFILE_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.mentorUpdate.result = true
                draft.mentorUpdate.error = null
            }),
        [UPDATE_MENTOR_PROFILE_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.mentorUpdate.result = false
                draft.mentorUpdate.error = 'error'
            }),
        [APPLY_COUNSEL_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.counselApply.result = true
                draft.counselApply.error = null
            }),
        [APPLY_COUNSEL_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.counselApply.result = false
                draft.counselApply.error = error.response.data
            }),
        [UPDATE_APPLY_COUNSEL_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.updateCounsel.result = true
                draft.updateCounsel.error = null
            }),
        [UPDATE_APPLY_COUNSEL_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.updateCounsel.result = false
                draft.updateCounsel.error = error.response.data
            }),
        [GET_MENTOR_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.mentor = response.data.mentor
            }),
        [GET_MENTOR_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.mentor = null
            }),
        [GET_BEST_MENTOR_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.bestMentor = response.data
            }),
        [GET_BEST_MENTOR_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.bestMentor = []
            }),
        [GET_MENTOR_CHECK_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.mentorCheck.result = true
                draft.mentorCheck.code = response.code
            }),
        [GET_MENTOR_CHECK_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.mentorCheck.result = false
                draft.mentorCheck.code = error.response.data
            }),
        [GET_MENTOR_LIST_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.mentorList.result = true
                draft.mentorList.list = response.data.list
                draft.mentorList.page = response.data.page
            }),
        [GET_MENTOR_LIST_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.mentorList.result = false
                draft.mentorList.list = []
                draft.mentorList.page = null
            }),
        [GET_COUNSEL_APPLY_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.getCounselApply.result = true
                draft.getCounselApply.counselApply = response.data.counselApply
                draft.getCounselApply.wayItemList = response.data.wayItemList
                draft.getCounselApply.files = response.data.files
                draft.getCounselApply.answerFiles = response.data.counselApply.applyStatus == 'COMPLETED' && response.data.answerFiles
            }),
        [GET_COUNSEL_APPLY_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.getCounselApply.result = false
                draft.getCounselApply.counselApply = null
                draft.getCounselApply.wayItemList = []
                draft.getCounselApply.files = []
                draft.getCounselApply.answerFiles = []
                draft.getCounselApply.error = error.response.data
            }),
        [UPDATE_COUNSEL_APPLY_STATUS_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.statusUpdate.result = true
                // draft.getCounselApply.counselApply.applyStatus = response.data
            }),
        [UPDATE_COUNSEL_APPLY_STATUS_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.statusUpdate.result = false
            }),
        [GET_MENTOR_COUNSEL_APPLY_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.getCounselApply.result = true
                draft.getCounselApply.counselApply = response.data.counselApply
                draft.getCounselApply.wayItemList = response.data.wayItemList
                draft.getCounselApply.files = response.data.files
                draft.getCounselApply.answerFiles = response.data.counselApply.applyStatus == 'COMPLETED' && response.data.answerFiles
            }),
        [GET_MENTOR_COUNSEL_APPLY_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.getCounselApply.result = false
                draft.getCounselApply.counselApply = null
                draft.getCounselApply.wayItemList = []
                draft.getCounselApply.files = []
                draft.getCounselApply.answerFiles = []
                draft.getCounselApply.error = error.response.data
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
        [GET_MENTOR_COUNSEL_APPLY_LIST_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.counselApplyList.result = true
                draft.counselApplyList.list = response.data.list
                draft.counselApplyList.page = response.data.page
            }),
        [GET_MENTOR_COUNSEL_APPLY_LIST_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.counselApplyList.result = false
                draft.counselApplyList.list = []
                draft.counselApplyList.page = null
            }),
        [ADD_DIARY_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.addDiary.result = true
                draft.addDiary.error = null
            }),
        [ADD_DIARY_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.addDiary.result = false
                draft.addDiary.error = 'error'
            }),
        [UPDATE_DIARY_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.updateDiary.result = true
                draft.updateDiary.error = null
            }),
        [UPDATE_DIARY_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.updateDiary.result = false
                draft.updateDiary.error = 'error'
            }),
        [INITIALIZE]: (state, {payload: form}) => ({
            ...initialState
        }),
        [INITIALIZE_FORM]: (state, {payload: form}) => ({
            ...state,
            [form]: initialState[form],
        }),
        [CHANGE_MENTOR_LIST]: (state, {payload: field}) =>
            produce(state, draft => {
                console.log(state)
                draft.mentorList.list = state.mentorList.list.filter((mentor) =>{mentor.mentorFieldList.indexOf(field) > -1})
            }),
        [COMMISSION_DOWNLOAD]: (state, {payload: field}) =>
            produce(state, draft => {
                const link = document.createElement('a');
                link.href = `${client.defaults.baseURL}/mentoring/commission`;
                link.click();
                link.remove();
            })
    }
    ,
    initialState
);
export default mentoring;
