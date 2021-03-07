import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Input, Tag, Button, Select, Form, Checkbox} from 'antd';

const {CheckableTag} = Tag;
import {useRouter} from "next/router";
import {
    commissionDownload,
    getCounselFieldCode,
    getMentor,
    initialize,
    updateMentorProfile
} from "../../../store/mentoring/mentoring";
import Link from 'next/link'

import styles from '../../../public/assets/styles/startup_info/startup_info.module.css';
import classnames from "classnames/bind"
import Image from "next/image";
import KeywordBox from "../../../component/stratup_counsel/mentor_apply/KeywordBox";
import CareerBox from "../../../component/stratup_counsel/mentor_apply/CareerBox";
import client from "../../../lib/api/client";
import Modal from "../../../component/common/Modal";

const cx = classnames.bind(styles);

const MentorProfile = () => {
    const {mentor, update,counselFieldList} = useSelector(({mentoring, loading}) => ({
        mentor: mentoring.mentor,
        update: mentoring.mentorUpdate,
        counselFieldList: mentoring.counselField,
    }))


    const [form] = Form.useForm();
    const personalDev = useRef();
    const profileImgInput = useRef();
    const dispatch = useDispatch();
    const router = useRouter();


    const [updateResultModal, setUpdateResultModal] = useState(false)
    const [image, setImage] = useState(null)
    const [mentorInfo, setMentorInfo] = useState({
        mentorIntroduction: "",
        mentorName: "",
        mentorCompany: "",
        mentorPhoneNumber: "",
        mentorKeyword: [],
        mentorFieldList: [],
        mentorEmail: "",
        mentorEmailId: "",
        mentorEmailDomain: "",
        mentorEmailDomainCustom: "",
        mentorPosition: "",
        currentCareer: "",
        mentorCareer: [],
    });

    useEffect(() => {
        dispatch(getMentor())
        dispatch(getCounselFieldCode())

        return () => {
            dispatch(initialize());
        }
    }, [])

    useEffect(() => {
        if(mentor != null){
            setMentorInfo({...mentorInfo,...mentor})
                setImage(mentor.filePath != null ? `${client.defaults.baseURL}/resource${mentor.filePath}/${mentor.fileName+mentor.fileExtension}` : null)
        }

    }, [mentor])
    useEffect(() => {

    }, [mentorInfo])



    const changeMentorValue = (e) => {
        const {name, value} = e.target

        if (name == "profileImg") {
            const {
                target: {files},
            } = e;
            if(files.length == 0){
                setMentorInfo({
                    ...mentorInfo,
                    profileImg: null
                })
                setImage(null)
            }else{
                const theFile = files[0];
                const reader = new FileReader();
                reader.readAsDataURL(theFile);
                reader.onloadend = (finishedEvent) => {
                    const {currentTarget: {result}} = finishedEvent;
                    setImage(result);
                }
                setMentorInfo({
                    ...mentorInfo,
                    profileImg: files[0]
                })
            }
            return;
        }
        setMentorInfo({
            ...mentorInfo,
            [name]: value,
        })
    }

    const changeMentorField = (tag, checked) => {
        const nextSelectedTags = checked ? [...mentorInfo.mentorFieldList, tag.value] : mentorInfo.mentorFieldList.filter(t => t !== tag.value);

        setMentorInfo({
            ...mentorInfo,
            mentorFieldList: nextSelectedTags
        })
    }
    useEffect(() =>{
        if(update.result && update.error == null){
            setUpdateResultModal(true);
        }

    },[update])

    const submitApply = () =>{
        dispatch(updateMentorProfile(mentorInfo))
    }


    const handleDownload = () => {
        dispatch(commissionDownload())
    }

    return (
        <div>
            <section className={cx("container")}>
                <div className={cx("sub_container", "mentor_group_write")}>
                    <h1 className={cx("sub_top_title")}>프로필 변경</h1>
                    <p className={cx("sub_top_txt")}>전문 멘토로부터 듣는 창업 알짜 정보 예비창업자를 위한 <br/>창업 전문 상담코너입니다.</p>

                    <div className={cx("tab_style_2")}>
                        <ul>
                            <li><Link href="/mypage/mentor"><a>나의 멘토링현황</a></Link></li>
                            <li className={cx("on")}><Link href="/mypage/mentor/profile"><a>프로필 변경</a></Link></li>
                            <li><a href={`${client.defaults.baseURL}/mentoring/commission`}>위촉장 발급</a></li>
                        </ul>
                    </div>
                    {mentor != null && (
                        <>
                            <h2>개인정보</h2>
                            <Form form={form} onFinish={(e) => {
                                submitApply(e)
                            }} onFinishFailed={(e) => {
                                personalDev.current.scrollIntoView();
                            }}
                                  initialValues={{
                                      mentorName: mentor.mentorName,
                                      mentorCompany: mentor.mentorCompany,
                                      mentorPosition: mentor.mentorPosition,
                                      mentorPhoneNumber: mentor.mentorPhoneNumber,
                                      mentorEmail: mentor.mentorEmail
                                  }}
                            >
                                <div className={`${cx("personal_info")} clfx `} ref={personalDev}>
                                    <div className={cx("photoArea")}>
                                        <div className={cx("photo")}>
                                            <div className={cx("photo_img")}>
                                                <img src={image != null ? image : '/assets/image/mentor_photo.jpg'}/>
                                            </div>
                                            <Button onClick={() => {
                                                profileImgInput.current.click();
                                            }}>
                                                <Image src="/assets/image/photo_btn.png" width={50} height={50}
                                                       alt="photo_btn"/>
                                                <input ref={profileImgInput} type="file" name="profileImg" hidden={true}
                                                       onChange={(e) => {
                                                           changeMentorValue(e)
                                                       }}
                                                />
                                            </Button>
                                        </div>
                                        <div className={cx("size_info")}>
                                            사진사이즈 <br/>200px X 200px
                                        </div>
                                    </div>
                                    <ul className={cx("clfx")}>
                                        <li>
                                            <div>
                                                <Form.Item
                                                    label="이름"
                                                    name="mentorName"
                                                    className={(cx("antd_input"))}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: '이름은 필수 입니다.',
                                                        },
                                                    ]}
                                                >
                                                    <Input placeholder={"이름"} name="mentorName"
                                                           value={mentorInfo.mentorName} onChange={(e) => {
                                                        changeMentorValue(e)
                                                    }}/>
                                                </Form.Item>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <Form.Item
                                                    label="소속"
                                                    name="mentorCompany"
                                                    className={(cx("antd_input"))}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: '소속은 필수 입니다.',
                                                        },
                                                    ]}
                                                >
                                                    <Input placeholder={"소속"} name="mentorCompany"
                                                           value={mentorInfo.mentorCompany} onChange={(e) => {
                                                        changeMentorValue(e)
                                                    }}/>
                                                </Form.Item>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <Form.Item
                                                    label="직위"
                                                    name="mentorPosition"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: '직위는 필수 입니다.',
                                                        },
                                                    ]}
                                                >
                                                    <Input placeholder={"직위"} name="mentorPosition"
                                                           value={mentorInfo.mentorPosition} onChange={(e) => {
                                                        changeMentorValue(e)
                                                    }}/>
                                                </Form.Item>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <Form.Item
                                                    label="연락처"
                                                    name="mentorPhoneNumber"
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
                                                    <Input placeholder={"연락처"} name="mentorPhoneNumber"
                                                           value={mentorInfo.mentorPhoneNumber} onChange={(e) => {
                                                        changeMentorValue(e)
                                                    }}/>
                                                </Form.Item>
                                            </div>
                                        </li>
                                        <li className={cx("email")}>
                                            <div className={"clfx"}>
                                                <Form.Item
                                                    label="E-MAIL"
                                                    name="mentorEmail"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            type: 'email',
                                                            message: 'E-MAIL은 필수 입니다.',
                                                        },
                                                    ]}
                                                >
                                                    <Input placeholder={"E-MAIL"} name="mentorEmail"
                                                           value={mentorInfo.mentorEmail} onChange={(e) => {
                                                        changeMentorValue(e)
                                                    }}/>
                                                </Form.Item>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <h2>멘토상세</h2>
                                <div className={`${cx("mentor_detail")} clfx `}>
                                    <ul className={cx("clfx")}>
                                        <li className={cx("field")}>
                                            <label htmlFor="startup_write_6">멘토링분야</label>
                                            <div className={cx("clfx")}>
                                                <div className={cx("counsel_field_box")}>
                                                    {counselFieldList.list.map(tag => (
                                                        <CheckableTag
                                                            className={cx("tag", {checked: mentorInfo.mentorFieldList.indexOf(tag.value) > -1})}
                                                            key={tag.value}
                                                            checked={mentorInfo.mentorFieldList.indexOf(tag.value) > -1}
                                                            onChange={checked => {
                                                                changeMentorField(tag, checked)
                                                            }}
                                                        >
                                                            {tag.label}
                                                        </CheckableTag>
                                                    ))}
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <label htmlFor="startup_write_7">멘토링 KEYWORD</label>
                                            <KeywordBox mentorInfo={mentorInfo} setMentorInfo={setMentorInfo} cx={cx}/>
                                        </li>
                                        <li>
                                            <label htmlFor="startup_write_8">주요경력 <span style={{fontSize:13,color:'gray'}}>ex)1996. 0. ~ 2000. 0.   00대학교 00학과 학사</span></label>
                                            <CareerBox mentorInfo={mentorInfo} setMentorInfo={setMentorInfo} cx={cx}/>
                                        </li>
                                    </ul>
                                    <div className={cx("in_word")}>
                                        <label htmlFor="startup_write_9">멘토 한마디</label>
                                        <Input.TextArea placeholder={"멘토 한마디"} name="mentorIntroduction"
                                                        value={mentorInfo.mentorIntroduction} onChange={(e) => {
                                            changeMentorValue(e)
                                        }} id="startup_write_9" rows="10"/>
                                    </div>
                                </div>
                                <div className={cx("txt_c")}>
                                    <input type="submit" value="수정하기" className={cx("basic-btn03", "btn-blue-bd")}/>
                                </div>
                            </Form>

                        </>
                    )}

                </div>
                <Modal visible={updateResultModal} closable={true} maskClosable={true} onClose={() => {setUpdateResultModal(false);router.push("/mypage/mentor")}} cx={cx} className={"mentor_apply_popup"}>
                    {/*<h2 className={cx("popup_title")}>변경이 완료되었습니다</h2>*/}
                    변경이 완료되었습니다
                </Modal>
            </section>
        </div>
    );
};

export default MentorProfile;
