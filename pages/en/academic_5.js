import React from 'react';

import Link from 'next/link';
import styles from '../../public/assets/styles/en/en_sub.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";
import Head from "next/head";
import PageNavigationEng from "../../component/layout/PageNavigation_eng";

const cx = classnames.bind(styles);

const Academic5 = () => {
    return (
        <>
            <Head>
                <title>HANYANG STARTUP - Academic & Programs</title>
            </Head>

            <PageNavigationEng title={"Academic & Programs"} dep={"dep2"} />

            <section>
                <div className={cx("sub_container", "academic")}>
                    <h1 className={cx("sub_top_title")}>Startup Programs</h1>
                    <p className={cx("sub_top_txt")}>&nbsp;</p>
                </div>

                <div className={cx("academic_cont_wrap")}>
                    <div className={cx("container")}>
                        <div className={cx("title_wrap")}>
                            <h3>Startup Club</h3>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Qualification</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <p style={{marginBottom: "15px"}}>
                                    A team that aspires to be entrepreneurs, and is formed of more than 3 international or Korean students
                                </p>
                                <ul>
                                    <li>The representative must be enrolled in HYU(Seoul)</li>
                                    <li>Non-HYU students can participate as team members</li>
                                    <li>Exchange/Certified/Graduates are NOT allowed to participate</li>
                                </ul>
                            </div>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Process</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <p>
                                    Screening &gt; Opening Ceremony &gt; Startup Education &gt; Club Activity &gt; Final Report
                                </p>
                            </div>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Required Activities</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <ul>
                                    <li>Monthly Mentoring with H.I.E Professors</li>
                                    <li>Monthly Startup Activity Report</li>
                                    <li>Interim Report, Final Report</li>
                                </ul>
                            </div>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Benefit</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <ul>
                                    <li>Financial support for startup activities</li>
                                    <li>Startup education and professional mentoring</li>
                                    <li>Certificates for those who have successfully completed</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx("academic_cont_wrap", "bg_gray")}>
                    <div className={cx("container")}>
                        <div className={cx("title_wrap")}>
                            <h3>Startup Competition</h3>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Venture startup Competition</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <p>
                                    Nationwide startup competition to discover and foster undergraduate and graduate students’ creative, innovative business models
                                </p>
                            </div>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Global startup Competition</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <p>
                                    Startup competition to explore global startup items and strengthen entrepreneurs' capacity and networking in cooperation with overseas universities and institutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx("academic_cont_wrap")}>
                    <div className={cx("container")}>
                        <div className={cx("title_wrap")}>
                            <h3>Networking</h3>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Startup Forum</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <p>
                                    An issue-focused seminar participated by senior enterprisers, professors, and prospective entrepreneurs to provide a place of exchange and knowledge sharing to promote cooperation among companies
                                </p>
                            </div>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Global startup mentor group</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <ul>
                                    <li>Mentors group of alumni consisting of global enterprises employees, entrepreneurs, and investors (Silicon Valley, Seattle, Shanghai, Hanoi)</li>
                                    <li>Operates a global platform for employment and startup support and provides online / offline lectures, seminars, and mentoring services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx("academic_cont_wrap", "bg_gray")}>
                    <div className={cx("container")}>
                        <div className={cx("title_wrap")}>
                            <h3>One-Stop Mentoring platform</h3>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>(Step1) One-stop counseling for startup</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <p>
                                    One-on-one mentoring with the teaching staff of the institute for Entrepreneurship about the development of business models and the process of commercialization
                                </p>
                            </div>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>(Step2) Mentors-on-Call</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <p style={{marginBottom: "10px"}}>
                                    Online/off-line one-on-one mentoring with specialists regarding technical advice, laws, etc. <br/>
                                </p>
                                <p>
                                    ※ Application submission (<a href="https://startup.hanyang.ac.kr/startup_counsel/counsel_apply" target="_blank">https://startup.hanyang.ac.kr/startup_counsel/counsel_apply</a>)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx("academic_cont_wrap")}>
                    <div className={cx("container")}>
                        <div className={cx("title_wrap")}>
                            <h3>24-7 Startup Dorm</h3>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>24-7 Startup Dorm</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <ul>
                                    <li>Startup space for students interested in startups with a total area 638.01㎡, 24/7 days</li>
                                    <li>Consists of Dormitory room, Co-working space, Meeting room, Mentoring room, Professor office</li>
                                    <li>81 Startups with great potential, with company sales of $ 6 million, investment raising of $ 6 million (2018~2023)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx("academic_cont_wrap", "bg_gray")}>
                    <div className={cx("container")}>
                        <div className={cx("title_wrap")}>
                            <h3>Government support project</h3>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Startup-Centric University</h3>
                            </div>
                            <div className={cx("cont_right")}>
                                <ul>
                                    <li>Selected as a host institution for the "Startup-Centric University" sponsored by the Ministry of SMEs and Startups</li>
                                    <li>Provide funds and services needed for commercialization and serves as innovation hubs for youth startups in regional areas as well as the cradle of unicorns in order to constitute an ecosystem for youth startups</li>
                                </ul>

                                <div className={cx("tb_style_1")} style={{marginBottom: "15px"}}>
                                    <table>
                                        <colgroup>
                                            <col style={{width: "40%"}} />
                                            <col style={{width: "25%"}} />
                                            <col style={{width: "35%"}} />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th scope="col">Eligibility</th>
                                                <th scope="col">Scale of Support</th>
                                                <th scope="col">Programs</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>[Pre-]Entrepreneurs</td>
                                                <td>up to KRW 100 million</td>
                                                <td rowSpan="3">
                                                    <ul className={cx("dot")}>
                                                        <li>Startup Commercialization</li>
                                                        <li>Education & Mentoring</li>
                                                        <li>MVP (Minimum Viable Product) Production & Evaluation</li>
                                                        <li>Global Market Expansion,etc.</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Representatives of startups established less than 3 years ago</td>
                                                <td className={cx("bd_r")}>up to KRW 100 million</td>
                                            </tr>
                                            <tr>
                                                <td>Representatives of startups established more than 3 years and less than 7 years ago</td>
                                                <td className={cx("bd_r")}>up to KRW 300 million</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <ul>
                                    <li>Recruitment period: February of every year</li>
                                </ul>

                                <span>
                                    ※ <strong>"Startup-Centric University"</strong> is a program that selects universities with excellent startup infrastructure and collaborative networks to support the development of the local startup ecosystem and commercialization of university startups
                                </span>
                            </div>
                        </div>

                        <div className={cx("academic_cont", "half")}>
                            <div className={cx("cont_left")}>
                                <h3>Comprehensive CampusTown</h3>
                            </div>

                            <div className={cx("cont_right")}>
                                <ul>
                                    <li>
                                        A  business launched by Seoul Metropolitan City to develop mutual growth of youth, universities, local communities, and create future values for joint university-regional festivals, specialized startup incubation programs, and local community through the cooperation between universities and neighborhoods <a href="https://campustown.seoul.go.kr/site/eng/home" style={{textDecoration: "underline"}}>more</a>
                                    </li>
                                    <li>Type of support: facilities and spaces for startups, Commercialization funds(up to KRW 30 million)</li>
                                    <li>Eligibility : [Pre-]Entrepreneurs or Representatives of startups established less than 7 years ago in Seoul,</li>
                                    <li>Recruitment period: February of every year</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Academic5;