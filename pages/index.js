import React, {useEffect, useState} from 'react';
import styles from '../public/assets/styles/index/index.module.css';
import classnames from "classnames/bind"
import Link from "next/link";
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import wrapper from "../store/configureStore";
import {getSpaceRentalInfoAll} from "../store/spaceRental/spaceRental";
import {END} from "redux-saga";
import Head from "next/head";
import {useDispatch, useSelector} from "react-redux";
import {getBoardContentList} from "../store/board/board";
import {getMainData} from "../store/main/main";
import {getThumbnail} from '../component/common/util/ThumbnailUtil';
import moment from 'moment';


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
                dots: true
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
                slidesToScroll: 1
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

// export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
//     store.dispatch(END);
//     await store.sagaTask.toPromise();
// })

const Index = () => {

    const dispatch = useDispatch();
    const logoSlider = React.createRef();

    const [showNotice,setShowNotice] = useState(true);

    const {mainData} = useSelector(({main, loading}) => ({
        mainData: main.mainData
    }))

    useEffect(() => {
        dispatch(getMainData())
    }, [])

    const toggleNoticeSlider = () =>{
        setShowNotice(!showNotice)
    }


    return (
        <>
            <Head>
                <title>한양대학교 창업지원단 메인</title>
            </Head>
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
                        <input type="text"/>
                        <button type="button" className={cx("btn_search")}>검색</button>
                    </div>
                    <div className={cx("searchWord")}>
                        <ul>
                            <li>
                                <button type="button"># 창업도움</button>
                            </li>
                            <li>
                                <button type="button"># 창업체계</button>
                            </li>
                            <li>
                                <button type="button"># 창업제도</button>
                            </li>
                            <li>
                                <button type="button"># 멘토링</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={cx("main_cont_2")}>
                <div className={`${cx("main_cont")} clfx`}>
                    <div className={cx("main_calendar")}>
                        <h1>창업캘린더</h1>
                        <Slider className="main_calendar" {...calendarSliderSettings}>
                            <div className={cx("list")}>
                                <a>
                                    <span className={cx("day")}>21</span>
                                    <span className={cx("date")}>2020.11.21</span>
                                    <p>
                                        캠퍼스타운 프로그램 최종선정 결과 안내
                                    </p>
                                </a>
                            </div>
                            <div className={cx("list")}>
                                <a>
                                    <span className={cx("day")}>21</span>
                                    <span className={cx("date")}>2020.11.21</span>
                                    <p>
                                        캠퍼스타운 프로그램 최종선정 결과 안내
                                    </p>
                                </a>
                            </div>
                            <div className={cx("list")}>
                                <a>
                                    <span className={cx("day")}>21</span>
                                    <span className={cx("date")}>2020.11.21</span>
                                    <p>
                                        캠퍼스타운 프로그램 최종선정 결과 안내
                                    </p>
                                </a>
                            </div>
                            <div className={cx("list")}>
                                <a>
                                    <span className={cx("day")}>21</span>
                                    <span className={cx("date")}>2020.11.21</span>
                                    <p>
                                        캠퍼스타운 프로그램 최종선정 결과 안내
                                    </p>
                                </a>
                            </div>
                            <div className={cx("list")}>
                                <a>
                                    <span className={cx("day")}>21</span>
                                    <span className={cx("date")}>2020.11.21</span>
                                    <p>
                                        캠퍼스타운 프로그램 최종선정 결과 안내
                                    </p>
                                </a>
                            </div>
                        </Slider>
                    </div>

                    <div className={cx("main_hotissue")}>
                        <h1><Link href="/"><a>창업지원단 핫이슈</a></Link></h1>
                        <ul>
                            {mainData.notice.map( (item,index) =>
                                    index < 5 && <li key={item.noticeId}><Link href="/"><a>{item.title}</a></Link></li>

                            )}
                        </ul>
                    </div>

                    <div className={cx("main_Elearning")}>
                        <h1><Link href="/"><a>E-러닝 컨텐츠</a></Link></h1>
                        <div className={cx("e_learning_slide")}>
                            <div className={cx("list")}>
                                <Link href="/">
                                    <a>
                                        <Image src="/assets/image/main_banner.jpg" layout="fill" alt="main_banner"/>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx("main_cont_3")}>
                <div className={cx("main_cont")}>
                    <div className={cx("main_tab")}>
                        <ul>
                            <li className={cx({on:showNotice})}>
                                <button type="button" onClick={() =>{toggleNoticeSlider()}}>공지사항</button>
                            </li>
                            <li className={cx({on:!showNotice})}>
                                <button type="button" onClick={() =>{toggleNoticeSlider()}}>창업지원정보</button>
                            </li>
                        </ul>
                    </div>

                    <div className={cx("main_board_list", "main_tabCont")}>
                        {/*공지사항*/}
                        <Slider className={`${cx("slides",{hidden:!showNotice})} main_board_list`} {...boardSliderSettings}>
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

                        <Slider className={`${cx("slides",{hidden:showNotice})} main_board_list`} {...boardSliderSettings}>
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
                                                            <div dangerouslySetInnerHTML={{__html: item.content.replace("<br>","")}}/>
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
                        <div>
                        </div>
                        {/*//공지사항*/}

                        {/*창업지원정보*/}
                        {/*<div>*/}
                        {/*    <div className={cx("slides")}>*/}
                        {/*        <div className={cx("list")}>*/}
                        {/*            <div className={cx("img_area")}>*/}
                        {/*                <Link href="/">*/}
                        {/*                    <a>*/}
                        {/*                        <Image src="/assets/image/main_notice_img.jpg" width={309} height={225}*/}
                        {/*                               alt="main_notice_img"/>*/}
                        {/*                    </a>*/}
                        {/*                </Link>*/}
                        {/*            </div>*/}
                        {/*            <div className={cx("txt_area")}>*/}
                        {/*                <Link href="/">*/}
                        {/*                    <a>*/}
                        {/*                        <div className={cx("title")}>*/}
                        {/*                            2020 September Ent. Lunch Talk 미래과학기술지주 김판건 대표*/}
                        {/*                        </div>*/}
                        {/*                        <div className={cx("txt")}>*/}
                        {/*                            2020년 9월 런치톡은 9월25일(금) 오후 2시 부터 3시까지 미래과학기술지주 김판건 대표님의 “투자자가 끌리는*/}
                        {/*                            스타트업”이라는 주제로 줌 췌이나로 진행될 예정입니다.*/}
                        {/*                        </div>*/}
                        {/*                        <span className={cx("date")}>2020년 11월23일</span>*/}
                        {/*                    </a>*/}
                        {/*                </Link>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className={cx("list")}>*/}
                        {/*            <div className={cx("img_area")}>*/}
                        {/*                <Link href="/">*/}
                        {/*                    <a>*/}
                        {/*                        <Image src="/assets/image/main_notice_img.jpg" width={309} height={225}*/}
                        {/*                               alt="main_notice_img"/>*/}
                        {/*                    </a>*/}
                        {/*                </Link>*/}
                        {/*            </div>*/}
                        {/*            <div className={cx("txt_area")}>*/}
                        {/*                <Link href="/">*/}
                        {/*                    <a>*/}
                        {/*                        <div className={cx("title")}>*/}
                        {/*                            2020 September Ent. Lunch Talk 미래과학기술지주 김판건 대표*/}
                        {/*                        </div>*/}
                        {/*                        <div className={cx("txt")}>*/}
                        {/*                            2020년 9월 런치톡은 9월25일(금) 오후 2시 부터 3시까지 미래과학기술지주 김판건 대표님의 “투자자가 끌리는*/}
                        {/*                            스타트업”이라는 주제로 줌 췌이나로 진행될 예정입니다.*/}
                        {/*                        </div>*/}
                        {/*                        <span className={cx("date")}>2020년 11월23일</span>*/}
                        {/*                    </a>*/}
                        {/*                </Link>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className={cx("list")}>*/}
                        {/*            <div className={cx("img_area")}>*/}
                        {/*                <Link href="/">*/}
                        {/*                    <a>*/}
                        {/*                        <Image src="/assets/image/main_notice_img.jpg" width={309} height={225}*/}
                        {/*                               alt="main_notice_img"/>*/}
                        {/*                    </a>*/}
                        {/*                </Link>*/}
                        {/*            </div>*/}
                        {/*            <div className={cx("txt_area")}>*/}
                        {/*                <Link href="/">*/}
                        {/*                    <a>*/}
                        {/*                        <div className={cx("title")}>*/}
                        {/*                            2020 September Ent. Lunch Talk 미래과학기술지주 김판건 대표*/}
                        {/*                        </div>*/}
                        {/*                        <div className={cx("txt")}>*/}
                        {/*                            2020년 9월 런치톡은 9월25일(금) 오후 2시 부터 3시까지 미래과학기술지주 김판건 대표님의 “투자자가 끌리는*/}
                        {/*                            스타트업”이라는 주제로 줌 췌이나로 진행될 예정입니다.*/}
                        {/*                        </div>*/}
                        {/*                        <span className={cx("date")}>2020년 11월23일</span>*/}
                        {/*                    </a>*/}
                        {/*                </Link>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className={cx("list")}>*/}
                        {/*            <div className={cx("img_area")}>*/}
                        {/*                <Link href="/">*/}
                        {/*                    <a>*/}
                        {/*                        <Image src="/assets/image/main_notice_img.jpg" width={309} height={225}*/}
                        {/*                               alt="main_notice_img"/>*/}
                        {/*                    </a>*/}
                        {/*                </Link>*/}
                        {/*            </div>*/}
                        {/*            <div className={cx("txt_area")}>*/}
                        {/*                <Link href="/">*/}
                        {/*                    <a>*/}
                        {/*                        <div className={cx("title")}>*/}
                        {/*                            2020 September Ent. Lunch Talk 미래과학기술지주 김판건 대표*/}
                        {/*                        </div>*/}
                        {/*                        <div className={cx("txt")}>*/}
                        {/*                            2020년 9월 런치톡은 9월25일(금) 오후 2시 부터 3시까지 미래과학기술지주 김판건 대표님의 “투자자가 끌리는*/}
                        {/*                            스타트업”이라는 주제로 줌 췌이나로 진행될 예정입니다.*/}
                        {/*                        </div>*/}
                        {/*                        <span className={cx("date")}>2020년 11월23일</span>*/}
                        {/*                    </a>*/}
                        {/*                </Link>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className={cx("list")}>*/}
                        {/*            <div className={cx("img_area")}>*/}
                        {/*                <Link href="/">*/}
                        {/*                    <a>*/}
                        {/*                        <Image src="/assets/image/main_notice_img.jpg" width={309} height={225}*/}
                        {/*                               alt="main_notice_img"/>*/}
                        {/*                    </a>*/}
                        {/*                </Link>*/}
                        {/*            </div>*/}
                        {/*            <div className={cx("txt_area")}>*/}
                        {/*                <Link href="/">*/}
                        {/*                    <a>*/}
                        {/*                        <div className={cx("title")}>*/}
                        {/*                            2020 September Ent. Lunch Talk 미래과학기술지주 김판건 대표*/}
                        {/*                        </div>*/}
                        {/*                        <div className={cx("txt")}>*/}
                        {/*                            2020년 9월 런치톡은 9월25일(금) 오후 2시 부터 3시까지 미래과학기술지주 김판건 대표님의 “투자자가 끌리는*/}
                        {/*                            스타트업”이라는 주제로 줌 췌이나로 진행될 예정입니다.*/}
                        {/*                        </div>*/}
                        {/*                        <span className={cx("date")}>2020년 11월23일</span>*/}
                        {/*                    </a>*/}
                        {/*                </Link>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*//창업지원정보*/}
                    </div>
                </div>
            </div>

            <div className={cx("main_cont_4")}>
                <div className={cx("main_cont")}>
                    <h1>Meet our Startups</h1>
                    <ul className={'clfx'}>
                        <li>
                            <div className={cx("left_area")}>
                                <span className={cx("txt_1")}>Student Startup</span>
                                <p className={cx("txt_2")}>
                                    우리는 함께합니다. <br/>미래를 위해 준비합니다.
                                </p>
                                <span className={cx("txt_3")}>학생 창업기업 수</span>
                            </div>
                            <span className={cx("number")}>287</span>
                        </li>
                        <li>
                            <div className={cx("left_area")}>
                                <span className={cx("txt_1")}>hanyang Startup</span>
                                <p className={cx("txt_2")}>
                                    한양스타트업 아카데미 <br/>에서 창업을 함께해요!
                                </p>
                                <span className={cx("txt_3")}>아카데미 창업기업 수</span>
                            </div>
                            <span className={cx("number")}>1021</span>
                        </li>
                        <li>
                            <div className={cx("left_area")}>
                                <span className={cx("txt_1")}>hanyang Startup</span>
                                <p className={cx("txt_2")}>
                                    함께 하는 미래 <br/>우리는 한양인입니다.
                                </p>
                                <span className={cx("txt_3")}>동문 창업기업 수</span>
                            </div>
                            <span className={cx("number")}>10,234</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={cx("main_cont_5")}>
                <h1>Startup Network</h1>
                <div className={cx("img_area")}><Image src="/assets/image/main_network.png" width={1531} height={492}
                                                       alt="main_network"/></div>
            </div>

            <div className={cx("main_cont_6")}>
                <div className={cx("main_cont")}>
                    <h1>국내 제1의 스타트업 대학, 한양대학교</h1>
                    <ul className={'clfx'}>
                        <li className={cx("icon_1")}>
                            <span className={cx("txt_1")}>국내 최고의 창업교육 역량</span>
                            <span className={cx("txt_2")}>Student Startup</span>
                            <p className={cx("txt_3")}>
                                창업교육 최우수대학 선정 <br/>교육부 장관상 수상
                            </p>
                        </li>
                        <li className={cx("icon_2")}>
                            <span className={cx("txt_1")}>혁신창업을 선도하는 한양</span>
                            <span className={cx("txt_2")}>hanyang Startup</span>
                            <p className={cx("txt_3")}>
                                학생창업기업 배출 국내 대학1위 <br/>동문CEO 기업 10,213개 내용
                            </p>
                        </li>
                        <li className={cx("icon_3")}>
                            <span className={cx("txt_1")}>Startup, Scale Up!</span>
                            <span className={cx("txt_2")}>hanyang Startup</span>
                            <p className={cx("txt_3")}>
                                글로벌 창업거점센터 설립 <br/>
                                글로벌 스타트업 멘토단 운영
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={cx("main_logo_rolling")}>
                <div className={cx("main_cont")}>
                    <div className={cx("main_logo_rolling_list")}>
                        <Slider className={cx("slide")} {...logoSliderSettings} ref={logoSlider}>
                            <div className={cx("list")}><Image src="/assets/image/family_site_1.jpg" width={150}
                                                               height={88} alt="family_site"/></div>
                            <div className={cx("list")}><Image src="/assets/image/family_site_2.jpg" width={126}
                                                               height={88} alt="family_site"/></div>
                            <div className={cx("list")}><Image src="/assets/image/family_site_3.jpg" width={114}
                                                               height={88} alt="family_site"/></div>
                            <div className={cx("list")}><Image src="/assets/image/family_site_4.jpg" width={86}
                                                               height={88} alt="family_site"/></div>
                            <div className={cx("list")}><Image src="/assets/image/family_site_5.jpg" width={120}
                                                               height={88} alt="family_site"/></div>
                            <div className={cx("list")}><Image src="/assets/image/family_site_6.jpg" width={126}
                                                               height={88} alt="family_site"/></div>
                            <div className={cx("list")}><Image src="/assets/image/family_site_1.jpg" width={150}
                                                               height={88} alt="family_site"/></div>
                            <div className={cx("list")}><Image src="/assets/image/family_site_2.jpg" width={126}
                                                               height={88} alt="family_site"/></div>
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
                                    }}><Image src="/assets/image/family_site_next.jpg" width={44} height={46}
                                              alt="family_site_next"/></button>
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

