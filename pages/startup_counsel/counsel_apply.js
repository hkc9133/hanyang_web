import React, {useCallback, useEffect, useRef, useState} from 'react';
import styles from '../../public/assets/styles/startup_info/startup_info.module.css';
import classnames from "classnames/bind"
import Link from 'next/link'
import {Input, Tag, Button, Select, Form, Radio, Checkbox, Upload, Progress, Typography} from 'antd';
const { Option } = Select;

import client from '../../lib/api/client';


const {CheckableTag} = Tag;
import Image from "next/image";
import PageNavigation from "../../component/layout/PageNavigation";
import {useSelector, useDispatch} from "react-redux";
import Modal from "../../component/common/Modal";
import {useRouter} from "next/router";
import {
    applyCounsel,
    getCounselFieldCode, getMentorList,
    getProgressItem, getSortationItem, getWayItem,
    initialize
} from "../../store/mentoring/mentoring";
import dynamic from "next/dynamic";
const QuillEditor = dynamic(() => import("../../component/common/QuillEditor"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
});
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import PersonalInfoForm from "../../component/stratup_counsel/counsel_apply/PersonalInfoForm";

const cx = classnames.bind(styles);

// const counselField = [
//     {value: 1, label: "세무·회계"},
//     {value: 2, label: "법률·법무"},
//     {value: 3, label: "지식재산권"},
//     {value: 4, label: "마케팅·판로"},
//     {value: 5, label: "노무"},
//     {value: 6, label: "투자"},
//     {value: 7, label: "초기 창업자금 조달"},
//     {value: 8, label: "비즈니스모델링"},
//     {value: 9, label: "시제품·개발"},
//     {value: 10, label: "글로벌 진출"},
//     {value: 11, label: "스케일업(코스탁 CEO등)"},
//     {value: 12, label: "캠퍼스 기술자문(교수)"},
//     {value: 13, label: "민간기술자문(대기업 임직원)"},
//     {value: 14, label: "또래 CEO"}
// ]

// const progressItem = [{value:1,label:"아이템 구상단계"},{value:2,label:"사업화 단계"},{value:3,label:"경영 단계"}]
//
// const sortationItem = [{value:1,label:"한양대학교(원)재(휴)학생"},{value:2,label:"한양대학교(원) 졸업동문"},{value:3,label:"초기창업폐키지(창업선도대학) 수혜기업"}
//     ,{value:4,label:"한양사이버대학교 재(휴)학생"},{value:5,label:"서울소재 대학재(휴)학생 서울 지역 소재 창업기업대표 서울지역 거주자"},{value:6,label:"기타(한양대창업지원단창업지원사업및프로그램수혜내역기재)"}]
//
// const wayItem = [{value:1,label:"오프라인"},{value:2,label:"온라인"},{value:3,label:"전화"},{value:4,label:"E-MAIL"}]



