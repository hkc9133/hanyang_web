import React, {useCallback, useRef, useState} from 'react';

import styles from '../public/assets/styles/student_startup_report/student_startup_report.module.css';
import classnames from "classnames/bind"
import {Checkbox, Form, Input, Select, DatePicker, Upload, Button} from "antd";
const { Option } = Select;
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import styled from "styled-components";

import {applyCounsel} from "../store/mentoring/mentoring";
import { UploadOutlined } from '@ant-design/icons';

const cx = classnames.bind(styles);

const BusinessTypeSelect = styled(Select)`
  width:100%;
  //height:50px;
  &.ant-select-single .ant-select-selector{
    height:50px;
    align-items: center;
  }
  @media only screen and (max-width: 768px) {
    &.ant-select-single .ant-select-selector{
      height:40px;
    }
  }
`;
const StartupDatePicker = styled(DatePicker)`
  width:100%;
  height:50px;
  @media only screen and (max-width: 768px) {
    height:40px;
}
`;

const StudentStartupReport = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const router = useRouter();
    const personalDev = useRef();

    const [startupInfo, setStartupInfo] = useState({
        // formId: "",
        userId: "",
        title: "",
        content: "",
        formNum: "",
        formProgressItem: 1,
        formSortationItem: 1,
        formWayItem: 1,
        menteeName: "",
        menteeEmail: "",
        menteePhoneNumber: "",
        counselFieldIdList: [],
        hopeMentor:null,
        isAgree: false,
        uploadResultList:[],
        fileList:[],
    })

    const scrollIntoView = () =>{
        personalDev.current.scrollIntoView()
    }

    const changeStartupInfoValue = useCallback((e) =>{
        const {name, value} = e.target

        if (name == 'isAgree') {
            setStartupInfo(startupInfo =>({
                ...startupInfo,
                isAgree: e.target.checked,

            }))
            return;
        }

        setStartupInfo(startupInfo =>({
            ...startupInfo,
            [name]: value,

        }))

    },[])

    const changeFileList = useCallback(({fileList}) =>{
        setStartupInfo(startupInfo =>({
            ...startupInfo,
            fileList: fileList
        }))
    },[])

    const handlePreview = useCallback((file) =>{

        const fileURL = URL.createObjectURL(file.originFileObj);
        window.open(fileURL);

    },[])

    const changeStartupDate = useCallback((value) =>{
        setStartupInfo(startupInfo =>({
            ...startupInfo,
            startupDate: value,
        }))
    },[])

    const changeStartupBusinessType = useCallback((value) =>{
        setStartupInfo(startupInfo =>({
            ...startupInfo,
            businessType: value,
        }))
    },[])


    const submitReport = (e) => {

    }

    return (
        <section className={"container"}>
            <style jsx>{`
                &.ant-select-single .ant-select-selector {
                    height: 50px;
                }
            `}</style>
            <div className={cx("sub_container","mentor_group_write","student_report")}>
                <Form form={form} onFinish={submitReport} onFinishFailed={scrollIntoView}>
                <h1 className={cx("sub_top_title")}>학생창업자 신고</h1>
                <p className={cx("sub_top_txt")}>
                    한양대학교 창업지원단에서는 창의적인 아이디어와 꿈을 향한 열정으로 홀로 창업하고 있는 학생창업자를 찾고 있습니다 <br/>
                    학생창업자에게는 다양한 혜택을 제공하고 있으니 , 아래 내용을 작성하여 신청해주시기 바랍니다<br/>
                    (※신청자 대상으로 안내 메일이 발송됩니다.)
                </p>

                <h2>학생창업자혜택</h2>
                <div className={cx("list_style_4")}>
                    <ul>
                        <li>창업장학금 희망사다리장학 (~400 만원 /1 년)</li>
                        <li>창업기숙사 최대 2 년 )</li>
                        <li>사업화지원금 (예비창업패키지 초기창업패키지 )</li>
                        <li>창업현장실습 장기 : 최대 15 학점 , 단기 : 3 학점 )</li>
                        <li>창업 맞춤형 패키지 (법인설립 , 시제품 제작 , 특허출원</li>
                        <li>창업동아리 활동비 (~500 만원 년)</li>
                        <li>학생창업보육공간 입주공간 제공</li>
                        <li>창업휴학 최대 2 년</li>
                        <li>원스톱 창업멘토링 멘토스온콜</li>
                        <li>기타 : 학생창업자가 필요한 사항 등</li>
                    </ul>
                </div>

                <h2>개인정보</h2>
                <div className={cx("mentoring_applicants")}>
                    <ul className={`${cx("w_3")} clfx `}>
                        <li ref={personalDev}>
                            <Form.Item
                                label="이름"
                                className={(cx("antd_input"))}
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: '이름은 필수 입니다.',
                                    },
                                ]}
                            >
                                <Input placeholder={"이름"} name="name" value={startupInfo.name} onChange={changeStartupInfoValue}/>
                            </Form.Item>
                        </li>
                        <li>
                            <Form.Item
                                label="소속"
                                className={(cx("antd_input"))}
                                name="affiliation"
                                rules={[
                                    {
                                        required: true,
                                        message: '소속은 필수 입니다.',
                                    },
                                ]}
                            >
                                <Input placeholder={"소속"} name="affiliation" value={startupInfo.affiliation} onChange={changeStartupInfoValue}/>
                            </Form.Item>
                        </li>
                        <li>
                            <Form.Item
                                label="학번"
                                className={(cx("antd_input"))}
                                name="classNum"
                                rules={[
                                    {
                                        required: true,
                                        message: '이름은 필수 입니다.',
                                    },
                                ]}
                            >
                                <Input id="startup_write_1" placeholder={"학번"} name="classNum"
                                       value={startupInfo.classNum} onChange={changeStartupInfoValue}/>
                            </Form.Item>
                        </li>
                        <li>
                            <Form.Item
                                label="연락처"
                                className={(cx("antd_input"))}
                                name="phoneNum"
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
                                <Input placeholder={"연락처"} name="phoneNum"
                                       value={startupInfo.phoneNum} onChange={changeStartupInfoValue}/>
                            </Form.Item>
                        </li>
                        <li className={cx("w_60")}>
                            <Form.Item
                                label="E-MAIL"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        type: 'email',
                                        message: 'E-MAIL은 필수 입니다.',
                                    },
                                ]}
                            >
                                <Input placeholder={"E-MAIL"} name="email" value={startupInfo.email}
                                       onChange={changeStartupInfoValue}/>
                            </Form.Item>
                        </li>
                    </ul>
                </div>

                <h2>기업정보</h2>
                <div className={cx("mentoring_applicants","mb_0")}>
                    <ul className={`${cx("w_3")} clfx `}>
                        <li>
                            <Form.Item
                                label="사업자등록번호"
                                className={(cx("antd_input"))}
                                name="licenseNum"
                                rules={[
                                    {
                                        required: true,
                                        message: '사업자등록번호를 입력해주세요',
                                    },
                                ]}
                            >
                                <Input placeholder={"사업자등록번호"} name="licenseNum"
                                       value={startupInfo.licenseNum} onChange={changeStartupInfoValue}/>
                            </Form.Item>
                        </li>
                        <li>
                            <Form.Item
                                label="기업명"
                                className={(cx("antd_input"))}
                                name="companyName"
                                rules={[
                                    {
                                        required: true,
                                        message: '기업명은 필수 입니다.',
                                    },
                                ]}
                            >
                                <Input placeholder={"기업명"} name="companyName" value={startupInfo.companyName}
                                       onChange={changeStartupInfoValue}/>
                            </Form.Item>
                        </li>
                        <li>
                            <Form.Item
                                label="대표자명"
                                className={(cx("antd_input"))}
                                name="ownerName"
                                rules={[
                                    {
                                        required: true,
                                        message: '대표자명',
                                    },
                                ]}
                            >
                                <Input placeholder={"대표자명"} name="ownerName" value={startupInfo.ownerName}
                                       onChange={changeStartupInfoValue}/>
                            </Form.Item>
                        </li>
                        <li className={cx("w_100")}>
                            <Form.Item
                                label="사업자등록증"
                                className={(cx("antd_input"))}
                                name="certificate_file"
                                rules={[
                                    {
                                        required: true,
                                        message: '사업자등록증을 첨부해주세요',
                                    },
                                ]}
                            >
                                <Upload
                                    listType="picture"
                                    fileList={startupInfo.fileList}
                                    onPreview={handlePreview}
                                    onChange={changeFileList}
                                >
                                    {startupInfo.fileList.length >= 1 ? null : <Button style={{marginTop:7}} className={"upload"} icon={<UploadOutlined />}>업로드</Button>}
                                </Upload>
                                <span className={cx("title")}>첨부파일 (10MB 미만)</span>
                            </Form.Item>
                        </li>
                        <li>
                            {/*<label htmlFor="mentoring_applicants_info4">법인유형</label>*/}
                            <Form.Item
                                label="법인유형"
                                className={(cx("antd_input"))}
                                name="businessType"
                                rules={[
                                    {
                                        required: true,
                                        message: '법인유형',
                                    },
                                ]}
                            >
                                <BusinessTypeSelect name="businessType" defaultValue="personal"
                                                    onChange={changeStartupBusinessType}>
                                    <Option value="personal"></Option>
                                    <Option value="lucy">Lucy</Option>
                                </BusinessTypeSelect>
                            </Form.Item>
                        </li>
                        <li>
                            <Form.Item
                                label="창업일"
                                className={(cx("antd_input"))}
                                name="startupDdate"
                                rules={[
                                    {
                                        required: true,
                                        message: '창업일',
                                    },
                                ]}
                            >
                                <StartupDatePicker placeholder={"창업일"} onChange={changeStartupDate}/>
                                {/*<Input  placeholder={"대표자명"} name="ownerName" value={startupInfo.ownerName} onChange={changeStartupInfoValue}/>*/}
                            </Form.Item>
                            {/*<label htmlFor="mentoring_applicants_info4">창업일</label>*/}
                            {/*<DatePicker placeholder={"창업일"} onChange={(e) =>{console.log(e)}} />*/}
                        </li>
                        <li className={cx("w_100")}>
                            <Form.Item
                                label="사업 아이템 및 설명"
                                className={(cx("antd_input"))}
                                name="businessItem"
                                rules={[
                                    {
                                        required: true,
                                        message: '사업 아이템',
                                    },
                                ]}
                            >
                                <Input.TextArea placeholder={"사업 아이템"} name="businessItem"
                                                value={startupInfo.businessItem} onChange={changeStartupInfoValue}
                                                rows="10"/>
                            </Form.Item>
                        </li>
                    </ul>
                    <ul className={`${cx("w_2")} clfx `}>
                        <li>
                            <Form.Item
                                label="당해 연도 매출액(해당하는 경우에만 입력, 단위:원)"
                                name="sales"
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
                                <Input placeholder={"매출액"}  name="sales" value={startupInfo.sales} onChange={changeStartupInfoValue} />
                            </Form.Item>
                        </li>
                        <li>
                            <Form.Item
                                label="당해 연도 고용인원(해당하는 경우에만 입력)"
                                name="employeeNum"
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
                                <Input placeholder={"고용인원"}  name="employeeNum" value={startupInfo.employeeNum} onChange={changeStartupInfoValue} />
                            </Form.Item>
                        </li>
                    </ul>
                </div>

                <div className={cx("termsArea")}>
                    <h3>개인정보처리방침</h3>
                    <div className={cx("terms_box")}>
<pre>
한양대학교 창업지원단 개인정보 처리방침
한양대학교 창업지원단은 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립·공개합니다.

제1조(개인정보의 처리목적)
한양대학교 창업지원단은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다

 가. 한양대학교 창업지원단 홈페이지에서 제공하는 회원제 서비스(창업상담, 아이디어제안, 사업모델평가) 이용에 따른 서비스를 제공하기 위해 개인정보(신청자 성명, e-mail, 전화번호)를 처리합니다.
</pre>
                    </div>
                    <div className={cx("agree")}>
                        <Form.Item
                            name="isAgree"
                            rules={[
                                {
                                    required: !startupInfo.isAgree,
                                    message: '개인정보 처라방침 동의는 필수 입니다.',
                                },
                            ]}
                        >
                            <Checkbox name="isAgree" checked={startupInfo.isAgree} onChange={changeStartupInfoValue}>개인정보처리방침안내 내용에 동의 합니다</Checkbox>
                        </Form.Item>
                    </div>
                </div>

                <div className={cx("txt_c")}>
                    <input type="submit" value="제출하기" className={cx("basic-btn03","btn-black-bg")}/>
                </div>
                </Form>
            </div>
        </section>
    );
};

export default StudentStartupReport;
