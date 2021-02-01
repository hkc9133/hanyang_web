import client from '../../client';
import qs from 'query-string';

export const getStudentReport = (studentReportId) =>{
    return client.get(`/admin/student_report/${studentReportId}`);
}

export const getStudentReportList = (studentReportInfo) =>{
    const queryString = qs.stringify(studentReportInfo);
    return client.get(`/admin/student_report/list?${queryString}`);
}

export const updateStudentReport = (studentReportInfo) =>{
    return client.post(`/admin/student_report/edit`,studentReportInfo);
}

export const addStudentReport = (studentReportInfo) =>{
    return client.post(`/admin/student_report`,studentReportInfo);
}

export const deleteStudentReport = (studentReportId) =>{
    return client.delete(`/admin/student_report/${studentReportId}`);
}
