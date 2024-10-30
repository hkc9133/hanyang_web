import React from 'react';

import Link from 'next/link';
import styles from '../../public/assets/styles/en/en_sub.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";
import Head from "next/head";
import PageNavigationEng from "../../component/layout/PageNavigation_eng";

const cx = classnames.bind(styles);

const Academic2 = () => {
    return (
        <>
            <Head>
                <title>HANYANG STARTUP - Academic & Programs</title>
            </Head>

            <PageNavigationEng title={"Academic & Programs"} dep={"dep2"} />

            <section>
                <div className={cx("sub_container", "academic")}>
                    <h1 className={cx("sub_top_title")}>Undergraduate Courses</h1>
                    <p className={cx("sub_top_txt")}>&nbsp;</p>
                </div>

                <div className={cx("academic_cont_wrap")}>
                    <div className={cx("container")}>
                        <div className={cx("title_wrap")}>
                            <h3>Major in Entrepreneurship : Undergraduate courses</h3>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Objective</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <p>
                                    To foster talented individuals of creative convergence and expertise by integrating the specialization of a major with the curriculum of a startup education.
                                </p>
                            </div>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Degree awarded</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <p>
                                    Bachelor of Science
                                </p>
                            </div>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Credits required</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <p>
                                    36 credits of entrepreneurship lectures including compulsory major course 21 credits. (For students who signed up before 2016, 39 credits are required.)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx("academic_cont_wrap", "bg_gray")}>
                    <div className={cx("container")}>
                        <div className={cx("title_wrap")}>
                            <h3>※ Industry 4.0 Micro Major</h3>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Objective</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <p>
                                    A micro major aimed to equip students with technical and interdisciplinary skills needed to become the future leaders in the era of Industry 4.0
                                </p>
                            </div>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Degree awarded</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <p>
                                    Not granted (only marked on transcript)
                                </p>
                            </div>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Credits required</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <p>
                                    12 credits of entrepreneurship lectures including compulsory major course 21 credits.
                                </p>
                            </div>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Application Requirements</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <p>
                                    Students who interested in startup (only Seoul Campus)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx("academic_cont_wrap")}>
                    <div className={cx("container")}>
                        <div className={cx("title_wrap")}>
                            <h3>Courses and Subjects offered</h3>
                        </div>

                        <div className={cx("academic_cont")}>
                            <div>
                                <img src="/assets/image/academic_course_en.png" alt="courses and subjects" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Academic2;