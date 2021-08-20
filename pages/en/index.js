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
                <Slider className={'main_slider'} {...mainbannerSliderSettings}>
                    <div className={cx("list")}></div>
                    <div className={cx("list")}></div>
                    <div className={cx("list")}></div>
                </Slider>
            </div>

            <div className={cx("quick_menu")}>
                <ul>
                    <li>
                        <Link href="/assets/pdf/en_brochure.pdf"><a target="_blank" download>
                            <img src={"/assets/image/quick_brochure.png"} />
                            <span>Brochure(pdf)</span>
                        </a></Link>
                    </li>
                    <li>
                        <Link href="/assets/pdf/en_programbook.pdf"><a target="_blank" download>
                            <img src={"/assets/image/quick_book.png"} />
                            <span>Program Book for Startup(pdf)</span>
                        </a></Link>
                    </li>
                    <li>
                        <Link href="http://www.newshyu.com/index.html?editcode=MAIN_18f"><a target="_blank">
                            <img src={"/assets/image/quick_news.png"} />
                            <span>Hanyang News</span>
                        </a></Link>
                    </li>
                    <li>
                        <Link href="https://www.hanyang.ac.kr/web/eng"><a target="_blank">
                            <img src={"/assets/image/quick_about.png"} />
                            <span>About Hanyang University </span>
                        </a></Link>
                    </li>
                </ul>
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
                        <h3>HANYANG STARTUP NEWS</h3>
                        <p><Link href="/board/notice/list"><a>More</a></Link></p>
                    </div>

                    <div className={cx("main_board_list", "main_tabCont")}>
                        {/*공지사항*/}
                        {mainData.notice.length > 0 ? (
                            <Slider
                                className={`${cx("slides", {hidden: !showNotice})} main_board_list`} {...boardSliderSettings}
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
                                className={`${cx("slides", {hidden: showNotice})} main_board_list`} {...boardSliderSettings}>
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
                                    We are Together. <br/>Prepare for the Future.
                                </p>
                                <span className={cx("txt_3")}>Student Start-ups</span>
                            </div>
                            <span className={cx("number")}>287</span>
                        </li>
                        <li>
                            <div className={cx("left_area")}>
                                <span className={cx("txt_1")}>Startup Academy</span>
                                <p className={cx("txt_2")}>
                                Start business together<br />Hanyang Startup Academy!
                                </p>
                                <span className={cx("txt_3")}>Academy Start-ups</span>
                            </div>
                            <span className={cx("number")}>428</span>
                        </li>
                        <li>
                            <div className={cx("left_area")}>
                                <span className={cx("txt_1")}>Alumni Startups</span>
                                <p className={cx("txt_2")}>
                                Future Together<br />We are Hanyang people.
                                </p>
                                <span className={cx("txt_3")}>Alumni Start-ups</span>
                            </div>
                            <span className={cx("number")}>13,447</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={cx("main_cont_2")}>
                <div className={cx("main_cont")}>
                    <ul>
                        <li>
                            <Link href="#"><a>
                                <div className={cx("img_area")}>
                                    <img src={'/assets/image/main_wadiz.jpg'} alt="" />
                                </div>
                                <div className={cx("txt_area")}>
                                    <h3>wadiz platform Co.</h3>
                                    <p>Crowdfunding Platform</p>
                                </div>
                            </a></Link>
                        </li>
                        <li>
                            <Link href="#"><a>
                                <div className={cx("img_area")}>
                                    <img src={'/assets/image/main_backpacker.jpg'} alt="" />
                                </div>
                                <div className={cx("txt_area")}>
                                    <h3>Co. Backpacker</h3>
                                    <p>Electronic Commerce<br />(Handcrafted Products)</p>
                                </div>
                            </a></Link>
                        </li>
                        <li>
                            <Link href="#"><a>
                                <div className={cx("img_area")}>
                                    <img src={'/assets/image/main_toad.jpg'} alt="" />
                                </div>
                                <div className={cx("txt_area")}>
                                    <h3>Toad World</h3>
                                    <p>Real estate direct brokerage Platform</p>
                                </div>
                            </a></Link>
                        </li>
                        <li>
                            <Link href="#"><a>
                                <div className={cx("img_area")}>
                                    <img src={'/assets/image/main_brandi.jpg'} alt="" />
                                </div>
                                <div className={cx("txt_area")}>
                                    <h3>Co. BRANDI</h3>
                                    <p>Mobile Fashion Commerce Platform</p>
                                </div>
                            </a></Link>
                        </li>
                        <li>
                            <Link href="#"><a>
                                <div className={cx("img_area")}>
                                    <img src={'/assets/image/main_blank.jpg'} alt="" />
                                </div>
                                <div className={cx("txt_area")}>
                                    <h3>Co. blank Coporation</h3>
                                    <p>Contents, Media Commerce</p>
                                </div>
                            </a></Link>
                        </li>
                        <li>
                            <Link href="#"><a>
                                <div className={cx("img_area")}>
                                    <img src={'/assets/image/main_mathpresso.jpg'} alt="" />
                                </div>
                                <div className={cx("txt_area")}>
                                    <h3>Co. MATHPRESSO</h3>
                                    <p>AI Mathematical solving Resolve service<br />‘QANDA’</p>
                                </div>
                            </a></Link>
                        </li>
                        <li>
                            <Link href="#"><a>
                                <div className={cx("img_area")}>
                                    <img src={'/assets/image/main_letin.jpg'} alt="" />
                                </div>
                                <div className={cx("txt_area")}>
                                    <h3>Co. LetinAR</h3>
                                    <p>Pin Mirror Technology Base<br />AR/VR Glass</p>
                                </div>
                            </a></Link>
                        </li>
                        <li>
                            <Link href="#"><a>
                                <div className={cx("img_area")}>
                                    <img src={'/assets/image/main_cardoc.jpg'} alt="" />
                                </div>
                                <div className={cx("txt_area")}>
                                    <h3>Co. cardoc</h3>
                                    <p>Car Aftermarket Platform</p>
                                </div>
                            </a></Link>
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
                    <h1>The secret of No.1 startup university is 'Innovation'</h1>
                    <ul className={'clfx'}>
                        <li className={cx("icon_1")}>
                            <span className={cx("txt_1")}>Best Start-up Education University</span>
                            {/*<span className={cx("txt_2")}>Student Startup</span>*/}
                            <p className={cx("txt_3")}>
                                Selection of excellent universities for start-up education,<br />
                                Prime Minister's Commendation for Venture Start-up Promotion,<br />
                                First place in start-up courses,<br />
                                First place in non-departmental start-up activities.
                            </p>
                        </li>
                        <li className={cx("icon_2")}>
                            <span className={cx("txt_1")}>No.1 Venture start-up CEO-producing university</span>
                            {/*<span className={cx("txt_2")}>hanyang Startup</span>*/}
                            <p className={cx("txt_3")}>
                                No.1 Student entrepreneurs,<br />
                                No.1 Venture CEO production,<br />
                                11,071 CEO companies from Hanyang University,<br />
                                2020 sales of 602 trillion won, domestic GDP 33.3%.
                            </p>
                        </li>
                        <li className={cx("icon_3")}>
                            <span className={cx("txt_1")}>Startup, Scale Up!</span>
                            {/*<span className={cx("txt_2")}>hanyang Startup</span>*/}
                            <p className={cx("txt_3")}>
                                Establishment of Industry-Academic<br />
                                Cooperation Group for the first time in Korea's,<br />
                                Establishment of the first technology<br />
                                holding company in Korea,<br />
                                Highest technology transfer and commercialization<br />
                                capabilities in Korean universities.
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

