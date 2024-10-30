import React from 'react';

import Link from 'next/link';
import styles from '../../public/assets/styles/en/en_sub.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";
import Head from "next/head";
import PageNavigationEng from "../../component/layout/PageNavigation_eng";

const cx = classnames.bind(styles);

const Academic_1 = () => {
    return (
        <>
            <Head>
                <title>HANYANG STARTUP - Academic & Programs</title>
            </Head>

            <PageNavigationEng title={"Academic & Programs"} dep={"dep2"} />

            <section>
                <div className={cx("sub_container", "academic")}>
                    <h1 className={cx("sub_top_title")}>Course & Degrees</h1>
                    <p className={cx("sub_top_txt")}>&nbsp;</p>
                </div>

                <div className={cx("academic_cont_wrap")}>
                    <div className={cx("container")}>
                        <div className={cx("title_wrap")}>
                            <h3>Course & Degrees</h3>
                            <p>
                                We offer our undergraduate and graduate students a systematic curriculum on interdisciplinary entrepreneurship aimed to identify and train the next-generation talents.
                            </p>
                        </div>

                        <div className={cx("academic_cont")}>
                            <div className={cx("tb_style_1")}>
                                <table>
                                    <colgroup>
                                        <col style={{width: "20%"}} />
                                        <col style={{width: "40%"}} />
                                        <col style={{width: "40%"}} />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Undergraduate <br/>(Major in Entrepreneurship)</th>
                                            <th scope="col">Graduate <br/>(Master degree of Entrepreneurship)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Degree</th>
                                            <td>Bachelor of Science (Second Major)</td>
                                            <td>Master of Entrepreneurship</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Application Requirements</th>
                                            <td>Students who completed 24 credit hours</td>
                                            <td>Students who holds bachelor’s degree or higher</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Application Requirements</th>
                                            <td colSpan="2">
                                                <ul className={cx("process")}>
                                                    <li>Application</li>
                                                    <li>Application Review</li>
                                                    <li>Interview</li>
                                                    <li>Admissions Notification</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Benefits</th>
                                            <td>
                                                <ul className={cx("dot")}>
                                                    <li>Provides opportunities to participate in Global Programs</li>
                                                    <li>Supports startup activity expenses for Class students</li>
                                                    <li>Supports prototyping, patent application, incorporation fees</li>
                                                    <li>Provides free co-working spaces for students</li>
                                                </ul>
                                            </td>
                                            <td>
                                                <ul className={cx("dot")}>
                                                    <li>Scholarship for freshmen <br/>(Partial scholarship)</li>
                                                    <li>Financial support for research activities</li>
                                                    <li>Supports expenses for commercializing startup items</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Academic_1;