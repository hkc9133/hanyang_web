import React from 'react';

import Link from 'next/link';
import styles from '../../public/assets/styles/en/en_sub.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";
import Head from "next/head";

const cx = classnames.bind(styles);

const Academic = () => {
    return (
        <>
            <Head>
                <title>HANYANG STARTUP - Academic</title>
            </Head>
            <PageNavigation/>
            <section className={cx("container")}>
                <div className={cx("sub_container", "academic")}>
                    <h1 className={cx("sub_top_title")}>Academics & Programs</h1>
                    <p className={cx("sub_top_txt")}>&nbsp;</p>

                    <div className={cx("tb_area")}>
                        <table>
                            <colgroup>
                                <col style={{width: "15%"}} />
                                <col style={{width: "28.333%"}} />
                                <col style={{width: "28.333%"}} />
                                <col style={{width: "28.333%"}} />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td rowSpan="2">All</td>
                                    <td>Undergraduate Courses</td>
                                    <td>Graduates Courses</td>
                                    <td>P1: Education</td>
                                </tr>
                                <tr>
                                    <td>P2: Training</td>
                                    <td>P3: Networking</td>
                                    <td>P4: Incubating & Investment</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className={cx("gray_bg")}>
                    <div className={cx("academic_cont")}>
                        <h1>ACADEMIC DIRECTORY</h1>
                        <p>To nurture creative convergence talent, we are operating a systematic start-up education curriculum for undergraduate and graduate students.</p>
                    </div>

                    <div className={cx("academic_cont")}>
                        <h1>Undergraduate Courses</h1>
                        <div className={cx("txt_style_1")}>
                            <div className={cx("left_title")}>
                                <h3>Startup Lectures</h3>
                            </div>
                            <div className={cx("txtArea")}>
                                <h5>Running 00 Entrepreneurship Courses for Undergraduate Students</h5>
                                <p>- We operate a systematic start-up education curriculum to foster creative convergence talents 
                                with 00 entrepreneurship and entrepreneurship for undergraduate students. Students who have not 
                                applied for the start-up convergence major can also take classes in liberal arts.</p>
                                <Link href=""><a>View Subjects</a></Link>
                            </div>
                        </div>
                        <div className={cx("txt_style_1")}>
                            <div className={cx("left_title")}>
                                <h3>Major in Entrepreneurship</h3>
                            </div>
                            <div className={cx("txtArea")}>
                                <h5>Objective: To foster talented individuals of creative convergence and expertise by integrating the special-ization of a major with the curriculum of a startup education</h5>
                                <h5>Degree awarded: Bachelor of Science Credits</h5>
                                <h5>Required: 36 credits of entrepreneurship lectures including compulsory major course 21 credits.</h5>
                                <p>- For students who signed up before 2016, 39 credits are required.</p>
                                <h5>Global startup CEO course: A minor course for Chinese students enrolled through Red-Lion global CEO admission, which is expected to boost global startups through the synergy of Korean students and Chinese students.</h5>
                            </div>
                        </div>
                        <div className={cx("txt_style_1")}>
                            <div className={cx("left_title")}>
                                <h3>4th Industrial Revolution<br />Startup Micro Major</h3>
                            </div>
                            <div className={cx("txtArea")}>
                                <h5>Start-up micro major of the 4th Industrial Revolution to cultivate creative convergence talents who can combine capabilities in the era of the 4th Industrial Revolution such as AI and big data and lead key technologies in the future industry.</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx("academic_cont")}>
                    <h1>Graduate Courses</h1>
                    <div className={cx("txt_style_1")}>
                        <div className={cx("left_title")}>
                            <h3>Department of<br />Entrepreneurship</h3>
                        </div>
                        <div className={cx("txtArea")}>
                            <h5>Objective: To produce practical entrepreneurs and foster experts in the venture startup field through systematic and professional technological startup education</h5>
                            <h5>Eligibility: (Prospective) entrepreneurs preparing for startups and domestic and overseas applicants aiming to become startup experts with a four-year undergraduate degree or higher</h5>
                            <h5>Degree awarded: Master of Entrepreneurship</h5>
                            <h5>Recruitment period: May and October of every year</h5>
                            <h5>Advantages</h5>
                            <p>- Teaching staff are CEOs of medium-sized companies listed on KOSDAQ and Ph.D. holders in entrepreneurship</p>
                            <p>- Scholarship for excellent students and research expenses support</p>
                            <p>- The curriculum consists of actual startup track / Startup research (education) track</p>
                            <p>- Supports actual startup founders in connection with the Startup Support Foundation programs of Hanyang University</p>
                        </div>
                    </div>
                    <div className={cx("txt_style_1")}>
                        <div className={cx("left_title")}>
                            <h3>Startup Lectures</h3>
                        </div>
                        <div className={cx("txtArea")}>
                            <h5>Entrepreneurial competency development: Understanding venture start-ups, Data analysis methodologies, Entrepreneurship challenges, Leadership and communication, and Social entrepreneurship</h5>
                            <h5>Capture business opportunities and establish business plans: Global start-up trends, Start-up opportunities, Business model development and evaluation, and New product development theory</h5>
                            <h5>Startup business management: Special discussion on startup business management, Startup marketing</h5>
                            <h5>Growth and Recovery: Startups and Growth Strategies, Fundraising and Investment Attraction</h5>
                            <h5>Practical Startup: Design Thinking and Lean Startup, Startup Internship 1,2</h5>
                            <h5>Startup Research: Startup Convergence Research Seminar, Startup Policy Seminar, Research Methodology, Master's Thesis Research</h5>
                            <Link href=""><a>View Subjects</a></Link>
                        </div>
                    </div>
                </div>

                <div className={cx("gray_bg")}>
                    <div className={cx("academic_cont")}>
                        <h1>PROGRAM DIRECTORY</h1>
                        <p>In order to increase the success rate of start-ups and cultivate sustainable management capabilities through field-oriented practical education and training, we are operating a number of non-examination start-up programs.</p>
                    </div>

                    <div className={cx("academic_cont")}>
                        <h1>P1: Education</h1>
                        <div className={cx("txt_style_1")}>
                            <div className={cx("left_title")}>
                                <h3>Startup Lectures</h3>
                            </div>
                            <div className={cx("txtArea")}>
                                <h5>Objective: To support a successful startup by educating prospective tech startup founders about basic management capacity as well as startup practice</h5>
                                <h5>Details: Exploration of ideas, Business model, Management, Marketing, Fund-raising, Investment attraction, etc.</h5>
                                <h5>Eligibility: Enrolled students, students on a leave of absence and alumni of Hanyang University, Prospective entrepreneurs, and Entrepreneurs of early-stage startup</h5>
                                <h5>Educational benefits</h5>
                                <p>- Issues certificates with the name of the President of Hanyang University</p>
                                <p>- Provides opportunities to join the networking of the Hanyang Startup Academy Alumni</p>
                                <p>- Connects excellent entrepreneurs with investment funds and startup support programs from Hanyang University</p>
                                <p>- Provides mentoring services when needed on patent, laws, accounting, marketing, opportunities for new markets, etc.</p>
                            </div>
                        </div>
                        <div className={cx("txt_style_1")}>
                            <div className={cx("left_title")}>
                                <h3>Social Venture A to Z</h3>
                            </div>
                            <div className={cx("txtArea")}>
                                <h5>A curriculum consisting of specialized education for social venture startups, expert mentoring, and social venture CEO lectures, from startup preparation to startup management.</h5>
                                <h5>Recruitment target: (preliminary) entrepreneurs living in Seoul and students taking leave of absence from universities in Seoul</h5>
                                <h5>Details</h5>
                                <p>- Social Venture Specialized Training (Online)</p>
                                <p>- Expert Mentoring (2 times per team, 6H in total)</p>
                                <p>- Intensive training on the materialization of business models and preparation of business plans</p>
                                <p>- Social Venture CEO Lecture</p>
                                <p>- Selection of outstanding ideas (Given the Seoul Mayor's Award)</p>
                            </div>
                        </div>
                        <div className={cx("txt_style_1")}>
                            <div className={cx("left_title")}>
                                <h3>Lean Startup</h3>
                            </div>
                            <div className={cx("txtArea")}>
                                <h5>Select (preliminary) entrepreneurs with innovative technology start-up ideas to develop ideas (21H) → Establish a business model (20H) → Provide systematic training and mentoring through lean start-up (35H) to help shape business models and establish business plans</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx("academic_cont")}>
                    <h1>P2: Training</h1>
                    <div className={cx("txt_style_1")}>
                        <div className={cx("left_title")}>
                            <h3>Startup Competition</h3>
                        </div>
                        <div className={cx("txtArea")}>
                            <h5>Lion Cup Competition</h5>
                            <p>Startup competition to select the most innovative item from all the winners of the year’s startup competitions</p>
                            <h5>Venture Startup Competition</h5>
                            <p>Nationwide startup competition to discover and foster undergraduate and graduate students’ creative, innovative business models</p>
                            <h5>Campus CEO Startup competition</h5>
                            <p>On-campus startup competition where startup lecture students present their novel business ideas during the semester</p>
                            <h5>Startup competition in connection with businesses</h5>
                            <p>Business-associated startup competition to explore excellent and innovative ideas from the corresponding business sectors and produce new business models for the companies</p>
                            <h5>Global startup competition</h5>
                            <p>Startup competition to explore global startup items and strengthen entrepreneurs’ capacity and networking in cooperation with overseas universities and institutions</p>
                        </div>
                    </div>
                    <div className={cx("txt_style_1")}>
                        <div className={cx("left_title")}>
                            <h3>Startup Camp</h3>
                        </div>
                        <div className={cx("txtArea")}>
                            <h5>I am the CEO</h5>
                            <p>Actual startup camp to verify business items such as intensive mentoring of business plans and development of business models</p>
                        </div>
                    </div>
                    <div className={cx("txt_style_1")}>
                        <div className={cx("left_title")}>
                            <h3>Startup Internship</h3>
                        </div>
                        <div className={cx("txtArea")}>
                            <h5>Domestic Startup Internship</h5>
                            <p>Experience startup practice in domestic startup companies by utilizing the knowledge accumulated through startup education</p>
                            <h5>Global Startup Internship</h5>
                            <p>Experience the global startup process by performing missions such as local market research and discovering business opportunities with foreign entrepreneurs</p>
                        </div>
                    </div>
                    <div className={cx("txt_style_1")}>
                        <div className={cx("left_title")}>
                            <h3>Global Challenge</h3>
                        </div>
                        <div className={cx("txtArea")}>
                            <h5>Hanyang Startup Global Challenge</h5>
                            <p>- Runs "Hanyang Startup booth" at global-scale exhibitions such as CES and MWC</p>
                            <p>- Exhibits innovative startup products and advises overseas buyers regarding export</p>
                            <h5>Global Accelerating Program</h5>
                            <p>- Provides mentoring services and feasibility analysis in connection with overseas accelerators</p>
                            <p>- Provides excellent startups with opportunities to participate in business meetings and accelerating programs overseas</p>
                        </div>
                    </div>
                    <div className={cx("txt_style_1")}>
                        <div className={cx("left_title")}>
                            <h3>Startup Festival</h3>
                        </div>
                        <div className={cx("txtArea")}>
                            <h5>Campus Town Festival</h5>
                            <p>A startup and culture festival for local residents, youths, regional economy–activated ICT, and social venture companies</p>
                            <h5>Lab Startup Festival</h5>
                            <p>Based on the results of Lab 2 Market item verification and customer exploration program for Hanyang University laboratories, IR presentation is conducted on final performance, and through this, start-up capability by laboratory is strengthened.</p>
                        </div>
                    </div>
                </div>

                <div className={cx("gray_bg")}>
                    <div className={cx("academic_cont")}>
                        <h1>P3: Networking</h1>
                        <div className={cx("txt_style_1")}>
                            <div className={cx("left_title")}>
                                <h3>Networking</h3>
                            </div>
                            <div className={cx("txtArea")}>
                                <h5>Startup Forum</h5>
                                <p>An issue-focused seminar participated by senior enterprisers, professors, and prospective entrepreneurs to provide a place of exchange and knowledge sharing to promote cooperation among companies</p>
                                <h5>Global Startup Mentor Group</h5>
                                <p>- (Step 1) Lunch mentoring: One to many mentoring to find out mentoring topics beforehand</p>
                                <p>- (Step 2) One-stop counseling for startup: One-on-one mentoring with the teaching staff of the Hanyang Institute for Entrepreneurship about the development of business models and the process of commercialization</p>
                                <p>- (Step 3) Mentors-on-call: Online/off-line one-on-one mentoring with specialists regarding technical advice, laws, etc.</p>
                                <h5>Teacher Startup Forum</h5>
                                <p>A place for information sharing and communication between professors and researchers, start-up experts, and CEOs of successful teachers' start-ups for the promotion of technology start-ups</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx("academic_cont")}>
                    <h1>P4: Incubating &<br />Investment</h1>
                    <div className={cx("txt_style_1")}>
                        <div className={cx("left_title")}>
                            <h3>Incubating</h3>
                        </div>
                        <div className={cx("txtArea")}>
                            <h5>Startup Club</h5>
                            <p>- A team of three students enrolled or on a leave of absence in Hanyang University who have novel ideas and are willing to establish a startup</p>
                            <p>- Recruits members twice a year (first/second half)</p>
                            <p>- Supports startup activities expenses and provides education, exclusive mentoring service, and office space</p>
                            <h5>247 Startup Dorm</h5>
                            <p>- Dormitory-type startup space for students dreaming of a startup available 24/7</p>
                            <p>- Discovers and nurtures innovative entrepreneurs through special education and exclusive mentoring</p>
                            <h5>COMMAX Startup Town</h5>
                            <p>- Open-type creative space for student entrepreneurs, a two-story building with a total area of 302.53m2</p>
                            <p>- Consists of open co-working space, office area, one-stop counseling office, and resting space</p>
                        </div>
                    </div>
                    <div className={cx("txt_style_1")}>
                        <div className={cx("left_title")}>
                            <h3>Investment</h3>
                        </div>
                        <div className={cx("txtArea")}>
                            <h5>Hanyang Angel Club</h5>
                            <p>University-based angel investment club organized by Hanyang University CEOs and companies listed on and exited KOSDAQ to discover venture companies and startups with promising future growth</p>
                            <h5>HYU Holdings</h5>
                            <p>Supports innovative startup investment in connection with HYU Holdings Co., Ltd., which possesses TIPS, University startup funds, and Angel Fund of Funds</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Academic;