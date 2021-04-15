import React, {useState, useEffect, useRef} from 'react';
import styles from '../../public/assets/styles/startup_info/startup_info.module.css';
import classnames from "classnames/bind"
import {Input, Tag, Button, Select,Form,Checkbox } from 'antd';
const {CheckableTag} = Tag;
import Image from "next/image";
import PageNavigation from "../../component/layout/PageNavigation";
import {useSelector,useDispatch} from "react-redux";
import KeywordBox from "../../component/stratup_counsel/mentor_apply/KeywordBox";
import CareerBox from "../../component/stratup_counsel/mentor_apply/CareerBox";
import {applyMentor, getCounselFieldCode, getMentorCheck, initialize} from "../../store/mentoring/mentoring";
import Modal from "../../component/common/Modal";
import {useRouter} from "next/router";
import Head from "next/head";

const cx = classnames.bind(styles);

const counselField = [
    {fieldId: 1, fieldName: "세무·회계"},
    {fieldId: 2, fieldName: "법률·법무"},
    {fieldId: 3, fieldName: "지식재산권"},
    {fieldId: 4, fieldName: "마케팅·판로"},
    {fieldId: 5, fieldName: "노무"},
    {fieldId: 6, fieldName: "투자"},
    {fieldId: 7, fieldName: "초기 창업자금 조달"},
    {fieldId: 8, fieldName: "비즈니스모델링"},
    {fieldId: 9, fieldName: "시제품·개발"},
    {fieldId: 10, fieldName: "글로벌 진출"},
    {fieldId: 11, fieldName: "스케일업(코스탁 CEO등)"},
    {fieldId: 12, fieldName: "캠퍼스 기술자문(교수)"},
    {fieldId: 13, fieldName: "민간기술자문(대기업 임직원)"},
    {fieldId: 14, fieldName: "또래 CEO"}
]
const MentorApply = () => {

    const {user,apply,counselFieldList,mentorCheck} = useSelector(({auth,mentoring, loading}) => ({
        user: auth.user,
        apply:mentoring.apply,
        counselFieldList:mentoring.counselField,
        mentorCheck:mentoring.mentorCheck
    }))
    const [form] = Form.useForm();
    const personalDev = useRef();
    const dispatch = useDispatch();
    const router = useRouter();

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
        isAgree:false
    })
    const [isLoading, setIsLoading] = useState(true)
    const [image, setImage] = useState(null)
    const [applyResultModal, setApplyResultModal] = useState(false)
    const [checkResultModal, setCheckResultModal] = useState(false)
    const profileImgInput = useRef();

    useEffect(() =>{
        dispatch(getMentorCheck())
        dispatch(getCounselFieldCode())

        return () =>{
            dispatch(initialize());
        }
    },[])

    useEffect(() =>{
        if(mentorCheck.result && mentorCheck.code == 409){
            setCheckResultModal(true)
        }else{
            setIsLoading(false)
        }

    },[mentorCheck])

    useEffect(() =>{
        if(user.info != null){
            const userName = user.info.userName != null ? user.info.userName : "";
            let emailId ="";
            let emailDomain=""
            if(user.info.userEmail != null){
                const emailArr = user.info.userEmail.split('@');
                emailId = emailArr[0];
                emailDomain = emailArr[1];
            }
            setMentorInfo({
                ...mentorInfo,
                mentorName: user.info.userName != null ? user.info.userName : "",
                mentorEmailId: emailId,
                mentorEmailDomain: emailDomain
            })
        }

    },[user.info])

    useEffect(() =>{
        // console.log(mentorInfo)
    },[mentorInfo])


    const changeMentorValue = (e) => {
        const {name, value} = e.target

        if(name == "profileImg"){
            const {
                target : {files},
            } = e;
            const theFile = files[0];
            const reader = new FileReader();
            reader.readAsDataURL(theFile);
            reader.onloadend = (finishedEvent) =>{
                const {currentTarget : { result }} = finishedEvent;
                setImage(result);
            }
            setMentorInfo({
                ...mentorInfo,
                profileImg: files[0]
            })
            return;
        }

        if(name =='isAgree'){
            setMentorInfo({
                ...mentorInfo,
                isAgree: e.target.checked,
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


    const submitApply = (e) => {
        dispatch(applyMentor(mentorInfo));
    }

    useEffect(() =>{
        if(apply.result && apply.error == null){
            setApplyResultModal(true);
        }

    },[apply])

    return (
        <>
            <Head>
                <title>한양대학교 창업지원단 -멘토단 신청</title>
            </Head>
            <Modal visible={checkResultModal} closable={true} maskClosable={true} onClose={() => {setCheckResultModal(false);router.back();}} cx={cx} className={"mentor_apply_popup"}>
                <h2 className={cx("popup_title")}>이미 신청한 내역이 있습니다</h2>
            </Modal>
            <PageNavigation/>
            {!isLoading && mentorCheck.code !== 409  &&(
                <section className={cx("container")} hidden={mentorCheck.code === 409}>
                    <div className={cx("sub_container", "mentor_group_write")}>
                        <h1 className={cx("sub_top_title")}>멘토단 신청</h1>
                        <p className={cx("sub_top_txt")}>전문 멘토로부터 듣는 창업 알짜 정보 예비창업자를 위한 <br/>창업 전문 상담코너입니다.</p>
                        <h2>개인정보</h2>
                        <Form form={form} onFinish={(e) =>{submitApply(e)}} onFinishFailed={(e) =>{personalDev.current.scrollIntoView();}}>
                            <div className={`${cx("personal_info")} clfx `} ref={personalDev}>
                                <div className={cx("photoArea")}>
                                    <div className={cx("photo")}>
                                        <div className={cx("photo_img")}>
                                            <Image src={image != null ? image : "/assets/image/mentor_photo.jpg"} layout={"fill"} alt="mentor_photo"/>
                                        </div>
                                        <Button onClick={() =>{profileImgInput.current.click();}}>
                                            <Image src="/assets/image/photo_btn.png" width={50} height={50} alt="photo_btn"/>
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
                                                <Input placeholder={"이름"} name="mentorName" value={mentorInfo.mentorName} onChange={(e)=>{changeMentorValue(e)}}/>
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
                                                <Input placeholder={"소속"}  name="mentorCompany" value={mentorInfo.mentorCompany} onChange={(e)=>{changeMentorValue(e)} }/>
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
                                                <Input placeholder={"직위"} name="mentorPosition" value={mentorInfo.mentorPosition} onChange={(e)=>{changeMentorValue(e)}} />
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
                                                <Input placeholder={"연락처"}  name="mentorPhoneNumber" value={mentorInfo.mentorPhoneNumber} onChange={(e)=>{changeMentorValue(e)}} />
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
                                                        type:'email',
                                                        message: 'E-MAIL은 필수 입니다.',
                                                    },
                                                ]}
                                            >
                                                <Input placeholder={"E-MAIL"}  name="mentorEmail" value={mentorInfo.mentorEmail} onChange={(e)=>{changeMentorValue(e)}} />
                                            </Form.Item>
                                        </div>
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
                                                required: !mentorInfo.isAgree,
                                                message: '개인정보 처라방침 동의는 필수 입니다.',
                                            },
                                        ]}
                                    >
                                        <Checkbox name="isAgree" checked={mentorInfo.isAgree} onChange={(e)=>{changeMentorValue(e)}}>개인정보처리방침안내 내용에 동의 합니다</Checkbox>
                                    </Form.Item>
                                </div>
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
                                        <label htmlFor="startup_write_8">주요경력</label>
                                        <CareerBox mentorInfo={mentorInfo} setMentorInfo={setMentorInfo} cx={cx}/>
                                    </li>
                                </ul>
                                <div className={cx("in_word")}>
                                    <label htmlFor="startup_write_9">멘토 한마디</label>
                                    <Input.TextArea  placeholder={"멘토 한마디"}  name="mentorIntroduction" value={mentorInfo.mentorIntroduction} onChange={(e)=>{changeMentorValue(e)}}  id="startup_write_9" rows="10"/>
                                </div>
                            </div>
                            <div className={cx("txt_c")}>
                                <input type="submit" value="지원하기" className={cx("basic-btn03", "btn-blue-bd")}/>
                            </div>
                        </Form>
                    </div>
                    <Modal visible={applyResultModal} closable={true} maskClosable={true} onClose={() => {setApplyResultModal(false);router.back();}} cx={cx} className={"mentor_apply_popup"}>
                        <h2 className={cx("popup_title")}>멘토 신청이 완료되었습니다</h2>
                        <p>심사 후 확정 됩니다</p>
                    </Modal>
                </section>
            )}
        </>
    );
};

export default MentorApply;
