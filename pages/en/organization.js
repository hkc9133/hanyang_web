import React from 'react';

import Link from 'next/link';
import styles from '../../public/assets/styles/en/en_sub.module.css';
import classnames from "classnames/bind"
import PageNavigationEng from "../../component/layout/PageNavigation_eng";
import Head from "next/head";

const cx = classnames.bind(styles);

const Organization = () => {
    return (
        <>
            <Head>
                <title>HANYANG STARTUP - Organization</title>
            </Head>

            <PageNavigationEng title={"About"} dep={"dep1"} />

            <section>
                <div className={cx("sub_container", "organization")}>
                    <h1 className={cx("sub_top_title")}>Organization</h1>
                    <p className={cx("sub_top_txt")}>&nbsp;</p>
                </div>

                <div className={cx("orga_cont_wrap")}>
                    <div className={cx("container")}>
                        <div className={cx("orga_cont")}>
                            <div className={cx("orga_img")}>
                                <img src="/assets/image/organization_en.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Organization;
