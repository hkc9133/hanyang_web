import React from 'react';

import Link from 'next/link';
import styles from '../../public/assets/styles/en/en_sub.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";
import Head from "next/head";

const cx = classnames.bind(styles);

const About = () => {
    return (
        <>
            <Head>
                <title>HANYANG STARTUP - About</title>
            </Head>
            <PageNavigation/>
            <section className={cx("container")}>
                <div className={cx("sub_container", "about")}>
                    <h1 className={cx("sub_top_title")}>About</h1>
                    <p className={cx("sub_top_txt")}>&nbsp;</p>

                    <div className={cx("about_cont", "about_banner")}>
                        <div className={cx("img_area")}>
                            <img src="/assets/image/about_img.jpg" alt="" />
                        </div>
                        <p>
                            The Hanyang Institute for Entrepreneurship was established to imbue prospective entrepreneurs with sound entrepreneurship principles, pass on the practical wisdom of alumni, and cultivate prepared technological entrepreneurs.
                        </p>
                        <ul className={cx("btn_area")}>
                            <li>
                                <Link href="/introduce/introduce"><a>
                                Greetings from the Director<br />(Prof. Sang-Gyung Jun)
                                </a></Link>
                            </li>
                            <li>
                                <Link href="/introduce/introduce"><a>
                                Our History
                                </a></Link>
                            </li>
                        </ul>
                    </div>

                    <div className={cx("about_cont", "about_list")}>
                        <h3>Vision</h3>
                        <ul className={cx("list_area")}>
                            <li>Produce 30,000 startup companies</li>
                            <li>Achieve 30% of GDP for alumni company sales</li>
                        </ul>
                    </div>

                    <div className={cx("about_cont", "about_list")}>
                        <h3>Mission</h3>
                        <ul className={cx("list_area")}>
                            <li>Foster prepared technological startup entrepreneurs by providing systematic education to achieve the skills, mind-set, and fundamental business knowledge that startup entrepreneurs need to succeed.</li>
                            <li>Improve the success rate of startups and cultivate sustainable management ability through field-centered practical education and training rather than merely delivering knowledge</li>
                            <li>Discover excellent prospective entrepreneurs to support startups and foster them systematically through connections with our alumni infrastructure</li>
                            <li>Ensure inheritance and development of the pragmatic learning atmosphere and founding philosophy of Hanyang University that has played a pivotal role in national development</li>
                            <li>Create jobs and contribute to the structural advancement of the industry by reviving entrepreneurship and imbuing a startup mind-set</li>
                        </ul>
                    </div>

                    {/*<div className={cx("about_cont", "about_list")}>*/}
                    {/*    <h3>Organization</h3>*/}
                    {/*    <p>The start-up support group establishes start-up strategies for universities, and conducts start-up education, start-up training, networking, start-up childcare and investment, entrepreneurship research, and international cooperation for students, graduates, teachers, and the general public.<br />*/}
                    {/*    The start-up support group consists of the head of the start-up support group, vice-director, global entrepreneur center, student start-up child care center, global start-up support center, and one-stop start-up counseling center. The total number of people in the organization is 00, with 2 full-time professors, 2 industry-academic cooperation professors, 00 concurrent professors, and 00 general staff.</p>*/}
                    {/*    <div className={cx("img_area")}>*/}
                    {/*        <img src="/assets/image/organization_en.jpg" alt="" />*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className={cx("about_cont", "about_list")}>
                        <h3>창업지원체계 for Startups</h3>
                        <p>The Hanyang Institute for Entrepreneurship has built a support system for the entire startup cycle from the preparation stage, implementation, to the EXIT stage.<br />
                        The Hanyang Institute for Entrepreneurship has built a support system for the entire startup cycle from the preparation stage, implementation, to the EXIT stage.</p>
                        <div className={cx("img_area")}>
                            <img src="/assets/image/about_startup.jpg" alt="" />
                        </div>
                    </div>

                    <div className={cx("about_cont", "about_list")}>
                        <h3>How to Start a Startup at Hanyang University?<br />A Complete Guide</h3>
                        <p>How to start a startup at Hanyang University?<br />
                        Introduces start-up lectures, programs, and infrastructure from conception of start-up ideas to prototype production, start-up execution, investment attraction, and successful start-up.</p>
                        <div className={cx("img_area")}>
                            <img src="/assets/image/startup_procedure_en.jpg" alt="" />
                        </div>
                        <ul className={cx("btn_area")}>
                            <li>
                                <Link href="#"><a download>
                                    Student Start-up Guide (PDF)
                                </a></Link>
                            </li>
                            <li>
                                <Link href="#"><a download>
                                    Lab Start-up Guide (PDF)
                                </a></Link>
                            </li>
                        </ul>
                    </div>

                    <div className={cx("about_cont", "about_list")}>
                        <h3>Start-up-friendly System</h3>
                        <p>The start-up-friendly academic system refers to a system in which students with start-up ideas can achieve their learning goals through start-up preparation activities or start-ups to minimize academic interruption by solving difficulties caused by start-ups. In addition, in order to revitalize teachers' start-ups, we operate a start-up-focused professor (industry-academic cooperation-focused professor), a teacher's leave-of-work system, a teacher's achievement evaluation, and an industry-academic start-up training system.</p>
                        <div className={cx("tb_area")}>
                            <h3><strong>/</strong> Start-up-friendly bachelor's degree, type of personnel system <strong>/</strong></h3>
                            <table>
                                <colgroup>
                                    <col style={{width: "15%"}} />
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>Sortation</th>
                                        <th>Relevant System</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Bachelor's System</td>
                                        <td>Start-up leave system, Start-up practice, Start-up field practice, Start-up credit exchange system, Start-up convergence major,<br />4th industrial revolution start-up micro major, Start-up scholarship, Start-up alternative thesis issue, etc.</td>
                                    </tr>
                                    <tr>
                                        <td>Personnel System</td>
                                        <td>Entrepreneurship-focused professor, Start-up leave/concurrent position system,<br />Reflection of start-up performance in teacher performance evaluation, Industry-university start-up training system, etc.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className={cx("infrastructure_btm", "about_cont")}>
                        <h3>Start-up Infrastructure</h3>
                        <div className={"clfx"}>
                            <div className={cx("left_area")}>
                                <h2>COMAX StartupTown</h2>
                                <ul>
                                    <li>
                                        <img src="/assets/image/infra_town_1.jpg" alt="infra_town_1"/>
                                    </li>
                                    <li>
                                        <img src="/assets/image/infra_town_2.jpg" alt="infra_town_2"/>
                                    </li>
                                </ul>
                                <span className={cx("txt")}>Exclusive space for student entrepreneurs and start-up clubs (area 468.6㎡)</span>
                            </div>
                            <div className={cx("right_area")}>
                                <h2>247 Startup DOM</h2>
                                <ul>
                                    <li>
                                        <img src="/assets/image/infra_dom_1.jpg" alt="infra_dom_1"/>
                                    </li>
                                    <li>
                                        <img src="/assets/image/infra_dom_2.jpg" alt="infra_dom_2"/>
                                    </li>
                                </ul>
                                <span className={cx("txt")}>Co-working space, dormitory (11 rooms), meeting room, etc. (area 637㎡)</span>
                            </div>
                        </div>

                        <div className={"clfx"}>
                            <div className={cx("left_area")}>
                                <h2>Huons FABLAB</h2>
                                <ul>
                                    <li>
                                        <img src="/assets/image/infra_lab_1.jpg" alt="infra_lab_1"/>
                                    </li>
                                    <li>
                                        <img src="/assets/image/infra_lab_2.jpg" alt="infra_lab_2"/>
                                    </li>
                                </ul>
                                <span className={cx("txt")}>Prototype realization space for student entrepreneurs (area 941㎡)</span>
                            </div>
                            <div className={cx("right_area")}>
                                <h2>Student Startup Incubation Center</h2>
                                <ul>
                                    <li>
                                        <img src="/assets/image/infra_center_1.jpg" alt="infra_center_1"/>
                                    </li>
                                    <li>
                                        <img src="/assets/image/infra_center_2.jpg" alt="infra_center_2"/>
                                    </li>
                                </ul>
                                <span className={cx("txt")}>Dedicated space for incubating student entrepreneurs (area 1,459㎡)</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default About;