const CounselApply = () => {


    const [form] = Form.useForm();
    const personalDev = useRef();
    const hopeMentorSelect = useRef();
    const dispatch = useDispatch();
    const router = useRouter();

    const {user,counselApply,mentorList,counselField,progressItem,sortationItem,wayItem} = useSelector(({auth,mentoring, loading}) => ({
        user: auth.user,
        mentorList:mentoring.mentorList,
        counselField:mentoring.counselField,
        progressItem:mentoring.progressItem,
        sortationItem:mentoring.sortationItem,
        wayItem:mentoring.wayItem,
        counselApply:mentoring.counselApply,
    }))

    const [applyForm, setApplyForm] = useState({
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
        uploadResultList:[]
    })
    const [content,setContent] = useState("");
    const [applyResultModal, setApplyResultModal] = useState(false)

    // const [fileList ,setFileList] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [hopeMentorList, setHopeMentorList] = useState([]);

    useEffect(() =>{
        dispatch(getMentorList({pageSize:500}))
        dispatch(getCounselFieldCode())
        dispatch(getProgressItem())
        dispatch(getSortationItem())
        dispatch(getWayItem())
        return () => {
            dispatch(initialize());
        }
    },[])

    const changeContent = useCallback((e) =>{
        setContent(e)
    },[])

    function formatNumber(value) {
        value += '';
        const list = value.split('.');
        const prefix = list[0].charAt(0) === '-' ? '-' : '';
        let num = prefix ? list[0].slice(1) : list[0];
        let result = '';
        while (num.length > 3) {
            result = `,${num.slice(-3)}${result}`;
            num = num.slice(0, num.length - 3);
        }
        if (num) {
            result = num + result;
        }
        return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
    }


    const changeApplyFormValue = useCallback((e) =>{
        const {name, value} = e.target

        if (name == 'isAgree') {
            setApplyForm(applyForm =>({
                ...applyForm,
                isAgree: e.target.checked,

            }))
            return;
        }

        setApplyForm(applyForm =>({
            ...applyForm,
            [name]: value,

        }))

    },[])


    const changeCounselField = (value) => {
        setApplyForm({
            ...applyForm,
            counselFieldIdList: value
        })
    }

    const changeCounselWay = (value) => {
        setApplyForm({
            ...applyForm,
            formWayItem: value
        })
    }
    // const changeContent = (value) => {
    //     setApplyForm({
    //         ...applyForm,
    //         content: value
    //     })
    // }

    const handleChangeUploadFile = ({ fileList }) =>{
        setApplyForm({
            ...applyForm,
            uploadResultList:fileList
        })
    }

    useEffect(() =>{
        if(mentorList.list.length >0){
            setHopeMentorList(mentorList.list)
        }
    },[mentorList.list])


    const changeHopeMentorField = (value) =>{
        setApplyForm(applyForm =>({
            ...applyForm,
            hopeMentor: null,
        }))

        console.log(value)
        if(value == ""){
            setHopeMentorList(mentorList.list)
        }else{
            setHopeMentorList(mentorList.list.filter((mentor) =>mentor.mentorFieldList.indexOf(value) > -1))
        }

    }


    const uploadFile = async options => {
        const { onSuccess, onError, file, onProgress } = options;
        setLoading(true)

        const fmData = new FormData();
        const config = {
            headers: { "content-type": "multipart/form-data" },
            onUploadProgress: event => {
                onProgress({ percent: (event.loaded / event.total) * 100 });
            }
        };
        fmData.append("file", file);
        try {
            const res = await client.post(
                "/resource/attach_file/MENTORING_ATTACH",
                fmData,
                config
            );
            onSuccess("Ok");
            setApplyForm({
                ...applyForm,
                uploadResultList:applyForm.uploadResultList.concat(res.data)
            })
            setLoading(false)
        } catch (err) {
            console.log(err)
            setError("업로드 중 에러가 발생하였습니다");
            setLoading(false)
            onError({ err });
        }
    };

    const submitApply = (e) => {
        const data = {
            ...applyForm,
            content:content,
            uploadResultList:applyForm.uploadResultList.map((item) =>{return item.fileId})
        }
        // data.hopeMentor == null || data.hopeMentor == '' && delete data.hopeMentor
        if(data.hopeMentor == null || data.hopeMentor == ''){
            delete data.hopeMentor
        }
        console.log(data)
        dispatch(applyCounsel(data));
    }

    useEffect(() =>{
        if(counselApply.result && counselApply.error == null){
            setApplyResultModal(true);
        }
    },[counselApply])

    return (
        <>
            <PageNavigation/>
            <section className={cx("container")}>
                <Form form={form} onFinish={(e) =>{submitApply(e)}} onFinishFailed={(e) =>{personalDev.current.scrollIntoView();}}>
                <div className={cx("sub_container", "mentor_group_write")}>
                    <h1 className={cx("sub_top_title")}>멘토단 소개</h1>
                    <p className={cx("sub_top_txt")}>전문 멘토로부터 듣는 창업 알짜 정보 예비창업자를 위한 <br/>창업 전문 상담코너입니다.</p>

                    <div className={cx("tab_style_2")}>
                        <ul>
                            <li className={cx("on")}><Link href="/startup_counsel/counsel_apply"><a>창업상담하기</a></Link></li>
                            {/*<li><Link href="/startup_counsel/counsel_apply_list"><a>창업신청현황</a></Link></li>*/}
                        </ul>
                    </div>

                    <h2 ref={personalDev}>개인정보</h2>
                    <PersonalInfoForm cx={cx} changeApplyFormValue={changeApplyFormValue} applyForm={applyForm}/>

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
                                        required: !applyForm.isAgree,
                                        message: '개인정보 처라방침 동의는 필수 입니다.',
                                    },
                                ]}
                            >
                                <Checkbox name="isAgree" checked={applyForm.isAgree} onChange={changeApplyFormValue}>개인정보처리방침안내 내용에 동의 합니다</Checkbox>
                            </Form.Item>
                        </div>
                    </div>

                    <h2>구분</h2>
                    <div className={cx("form_style_1")}>
                        <ul className={cx("list_2")}>
                            <Radio.Group name="formSortationItem" options={sortationItem.list} value={applyForm.formSortationItem} defaultValue={1} onChange={changeApplyFormValue} />
                        </ul>
                    </div>

                    <h2>창업진행 상황</h2>
                    <div className={cx("form_style_1")}>
                        <ul className={cx("list_3")}>
                            <Radio.Group name="formProgressItem" options={progressItem.list} value={applyForm.formProgressItem} defaultValue={1}  onChange={changeApplyFormValue} />
                        </ul>
                    </div>

                    <h2>희망 멘토링 분야</h2>
                    <div className={cx("form_style_1")}>
                        <ul className={cx("list_5")}>
                            <Form.Item
                                name="counselFieldIdList"
                                rules={[
                                    {
                                        required: true,
                                        message: '1개 이상 선택',
                                    },
                                ]}
                            >
                                <Checkbox.Group name="counselFieldIdList" options={counselField.list} onChange={(e) => {
                                    changeCounselField(e);
                                }}/>
                            </Form.Item>
                        </ul>
                    </div>

                    <h2>희망 멘토</h2>
                    <div className={`${cx("hope_mentor")} clfx `}>
                        <Select defaultValue="" size='large' className={cx("mentor_field")} onChange={(e) =>{changeHopeMentorField(e)}}>
                            <Option value="">전체</Option>
                            {
                                counselField.list.map((item) =>{
                                    return <Option value={item.value} key={item.value}>{item.label}</Option>
                                })
                            }
                        </Select>
                        <Select
                            name="hopeMentor"
                            size='large'
                            showSearch
                            placeholder="희망하는 멘토가 있을 시 선택"
                            optionFilterProp="children"
                            value={applyForm.hopeMentor}
                            onChange={(e)=>{setApplyForm({...applyForm,hopeMentor:e})}}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            filterSort={(optionA, optionB) =>
                                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                            }
                        >
                            {hopeMentorList.map((item,index) =>{
                                return <Option value={item.mentorId} key={index}>{item.mentorName}</Option>
                            })}
                        </Select>
                    </div>

                    <h2>희망 상담 방식</h2>
                    <div className={cx("form_style_1")}>
                        <ul className={cx("list_5","way")}>
                            <Radio.Group name="formWayItem" options={wayItem.list} value={applyForm.formWayItem} defaultValue={1}  onChange={(e) => {
                                changeApplyFormValue(e)
                            }} />
                            {/*<Checkbox.Group name="formWayItem" options={wayItem.list} onChange={(e) =>{changeCounselWay(e);}} />*/}
                        </ul>
                    </div>

                    <h2>상담내용</h2>
                    <ul className={cx("consultation_details")}>
                        <li>
                            <Form.Item
                                label="제목"
                                name="title"
                                className={(cx("antd_input"))}
                                rules={[
                                    {
                                        required: true,
                                        message: '제목은 필수 입니다.',
                                    },
                                ]}
                            >
                                <Input placeholder={"제목"} name="title" value={applyForm.title}
                                       onChange={(e) => {
                                           changeApplyFormValue(e)
                                       }}/>
                            </Form.Item>
                        </li>
                        <li>
                            <div className={cx("editor_box")}>
                                <QuillEditor Contents={applyForm.content} QuillChange={setContent}/>
                            </div>
                        </li>
                        <li>
                            <span className={cx("title")}>첨부파일 (10MB 미만)</span>
                            <div className={`clfx `}>
                                <Upload
                                    customRequest={(e) =>{uploadFile(e)}}
                                    listType="picture-card"
                                    fileList={applyForm.uploadResultList}
                                    onChange={(e) =>{handleChangeUploadFile(e)}}
                                >
                                    {applyForm.uploadResultList.length >= 3 ? null : (
                                        <div>
                                            {loading ? <LoadingOutlined /> : <PlusOutlined />}
                                            <div style={{ marginTop: 8 }}>Upload</div>
                                        </div>
                                    )}
                                </Upload>
                                <Typography.Text type="danger">{error}</Typography.Text>
                            </div>
                            <p className={cx("help_txt01")}>※ 신청하신 멘토링과 관련된 참고자료를 첨부해주세요. 첨부파일은 담당 멘토에게 전달되며, 최대3개까지 첨부 가능합니다.</p>
                        </li>
                    </ul>
                    <div className={cx("txt_c")} style={{marginTop:40}}>
                        <input type="submit" value="신청하기" className={cx("basic-btn03", "btn-blue-bg2")}/>
                    </div>
                </div>
                </Form>
                <Modal visible={applyResultModal} closable={true} maskClosable={true} onClose={() => {setApplyResultModal(false);router.back();}} cx={cx} className={"counsel_apply_popup"}>
                    <h2 className={cx("popup_title")}>상담 신청이 완료되었습니다</h2>
                </Modal>
            </section>
        </>
    );
};

export default React.memo(CounselApply);
