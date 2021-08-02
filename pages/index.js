import React, {useEffect, useState} from 'react';
import styles from '../public/assets/styles/index/index.module.css';
import classnames from "classnames/bind"
import Link from "next/link";
import Image from 'next/image'
// const Slider = dynamic(() => import("react-slick"), {
//     ssr: false,
//     loading: () => <p>Loading ...</p>,
// });
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import wrapper from "../store/configureStore";
import {END} from "redux-saga";
import Head from "next/head";
import {useDispatch, useSelector} from "react-redux";
import {getMainData} from "../store/main/main";
import moment from 'moment';
import PopupItem from "../component/main/PopupItem";
import client, {baseUrl} from "../lib/api/client";
import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import {
    getNoticeRanThumbnail,
    getThumbnail,
    getBoardThumbnail,
    getRanThumbnail
} from "../component/common/util/ThumbnailUtil";
import {Modal} from "antd";


const cx = classnames.bind(styles);


const calendarSliderSettings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
    ]
};

const onlineSliderSettings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const boardSliderSettings = {
    dots: true,
    infinite: false,
    arrows: false,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};

const hubSliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};

const logoSliderSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    centerPadding: 0,
    //centerMode: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 728,
            settings: {
                dots: false
            }
        }
    ]
}


export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    const cookie = context.req && context.req.headers.cookie ? context.req.headers.cookie : '';
    client.defaults.headers.Cookie = cookie;

    context.store.dispatch(getMainData());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
})

