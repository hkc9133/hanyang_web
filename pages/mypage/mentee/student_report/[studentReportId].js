import React, {useCallback, useEffect, useState} from 'react';
import PageNavigation from "../../../../component/layout/PageNavigation";
import {Checkbox, DatePicker, Form, Input, Modal} from "antd";
import locale from "antd/lib/date-picker/locale/ko_KR";
import styles from '../../../../public/assets/styles/startup_info/startup_info.module.css';
import classnames from "classnames/bind"
import {
    addStudentReport,
    getStudentReport,
    initialize,
    updateStudentReport
} from "../../../../store/studentReport/studentReport";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import moment from "moment";
const cx = classnames.bind(styles);


const StudentReportEditPage = () =>{

    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const router = useRouter();

    const [reportForm, setReportForm] = useState({
        studentName: "",
        studentAttach:"",
        studentClassYear:"",
        studentPhoneNum: "",
        studentEmail: "",
        companyNum:"",
        companyName:"",
        companyOwner:"",
        companyKind:"",
        createDate:"",
        businessItem:"",
        sales:0,
        staffNum:0,
        isAgree: false,
    })

    const {report,update} = useSelector(({studentReport, loading}) => ({
        update: studentReport.updateStudentReport,
        report: studentReport.getStudentReport,
    }))


    useEffect(() =>{
        dispatch(getStudentReport(router.query.studentReportId))
        return () =>{
            dispatch(initialize())
        }

    },[])

    useEffect(() => {

        if (report != null) {
            setReportForm({
                ...reportForm,
                ...report,
                createDate:moment(report.createDate,'YYYY-MM-DD')
            })
        }

    }, [report])

    const changeReportFormValue = useCallback((e) =>{
        const {name, value} = e.target


        setReportForm(reportForm =>({
            ...reportForm,
            [name]: value,

        }))

    },[])



    const submitApply = (e) => {
        const data = {
            ...reportForm,
            createDate:reportForm.createDate.format("YYYY-MM-DD").toString()
        }

        dispatch(updateStudentReport(data))
    }

    useEffect(() =>{

        if(update.result != null){
            if(update.result && update.error == null){
                Modal.success({
                    title: '수정이 완료되었습니다',
                    onOk:() =>{router.push("/mypage/mentee/student_report")}
                });
            }else{
                Modal.warning({
                    title: '작성 중 에러가 발생하였습니다'
                });
            }
        }
    },[update])


    return (
        <>
            {report != null && (
                <section className={cx("container")}>
                    <Form form={form} onFinish={(e) =>{submitApply(e)}} onFinishFailed={(e) =>{}}
                          initialValues={{
                              studentName: report.studentName,
                              studentAttach:report.studentAttach,
                              studentClassYear:report.studentClassYear,
                              studentPhoneNum: report.studentPhoneNum,
                              studentEmail: report.studentEmail,
                              companyNum:report.companyNum,
                              companyName:report.companyName,
                              companyOwner:report.companyOwner,
                              companyKind:report.companyKind,
                              createDate:moment(report.createDate,'YYYY-MM-DD'),
                              businessItem:report.businessItem,
                              sales:report.sales,
                              staffNum:report.staffNum
                          }}
                    >
                        <div className={cx("sub_container","mentor_group_write","student_report")}>
                            <h1 className={cx("sub_top_title")}>학생창업자 신고</h1>
                            <p className={cx("sub_top_txt")}>
                                한양대학교 창업지원단에서는 창의적인 아이디어와 꿈을 향한 열정으로 홀로 창업하고 있는 학생창업자를 찾고 있습니다 <br/>
                                학생창업자에게는 다양한 혜택을 제공하고 있으니 , 아래 내용을 작성하여 신청해주시기 바랍니다<br/>
                                (※신청자 대상으로 안내 메일이 발송됩니다.)
                            </p>

                            <h2>개인정보</h2>
                            <div className={cx("mentoring_applicants")}>
                                <ul className={`${cx("w_3")} clfx `}>
                                    <li>
                                        <label htmlFor="mentoring_applicants_info1">이름</label>
                                        <Form.Item
                                            name="studentName"
                                            className={(cx("antd_input"))}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '이름은 필수 입니다.',
                                                },
                                            ]}
                                        >
                                            <Input placeholder={"이름"} name="studentName" value={reportForm.studentName}
                                                   onChange={(e) => {
                                                       changeReportFormValue(e)
                                                   }}/>
                                        </Form.Item>
                                    </li>
                                    <li>
                                        <label htmlFor="mentoring_applicants_info2">소속</label>
                                        <Form.Item
                                            name="studentAttach"
                                            className={(cx("antd_input"))}
                                            rules={[
                                                {
                                                    required: false,
                                                    // message: '이름은 필수 입니다.',
                                                },
                                            ]}
                                        >
                                            <Input placeholder={"소속"} name="studentAttach" value={reportForm.studentAttach}
                                                   onChange={(e) => {
                                                       changeReportFormValue(e)
                                                   }}/>
                                        </Form.Item>
                                    </li>
                                    <li>
                                        <label htmlFor="mentoring_applicants_info3">학번</label>
                                        <Form.Item
                                            name="studentClassYear"
                                            className={(cx("antd_input"))}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '학번은 필수 입니다.',
                                                },
                                            ]}
                                        >
                                            <Input placeholder={"학번"} name="studentClassYear" value={reportForm.studentClassYear}
                                                   onChange={(e) => {
                                                       changeReportFormValue(e)
                                                   }}/>
                                        </Form.Item>
                                    </li>
                                    <li>
                                        <label htmlFor="mentoring_applicants_info4">연락처</label>
                                        <Form.Item
                                            name="studentPhoneNum"
                                            className={(cx("antd_input"))}
                                            rules={[
                                                {
                                                    required: true,
                                                    pattern: new RegExp(
                                                        /^-?\d*(\.\d*)?$/
                                                    ),
                                                    message: "'-' 없이 숫자만 입력 가능합니다",
                                                },
                                            ]}
                                        >
                                            <Input placeholder={"연락처"} name="studentPhoneNum" value={reportForm.studentPhoneNum}
                                                   onChange={(e) => {
                                                       changeReportFormValue(e)
                                                   }}/>
                                        </Form.Item>
                                    </li>
                                    <li className={cx("w_60")}>
                                        <label htmlFor="mentoring_applicants_info5">E-mail </label>
                                        <div className={cx("email")}>
                                            <Form.Item
                                                name="studentEmail"
                                                className={(cx("antd_input"))}
                                                rules={[
                                                    {
                                                        required: true,
                                                        type: 'email',
                                                        message: 'E-MAIL은 필수 입니다.',
                                                    },
                                                ]}
                                            >
                                                <Input placeholder={"E-MAIL"} name="studentEmail" value={reportForm.studentEmail}
                                                       onChange={(e) => {
                                                           changeReportFormValue(e)
                                                       }}/>
                                            </Form.Item>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <h2>기업정보</h2>
                            <div className={`${cx("mentoring_applicants")} mb_0 mentoring_applicants `}>
                                <ul className={`${cx("w_3")} clfx `}>
                                    <li>
                                        <label htmlFor="mentoring_applicants_info1">사업자등록번호</label>
                                        <Form.Item
                                            name="companyNum"
                                            className={(cx("antd_input"))}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '사업자등록번호는 필수 입니다.',
                                                },
                                            ]}
                                        >
                                            <Input placeholder={"사업자등록번호"} name="companyNum" value={reportForm.companyNum}
                                                   onChange={(e) => {
                                                       changeReportFormValue(e)
                                                   }}/>
                                        </Form.Item>
                                    </li>
                                    <li>
                                        <label htmlFor="mentoring_applicants_info2">기업명 </label>
                                        <Form.Item
                                            name="companyName"
                                            className={(cx("antd_input"))}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '기업명은 필수 입니다.',
                                                },
                                            ]}
                                        >
                                            <Input placeholder={"기업명"} name="companyName" value={reportForm.companyName}
                                                   onChange={(e) => {
                                                       changeReportFormValue(e)
                                                   }}/>
                                        </Form.Item>
                                    </li>
                                    <li>
                                        <label htmlFor="mentoring_applicants_info3">대표자명</label>
                                        <Form.Item
                                            name="companyOwner"
                                            className={(cx("antd_input"))}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '대표자명은 필수 입니다.',
                                                },
                                            ]}
                                        >
                                            <Input placeholder={"대표자명"} name="companyOwner" value={reportForm.companyOwner}
                                                   onChange={(e) => {
                                                       changeReportFormValue(e)
                                                   }}/>
                                        </Form.Item>
                                    </li>
                                    <li>
                                        <label htmlFor="mentoring_applicants_info4">사업자 유형</label>
                                        <Form.Item
                                            name="companyKind"
                                            className={(cx("antd_input"))}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '사업자 유형을 선택해주세요',
                                                },
                                            ]}
                                        >
                                            <select name="companyKind" id="" value={reportForm.companyKind} onChange={(e) => {
                                                changeReportFormValue(e)
                                            }}>
                                                <option value="">선택</option>
                                                <option value="법인">법인</option>
                                                <option value="개인">개인</option>
                                            </select>
                                        </Form.Item>
                                    </li>
                                    <li>
                                        <label htmlFor="mentoring_applicants_info4">창업일</label>
                                        <Form.Item
                                            name="createDate"
                                            className={(cx("antd_input"))}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "필수입력 입니다",
                                                },
                                            ]}
                                        >
                                            <DatePicker locale={locale} format={"YYYY-MM-DD"} value={reportForm.createDate} onChange={(v) =>{setReportForm({...reportForm,createDate:v})}}/>
                                        </Form.Item>
                                    </li>
                                    <li className={cx("w_100")}>
                                        <label htmlFor="">사업아이템 및 설명(150내 이내)</label>
                                        <Form.Item
                                            name="businessItem"
                                            className={(cx("antd_input"))}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '사업아이템을 입력해주세요',
                                                },
                                            ]}
                                        >
                                            <Input.TextArea placeholder={"사업아이템"} rows={5} name="businessItem" value={reportForm.businessItem}
                                                            onChange={(e) => {
                                                                changeReportFormValue(e)
                                                            }}/>
                                        </Form.Item>
                                    </li>
                                </ul>
                                <ul className={`${cx("w_2")} clfx `}>
                                    <li>
                                        <label htmlFor="">당해 연도 매출액(해당하는 경우에만 입력)</label>
                                        <Form.Item
                                            name="sales"
                                            className={(cx("antd_input"))}
                                            rules={[
                                                {
                                                    required: false,
                                                    pattern: new RegExp(
                                                        /^-?\d*(\.\d*)?$/
                                                    ),
                                                    message: "숫자만 입력 가능합니다",
                                                },
                                            ]}
                                        >
                                            <Input placeholder={"당해 연도 매출액(해당하는 경우에만 입력)"} name="sales" value={reportForm.sales}
                                                   onChange={(e) => {
                                                       changeReportFormValue(e)
                                                   }}/>
                                        </Form.Item>
                                    </li>

                                    <li>
                                        <label htmlFor="">당해 연도 고용인원(해당하는 경우에만 입력)</label>
                                        <Form.Item
                                            name="staffNum"
                                            className={(cx("antd_input"))}
                                            rules={[
                                                {
                                                    required: false,
                                                    pattern: new RegExp(
                                                        /^-?\d*(\.\d*)?$/
                                                    ),
                                                    message: "숫자만 입력 가능합니다",
                                                },
                                            ]}
                                        >
                                            <Input placeholder={"당해 연도 고용인원(해당하는 경우에만 입력)"} name="staffNum" value={reportForm.staffNum}
                                                   onChange={(e) => {
                                                       changeReportFormValue(e)
                                                   }}/>
                                        </Form.Item>
                                    </li>
                                </ul>
                            </div>
                            <div className={cx("termsArea")}>
                            </div>
                            <div className={"txt_c"}>
                                <input type="submit" value="저장하기" className={cx("basic-btn03", "btn-blue-bg2")}/>
                            </div>
                        </div>
                    </Form>
                </section>

            )}

        </>
    );
};

export default StudentReportEditPage;
