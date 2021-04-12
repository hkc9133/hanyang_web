import React,{useEffect,useState} from 'react';
import styles from '../../public/assets/styles/common/page_navigation.module.css';
import classnames from "classnames/bind"
import Image from 'next/image'
import {useRouter} from "next/router";
import Link from "next/link";
import {Modal} from "antd";
import {useSelector} from "react-redux";


const cx = classnames.bind(styles);

// const siteMap =[
//     {url:"startup_education",name:"창업교육",sub:[{url:"university_student", name:"대학(원) 생 대상"},{url:"teacher", name:"교원대상"},{url:"people", name:"일반인대상"},{url:"online_content", name:"온라인콘텐츠"}]},
//     {url:"startup_counsel",name:"창업상담",sub:[{url:"counsel_process", name:"창업상담신청"},{url:"mentor_introduce", name:"멘토단 소개"},{url:"mentor_apply", name:"멘토 신청"},{url:"counsel_apply", name:"창업상담하기"}]},
//     {url:"startup_info",name:"창업지원정보",sub:[{url:"data_room", name:"자료실"},{url:"community", name:"커뮤니티"}]},
//     {url:"user",name:"회원",sub:[{url:"login", name:"로그인"},{url:"join", name:"회원가입"}]},
// ]

const dep1 = {
    startup_education:{
        name:'창업교육',
        link:"/startup_education/university_student",
        sub:{
            university_student:{name:"대학(원)생 대상",link:"/startup_education/university_student"},
            teacher:{name:"교원 대상",link:"/startup_education/teacher"},
            alumnus:{name:"동문 대상",link:"/startup_education/alumnus"},
            people:{name:"일반인 대상",link:"/board/people/list"},
            online_content:{name:"온라인 콘텐츠",link:"/board/online_content/list"},
        }
    },
    startup_counsel:{
        name:'창업상담',
        link:"/startup_counsel/counsel_process",
        sub:{
            counsel_process: {name:'창업상담 신청',link:'/startup_counsel/counsel_process'},
            mentor_introduce: {name:'멘토단 소개',link:'/startup_counsel/mentor_introduce'},
            mentor_apply: {name:'멘토 신청',link:'/startup_counsel/mentor_apply'},
            // counsel_apply: {name:'창업상담하기',link:'/startup_counsel/counsel_apply'},
            startup_procedure: {name:'창업절차',link:'/startup_counsel/startup_procedure'},
            // student_report: {name:'학생창업신고',link:'/startup_counsel/student_report'},
        }
    },
    startup_info:{
        name:'창업지원정보',
        link:"/board/notice/list",
        sub:{
            notice: {name:'공지사항',link:'/board/notice/list'},
            startup_event: {name:'창업캘린더',link:'/startup_info/startup_event'},
            startup_info: {name:'신규사업공고',link:'/board/startup_info/list'},
            idea: {name:'커뮤니티 게시판',link:'/board/idea/list'},
            data_room: {name:'자료실',link:'/board/data_room/list'},
            faq: {name:'FAQ',link:'/board/faq/list'},
        }
    },
    startup_h:{
        name:'스타트업H',
        link:"/startup_h/best_startup",
        sub:{
            best_startup: {name:'우수스타트업',link:'/startup_h/best_startup'},
            startup_present: {name:'스타트업 배출현황',link:'/startup_h/startup_present'},
            corp_press: {name:'기업언론보도',link:'/board/corp_press/list'},
        }
    },
    investment:{
        name:'투자연계',
        link:"/investment/ir",
        sub:{
            ir: {name:'IR/투자 안내',link:'/investment/ir'},
            investment_partners: {name:'국내외 투자파트너스',link:'/investment/investment_partners'},
        }
    },
    introduce:{
        name:'창업지원단 소개',
        link:"/introduce/introduce",
        sub:{
            introduce: {name:'기관 소개',link:'/introduce/introduce'},
            system: {name:'창업지원 체계',link:'/introduce/system'},
            infra: {name:'인프라',link:'/introduce/infra'},
            friendly: {name:'창업친화적 제도',link:'/introduce/friendly'},
            media_report: {name:'언론보도',link:'/board/media_report/list'},
            news: {name:'뉴스레터',link:'/introduce/news'},
            promotion: {name:'소개자료',link:'/introduce/promotion'},
            location: {name:'오시는길',link:'/introduce/location'},
            // ir: {name:'IR/ 투자 안내',link:'/board/ir/list'}
        }
    }
}

