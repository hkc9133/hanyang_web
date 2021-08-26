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

                        <div className={`${cx({show: tabNum == 2})} txt_style_1 `}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_2")}>Preliminary Start-up Package</h1>
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

                        <div className={`${cx({show: tabNum == 3})} txt_style_1 `}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_2")}>Lab-specialized Start-up Leading University</h1>
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

                        <div className={`${cx({show: tabNum == 4})} txt_style_1 `}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_2")}>Initial Startup Package</h1>
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

                        <div className={`${cx({show: tabNum == 5})} txt_style_1 `}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_2")}>Start-up Leap Package</h1>
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

                        <div className={`${cx({show: tabNum == 6})} txt_style_1 `}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_2")}>Campustown</h1>
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
                    </div>
                </div>
            </section>
        </>
    );
};

export default SeedProject;