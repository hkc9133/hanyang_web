import React from 'react';

import Link from 'next/link';
import styles from '../../public/assets/styles/en/en_sub.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";
import Head from "next/head";
import PageNavigationEng from "../../component/layout/PageNavigation_eng";

const cx = classnames.bind(styles);

const Statistic = () => {
    return (
        <>
            <Head>
                <title>HANYANG STARTUP - Portfolio</title>
            </Head>

            <PageNavigationEng title={"Portfolio"} dep={"dep3"} />

            <section>
                <div className={cx("sub_container", "academic")}>
                    <h1 className={cx("sub_top_title")}>Startup Statistics</h1>
                    <p className={cx("sub_top_txt")}>&nbsp;</p>
                </div>

                <div className={cx("portfolio_cont_wrap")}>
                    <div className={cx("container")}>
                        <div className={cx("portfolio_cont")}>
                            <div className={cx("title_wrap")}>
                                <h3>Startup Education</h3>
                            </div>

                            <ul className={cx("portfolio_amount")}>
                                <li>
                                    <h3># of Startup Classes</h3>
                                    <span>(2021 ~ 2023)</span>
                                    <h5>1,513</h5>
                                    <p>(34,625 attendees)</p>
                                </li>
                                <li>
                                    <h3>Startup Academy</h3>
                                    <span>(2012 ~ 2023)</span>
                                    <h5>1,001</h5>
                                    <p>(571 companies)</p>
                                </li>
                                <li>
                                    <h3># of Startup Clubs</h3>
                                    <span>(2021 ~ 2023)</span>
                                    <h5>340</h5>
                                    <p>(1,263 participants)</p>
                                </li>
                            </ul>
                        </div>

                        <div className={cx("portfolio_cont")}>
                            <div className={cx("title_wrap")}>
                                <h3>Performance of Student Startups (Founded in 2010 ~ 2022)</h3>
                            </div>

                            <ul className={cx("portfolio_amount")}>
                                <li>
                                    <h3>Survived Startups</h3>
                                    <span></span>
                                    <h5>199 companies</h5>
                                    <p>Out of 468 (Survival rate of 43%)</p>
                                </li>
                                <li>
                                    <h3>Sales amount</h3>
                                    <span></span>
                                    <h5>$ 180 million</h5>
                                    <p></p>
                                </li>
                                <li>
                                    <h3>Investment raised</h3>
                                    <span></span>
                                    <h5>$ 340 million</h5>
                                    <p></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Statistic;