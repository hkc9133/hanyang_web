import React from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from '../../public/assets/styles/admin/header/header.module.css';
import classnames from "classnames/bind"
import {useRouter} from "next/router";
const cx = classnames.bind(styles);

const AdminHeaderDetail = () => {
    const router = useRouter();
    return (
        <div className={cx("adm_menu_detail")}>

            {router.pathname.startsWith("/admin/dashboard") && (
                <>
                    <div className={cx("adm_menu_head")}>
                        <div className={cx("adm_menu_icon")}>
                            <Image src="/assets/image/admin/adm_detail_1.png" width={80} height={80} alt="adm_menu"/>
                        </div>
                        <h3 className={cx("adm_menu_title")}>대시보드</h3>
                    </div>
                    <ul>
                        {/*<li><a href="#">학생 창업 신고 목록</a></li>*/}
                    </ul>
                </>
            )}
            {router.pathname.startsWith("/admin/users") && (
                <>
                    <div className={cx("adm_menu_head")}>
                        <div className={cx("adm_menu_icon")}>
                            <Image src="/assets/image/admin/adm_detail_1.png" width={80} height={80} alt="adm_menu"/>
                        </div>
                        <h3 className={cx("adm_menu_title")}>사용자 관리</h3>
                    </div>
                    <ul>
                        <li><Link href="/admin/users"><a>사용자 관리</a></Link></li>
                    </ul>
                </>
            )}
            {router.pathname.startsWith("/admin/board/list") && (
                <>
                    <div className={cx("adm_menu_head")}>
                        <div className={cx("adm_menu_icon")}>
                            <Image src="/assets/image/admin/adm_detail_1.png" width={80} height={80} alt="adm_menu"/>
                        </div>
                        <h3 className={cx("adm_menu_title")}>게시판 관리</h3>
                    </div>
                    <ul>
                        <li><Link href="/admin/board/list"><a>게시판 관리</a></Link></li>
                    </ul>
                </>
            )}
            {router.pathname.startsWith("/admin/notice/list") && (
                <>
                    <div className={cx("adm_menu_head")}>
                        <div className={cx("adm_menu_icon")}>
                            <Image src="/assets/image/admin/adm_detail_1.png" width={80} height={80} alt="adm_menu"/>
                        </div>
                        <h3 className={cx("adm_menu_title")}>공지사항 관리</h3>
                    </div>
                    <ul>
                        <li><Link href="/admin/notice/list"><a>공지사항 관리</a></Link></li>
                    </ul>
                </>
            )}
            {router.pathname.startsWith("/admin/mentor") && (
                <>
                    <div className={cx("adm_menu_head")}>
                        <div className={cx("adm_menu_icon")}>
                            <Image src="/assets/image/admin/adm_detail_1.png" width={80} height={80} alt="adm_menu"/>
                        </div>
                        <h3 className={cx("adm_menu_title")}>멘토 관리</h3>
                    </div>
                    <ul>
                        <li><Link href="/admin/mentor"><a>멘토 관리</a></Link></li>
                    </ul>
                </>
            )}
            {router.pathname.startsWith("/admin/counsel_apply") && (
                <>
                    <div className={cx("adm_menu_head")}>
                        <div className={cx("adm_menu_icon")}>
                            <Image src="/assets/image/admin/adm_detail_1.png" width={80} height={80} alt="adm_menu"/>
                        </div>
                        <h3 className={cx("adm_menu_title")}>상담 신청서 관리</h3>
                    </div>
                    <ul>
                        <li><Link href="/admin/counsel_apply"><a>상담 신청서 관리</a></Link></li>
                    </ul>
                </>
            )}
            {(router.pathname.startsWith("/admin/rental_place/manage") || router.pathname.startsWith("/admin/reservation_info")) && (
                <>
                    <div className={cx("adm_menu_head")}>
                        <div className={cx("adm_menu_icon")}>
                            <Image src="/assets/image/admin/adm_detail_1.png" width={80} height={80} alt="adm_menu"/>
                        </div>
                        <h3 className={cx("adm_menu_title")}>공간 대여 관리</h3>
                    </div>
                    <ul>
                        <li><Link href="/admin/rental_place/manage"><a>대여 공간 관리</a></Link></li>
                        <li><Link href="/admin/reservation_info"><a>예약 정보 관리</a></Link></li>
                    </ul>
                </>
            )}
            {router.pathname.startsWith("/admin/popup") && (
                <>
                    <div className={cx("adm_menu_head")}>
                        <div className={cx("adm_menu_icon")}>
                            <Image src="/assets/image/admin/adm_detail_1.png" width={80} height={80} alt="adm_menu"/>
                        </div>
                        <h3 className={cx("adm_menu_title")}>팝업 관리</h3>
                    </div>
                    <ul>
                        <li><Link href="/admin/popup"><a>팝업 관리</a></Link></li>
                    </ul>
                </>
            )}
            {router.pathname.startsWith("/admin/student_report") && (
                <>
                    <div className={cx("adm_menu_head")}>
                        <div className={cx("adm_menu_icon")}>
                            <Image src="/assets/image/admin/adm_detail_1.png" width={80} height={80} alt="adm_menu"/>
                        </div>
                        <h3 className={cx("adm_menu_title")}>학생창업 신고</h3>
                    </div>
                    <ul>
                        <li><Link href="/admin/student_report"><a>학생창업 관리</a></Link></li>
                    </ul>
                </>
            )}
            {router.pathname.startsWith("/admin/search_keyword") && (
                <>
                    <div className={cx("adm_menu_head")}>
                        <div className={cx("adm_menu_icon")}>
                            <Image src="/assets/image/admin/adm_detail_1.png" width={80} height={80} alt="adm_menu"/>
                        </div>
                        <h3 className={cx("adm_menu_title")}>검색어 관리</h3>
                    </div>
                    <ul>
                        <li><Link href="/admin/search_keyword"><a>검색어 관리</a></Link></li>
                    </ul>
                </>
            )}
        </div>
    );
};

export default AdminHeaderDetail;
