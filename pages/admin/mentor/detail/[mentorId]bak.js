import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import styles from '../../../../public/assets/styles/admin/mentor/mentor.module.css';
import classnames from "classnames/bind"
import {useDispatch, useSelector} from "react-redux";
import {getMentor, initialize, updateMentor} from "../../../../store/mentoring/adminMentoring";
import {Tag} from "antd";
import client from'../../../../lib/api/client'
const cx = classnames.bind(styles);

const DetailView = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [mentorValue, setMentorValue] = useState(null);

    const {mentor,update} = useSelector(({adminMentoring,loading})=> ({
        mentor:adminMentoring.mentor,
        update:adminMentoring.update,
    }))

    useEffect(() =>{
        if(mentor.mentor != null){
            setMentorValue({
                ...mentor.mentor,
            })
        }
    },[mentor.mentor])

    useEffect(() =>{
        dispatch(getMentor(router.query.mentorId))
        return () =>{
            dispatch(initialize())
        }
    },[])

    const changeMentorValue = (e) =>{
        const {name, value} = e.target
        setMentorValue({
            ...mentorValue,
            [name]:value
        })
    }

    const saveMentor = () =>{
        dispatch(updateMentor(mentorValue));
    }

    useEffect(() => {
        if(update.result === true && update.error === null){
            alert("업데이트 성공")
            router.push("/admin/mentor")
        }

    },[update])

    return (
        <>
            {mentorValue == null ? <div>null...</div> : (
                <section className={cx("container")}>
                    <h1 className={cx("top_title")}>멘토</h1>
                    <div className={cx("adm_container")}>
                        {/*<div className={`${cx("mentor_info","box")} clfx `}>*/}
                        {/*    <ul className={"clfx"}>*/}
                        {/*        <li>*/}
                        {/*            <span className={cx("title","icon_1")}>{mentorValue.mentorName}</span>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}

                        <p className={cx("txt_style_1")}>
                            {/*회원자료 삭제 시 다른 회원이 기존 회원아이디를 사용하지 못하도록 회원아이디, 이름, 닉네임은 삭제하지 않고 영구*/}
                            {/*보관합니다.*/}
                        </p>

                        <div className={cx("admin_cont")}>
                            <h2 className={cx("title_style_1")}><span>멘토 상세</span></h2>
                            <div className={cx("photo_img")}>
                                <img src={mentorValue.fileName ? `${client.defaults.baseURL}/resource${mentorValue.filePath}/${mentorValue.fileName+mentorValue.fileExtension}` : '/assets/image/mentor_photo.jpg'}/>
                            </div>
                            <div className={cx("tb_style_1","edit_form")}>
                                <table>
                                    <colgroup>
                                        <col style={{width:"30%"}}/>
                                        <col/>
                                    </colgroup>
                                    <thead>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>아이디</td>
                                        <td>
                                            {mentorValue.userId}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>이름</td>
                                        <td>
                                            {mentorValue.mentorName}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>핸드폰</td>
                                        <td>
                                            {mentorValue.mentorPhoneNumber}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>E-MAIL</td>
                                        <td>
                                            {mentorValue.mentorEmail}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>소속</td>
                                        <td>
                                            {mentorValue.mentorCompany}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>경력</td>
                                        <td>
                                            {mentorValue.mentorCareer.map((item,index) =>(
                                                <Tag className={cx("mg_t10")} key={index}>{item}</Tag>
                                            ))}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>키워드</td>
                                        <td>
                                            {mentorValue.mentorKeyword.map((item,index) =>(
                                                <Tag className={cx("mg_t10")} key={index}>{item}</Tag>
                                            ))}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>소개</td>
                                        <td>
                                            {mentorValue.mentorIntroduction}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>승인 상태</td>
                                        <td>
                                            <select value={mentorValue.mentorStatus} name="mentorStatus" onChange={(e)=>{changeMentorValue(e)}}>
                                                <option value="ACCEPT">승인</option>
                                                <option value="STANDBY">미승인</option>
                                            </select>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div className={cx("btn-box01")}>
                                    <button className={cx("basic-btn02")} onClick={() =>{router.back()}}>뒤로가기</button>
                                    <button className={cx("basic-btn01")}  onClick={() =>{saveMentor()}}>저장</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default DetailView;
