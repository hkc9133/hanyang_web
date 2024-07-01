import React from 'react';

import Link from 'next/link';
import styles from '../../public/assets/styles/en/en_sub.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";
import Head from "next/head";
import PageNavigationEng from "../../component/layout/PageNavigation_eng";

const cx = classnames.bind(styles);

const CompanyList = () => {
    return (
        <>
            <Head>
                <title>HANYANG STARTUP - Portfolio</title>
            </Head>

            <PageNavigationEng title={"Portfolio"} dep={"dep3"} />

            <section>
                <div className={cx("sub_container", "academic")}>
                    <h1 className={cx("sub_top_title")}>Successful Student Startups of Hanyang</h1>
                    <p className={cx("sub_top_txt")}>&nbsp;</p>
                </div>

                <div className={cx("portfolio_cont_wrap")}>
                    <div className={cx("container")}>
                        <div className={cx("portfolio_cont")}>
                            <div className={cx("company_list")}>
                                <ul>
                                    <li>
                                        <a href="#" target="_blank">
                                            <div className={cx("img_area")}>
                                                <img src="/assets/image/company_test.png" alt="company logo" />
                                            </div>
                                            <div className={cx("category")}>
                                                <div className={cx("top_cate")}>에코텍트</div>
                                                <ul>
                                                    <li>2023</li>
                                                    <li>ET/Chlomentalic</li>
                                                </ul>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <div className={cx("img_area")}>
                                                <img src="/assets/image/company_test.png" alt="company logo" />
                                            </div>
                                            <div className={cx("category")}>
                                                <div className={cx("top_cate")}>에코텍트</div>
                                                <ul>
                                                    <li>2023</li>
                                                    <li>ET/Chlomentalic</li>
                                                </ul>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <div className={cx("img_area")}>
                                                <img src="/assets/image/company_test.png" alt="company logo" />
                                            </div>
                                            <div className={cx("category")}>
                                                <div className={cx("top_cate")}>에코텍트</div>
                                                <ul>
                                                    <li>2023</li>
                                                    <li>ET/Chlomentalic</li>
                                                </ul>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <div className={cx("img_area")}>
                                                <img src="/assets/image/company_test.png" alt="company logo" />
                                            </div>
                                            <div className={cx("category")}>
                                                <div className={cx("top_cate")}>에코텍트</div>
                                                <ul>
                                                    <li>2023</li>
                                                    <li>ET/Chlomentalic</li>
                                                </ul>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <div className={cx("img_area")}>
                                                <img src="/assets/image/company_test.png" alt="company logo" />
                                            </div>
                                            <div className={cx("category")}>
                                                <div className={cx("top_cate")}>에코텍트</div>
                                                <ul>
                                                    <li>2023</li>
                                                    <li>ET/Chlomentalic</li>
                                                </ul>
                                            </div>
                                        </a>
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

export default CompanyList;