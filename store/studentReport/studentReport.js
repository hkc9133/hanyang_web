import {createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from "../../lib/createRequestSaga";
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import * as studentReportAPI from "../../lib/api/studentReport/studentReport";
import * as adminStudentReportAPI from "../../lib/api/admin/studentReport/studentReport";


const [GET_STUDENT_REPORT,GET_STUDENT_REPORT_SUCCESS, GET_STUDENT_REPORT_FAILURE] = createRequestActionTypes('studentReport/GET_STUDENT_REPORT')
const [GET_STUDENT_REPORT_LIST,GET_STUDENT_REPORT_LIST_SUCCESS, GET_STUDENT_REPORT_LIST_FAILURE] = createRequestActionTypes('studentReport/GET_STUDENT_REPORT_LIST')
const [ADD_STUDENT_REPORT,ADD_STUDENT_REPORT_SUCCESS, ADD_STUDENT_REPORT_FAILURE] = createRequestActionTypes('studentReport/ADD_STUDENT_REPORT')
const [UPDATE_STUDENT_REPORT,UPDATE_STUDENT_REPORT_SUCCESS, UPDATE_STUDENT_REPORT_FAILURE] = createRequestActionTypes('studentReport/UPDATE_STUDENT_REPORT')
const INITIALIZE = 'studentReport/INITIALIZE';


export const initialize = createAction(INITIALIZE);

export const getStudentReport = createAction(GET_STUDENT_REPORT);
export const getStudentReportList = createAction(GET_STUDENT_REPORT_LIST);
export const addStudentReport = createAction(ADD_STUDENT_REPORT, studentReportInfo => studentReportInfo);
export const updateStudentReport = createAction(UPDATE_STUDENT_REPORT, studentReportInfo => studentReportInfo);

const getStudentReportSaga = createRequestSaga(GET_STUDENT_REPORT, studentReportAPI.getStudentReport);
const getStudentReportListSaga = createRequestSaga(GET_STUDENT_REPORT_LIST, studentReportAPI.getStudentReportList);
const addStudentReportSaga = createRequestSaga(ADD_STUDENT_REPORT, studentReportAPI.addStudentReport);
const updateStudentReportSaga = createRequestSaga(UPDATE_STUDENT_REPORT, studentReportAPI.updateStudentReport);

export function* studentReportSaga(){

    yield takeLatest(GET_STUDENT_REPORT, getStudentReportSaga);
    yield takeLatest(GET_STUDENT_REPORT_LIST, getStudentReportListSaga);
    yield takeLatest(ADD_STUDENT_REPORT, addStudentReportSaga);
    yield takeLatest(UPDATE_STUDENT_REPORT, updateStudentReportSaga);

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

};

const studentReport = handleActions(
    {
        [GET_STUDENT_REPORT_SUCCESS]: (state, {payload: response}) =>
            produce(state, draft => {
                draft.getStudentReport = response.data
            }),
        [GET_STUDENT_REPORT_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft.getStudentReport = null
            }),
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
        [INITIALIZE]: (state, {payload: form}) => ({
            ...initialState
        }),
    }
    ,
    initialState
);
export default studentReport;
