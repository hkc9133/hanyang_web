import React, {useEffect, useState} from 'react';
import styles from '../../public/assets/styles/startup_info/startup_info.module.css';
import classnames from "classnames/bind"
import Link from 'next/link'
import PageNavigation from "../../component/layout/PageNavigation";
import {isMobile} from "react-device-detect";
import Image from "next/image";
import {useRouter} from "next/router";
import {Modal} from "antd";
import {useSelector} from "react-redux";
import Head from "next/head";

const cx = classnames.bind(styles);
const StartupProcedure = () => {
    const router = useRouter();
    const [tab, setTab] =  useState(0);

    const {user} = useSelector(({auth, loading}) => ({
        user: auth.user
    }))

    useEffect(() =>{
        if(router.query.tab == 0 ){
            setTab(0)
        }else if(router.query.tab == 1){
            setTab(1)
        }

    },[router.query])

    const moveReportApply = () =>{
        if(user.login == false || (user.role != "ROLE_SD" && user.role != "ROLE_ADMIN") ){
            Modal.warning({
                title: '로그인 후 이용하실 수 있습니다.',
            });
        }else{
            router.push("/startup_counsel/student_report")
        }
    }
    return (
        <>
            <Head>
                <title>한양대학교 창업지원단 -창업절차</title>
            </Head>
            <PageNavigation/>
            <section className={cx("container")}>
                <div className={cx("sub_container","startup_procedure","teacher_startup")}>
                    <h1 className={cx("sub_top_title")}>창업절차</h1>
                    <p className={cx("sub_top_txt")}>한양대에서 어떻게 스타트업을 시작하는가? 창업 아이디어 구상부터 시제품 제작, 창업 실행, 투자유치를 거쳐 성공 창업까지의 창업강좌, 프로그램 및 인프라를 소개합니다.</p>

                    <div className={cx("tab_style_2")}>
                        <ul>
                            <li className={cx({on:tab == 0})}><a onClick={() =>{setTab(0)}}>학생창업</a></li>
                            <li className={cx({on:tab == 1})}><a onClick={() =>{setTab(1)}}>교원창업</a></li>
                        </ul>
                    </div>

                    {tab == 0 && (
                        <>
                            <h2>How to Start a Startup at Hanyang University</h2>
                            <p className={cx("txt_1")}>스타트업을 꿈꾸는 한양인을 위한 창업가이드</p>
                            <div className={cx("img_area")}>
                                <img src="/assets/image/startup_procedure.jpg" alt=""/>
                            </div>
                            <div className={cx("txt_2")}>학생창업자 신고 후 다양한 한양대학교 학생창업 지원 혜택을 누리세요.</div>
                            <div className={cx("txt_c")}>
                                <Link href="/assets/pdf/한양대학교 학생창업자 지원 사항 안내.pdf" ><a className={cx("basic-btn04","btn-blue-bd")} target="_blank">한양대학교 학생창업 지원사항 안내서</a></Link>
                                <Link href="#" ><a className={cx("basic-btn04", "btn-black-bd")} onClick={moveReportApply}>학생창업자 신고</a></Link>
                            </div>
                        </>
                    )}
                    {tab == 1 && (
                        <>
                            <div className="img_area">
                                {isMobile ? <img src="/assets/image/teacher_startup_mo.jpg" alt=""/> : <img src="/assets/image/teacher_startup.jpg" alt=""/>}
                            </div>
                            <div className={cx("txt_2")}></div>
                            <div className="txt_c">
                                <Link href="/assets/pdf/2020 실험실창업 교내 프로세스 안내.pdf" ><a className={cx("basic-btn04","btn-blue-bd")}target="_blank">실험실 창업 교내 프로세스 안내</a></Link>
                            </div>
                        </>
                    )}
                </div>
            </section>
        </>
    );
};

export default StartupProcedure;
