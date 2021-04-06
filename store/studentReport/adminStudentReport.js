import {createAction, handleActions} from 'redux-actions';
import {enableES5} from "immer"
enableES5()
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import * as adminStudentReportAPI from '../../lib/api/admin/studentReport/studentReport';

const [GET_STUDENT_REPORT,GET_STUDENT_REPORT_SUCCESS, GET_STUDENT_REPORT_FAILURE] = createRequestActionTypes('adminStudentReport/GET_STUDENT_REPORT')
const [GET_STUDENT_REPORT_LIST,GET_STUDENT_REPORT_LIST_SUCCESS, GET_STUDENT_REPORT_LIST_FAILURE] = createRequestActionTypes('adminStudentReport/GET_STUDENT_REPORT_LIST')
const [ADD_STUDENT_REPORT,ADD_STUDENT_REPORT_SUCCESS, ADD_STUDENT_REPORT_FAILURE] = createRequestActionTypes('adminStudentReport/ADD_STUDENT_REPORT')
const [UPDATE_STUDENT_REPORT,UPDATE_STUDENT_REPORT_SUCCESS, UPDATE_STUDENT_REPORT_FAILURE] = createRequestActionTypes('adminStudentReport/UPDATE_STUDENT_REPORT')
const [DELETE_STUDENT_REPORT,DELETE_STUDENT_REPORT_SUCCESS, DELETE_STUDENT_REPORT_FAILURE] = createRequestActionTypes('adminStudentReport/DELETE_STUDENT_REPORT')


const INITIALIZE = 'adminStudentReport/INITIALIZE';
const INITIALIZE_FORM  = 'adminStudentReport/INITIALIZE_FORM';


export const initialize = createAction(INITIALIZE);
export const initializeForm = createAction(INITIALIZE_FORM, from => from);


export const getStudentReport = createAction(GET_STUDENT_REPORT);
export const getStudentReportList = createAction(GET_STUDENT_REPORT_LIST, studentReportInfo => studentReportInfo);
export const addStudentReport = createAction(ADD_STUDENT_REPORT, studentReportInfo => studentReportInfo);
export const updateStudentReport = createAction(UPDATE_STUDENT_REPORT, studentReportInfo => studentReportInfo);
export const deleteStudentReport = createAction(DELETE_STUDENT_REPORT, studentReportId => studentReportId);


const getStudentReportListSaga = createRequestSaga(GET_STUDENT_REPORT_LIST, adminStudentReportAPI.getStudentReportList);
const getStudentReportSaga = createRequestSaga(GET_STUDENT_REPORT, adminStudentReportAPI.getStudentReport);
const addStudentReportSaga = createRequestSaga(ADD_STUDENT_REPORT, adminStudentReportAPI.addStudentReport);
const updateStudentReportSaga = createRequestSaga(UPDATE_STUDENT_REPORT, adminStudentReportAPI.updateStudentReport);
const deleteStudentReportSaga = createRequestSaga(DELETE_STUDENT_REPORT, adminStudentReportAPI.deleteStudentReport);


export function* adminStudentReportSaga(){


    yield takeLatest(ADD_STUDENT_REPORT, addStudentReportSaga);
    yield takeLatest(GET_STUDENT_REPORT, getStudentReportSaga);
    yield takeLatest(GET_STUDENT_REPORT_LIST, getStudentReportListSaga);
    yield takeLatest(UPDATE_STUDENT_REPORT, updateStudentReportSaga);
    yield takeLatest(DELETE_STUDENT_REPORT, deleteStudentReportSaga);

}

const initialState = {

    getStudentReport:null,
    getStudentReportList:{
        list:[],
        page:null
    },
    addStudentReport:{
        result:null,
        error:null
    },
    updateStudentReport:{
        result:null,
        error:null
    },
    deleteStudentReport:{
        result:null,
        error:null
    },
};

const adminStudentReport = handleActions(
    {
        [GET_STUDENT_REPORT_LIST_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.getStudentReportList.list = response.data.list
                draft.getStudentReportList.page = response.data.page
            }),
        [GET_STUDENT_REPORT_LIST_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.getStudentReportList.list = []
                draft.getStudentReportList.page = null
            }),
        [GET_STUDENT_REPORT_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.getStudentReport = response.data
            }),
        [GET_STUDENT_REPORT_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.getStudentReport = null
            }),
        [ADD_STUDENT_REPORT_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.addStudentReport.result = true
                draft.addStudentReport.error = null
            }),
        [ADD_STUDENT_REPORT_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.addStudentReport.result = false
                draft.addStudentReport.error = 'error'
            }),
        [UPDATE_STUDENT_REPORT_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.updateStudentReport.result = true
                draft.updateStudentReport.error = null
            }),
        [UPDATE_STUDENT_REPORT_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.updateStudentReport.result = false
                draft.updateStudentReport.error = 'error'
            }),
        [DELETE_STUDENT_REPORT_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.deleteStudentReport.result = true
                draft.deleteStudentReport.error = null
            }),
        [DELETE_STUDENT_REPORT_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.deleteStudentReport.result = false
                draft.deleteStudentReport.error = 'error'
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
export default adminStudentReport;