const Index = () => {

    const dispatch = useDispatch();
    const logoSlider = React.useRef();
    const borderSlider = React.useRef();
    const router = useRouter();

    const [showNotice, setShowNotice] = useState(1);
    const [searchValue, setSearchValue] = useState("");

    const {mainData,user} = useSelector(({main,auth, loading}) => ({
        mainData: main.mainData,
        user: auth.user
    }))


    useEffect(() => {
        dispatch(getMainData())
    }, [router])

    const toggleNoticeSlider = (num) => {
        setShowNotice(num)
    }
    const searchBoard = () => {
        router.push(`/search?page&searchField=title&searchValue=${searchValue}`)
    }

    const handleEnter = (e) => {
        if (e.key == "Enter") {
            searchBoard();
        }

    }

    const moveReportApply = () =>{
        if(user.login == false || (user.role == "ROLE_MT") ){
            if(user.role == "ROLE_MT"){
                Modal.warning({
                    title: '권한이 없습니다',
                });
            }else{
                Modal.warning({
                    title: '로그인 후 이용하실 수 있습니다.',
                });
            }
        }else{
            router.push("/startup_counsel/student_report")
        }
    }
    return (
        <>
            <Head>
                <title>한양대학교 창업지원단</title>
            </Head>
            {mainData.popup.map((popup) =>
                <PopupItem key={popup.popupId} popup={popup} cx={cx}/>
            )}
            <div className={cx("main_cont_1")}>
                <div className={cx("main_cont")}>
                    <h1>나의 창업을 부탁해!<strong>무엇이 필요하신가요?</strong></h1>
                    <ul className={`${cx("link_list")} clfx `}>
                        <li className={cx("icon_1")}>
                            <Link href="/startup_counsel/counsel_process">
                                <a><span>창업상담</span></a>
                            </Link>
                        </li>
                        <li className={cx("icon_2")}>
                            <Link href="/startup_education/university_student">
                                <a>
                                    <span>창업강좌</span>
                                </a>
                            </Link>
                        </li>
                        <li className={cx("icon_3")}>
                            <Link href="https://scdp.hanyang.ac.kr/">
                                <a target="_blank">
                                    <span>창업역량 진단검사</span>
                                </a>
                            </Link>
                        </li>
                        <li className={cx("icon_4")}>
                            <Link href="/introduce/system">
                                <a>
                                    <span>창업지원 체계</span>
                                </a>
                            </Link>
                        </li>
                        <li className={cx("icon_5")}>
                            <Link href="/introduce/infra">
                                <a>
                                    <span>창업인프라</span>
                                </a>
                            </Link>
                        </li>
                        <li className={cx("icon_6")}>
                            <Link href="/introduce/friendly">
                                <a>
                                    <span>창업친화적제도</span>
                                </a>
                            </Link>
                        </li>
                        <li className={cx("icon_7")}>
                            <Link href="/introduce/space_reservation">
                                <a>
                                    <span>공간예약</span>
                                </a>
                            </Link>
                        </li>
                        <li className={cx("icon_8")}>
                            <Link href="#">
                                <a onClick={moveReportApply}>
                                    <span>학생창업자 신고</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <div className={cx("main_search_area")}>
                        <input type="text" placeholder="검색어를 입력하세요." value={searchValue} onChange={(e) => {
                            setSearchValue(e.target.value)
                        }} onKeyPress={handleEnter}/>
                        <button type="button" className={cx("btn_search")} onClick={() => searchBoard()}>검색</button>
                    </div>
                    <div className={cx("searchWord")}>
                        <ul>
                            {mainData.keyword.map((item) => (
                                <li key={item.keywordId}>
                                    <Link href={`/search?page&searchField=title&searchValue=${item.keyword}`}>
                                        <button type="button"># {item.keyword}</button>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className={cx("main_cont_2")}>
                <div className={`${cx("main_cont")} clfx`}>
                    <div className={cx("main_calendar")}>
                        <h1>창업캘린더 <Link href={"/startup_info/startup_event?"}><a className={cx("all")}>전체일정
                            보기</a></Link></h1>
                        {mainData.calendar.length > 0 ?
                            <Slider className="main_calendar" {...calendarSliderSettings}>
                                {mainData.calendar.map((item, index) => (
                                    <Link key={item.startupCalendarId}
                                          href={`/startup_info/startup_event?page=1&type=L`}>
                                        <div className={cx("list")}>
                                            <a>
                                                <span
                                                    className={cx("day")}>{item.eventDate != null ? moment(item.eventDate).format("DD").toString() : ""}</span>
                                                <span
                                                    className={cx("date")}>{item.eventDate != null ? moment(item.eventDate).format("YYYY.MM.DD").toString() : ""}</span>
                                                <p>
                                                    {item.title}
                                                </p>
                                            </a>
                                        </div>
                                    </Link>
                                ))}
                            </Slider> : "LOADING"
                        }
                    </div>

                    <div className={cx("main_hotissue")}>
                        <h1>창업지원단 핫이슈</h1>
                        <ul>
                            {mainData.issue.map((item, index) =>
                                index < 5 && <li key={item.contentId}><Link
                                    href={`/board/issue/view/${item.contentId}`}><a>{item.title}</a></Link></li>
                            )}
                        </ul>
                    </div>

                    <div className={cx("main_Elearning")}>
                        <h1><Link href="/board/online_content/list"><a>온라인 콘텐츠</a></Link></h1>
                        <div className={cx("e_learning_slide")}>
                            <div className={cx("list")}>
                                {mainData.online_content.length > 0 && (
                                    <Slider className="online_content" {...onlineSliderSettings}>
                                        {mainData.online_content.map((item, index) => {
                                                return (
                                                    <Link href={`/board/online_content/view/${item.contentId}`}
                                                          key={item.contentId}>
                                                        <a>
                                                            <img src={getThumbnail(item.content)} alt="온라인 콘텐츠"/>
                                                        </a>
                                                    </Link>
                                                )
                                            }
                                        )}
                                    </Slider>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx("main_cont_3")}>
                <div className={cx("main_cont")}>
                    <div className={cx("main_tab")}>
                        <ul>
                            <li className={cx({on: showNotice == 1})}>
                                <button type="button" onClick={() => {
                                    toggleNoticeSlider(1)
                                }}>공지사항
                                </button>
                            </li>
                            <li className={cx({on: showNotice == 2})}>
                                <button type="button" onClick={() => {
                                    toggleNoticeSlider(2)
                                }}>신규사업공고
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className={cx("main_board_list", "main_tabCont")}>
                        {/*공지사항*/}
                        {mainData.notice.length > 0 ? (
                            <Slider
                                className={`${cx("slides", {hidden: showNotice !== 1})} main_board_list`} {...boardSliderSettings}
                                ref={borderSlider}>
                                {
                                    mainData.notice.map((item, index) => {
                                        return (
                                            <div className={cx("list")} key={item.contentId}>
                                                <div className={cx("img_area")}>
                                                    <Link href={`/board/notice/view/${item.contentId}`}>
                                                        <a>
                                                            <img
                                                                   src={item.thumbList.length > 0 ? `${baseUrl}/resource${item.thumbList[0].filePath}/${item.thumbList[0].fileName + item.thumbList[0].fileExtension}` : getRanThumbnail()}
                                                                   alt={"게시글 썸네일"}/>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className={cx("txt_area")}>
                                                    <Link href={`/board/notice/view/${item.contentId}`}>
                                                        <a>
                                                            <div className={cx("title")}>
                                                                {item.title}
                                                            </div>
                                                            <div className={cx("txt")}>
                                                                {/*<div dangerouslySetInnerHTML={{__html: item.content.replace(/<img[^>]*>/g, '')}}/>*/}
                                                                {item.sub01}
                                                            </div>
                                                            <span
                                                                className={cx("date")}>{moment(item.regDate).format("YYYY년 MM월 DD일")}</span>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>

                                        )
                                    })
                                }
                            </Slider>


                        ) : "LOADING"}
                        {mainData.startup_info.length > 0 ? (
                            <Slider
                                className={`${cx("slides", {hidden: showNotice !== 2})} main_board_list`} {...boardSliderSettings}>
                                {
                                    mainData.startup_info.map((item) => {
                                        // console.log(baseUrl)
                                        // console.log(`${baseUrl}/resource${item.thumbList[0].filePath}/${item.thumbList[0].fileName + item.thumbList[0].fileExtension}`)
                                        return (
                                            <div className={cx("list")} key={item.contentId}>
                                                <div className={cx("img_area")}>
                                                    <Link href={`/board/startup_info/view/${item.contentId}`}>
                                                        <a>
                                                            {/*<Image src={getNoticeRanThumbnail(item.content)} layout="fill"*/}
                                                            {/*       alt="main_notice_img"/>*/}
                                                            <img
                                                                   src={item.thumbList.length > 0 ? `${baseUrl}/resource${item.thumbList[0].filePath}/${item.thumbList[0].fileName + item.thumbList[0].fileExtension}` : getRanThumbnail()}
                                                                   alt={"게시글 썸네일"}/>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className={cx("txt_area")}>
                                                    <Link href={`/board/startup_info/view/${item.contentId}`}>
                                                        <a>
                                                            <div className={cx("title")}>
                                                                {item.title}
                                                            </div>
                                                            <div className={cx("txt")}>
                                                                {/*<div*/}
                                                                {/*    dangerouslySetInnerHTML={{__html: item.content.replace(/<img[^>]*>/g, '')}}/>*/}
                                                                {item.sub01}
                                                            </div>
                                                            <span
                                                                className={cx("date")}>{moment(item.regDate).format("YYYY년 MM월 DD일")}</span>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>

                                        )
                                    })
                                }
                            </Slider>
                        ) : "LOADING"}
                        <div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={cx("main_cont_4")}>
                <div className={cx("main_cont")}>
                    <h1>Meet our Startups</h1>
                    <ul className={'clfx'}>
                        <li>
                            <div className={cx("left_area")}>
                                <span className={cx("txt_1")}>Student Startups</span>
                                <p className={cx("txt_2")}>
                                    학생들의 성공적인 <br/>창업을 도와드립니다.
                                </p>
                                <span className={cx("txt_3")}>학생 창업기업 수</span>
                            </div>
                            <span className={cx("number")}>347</span>
                        </li>
                        <li>
                            <div className={cx("left_area")}>
                                <span className={cx("txt_1")}>Startup Academy</span>
                                <p className={cx("txt_2")}>
                                    선배 CEO가 창업 시행착오 <br/>줄이는 법을 알려드립니다.
                                </p>
                                <span className={cx("txt_3")}>아카데미 창업기업 수</span>
                            </div>
                            <span className={cx("number")}>545</span>
                        </li>
                        <li>
                            <div className={cx("left_area")}>
                                <span className={cx("txt_1")}>Alumni Startups</span>
                                <p className={cx("txt_2")}>
                                    함께 하는 미래 <br/>우리는 한양인입니다.
                                </p>
                                <span className={cx("txt_3")}>동문 CEO 기업 수</span>
                            </div>
                            <span className={cx("number")}>11,071</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={cx("main_cont_5")}>
                <h1>Global Network</h1>
                <div className={cx("img_area")}><Image src="/assets/image/main_network.png" width={1531} height={492}
                                                       alt="main_network"/></div>
            </div>

            <div className={cx("main_cont_6")}>
                <div className={cx("main_cont")}>
                    <h1>국내 제1위 창업대학의 비결은 '혁신'</h1>
                    <ul className={'clfx'}>
                        <li className={cx("icon_1")}>
                            <span className={cx("txt_1")}>최고 창업교육 우수대학</span>
                            {/*<span className={cx("txt_2")}>Student Startup</span>*/}
                            <p className={cx("txt_3")}>
                                창업교육 우수대학 선정 <br/>벤처창업진흥 유공 국무총리 표창<br/>창업강좌수 1위, 비교과 창업활동 1위
                            </p>
                        </li>
                        <li className={cx("icon_2")}>
                            <span className={cx("txt_1")}>국내 1위 벤처창업 CEO 배출 대학</span>
                            {/*<span className={cx("txt_2")}>hanyang Startup</span>*/}
                            <p className={cx("txt_3")}>
                                학생 창업자수 1위, 벤처 CEO 배출 1위 <br/>한양대 출신 CEO 기업 11,071개<br/>2020년 매출 602조원, 국내 GDP 33.3%
                            </p>
                        </li>
                        <li className={cx("icon_3")}>
                            <span className={cx("txt_1")}>최고 산학협력 및 기술사업화 대학</span>
                            {/*<span className={cx("txt_2")}>hanyang Startup</span>*/}
                            <p className={cx("txt_3")}>
                                국내 사립대 최초 산학협력단 설립<br/>국내 대학 최초 기술지주회사 설립<br/>국내 대학 최고 기술이전 및 사업화 역량
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={cx("main_cont_3")}>
                <div className={cx("main_cont")}>
                    <div className={cx("main_tab")}>
                        <ul>
                            <li className={cx("on")}>
                                <button type="button">교내 창업지원 부서/기관</button>
                            </li>
                        </ul>
                    </div>

                    <div className={cx("main_board_list", "main_tabCont")}>
                        {/*허브*/}
                        <Slider
                            className={`${cx("slides")} main_board_list`} {...hubSliderSettings}>
                            {/*1*/}
                            <div className={cx("list")} key={1}>
                                <div className={cx("img_area")}>
                                    <Link href="http://research.hanyang.ac.kr/">
                                        <a target="_blank">
                                            <Image src={"/assets/image/hub01.png"} layout="fill" alt="main_notice_img"/>
                                        </a>
                                    </Link>
                                </div>
                                <div className={cx("txt_area")}>
                                    <Link href="http://research.hanyang.ac.kr/">
                                        <a target="_blank">
                                            <div className={cx("title")}>
                                                한양대학교 산학협력단
                                            </div>
                                            <div>산학연협력, 융합연구</div>
                                            <div className={cx("txt")}>
                                                글로벌 실용인재 양성, 다학제간 통합연구, 기술이전/기술사업화, 연구비 수탁관리/지급 등 산학협력 총괄
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            {/*2*/}
                            <div className={cx("list")} key={2}>
                                <div className={cx("img_area")}>
                                    <Link href="http://hyuholdings.com/html/">
                                        <a target="_blank">
                                            <Image src={"/assets/image/hub02.png"} layout="fill" alt="main_notice_img"/>
                                        </a>
                                    </Link>
                                </div>
                                <div className={cx("txt_area")}>
                                    <Link href="http://hyuholdings.com/html/">
                                        <a target="_blank">
                                            <div className={cx("title")}>
                                                기술지주회사
                                            </div>
                                            <div>투자, TIPS운영사, 액셀러레이터</div>
                                            <div className={cx("txt")}>
                                                대학의 보유기술을 출자하여 기술사업화, 자회사 설립 지원, 펀드 운영 등 투자 업무
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            {/*3*/}

                            <div className={cx("list")} key={3}>
                                <div className={cx("img_area")}>
                                    <Link href="http://research.hanyang.ac.kr/certi/foundation.php">
                                        <a target="_blank">
                                            <Image src={"/assets/image/hub03.png"} layout="fill" alt="main_notice_img"/>
                                        </a>
                                    </Link>
                                </div>
                                <div className={cx("txt_area")}>
                                    <Link href="http://research.hanyang.ac.kr/certi/foundation.php">
                                        <a target="_blank">
                                            <div className={cx("title")}>
                                                기술사업화센터
                                            </div>
                                            <div>기술이전, 기술사업화, 실험실창업</div>
                                            <div className={cx("txt")}>
                                                대학의 연구성과를 활용하여 기술이전/사업화 촉진, 실험실창업 유망기술의 사업화모델 개발 및 창업 지원
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            {/*4*/}
                            <div className={cx("list")} key={4}>
                                <div className={cx("img_area")}>
                                    <Link href="http://fablab.hanyang.ac.kr/">
                                        <a target="_blank">
                                            <Image src={"/assets/image/hub04.png"} layout="fill" alt="main_notice_img"/>
                                        </a>
                                    </Link>
                                </div>
                                <div className={cx("txt_area")}>
                                    <Link href="http://fablab.hanyang.ac.kr/">
                                        <a target="_blank">
                                            <div className={cx("title")}>
                                                휴온스팹랩
                                            </div>
                                            <div>메이커 스페이스</div>
                                            <div className={cx("txt")}>
                                                아이디어 구현에 필요한 3D 프린터, 레이저 커터 등 다양한 장비가 구비된 창작 및 창업지원 공간
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            {/*5*/}
                            <div className={cx("list")} key={5}>
                                <div className={cx("img_area")}>
                                    <Link href="http://entrepreneurship.hanyang.ac.kr/">
                                        <a target="_blank">
                                            <Image src={"/assets/image/hub05.png"} layout="fill" alt="main_notice_img"/>
                                        </a>
                                    </Link>
                                </div>
                                <div className={cx("txt_area")}>
                                    <Link href="http://entrepreneurship.hanyang.ac.kr/">
                                        <a target="_blank">
                                            <div className={cx("title")}>
                                                대학원 창업융합학과
                                            </div>
                                            <div>실전창업교육, 창업연구</div>
                                            <div className={cx("txt")}>
                                                창의적 사고와 기업가정신, 글로벌 창업 역량을 지닌 창의융합인재 양성, 창업관련 연구 수행
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            {/*6*/}
                            <div className={cx("list")} key={6}>
                                <div className={cx("img_area")}>
                                    <Link href="http://cbi.hanyang.ac.kr/">
                                        <a target="_blank">
                                            <Image src={"/assets/image/hub06.png"} layout="fill" alt="main_notice_img"/>
                                        </a>
                                    </Link>
                                </div>
                                <div className={cx("txt_area")}>
                                    <Link href="http://cbi.hanyang.ac.kr/">
                                        <a target="_blank">
                                            <div className={cx("title")}>
                                                창업보육센터
                                            </div>
                                            <div>입주기업 창업지원</div>
                                            <div className={cx("txt")}>
                                                창업기업 및 예비창업자에게 보육공간/시설 제공, 기술/경영 컨설팅 및 사업화 지원, 투자유치 연계
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            {/*7*/}
                            <div className={cx("list")} key={7}>
                                <div className={cx("img_area")}>
                                    <Link href="https://hywep.hanyang.ac.kr/index.do">
                                        <a target="_blank">
                                            <Image src={"/assets/image/hub07.png"} layout="fill" alt="main_notice_img"/>
                                        </a>
                                    </Link>
                                </div>
                                <div className={cx("txt_area")}>
                                    <Link href="https://hywep.hanyang.ac.kr/index.do">
                                        <a target="_blank">
                                            <div className={cx("title")}>
                                                현장실습지원센터
                                            </div>
                                            <div>기업(창업)현장실습, 인턴십</div>
                                            <div className={cx("txt")}>
                                                전공과 관련된 산업현장에서의 경험과 진로탐색 기회를 제공하는 현장실습(인턴십) 프로그램 운영
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            {/*8*/}
                            <div className={cx("list")} key={8}>
                                <div className={cx("img_area")}>
                                    <Link href="http://lincplus.hanyang.ac.kr/">
                                        <a target="_blank">
                                            <Image src={"/assets/image/hub08.png"} layout="fill" alt="main_notice_img"/>
                                        </a>
                                    </Link>
                                </div>
                                <div className={cx("txt_area")}>
                                    <Link href="http://lincplus.hanyang.ac.kr/">
                                        <a target="_blank">
                                            <div className={cx("title")}>
                                                LINC+사업단
                                            </div>
                                            <div>산학협력 지원</div>
                                            <div className={cx("txt")}>
                                                사회적 가치를 창출하는 산업선도형 산학협력사업 수행
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                        </Slider>
                        <div>
                        </div>

                    </div>
                </div>
            </div>


            <div className={cx("main_logo_rolling")}>
                <div className={cx("main_cont")}>
                    <div className={cx("main_logo_rolling_list")}>
                        <Slider className={cx("slide")} {...logoSliderSettings} ref={logoSlider}>
                            <div className={cx("list")}>
                                <Link href="https://www.moe.go.kr/main.do?s=moe"><a target="_blank">
                                    <Image src="/assets/image/family_site_8.jpg" width={170} height={88}
                                           alt="family_site"/>
                                </a></Link>
                            </div>
                            <div className={cx("list")}>
                                <Link href="https://www.mss.go.kr/site/smba/main.do"><a target="_blank">
                                    <Image src="/assets/image/family_site_1.jpg" width={150} height={88}
                                           alt="family_site"/>
                                </a></Link>
                            </div>
                            <div className={cx("list")}>
                                <Link href="https://www.kised.or.kr/"><a target="_blank">
                                    <Image src="/assets/image/family_site_3.jpg" width={114} height={88}
                                           alt="family_site"/>
                                </a></Link>
                            </div>
                            <div className={cx("list")}>
                                <Link href="https://www.k-startup.go.kr/main.do"><a target="_blank">
                                    <Image src="/assets/image/family_site_2.jpg" width={126} height={88}
                                           alt="family_site"/>
                                </a></Link>
                            </div>
                            <div className={cx("list")}>
                                <Link href="https://new.sba.kr/user/main.do"><a target="_blank">
                                    <Image src="/assets/image/family_site_5.jpg" width={170} height={88}
                                           alt="family_site"/>
                                </a></Link>
                            </div>
                            <div className={cx("list")}>
                                <Link href="https://seoulstartuphub.com/"><a target="_blank">
                                    <Image src="/assets/image/family_site_6.jpg" width={170} height={88}
                                           alt="family_site"/>
                                </a></Link>
                            </div>
                            <div className={cx("list")}>
                                <Link href="https://ccei.creativekorea.or.kr/seoul/main.do"><a target="_blank">
                                    <Image src="/assets/image/family_site_7.jpg" width={170} height={88}
                                           alt="family_site"/>
                                </a></Link>
                            </div>
                            <div className={cx("list")}>
                                <Link href="https://www.kocca.kr"><a target="_blank">
                                    <Image src="/assets/image/family_site_4.jpg" width={86} height={88}
                                           alt="family_site"/>
                                </a></Link>
                            </div>
                            <div className={cx("list")}>
                                <Link href="https://www.nipa.kr/"><a target="_blank">
                                    <Image src="/assets/image/family_site_9.jpg" width={170} height={88}
                                           alt="family_site"/>
                                </a></Link>
                            </div>
                            <div className={cx("list")}>
                                <Link href="https://www.kita.net/"><a target="_blank">
                                    <Image src="/assets/image/family_site_10.jpg" width={170} height={88}
                                           alt="family_site"/>
                                </a></Link>
                            </div>
                        </Slider>
                        <div className={cx("slick_controller")}>
                            <ul className={'clfx'}>
                                <li>
                                    <button type="button" className={cx("slick_prev")} onClick={() => {
                                        logoSlider.current.slickPrev()
                                    }}><Image src="/assets/image/family_site_prev.jpg" width={44} height={46}
                                              alt="family_site_prev"/></button>
                                </li>
                                <li>
                                    <button type="button" className={cx("slick_pause")} onClick={() => {
                                        logoSlider.current.slickPause()
                                    }}><Image src="/assets/image/family_site_stop.jpg" width={44} height={46}
                                              alt="family_site_stop"/></button>
                                </li>
                                <li>
                                    <button type="button" className={cx("slick_next")} onClick={() => {
                                        logoSlider.current.slickNext()
                                    }}>
                                        <Image src="/assets/image/family_site_next.jpg" width={44} height={46}
                                               alt="family_site_next"/>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;

