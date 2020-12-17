import React,{useEffect,useState} from 'react';
import styles from '../../public/assets/styles/common/page_navigation.module.css';
import classnames from "classnames/bind"
import Image from 'next/image'
import {useRouter} from "next/router";
import Link from "next/link";


const cx = classnames.bind(styles);

const siteMap =[
    {url:"startup_education",name:"창업교육",sub:[{url:"university_student", name:"대학(원) 생 대상"}]},
    {url:"startup_counsel",name:"창업상담",sub:[{url:"aa", name:"창업상담신청"},{url:"mentor_introduce", name:"멘토단 소개"},{url:"bb", name:"창업절차"}]},
    {url:"user",name:"회원",sub:[{url:"login", name:"로그인"},{url:"join", name:"회원가입"}]},
]


const PageNavigation = () => {

    const [navi, setNavi] = useState(null);
    const [subNavi, setSubNavi] = useState({key:null,name:null});
    const router = useRouter();

    useEffect(() => {
        const arr = router.pathname.split("/");  // 구분자를 통해 나뉜 결과는 배열로 저장된다.

        let keyV;
        let itemIndex = null;
        let subItemIndex = null;
        arr.forEach((element,index) => {
            switch (index) {
                case 1:
                    siteMap.forEach((item,itemIdx) => {
                        if(item.url == element){
                            itemIndex = itemIdx;
                            return;
                        }
                    })
                    setNavi(itemIndex)
                    break;
                case 2:
                    siteMap[itemIndex].sub.forEach((subItem,subIndex) => {
                        if(subItem.url == element){
                            subItemIndex = subIndex;
                            return;
                        }
                    })
                    if(siteMap[itemIndex].sub.length > 0 ){
                        setSubNavi({
                            key:element,
                            name:siteMap[itemIndex].sub[subItemIndex].name
                        })

                    }
                    break;
            }
        });


    },[])

    useEffect(() => {

        console.log(navi,subNavi)


    },[navi,subNavi])


    return (
        <div className={cx("navi_wrap")}>
            <div className={cx("navi")}>
                <ul>
                    <li className={cx("home")}><Image src="/assets/image/icon_navi.gif" width={16} height={14} alt="home" /></li>
                    <li className={cx("s_navi_li")}>
                        <a href="#" className={cx("s_navi_open")}>{navi != null && siteMap[navi].name}</a>
                        <div className={cx("s_navi")}>
                            <ul>
                                {
                                    siteMap.map((item)=>{
                                        return(
                                            <li key={item.url}><a href={`/${item.url}/${item.sub.length > 0 && item.sub[0].url}`}>{item.name}</a></li>
                                        )
                                    })
                                }
                            {/*<ul>*/}
                            {/*    <li><a href="#">창업교육</a></li>*/}
                            {/*    <li><a href="#">창업상담</a></li>*/}
                            {/*    <li><a href="#">창업지원정보</a></li>*/}
                            {/*    <li><a href="#">스타트업H</a></li>*/}
                            {/*    <li><a href="#">투자연계</a></li>*/}
                            {/*    <li><a href="#">창업지원단소개</a></li>*/}
                            </ul>
                        </div>
                    </li>
                    {subNavi.key !== null &&
                        <li className={cx("s_navi_li")}>
                            <a href="#" className={cx("s_navi_open")}>{subNavi.name}</a>
                            <div className={cx("s_navi")}>
                                <ul>
                                    {
                                        siteMap[navi].sub.map(function(item) {
                                            return(
                                                <li key={item.url}><Link href={`/${siteMap[navi].url}/${item.url}`}><a>{item.name}</a></Link></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default PageNavigation;
