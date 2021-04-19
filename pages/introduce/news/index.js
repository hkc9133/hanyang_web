import React from 'react';
import styles from '../../../public/assets/styles/introduce/news.module.css';
import classnames from "classnames/bind"

const cx = classnames.bind(styles);
import Link from 'next/link';
import PageNavigation from "../../../component/layout/PageNavigation";

const NewsPage = () => {
    return (
        <>
            <PageNavigation/>
        <section className={cx("sub_container", "newsletter_content")}>
            <h1 className={cx("sub_top_title")}>뉴스레터</h1>
            <p className={cx("sub_top_txt")}>한양스타트업뉴스레터는 창업을 준비하는 학생, 동문 및 <br />지역 사회 청년들에게 성공창업을 위한 정보를 부정기로 제공하는 온라인 소식지입니다.</p>


            {/*<div className={cx("news_banner")}>
                <p>한양스타트업뉴스레터는 창업을 준비하는 한양대학교 재학생, 동문 및 <br/>지역 사회 청년들에게 성공창업을 위한 정보를 부정기로 제공하는 온라인 소식지입니다.</p>
    </div>*/}

            <div className={cx("news_list")}>
                <ul>
                    <li>
                        <Link href="/introduce/news/newsletter_15">
                            <a>
                                <img src="/assets/image/newsletter_thumb/foundationnotice-newsletter-eq-14.jpg"/>
                                <strong>Hanyang Startup Newsletter 15호</strong>
                                <span>Vol. 15 September 2020</span>
                                <span className={cx("detail")}>상세보기</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/introduce/news/newsletter_14"><a>
                            <img src="/assets/image/newsletter_thumb/foundationnotice-newsletter-eq-13.jpg"/>
                            <strong>Hanyang Startup Newsletter 14호</strong>
                            <span>Vol. 14 July 2020</span>
                            <span className={cx("detail")}>상세보기</span>

                        </a></Link>
                    </li>

                    <li>
                        <Link href="/introduce/news/newsletter_13"><a>

                            <img src="/assets/image/newsletter_thumb/foundationnotice-newsletter-eq-12.jpg"/>
                            <strong>Hanyang Startup Newsletter 13호</strong>
                            <span>Vol. 13 Mar 2020</span>
                            <span className={cx("detail")}>상세보기</span>

                        </a></Link>
                    </li>

                    <li>
                        <Link href="/introduce/news/newsletter_12"><a>

                            <img src="/assets/image/newsletter_thumb/foundationnotice-newsletter-eq-11.jpg"/>
                            <strong>Hanyang Startup Newsletter 12호</strong>
                            <span>Vol. 12 August 2019</span>
                            <span className={cx("detail")}>상세보기</span>

                        </a></Link>
                    </li>

                    <li>
                        <Link href="/introduce/news/newsletter_11"><a>

                            <img src="/assets/image/newsletter_thumb/foundationnotice-newsletter-eq-10.jpg"/>
                            <strong>Hanyang Startup Newsletter 11호</strong>
                            <span>Vol. 11 May 2019</span>
                            <span className={cx("detail")}>상세보기</span>
                        </a></Link>
                    </li>

                    <li>
                        <Link href="/introduce/news/newsletter_10"><a>
                            <img src="/assets/image/newsletter_thumb/foundationnotice-newsletter-eq-9.jpg"/>

                            <strong>Hanyang Startup Newsletter 10호</strong>
                            <span>Vol. 10 July 2019</span>
                            <span className={cx("detail")}>상세보기</span>

                        </a></Link>
                    </li>

                    <li>
                        <Link href="/introduce/news/newsletter_09"><a>
                            <img src="/assets/image/newsletter_thumb/foundationnotice-newsletter-eq-8.jpg"/>
                            <strong>Hanyang Startup Newsletter 09호</strong>
                            <span>Vol. 09 July 2019</span>
                            <span className={cx("detail")}>상세보기</span>

                        </a></Link>
                    </li>
                    <li>
                        <Link href="/introduce/news/newsletter_08"><a>
                            <img src="/assets/image/newsletter_thumb/foundationnotice-newsletter-eq-7.jpg"/>
                            <strong>Hanyang Startup Newsletter 08호</strong>
                            <span>Vol. 08 August 2017</span>
                            <span className={cx("detail")}>상세보기</span>

                        </a></Link>
                    </li>

                    <li>
                        <Link href="/introduce/news/newsletter_07"><a>
                            <img src="/assets/image/newsletter_thumb/foundationnotice-newsletter-eq-6.jpg"/>
                            <strong>Hanyang Startup Newsletter 07호</strong>
                            <span>Vol. 07 March 2017</span>
                            <span className={cx("detail")}>상세보기</span>
                        </a></Link>
                    </li>
                    <li>
                        <Link href="/introduce/news/newsletter_06"><a>
                            <img src="/assets/image/newsletter_thumb/foundationnotice-newsletter-eq-5.png"/>
                            <strong>Hanyang Startup Newsletter 06호</strong>
                            <span>Vol. 06 December 2016</span>
                            <span className={cx("detail")}>상세보기</span>
                        </a></Link>
                    </li>
                    <li>
                        <Link href="/introduce/news/newsletter_05"><a>
                            <img src="/assets/image/newsletter_thumb/foundationnotice-newsletter-eq-4.png"/>
                            <strong>Hanyang Startup Newsletter 05호</strong>
                            <span>Vol. 05 September 2016</span>
                            <span className={cx("detail")}>상세보기</span>
                        </a></Link>
                    </li>
                    <li>
                        <Link href="/introduce/news/newsletter_04"><a>
                            <img src="/assets/image/newsletter_thumb/foundationnotice-newsletter-eq-3.png"/>
                            <strong>Hanyang Startup Newsletter 04호</strong>
                            <span>Vol. 04 July 2016</span>
                            <span className={cx("detail")}>상세보기</span>
                        </a></Link>
                    </li>
                    <li>
                        <Link href="/introduce/news/newsletter_03"><a>
                            <img src="/assets/image/newsletter_thumb/foundationnotice-newsletter-eq-2.png"/>
                            <strong>Hanyang Startup Newsletter 03호</strong>
                            <span>Vol. 03 March 2016</span>
                            <span className={cx("detail")}>상세보기</span>
                        </a></Link>
                    </li>
                    <li>
                        <Link href="/introduce/news/newsletter_02"><a>
                            <img src="/assets/image/newsletter_thumb/foundationnotice-newsletter-eq-1.png"/>
                            <strong>Hanyang Startup Newsletter 02호</strong>
                            <span>Vol. 02 December 2015</span>
                            <span className={cx("detail")}>상세보기</span>
                        </a></Link>
                    </li>
                    <li>
                        <Link href="/introduce/news/newsletter_01"><a>
                            <img src="/assets/image/newsletter_thumb/foundationnotice-newsletter-eq-0.png"/>
                            <strong>Hanyang Startup Newsletter 01호</strong>
                            <span>Vol. 01 September 2015</span>
                            <span className={cx("detail")}>상세보기</span>
                        </a></Link>
                    </li>
                </ul>
            </div>

        </section>
            </>
    );
};

export default NewsPage;
