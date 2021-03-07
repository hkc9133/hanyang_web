import React, {useEffect, useRef,useState} from 'react';

import Link from 'next/link';
import styles from '../../public/assets/styles/introduce/introduce.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";
import { url,port} from "../../lib/api/client";
import Modal from "../../component/common/Modal";
import Image from "next/image";
import {Dropdown,Menu} from "antd";
import client from '../../lib/api/client';


const cx = classnames.bind(styles);

const mapUrl = 'http://naver.me/FbRQpJoM';
const imageUrl = `http://61.109.248.203${port != null ? `:${port}` : ''}/api/image/hanyang_logo.png`

const Location = () => {

    const mapArea = useRef();
    const [showModal,setShowModal] = useState(false);



    useEffect(() => {
        initFacebookSdk();

        let s = document.createElement("script");
        s.setAttribute("src", "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=b348wme6ql");
        s.onload = function () {
            let mapOptions = {
                center: new window.naver.maps.LatLng(37.5553142, 127.0426254),
                zoom: 15
            };
            let map = new naver.maps.Map(mapArea.current, mapOptions);

            let marker = new naver.maps.Marker({
                position: new naver.maps.LatLng(37.556861738392726, 127.04835502516103),
                map: map,
            });
        }
        document.head.appendChild(s);

        let k = document.createElement("script");
        k.setAttribute("src", "https://developers.kakao.com/sdk/js/kakao.min.js");
        k.onload = function () {
            window.Kakao.init('e30e8790c8207f560e3b47879051adb8');
            window.Kakao.Link.createDefaultButton({
                container: '#kakao_share',
                objectType: 'feed',
                content: {
                    title: '한양대학교 창업지원단',
                    // description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
                    imageUrl: imageUrl,
                    link: {
                        mobileWebUrl: mapUrl,
                        webUrl: mapUrl,
                    }
                },
                buttons: [
                    // {
                    //     title: '웹으로 보기',
                    //     link: {
                    //         mobileWebUrl: mapUrl,
                    //         webUrl: mapUrl,
                    //     }
                    // },
                    // {
                    //     title: '앱으로 보기',
                    //     link: {
                    //         mobileWebUrl: 'http://61.109.248.203',
                    //         webUrl: 'http://61.109.248.203',
                    //     }
                    // }
                ],
                //
                // objectType: 'feed',
                // content: {
                //     title: '한양대학교 창업지원단',
                //     description: '창업지원단 지도',
                //     imageUrl:
                //         `${'http://61.109.248.203'}${port != null ? `:${port}` : ''}/api/image/logo.png`,
                //     link: {
                //         mobileWebUrl: 'https://map.naver.com/v5/entry/place/13341941?c=14110671.9385277,4513759.3942962,14,0,0,0,dh&placePath=%2Fhome%3Fentry=plt',
                //     },
                // },
                // buttons: [
                //     {
                //         title: '네이버 지도 확인',
                //         link: {
                //             mobileWebUrl: 'https://map.naver.com/v5/entry/place/13341941?c=14110671.9385277,4513759.3942962,14,0,0,0,dh&placePath=%2Fhome%3Fentry=plt',
                //         },
                //     },
                // ]
            });

        }

        document.head.appendChild(k);

        return () =>{
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
        let url = encodeURI(encodeURIComponent(mapUrl));
        let title = encodeURI("한양대학교 창업지원단");
        let shareURL = "https://share.naver.com/web/shareView?url=" + url + "&title=" + title;
        document.location = shareURL;
    }

    const kakaoShare = () =>{
        window.Kakao.Link.sendDefault({
            // container: '.kakao_share',
            objectType: 'feed',
            content: {
                title: '한양대학교 창업지원단',
                // description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
                imageUrl: imageUrl,
                link: {
                    mobileWebUrl: mapUrl,
                    webUrl: mapUrl,
                }
            },
        });
    }


    const menu = (
        <Menu>
            <Menu.Item>
                <div style={{display: 'flex', justifyContent: 'space-between',padding:'0px 20px'}}>
                    <button onClick={() =>{naverShare()}}><Image src="/assets/image/startup_naver_blog.png" width={40} height={40} alt="sns_logo"/></button>
                    <button onClick={() =>{facebookShare()}}><Image src="/assets/image/startup_facebook.png" width={40} height={40} alt="sns_logo"/></button>
                    <button id="kakao_share" onClick={kakaoShare} ><Image src="/assets/image/startup_kakao.png" width={40} height={40} alt="sns_logo"/></button>
                </div>
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <PageNavigation/>
            <section className={cx("container")}>
                <div className={cx("sub_container", "location_wrap")}>
                    <h1 className={cx("sub_top_title")}>오시는 길</h1>
                    {/*<p className={cx("sub_top_txt")}>당신의 꿈과 열정을 응원합니다. </p>*/}
                    <div className={cx("txt_style_1")}>
                        <div className={cx("left_title")}>
                            {/*<h3>오시는 길</h3>*/}
                            <div className={cx("btn_area")}>
                                <ul>
                                    <li><Link href="/assets/image/location_map.png" ><a target="_blank" download>약도 이미지 다운로드</a></Link></li>
                                    <li>
                                    <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" arrow>
                                        <a onClick={(e)=>{e.preventDefault();}}>약도 공유하기</a>
                                    </Dropdown>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="map_area" className={cx("map_area")} ref={mapArea}>
                        </div>
                        <div className={cx("location")}>
                            <h4>주소 및 연락처</h4>
                            <address>04763 서울특별시 성동구 왕십리로 222 한양대학교 HIT 103호, 한양대학교(서울) 창업지원단</address>
                            <div className={cx("info")}>
                                <ul>
                                    <li>Tel. 02-2220-3000</li>
                                    <li>E-mail: startup@hanyang.ac.kr</li>
                                </ul>
                            </div>
                            <h4>교통편 안내</h4>
                            <div className={cx("transportation")}>
                                <ul>
                                    <li className={cx("subway")}>지하철 2호선 한양대역 2번출구</li>
                                    <li className={cx("green_bus")}>간선버스 : 302번, 410번</li>
                                    <li className={cx("blue_bus")}>지선번호 : 2012(청량리)번, 2013번, 2014번, 2222번</li>
                                    <li className={cx("green_bus")}>마을버스 : 성동 03-2</li>
                                    <li>(서울캠퍼스 내 한양종합기술연구원 또는 백남학술정보관 하차)</li>
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

