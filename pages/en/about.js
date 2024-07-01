import React from 'react';

import Link from 'next/link';
import styles from '../../public/assets/styles/en/en_sub.module.css';
import classnames from "classnames/bind"
import PageNavigationEng from "../../component/layout/PageNavigation_eng";
import Head from "next/head";

const cx = classnames.bind(styles);

const About = () => {
    return (
        <>
            <Head>
                <title>HANYANG STARTUP - About</title>
            </Head>

            <PageNavigationEng title={"About"} dep={"dep1"} />

            <section>
                <div className={cx("sub_container", "about")}>
                    <h1 className={cx("sub_top_title")}>Introduction</h1>
                    <p className={cx("sub_top_txt")}>&nbsp;</p>
                </div>
                <div className={cx("about_cont_wrap")}>
                    <div className={cx("container")}>
                        <div className={cx("about_cont", "about_intro")}>
                            <div className={cx("ceo_img")}>
                                <img src="/assets/image/ceo.jpg" alt="ceo"/>
                            </div>
                            <div className={cx("ceo_com")}>
                                <p>
                                    For young people living in an era of 120-year life expectancy, entrepreneurship education is an essential life skill to prepare for a new future. It is also an opportunity for students to design a life of challenge and purpose, pursue their set goals, and experience immersion in meaningful work.
                                </p>
                                <p>
                                    Fostering the highest number of startups, Hanyang University has played a pivotal role in developing Korea’s economy by nurturing talent. The is the rst among Korean universities in 2009 to meet the demands of a new era through creation and startups. Our role builds on Hanyang’s inheritance and tradition as a “CEO training school.”
                                </p>
                                <p>
                                    By providing education on entrepreneurial fundamentals and eld-centered practical training, our center strives to increase the success rate of startups. In addition, we prepare technological startup entrepreneurs by passing on the wisdom and practical experiences of successful alumni.
                                </p>
                                <p>
                                    Since the establishment of the, Hanyang University has been the role model for domestic universities’ startup education and a leader in youth startup culture. Recently, it has strengthened its status as the “CEO Training School” by being selected as the top university for startup education, the best university producing venture entrepreneurs and student entrepreneurs. We have built an education program for startup training, networking, startup incubation, and global expansion that provides 40 startup lectures a year, serving more than 8,500 students every year. Moreover, by opening the Department of Entrepreneurship in undergraduate school and general graduate school, it has organized a customized and systematic education system for startups. In addition, global startup centers have been opened in Silicon Valley, New York, USA; Shanghai, China; and Hanoi, Vietnam, among other locations. These supporting centers are uniquely situated to actively support the overseas market expansion of startup companies.
                                </p>
                                <p>
                                    In the 21st century, where there is no lifetime workplace or job, everyone will face an entrepreneurial opportunity more than once. While a single idea or technology can start a business, systematic education and training are the best path to achieve sustainable success. One must draw on knowledge from various elds and acquire skills through practical experience.
                                </p>
                                <p>
                                    Through the, we hope that more students can acquire the wisdom of living in an era of 120-year life expectancy, enabling them to grow as entrepreneurs and become the leaders of global development. Thank you very much.
                                </p>

                                <div className={cx("ceo_sign")}>
                                    <img src="/assets/image/ceo_sign_en.png" alt="ceo sign" />
                                    <h3>Chang-Wan RYOO</h3>
                                    <p>Director of the Hanyang Institute for Entrepreneurship</p>
                                    <p>Professor, Department of Interdisciplinary Industrial Studies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("about_cont_wrap")}>
                    <div className={cx("container")}>
                        <div className={cx("title_wrap")}>
                            <h3>Vision</h3>
                        </div>

                        <div className={cx("about_cont", "about_list")}>
                            <ul className={cx("list_area")}>
                                <li>Produce 30,000 startup companies</li>
                                <li>Achieve 30% of GDP for alumni company sales</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={cx("about_cont_wrap", "bg_gray")}>
                    <div className={cx("container")}>
                        <div className={cx("title_wrap")}>
                            <h3>Mission</h3>
                        </div>

                        <div className={cx("about_cont", "about_mission")}>
                            <ul>
                                <li>
                                    <img src="/assets/image/mission_icon_1.jpg" alt="" />
                                    <p>
                                        Foster prepared technological startup entrepreneurs by providing them with systematic education to achieve the skills, mindset, and fundamental business knowledge.
                                    </p>
                                </li>
                                <li>
                                    <img src="/assets/image/mission_icon_2.jpg" alt=""/>
                                    <p>
                                        Improve the success rate of startups and cultivate sustainable management ability through field-centered practical education and training rather than merely delivering knowledge.
                                    </p>
                                </li>
                                <li>
                                    <img src="/assets/image/mission_icon_3.jpg" alt=""/>
                                    <p>
                                        Discover excellent prospective entrepreneurs to support startups and foster them systematically through connections with our alumni network.
                                    </p>
                                </li>
                                <li>
                                    <img src="/assets/image/mission_icon_4.jpg" alt=""/>
                                    <p>
                                        Ensure inheritance and development of the pragmatic learning atmosphere and founding philosophy of Hanyang University that has played a pivotal role in national development.
                                    </p>
                                </li>
                                <li>
                                    <img src="/assets/image/mission_icon_5.jpg" alt=""/>
                                    <p>
                                        Create jobs and contribute to the structural advancement of the industry by reviving entrepreneurship and imbuing a startup mind-set.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={cx("about_cont_wrap")}>
                    <div className={cx("container")}>
                        <div className={cx("title_wrap")}>
                            <h3>Startup Support System</h3>
                        </div>
                        
                        <div className={cx("about_cont")}>
                            <div className={cx("about_system_img")}>
                                <img src="/assets/image/about_system.png" alt="about system process" />
                            </div>
                        </div>

                        <div className={cx("about_cont")}>
                            <h5>Startup Preparation Stage</h5>

                            <div className={cx("tb_style_1")}>
                                <table>
                                    <colgroup>
                                        <col style={{width: "15%"}} />
                                        <col style={{width: "15%"}} />
                                        <col style={{width: "70%"}} />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th rowSpan="2">Basic Education</th>
                                            <td className={cx("txt_c")}>Startup Lectures</td>
                                            <td>
                                                Entrepreneurship major (Undergraduate), Division of entrepreneurship (Graduate), Startup lectures
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx("txt_c")}>System</td>
                                            <td>
                                                Startup-friendly education system (Credits for startup internships, Credits for starting business)
                                            </td>
                                        </tr>
                                        <tr>
                                            <th rowSpan="2">Idea Creation</th>
                                            <td className={cx("txt_c")}>Program</td>
                                            <td>
                                                Startup competition, Tech startup founder fostering program, Startup camp, Startup festival, Global entrepreneur cultivation program
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx("txt_c")}>System</td>
                                            <td>
                                                Tech startup scouter, Global startup internship
                                            </td>
                                        </tr>
                                        <tr>
                                            <th rowSpan="2">Business Verifi-cation</th>
                                            <td className={cx("txt_c")}>Program</td>
                                            <td>
                                                Startup competition, Tech startup founder fostering program, Startup camp, Startup festival, Global entrepreneur cultivation program
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx("txt_c")}>System</td>
                                            <td>
                                                Tech startup scouter, Global startup internship
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className={cx("about_cont")}>
                            <h5>Idea Execution Stage</h5>

                            <div className={cx("tb_style_1")}>
                                <table>
                                    <colgroup>
                                        <col style={{width: "15%"}} />
                                        <col style={{width: "15%"}} />
                                        <col style={{width: "70%"}} />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th rowSpan="3">Early Stage</th>
                                            <td className={cx("txt_c")}>Space support</td>
                                            <td>
                                                Center for Business Incubation, COMMAX Startup Town, 247 Startup Dorm
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx("txt_c")}>Program</td>
                                            <td>
                                                Hanyang Startup Academy, Hanyang Startup Forum, Faculty Startup Forum, Business Hub Day, One-Stop Mentoring Platform
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx("txt_c")}>System</td>
                                            <td>
                                                Leave of absence system for startup
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Funding</th>
                                            <td className={cx("txt_c")}>Funding support</td>
                                            <td>
                                                Hanyang Angel Fund, Hanyang Startup Support Fund, TIPS, University Startup Fund, Global startup fund, Kibo Venture CAMP, Startup NEST
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className={cx("about_cont")}>
                            <h5>Startup Growth Stage</h5>

                            <div className={cx("tb_style_1")}>
                                <table>
                                    <colgroup>
                                        <col style={{width: "15%"}} />
                                        <col style={{width: "15%"}} />
                                        <col style={{width: "70%"}} />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th>Growth Support</th>
                                            <td className={cx("txt_c")}>Program</td>
                                            <td>
                                                Open Innovation, Startup growth promotion program, Scale-up Investment
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Global Expansion</th>
                                            <td className={cx("txt_c")}>Infrastructure support</td>
                                            <td>
                                                Global startup centers <br/>(Silicon Valley, Seattle, Shanghai)
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className={cx("about_cont")}>
                            <h5>EXIT</h5>

                            <div className={cx("tb_style_1")}>
                                <table>
                                    <colgroup>
                                        <col style={{width: "15%"}} />
                                        <col style={{width: "15%"}} />
                                        <col style={{width: "70%"}} />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th>IPO / M&A</th>
                                            <td className={cx("txt_c")}>Program</td>
                                            <td>
                                                Provide customized consulting services on startup IPOs and M&As. Support the growth of potential startups of university Tech  Holding Company.
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

export default About;
