import client from "../client";
import qs from "query-string";

export const getStudentReport = (studentReportId) =>{
    return client.get(`/student_report/${studentReportId}`);
}

export const getStudentReportList = (studentReportInfo) =>{
    const queryString = qs.stringify(studentReportInfo);
    return client.get(`/student_report/list?${queryString}`);
}
export const addStudentReport = (studentReportInfo) =>{
    return client.post(`/student_report`,studentReportInfo);
}

export const updateStudentReport = (studentReportInfo) =>{
    return client.post(`/student_report/edit`,studentReportInfo);
}
