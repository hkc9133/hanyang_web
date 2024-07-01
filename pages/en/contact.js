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
import PageNavigationEng from "../../component/layout/PageNavigation_eng";

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

            <PageNavigationEng title={"About"} dep={"dep1"} />

            <section>
                <div className={cx("sub_container", "contact")}>
                    <h1 className={cx("sub_top_title")}>Contact Us</h1>
                    <p className={cx("sub_top_txt")}>&nbsp;</p>
                </div>

                <div className={cx("contact_cont_wrap")}>
                    <div className={cx("container")}>
                        <div className={cx("contact_cont")}>
                            <div className={cx("contact_map")}>
                                <div id="map_area" className={cx("map_area")} ref={mapArea}></div>
                            </div>

                            <div className={cx("contact_address")}>
                                <ul>
                                    <li>
                                        <div className={cx("icon")}>
                                            <img src="/assets/image/icon_pin.png" alt="pin icon"/>
                                        </div>
                                        <p>
                                            #103, Hanyang Institute of Technology, 222, Wangsimni-ro, Seongdong-gu, Seoul, Republic of Korea
                                        </p>
                                    </li>
                                    <li>
                                        <div className={cx("icon")}>
                                            <img src="/assets/image/icon_tel.png" alt="tel icon" />
                                        </div>
                                        <p>+82 2 2220 3000</p>
                                    </li>
                                    <li>
                                        <div className={cx("icon")}>
                                            <img src="/assets/image/icon_mail.png" alt="mail icon" />
                                        </div>
                                        <p>startup@hanyang.ac.kr</p>
                                    </li>
                                </ul>
                            </div>

                            <div className={cx("contact_qr")}>
                                <div className={cx("qr_img")}>
                                    <img src="/assets/image/qr.png" alt="qr code" />
                                </div>
                                <p>
                                    <strong>Scan me!</strong> or Search 한양스타트업톡톡 at kakaoTalk <br/>
                                    Online counseling service for all dreaming of startup
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


export default Location;

