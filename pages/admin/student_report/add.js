import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {DatePicker, Form, Input, Modal} from "antd";
import {
    getStudentReport,
    initialize,
    addStudentReport
} from "../../../store/studentReport/adminStudentReport";
import styles from '../../../public/assets/styles/admin/studentReport/studentReport.module.css';
import classnames from "classnames/bind"
const cx = classnames.bind(styles);
import moment from "moment";
import locale from "antd/lib/date-picker/locale/ko_KR";

const StudentReportAddPage = () => {

    const dispatch = useDispatch();
    const router = useRouter();
    const [form] = Form.useForm();
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

    const [showRemoveModal, setShowRemoveModal] = useState(false);
    const {add} = useSelector(({adminStudentReport, loading}) => ({
        report: adminStudentReport.getStudentReport,
        add: adminStudentReport.addStudentReport,
    }))

    useEffect(() => {

        return () => {
            dispatch(initialize());
        }

    }, [])

    const changeReportFormValue = useCallback((e) =>{
        const {name, value} = e.target

        setReportForm(reportForm =>({
            ...reportForm,
            [name]: value,

        }))

    },[])


    const submit = () => {
        const data = {
            ...reportForm,
            createDate:reportForm.createDate.format("YYYY-MM-DD").toString()

        }

        dispatch(addStudentReport(data))

    }


    useEffect(() => {
        if (add.result && add.error == null) {
            Modal.success({
                title: '저장이 완료되었습니다',
                onOk: () => {
                    router.push("/admin/student_report")
                }
            });
        }

    }, [add])


    return (
        <>
                <section className={cx("container")}>
                    <h1 className={cx("top_title")}>학생창업신고 관리</h1>
                    <Form form={form} onFinish={submit}
                    >
                        <div className={cx("adm_container")}>
                            <div className={cx("box")}>
                                <div className={cx("student_report_detail")}>
                                    {/*<h2>팝업 정보</h2>*/}
                                    <div className={cx("tb_style_2")}>
                                        <table>
                                            <colgroup>
                                                <col style={{width: 270}}/>
                                                <col style={{width: 400}}/>
                                                <col  style={{width: 270}}/>
                                                <col/>
                                            </colgroup>
                                            <tbody>
                                            <tr>
                                                <th scope="row">이름</th>
                                                <td>
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
                                                </td>
                                                <th scope="row">아이디</th>
                                                <td>
                                                    <Form.Item
                                                        name="userId"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: '아이디 필수 입니다.',
                                                            },
                                                        ]}
                                                    >
                                                        <Input placeholder={"아이디"} name="userId" value={reportForm.userId}
                                                               onChange={(e) => {
                                                                   changeReportFormValue(e)
                                                               }}/>
                                                    </Form.Item>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">소속</th>
                                                <td>
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
                                                </td>
                                                <th scope="row">학번</th>
                                                <td>
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
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">연락처</th>
                                                <td>
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
                                                </td>
                                                <th scope="row">E-MAIL</th>
                                                <td>
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
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">기업명</th>
                                                <td>
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
                                                </td>
                                                <th scope="row">대표자명</th>
                                                <td>
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
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">사업자등록번호</th>
                                                <td>
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
                                                </td>
                                                <th scope="row">사업자 유형</th>
                                                <td>
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
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">창업일</th>
                                                <td colSpan={3}>
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
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">사업아이템 및 설명</th>
                                                <td colSpan={3}>
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
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">당해 연도 매출액(해당하는 경우에만 입력, 단위:원)</th>
                                                <td>
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
                                                        <Input placeholder={"당해 연도 매출액(해당하는 경우에만 입력, 단위:원)"} name="sales" value={reportForm.sales}
                                                               onChange={(e) => {
                                                                   changeReportFormValue(e)
                                                               }}/>
                                                    </Form.Item>

                                                </td>
                                                <th scope="row">당해 연도 고용인원(해당하는 경우에만 입력)</th>
                                                <td>
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
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className={cx("txt_c pt_60")}>
                                        <button type="submit" className={cx("basic-btn02", "btn-gray-bg")}>저장</button>
                                        <button type="button" className={cx("basic-btn02", "btn-gray-bd2")}
                                                onClick={() => {
                                                    router.push("/admin/student_report")
                                                }}>목록
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </section>
        </>
    );
};

export default StudentReportAddPage;
