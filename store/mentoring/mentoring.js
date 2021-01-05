import {createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import * as mentoringAPI from '../../lib/api/mentoring/mentoring';
import {HYDRATE} from 'next-redux-wrapper';


const [GET_COUNSEL_FIELD_CODE,GET_COUNSEL_FIELD_CODE_SUCCESS, GET_COUNSEL_FIELD_CODE_FAILURE] = createRequestActionTypes('mentoring/GET_COUNSEL_FIELD_CODE')
const [GET_PROGRESS_ITEM,GET_PROGRESS_ITEM_SUCCESS, GET_PROGRESS_ITEM_FAILURE] = createRequestActionTypes('mentoring/GET_PROGRESS_ITEM')
const [GET_SORTATION_ITEM,GET_SORTATION_ITEM_SUCCESS, GET_SORTATION_ITEM_FAILURE] = createRequestActionTypes('mentoring/GET_SORTATION_ITEM')
const [GET_WAY_ITEM,GET_WAY_ITEM_SUCCESS, GET_WAY_ITEM_FAILURE] = createRequestActionTypes('mentoring/GET_WAY_ITEM')
const [GET_MENTOR,GET_MENTOR_SUCCESS, GET_MENTOR_FAILURE] = createRequestActionTypes('mentoring/GET_MENTOR')
const [GET_MENTOR_LIST,GET_MENTOR_LIST_SUCCESS, GET_MENTOR_LIST_FAILURE] = createRequestActionTypes('mentoring/GET_MENTOR_LIST')
const [APPLY_MENTOR,APPLY_MENTOR_SUCCESS, APPLY_MENTOR_FAILURE] = createRequestActionTypes('mentoring/APPLY_MENTOR')
const [APPLY_COUNSEL,APPLY_COUNSEL_SUCCESS, APPLY_COUNSEL_FAILURE] = createRequestActionTypes('mentoring/APPLY_COUNSEL')
const [GET_COUNSEL_APPLY_LIST,GET_COUNSEL_APPLY_LIST_SUCCESS, GET_COUNSEL_APPLY_LIST_FAILURE] = createRequestActionTypes('mentoring/GET_COUNSEL_APPLY_LIST')

const INITIALIZE = 'mentoring/INITIALIZE';
const INITIALIZE_FORM  = 'mentoring/INITIALIZE_FORM';
const CHANGE_MENTOR_LIST  = 'mentoring/CHANGE_MENTOR_LIST';


export const initializeForm = createAction(INITIALIZE_FORM);
export const initialize = createAction(INITIALIZE);
export const changeMentorList = createAction(CHANGE_MENTOR_LIST);

export const getMentor = createAction(GET_MENTOR);
export const getMentorList = createAction(GET_MENTOR_LIST);
export const applyMentor = createAction(APPLY_MENTOR, form => form);
export const applyCounsel = createAction(APPLY_COUNSEL, form => form);
export const getCounselFieldCode = createAction(GET_COUNSEL_FIELD_CODE);
export const getProgressItem = createAction(GET_PROGRESS_ITEM);
export const getSortationItem = createAction(GET_SORTATION_ITEM);
export const getWayItem = createAction(GET_WAY_ITEM);

export const getCounselApplyList = createAction(GET_COUNSEL_APPLY_LIST,data =>data);



const getMentorSaga = createRequestSaga(GET_MENTOR, mentoringAPI.getMentor);
const getMentorListSaga = createRequestSaga(GET_MENTOR_LIST, mentoringAPI.getMentorList);
const getCounselFieldCodeSaga = createRequestSaga(GET_COUNSEL_FIELD_CODE, mentoringAPI.getCounselFieldCode);
const applyMentorSaga = createRequestSaga(APPLY_MENTOR, mentoringAPI.applyMentor);
const applyCounselSaga = createRequestSaga(APPLY_COUNSEL, mentoringAPI.applyCounsel);

const getProgressItemSaga = createRequestSaga(GET_PROGRESS_ITEM, mentoringAPI.getProgressItem);
const getSortationItemSaga = createRequestSaga(GET_SORTATION_ITEM, mentoringAPI.getSortationItem);
const getWayItemSaga = createRequestSaga(GET_WAY_ITEM, mentoringAPI.getWayItem);

const getCounselApplyListSaga = createRequestSaga(GET_COUNSEL_APPLY_LIST, mentoringAPI.getCounselApplyList);


export function* mentoringSaga(){

    yield takeLatest(GET_COUNSEL_FIELD_CODE, getCounselFieldCodeSaga);
    yield takeLatest(GET_PROGRESS_ITEM, getProgressItemSaga);
    yield takeLatest(GET_SORTATION_ITEM, getSortationItemSaga);
    yield takeLatest(GET_WAY_ITEM, getWayItemSaga);


    yield takeLatest(GET_MENTOR, getMentorSaga);
    yield takeLatest(GET_MENTOR_LIST, getMentorListSaga);

    yield takeLatest(APPLY_MENTOR, applyMentorSaga);
    yield takeLatest(APPLY_COUNSEL, applyCounselSaga);

    yield takeLatest(GET_COUNSEL_APPLY_LIST, getCounselApplyListSaga);

}

const initialState = {
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
    counselApply:{
        result:null,
        error:null
    },
    counselApplyList:{
        result:null,
        list:[],
        page:null
    },
    mentorCheck:{
        result:null,
        code:null,
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
        [GET_MENTOR_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.mentorCheck.result = true
                draft.mentorCheck.code = response.code
            }),
        [GET_MENTOR_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.mentorCheck.result = false
                draft.mentorCheck.code = error.response.data
            }),
        [GET_MENTOR_LIST_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.mentorList.result = true
                draft.mentorList.list = response.data
            }),
        [GET_MENTOR_LIST_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.mentorList.result = false
                draft.mentorList.list = []
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
        [CHANGE_MENTOR_LIST]: (state, {payload: field}) =>
            produce(state, draft => {
                console.log(state)
                draft.mentorList.list = state.mentorList.list.filter((mentor) =>{mentor.mentorFieldList.indexOf(field) > -1})
            }),
    }
    ,
    initialState
);
export default mentoring;