const board = {
    notice:{parents:'startup_info'},
    idea:{parents:'startup_info'},
    data_room:{parents:'startup_info'},
    startup_info:{parents:'startup_info'},
    people:{parents:'startup_education'},
    online_content:{parents:'startup_education'},
    // news:{parents:'introduce'},
    faq:{parents:'startup_info'},
    media_report:{parents:'introduce'},
    corp_press:{parents:'startup_h'},
}

const PageNavigation = () => {

    const [navi, setNavi] = useState(null);
    const [subNavi, setSubNavi] = useState({key:null,name:null});
    const router = useRouter();

    const {user} = useSelector(({auth, loading}) => ({
        user: auth.user,
    }))

    useEffect(() => {

        let str = "";
        if(router.asPath.indexOf("#") > 0){
            str = router.asPath.replace(router.asPath.substr(router.asPath.indexOf("#"),router.asPath.length),"");
        }else{
            str = router.asPath

        }
        const arr = str.split("/");  // 구분자를 통해 나뉜 결과는 배열로 저장된다.

        try{
            setNavi(arr[1] == 'board' ? dep1[board[arr[2]].parents] : dep1[arr[1]])
            setSubNavi(arr[1] == 'board' ? dep1[board[arr[2]].parents].sub[arr[2]] : dep1[arr[1]].sub[arr[2].split('?')[0]])
        }catch(e){
            return;
        }

    },[router])

    const moveMentorApply = () =>{
        if(user.login == false ||  user.role != "ROLE_ADMIN" ){
            Modal.warning({
                title: '맨토신청은 당해년 05월 01일 부터 05월 31일까지 진행 합니다.',
                content:'멘토신청을 원하시면 멘토로 회원가입 및 인증 후 신청 가능 합니다.'
            });
        }else{
            router.push("/startup_counsel/mentor_apply")
        }
    }


    return (
        <div className={cx("navi_wrap")}>
            <div className={cx("navi")}>
                <ul>
                    {navi != null && (
                        <>
                    <li className={cx("home")}><Link href={"/"}><a><Image src="/assets/image/icon_navi.gif" width={16} height={14} alt="home" /></a></Link></li>
                        <li className={cx("s_navi_li")}>
                            <a href="#" className={cx("s_navi_open")}>{navi.name}</a>
                            <div className={cx("s_navi")}>
                                <ul>
                                    {
                                        Object.keys(dep1).map((key) => {
                                            return (<li key={dep1[key].name}><a href={dep1[key].link}>{dep1[key].name}</a></li>)
                                        })
                                    }
                                </ul>
                            </div>
                        </li>
                    {/*{subNavi.key !== null &&*/}
                        <li className={cx("s_navi_li")}>
                            <a href="#" className={cx("s_navi_open")}>{subNavi.name}</a>
                            <div className={cx("s_navi")}>
                                <ul>
                                    {
                                        Object.keys(navi.sub).map((key) => {
                                            return (<li key={navi.sub[key].name}>
                                                    {navi.sub[key].link === '/startup_counsel/mentor_apply' ?
                                                        <a onClick={()=>{moveMentorApply()}}>{navi.sub[key].name}</a>
                                                        :
                                                        <a href={navi.sub[key].link}>{navi.sub[key].name}</a>}
                                            </li>)
                                        })
                                        // siteMap[navi].sub.map(function(item) {
                                        //     return(
                                        //         <li key={item.url}><Link href={`/${siteMap[navi].url}/${item.url}`}><a>{item.name}</a></Link></li>
                                        //     )
                                        // })
                                    }
                                </ul>
                            </div>
                        </li>
                        </>
                        )}
                    {/*}*/}
                </ul>
            </div>
        </div>
    );
};

export default React.memo(PageNavigation);
