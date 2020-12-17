import React from 'react';
import Link from "next/link";
import styles from '../../public/assets/styles/admin/header/header.module.css';
import classnames from "classnames/bind"
import Image from 'next/image'
const cx = classnames.bind(styles);


const AdminHeader = () => {
    return (

        <div className={cx("header")}>
            {/*<style jsx global>{`*/}
            {/*    body {*/}
            {/*      background-color:#f9faff; min-width:1290px;*/}
            {/*    }*/}
            {/*    `}*/}
            {/*</style>*/}
            <div className={`${cx("header_inner")} clfx `}>
                <div className={cx("logo")}><Link  href="/"><a><Image src="/assets/image/admin/logo.png" width={273} height={33} alt="한양대학교 창업지원단"/></a></Link></div>
                <div className={`${cx("util_menu")} clfx `}>
                    <div className={cx("alarm")}>
                        <a href="#">
                            <Image src="/assets/image/admin/alarm_icon.png" width={18} height={22} alt="alarm_icon"/>
                            <span className={cx("number")}>12</span>
                        </a>
                    </div>
                    <div className={cx("photo")}><Link  href="#"><a><Image src="/assets/image/admin/adm_photo.png" width={39} height={39} alt="admin_photo"/></a></Link></div>
                </div>
            </div>

            <div className={cx("menu_wrap")}>
                <button type="button" className={cx("menu_open")}><span></span></button>
                <div className={cx("adm_menu")}>
                    <ul>
                        <li><Link  href="#"><a><Image src="/assets/image/admin/adm_menu_1.png" width={38} height={38} alt="adm_menu"/></a></Link></li>
                        <li><Link  href="#"><a><Image src="/assets/image/admin/adm_menu_2.png" width={38} height={38} alt="adm_menu"/></a></Link></li>
                        <li><Link  href="#"><a><Image src="/assets/image/admin/adm_menu_3.png" width={38} height={38} alt="adm_menu"/></a></Link></li>
                        <li><Link  href="#"><a><Image src="/assets/image/admin/adm_menu_4.png" width={38} height={38} alt="adm_menu"/></a></Link></li>
                        <li><Link  href="#"><a><Image src="/assets/image/admin/adm_menu_4.png" width={38} height={38} alt="adm_menu"/></a></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminHeader;
