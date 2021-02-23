import React, {useEffect, useRef} from 'react';

import Link from 'next/link';
import styles from '../../public/assets/styles/introduce/introduce.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";


const cx = classnames.bind(styles);

const Location = () => {

    const mapArea = useRef();

    useEffect(() => {

        let s = document.createElement("script");
        s.setAttribute("src", "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=b348wme6ql");
        s.onload = function () {
            let mapOptions = {
                center: new window.naver.maps.LatLng(37.5553142, 127.0426254),
                zoom: 15
            };
            let map = new naver.maps.Map(mapArea.current, mapOptions);
            // console.log(mapDiv)

            let marker = new naver.maps.Marker({
                position: new naver.maps.LatLng(37.556861738392726, 127.04835502516103),
                map: map,
                // title: 'Unary Spot!!',
                // icon: {
                //     content: '<div>한양대학교</div>',
                //     size: new naver.maps.Size(22, 35),
                //     anchor: new naver.maps.Point(11, 35)
                // }
            });
        }
        document.head.appendChild(s);
        return () =>{
            s.remove();
        }
    }, [])


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
                                    <li><Link href="#"><a>약도 이미지 다운로드</a></Link></li>
                                    <li><Link href="#"><a>약도 공유하기</a></Link></li>
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
