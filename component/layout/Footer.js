import React from 'react';
import styles from '../../public/assets/styles/footer/footer.module.css';
import classnames from "classnames/bind"
import Link from "next/link";
import Image from 'next/image'
import {useSelector} from "react-redux";
import {Dropdown, Menu} from "antd";

const cx = classnames.bind(styles);

const Footer = () => {
    const {mediaList} = useSelector(({main, loading}) => ({
        mediaList: main.getMediaList
    }))

    // const menu = (
    //     <Menu>
    //         <Menu.Item>
    //             <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
    //                 1st menu item
    //             </a>
    //         </Menu.Item>
    //         <Menu.Item>
    //             <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
    //                 2nd menu item
    //             </a>
    //         </Menu.Item>
    //         <Menu.Item>
    //             <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
    //                 3rd menu item
    //             </a>
    //         </Menu.Item>
    //     </Menu>
    // );
    const siteList = (
        <Menu>
            <Menu.Item>
                <li><Link href="https://www.hanyang.ac.kr/"><a>한양대학교</a></Link></li>
            </Menu.Item>
            <Menu.Item>
                <li><Link href="http://research.hanyang.ac.kr/"><a>산학협력단</a></Link></li>
            </Menu.Item>
            <Menu.Item>
                <li><Link href="http://hyuholdings.com/html/"><a>기술지주회사</a></Link></li>
            </Menu.Item>
            <Menu.Item>
                <li><Link href="http://cbi.hanyang.ac.kr/"><a>창업보육센터</a></Link></li>
            </Menu.Item>
            <Menu.Item>
                <li><Link href="http://hmcc.hanyang.ac.kr/main/main.php"><a>공동기기원</a></Link></li>
            </Menu.Item>
            <Menu.Item>
                <li><Link href="http://fablab.hanyang.ac.kr/"><a>휴온스팹랩</a></Link></li>
            </Menu.Item>
            <Menu.Item>
                <li><Link href="http://lincplus.hanyang.ac.kr/"><a>LINC+사업단</a></Link></li>
            </Menu.Item>
            <Menu.Item>
                <li><Link href="https://hywep.hanyang.ac.kr/index.do"><a>현장실습지원센터</a></Link></li>
            </Menu.Item>
            <Menu.Item>
                <li><Link href="http://ericaresearch.hanyang.ac.kr/"><a>에리카 산학협력단</a></Link></li>
            </Menu.Item>
            <Menu.Item>
                <li><Link href="http://eec.hanyang.ac.kr/"><a>에리카 창업교육센터</a></Link></li>
            </Menu.Item>
            <Menu.Item>
                <li><Link href="http://hbi.hanyang.ac.kr/"><a>에리카 창업보육센터</a></Link></li>
            </Menu.Item>
            <Menu.Item>
                <li><Link href="https://www.hycu.ac.kr/user/index.do"><a>한양사이버대학교</a></Link></li>
            </Menu.Item>
        </Menu>
    );

    return (
        <section className={cx("footer_wrap")}>
            <div className={cx("footer_top")}>
                <div className={cx("footer","clfx")}>
                    <div className={cx("cs_center")}>
                        <h1>원스톱 창업상담실</h1>
                        <div className={cx("tel")}>02-2220-3000</div>
                    </div>
                    <div className={cx("business_hours")}>
                        <ul>
                            <li>
                                상담시간(월~금)&nbsp; 10:00-17:00
                            </li>
                            <li>
                                주말·공휴일 제외
                            </li>
                            <li>
                                E-mail&nbsp;&nbsp;startup@hanyang.ac.kr
                            </li>
                        </ul>
                    </div>
                    <div className={cx("footer_link")}>
                        <ul className={cx("clfx")}>
                            <li className={cx("icon_1")}><Link href="/board/faq/list"><a>FAQ</a></Link></li>
                            {/*<li className={cx("icon_2")}><Link href="/board/qna/list"><a>Q&amp;A</a></Link></li>*/}
                            <li className={cx("icon_3")}><Link href="https://pf.kakao.com/_fWsJd/chat"><a target="_blank">1:1문의</a></Link></li>
                            <li className={cx("icon_4")}><Link href="/board/data_room/list"><a>자료실</a></Link></li>
                        </ul>
                    </div>
                    <div className={cx("footer_notice")}>
                        <h1>언론보도</h1>
                        <ul>
                            {mediaList.map( (item,index) =>
                                index < 3 && <li key={item.contentId}><Link href={item.sub01}><a>{item.title}</a></Link></li>

                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx("footer_menu")}>
                <div className={cx("footer")}>
                    <ul>
                        <li><Link href="/privacy_policy"><a><strong>개인정보처리방침</strong></a></Link></li>
                        <li><Link href="/terms"><a>이용약관</a></Link></li>
                        <li><Link href="/email_policy"><a>이메일 주소무단 수집거부</a></Link></li>
                    </ul>
                </div>
            </div>
            <div className={cx("footer_inner")}>
                <div className={cx("footer")}>

                    <div className={cx("footer_right")}>
                        <div className={cx("footer_family_site")}>
                            <Dropdown overlay={siteList} placement="topCenter">
                                <button type="button" className={cx("open_footer_family_site")}>사이트 바로가기</button>
                            </Dropdown>
                        </div>
                        <div className={cx("footer_sns")}>
                            <ul>
                                <li><Link href="https://blog.naver.com/hyustartup"><a target="_blank"><Image src="/assets/image/sns_icon_1.gif" width={24} height={24}  alt="naver_icon"/></a></Link></li>
                                <li><Link href="https://www.facebook.com/startuphanyang"><a target="_blank"><Image src="/assets/image/sns_icon_2.gif"  width={24} height={24} alt="facebook_icon"/></a></Link></li>
                                <li><Link href="https://www.youtube.com/c/%ED%95%9C%EC%96%91%EB%8C%80%ED%95%99%EA%B5%90%EC%B0%BD%EC%97%85%EC%A7%80%EC%9B%90%EB%8B%A8"><a target="_blank"><Image src="/assets/image/sns_icon_3.gif"  width={24} height={24} alt="google_icon"/></a></Link></li>
                                <li><Link href="/"><a><Image src="/assets/image/sns_icon_4.gif"  width={24} height={24} alt="kakao_icon"/></a></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx("footer_logo")}><Image src="/assets/image/footer_logo.png"  width={238} height={38} alt="한양대학교 창업지원단"/></div>
                    <div className={cx("footer_cont")}>
                        <p>홈페이지 책임자: 구태용/ 관리자(담당자): 장상길</p>
                        <address>(04763) 서울특별시 성동구 왕십리로 222 한양대학교 HIT 103호</address>
                        <p className={cx("copyright")}>&copy; 2021. Startup Support Foundation, Hanyang University. All rights
                            reserved.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Footer);
