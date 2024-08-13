import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from '../../public/assets/styles/admin/header/header.module.css';
import classnames from "classnames/bind"
import {useRouter} from "next/router";
const cx = classnames.bind(styles);

const AdminHeaderDetail = () => {
    const router = useRouter();

    const [dropdown, setShowDropdown] = useState({
        '4_1':false,
        '4_2':false,
        '4_3':false,
        '4_4':false,
        '4_5':false,
        '4_6':false,
        '4_7':false,
    })

    const changeDropdown = (e) =>{
        const {name, value} = e.target;
        setShowDropdown({
            '4_1':false,
            '4_2':false,
            '4_3':false,
            '4_4':false,
            '4_5':false,
            '4_6':false,
            '4_7':false,
            [name]:!dropdown[name]
        })

    }
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
                            <Image src="/assets/image/admin/adm_detail_2.png" width={80} height={80} alt="adm_menu"/>
                        </div>
                        <h3 className={cx("adm_menu_title")}>회원 관리</h3>
                    </div>
                    <ul>
                        <li><Link href="/admin/users">회원 관리</Link></li>
                    </ul>
                </>
            )}
            {(router.pathname.startsWith("/admin/board") || router.pathname.startsWith("/admin/startupCalendar") || router.pathname.startsWith("/admin/popup") || router.pathname.startsWith("/admin/keyword")) && (
                <>
                    <div className={cx("adm_menu_head")}>
                        <div className={cx("adm_menu_icon")}>
                            <Image src="/assets/image/admin/adm_detail_8.png" width={80} height={80} alt="adm_menu"/>
                        </div>
                        <h3 className={cx("adm_menu_title")}>사이트 관리</h3>
                    </div>
                    <ul>
                        <li><Link href="/admin/board/list">게시판 관리</Link></li>
                        <li>
                            <button className={cx("board_title")} name="4_1" onClick={changeDropdown}>창업교육</button>
                        </li>
                        <div className={cx("board_sub")}>
                            {dropdown["4_1"] && (
                                <ul>
                                    <li><Link href={'/admin/board/content/list?boardEnName=people'}>일반인 대상</Link></li>
                                    <li><Link href={'/admin/board/content/list?boardEnName=online_content'}>온라인
                                        콘텐츠</Link></li>
                                </ul>
                            )}
                        </div>
                        <li>
                            <button className={cx("board_title")} name="4_2" onClick={changeDropdown}>창업지원정보</button>
                        </li>
                        <div className={cx("board_sub")}>
                            {dropdown["4_2"] && (
                                <ul>
                                    <li><Link href={'/admin/board/content/list?boardEnName=notice'}>공지사항</Link></li>
                                    <li><Link href={'/admin/board/content/list?boardEnName=startup_info'}>신규사업공고</Link>
                                    </li>
                                    <li><Link href={'/admin/board/content/list?boardEnName=idea'}>커뮤니티 게시판</Link></li>
                                    <li><Link href={'/admin/board/content/list?boardEnName=data_room'}>자료실</Link></li>
                                    <li><Link href={'/admin/board/content/list?boardEnName=faq'}>FAQ</Link></li>
                                </ul>
                            )}
                        </div>
                        <li>
                            <button className={cx("board_title")} name="4_3" onClick={changeDropdown}>스타트업H</button>
                        </li>
                        <div className={cx("board_sub")}>
                            {dropdown["4_3"] && (
                                <ul>
                                    <li><Link href={'/admin/board/content/list?boardEnName=corp_press'}>기업언론보도</Link>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <li>
                            <button className={cx("board_title")} name="4_4" onClick={changeDropdown}>투자연계</button>
                        </li>
                        <div className={cx("board_sub")}>
                            {dropdown["4_4"] && (
                                <ul>
                                    <li><Link href={'/admin/board/content/list?boardEnName=ir'}>IR/투자 안내</Link></li>
                                </ul>
                            )}
                        </div>
                        <li>
                            <button className={cx("board_title")} name="4_5" onClick={changeDropdown}>창업지원단 소개</button>
                        </li>
                        <div className={cx("board_sub")}>
                            {dropdown["4_5"] && (
                                <ul>
                                    <li><Link href={'/admin/board/content/list?boardEnName=media_report'}>언론보도</Link>
                                    </li>
                                    {/*<li><Link href={'/admin/board/content/list?boardEnName=news'}>뉴스레터</Link></li>*/}
                                </ul>
                            )}
                        </div>
                        <li>
                            <button className={cx("board_title")} name="4_6" onClick={changeDropdown}>기타</button>
                        </li>
                        <div className={cx("board_sub")}>
                            {dropdown["4_6"] && (
                                <ul>
                                    <li><Link href={'/admin/board/content/list?boardEnName=Issue'}>창업지원단 핫이슈</Link></li>
                                </ul>
                            )}
                        </div>
                        <li>
                            <button className={cx("board_title")} name="4_7" onClick={changeDropdown}>영문 사이트</button>
                        </li>
                        <div className={cx("board_sub")}>
                            {dropdown["4_7"] && (
                                <ul>
                                    <li><Link href={'/admin/board/content/list?boardEnName=notice_en'}>영문 공지사항</Link></li>
                                    <li><Link href={'/admin/board/content/list?boardEnName=company_en'}>기업</Link></li>
                                </ul>
                            )}
                        </div>
                        <li><Link href="/admin/startupCalendar/list">창업캘린더 관리</Link></li>
                        <li><Link href="/admin/popup">팝업 관리</Link></li>
                        <li><Link href="/admin/keyword">검색어 관리</Link></li>
                    </ul>
                </>
            )}
            {/*{router.pathname.startsWith("/admin/startupCalendar/list") && (*/}
            {/*    <>*/}
            {/*        <div className={cx("adm_menu_head")}>*/}
            {/*            <div className={cx("adm_menu_icon")}>*/}
            {/*                <Image src="/assets/image/admin/adm_detail_1.png" width={80} height={80} alt="adm_menu"/>*/}
            {/*            </div>*/}
            {/*            <h3 className={cx("adm_menu_title")}>공지사항 관리</h3>*/}
            {/*        </div>*/}
            {/*        <ul>*/}
            {/*            <li><Link href="/admin/startupCalendar/list">공지사항 관리</Link></li>*/}
            {/*        </ul>*/}
            {/*    </>*/}
            {/*)}*/}

            {(router.pathname.startsWith("/admin/mentor") || router.pathname.startsWith("/admin/counsel_apply"))  && (
                <>
                    <div className={cx("adm_menu_head")}>
                        <div className={cx("adm_menu_icon")}>
                            <Image src="/assets/image/admin/adm_detail_4.png" width={80} height={80} alt="adm_menu"/>
                        </div>
                        <h3 className={cx("adm_menu_title")}>멘토링</h3>
                    </div>
                    <ul>
                        <li><Link href="/admin/mentor">멘토 관리</Link></li>
                        <li><Link href="/admin/counsel_apply">상담 신청서 관리</Link></li>
                    </ul>
                </>
            )}
            {/*{router.pathname.startsWith("/admin/counsel_apply") && (*/}
            {/*    <>*/}
            {/*        <div className={cx("adm_menu_head")}>*/}
            {/*            <div className={cx("adm_menu_icon")}>*/}
            {/*                <Image src="/assets/image/admin/adm_detail_1.png" width={80} height={80} alt="adm_menu"/>*/}
            {/*            </div>*/}
            {/*            <h3 className={cx("adm_menu_title")}>상담 신청서 관리</h3>*/}
            {/*        </div>*/}
            {/*        <ul>*/}
            {/*            <li><Link href="/admin/counsel_apply">상담 신청서 관리</Link></li>*/}
            {/*        </ul>*/}
            {/*    </>*/}
            {/*)}*/}
            {(router.pathname.startsWith("/admin/rental_place/manage") || router.pathname.startsWith("/admin/reservation_info")) && (
                <>
                    <div className={cx("adm_menu_head")}>
                        <div className={cx("adm_menu_icon")}>
                            <Image src="/assets/image/admin/adm_detail_5.png" width={80} height={80} alt="adm_menu"/>
                        </div>
                        <h3 className={cx("adm_menu_title")}>공간 대여 관리</h3>
                    </div>
                    <ul>
                        <li><Link href="/admin/rental_place/manage">대여 공간 관리</Link></li>
                        <li><Link href="/admin/reservation_info">예약 정보 목록보기</Link></li>
                    </ul>
                </>
            )}
            {(router.pathname.startsWith("/admin/student_report") || router.pathname.startsWith("/admin/startup_present")|| router.pathname.startsWith("/admin/partner")) && (
                <>
                    <div className={cx("adm_menu_head")}>
                        <div className={cx("adm_menu_icon")}>
                            <Image src="/assets/image/admin/adm_detail_3.png" width={80} height={80} alt="adm_menu"/>
                        </div>
                        <h3 className={cx("adm_menu_title")}>기업 관리</h3>
                    </div>
                    <ul>
                        <li><Link href="/admin/student_report">학생 창업 신고 목록</Link></li>
                        <li><Link href="/admin/startup_present">스타트업 배출 목록</Link></li>
                        <li><Link href="/admin/partner">국내외 투자파트너스</Link></li>
                    </ul>
                </>
            )}
            {/*{router.pathname.startsWith("/admin/popup") && (*/}
            {/*    <>*/}
            {/*        <div className={cx("adm_menu_head")}>*/}
            {/*            <div className={cx("adm_menu_icon")}>*/}
            {/*                <Image src="/assets/image/admin/adm_detail_3.png" width={80} height={80} alt="adm_menu"/>*/}
            {/*            </div>*/}
            {/*            <h3 className={cx("adm_menu_title")}>팝업</h3>*/}
            {/*        </div>*/}
            {/*        <ul>*/}
            {/*            <li><Link href="/admin/popup">팝업 관리</Link></li>*/}
            {/*        </ul>*/}
            {/*    </>*/}
            {/*)}*/}
            {/*{router.pathname.startsWith("/admin/keyword") && (*/}
            {/*    <>*/}
            {/*        <div className={cx("adm_menu_head")}>*/}
            {/*            <div className={cx("adm_menu_icon")}>*/}
            {/*                <Image src="/assets/image/admin/adm_detail_3.png" width={80} height={80} alt="adm_menu"/>*/}
            {/*            </div>*/}
            {/*            <h3 className={cx("adm_menu_title")}>검색어 관리</h3>*/}
            {/*        </div>*/}
            {/*        <ul>*/}
            {/*            <li><Link href="/admin/keyword">검색어 관리</Link></li>*/}
            {/*        </ul>*/}
            {/*    </>*/}
            {/*)}*/}
        </div>
    );
};

export default AdminHeaderDetail;
