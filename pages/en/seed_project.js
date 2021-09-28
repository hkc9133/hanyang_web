import React, {useEffect, useState} from 'react';

import Link from 'next/link';
import styles from '../../public/assets/styles/en/en_sub.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";
import Head from "next/head";

const cx = classnames.bind(styles);

const SeedProject = () => {

    const [tabNum, setTabNum] = useState(0)

    useEffect(() => {

    }, [tabNum])

    return (
        <>
            <Head>
                <title>HANYANG STARTUP - SeedProject</title>
            </Head>
            <PageNavigation/>
            <section className={cx("container")}>
                <div className={cx("sub_container")}>
                    <h1 className={cx("sub_top_title")}>Seed Project</h1>
                    <p className={cx("sub_top_txt")}>&nbsp;</p>
                </div>

                <div className={cx("sub_cont", "seed_cont")}>
                    <div className={cx("tab_style_1", "tabTitle")}>
                        <ul>
                            <li className={cx({on: tabNum == 0})} onClick={() => {
                                setTabNum(0)
                            }}>
                                <button><span>Campus CEO Fostering Project</span></button>
                            </li>
                            <li className={cx({on: tabNum == 1})} onClick={() => {
                                setTabNum(1)
                            }}>
                                <button><span>Practical Start-up Education</span></button>
                            </li>
                            <li className={cx({on: tabNum == 2})} onClick={() => {
                                setTabNum(2)
                            }}>
                                <button><span>Preliminary Start-up Package</span></button>
                            </li>
                            <li className={cx({on: tabNum == 3})} onClick={() => {
                                setTabNum(3)
                            }}>
                                <button><span>Lab-specialized Start-up<br />Leading University</span></button>
                            </li>
                            <li className={cx({on: tabNum == 4})} onClick={() => {
                                setTabNum(4)
                            }}>
                                <button><span>Initial Startup Package</span></button>
                            </li>
                            <li className={cx({on: tabNum == 5})} onClick={() => {
                                setTabNum(5)
                            }}>
                                <button><span>Start-up Leap Package</span></button>
                            </li>
                            <li className={cx({on: tabNum == 6})} onClick={() => {
                                setTabNum(6)
                            }}>
                                <button><span>Campustown</span></button>
                            </li>
                        </ul>
                    </div>

                    <div className={cx("tabCont")}>
                        <div className={`${cx({show: tabNum == 0})} txt_style_1`}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_2")}>Campus CEO Fostering Project</h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <ul>
                                    <li>
                                        <h2 className={cx("title_style_4")}>1. Business purpose and expected effect</h2>
                                        <p>
                                        In order to promote entrepreneurship for university students in Seoul, it fosters convergent innovative talent as a university cooperation course (pop-up school) and supports the creation of jobs by strengthening human competitiveness of the Seoul industry.
                                        </p>
                                        <ul>
                                            <li>Discovering and providing various solutions for solving public, corporate, and community problems</li>
                                            <li>Convergence Talent Cultivation</li>
                                            <li>Strengthening on-site practical competency</li>
                                            <li>Entrepreneurship cultivation</li>
                                            <li>Activation of the university start-up ecosystem</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>2. Support program</h2>
                                        <p>
                                            <strong>/</strong> Operation of regular curriculum (5 subjects per semester, 10 subjects in total) <strong>/</strong>
                                        </p>
                                        <div className={cx("tb_style_1")}>
                                            <table>
                                                <colgroup>
                                                    <col style={{width: '50%'}} />
                                                    <col style={{width: '50%'}} />
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">1st semester</th>
                                                        <th scope="col">2nd semester</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Startup Basics: Social Entrepreneurship Action Learning</td>
                                                        <td>Climate Change and Impact Business</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Deepening Start-up: Startup AtoZ</td>
                                                        <td>Startup Basics: Design Thinking</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Startup Practice: Practical Startup Workshop</td>
                                                        <td>Startup Practice: Practical Startup Workshop</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Startup Basics: Understanding and Examples of Startup Entrepreneurship</td>
                                                        <td>Blockchain and Business</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Startup Talk Concert</td>
                                                        <td>Startup Talk Concert</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p>
                                            <strong>/</strong> Extracurricular course <strong>/</strong>
                                        </p>
                                        <div className={cx("tb_style_1", "tb_style_2")}>
                                            <table>
                                                <colgroup>
                                                    <col style={{width: '5%'}} />
                                                    <col style={{width: '47.5%'}} />
                                                    <col style={{width: '47.5%'}} />
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">No.</th>
                                                        <th scope="col">Program name</th>
                                                        <th scope="col">Program content</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>4th Industrial Revolution Talent Cultivation Program</td>
                                                        <td>
                                                        Understanding basic concepts of technologies related to the 4th Industrial Revolution, such as artificial intelligence and blockchain, analyzing technology trends, and discovering startup items through them.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Intellectual Property Rights and Law Special Lecture</td>
                                                        <td>
                                                        Inviting incumbent patent attorneys and lawyers to conduct special lectures on intellectual property rights and laws that must be known when starting a business
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Market Verification Program</td>
                                                        <td>Landing page creation for market research before product launch</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Special lecture by field experts</td>
                                                        <td>
                                                        Special lectures by experts to cultivate essential knowledge for each stage of start-up such as idea discovery, BM setting and advancement, technology development, and marketing
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>New Media Training Program</td>
                                                        <td>Social media channel utilization education program suitable for the new media marketing era</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td>Mentoring Program for Enhancing Startup Capabilities</td>
                                                        <td>1:1 expert mentor matching mentoring to solve problems that may be encountered in the start-up process</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>3. Introduction to the SBA Academy (https://academy.sba.kr)</h2>
                                        <p>
                                        It is an online education platform operated by the Seoul Business Promotion Agency that provides free educational contents for major technologies of the 4th Industrial Revolution and preparation for start-ups and employment.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={`${cx({show: tabNum == 1})} txt_style_1 `}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_2")}>Practical Start-up Education</h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <ul>
                                    <li>
                                        <h2 className={cx("title_style_4")}>1. Business purpose and expected effect</h2>
                                        <p>
                                        The business model is specified through training and mentoring for entrepreneurs, and the minimum requirement product (MVP) production and customer response surveys are supported to verify and supplement the business model.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>2. Support program</h2>
                                        <ul>
                                            <li>Up to 5 million won in MVP production costs (10% self-burden)</li>
                                            <li>Exemption from the first written evaluation of the 22-year preliminary start-up package</li>
                                            <li>Hanyang University investment fund connection opportunity</li>
                                            <li>Entrepreneurship cultivation</li>
                                            <li>Support for entrepreneurship mentoring</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>3. Course</h2>
                                        <div className={cx("tb_style_1", "tb_style_3")}>
                                            <table>
                                                <colgroup>
                                                    
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th scope="col" rowSpan="2">Remark</th>
                                                        <th scope="col" colSpan="4">Step 1</th>
                                                        <th scope="col" colSpan="5">Step 2</th>
                                                        <th scope="col">Step 3</th>
                                                    </tr>
                                                    <tr>
                                                        <th scope="col" colSpan="4">Basic Onlie Education</th>
                                                        <th scope="col" colSpan="5">Offline Practical Training</th>
                                                        <th scope="col">Follow up Support</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Title</td>
                                                        <td colSpan="2">Common</td>
                                                        <td colSpan="2">Special</td>
                                                        <td>Pretraining</td>
                                                        <td>MVP Dev.</td>
                                                        <td>Tarkget Market Search</td>
                                                        <td>BM Dev.</td>
                                                        <td>IR Mentoring</td>
                                                        <td>IR, Business Dev, Space</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Course Name</td>
                                                        <td>Standard</td>
                                                        <td>Flexible</td>
                                                        <td>Standard</td>
                                                        <td>Flexible</td>
                                                        <td>Standard</td>
                                                        <td colSpan="3">Flexible</td>
                                                        <td>Standard</td>
                                                        <td>Flexible</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Class</td>
                                                        <td colSpan="4">15th class  for Standard and Flexible time</td>
                                                        <td colSpan="5">10th class for  Standard, 30th calss for Flaxible</td>
                                                        <td>20th class</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <h2 className={cx("title_style_5")}>Step 1) Basic online education (30th class, 1.5 months course)</h2>
                                        <ul>
                                            <li>Support for establishing business models, such as training to cultivate basic competencies related to start-ups and specifying ideas.</li>
                                            <li>Grand Prize: Around 1,000 prospective entrepreneurs.</li>
                                        </ul>
                                        <div className={cx("tb_style_1")}>
                                            <table>
                                                <colgroup>
                                                    <col style={{width: '50%'}} />
                                                    <col style={{width: '50%'}} />
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Common</th>
                                                        <th scope="col">Special</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Mindset (entrepreneurship, start-up list, etc.)</td>
                                                        <td>Technology trends by field</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Foundation for entrepreneurship<br />(financial accounting, intellectual property rights, marketing, etc.)</td>
                                                        <td>Success factors by field</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Preparation for start-up (preparation of team building, BM, and business plan)</td>
                                                        <td>Cases of successful start-ups by field</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <h2 className={cx("title_style_5")}>Step 2) Offline Practical Training (40th class, 2 months course)</h2>
                                        <ul>
                                            <li>Support for upgrading business models through minimum requirement product production, customer and market verification, and expert mentoring.</li>
                                            <li>Target: About 10% of those who completed the first stage of education were selected through evaluation.</li>
                                        </ul>
                                        <div className={cx("tb_style_1", "tb_style_2")}>
                                            <table>
                                                <colgroup>
                                                    <col style={{width: '30%'}} />
                                                    <col style={{width: '70%'}} />
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Remark</th>
                                                        <th scope="col">Details</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>MVP Dev.</td>
                                                        <td>
                                                        Manufacturing a minimum-requirement product that implements only minimal functions to measure customer response.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Target Customer verification</td>
                                                        <td>
                                                        The target customer base collects opinions on item improvement through experience of minimum requirement products.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Mentoring to attract investment</td>
                                                        <td>Preparation of an investment attraction report for an advanced business model and simulation investment attraction IR</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={`${cx({show: tabNum == 2})} txt_style_1 `}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_2")}>Preliminary Start-up Package</h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <ul>
                                    <li>
                                        <h2 className={cx("title_style_4")}>1. Business purpose and expected effect</h2>
                                        <p>
                                        Support for commercialization funds, start-up education, and mentoring for smooth start-up commercialization of prospective entrepreneurs with innovative technology start-up materials.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>2. Notice Period</h2>
                                        <p>
                                        Recruitment from the first half of the year (April to June) through the K-startup (www.k-startup.go.kr) site.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>3. Remark</h2>
                                        <div className={cx("tb_style_1")}>
                                            <table>
                                                <colgroup>
                                                    <col style={{width: '25%'}} />
                                                    <col style={{width: '25%'}} />
                                                    <col style={{width: '25%'}} />
                                                    <col style={{width: '25%'}} />
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Field</th>
                                                        <th scope="col">Business Area</th>
                                                        <th scope="col">Applicant</th>
                                                        <th scope="col">Max Support</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Common</td>
                                                        <td>No limit</td>
                                                        <td>Pre - founder</td>
                                                        <td>100 million won</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p>Business operators (individuals, corporations) in the name of the applicant who do not have experience in start-ups (business officials) until the business announcement date or as of the date of announcement. Those who don't have it.</p>
                                        <ul>
                                            <li>A person who has experience in closing business can apply only if he/she plans to start a business that produces products or services in different industries.</li>
                                            <li>In the case of planning to start a business (company) that produces products and services in the same industry, three years after closure and two years after bankruptcy and bankruptcy. You can apply if you exceed the limit.</li>
                                            <li>The industry is based on the three categories (4 digits) of the Korean Standard Industrial Classification (see Statistical Classification Portal of the National Statistical Office).</li>
                                            <li>Qualifications for application and those subject to exclusion from application shall be observed only by the applicant (team member officer).</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>4. Support</h2>
                                        <p>
                                        Funding for developing start-up items (up to 100 million won, an average of 51 million won)
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>5. Details</h2>
                                        <div className={cx("tb_style_1", "tb_style_2")}>
                                            <table>
                                                <colgroup>
                                                    <col style={{width: '30%'}} />
                                                    <col style={{width: '70%'}} />
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Remark</th>
                                                        <th scope="col">Details</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Funding<br />(Voucher)</td>
                                                        <td>
                                                        It provides up to 100 million won in commercialization funds for prototype production, intellectual property acquisition, and marketing.<br />
                                                        - Depending on the evaluation results, differential support for commercialization funds.<br />
                                                        - The detailed standards for each project cost category are separately guided to the final winners.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Pre-training</td>
                                                        <td>
                                                        Criteria for business expenses, violations, methods of using the system, etc. (8H)
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Compentency Building Education</td>
                                                        <td>
                                                        Required completion training for preliminary start-up package, capacity building education (16H)<br />
                                                        - Entrepreneurship, tax accounting, IR, marketing, and other start-up education.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>In-depth Education</td>
                                                        <td>
                                                        Required completion training for preliminary start-up package, advanced training (16H)<br />
                                                        - Investment attraction, global in-depth education, and networking.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Lean Value Up Program</td>
                                                        <td>
                                                        Lean Value Up Program to Attract Seed Investment<br />
                                                        - Basic education, milestone management, and demo day linkage programs to strengthen the (preliminary) start-up team's initial investment attraction capabilities.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>IR Capability Enhancement</td>
                                                        <td>
                                                        IR Capability Enhancement (Pitch Deck Production Support) Program<br />
                                                        - Support for the production of Korean and English pitch decks through the analysis of the business contents of the (preliminary) start-up team.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Crowdfunding Platform marketing support</td>
                                                        <td>
                                                        Crowdfunding Platform marketing support<br />Support for crowdfunding by establishing crowdfunding education strategies for (preliminary) start-up teams and supporting content production.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Group Meeting</td>
                                                        <td>
                                                        Expert meeting for each group based on the demand (topic) of the (preliminary) start-up team.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Global Accelerator Demo Day</td>
                                                        <td>
                                                        (Preliminary) Startup team's global market entry and investment attraction capacity enhancement program.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Mentoring</td>
                                                        <td>Designating a start-up and management expert as a dedicated mentor to provide close support services for the overall start-up activities of prospective start-ups, such as voucher management and management and advisory services.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={`${cx({show: tabNum == 3})} txt_style_1 `}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_2")}>Lab-specialized Start-up Leading University</h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <ul>
                                    <li>
                                        <h2 className={cx("title_style_4")}>1. Business purpose and expected effect</h2>
                                        <p>
                                        Among laboratory-specific start-up leading university laboratory technologies, there is a high possibility of commercialization and actual start-up within a year.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>2. Applicants</h2>
                                        <p>
                                        Among the laboratory-specific start-up leading university laboratory technologies, it has excellent start-up suitability and possibility, and can actually start a business within a year.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>3. Schedule</h2>
                                        <p>
                                        The university determines the appropriate technology and support budget through evaluation, and a specialized institution (research foundation) reviews it and finally approves it.
                                        </p>
                                        <div className={cx("tb_style_1")}>
                                            <table>
                                                <colgroup>
                                                    <col style={{width: '25%'}} />
                                                    <col style={{width: '25%'}} />
                                                    <col style={{width: '25%'}} />
                                                    <col style={{width: '25%'}} />
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">University presentation evaluation and technology submission</th>
                                                        <th scope="col">Technical review</th>
                                                        <th scope="col">Evaluation of elimination skills and guidance on selection skills</th>
                                                        <th scope="col">Final skills and report</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>University -&gt; Research Foundation.</td>
                                                        <td>Research Foundation.</td>
                                                        <td>Research Foundation.</td>
                                                        <td>University -&gt; Research Foundation.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>4. Support Program</h2>
                                        <p>
                                        Support for follow-up R&D expenses for laboratory technology for start-ups.
                                        </p>
                                        <div className={cx("tb_style_1")}>
                                            <table>
                                                <colgroup>
                                                    <col style={{width: '40%'}} />
                                                    <col style={{width: '20%'}} />
                                                    <col style={{width: '40%'}} />
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th scope="col" colSpan="3">Laboratory-specific start-up leading university.</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>The Department of Education</td>
                                                        <td rowSpan="2">+</td>
                                                        <td>The Department of Science and ICT</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bachelor's degree, Education, Student allowance, etc.</td>
                                                        <td>Follow-up R&D funds, Commercialization model development, etc.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p>
                                        Ministry of Education: Support for the creation of laboratory start-up infrastructure) Laboratory faculty and operating expenses, curriculum development and operation expenses, and student start-up expenses. Support for the creation of laboratory start-up infrastructure such as allowances.
                                        </p>
                                        <p>
                                        (Ministry of Science and ICT: Support for laboratory start-up preparation) Support for laboratory start-up preparation such as follow-up R&D funds, commercialization model development, corporate establishment preparation, and investment attraction.
                                        </p>
                                        <div className={cx("tb_style_1", "tb_style_2")}>
                                            <table>
                                                <colgroup>
                                                    <col style={{width: '20%'}} />
                                                    <col style={{width: '20%'}} />
                                                    <col style={{width: '60%'}} />
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Category</th>
                                                        <th scope="col">Program Title</th>
                                                        <th scope="col">Details</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Technology/market verification</td>
                                                        <td>Technology/Market Analysis Program</td>
                                                        <td>
                                                        Review the possibility of commercialization of technology and lay the foundation for successful market entry and commercialization.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan="2">BM design and IR data production</td>
                                                        <td>Boom-up Program</td>
                                                        <td>
                                                        IR is produced through BM design and commercialization strategy consulting, and the overall direction and growth strategy of start-up companies are established.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Desing-up Program</td>
                                                        <td>
                                                        IR data of laboratory start-ups are used for investment attraction and marketing activities through visual efficiency work.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Commercialization and marketing</td>
                                                        <td>Laboratory Fitting-up program</td>
                                                        <td>
                                                        Support for prototyping (design, production, etc.) and technology and company. Introduction video, homepage, CI) production support.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Investment</td>
                                                        <td>Laboratory Scale-up Program</td>
                                                        <td>
                                                        Investment linkage, Q&A between start-up companies and investors, and networking through private IR.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan="2">Global</td>
                                                        <td>Global Boom-up Program</td>
                                                        <td>
                                                        Support for the production of English company introduction materials and English product/technology introduction videos.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Global Scale-up Program</td>
                                                        <td>
                                                        After discovering global companies and investors related to the technology possessed by the company, delivering marketing data, and signing MOUs and NDAs.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan="2">Education</td>
                                                        <td>Technology start-up skill-up program</td>
                                                        <td>
                                                        (Preliminary) IR/Special Lecture is held for the teacher start-up laboratory.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Technology commercialization forum</td>
                                                        <td>
                                                        Sharing information on technology start-ups and preparing a place for communication.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Follow-up R&D</td>
                                                        <td>Early start-up package<br />TIPS program connection</td>
                                                        <td>
                                                        Link the initial start-up package and TIPS program after the end of the business.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Mentoring</td>
                                                        <td>1:1 Intensive Entrepreneurship Mentoring Program</td>
                                                        <td>
                                                        Immediate problem solving through 1:1 mentoring of experts on essentials and difficulties required for early corporate operations.
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={`${cx({show: tabNum == 4})} txt_style_1 `}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_2")}>Initial Startup Package</h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <ul>
                                    <li>
                                        <h2 className={cx("title_style_4")}>1. Business purpose and expected effect</h2>
                                        <p>
                                        Support specialized programs consisting of funds and item verification to commercialize start-up items to companies within three years of start-up to stabilize and grow companies.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>2. Notice Period</h2>
                                        <p>
                                        Recruitment from the first half of the year (April to June) through the K-startup (www.k-startup.go.kr) site.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>3. Business Industry</h2>
                                        <div className={cx("tb_style_1")}>
                                            <table>
                                                <colgroup>
                                                    <col style={{width: '25%'}} />
                                                    <col style={{width: '25%'}} />
                                                    <col style={{width: '25%'}} />
                                                    <col style={{width: '25%'}} />
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Remark</th>
                                                        <th scope="col">Industry</th>
                                                        <th scope="col">Eligibility to apply</th>
                                                        <th scope="col">Funding</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Common Tech</td>
                                                        <td>No limit</td>
                                                        <td rowSpan="2">A company within 3 years of establishment</td>
                                                        <td rowSpan="2">Up to 100 million won</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Strategic Tech<br />(Green Eco system)</td>
                                                        <td style={{borderRight: '1px solid #ddd'}}>Life Innovation Startup Items to Minimize Pollutants</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>4. Support Program</h2>
                                        <p>
                                        (Commercialization Now) Support for commercialization funds required for prototype production, intellectual property acquisition, and marketing (up to 100 million won), general fields, and Tracks are classified into strategic areas, and supported by differentiating the application limit and scale.
                                        </p>
                                        <p>
                                        (Specialized Program) Support customized programs for start-up companies in consideration of specialized fields for each organization (Hanyang University's specialized fields are 'investment', 'regional bases', and 'actual start-up education').
                                        </p>
                                        <div className={cx("tb_style_1", "tb_style_2")}>
                                            <table>
                                                <colgroup>
                                                    <col style={{width: '20%'}} />
                                                    <col style={{width: '30%'}} />
                                                    <col style={{width: '50%'}} />
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Category</th>
                                                        <th scope="col">Program</th>
                                                        <th scope="col">Details</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan="3" style={{textAlign: 'center'}}>Essential Program.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Verification / Support</td>
                                                        <td>A start-up company.<br />Customized package.</td>
                                                        <td>
                                                        Support customized corporate demand (market verification, technology verification, investment capability verification)
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="3" style={{textAlign: 'center'}}>Optional Program.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Funding</td>
                                                        <td>Start-up.<br />Demo Day.</td>
                                                        <td>
                                                        Domestic AC/VC linkage to strengthen the investment capabilities of the selected companies and attract actual investment.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Funding</td>
                                                        <td>Non-face-to-face investment counseling session.</td>
                                                        <td>
                                                        A non-face-to-face investment consultation meeting is held to provide opportunities for the selected company to attract investment (5 times, inviting 2 companies per session, and providing counseling more than 40 times).
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Funding</td>
                                                        <td>IR of Seoul-based organizations</td>
                                                        <td>
                                                        Holding an IR event to attract investment from nine organizations in the Seoul area.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Region</td>
                                                        <td>Angel investor training course</td>
                                                        <td>
                                                        Training for professional angel investors and forming individual investment associations for large and medium-sized corporate retirement (scheduled) personnel with excellent skills and job capabilities.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Region</td>
                                                        <td>Global Accelerating program.</td>
                                                        <td>
                                                        1:1 expert mentoring, basic overseas expansion education, BM report, and investment attraction opportunities are provided in connection with overseas accelerators.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Region</td>
                                                        <td>One-stop start-up counseling window.<br />(Mentors on call)</td>
                                                        <td>
                                                        Through 1:1 mentoring by experts on essentials and difficulties necessary for the initial operation of the company, Solution provided.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Region</td>
                                                        <td>Startup job fair</td>
                                                        <td>
                                                        Support the recruitment of early start-up companies through a coalition of nine organizations in Seoul.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Real Education</td>
                                                        <td>A practical start-up course.<br />(regular, irregular)</td>
                                                        <td>
                                                        For graduates, alumni, and general (preliminary) founders who have business ideas, Systematic start-ups customized to increase start-up practice capabilities and improve start-up success rates.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Real Education</td>
                                                        <td>Start-up club</td>
                                                        <td>
                                                        College student (CEO is Hanyang University student) 10 excellent start-up clubs selected and closely adhered to each other teams.<br />Advancement of start-up items and establishment of a foothold for growth through mentoring and business funding.
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={`${cx({show: tabNum == 5})} txt_style_1 `}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_2")}>Start-up Leap Package</h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <ul>
                                    <li>
                                        <h2 className={cx("title_style_4")}>1. Business purpose and expected effect</h2>
                                        <p>
                                        It provides commercialization funds and programs to improve business models and enter the market so that start-ups in their third to seventh years can wisely overcome the Death Valley and grow further.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>2. Applicants</h2>
                                        <p>
                                        Start-up companies within 3 to 7 years of start-up based on the date of notice of recruitment.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>3. Funding</h2>
                                        <p>
                                        Startup item development (150 billion won on average)
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>4. Programs</h2>
                                        <p>
                                        It provides up to  300 million won in commercialization funds for prototype production, intellectual property acquisition, labor costs, and marketing.
                                        </p>
                                        <p>→ Differential support for commercialization funds according to the evaluation results.</p>
                                        <p>Operation of various support programs such as investment, consulting, overseas market entry, and corporate market development for companies benefiting from the start-up leap package.</p>
                                        <div className={cx("tb_style_1", "tb_style_2")}>
                                            <table>
                                                <colgroup>
                                                    <col style={{width: '30%'}} />
                                                    <col style={{width: '70%'}} />
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Program</th>
                                                        <th scope="col">Details</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Scale-up investment attraction</td>
                                                        <td>
                                                        1:1 matching and investment counseling with partner investment companies such as university technology holding companies and investment consortiums, and investment in participating companies.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Tach Startup Scale up</td>
                                                        <td>
                                                        - Support for BM verification and advancement of companies in the field of innovation growth (AI, robot/drone) of the host organization.<br />
                                                        - Customized IP strategy consulting in the field of specialized technology for companies.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Scale-up clinic</td>
                                                        <td>
                                                        Consulting in three areas (technical support, management support, trade secret protection) reflecting corporate characteristics and demand.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Global acceleration</td>
                                                        <td>
                                                        Providing 1:1 mentoring, BM analysis, and overseas market entry reports tailored to overseas accelerators and companies.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Business portfolio scale-up</td>
                                                        <td>
                                                        Support for corporate customized product planning, marketing strategy establishment, and market development
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>HY-Round Table Meeting</td>
                                                        <td>
                                                        Demand-based senior company, peer company networking.
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>5. Infra Support</h2>
                                        <ul>
                                            <li>Provide start-up support facilities (start-up activity space, Seongdong 4th Industrial Revolution Center, etc.)</li>
                                            <li>Direct investment and investment attraction linkage using Hanyang University's technology holding company and investment consortium.</li>
                                            <li>When entering the global market, support such as consulting local experts on the space for start-up activities and the cost of establishing branches.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={`${cx({show: tabNum == 6})} txt_style_1 `}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_2")}>Campustown</h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <ul>
                                    <li>
                                        <h2 className={cx("title_style_4")}>1. Business purpose and expected effect</h2>
                                        <p>
                                        University-resional joint festival, Specialized startup acceleration program, Buing a win-win community with young people and local residents
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>2. Applicants</h2>
                                        <ul>
                                            <li>Seoul Citizens who is pre enterprenuer</li>
                                            <li>Individual or team-level group(at leat one of team  is seoul citizens)</li>
                                            <li>Prospective start-ups residing in Seoul and start-ups within 5 years of establishment (based on the date of public announcement)</li>
                                        </ul>
                                        <div className={cx("process_list_wrap")}>
                                            <div className={cx("process_list")}>01<br />Appliaction<br />(May)</div>
                                            <div className={cx("process_list")}>02<br />Noitification of the results<br />(66teams)</div>
                                            <div className={cx("process_list")}>03<br />Mentoring<br />(Only for applicants)</div>
                                            <div className={cx("process_list")}>04<br />Presentation and Selection<br />(43teams)</div>
                                        </div>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>3. Program</h2>
                                        <div className={cx("tb_style_1")}>
                                            <table>
                                                <colgroup>
                                                    <col style={{width: '33%'}} />
                                                    <col style={{width: '33%'}} />
                                                    <col style={{width: '33%'}} />
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Support Funding</th>
                                                        <th scope="col">Special Lectures</th>
                                                        <th scope="col">Investing</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>2Million won a team<br />(Support Funding)</td>
                                                        <td>Startup Lectures Networking</td>
                                                        <td>TIPS, Uni Startup Funding</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Startup Space</td>
                                                        <td>Mentoring</td>
                                                        <td>Global Market</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Requirements for application.<br />(Statin Nio, Seoulstartphub Seoung Soo)</td>
                                                        <td>One-stop counseling for startup,<br />Mentors-on-calls</td>
                                                        <td>Global startup mentoring,<br />Global accelerating program</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <h2 className={cx("title_style_5")}>Startup Space</h2>
                                        <ul>
                                            <li>General Field : Stage Nio (SungSoo Station)</li>
                                            <li>Special Field  : Seoulstartuphub (SungSoo)</li>
                                        </ul>

                                        <h2 className={cx("title_style_5")} style={{marginTop: '20px'}}>Period</h2>
                                        <ul>
                                            <li>General Field : July 1st, 2021 ~ December 31st, 2021 (6 months)</li>
                                            <li>Special Field : From June 1, 2021 ~ December 31, 2021 (7 months)</li>
                                            <li>Whether to allocate open and independent offices among the occupancy spaces is determined according to the number of corporate employees and the results of the examination.</li>
                                            <li>Full support for office space rent and administrative expenses (other additional service usage fees are borne by the tenant company)</li>
                                        </ul>

                                        <div className={cx("tb_style_1")}>
                                            <table>
                                                <colgroup>
                                                    <col style={{width: '30%'}} />
                                                    <col style={{width: '70%'}} />
                                                </colgroup>
                                                <tbody>
                                                    <tr>
                                                        <th rowSpan="7">Startup Accelerating Program</th>
                                                        <td>Startup Lecture(Create X-Learn)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Campus Town Startup Competition</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Startup Support Package</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Startup Incubating (Create X-startup Launch)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>One-stop Mentoring</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Business Hub Day</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{borderBottom: '2px solid #333'}}>Scale-up Program</td>
                                                    </tr>
                                                    <tr>
                                                        <th rowSpan="5">Reginal Win-Win Program</th>
                                                        <td>Visiting Startup Open Class</td>
                                                    </tr>
                                                    <tr>
                                                        <td>City-problem-solving Idea Contest</td>
                                                    </tr>
                                                    <tr>
                                                        <td>HY-SeongDong Startup Festival</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Campus Town Festivla</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Campus Town Outstanding Startup Series</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SeedProject;