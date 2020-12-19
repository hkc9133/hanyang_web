import React, {useEffect, useState} from 'react';
import Link from "next/link";
import styles from '../../public/assets/styles/header/header.module.css';
import classnames from "classnames/bind"
import Image from 'next/image'
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {logout} from "../../store/auth/auth";


const cx = classnames.bind(styles);

const menuStyles = {
    menu:{transition: '.25s all'},
    show: {
        right: 0
    },
    hidden:{
        right: -300
    }
}

const menuItemStyles = {
    menu:{transition: '.25s all'},
    show: {
        display: 'none'
    },
    hidden:{
        display: 'block'
    }
}

const Header = () => {

    const dispatch = useDispatch();
    const router = useRouter()


    const [showMenu, setShowMenu] = useState(false);
    const [showMenuItem, setShowMenuItem] = useState(false);
    const [currentMenuItem, setCurrentMenuItem] = useState(null);
    const totalMenu = React.createRef();

    const {user,logoutResult,signUpLoading} = useSelector(({auth, loading}) => ({
        user: auth.user,
        logoutResult:auth.logout.result,
        signUpLoading: loading['auth/LOGOUT'],
    }))

    useEffect(()=> {
        setShowMenu(false)
        setCurrentMenuItem(null)

    },[router.pathname])

    useEffect(() => {

        if(!signUpLoading && logoutResult){
            router.push("/")
        }
    },[signUpLoading,logoutResult])

    const handleTopMenu = () => {
        setShowMenu(!showMenu)
    }

    const handleShowMenuItem = (num) => {
        if(num == currentMenuItem){
            return setCurrentMenuItem(null)
        }
        // if(currentMenuItem != null){
        //     e.current.style = menuItemStyles.show
        // }
        // e.current.style = menuItemStyles.show
        // setShowMenu(!showMenu)
        setCurrentMenuItem(num)
        // setShowMenuItem(!showMenuItem)
    }

    const handleLogout = () => {
        dispatch(logout())
        router.push("/")
    }



    return (
        <div className={cx("header")}>
            <div className={cx("header_inner")}>
                <div className={cx("logo")}><Link href="/"><a><Image src="/assets/image/logo.png" width={238} height={38} alt="한양대학교 창업지원단"/></a></Link></div>
                <div className={cx("gnb")}>
                    <ul className={"clfx"}>
                        <li>
                            <a href="university_student.html">창업교육</a>
                            <div className={cx("s_gnb")}>
                                <ul>
                                    <li><Link href="/startup_education/university_student"><a href="#">대학(원) 생 대상</a></Link></li>
                                    <li><Link href="/startup_education/teacher"><a href="#">교원 대상</a></Link></li>
                                    <li><Link href="/"><a href="alumnus.html">동문대상</a></Link></li>
                                    <li><Link href="/startup_education/people"><a href="#">일반인대상</a></Link></li>
                                    <li><Link href="/"><a href="online_content.html">온라인콘텐츠</a></Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="consultation.html">창업상담</a>
                            <div className={cx("s_gnb")}>
                                <ul>
                                    <li><Link href="/"><a>창업상담신청</a></Link></li>
                                    <li><Link href="/startup_counsel/mentor_introduce"><a>멘토단소개</a></Link></li>
                                    <li><Link href="/"><a>창업절차</a></Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="startup_support.html">창업지원정보</a>
                            <div className={cx("s_gnb")}>
                                <ul>
                                    <li><Link href="/"><a>창업지원정보</a></Link></li>
                                    <li><Link href="/"><a>창업행사</a></Link></li>
                                    <li><Link href="/"><a>자료실</a></Link></li>
                                    <li><Link href="/"><a>커뮤니티</a></Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="best_startup.html">스타트업H</a>
                            <div className={cx("s_gnb")}>
                                <ul>
                                    <li><Link href="/"><a>우수스타트업</a></Link></li>
                                    <li><Link href="/"><a>스타트업배출현황</a></Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="ir.html">투자연계</a>
                            <div className={cx("s_gnb")}>
                                <ul>
                                    <li><Link href="/"><a>IR/ 투자 안</a></Link></li>
                                    <li><Link href="/"><a>국내/ 외 투자파트너스</a></Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="introduction.html">창업지원단소개</a>
                            <div className={cx("s_gnb")}>
                                <ul>
                                    <li><Link href="/"><a>기관소개</a></Link></li>
                                    <li><Link href="/"><a>창업지원체계</a></Link></li>
                                    <li><Link href="/"><a>인프라</a></Link></li>
                                    <li><Link href="/"><a>협력파트너스</a></Link></li>
                                    <li><Link href="/"><a>홍보</a></Link></li>
                                    <li><Link href="/"><a>오시는길</a></Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className={cx("login_box")}>
                    {user.login ? <Link href="#"><a href="#" onClick={() => {handleLogout()}}>로그아웃</a></Link> :
                        <Link href="/user/login"><a href="#">로그인</a></Link>
                    }
                </div>
                <div className={cx("language")}>
                    <button type="button" className={cx("language_open")}>KOR</button>
                    <div className={cx("language_list")}>
                        <ul>
                            <li><Link href="/"><a>KOR</a></Link></li>
                            <li><Link href="/"><a>EN</a></Link></li>
                        </ul>
                    </div>
                </div>

                <div className={cx("menu_open")}>
                    <button type="button" className={cx('btn_menu_open',{open:showMenu})} onClick={() => {handleTopMenu();}}><span>메뉴열기</span></button>
                </div>

                <div className={cx("total_menu")} ref={totalMenu} style={Object.assign({}, menuStyles.menu, showMenu ? menuStyles.show : menuStyles.hidden)}>
                    <div className={cx("logoArea")}><Image src="/assets/image/left_menu_logo.jpg" width={108} height={36} alt="left_logo"/></div>
                    <ul className={"clfx"}>
                        <li>
                            <a href="#" onClick={(e) => {e.preventDefault();handleShowMenuItem(1)}}>창업교육</a>
                            <div className={cx("s_menu",{show:currentMenuItem === 1})}>
                                <ul>
                                    <li><Link href="/startup_education/university_student"><a>대학(원) 생 대상</a></Link></li>
                                    <li><Link href="/startup_education/teacher"><a>교원 대상</a></Link></li>
                                    <li><Link href="/"><a>동문대상</a></Link></li>
                                    <li><Link href="/startup_education/people"><a href="#">일반인대상</a></Link></li>
                                    <li><Link href="/"><a>온라인콘텐츠</a></Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => {e.preventDefault();handleShowMenuItem(2)}}>창업상담</a>
                            <div className={cx("s_menu",{show:currentMenuItem === 2})}>
                                <ul>
                                    <li><Link href="/"><a>창업상담신청</a></Link></li>
                                    <li><Link href="/startup_counsel/mentor_introduce"><a>멘토단소개</a></Link></li>
                                    <li><Link href="/space/rental"><a>창업절차</a></Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => {e.preventDefault();handleShowMenuItem(3)}}>창업지원정보</a>
                            <div className={cx("s_menu",{show:currentMenuItem === 3})}>
                                <ul>
                                    <li><Link href="/space/rental"><a >창업지원정보</a></Link></li>
                                    <li><Link href="/"><a>창업행사</a></Link></li>
                                    <li><Link href="/"><a>자료실</a></Link></li>
                                    <li><Link href="/"><a>커뮤니티</a></Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => {e.preventDefault();handleShowMenuItem(4)}}>스타트업H</a>
                            <div className={cx("s_menu",{show:currentMenuItem === 4})}>
                                <ul>
                                    <li><Link href="/"><a>우수스타트업</a></Link></li>
                                    <li><Link href="/"><a>스타트업배출현황</a></Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => {e.preventDefault();handleShowMenuItem(5)}}>투자연계</a>
                            <div className={cx("s_menu",{show:currentMenuItem === 5})}>
                                <ul>
                                    <li><Link href="/"><a>IR/ 투자 안</a></Link></li>
                                    <li><Link href="/"><a>국내/ 외 투자파트너스</a></Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => {e.preventDefault();handleShowMenuItem(6)}}>창업지원단소개</a>
                            <div className={cx("s_menu",{show:currentMenuItem === 6})}>
                                <ul>
                                    <li><Link href="/"><a>기관소개</a></Link></li>
                                    <li><Link href="/"><a>창업지원체계</a></Link></li>
                                    <li><Link href="/"><a>인프라</a></Link></li>
                                    <li><Link href="/"><a>협력파트너스</a></Link></li>
                                    <li><Link href="/"><a>홍보</a></Link></li>
                                    <li><Link href="/"><a>오시는길</a></Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        // <div>
        //     <ul>
        //         <li>
        //             <Link href="/"><a>메인</a></Link>
        //         </li>
        //         <li>
        //             <Link href="/auth/login"><a>로그인 화면</a></Link>
        //         </li>
        //         <li>
        //             <Link href="/board/board"><a>글쓰기</a></Link>
        //         </li>
        //         <li>
        //             <Link href="/space/rental"><a>공간예약</a></Link>
        //         </li>
        //         <li>
        //             <Link href="/admin/main"><a>어드민</a></Link>
        //         </li>
        //     </ul>
        // </div>
    );
};

export default Header;
