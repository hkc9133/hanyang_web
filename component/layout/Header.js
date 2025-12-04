import React, {useEffect, useState} from 'react';
// import Link from "next/link";
import styles from '../../public/assets/styles/header/header.module.css';
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
                <div className={cx("logo")}><a href="/"><Image src="/assets/image/logo.png" width={238} height={38} alt="한양대학교 창업지원단"/></a></div>
                <div className={cx("gnb")}>
                    <ul className={"clfx"}>
                        <li>
                            <a href="/startup_education/university_student">창업교육</a>
                            <div className={cx("s_gnb")}>
                                <ul>
                                    <li><a href="/startup_education/university_student">대학(원)생 대상</a></li>
                                    <li><a href="/startup_education/teacher">교원 창업</a></li>
                                    <li><a href="/startup_education/alumnus">동문 대상</a></li>
                                    <li><a href="/board/people/list">일반인 대상</a></li>
                                    <li><a href="/board/online_content/list">온라인 콘텐츠</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="/startup_counsel/counsel_process">창업상담</a>
                            <div className={cx("s_gnb")}>
                                <ul>
                                    <li><a href="/startup_counsel/counsel_process">창업상담신청</a></li>
                                    <li><a href="/startup_counsel/mentor_introduce?page=1">멘토단소개</a></li>
                                    {/*<li><a onClick={() => {
                                        moveMentorApply()
                                    }}>멘토신청</a></li>*/}
                                    <li><a href="/startup_counsel/startup_procedure">창업절차</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="/board/notice/list">창업지원정보</a>
                            <div className={cx("s_gnb")}>
                                <ul>
                                    <li><a href="/board/notice/list">공지사항</a></li>
                                    <li><a href="/startup_info/startup_event?type=C">창업캘린더</a></li>
                                    <li><a href="/board/startup_info/list">신규사업공고</a></li>
                                    {/*<li><a href="/board/idea/list">커뮤니티 게시판</a></li>*/}
                                    <li><a href="/board/data_room/list">자료실</a></li>
                                    <li><a href="/board/faq/list">FAQ</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="/startup_h/best_startup">스타트업H</a>
                            <div className={cx("s_gnb")}>
                                <ul>
                                    <li><a href="/startup_h/best_startup">우수스타트업</a></li>
                                    <li><a href="/startup_h/startup_present">스타트업 배출현황</a></li>
                                    <li><a href="/board/corp_press/list">기업언론보도</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="/investment/ir">투자연계</a>
                            <div className={cx("s_gnb")}>
                                <ul>
                                    <li><a href="/investment/ir">IR/투자 안내</a></li>
                                    <li><a href="/investment/investment_partners">국내외<br/> 투자파트너스</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="/introduce/introduce">창업지원단 소개</a>
                            <div className={cx("s_gnb")}>
                                <ul>
                                    <li><a href="/introduce/introduce">기관 소개</a></li>
                                    <li><a href="/introduce/system">창업지원 체계</a></li>
                                    <li><a href="/introduce/infra">인프라</a></li>
                                    <li><a href="/introduce/friendly">창업친화적 제도</a></li>
                                    <li><a href="/board/media_report/list">언론보도</a></li>
                                    <li><a href="/introduce/news">뉴스레터</a></li>
                                    <li><a href="/introduce/promotion">소개자료</a></li>
                                    <li><a href="/introduce/location">오시는 길</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="https://startup-gse.hanyang.ac.kr/" target="_blank">창업대학원</a>
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
                    <button type="button" className={cx("language_open")}>KOR</button>
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
                        <li className={cx("s_menu_1")}>
                            <a href="/startup_education/university_student">창업교육</a>
                            <div className={cx("s_menu", "show", "s_menu_1")}>
                                <ul>
                                    <li><a href="/startup_education/university_student">대학(원)생 대상</a></li>
                                    <li><a href="/startup_education/teacher">교원 창업</a></li>
                                    <li><a href="/startup_education/alumnus">동문 대상</a></li>
                                    <li><a href="/board/people/list">일반인 대상</a></li>
                                    <li><a href="/board/online_content/list">온라인 콘텐츠</a></li>
                                </ul>
                            </div>
                        </li>
                        <li style={{marginTop: 90}} className={cx("s_menu_2")}>
                            <a href="/startup_counsel/counsel_process">창업상담</a>
                            <div className={cx("s_menu", "show", "s_menu_2")}>
                                <ul>
                                    <li><a href="/startup_counsel/counsel_process">창업상담신청</a></li>
                                    <li><a href="/startup_counsel/mentor_introduce?page=1">멘토단소개</a></li>
                                    {/*<li><a onClick={() => {
                                        moveMentorApply()
                                    }}>멘토신청</a></li>*/}
                                    <li><a href="/startup_counsel/startup_procedure">창업절차</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="/board/notice/list">창업지원정보</a>
                            <div className={cx("s_menu", "show")}>
                                <ul>
                                    <li><a href="/board/notice/list">공지사항</a></li>
                                    <li><a href="/startup_info/startup_event?type=C">창업캘린더</a></li>
                                    <li><a href="/board/startup_info/list">신규사업공고</a></li>
                                    {/*<li><a href="/board/idea/list">커뮤니티 게시판</a></li>*/}
                                    <li><a href="/board/data_room/list">자료실</a></li>
                                    <li><a href="/board/faq/list">FAQ</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="/startup_h/best_startup">스타트업H</a>
                            <div className={cx("s_menu", "show")}>
                                <ul>
                                    <li><a href="/startup_h/best_startup">우수 스타트업</a></li>
                                    <li><a href="/startup_h/startup_present">스타트업 배출현황</a></li>
                                    <li><a href="/board/corp_press/list">기업언론보도</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="/investment/ir">투자연계</a>
                            <div className={cx("s_menu", "show")} style={{height: 250}}>
                                <ul>
                                    <li><a href="/investment/ir">IR/투자 안내</a></li>
                                    <li><a href="/investment/investment_partners">국내외 투자파트너스</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="/introduce/introduce">창업지원단 소개</a>
                            <div className={cx("s_menu", "show")} style={{height: 250}}>
                                <ul>
                                    <li><a href="/introduce/introduce">기관 소개</a></li>
                                    <li><a href="/introduce/system">창업지원 체계</a></li>
                                    <li><a href="/introduce/infra">인프라</a></li>
                                    <li><a href="/introduce/friendly">창업친화적 제도</a></li>
                                    <li><a href="/board/media_report/list">언론보도</a></li>
                                    <li><a href="/introduce/news">뉴스레터</a></li>
                                    <li><a href="/introduce/promotion">소개자료</a></li>
                                    <li><a href="/introduce/location">오시는 길</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="https://startup-gse.hanyang.ac.kr/" target="_blank">창업대학원</a>
                        </li>
                    </ul>
                    {isLogin &&
                        <a href={mypage}
                           className={cx("mypage_link")}>{user.role == 'ROLE_SD' ? '창업상담 신청현황' : user.role == 'ROLE_ADMIN' ? "관리자콘솔" : "관리"}</a>
                    }
                </div>
            </div>
        </div>

    );
};

export default React.memo(Header);
