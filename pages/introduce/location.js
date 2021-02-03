import React from 'react';

import Link from 'next/link';
import styles from '../../public/assets/styles/introduce/introduce.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";

const cx = classnames.bind(styles);

const Location = () => {
    return (
        <>
            <PageNavigation/>
        <section className={cx("container")}>
            <div className={cx("sub_container","location_wrap")}>
                <h1 className={cx("sub_top_title")}>오시는 길</h1>
                {/*<p className={cx("sub_top_txt")}>당신의 꿈과 열정을 응원합니다. </p>*/}
                <div className={cx("txt_style_1")}>
                    <div className={cx("left_title")}>
                        
                        <div className={cx("btn_area")}>
                            <ul>
                                <li><Link href="#"><a>약도 이미지 다운로드</a></Link></li>
                                <li><Link href="#"><a>약도 공유하기</a></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx("map_area")}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1581.4489350466001!2d127.04579725822586!3d37.557469921251524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5ccb2fb5b6b%3A0x26831815f999537b!2z7ZWc7JaR7IKs7J2067KE64yA7ZWZ6rWQ!5e0!3m2!1sko!2skr!4v1609675337330!5m2!1sko!2skr"
                            frameBorder="0" style={{border:0}}allowFullScreen="" aria-hidden="false"
                            tabIndex="0"></iframe>
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
                                <li className={cx("green_bus")}>마을버스 : 성동03-2 (서울캠퍼스 내 한양종합기술연구원 또는 백남학술정보관 하차)</li>
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
