import React from 'react';
import Link from "next/link";
import styles from '../../public/assets/styles/admin/header/header.module.css';
import classnames from "classnames/bind"
import Image from 'next/image'
import AdminHeaderDetail from "./AdminHeaderDetail";
const cx = classnames.bind(styles);


const AdminHeader = () => {
    return (

        <div className={cx("header")}>
            <div className={`${cx("header_inner")} clfx `}>
                <div className={cx("logo")}><Link  href="/"><a><Image src="/assets/image/admin/logo.png" width={273} height={33} alt="한양대학교 창업지원단"/></a></Link></div>
                <div className={`${cx("util_menu")} clfx `}>
                    <div className={cx("alarm")}>
                        <Link href="/">
                            <a>
                                <Image src="/assets/image/admin/alarm_icon.png" width={18} height={22} alt="alarm_icon"/>
                                <span className={cx("number")}>12</span>
                            </a>
                        </Link>
                    </div>
                    <div className={cx("photo")}><Link  href="/"><a><Image src="/assets/image/admin/adm_photo.png" width={39} height={39} alt="admin_photo"/></a></Link></div>
                </div>
            </div>

            <div className={cx("menu_wrap")}>
                <button type="button" className={cx("menu_open")}><span></span></button>
                <div className={cx("adm_menu")}>
                    <ul>
                        <li><Link href="/admin/dashboard"><a><Image src="/assets/image/admin/adm_menu_1.png" width={38} height={38} alt="adm_menu"/></a></Link></li>
                        <li><Link href="/admin/users"><a><Image src="/assets/image/admin/adm_menu_2.png" width={38} height={38} alt="adm_menu"/></a></Link></li>
                        <li><Link href="/admin/board/list"><a><Image src="/assets/image/admin/adm_menu_3.png" width={38} height={38} alt="adm_menu"/></a></Link></li>
                        <li><Link href="/admin/notice/list"><a><Image src="/assets/image/admin/adm_menu_3.png" width={38} height={38} alt="adm_menu"/></a></Link></li>
                        <li><Link href="/admin/mentor"><a><Image src="/assets/image/admin/mentor.png" width={38} height={38} alt="adm_menu"/></a></Link></li>
                        <li><Link href="/admin/counsel_apply"><a><Image src="/assets/image/admin/counsel.png" width={38} height={38} alt="adm_menu"/></a></Link></li>
                        <li><Link href="/admin/rental_place/manage"><a><Image src="/assets/image/admin/reserve.png" width={38} height={38} alt="adm_menu"/></a></Link></li>
                        {/*<li><Link href="/admin/reservation_info"><a><Image src="/assets/image/admin/adm_menu_3.png" width={38} height={38} alt="adm_menu"/></a></Link></li>*/}
                        <li><Link href="/admin/startup_present"><a><Image src="/assets/image/admin/adm_menu_3.png" width={38} height={38} alt="adm_menu"/></a></Link></li>
                        <li><Link href="/admin/student_report"><a><Image src="/assets/image/admin/adm_menu_3.png" width={38} height={38} alt="adm_menu"/></a></Link></li>
                        <li><Link href="/admin/popup"><a><Image src="/assets/image/admin/popup.png" width={38} height={38} alt="adm_menu"/></a></Link></li>
                        <li><Link href="/admin/keyword"><a><Image src="/assets/image/admin/popup.png" width={38} height={38} alt="adm_menu"/></a></Link></li>
                    </ul>
                </div>
                <AdminHeaderDetail/>
            </div>
        </div>
    );
};

export default AdminHeader;
