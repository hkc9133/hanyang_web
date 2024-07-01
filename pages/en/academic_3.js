import React from 'react';

import Link from 'next/link';
import styles from '../../public/assets/styles/en/en_sub.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";
import Head from "next/head";
import PageNavigationEng from "../../component/layout/PageNavigation_eng";

const cx = classnames.bind(styles);

const Academic3 = () => {
    return (
        <>
            <Head>
                <title>HANYANG STARTUP - Academic & Programs</title>
            </Head>

            <PageNavigationEng title={"Academic & Programs"} dep={"dep2"} />

            <section>
                <div className={cx("sub_container", "academic")}>
                    <h1 className={cx("sub_top_title")}>Graduate Courses</h1>
                    <p className={cx("sub_top_txt")}>&nbsp;</p>
                </div>

                <div className={cx("academic_cont_wrap")}>
                    <div className={cx("container")}>
                        <div className={cx("title_wrap")}>
                            <h3>Department of Entrepreneurship : Graduate courses</h3>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Objective</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <p>
                                    To produce practical entrepreneurs and foster experts in the venture startup field through systematic and professional technological startup education
                                </p>
                            </div>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Eligibility</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <p>
                                    (Prospective) entrepreneurs preparing for startups and domestic and overseas applicants aiming to become startup experts with a four-year undergraduate degree or higher
                                </p>
                            </div>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Degree awarded</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <p>
                                    Master of Entrepreneurship
                                </p>
                            </div>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Recruitment period</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <p>
                                    May and October of every year
                                </p>
                            </div>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Advantages</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <ul>
                                    <li>Teaching staff are CEOs of medium-sized companies listed on KOSDAQ and Ph.D. holders in entrepreneurship</li>
                                    <li>Scholarship for excellent students and research expenses support</li>
                                    <li>The curriculum consists of actual startup track / Startup research (education) track</li>
                                    <li>Supports actual startup founders in connection with the Startup Support Foundation programs of Hanyang University</li>
                                </ul>
                            </div>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Curriculum</h3>
                            </div>

                            <div className={cx("cont_right")}>
                                <div className={cx("link_btn")}>
                                    <a href="http://entrepreneurship.hanyang.ac.kr/curriculum/" target="_blank">View Detail</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Academic3;