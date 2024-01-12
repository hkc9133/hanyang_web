import React, {useEffect, useRef, useState} from 'react';
import {useRouter} from "next/router";
import styles from '../../../../public/assets/styles/admin/mentor/mentor.module.css';
import classnames from "classnames/bind"
import {useDispatch, useSelector} from "react-redux";
import {getMentor, getCounselFieldCode, initialize, updateMentor} from "../../../../store/mentoring/adminMentoring";
import {Button, Form, Input,Modal, Tag} from "antd";
import client, {baseUrl} from '../../../../lib/api/client'
import CheckableTag from "antd/lib/tag/CheckableTag";
import KeywordBox from "../../../../component/stratup_counsel/mentor_apply/KeywordBox";
import CareerBox from "../../../../component/stratup_counsel/mentor_apply/CareerBox";
import Image from "next/image";

const cx = classnames.bind(styles);

const DetailView = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const profileImgInput = useRef();

    const [mentorInfo, setMentorInfo] = useState(null);
    const [image, setImage] = useState(null)
    const [showResultModal,setShowResultModal] = useState(false);

    const {mentor, counselFieldList, update} = useSelector(({adminMentoring, loading}) => ({
        mentor: adminMentoring.mentor,
        counselFieldList: adminMentoring.counselField,
        update: adminMentoring.update,
    }))

    useEffect(() => {
        if (mentor.mentor != null) {
            setMentorInfo({
                ...mentor.mentor,
            })
            setImage(mentor.mentor.filePath != null && `${baseUrl}/resource${mentor.mentor.filePath}/${mentor.mentor.fileName+mentor.mentor.fileExtension}`)
        }
    }, [mentor.mentor])

    useEffect(() => {
        dispatch(getMentor(router.query.mentorId))
        dispatch(getCounselFieldCode())
        return () => {
            dispatch(initialize())
        }
    }, [])

    const changeMentorValue = (e) => {
        const {name, value} = e.target

        if (name == "profileImg") {
            const {
                target: {files},
            } = e;
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
            return;
        }

        if (name == 'isBest') {
            setMentorInfo({
                ...mentorInfo,
                isBest: e.target.checked,
            })
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

    const saveMentor = () => {
        dispatch(updateMentor(mentorInfo));
    }

    useEffect(() => {
        if (update.result === true && update.error === null) {
            // alert("업데이트 성공")
            // router.push("/admin/mentor")
            // setShowResultModal(true)
            Modal.success({
                content: '저장이 완료되었습니다',
                onOk:() => {router.query.prev ? router.push(router.query.prev) : router.push("/admin/mentor");}
            });
        }

    }, [update])

    return (
        <>
            {mentorInfo == null ? <div>null...</div> : (
                <section className={cx("container")}>
                    <h1 className={cx("top_title")}>멘토상세 페이지</h1>
                    <Form form={form}
                          onFinish={saveMentor}
                          initialValues={{
                              mentorName: mentor.mentor.mentorName,
                              mentorCompany: mentor.mentor.mentorCompany,
                              mentorPosition: mentor.mentor.mentorPosition,
                              mentorPhoneNumber: mentor.mentor.mentorPhoneNumber,
                              mentorEmail: mentor.mentor.mentorEmail
                          }}
                    >
                        <div className={cx("adm_container")}>
                            <div className={cx("box")}>
                                <div className={cx("mentor_detail")}>
                                    <h2>개인정보</h2>
                                    <div className={cx("tb_style_2")}>
                                        <table>
                                            <colgroup>
                                                <col style={{width: 240}}/>
                                                <col style={{width: 600}}/>
                                                <col style={{width: 220}}/>
                                            </colgroup>
                                            <tbody>
                                            <tr>
                                                <th scope="row">이름</th>
                                                <td>
                                                    <Form.Item
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
                                                </td>
                                                <td rowSpan="6" className={cx("bd_left")}>
                                                    <div className={cx("photoArea")}>
                                                        <div className={cx("photo")}>
                                                            <div className={cx("photo_img")}>
                                                                <img src={image != null ? image : '/assets/image/mentor_photo.jpg'}/>
                                                            </div>
                                                            <Button className={cx("photo_open")} onClick={() => {
                                                                profileImgInput.current.click();
                                                            }} >
                                                                <Image src="/assets/image/photo_btn.png" width={50} height={50}
                                                                       alt="photo_btn"/>
                                                                <input ref={profileImgInput} type="file" name="profileImg" hidden={true}
                                                                       onChange={(e) => {
                                                                           changeMentorValue(e)
                                                                       }}
                                                                />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    <div className={cx("photo_info")}>
                                                        사진사이즈 200px X 200px
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">아이디</th>
                                                <td>
                                                    <input type="text" value={mentorInfo.userId} readOnly={true}/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">소속</th>
                                                <td>
                                                    <Form.Item
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
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">직위</th>
                                                <td>
                                                    <Form.Item
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
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">이메일</th>
                                                <td>
                                                    <Form.Item
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
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">연락처</th>
                                                <td>
                                                    <Form.Item
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
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h2>멘토상세</h2>
                                    <div className={cx("tb_style_2")}>
                                        <table>
                                            <colgroup>
                                                <col style={{width: 240}}/>
                                                <col/>
                                                <col/>
                                            </colgroup>
                                            <tbody>
                                            <tr>
                                                <th scope="row">멘토링 분야</th>
                                                <td>
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
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">멘토링 KEYWORD</th>
                                                <td>
                                                    <KeywordBox mentorInfo={mentorInfo} setMentorInfo={setMentorInfo}
                                                                cx={cx}/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">주요경력</th>
                                                <td>
                                                    <div className={cx("career_box")}>
                                                        <CareerBox mentorInfo={mentorInfo} setMentorInfo={setMentorInfo}
                                                                   cx={cx}/>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">멘토 한마디</th>
                                                <td>
                                                    <Input.TextArea placeholder={"멘토 한마디"} name="mentorIntroduction"
                                                                    value={mentorInfo.mentorIntroduction}
                                                                    onChange={(e) => {
                                                                        changeMentorValue(e)
                                                                    }} id="startup_write_9" rows="10"/>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h2>멘토 상태</h2>
                                    <div className={cx("tb_style_2")}>
                                        <table>
                                            <colgroup>
                                                <col style={{width: 240}}/>
                                                <col/>
                                            </colgroup>
                                            <tbody>
                                            <tr>
                                                <th scope="row">현재 상태</th>
                                                <td>
                                                    <select value={mentorInfo.mentorStatus} name="mentorStatus" onChange={(e)=>{changeMentorValue(e)}}>
                                                        <option value="ACCEPT">승인</option>
                                                        <option value="STANDBY">미승인</option>
                                                    </select>
                                                    <span>
                                                        <input id="isBest" type="checkbox" name="isBest" checked={mentorInfo.isBest} onChange={changeMentorValue}/>
                                                        <label htmlFor="isBest">우수 멘토</label>
									                </span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className={cx("txt_c pt_60")}>
                                        <button type="submit" className={cx("basic-btn02", "btn-gray-bg")}>저장하기</button>
                                        <button type="button" className={cx("basic-btn02", "btn-gray-bd2")} onClick={() =>{router.back();}}>취소하기</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </section>
            )}
        </>
    );
};

export default DetailView;
