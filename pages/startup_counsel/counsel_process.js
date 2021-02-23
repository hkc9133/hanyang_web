import React, {useEffect, useState} from 'react';
import PageNavigation from "../../component/layout/PageNavigation";
import Link from 'next/link'
import styles from '../../public/assets/styles/mentor/mentor.module.css';
import classnames from "classnames/bind"
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import client from "../../lib/api/client";
import {getBestMentor} from "../../store/mentoring/mentoring";
const cx = classnames.bind(styles);

const CounselApply = () => {

    const dispatch = useDispatch();

    const {bestMentor} = useSelector(({mentoring, loading}) => ({
        bestMentor:mentoring.bestMentor
    }))

    const [image, setImage] = useState(null)
    const [mentorInfo, setMentorInfo] = useState(null)

    useEffect(() => {
        dispatch(getBestMentor())
    }, [])

    useEffect(() => {
        if(bestMentor != null){
            setMentorInfo({...mentorInfo,...bestMentor})
            setImage(bestMentor.filePath != null ? `${client.defaults.baseURL}/resource${bestMentor.filePath}/${bestMentor.fileName+bestMentor.fileExtension}` : null)
        }

    }, [bestMentor])


    return (
        <>
            <PageNavigation/>
            <section className={cx("sub_container","consultation")}>
                <h1 className={cx("sub_top_title")}>창업상담</h1>
                <p className={cx("sub_top_txt")}>
                    (예비)창업자의 기술·경영 애로사항을 해결하기 위해<br/>
                    온·오프라인 창업상담 프로그램을 운영합니다.
                </p>
                <div className={cx("txt_c")}>
                    <Link href={"/startup_counsel/mentor_introduce"}><a className={`${cx("basic-btn03","btn-blue-bg2")} mr_20`}>멘토찾기</a></Link>
                    <Link href="/startup_counsel/counsel_apply"><a className={cx("basic-btn03","btn-blue-bd")}>창업상담 신청하기</a></Link>
                </div>



                {bestMentor != null && (
                    <div className={`${cx("mentor_month")} clfx`}>
                        <div className={cx("title")}>
                            <h2>이달의 멘토</h2>
                            <p>
                                멘티로부터 추천받은 <br/>이달의 멘토
                            </p>
                        </div>
                        <div className={cx("photoArea")}>
                            <div className={cx("photo")}>
                                {/*<img src={image != null ? image : '/assets/image/mentor_photo.jpg'}/>*/}
                                <Image src={image != null ? image : '/assets/image/mentor_photo.jpg'} width={198} height={198} alt="mentor_photo"/>
                            </div>
                            <span className={cx("name")}>{bestMentor.mentorName}</span>
                            <span className={cx("job")}>{bestMentor.mentorPosition}</span>
                        </div>
                        <div className={cx("txt_area")}>
                            <div className={cx("tag")}>{bestMentor.mentorKeyword.map((keyword)=>(`#${keyword} `))}</div>
                            <ul>
                                {bestMentor.mentorCareer.map((career)=>(
                                    <li>{career}</li>
                                ))}
                            </ul>
                            <p>
                                {bestMentor.mentorIntroduction}
                            </p>
                        </div>
                    </div>
                )}

                <div className={cx("before_counseling","txt_style_1")}>
                    <div className={cx("left_title")}>
                        <h2 className={cx("title_style_3")}>상담하기 전에 <br/>이것부터 보고가세요!</h2>
                    </div>
                    <div className={cx("txtArea")}>
                        <ul className={`${cx("icon_list")} clfx`}>
                            <li className={cx("icon_1")}>
                                <a href="#">
                                    세무,회계 <br/>기본지식 알고가기
                                </a>
                            </li>
                            <li className={cx("icon_2")}>
                                <a href="#">
                                    알면 도움되는 <br/> 스타트업 법률상식
                                </a>
                            </li>
                            <li className={cx("icon_3")}>
                                <a href="#">
                                    스타트업 <br/>투자유치 A to Z
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx("consultation_csCenter")}>
                    <div className={cx("txt_style_1")}>
                        <div className={cx("left_title")}>
                            <h2 className={cx("title_style_3")}>창업이 <br/>궁금할땐?</h2>
                        </div>
                        <div className={cx("txtArea")}>
                            <ul>
                                <li>
                                    <h3>창업상담 대표번호</h3>
                                    02-2220-3000
                                </li>
                                <li className={cx("kakao")}>
                                    카카오톡채널. 한양스타트업톡톡
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={cx("counselingBtnArea")}>
                    <Link href={"/startup_counsel/mentor_apply"}><a>멘토지원하기</a></Link>
                </div>

                <div className={cx("step")}>
                    <div className={cx("txt_style_1")}>
                        <div className={cx("left_title")}>
                            <h2 className={cx("title_style_3")}>상담절차</h2>
                            <p>
                                온·오프라인 창업상담을 <br/>지원하고 있습니다.
                            </p>
                        </div>
                        <div className={cx("txtArea")}>
                            <ol>
                                <li>
                                    <span className={cx("number")}><strong>01.</strong> 상담신청</span>
                                    <ul>
                                        <li><span>상담대상: </span>한양대 창업지원단 창업지원사업 및 프로그램 수혜자, 한양대학교(원) 재(휴)학생 및 동문,
                                            한양사이버대학교 재학생
                                        </li>
                                        <li><span>상담분야: </span>세무,회계 / 법률법무 / 지식재산권 / 마케팅판로 / 노무 / 투자 / 초기 창업자금 조달 /
                                            비즈니스모델링 / 시제품개발 /<br/>글로벌진출 / 스케일업(코스닥 CEO등) / 민간 기술자문(대기업 임직원) / 또래CEO
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span className={cx("number")}><strong>02.</strong> 멘토 배정</span>
                                    <p>
                                        멘토 배정에는 최대 일주일의 시간이 소요됩니다.
                                    </p>
                                </li>
                                <li>
                                    <span className={cx("number")}><strong>03.</strong> 상담일정조율</span>
                                    <p>
                                        최종 배정된 멘토가 멘티에게 연락하여 상담일, 시간, 장소, 멘토링 방법 등을 조율합니다.
                                    </p>
                                </li>
                                <li>
                                    <span className={cx("number")}><strong>04.</strong> 멘토링 진행</span>
                                    <p>
                                        온라인(화상), 오프라인, 유선, 이메일 등 다양한 방식으로 상담을 진행할 수 있습니다.
                                    </p>
                                </li>
                                <li>
                                    <span className={cx("number")}><strong>05.</strong> 만족도 조사</span>
                                    <p>
                                        양질의 멘토링 서비스 제공을 위해 멘토링 만족도를 조사합니다.<br/>
                                        만족도 조사 후에 멘토의 종합의견을 열람할 수 있습니다.
                                    </p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>

            </section>

        </>
    );
};

export default CounselApply;
