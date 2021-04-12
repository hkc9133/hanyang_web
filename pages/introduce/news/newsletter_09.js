import React, {useEffect} from 'react';
import styles from '../../../public/assets/styles/introduce/news.module.css';
import classnames from "classnames/bind"

const cx = classnames.bind(styles);
import Link from 'next/link';
import PageNavigation from "../../../component/layout/PageNavigation";
const Newsletter09 = () => {
    useEffect(() =>{
        var swiper = new Swiper('.swiper-container', {
            autoHeight: true, //enable auto height
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    },[])
    return (
        <>
            <PageNavigation/>
            <section className={cx("sub_container","newsletter_content")}>
                <h1 className={cx("sub_top_title")}>뉴스레터</h1>
                <p className={cx("sub_top_txt")}>뉴스레터 게시판 </p>
                <div className={cx("news_banner")}>
                    <p>한양스타트업뉴스레터는 창업을 준비하는 한양대학교 재학생, 동문 및 <br/>지역 사회 청년들에게 성공창업을 위한 정보를 부정기로 제공하는 온라인 소식지입니다.</p>
                </div>
                <div className={cx("news_board_wrap")}>
                    <div className={cx("news_board_cont")}>
                        <div className={`${cx("swiper-con")} swiper-container`}>
                            <div className={"swiper-wrapper"}>
                                <div className={"swiper-slide"}>
                                    <div className={cx("news_slide")}>
                                        <img src="/assets/image/newsletter_temp_sub/09/01.jpg" alt="1"/>
                                            <p>오른쪽으로 이미지를 넘기면 자세한 내용을 확인하실 수 있습니다.</p>
                                    </div>
                                </div>
                                <div className={"swiper-slide"}>
                                    <div className={cx("news_slide")}>
                                        <img src="/assets/image/newsletter_temp_sub/09/02.jpg" alt="2"/>


                                    </div>
                                </div>
                                <div className={"swiper-slide"}>
                                    <div className={cx("news_slide")}>
                                        <img src="/assets/image/newsletter_temp_sub/09/03.jpg" alt="3"/>

                                    </div>
                                </div>
                                <div className={"swiper-slide"}>
                                    <div className={cx("news_slide")}>
                                        <img src="/assets/image/newsletter_temp_sub/09/04.jpg" alt="4"/>

                                    </div>
                                </div>
                                <div className={"swiper-slide"}>
                                    <div className={cx("news_slide")}>
                                        <img src="/assets/image/newsletter_temp_sub/09/05.jpg" alt="5"/>

                                    </div>
                                </div>
                                <div className={"swiper-slide"}>
                                    <div className={cx("news_slide")}>
                                        <img src="/assets/image/newsletter_temp_sub/09/06.jpg" alt="6"/>

                                    </div>
                                </div>
                                <div className={"swiper-slide"}>
                                    <div className={cx("news_slide")}>
                                        <img src="/assets/image/newsletter_temp_sub/09/07.jpg" alt="7"/>

                                    </div>
                                </div>
                                <div className={"swiper-slide"}>
                                    <div className={cx("news_slide")}>
                                        <img src="/assets/image/newsletter_temp_sub/09/08.jpg" alt="8"/>

                                    </div>
                                </div>
                                <div className={"swiper-slide"}>
                                    <div className={cx("news_slide")}>
                                        <img src="/assets/image/newsletter_temp_sub/09/09.jpg" alt="9"/>

                                    </div>
                                </div>
                                <div className={"swiper-slide"}>
                                    <div className={cx("news_slide")}>
                                        <img src="/assets/image/newsletter_temp_sub/09/10.jpg" alt="10"/>
                                    </div>
                                </div>
                                <div className={"swiper-slide"}>
                                    <div className={cx("news_slide")}>
                                        <img src="/assets/image/newsletter_temp_sub/09/11.jpg" alt="11"/>
                                    </div>
                                </div>
                                <div className={"swiper-slide"}>
                                    <div className={cx("news_slide")}>
                                        <img src="/assets/image/newsletter_temp_sub/09/12.jpg" alt="12"/>
                                    </div>
                                </div>
                                <div className={"swiper-slide"}>
                                    <div className={cx("news_slide")}>
                                        <img src="/assets/image/newsletter_temp_sub/09/13.jpg" alt="13"/>
                                    </div>
                                </div>
                                <div className={"swiper-slide"}>
                                    <div className={cx("news_slide")}>
                                        <img src="/assets/image/newsletter_temp_sub/09/14.jpg" alt="14"/>
                                    </div>
                                </div>
                                <div className={"swiper-slide"}>
                                    <div className={cx("news_slide")}>
                                        <img src="/assets/image/newsletter_temp_sub/09/15.jpg" alt="14"/>
                                    </div>
                                </div>
                            </div>

                                <div className={`${cx("swiper-pagination")} swiper-pagination `}>
                            </div>

                        </div>


                    </div>
                    <div className={cx("news_board_bottom")}>
                        <Link href={"/introduce/news"}>
                            <a className={cx("list_btn")}>목록보기</a>
                        </Link>
                    </div>

                </div>


            </section>
        </>
    );
};

export default Newsletter09;
