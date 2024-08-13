import React,{useEffect,useState} from 'react';
import styles from '../../public/assets/styles/en/en_sub.module.css';
import classnames from "classnames/bind"
import Image from 'next/image'
import {useRouter} from "next/router";
import Link from "next/link";
import {Modal} from "antd";
import {useSelector} from "react-redux";
import {ShareAltOutlined} from '@ant-design/icons';
import { Popover, Button } from 'antd';
import NaverShareButton from "../common/share/NaverShareButton";
import FaceBookShareButton from "../common/share/FaceBookShareButton";
import KaKaoShareButton from "../common/share/KaKaoShareButton";
import {url} from "../../lib/api/client";
import Academic_1 from "../../pages/en/academic_1";
const cx = classnames.bind(styles);

// const siteMap =[
//     {url:"startup_education",name:"창업교육",sub:[{url:"university_student", name:"대학(원) 생 대상"},{url:"teacher", name:"교원대상"},{url:"people", name:"일반인대상"},{url:"online_content", name:"온라인콘텐츠"}]},
//     {url:"startup_counsel",name:"창업상담",sub:[{url:"counsel_process", name:"창업상담신청"},{url:"mentor_introduce", name:"멘토단 소개"},{url:"mentor_apply", name:"멘토 신청"},{url:"counsel_apply", name:"창업상담하기"}]},
//     {url:"startup_info",name:"창업지원정보",sub:[{url:"data_room", name:"자료실"},{url:"community", name:"커뮤니티"}]},
//     {url:"user",name:"회원",sub:[{url:"login", name:"로그인"},{url:"join", name:"회원가입"}]},
// ]

const nav = {
    dep1 : {
        name:'About',
        link:"/en/about",
        sub : [
            {name:"Introduction",link:"/en/about"},
            {name:"Organization",link:"/en/organization"},
            {name:"Contact Us",link:"/en/contact"},
        ]
    },
    dep2:{
        name:'Academics & Programs',
        link:"/en/academic_1",
        sub : [
            {name:'Course & Degrees',link:'/en/academic_1'},
            {name:'Undergraduate Courses',link:'/en/academic_2'},
            {name:'Graduate Courses',link:'/en/academic_3'},
            {name:'Alumni Startup Education',link:'/en/academic_4'},
            {name:'Startup Programs',link:'/en/academic_5'},
        ]
    },
    dep3:{
        name:'Portfolio',
        link:"/en/statistic",
        sub : [
            {name:'Startup Statistics',link:'/en/statistic'},
            {name:'Successful Student Startups of Hanyang',link:'/en/board/company_en/list'},
            {name:'HYU Startup NOW',link:'/en/board/notice/list'},
        ]
    },
}

// const dep1 = {
//     about:{
//         name:'About',
//         link:"/en/about",
//         sub:{
//             introduction:{name:"Introduction",link:"/en/about"},
//             organization:{name:"Organization",link:"/en/organization"},
//             contact:{name:"Contact Us",link:"/en/contact"},
//         }
//     },
//     academic:{
//         name:'Academics & Programs',
//         link:"/en/academic",
//         sub:{
//             academic: {name:'Course & Degrees',link:'/en/academic'},
//             academic_2: {name:'Undergraduate Courses',link:'/en/academic_2'},
//             academic_3: {name:'Graduate Courses',link:'/en/academic_3'},
//             academic_4: {name:'Alumni Startup Education',link:'/en/academic_4'},
//             academic_5: {name:'Startup Programs',link:'/en/academic_5'},
//         }
//     },
//     portfolio:{
//         name:'Portfolio',
//         link:"/en/statistic",
//         sub:{
//             statistic: {name:'Startup Statistics',link:'/en/statistic'},
//             notice: {name:'HYU Startup NOW',link:'/en/board/notice/list'},
//         }
//     },
// }

const board = {
    notice:{parents:'portfolio'},
}

const PageNavigationEng = ({title, desc, dep, isBoard}) => {

    const [navi, setNavi] = useState(null);
    const [subNavi, setSubNavi] = useState({key:null,name:null});
    const router = useRouter();

    useEffect(() => {
        if (isBoard) {
            switch (dep) {
                case 'notice':
                    setNavi("dep3");
                    break;
            }
        } else {
            setNavi(dep);
        }
    }, [dep])

    const {user} = useSelector(({auth, loading}) => ({
        user: auth.user,
    }));

    return (
        <>
            <div className={cx("sub_banner_wrap")}>
                <div className={cx("sub_banner")}>
                    <div className={cx("txt_wrap")}>
                        <h3>{title}</h3>
                    </div>
                </div>
            </div>

            {
                navi != null && (
                    <div className={cx("navi_wrap")}>
                        <div className={cx("container")}>
                            <div className={cx("navi")}>
                                <ul>
                                    {
                                        nav[navi]["sub"].map((item) => {
                                            return (
                                                <>
                                                    <li className={router.asPath.indexOf(item.link) == 0 ? cx("on") : ""}>
                                                        <Link legacyBehavior  href={item.link}>
                                                            <a>{item.name}</a>
                                                        </Link>
                                                    </li>
                                                </>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default React.memo(PageNavigationEng);
