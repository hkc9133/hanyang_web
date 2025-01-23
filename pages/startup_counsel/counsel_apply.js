import React, {useCallback, useEffect, useRef, useState} from 'react';
import styles from '../../public/assets/styles/startup_info/startup_info.module.css';
import classnames from "classnames/bind"
import Link from 'next/link'
import {
    Input,
    Tag,
    Button,
    Select,
    Form,
    Radio,
    Checkbox,
    Upload,
    Progress,
    Typography,
    Modal,
    Modal as AntdModal
} from 'antd';

const {Option} = Select;

import client from '../../lib/api/client';


import {useSelector, useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {
    getCounselApply,
    getCounselFieldCode, getMentorList,
    getProgressItem, getSortationItem, getWayItem,
    initialize
} from "../../store/mentoring/mentoring";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../../component/common/Editor"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
});
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';
import PersonalInfoForm from "../../component/stratup_counsel/counsel_apply/PersonalInfoForm";
import wrapper from "../../store/configureStore";
import {END} from "redux-saga";
import {htmlTagRemove} from "../../lib/util/StringUtil";
import {fileDownload} from "../../store/file/file";
import {applyCounsel, updateApplyCounsel} from "../../lib/api/mentoring/mentoring";

const cx = classnames.bind(styles);


export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    const cookie = context.req && context.req.headers.cookie ? context.req.headers.cookie : '';
    client.defaults.headers.Cookie = cookie;

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
})
const CounselApply = () => {

    const maxCnt = 500
    const [form] = Form.useForm();
    const personalDev = useRef();
    const hopeMentorSelect = useRef();
    const dispatch = useDispatch();
    const router = useRouter();

    const {user, counselApply, mentorList, counselField, progressItem, sortationItem, wayItem} = useSelector(({
                                                                                                                  auth,
                                                                                                                  mentoring,
                                                                                                                  loading
                                                                                                              }) => ({
        user: auth.user,
        mentorList: mentoring.mentorList,
        counselField: mentoring.counselField,
        progressItem: mentoring.progressItem,
        sortationItem: mentoring.sortationItem,
        wayItem: mentoring.wayItem,
        counselApply: mentoring.counselApply,
    }))

    const [applyForm, setApplyForm] = useState({
        // formId: "",
        userName: "",
        userCompany: "",
        userPhoneNum: "",
        userId: "",
        title: "",
        content: "",
        formNum: "",
        formProgressItem: 1,
        sortationIdList: [],
        wayIdList: [],
        menteeName: "asdasda",
        menteeEmail: "",
        menteePhoneNumber: "",
        counselFieldIdList: [],
        hopeMentor: null,
        isAgree: false,
        uploadResultList: [],
        oldUploadResultList: [],
        removeFiles: []
    })
    const [content, setContent] = useState("");
    const [editor, setEditor] = useState(null);
    const [applyResultModal, setApplyResultModal] = useState(false)

    // const [fileList ,setFileList] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [hopeMentorList, setHopeMentorList] = useState([]);

    useEffect(() => {

        if (user.login != null && !user.login) {
            Modal.warning({
                title: '로그인 후 이용하실 수 있습니다.',
                onOk: () => {
                    router.push("/user/login");
                }
            });
        } else {
            dispatch(getMentorList({pageSize: 500}))
            dispatch(getCounselFieldCode())
            dispatch(getProgressItem())
            dispatch(getSortationItem())
            dispatch(getWayItem())
        }
        return () => {
            dispatch(initialize());
        }
    }, [])

    const handleChangeUploadFile = ({fileList}) => {
        setApplyForm({
            ...applyForm,
            uploadResultList: fileList
        })
    }

    useEffect(() => {
        if (mentorList.list.length > 0) {
            setHopeMentorList(mentorList.list)
        }
    }, [mentorList.list])


    const changeHopeMentorField = (value) => {
        form.setFieldsValue({
            ...form.getFieldsValue(),
            hopeMentor: null
        })
        if (value == "") {
            setHopeMentorList(mentorList.list)
        } else {
            setHopeMentorList(mentorList.list.filter((mentor) => mentor.mentorFieldList.indexOf(value) > -1))
        }

    }

    useEffect(() => {
        if (maxCnt) {
            if (content) {
                if (htmlTagRemove(content).length > maxCnt) {
                    Modal.warning({
                        title: '',
                        content: `${maxCnt}자 까지 입력가능합니다.`
                    });
                }
            }
        }
    }, [content])


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
                "/resource/attach_file/MENTORING_ATTACH",
                fmData,
                config
            );
            onSuccess("Ok");
            setApplyForm({
                ...applyForm,
                uploadResultList: applyForm.uploadResultList.concat(res.data)
            })
            setLoading(false)
        } catch (err) {
            // console.log(err)
            setError("업로드 중 에러가 발생하였습니다");
            setLoading(false)
            onError({err});
        }
    };

    const submitApply = (type) => {
        if (user.role == "ROLE_MT" || user.role == "ROLE_USER") {
            Modal.warning({
                title: '창업상담신청은 로그인 후 이용하실 수 있습니다.',
            });
        } else {
            if (type == "APPLY" && htmlTagRemove(content).length < maxCnt) {
                Modal.warning({
                    title: '',
                    content: `${maxCnt}자 이상 작성해야합니다.`
                });
                return;
            }
            const data = {
                ...form.getFieldsValue(),
                applyStatus: type,
                content: editor.getData(),
                sortationIdList: form.getFieldValue("formSortationItem"),
                wayIdList: form.getFieldValue("formWayItem"),
                uploadResultList: applyForm.uploadResultList.map((item) => {
                    return item.fileId
                }),
                removeFiles:[]
            }
            // data.hopeMentor == null || data.hopeMentor == '' && delete data.hopeMentor
            if (data.hopeMentor == null || data.hopeMentor == '') {
                delete data.hopeMentor
            }

            applyCounsel(data).then((e) =>{
                Modal.info({
                    title: `${type == "TEMP" ? "저장" : "신청"}이 완료되었습니다.`,
                    okText:"닫기",
                    onOk:() =>{
                        router.push("/mypage/mentee")
                    },
                    maskClosable:false,
                });
            }).catch((e) =>{
                Modal.error({
                    title: '에러가 발생했습니다',
                    okText:"닫기",
                    maskClosable:false,
                });
            })
        }
    }

    const submitTemp = (e) => {
        form.validateFields().then((e) => {
            submitApply("TEMP")
        }).catch((error) => {
            console.log(error)
            if (error.errorFields.length > 0) {
                form.scrollToField(error.errorFields[0]['name'][0])
            }

        })

    }


    return (
        <>
            {/*<PageNavigation/>*/}
            <section className={cx("container")}>
                <Form form={form} onFinish={(e) => {
                    console.log(e)
                    submitApply("APPLY")
                }} scrollToFirstError={true}>
                    <div className={cx("sub_container", "mentor_group_write")}>
                        <h1 className={cx("sub_top_title")}>창업 상담</h1>
                        <p className={cx("sub_top_txt")}>(예비)창업자의 기술‧경영 애로사항을 해결하기 위해 <br/>온·오프라인 창업상담 프로그램을 운영합니다.</p>

                        <div className={cx("tab_style_2")}>
                            <ul>
                                <li className={cx("on")}><Link
                                    href="/startup_counsel/counsel_apply"><a>창업상담하기</a></Link></li>
                                {/*<li><Link href="/startup_counsel/counsel_apply_list"><a>창업신청현황</a></Link></li>*/}
                            </ul>
                        </div>

                        <h2 ref={personalDev}>개인정보</h2>
                        <PersonalInfoForm cx={cx}/>

                        <div className={cx("termsArea")}>
                            <h3><span style={{color: 'red'}}>*</span>개인정보처리방침</h3>
                            <div className={cx("terms_box")}>
<pre>
한양대학교 창업지원단 개인정보 처리방침
한양대학교 창업지원단은 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립·공개합니다.

제1조(개인정보의 처리목적)
한양대학교 창업지원단은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다

 가. 한양대학교 창업지원단 홈페이지에서 제공하는 회원제 서비스(창업상담) 이용에 따른 서비스를 제공하기 위해 개인정보(신청자 성명, e-mail, 전화번호)를 처리합니다.
</pre>
                            </div>
                            <div className={cx("agree")}>
                                <Form.Item
                                    name="isAgree"
                                    valuePropName="checked"
                                    rules={[
                                        {
                                            validator: (_, value) =>
                                                value ? Promise.resolve() : Promise.reject(new Error('개인정보 처라방침 동의는 필수 입니다.')),
                                        },
                                    ]}
                                >
                                    <Checkbox name="isAgree">개인정보처리방침안내 내용에 동의 합니다</Checkbox>
                                </Form.Item>
                            </div>
                        </div>

                        <h2><span style={{color: 'red'}}>*</span>구분</h2>
                        <div className={cx("form_style_1")}>
                            <ul className={cx("list_2")}>
                                <Form.Item
                                    name="formSortationItem"
                                    rules={[
                                        {
                                            required: true,
                                            message: '1개 이상 선택',
                                        },
                                    ]}
                                >
                                    <Checkbox.Group name="formSortationItem" options={sortationItem.list}
                                    />
                                </Form.Item>
                            </ul>
                        </div>

                        <h2><span style={{color: 'red'}}>*</span>창업진행 상황</h2>
                        <div className={cx("form_style_1")}>
                            <ul className={cx("list_3")}>
                                <Form.Item
                                    name="formProgressItem"
                                    rules={[
                                        {
                                            required: true,
                                            message: '1개 이상 선택',
                                        },
                                    ]}
                                >
                                    <Radio.Group name="formProgressItem" options={progressItem.list}/>
                                </Form.Item>
                            </ul>
                        </div>

                        <h2><span style={{color: 'red'}}>*</span>희망 멘토링 분야</h2>
                        <div className={cx("form_style_1")}>
                            <ul className={cx("list_5")}>
                                <Form.Item
                                    name="fieldId"
                                    rules={[
                                        {
                                            required: true,
                                            message: '1개 이상 선택',
                                        },
                                    ]}
                                >
                                    <Radio.Group name="fieldId" options={counselField.list}/>
                                </Form.Item>
                            </ul>
                        </div>

                        <h2>희망 멘토</h2>
                        <div className={`${cx("hope_mentor")} clfx `}>
                            <Select defaultValue="" size='large' className={cx("mentor_field")} onChange={(e) => {
                                changeHopeMentorField(e)
                            }}>
                                <Option value="">전체</Option>
                                {
                                    counselField.list.map((item) => {
                                        return <Option value={item.value}
                                                       key={`${item.value}_mentor_field`}>{item.label}</Option>
                                    })
                                }
                            </Select>
                            <Form.Item
                                name="hopeMentor"
                                style={{display: 'inline-block'}}
                            >
                                <Select
                                    name="hopeMentor"
                                    size='large'
                                    showSearch
                                    placeholder="희망하는 멘토가 있을 시 선택"
                                    optionFilterProp="children"
                                    value={applyForm.hopeMentor}
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                    filterSort={(optionA, optionB) =>
                                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                    }
                                >
                                    {hopeMentorList.map((item, index) => {
                                        return <Option value={item.mentorId}
                                                       key={`${item.mentorId}_mentor`}>{item.mentorName}</Option>
                                    })}
                                </Select>
                            </Form.Item>
                        </div>

                        <h2><span style={{color: 'red'}}>*</span>희망 상담 방식</h2>
                        <div className={cx("form_style_1")}>
                            <ul className={cx("list_5", "way")}>
                                <Form.Item
                                    name="formWayItem"
                                    rules={[
                                        {
                                            required: true,
                                            message: '1개 이상 선택',
                                        },
                                    ]}
                                >
                                    <Checkbox.Group name="formWayItem" options={wayItem.list}/>
                                </Form.Item>
                            </ul>
                        </div>

                        <h2>상담내용</h2>
                        <ul className={cx("consultation_details")}>
                            <li>
                                <Form.Item
                                    label={<span><span style={{color: 'red'}}>*</span>제목</span>}
                                    name="title"
                                    className={(cx("antd_input"))}
                                    rules={[
                                        {
                                            required: true,
                                            message: '제목은 필수 입니다.',
                                        },
                                    ]}
                                >
                                    <Input placeholder={"제목"} name="title" value={applyForm.title}/>
                                </Form.Item>
                            </li>
                            <li>
                                <div className={cx("editor_box")}>
                                    <Editor setEditor={setEditor} setContent={setContent} content={content}
                                            placeholder={"상담이 필요한 내용을 3~5줄 이상 구체적으로 작성해주십시오"}/>
                                    {`${htmlTagRemove(content).length}자 / ${maxCnt}자`}
                                </div>
                            </li>
                            <li>
                                <span className={cx("title")}>첨부파일 (10MB 미만)</span>
                                <div className={`clfx `}>
                                    <Upload
                                        customRequest={(e) => {
                                            uploadFile(e)
                                        }}
                                        listType="picture-card"
                                        fileList={applyForm.uploadResultList}
                                        onChange={(e) => {
                                            handleChangeUploadFile(e)
                                        }}
                                    >
                                        {applyForm.uploadResultList.length >= 3 ? null : (
                                            <div>
                                                {loading ? <LoadingOutlined/> : <PlusOutlined/>}
                                                <div style={{marginTop: 8}}>Upload</div>
                                            </div>
                                        )}
                                    </Upload>
                                    <Typography.Text type="danger">{error}</Typography.Text>
                                </div>
                                <p className={cx("help_txt01")}>※ 신청하신 멘토링과 관련된 참고자료를 첨부해주세요. 첨부파일은 담당 멘토에게 전달되며, 최대3개까지
                                    첨부 가능합니다.</p>
                            </li>
                        </ul>
                        <div className={cx("txt_c")} style={{marginTop: 40}}>
                            <input type="submit" value="신청하기" className={cx("basic-btn03", "btn-blue-bg2")}/>
                            <input type="button" value="임시 저장하기"
                                   onClick={() => {
                                       submitTemp()
                                   }}
                                   className={cx("basic-btn03", "btn-black-bd", "tmp_btn")}/>
                        </div>
                    </div>
                </Form>
            </section>
        </>
    );
};

export default React.memo(CounselApply);
