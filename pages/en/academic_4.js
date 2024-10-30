import React from 'react';

import Link from 'next/link';
import styles from '../../public/assets/styles/en/en_sub.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";
import Head from "next/head";
import PageNavigationEng from "../../component/layout/PageNavigation_eng";

const cx = classnames.bind(styles);

const Academic4 = () => {
    return (
        <>
            <Head>
                <title>HANYANG STARTUP - Academic & Programs</title>
            </Head>

            <PageNavigationEng title={"Academic & Programs"} dep={"dep2"} />

            <section>
                <div className={cx("sub_container", "academic")}>
                    <h1 className={cx("sub_top_title")}>Alumni Startup Education</h1>
                    <p className={cx("sub_top_txt")}>&nbsp;</p>
                </div>

                <div className={cx("academic_cont_wrap")}>
                    <div className={cx("container")}>
                        <div className={cx("title_wrap")}>
                            <h3>Alumni Startup Education : Hanyang Startup Academy</h3>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Objective</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <p>
                                    To support a successful startup by educating prospective tech startup founders about basic management capacity as well as start-up practice
                                </p>
                            </div>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Details</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <p>
                                    Exploration of ideas, Business model, Management, Marketing, Fund-raising, Investment attraction, etc.
                                </p>
                            </div>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Eligibility</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <p>
                                    Enrolled students, students on a leave of absence and alumni of Hanyang University, prospective entrepreneurs, and an early-stage entrepreneurs
                                </p>
                            </div>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Recruitment period</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <p>
                                    August of every year
                                </p>
                            </div>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Educational benefits</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <ul>
                                    <li>Issues certificates with the name of the resident of Hanyang University</li>
                                    <li>Provides opportunities to join the Hanyang Startup Academy alumni network</li>
                                    <li>Connects excellent entrepreneurs with investment funds and startup support programs from Hanyang University</li>
                                    <li>Provides mentoring services including patent, laws, accounting, marketing, opportunities for new markets, etc.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Academic4;