import React, {useEffect, useRef,useState} from 'react';

import Link from 'next/link';
import styles from '../../public/assets/styles/en/en_sub.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";
import { url,port} from "../../lib/api/client";
import Modal from "../../component/common/Modal";
import Image from "next/image";
import {Dropdown,Menu} from "antd";
import client from '../../lib/api/client';
import NaverShareButton from "../../component/common/share/NaverShareButton";
import FaceBookShareButton from "../../component/common/share/FaceBookShareButton";
import KaKaoShareButton from "../../component/common/share/KaKaoShareButton";
import Head from "next/head";
import {baseUrl} from "../../lib/api/client";

const cx = classnames.bind(styles);

const mapUrl = 'http://naver.me/FbRQpJoM';
const imageUrl = `${baseUrl}/image/hanyang_logo.png`

const Location = () => {

    const mapArea = useRef();
    const [showModal,setShowModal] = useState(false);



    useEffect(() => {
        initFacebookSdk();
        let s = document.createElement("script");
        s.setAttribute("src", "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=b348wme6ql");
        s.onload = function () {
            let mapOptions = {
                center: new window.naver.maps.LatLng(37.55755459409449, 127.04686152506919),
                zoom: 15,
                draggable: false,
                scrollWheel: false
            };
            let map = new naver.maps.Map(mapArea.current, mapOptions);

            let marker = new naver.maps.Marker({
                position: new naver.maps.LatLng(37.55755459409449, 127.04686152506919),
                map: map,
            });
        }
        document.head.appendChild(s);

        let k = document.createElement("script");
        k.setAttribute("src", "https://developers.kakao.com/sdk/js/kakao.min.js");
        k.onload = function () {
            window.Kakao.init('e30e8790c8207f560e3b47879051adb8');
            // window.Kakao.Link.createDefaultButton({
            //     container: '#kakao_share',
            //     objectType: 'location',
            //     address: '서울특별시 성동구 왕십리로 222',
            //     addressTitle: '한양대학교 HIT 103호',
            //     content: {
            //         title: '한양대학교 창업지원단',
            //         // description: '이번 주는 체리블라썸라떼 1+1',
            //         imageUrl:imageUrl,
            //         link: {
            //             mobileWebUrl: mapUrl,
            //             webUrl: mapUrl,
            //         },
            //     },
            //     buttons: [
            //         {
            //             title: '웹으로 보기',
            //             link: {
            //                 mobileWebUrl: mapUrl,
            //                 webUrl: mapUrl,
            //             },
            //         },
            //     ],
            // });
            // window.Kakao.Link.createDefaultButton({
            //     container: '#kakao_share',
            //     objectType: 'feed',
            //     content: {
            //         title: '한양대학교 창업지원단',
            //         // description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
            //         imageUrl: imageUrl,
            //         link: {
            //             mobileWebUrl: url,
            //             webUrl: url,
            //         }
            //     },
            //     buttons: [
            //         // {
            //         //     title: '웹으로 보기',
            //         //     link: {
            //         //         mobileWebUrl: mapUrl,
            //         //         webUrl: mapUrl,
            //         //     }
            //         // },
            //         // {
            //         //     title: '앱으로 보기',
            //         //     link: {
            //         //         mobileWebUrl: 'http://61.109.248.203',
            //         //         webUrl: 'http://61.109.248.203',
            //         //     }
            //         // }
            //     ],
            //     //
            //     // objectType: 'feed',
            //     // content: {
            //     //     title: '한양대학교 창업지원단',
            //     //     description: '창업지원단 지도',
            //     //     imageUrl:
            //     //         `${'http://61.109.248.203'}${port != null ? `:${port}` : ''}/api/image/logo.png`,
            //     //     link: {
            //     //         mobileWebUrl: 'https://map.naver.com/v5/entry/place/13341941?c=14110671.9385277,4513759.3942962,14,0,0,0,dh&placePath=%2Fhome%3Fentry=plt',
            //     //     },
            //     // },
            //     // buttons: [
            //     //     {
            //     //         title: '네이버 지도 확인',
            //     //         link: {
            //     //             mobileWebUrl: 'https://map.naver.com/v5/entry/place/13341941?c=14110671.9385277,4513759.3942962,14,0,0,0,dh&placePath=%2Fhome%3Fentry=plt',
            //     //         },
            //     //     },
            //     // ]
            // });

        }

        document.head.appendChild(k);

        return () =>{
            k.remove();
            s.remove();
        }


    }, [])

    const initFacebookSdk = () =>{
        return new Promise(resolve => {
            // wait for facebook sdk to initialize before starting the react app
            window.fbAsyncInit = function () {
                window.FB.init({
                    appId: 718848628746534,
                    cookie: true,
                    xfbml: true,
                    version: 'v9.0'
                });
            };
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) { return; }
                js = d.createElement(s); js.id = id;
                js.src = "https://connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        });
    }


    const facebookShare = () =>{
        let currentUrl = window.document.location.href;

        window.FB.ui({
                method: 'share',
                href: mapUrl
            }, function (response) {
                if (response && !response.error_code) {
                    // alert('공유 완료');
                } else {
                    // alert('공유 실패');
                }
            }
        );
    }

    const naverShare = () =>{
        let link = encodeURI(encodeURIComponent(mapUrl));
        let title = encodeURI("한양대학교 창업지원단");
        let shareURL = "https://share.naver.com/web/shareView?url=" + link + "&title=" + title;
        document.location = shareURL;
    }

    const kakaoShare = () =>{
        // console.log(mapUrl)
        // window.Kakao.Link.sendDefault({
        //     // container: '.kakao_share',
        //     objectType: 'feed',
        //     content: {
        //         title: '한양대학교 창업지원단',
        //         // description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
        //         imageUrl: imageUrl,
        //         link: {
        //             mobileWebUrl: mapUrl,
        //             webUrl: mapUrl,
        //         }
        //     },
        // });
        window.Kakao.Link.sendDefault({
            objectType: 'location',
            address: '한양대학교 창업지원단',
            addressTitle: '한양대학교 창업지원단',
            content: {
                title: '한양대학교 창업지원단',
                // description: '이번 주는 체리블라썸라떼 1+1',
                imageUrl:imageUrl,
                link: {
                    mobileWebUrl: 'https://startup.hanyang.ac.kr',
                    webUrl: 'https://startup.hanyang.ac.kr',
                },
            },
            buttons: [
                {
                    title: '홈페이지',
                    link: {
                        mobileWebUrl: 'https://startup.hanyang.ac.kr',
                        webUrl: 'https://startup.hanyang.ac.kr',
                    },
                },
            ],
        });

    }


    const menu = (
        <Menu>
            <Menu.Item>
                <div style={{display: 'flex', justifyContent: 'space-between',padding:'0px 20px'}}>
                    <button onClick={() =>{naverShare()}}><Image src="/assets/image/startup_naver_blog.png" width={40} height={40} alt="sns_logo"/></button>
                    <button onClick={() =>{facebookShare()}}><Image src="/assets/image/startup_facebook.png" width={40} height={40} alt="sns_logo"/></button>
                    <button id="kakao_share" onClick={() =>{kakaoShare()}} ><Image src="/assets/image/startup_kakao.png" width={40} height={40} alt="sns_logo"/></button>
                </div>
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <Head>
                <title>HANYANG STARTUP - Contact</title>
            </Head>
            <PageNavigation title={"한양대학교 창업지원단 -오시는길"} desc={"04763 서울특별시 성동구 왕십리로 222 한양대학교 HIT 103호, 한양대학교(서울) 창업지원단"}/>
            <section className={cx("container")}>
                <div className={cx("sub_container", "location_wrap")}>
                    <h1 className={cx("sub_top_title")}>Contact</h1>
                    <p className={cx("sub_top_txt")}>Thank you for visiting the website of the start-up support group.<br />Students, teachers, alumni, and general start-ups who are interested<br />in starting a business or need help, please contact us and we will<br />consider and support you so that you can successfully start a business.</p>

                    <div className={cx("contact_cont")}>
                        <h3>Curious about starting a business?</h3>
                        <p className={cx("contact_list_big")}>Start-up Consultation Email : startup@hanyang.ac.kr</p>
                        <p className={cx("contact_list_big")}>Start-up Consultation Phone : +82-2-2220-3000</p>
                        <p className={cx("contact_list_big")}>KakaoTalk Channel : 한양스타트업톡톡 (Hanyang Start-up TalkTalk) <img src="/assets/image/icon_kakao.png" alt="" /></p>
                    </div>

                    <div className={cx("contact_cont")}>
                        <h3>Startup Consultation Procedure</h3>
                        <div className={cx("contact_list")}>
                            <h3><strong>01.</strong> Request for consultation</h3>
                            <div className={cx("contact_list_flex")}>
                                <p>Consultation target :</p>
                                <span>Hanyang University Startup Support Group startup support project and program beneficiaries, Hanyang University (graduate) students and alumni, Hanyang Cyber ​​University students</span>
                            </div>
                            <div className={cx("contact_list_flex")}>
                                <p>Consultation field :</p>
                                <span>Taxation, Accounting / Legal Affairs / Intellectual Property / Marketing Market / Labor / Investment / Initial Start-up Funding / Business Modeling / Prototype Development / Global Advancement / Scale-up (COSDAQ CEO, etc.) / Private Technology Advisor (Executive Officer) / Peer CEO</span>
                            </div>
                        </div>
                        <div className={cx("contact_list")}>
                            <h3><strong>02.</strong> Mentor assignment</h3>
                            <p>Mentor assignment takes up to a week.</p>
                        </div>
                        <div className={cx("contact_list")}>
                            <h3><strong>03.</strong> Counseling schedule adjustment</h3>
                            <p>The final assigned mentor will contact the mentee to coordinate the consultation date, time, location, and mentoring method.</p>
                        </div>
                        <div className={cx("contact_list")}>
                            <h3><strong>04.</strong> Mentoring progress</h3>
                            <p>Counseling can be conducted in a variety of ways, including online (video), offline, landline, and e-mail.</p>
                        </div>
                        <div className={cx("contact_list")}>
                            <h3><strong>05.</strong> Statisfaction survey</h3>
                            <p>In order to provide quality mentoring service, mentoring satisfaction is surveyed.</p>
                            <p>After the satisfaction survey, you can read the mentor's general opinion.</p>
                        </div>
                    </div>

                    <div className={cx("txt_style_1", "contact_cont")}>
                        <h3>Way to come</h3>
                        <p>We will guide you on how to come to the Startup Support Team.</p>
                        <div id="map_area" className={cx("map_area")} ref={mapArea}></div>
                        <div className={cx("btn_area")}>
                            <ul>
                                <li><Link href="/assets/pdf/map.pdf" ><a target="_blank" download>Download Schematic Image</a></Link></li>
                                <li>
                                <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" arrow>
                                    <a onClick={(e)=>{e.preventDefault();}}>Share Schematic</a>
                                </Dropdown>
                                </li>
                            </ul>
                        </div>
                        <div className={cx("location")}>
                            <h4>Address and Contacts</h4>
                            <address>Hanyang University HIT 103, 222 Wangsimni-ro, Seongdong-gu, Seoul 04763, Hanyang University (Seoul) Startup Support Group</address>
                            <div className={cx("info")}>
                                <ul>
                                    <li>Tel. 02-2220-3000</li>
                                    <li>E-mail: startup@hanyang.ac.kr</li>
                                </ul>
                            </div>
                            <h4>Transportation Guide</h4>
                            <div className={cx("transportation")}>
                                <ul>
                                    <li className={cx("subway")}>Hanyang University Station Exit 2 of Subway Line 2</li>
                                    <li className={cx("green_bus")}>Main bus: No. 302, No. 410.</li>
                                    <li className={cx("blue_bus")}>Branch number: 2012 (Cheongnyangni), 2013, 2014, 2222</li>
                                    <li className={cx("green_bus")}>Village Bus : Seongdong 03-2 (Get off at Hanyang Institute of Technology or Paiknam Academic Information Center in Seoul Campus)</li>
                                </ul>
                            </div>
                            <h4>Parking Information</h4>
                            <div className={cx("parking_area")}>
                                <ul>
                                    <li>On-campus parking area</li>
                                    <li className={cx("parking_info")}>- Hanyang Institute of Technology (HIT) underground parking lot, business building underground parking lot, large sports ground underground parking lot</li>
                                </ul>
                                <ul>
                                    <li>Parking fee</li>
                                    <li className={cx("parking_info")}>- Less than 15 minutes after entering : Free</li>
                                    <li className={cx("parking_info")}>- More than 15 minutes and less than 30 minutes after entering : 1,500 won</li>
                                    <li className={cx("parking_info")}>- More than 30 minutes after entering the car : 500 won per 10 minutes additionally charged</li>
                                </ul>
                                <ul>
                                    <li>Discount voucher (requires separate request from visiting department)</li>
                                    <li className={cx("parking_info")}>- Register pre-vehicle or issue discount voucher before departure</li>
                                    <li className={cx("parking_info")}>- 2 hours, 4 hours, 6 hours, and 8 hours can be registered and issued</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


export default Location;

