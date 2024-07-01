import React, {useEffect, useState} from 'react';
import Link from "next/link";
import styles from '../../public/assets/styles/en/header_eng.module.css';
import classnames from "classnames/bind"
import Image from 'next/image'
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {logout} from "../../store/auth/auth";
import {Modal} from "antd";


const cx = classnames.bind(styles);

const menuStyles = {
    menu:{transition: '.25s all ease-out'},
    show: {
        right: 0
    },
    hidden:{
        right: -300
    }
}

const Header = () => {

    const dispatch = useDispatch();
    const router = useRouter()
    useEffect(() =>{


    },[])


    const [isLogin, setIsLogin] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [currentMenuItem, setCurrentMenuItem] = useState(null);
    const [mypage, setMypage] = useState("");
    const totalMenu = React.createRef();


    const {user,logoutResult,signUpLoading} = useSelector(({auth, loading}) => ({
        user: auth.user,
        logoutResult:auth.logout.result,
        signUpLoading: loading['auth/LOGOUT'],
    }))

    useEffect(()=> {
        setShowMenu(false)
        setCurrentMenuItem(null)
        setMypage(getMyPage(user.role))
        if(user.login !== null && user.login){
            setIsLogin(true)
        }else{
            setIsLogin(false)
        }
    },[router.pathname,user])

    useEffect(()=> {
    },[isLogin])



    // useEffect(() => {
    //     if(!signUpLoading && logoutResult){
    //     }
    // },[signUpLoading,logoutResult])

    const handleTopMenu = () => {
        setShowMenu(!showMenu)
    }

    const handleShowMenuItem = (num) => {
        if(num == currentMenuItem){
            return setCurrentMenuItem(null)
        }
        setCurrentMenuItem(num)
    }

    const getMyPage = (role) =>{
        let returnRole = "";
        switch (role){
            case "ROLE_SD":
                returnRole = '/mypage/mentee'
                break;
            case "ROLE_MT":
                returnRole = '/mypage/mentor'
                break;
            case "ROLE_ADMIN":
                returnRole = '/admin/users'
                break;
        }
        return returnRole;
    }


    const moveMentorApply = () =>{
        router.push("/startup_counsel/mentor_apply")
        // if(user.login == false ||  user.role != "ROLE_ADMIN" ){
        //     Modal.warning({
        //         title: '맨토신청은 당해년 05월 01일 부터 05월 31일까지 진행 합니다.',
        //         content:'멘토신청을 원하시면 멘토로 회원가입 및 인증 후 신청 가능 합니다.'
        //     });
        // }else{
        //     router.push("/startup_counsel/mentor_apply")
        // }
    }

    const handleLogout = () => {
        dispatch(logout())
    }

    useEffect(() => {
        if(logoutResult){
            router.push("/");
        }
    },[logoutResult])


    return (
        <div className={cx("header")}>
            <div className={cx("header_inner")}>
                <div className={cx("logo")}><a href="/en"><Image src="/assets/image/logo.png" width={238} height={38} alt="한양대학교 창업지원단"/></a></div>
                <div className={cx("gnb")}>
                    <ul className={"clfx"}>
                        <li>
                            <a href="/en/about">About</a>
                            <div className={cx("s_gnb")}>
                                <ul>
                                    <li><a href="/en/about">Introduction</a></li>
                                    <li><a href="/en/organization">Organization</a></li>
                                    <li><a href="/en/contact">Contact us</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="/en/academic_1">Academics & Programs</a>
                            <div className={cx("s_gnb")}>
                                <ul>
                                    <li><a href="/en/academic_1">Course & Degrees</a></li>
                                    <li><a href="/en/academic_2">Undergraduate Courses</a></li>
                                    <li><a href="/en/academic_3">Graduate Courses</a></li>
                                    <li><a href="/en/academic_4">Alumni Startup Education</a></li>
                                    <li><a href="/en/academic_5">Startup Programs</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="/en/statistic">Portfolio</a>
                            <div className={cx("s_gnb")}>
                                <ul>
                                    <li><a href="/en/statistic">Startup Statistics</a></li>
                                    <li><a href="/en/company_list">Successful Student Startups of Hanyang</a></li>
                                    <li><a href="/en/board/notice/list">HYU Startup NOW</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className={cx("login_box")}>
                    {isLogin ?
                        <>
                            <a href={mypage} className={cx("top_mypage")}>
                                {/*<a >*/}
                                {user.role == 'ROLE_SD' && '창업상담 신청현황'}
                                {(user.role == 'ROLE_ADMIN' || user.role == 'ROLE_TC')  && '관리자'}
                                {user.role == 'ROLE_MT' && '관리'}
                                {/*{user.role == 'ROLE_SD' ? '창업상담 신청현황' : user.role == 'ROLE_ADMIN' ? "관리자" : "관리"}*/}
                                {/*</a>*/}
                            </a>
                            <a onClick={handleLogout}>로그아웃</a>
                        </>
                        :
                        <a href="/user/login">로그인</a>
                    }
                </div>
                <div className={cx("language")}>
                    <button type="button" className={cx("language_open")}>EN</button>
                    <div className={cx("language_list")}>
                        <ul>
                            <li><a href="/">KOR</a></li>
                            <li><a href="/en">EN</a></li>
                        </ul>
                    </div>
                </div>

                <div className={cx("menu_open",{fixed:showMenu})}>
                    <button type="button" className={cx('btn_menu_open',{open:showMenu})} onClick={() => {handleTopMenu();}}><span>메뉴열기</span></button>
                </div>

                <div className={cx("total_menu")} ref={totalMenu} style={Object.assign({}, menuStyles.menu, showMenu ? menuStyles.show : menuStyles.hidden)}>
                    <div className={cx("logoArea")}><Image src="/assets/image/left_menu_logo.jpg" width={108} height={36} alt="left_logo"/></div>
                    <ul className={"clfx"}>
                        <li className={cx("s_menu_1")}>
                            <a href="/en/about">About</a>
                            <div className={cx("s_menu","show","s_menu_1")}>
                                <ul>
                                    <li><a href="/en/about">Introduction</a></li>
                                    <li><a href="/en/organization">Organization</a></li>
                                    <li><a href="/en/contact">Contact us</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className={cx("s_menu_2")}>
                            <a href="/en/academic_1">Academics & Programs</a>
                            <div className={cx("s_menu","show","s_menu_2")}>
                                <ul>
                                    <li><a href="/en/academic_1">Course & Degrees</a></li>
                                    <li><a href="/en/academic_2">Undergraduate Courses</a></li>
                                    <li><a href="/en/academic_3">Graduate Courses</a></li>
                                    <li><a href="/en/academic_4">Alumni Startup Education</a></li>
                                    <li><a href="/en/academic_5">Startup Programs</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="/en/statistic">Portfolio</a>
                            <div className={cx("s_menu","show")}>
                                <ul>
                                    <li><a href="/en/statistic">Startup Statistics</a></li>
                                    <li><a href="/en/company_list">Successful Student Startups of Hanyang</a></li>
                                    <li><a href="/en/board/notice/list">HYU Startup NOW</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    {isLogin &&
                        <a href={mypage} className={cx("mypage_link")}>{user.role == 'ROLE_SD' ? '창업상담 신청현황' : user.role == 'ROLE_ADMIN' ? "관리자콘솔" : "관리"}</a>
                    }
                </div>
            </div>
        </div>

    );
};

export default React.memo(Header);
