import React, {useEffect, useState} from 'react';
import styles from '../../public/assets/styles/en/index_eng.module.css';
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
import wrapper from "../../store/configureStore";
import {END} from "redux-saga";
import Head from "next/head";
import {useDispatch, useSelector} from "react-redux";
import {getMainData} from "../../store/main/main";
import moment from 'moment';
import PopupItem from "../../component/main/PopupItem";
import client, {baseUrl} from "../../lib/api/client";
import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import {
    getNoticeRanThumbnail,
    getThumbnail,
    getBoardThumbnail,
    getRanThumbnail
} from "../../component/common/util/ThumbnailUtil";
import {Modal} from "antd";


const cx = classnames.bind(styles);

const mainbannerSliderSettings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots',
};


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

    const [showNotice, setShowNotice] = useState(true);
    const [searchValue, setSearchValue] = useState("");

    const {mainData,user} = useSelector(({main,auth, loading}) => ({
        mainData: main.mainData,
        user: auth.user
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

    const moveReportApply = () =>{
        if(user.login == false || (user.role != "ROLE_SD" && user.role != "ROLE_ADMIN") ){
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
                <title>HANYANG STARTUP</title>
            </Head>
            {mainData.popup.map((popup) =>
                <PopupItem key={popup.popupId} popup={popup} cx={cx}/>
            )}
            <div className={cx("main_cont_1")}>
                <div className={cx("main_cont")}>
                    <h1>Do you need help to<strong>Startup?</strong></h1>
                    <ul className={`${cx("link_list")} clfx `}>
                        <li className={cx("icon_1")}>
                            <Link href="/en/academic_5">
                                <a><span>Startup Programs</span></a>
                            </Link>
                        </li>
                        <li className={cx("icon_3")}>
                            <Link href="/en/academic_2">
                                <a>
                                    <span>Undergraduate Courses</span>
                                </a>
                            </Link>
                        </li>
                        <li className={cx("icon_8")}>
                            <Link href="/en/academic_3">
                                <a>
                                    <span>Graduate Courses</span>
                                </a>
                            </Link>
                        </li>
                        <li className={cx("icon_6")}>
                            <Link href="/assets/pdf/en_brochure.pdf">
                                <a target="_blank" download>
                                    <span>Brochure</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <div className={cx("main_search_area")}>
                        <input type="text" placeholder="What are you Looking for?" value={searchValue} onChange={(e) => {
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

            <div className={cx("main_cont_3")}>
                <div className={cx("main_cont")}>
                    <div className={cx("main_tab")}>
                        {/*<ul>
                            <li className={cx({on: showNotice})}>
                                <button type="button" onClick={() => {
                                    toggleNoticeSlider()
                                }}>HANYANG STARTUP NEWS
                                </button>
                            </li>
                            </ul>*/}
                        <h3>HYU Startup NOW</h3>
                        <p><Link href="/en/board/notice_en/list"><a>More</a></Link></p>
                    </div>

                    <div className={cx("main_board_list", "main_tabCont")}>
                        {/*공지사항*/}
                        <Slider
                            className={`${cx("slides", {hidden: !showNotice})} main_board_list`} {...boardSliderSettings}
                            ref={borderSlider}>
                            {
                                mainData.notice_en.map((item, index) => {
                                    return (
                                        <div className={cx("list")} key={item.contentId}>
                                            <div className={cx("img_area")}>
                                                <Link href={`/en/board/notice_en/view/${item.contentId}`}>
                                                    <a>
                                                        <img
                                                            src={item.thumbList.length > 0 ? `${baseUrl}/resource${item.thumbList[0].filePath}/${item.thumbList[0].fileName + item.thumbList[0].fileExtension}` : getRanThumbnail()}
                                                            alt={"게시글 썸네일"}/>
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className={cx("txt_area")}>
                                                <Link href={`/en/board/notice/view/${item.contentId}`}>
                                                    <a>
                                                        <div className={cx("title")}>
                                                            {item.title}
                                                        </div>
                                                        <div className={cx("txt")}>
                                                            {/*<div dangerouslySetInnerHTML={{__html: item.content.replace(/<img[^>]*>/g, '')}}/>*/}
                                                            {item.sub01}
                                                        </div>
                                                        <span
                                                            className={cx("date")}>{moment(item.regDate).format("YYYY-MM-DD")}</span>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </Slider>
                        {mainData.startup_info.length > 0 ? (
                            <Slider
                                className={`${cx("slides", {hidden: showNotice})} main_board_list`} {...boardSliderSettings}>
                                {
                                    mainData.startup_info.map((item) => {
                                        // console.log(baseUrl)
                                        // console.log(`${baseUrl}/resource${item.thumbList[0].filePath}/${item.thumbList[0].fileName + item.thumbList[0].fileExtension}`)
                                        return (
                                            <div className={cx("list")} key={item.contentId}>
                                                <div className={cx("img_area")}>
                                                    <Link href={`/en/board/startup_info/view/${item.contentId}`}>
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
                                                    <Link href={`/en/board/startup_info/view/${item.contentId}`}>
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
        </>
    );
};

export default Index;

