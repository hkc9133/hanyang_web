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
                <Link href="https://www.hanyang.ac.kr/"><a>한양대학교</a></Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="http://research.hanyang.ac.kr/"><a>산학협력단</a></Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="http://hyuholdings.com/html/"><a>기술지주회사</a></Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="http://cbi.hanyang.ac.kr/"><a>창업보육센터</a></Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="http://hmcc.hanyang.ac.kr/main/main.php"><a>공동기기원</a></Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="http://fablab.hanyang.ac.kr/"><a>휴온스팹랩</a></Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="http://lincplus.hanyang.ac.kr/"><a>LINC+사업단</a></Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="https://hywep.hanyang.ac.kr/index.do"><a>현장실습지원센터</a></Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="http://entrepreneurship.hanyang.ac.kr/"><a>대학원 창업융합학과</a></Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="http://ericaresearch.hanyang.ac.kr/"><a>에리카 산학협력단</a></Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="http://eec.hanyang.ac.kr/"><a>에리카 창업교육센터</a></Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="http://hbi.hanyang.ac.kr/"><a>에리카 창업보육센터</a></Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="https://www.hycu.ac.kr/user/index.do"><a>한양사이버대학교</a></Link>
            </Menu.Item>
        </Menu>
    );

    return (
        <section className={cx("footer_wrap")}>
            <div className={cx("footer_inner")}>
                <div className={cx("footer")}>

                    <div className={cx("footer_right")}>
                        <div className={cx("footer_sns")}>
                            <ul>
                                <li><Link href="https://blog.naver.com/hyustartup"><a target="_blank"><Image src="/assets/image/sns_icon_1.gif" width={24} height={24}  alt="naver_icon"/></a></Link></li>
                                <li><Link href="https://www.facebook.com/startuphanyang"><a target="_blank"><Image src="/assets/image/sns_icon_2.gif"  width={24} height={24} alt="facebook_icon"/></a></Link></li>
                                <li><Link href="https://www.youtube.com/c/%ED%95%9C%EC%96%91%EB%8C%80%ED%95%99%EA%B5%90%EC%B0%BD%EC%97%85%EC%A7%80%EC%9B%90%EB%8B%A8"><a target="_blank"><Image src="/assets/image/sns_icon_3.gif"  width={24} height={24} alt="google_icon"/></a></Link></li>
                                {/*<li><Link href="/"><a><Image src="/assets/image/sns_icon_4.gif"  width={24} height={24} alt="kakao_icon"/></a></Link></li>*/}
                                <li>
                                    <Link href="https://kr.linkedin.com/company/hanyang-institute-for-entrepreneurship">
                                        <a target="_blank">
                                            <Image src="/assets/image/sns_icon_4.gif" width={24} height={24} alt="linkedin icon" />
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx("footer_logo")}><Image src="/assets/image/footer_logo.png"  width={238} height={38} alt="한양대학교 창업지원단"/></div>
                    <div className={cx("footer_cont")}>
                        <p>Hanyang Institute for Entrepreneurship (HIE)</p>
                        <address>222, Wangsimni-ro, Seongdong-gu, Seoul, 04763, Korea</address>
                        <p className={cx("copyright")}>&copy; 2021. Hanyang Institute for Entrepreneurship, Hanyang University. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Footer);
