import React,{useEffect,useState} from 'react';
import styles from '../../public/assets/styles/common/page_navigation.module.css';
import classnames from "classnames/bind"
import Image from 'next/image'
import {useRouter} from "next/router";
import Link from "next/link";


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
        link:"/board/idea/list",
        sub:{
            startup_info: {name:'창업지원정보',link:'/board/startup_info/list'},
            startup_event: {name:'창업행사',link:'/startup_info/startup_event'},
            idea: {name:'아이디어 제안',link:'/board/idea/list'},
            data_room: {name:'자료실',link:'/board/data_room/list'},
            notice: {name:'공지사항',link:'/introduce/notice'},
        }
    },
    startup_h:{
        name:'스타트업H',
        link:"/startup_h/best_startup",
        sub:{
            best_startup: {name:'우수스타트업',link:'/startup_h/best_startup'},
            startup_present: {name:'스타트업배출현황',link:'/startup_h/startup_present'},
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
            promotion: {name:'협력 파트너스',link:'/introduce/promotion'},
            location: {name:'오시는길',link:'/introduce/location'},
            news: {name:'뉴스레터',link:'/board/news/list'},
            media_report: {name:'언론보도',link:'/board/media_report/list'},
            // ir: {name:'IR/ 투자 안내',link:'/board/ir/list'}
        }
    }
}

const board = {
    idea:{parents:'startup_info'},
    data_room:{parents:'startup_info'},
    startup_info:{parents:'startup_info'},
    people:{parents:'startup_education'},
    online_content:{parents:'startup_education'},
    news:{parents:'introduce'},
    media_report:{parents:'introduce'},
}

const PageNavigation = () => {

    const [navi, setNavi] = useState(null);
    const [subNavi, setSubNavi] = useState({key:null,name:null});
    const router = useRouter();

    useEffect(() => {

        console.log(router.asPath.substr(router.asPath.indexOf("#"),router.asPath.length))
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


        // let keyV;
        // let itemIndex = null;
        // let subItemIndex = null;
        // arr.forEach((element,index) => {
        //     switch (index) {
        //         case 1:
        //             siteMap.forEach((item,itemIdx) => {
        //                 if(element == 'board'){
        //                     if(board[arr[2]].parents == item.url){
        //                         itemIndex = itemIdx
        //                         return
        //                     }
        //                 }else{
        //                     if(item.url == element){
        //                         itemIndex = itemIdx;
        //                         return;
        //                     }
        //                 }
        //             })
        //             setNavi(itemIndex)
        //             break;
        //         case 2:
        //             if(siteMap[itemIndex] != null){
        //                 siteMap[itemIndex].sub.forEach((subItem,subIndex) => {
        //                     if(subItem.url == element){
        //                         subItemIndex = subIndex;
        //                         return;
        //                     }
        //                 })
        //                 if(siteMap[itemIndex].sub.length > 0 && subItemIndex != null){
        //                     setSubNavi({
        //                         key:element,
        //                         name:siteMap[itemIndex].sub[subItemIndex].name
        //                     })
        //
        //                 }
        //             }
        //             break;
        //     }
        // });


    },[router])

    // useEffect(() => {
    //
    // },[navi,subNavi])


    return (
        <div className={cx("navi_wrap")}>
            <div className={cx("navi")}>
                <ul>
                    {navi != null && (
                        <>
                    <li className={cx("home")}><Image src="/assets/image/icon_navi.gif" width={16} height={14} alt="home" /></li>
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
                                            return (<li key={navi.sub[key].name}><a href={navi.sub[key].link}>{navi.sub[key].name}</a></li>)
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
