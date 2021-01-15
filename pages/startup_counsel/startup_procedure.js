import React from 'react';
import styles from '../../public/assets/styles/startup_info/startup_info.module.css';
import classnames from "classnames/bind"
import Link from 'next/link'
import PageNavigation from "../../component/layout/PageNavigation";

const cx = classnames.bind(styles);
const StartupProcedure = () => {
    return (
        <>
            <PageNavigation/>
        <section className={cx("container")}>
            <div className={cx("sub_container","startup_procedure")}>
                <h1 className={cx("sub_top_title")}>창업절차</h1>
                <p className={cx("sub_top_txt")}>한양대는 해외 현지 액셀러레이터와 협력관계를 구축하고, <br/>현지 시장 분석 제공, 1:1 코칭, 글로벌 액셀러레이팅 프로그램 운영
                    등 <br/>창업기업의 글로벌 진출을 위한 발판 마련에 힘쓰고 있습니다.</p>

                <div className={cx("tab_style_2")}>
                    <ul>
                        <li className={cx("on")}><Link href="startup_procedure.html"><a>학생창업</a></Link></li>
                        <li><Link href="teacher_startup.html"><a>교원창업</a></Link></li>
                    </ul>
                </div>

                <h2>How to Start a Startup in Hanyang</h2>
                <p className={cx("txt_1")}>스타트업을 꿈꾸는 한양인을 위한 창업가이드</p>
                <div className={cx("img_area")}>
                    <img src="/assets/image/startup_procedure.jpg" alt=""/>
                </div>
                <div className={cx("txt_2")}>학생창업자 신고 후 다양한 한양대학교 학생창업 지원 혜택을 누리세요.</div>
                <div className={cx("txt_c")}>
                    <Link href="#" className={cx("basic-btn04 btn-blue-bd")}><a>한양대학교 학생창업 지원사항 안내서</a></Link>
                    <Link href="student_report.html" className={cx("basic-btn04","btn-black-bd")}><a>학생창업자 신고</a></Link>
                </div>
            </div>
        </section>
            </>
    );
};

export default StartupProcedure;
