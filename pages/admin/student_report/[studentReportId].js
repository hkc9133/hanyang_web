import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {Button, DatePicker, Form, Input, Modal, Upload} from "antd";
// import {deletePopup, getPopup, initialize, updatePopup} from "../../../store/popup/adminPopup";
import moment from "moment";
import locale from "antd/lib/date-picker/locale/ko_KR";
import {
    getStudentReport,
    updateStudentReport,
    deleteStudentReport,
    initialize
} from "../../../store/studentReport/adminStudentReport";
import styles from '../../../public/assets/styles/admin/studentReport/studentReport.module.css';
import classnames from "classnames/bind"
import client, {baseUrl} from "../../../lib/api/client";
import {UploadOutlined} from "@ant-design/icons";
import {fileDownload} from "../../../store/file/file";

const cx = classnames.bind(styles);
const StudentReportEditPage = () => {

    const dispatch = useDispatch();
    const router = useRouter();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [reportInfo, setReportInfo] = useState({});

    const [showRemoveModal, setShowRemoveModal] = useState(false);
    const {report, update, deleteResult} = useSelector(({adminStudentReport, loading}) => ({
        report: adminStudentReport.getStudentReport,
        update: adminStudentReport.updateStudentReport,
        deleteResult: adminStudentReport.deleteStudentReport,
    }))

    useEffect(() => {

        dispatch(getStudentReport(router.query.studentReportId))

        return () => {
            dispatch(initialize());
        }

    }, [router.query.studentReportId])

    useEffect(() => {

        if (report != null) {
            const fileList = report.certificateFile ? [{
                url: `${baseUrl}/resource${report.certificateFile.filePath}/${report.certificateFile.fileName + report.certificateFile.fileExtension}`,
                uid: report.certificateFile.fileId,
                name: report.certificateFile.fileOriginName,
                status: "done",
                fileId: report.certificateFile.fileId
            }] : []
            setReportInfo({
                ...reportInfo,
                ...report,
                fileList: fileList,
                createDate: moment(report.createDate, 'YYYY-MM-DD')
            })
            form.setFieldsValue({ fileList: fileList });
        }

    }, [report])

    const changeReportInfo = (e) => {
        const {name, value} = e.target
        setReportInfo({
            ...reportInfo,
            [name]: value
        })
    }

    const handleDownload = useCallback((fileId) => {
        if (fileId != undefined) {
            dispatch(fileDownload(fileId))
        }
    }, [])


    const submit = () => {
        const data = {
            ...reportInfo,
            certificateFile: reportInfo.fileList.length == 0 ? null :  {
                fileId:reportInfo.fileList[0].fileId
            },
            createDate: reportInfo.createDate.format("YYYY-MM-DD").toString()
        }

        dispatch(updateStudentReport(data));

    }

    const handleDeleteReport = () => {
        dispatch(deleteStudentReport(reportInfo.studentReportId))
    }

    useEffect(() => {
        if (update.result && update.error == null) {
            Modal.success({
                title: '저장이 완료되었습니다',
                onOk: () => {
                    router.push("/admin/student_report")
                }
            });
        }

    }, [update])

    useEffect(() => {
        if (deleteResult.result && deleteResult.error == null) {
            Modal.success({
                title: '삭제가 완료되었습니다',
                onOk: () => {
                    router.push("/admin/student_report")
                }
            });
        }

    }, [deleteResult])

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    const handleRemove = (e) => {
        setReportInfo({
            ...reportInfo,
            fileList: reportInfo.fileList.filter((item) => item.uid != e.uid)
        })
        form.setFieldsValue({fileList: reportInfo.fileList.filter((item) => item.uid != e.uid)});
    }

    const uploadFile = async options => {
        const {onSuccess, onError, file, onProgress} = options;
        setLoading(true)

        const fmData = new FormData();
        const config = {
            headers: {"content-type": "multipart/form-data"},
            onUploadProgress: event => {
                onProgress({percent: (event.loaded / event.total) * 100});
            }
        };
        fmData.append("file", file);
        try {
            const res = await client.post(
                "/resource/attach_file/CERTIFICATE_IMG",
                fmData,
                config
            );
            onSuccess("Ok");

            const data = {
                ...res.data,
                url: baseUrl + res.data.url
            }
            setReportInfo({
                ...reportInfo,
                fileList: reportInfo.fileList.concat(data)
            })
            form.setFieldsValue({fileList: reportInfo.fileList.concat(data)});
            setLoading(false)
        } catch (err) {
            // console.log(err)
            setError("업로드 중 에러가 발생하였습니다");
            setLoading(false)
            onError({err});
        }
    };

    return (
        <>
            {reportInfo.studentReportId != null && (
                <section className={cx("container")}>
                    <h1 className={cx("top_title")}>학생창업신고 관리</h1>
                    <Form form={form} onFinish={submit}
                          initialValues={{
                              studentName: report.studentName,
                              studentAttach: report.studentAttach,
                              studentClassYear: report.studentClassYear,
                              studentPhoneNum: report.studentPhoneNum,
                              studentEmail: report.studentEmail,
                              companyNum: report.companyNum,
                              companyName: report.companyName,
                              companyOwner: report.companyOwner,
                              companyKind: report.companyKind,
                              createDate: moment(report.createDate, 'YYYY-MM-DD'),
                              businessItem: report.businessItem,
                              sales: report.sales,
                              staffNum: report.staffNum
                          }}
                    >
                        <div className={cx("adm_container")}>
                            <div className={cx("box")}>
                                <div className={cx("student_report_detail")}>
                                    <h2>학생창업 정보</h2>
                                    <div className={cx("tb_style_2")}>
                                        <table>
                                            <colgroup>
                                                <col style={{width: 270}}/>
                                                <col style={{width: 400}}/>
                                                <col style={{width: 270}}/>
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
                                                        <Input placeholder={"이름"} name="studentName"
                                                               value={reportInfo.studentName}
                                                               onChange={(e) => {
                                                                   changeReportInfo(e)
                                                               }}/>
                                                    </Form.Item>
                                                </td>
                                                <th scope="row">관리</th>
                                                <td>
                                                    <button type="button" className={cx("basic-btn01", "btn-red-bg")}
                                                            onClick={() => {
                                                                setShowRemoveModal(true)
                                                            }}>삭제
                                                    </button>
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
                                                        <Input placeholder={"소속"} name="studentAttach"
                                                               value={reportInfo.studentAttach}
                                                               onChange={(e) => {
                                                                   changeReportInfo(e)
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
                                                        <Input placeholder={"학번"} name="studentClassYear"
                                                               value={reportInfo.studentClassYear}
                                                               onChange={(e) => {
                                                                   changeReportInfo(e)
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
                                                        <Input placeholder={"연락처"} name="studentPhoneNum"
                                                               value={reportInfo.studentPhoneNum}
                                                               onChange={(e) => {
                                                                   changeReportInfo(e)
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
                                                        <Input placeholder={"E-MAIL"} name="studentEmail"
                                                               value={reportInfo.studentEmail}
                                                               onChange={(e) => {
                                                                   changeReportInfo(e)
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
                                                        <Input placeholder={"기업명"} name="companyName"
                                                               value={reportInfo.companyName}
                                                               onChange={(e) => {
                                                                   changeReportInfo(e)
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
                                                        <Input placeholder={"대표자명"} name="companyOwner"
                                                               value={reportInfo.companyOwner}
                                                               onChange={(e) => {
                                                                   changeReportInfo(e)
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
                                                        <Input placeholder={"사업자등록번호"} name="companyNum"
                                                               value={reportInfo.companyNum}
                                                               onChange={(e) => {
                                                                   changeReportInfo(e)
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
                                                        <select name="companyKind" id="" value={reportInfo.companyKind}
                                                                onChange={(e) => {
                                                                    changeReportInfo(e)
                                                                }}>
                                                            <option value="">선택</option>
                                                            <option value="법인">법인</option>
                                                            <option value="개인">개인</option>
                                                        </select>
                                                    </Form.Item>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope={"row"}>사업자등록증</th>
                                                <td colSpan={3}>
                                                    <Form.Item
                                                        name="fileList"
                                                        className={(cx("antd_input"))}
                                                        valuePropName="fileList"
                                                        getValueFromEvent={normFile}
                                                    >
                                                        <Upload
                                                            customRequest={(e) => {
                                                                uploadFile(e)
                                                            }}
                                                            accept={"image/*"}
                                                            listType="picture-card"
                                                            fileList={reportInfo.fileList}
                                                            onRemove={handleRemove}
                                                        >
                                                            {reportInfo.fileList.length >= 1 ? null :
                                                                <Button style={{marginTop: 7}} className={"upload"}
                                                                        icon={<UploadOutlined/>}>업로드</Button>}
                                                        </Upload>
                                                        <span className={cx("title")}>첨부파일 (10MB 미만)</span>
                                                    </Form.Item>
                                                    {(reportInfo.fileList.length > 0 && reportInfo.fileList[0].fileId) && (
                                                        <button type="button"onClick={() => {
                                                            handleDownload(reportInfo.fileList[0].fileId)
                                                        }}>다운로드</button>
                                                    )}
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
                                                        <DatePicker locale={locale} format={"YYYY-MM-DD"}
                                                                    value={reportInfo.createDate} onChange={(v) => {
                                                            setReportInfo({...reportInfo, createDate: v})
                                                        }}/>
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
                                                        <Input.TextArea placeholder={"사업아이템"} rows={5}
                                                                        name="businessItem"
                                                                        value={reportInfo.businessItem}
                                                                        onChange={(e) => {
                                                                            changeReportInfo(e)
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
                                                        <Input placeholder={"당해 연도 매출액(해당하는 경우에만 입력, 단위:원)"}
                                                               name="sales" value={reportInfo.sales}
                                                               onChange={(e) => {
                                                                   changeReportInfo(e)
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
                                                        <Input placeholder={"당해 연도 고용인원(해당하는 경우에만 입력)"} name="staffNum"
                                                               value={reportInfo.staffNum}
                                                               onChange={(e) => {
                                                                   changeReportInfo(e)
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
                    <Modal
                        title="삭제하시겠습니까?"
                        visible={showRemoveModal}
                        key={1}
                        // confirmLoading={deletePlaceResult.result}
                        onCancel={() => {
                            setShowRemoveModal(false)
                        }}
                        footer={[
                            <button className={cx("basic-btn01", "btn-red-bg")} onClick={() => {
                                handleDeleteReport()
                            }}>삭제</button>,
                            <button className={cx("basic-btn01", "btn-gray-bg")} onClick={() => {
                                setShowRemoveModal(false);
                            }}>취소</button>
                        ]}
                    >
                    </Modal>
                </section>
            )}
        </>
    );
};

export default StudentReportEditPage;
