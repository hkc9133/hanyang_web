import React, {useEffect, useState} from 'react';
import Link from "next/link";
import styles from '../../public/assets/styles/header/header.module.css';
import classnames from "classnames/bind"
import Image from 'next/image'
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {logout} from "../../store/auth/auth";
import { Transition, animated } from 'react-spring'


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

    const handleLogout = () => {
        dispatch(logout())
        // router.push("/")
    }

    return (
        <div className={cx("header")}>
            <div className={cx("header_inner")}>
                <div className={cx("logo")}><Link href="/"><a><Image src="/assets/image/logo.png" width={238} height={38} alt="한양대학교 창업지원단"/></a></Link></div>
                <div className={cx("gnb")}>
                    <ul className={"clfx"}>
                        <li>
                            <Link href="/startup_education/university_student"><a>창업교육</a></Link>
                            <div className={cx("s_gnb")}>
                                <ul>
                                    <li><Link href="/startup_education/university_student"><a>대학(원)생 대상</a></Link></li>
                                    <li><Link href="/startup_education/teacher"><a>교원 대상</a></Link></li>
                                    <li><Link href="/startup_education/alumnus"><a>동문 대상</a></Link></li>
                                    <li><Link href="/board/people/list"><a>일반인 대상</a></Link></li>
                                    <li><Link href="/board/online_content/list"><a>온라인 콘텐츠</a></Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link href="/startup_counsel/counsel_process"><a>창업상담</a></Link>
                            <div className={cx("s_gnb")}>
                                <ul>
                                    <li><Link href="/startup_counsel/counsel_process"><a>창업상담신청</a></Link></li>
                                    <li><Link href="/startup_counsel/mentor_introduce?pageSize=1"><a>멘토단소개</a></Link></li>
                                    <li><Link href="/startup_counsel/mentor_apply"><a>멘토신청</a></Link></li>
                                    <li><Link href="/startup_counsel/startup_procedure"><a>창업절차</a></Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link href="/board/startup_info/list"><a>창업지원정보</a></Link>
                            <div className={cx("s_gnb")}>
                                <ul>
                                    <li><Link href="/board/notice/list"><a>공지사항</a></Link></li>
                                    <li><Link href="/startup_info/startup_event"><a>창업캘린더</a></Link></li>
                                    <li><Link href="/board/startup_info/list"><a>신규사업공고</a></Link></li>
                                    <li><Link href="/board/idea/list"><a>창업지원단 커뮤니티</a></Link></li>
                                    <li><Link href="/board/data_room/list"><a>자료실</a></Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link href="/startup_h/best_startup"><a>스타트업H</a></Link>
                            <div className={cx("s_gnb")}>
                                <ul>
                                    <li><Link href="/startup_h/best_startup"><a>우수스타트업</a></Link></li>
                                    <li><Link href="/startup_h/startup_present"><a>스타트업배출현황</a></Link></li>
                                    <li><Link href="/board/corp_press/list"><a>기업언론보도</a></Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link href="/board/ir/list"><a>투자연계</a></Link>
                            <div className={cx("s_gnb")}>
                                <ul>
                                    <li><Link href="/investment/ir"><a>IR/투자 안내</a></Link></li>
                                    <li><Link href="/investment/investment_partners"><a>국내외<br/> 투자파트너스</a></Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link href="/introduce/introduce"><a>창업지원단 소개</a></Link>
                            <div className={cx("s_gnb")}>
                                <ul>
                                    <li><Link href="/introduce/introduce"><a>기관 소개</a></Link></li>
                                    <li><Link href="/introduce/system"><a>창업지원 체계</a></Link></li>
                                    <li><Link href="/introduce/infra"><a>인프라</a></Link></li>
                                    <li><Link href="/introduce/friendly"><a>창업친화적 제도</a></Link></li>
                                    <li><Link href="/board/media_report/list"><a>언론보도</a></Link></li>
                                    <li><Link href="/board/news/list"><a>뉴스레터</a></Link></li>
                                    <li><Link href="/introduce/promotion"><a>소개자료</a></Link></li>
                                    {/*<li>*/}
                                    {/*    <Link href="/introduce/promotion"><a>홍보자료</a></Link>*/}
                                    {/*    <div className={cx("dep3")}>*/}
                                    {/*        <ul>*/}
                                    {/*            <li><Link href="/board/media_report/list"><a>언론보도</a></Link></li>*/}
                                    {/*            <li><Link href="/board/news/list"><a>뉴스레터</a></Link></li>*/}
                                    {/*            <li><Link href="/introduce/promotion"><a>소개자료</a></Link></li>*/}
                                    {/*        </ul>*/}
                                    {/*    </div>*/}
                                    {/*</li>*/}
                                    <li><Link href="/introduce/location"><a>오시는 길</a></Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className={cx("login_box")}>
                    {isLogin ?
                        <>
                            <Link href={mypage}><a className={cx("top_mypage")}>{user.role == 'ROLE_SD' ? '창업상담 신청현황' : user.role == 'ROLE_ADMIN' ? "관리자" : "관리"}</a></Link>
                        <Link href="#"><a href="#" onClick={() => {handleLogout()}}>로그아웃</a></Link>
                        </>
                        :
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

                <div className={cx("menu_open",{fixed:showMenu})}>
                    <button type="button" className={cx('btn_menu_open',{open:showMenu})} onClick={() => {handleTopMenu();}}><span>메뉴열기</span></button>
                </div>

                {/*<Transition*/}
                {/*    // native*/}
                {/*    items={showMenu}*/}
                {/*    from={{ position: 'absolute', overflow: 'hidden', height: 0 }}*/}
                {/*    enter={[{ height: 'auto' }]}*/}
                {/*    leave={{ height: 0 }}>*/}
                {/*    {show =>*/}
                {/*        show && (props => <animated.div style={props}>hello</animated.div>)*/}
                {/*    }*/}
                {/*</Transition>*/}

                <div className={cx("total_menu")} ref={totalMenu} style={Object.assign({}, menuStyles.menu, showMenu ? menuStyles.show : menuStyles.hidden)}>
                    <div className={cx("logoArea")}><Image src="/assets/image/left_menu_logo.jpg" width={108} height={36} alt="left_logo"/></div>
                    <ul className={"clfx"}>
                        <li>
                            <a href="#" onClick={(e) => {e.preventDefault();handleShowMenuItem(1)}}>창업교육</a>
                            <div className={cx("s_menu","show")}>
                                <ul>
                                    <li><Link href="/startup_education/university_student"><a>대학(원)생 대상</a></Link></li>
                                    <li><Link href="/startup_education/teacher"><a>교원 대상</a></Link></li>
                                    <li><Link href="/startup_education/alumnus"><a>동문 대상</a></Link></li>
                                    <li><Link href="/board/people/list"><a>일반인 대상</a></Link></li>
                                    <li><Link href="/board/online_content/list"><a>온라인 콘텐츠</a></Link></li>
                                </ul>
                            </div>
                        </li>
                        <li style={{marginTop:90}}>
                            <a href="#" onClick={(e) => {e.preventDefault();handleShowMenuItem(2)}}>창업상담</a>
                            <div className={cx("s_menu","show")}>
                                <ul>
                                    <li><Link href="/startup_counsel/counsel_process"><a>창업상담신청</a></Link></li>
                                    <li><Link href="/startup_counsel/mentor_introduce?pageSize=1"><a>멘토단소개</a></Link></li>
                                    <li><Link href="/startup_counsel/mentor_apply"><a>멘토신청</a></Link></li>
                                    <li><Link href="/startup_counsel/startup_procedure"><a>창업절차</a></Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => {e.preventDefault();handleShowMenuItem(3)}}>창업지원정보</a>
                            <div className={cx("s_menu","show")}>
                                <ul>
                                    <li><Link href="/board/notice/list"><a>공지사항</a></Link></li>
                                    <li><Link href="/startup_info/startup_event"><a>창업캘린더</a></Link></li>
                                    <li><Link href="/board/startup_info/list"><a>신규사업공고</a></Link></li>
                                    <li><Link href="/board/idea/list"><a>창업지원단 커뮤니티</a></Link></li>
                                    <li><Link href="/board/data_room/list"><a>자료실</a></Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => {e.preventDefault();handleShowMenuItem(4)}}>스타트업H</a>
                            <div className={cx("s_menu","show")}>
                                <ul>
                                    <li><Link href="/startup_h/best_startup"><a>우수스타트업</a></Link></li>
                                    <li><Link href="/startup_h/startup_present"><a>스타트업배출현황</a></Link></li>
                                    <li><Link href="/board/corp_press/list"><a>기업언론보도</a></Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => {e.preventDefault();handleShowMenuItem(5)}}>투자연계</a>
                            <div className={cx("s_menu","show")} style={{height:230}}>
                                <ul>
                                    <li><Link href="/investment/ir"><a>IR/투자 안내</a></Link></li>
                                    <li><Link href="/investment/investment_partners"><a>국내외 투자파트너스</a></Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => {e.preventDefault();handleShowMenuItem(6)}}>창업지원단 소개</a>
                            <div className={cx("s_menu","show")} style={{height:230}}>
                                <ul>
                                    <li><Link href="/introduce/introduce"><a>기관 소개</a></Link></li>
                                    <li><Link href="/introduce/infra"><a>인프라</a></Link></li>
                                    <li><Link href="/introduce/system"><a>창업지원 체계</a></Link></li>
                                    {/*<li><Link href="/introduce"><a>협력 파트너스</a></Link></li>*/}
                                    <li><Link href="/board/media_report/list"><a>언론보도</a></Link></li>
                                    <li><Link href="/board/news/list"><a>뉴스레터</a></Link></li>
                                    <li><Link href="/introduce/promotion"><a>소개자료</a></Link></li>
                                    {/*<li>*/}
                                    {/*    <Link href="/introduce/promotion"><a>홍보자료</a></Link>*/}
                                    {/*    <div className={cx("dep3")}>*/}
                                    {/*        <ul>*/}
                                    {/*            /!*<li><a href="/introduce/startupCalendar/list">공지사항</a></li>*!/*/}
                                    {/*            <li><Link href="/board/media_report/list"><a>언론보도</a></Link></li>*/}
                                    {/*            <li><Link href="/board/news/list"><a>뉴스레터</a></Link></li>*/}
                                    {/*            <li><Link href="/introduce/promotion"><a>소개자료</a></Link></li>*/}
                                    {/*        </ul>*/}
                                    {/*    </div>*/}
                                    {/*</li>*/}
                                    <li><Link href="/introduce/location"><a>오시는 길</a></Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    {isLogin &&
                        <Link href={mypage}><a className={cx("mypage_link")}>{user.role == 'ROLE_SD' ? '창업상담 신청현황' : user.role == 'ROLE_ADMIN' ? "관리자콘솔" : "관리"}</a></Link>
                    }
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

export default React.memo(Header);
