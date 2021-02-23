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
import client from "../lib/api/client";
import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import {getThumbnail} from "../component/common/util/ThumbnailUtil";


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

const boardSliderSettings = {
    dots: true,
    infinite: false,
    arrows: false,
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


    // context.store.dispatch(getMainData());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
})

const Index = () => {

    const dispatch = useDispatch();
    const logoSlider = React.useRef();
    const borderSlider = React.useRef();
    const router = useRouter();

    const [showNotice, setShowNotice] = useState(true);
    const [searchValue, setSearchValue] = useState("");

    const {mainData} = useSelector(({main, loading}) => ({
        mainData: main.mainData
    }))

    useEffect(() => {
        dispatch(getMainData())
    }, [router])

    const toggleNoticeSlider = () => {
        setShowNotice(!showNotice)
    }
    const searchBoard = () => {
        router.push(`/search?page&searchField=title&searchValue=${searchValue}`)
    }

    const handleEnter = (e) => {
        if (e.key == "Enter") {
            searchBoard();
        }

    }

    return (
        <>
            <Head>
                <title>한양대학교 창업지원단 메인</title>
            </Head>
            {mainData.popup.map((popup) =>
                <PopupItem key={popup.popupId} popup={popup} cx={cx}/>
            )}
            <div className={cx("main_cont_1")}>
                <div className={cx("main_cont")}>
                    <h1>나의 창업을 부탁해!<strong>무엇이 필요하신가요?</strong></h1>
                    <ul className={`${cx("link_list")} clfx `}>
                        <li className={cx("icon_1")}>
                            <Link href="/">
                                <a><span>창업상담</span></a>
                            </Link>
                        </li>
                        <li className={cx("icon_2")}>
                            <Link href="/">
                                <a>
                                    <span>창업강좌</span>
                                </a>
                            </Link>
                        </li>
                        <li className={cx("icon_3")}>
                            <Link href="/">
                                <a>
                                    <span>창업역량 진단검사</span>
                                </a>
                            </Link>
                        </li>
                        <li className={cx("icon_4")}>
                            <Link href="/">
                                <a>
                                    <span>창업지원 체계</span>
                                </a>
                            </Link>
                        </li>
                        <li className={cx("icon_5")}>
                            <Link href="/">
                                <a>
                                    <span>창업인프라</span>
                                </a>
                            </Link>
                        </li>
                        <li className={cx("icon_6")}>
                            <Link href="/">
                                <a>
                                    <span>창업친화적제도</span>
                                </a>
                            </Link>
                        </li>
                        <li className={cx("icon_7")}>
                            <Link href="/">
                                <a>
                                    <span>공간예약</span>
                                </a>
                            </Link>
                        </li>
                        <li className={cx("icon_8")}>
                            <Link href="/">
                                <a>
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
                        <h1>창업캘린더</h1>
                        {mainData.calendar.length > 0 ?
                        <Slider className="main_calendar" {...calendarSliderSettings}>
                            {mainData.calendar.map((item, index) => (
                                <Link href={`/startup_info/startup_event?page=1&type=L`}>
                                    <div className={cx("list")}>
                                        <a>
                                            <span className={cx("day")}>{moment(item.eventDate).format("DD").toString()}</span>
                                            <span className={cx("date")}>{moment(item.eventDate).format("YYYY.MM.DD").toString()}</span>
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
                        <h1><Link href="/"><a>창업지원단 핫이슈</a></Link></h1>
                        <ul>
                            {mainData.hot.map((item, index) =>
                                index < 5 && <li key={item.noticeId}><Link href={`/introduce/notice/${item.noticeId}`}><a>{item.title}</a></Link></li>
                            )}
                        </ul>
                    </div>

                    <div className={cx("main_Elearning")}>
                        <h1><Link href="/"><a>온라인 콘텐츠</a></Link></h1>
                        <div className={cx("e_learning_slide")}>
                            <div className={cx("list")}>
                                {mainData.online_content.map((item, index) => {
                                        return (
                                            <Link href={`/board/online_content/view/${item.contentId}`}>
                                                <a>
                                                    <Image src={getThumbnail(item.content)} layout="fill" alt="온라인 콘텐츠"/>
                                                </a>
                                            </Link>
                                        )
                                    }
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
                            <li className={cx({on: showNotice})}>
                                <button type="button" onClick={() => {
                                    toggleNoticeSlider()
                                }}>공지사항
                                </button>
                            </li>
                            <li className={cx({on: !showNotice})}>
                                <button type="button" onClick={() => {
                                    toggleNoticeSlider()
                                }}>창업지원정보
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className={cx("main_board_list", "main_tabCont")}>
                        {/*공지사항*/}
                        {mainData.notice.length > 0 ? (
                            <Slider
                                className={`${cx("slides", {hidden: !showNotice})} main_board_list`} {...boardSliderSettings}
                                ref={borderSlider}>
                                {
                                    mainData.notice.map((item) => {
                                        return (
                                            <div className={cx("list")} key={item.noticeId}>
                                                <div className={cx("img_area")}>
                                                    <Link href={`/introduce/notice/${item.noticeId}`}>
                                                        <a>
                                                            <Image src="/assets/image/main_notice_img.jpg" layout="fill"
                                                                   alt="main_notice_img"/>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className={cx("txt_area")}>
                                                    <Link href={`/introduce/notice/${item.noticeId}`}>
                                                        <a>
                                                            <div className={cx("title")}>
                                                                {item.title}
                                                            </div>
                                                            <div className={cx("txt")}>
                                                                <div dangerouslySetInnerHTML={{__html: item.content}}/>
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
                                className={`${cx("slides", {hidden: showNotice})} main_board_list`} {...boardSliderSettings}>
                                {
                                    mainData.startup_info.map((item) => {
                                        return (
                                            <div className={cx("list")} key={item.contentId}>
                                                <div className={cx("img_area")}>
                                                    <Link href={`/board/data_room/view/${item.contentId}`}>
                                                        <a>
                                                            <Image src="/assets/image/main_notice_img.jpg" layout="fill"
                                                                   alt="main_notice_img"/>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className={cx("txt_area")}>
                                                    <Link href={`/board/data_room/view/${item.contentId}`}>
                                                        <a>
                                                            <div className={cx("title")}>
                                                                {item.title}
                                                            </div>
                                                            <div className={cx("txt")}>
                                                                <div
                                                                    dangerouslySetInnerHTML={{__html: item.content.replace("<br>", "")}}/>
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
                            <span className={cx("number")}>287</span>
                        </li>
                        <li>
                            <div className={cx("left_area")}>
                                <span className={cx("txt_1")}>Startup Academy</span>
                                <p className={cx("txt_2")}>
                                    선배 CEO가 창업 시행착오 <br/>줄이는 법을 알려드립니다.
                                </p>
                                <span className={cx("txt_3")}>아카데미 창업기업 수</span>
                            </div>
                            <span className={cx("number")}>428</span>
                        </li>
                        <li>
                            <div className={cx("left_area")}>
                                <span className={cx("txt_1")}>Alumni Startups</span>
                                <p className={cx("txt_2")}>
                                    함께 하는 미래 <br/>우리는 한양인입니다.
                                </p>
                                <span className={cx("txt_3")}>동문 CEO 기업 수</span>
                            </div>
                            <span className={cx("number")}>13,447</span>
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
                                학생 창업자수 1위, 벤처 CEO 배출 1위 <br/>한양대 출신 CEO 기업 13,447개<br/>2019년 매출 607조, 국내 GDP 31.7%
                            </p>
                        </li>
                        <li className={cx("icon_3")}>
                            <span className={cx("txt_1")}>최고 산학협력 및 기술사업화 대학</span>
                            {/*<span className={cx("txt_2")}>hanyang Startup</span>*/}
                            <p className={cx("txt_3")}>
                                국내 사립대 최초 산학협력단 설립<br/>국내 대학 최초 기술지주회사 설립<br/>국내 대학 최고의 기술·이전 사업화 역량과 인프라 보유
                            </p>
                        </li>
                    </ul>
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

