import React from 'react';
import PageNavigation from "../../component/layout/PageNavigation";
import Link from 'next/link'
import Image from "next/image";
import styles from '../../public/assets/styles/startup_education/startup_education.module.css';
import classnames from "classnames/bind"


const cx = classnames.bind(styles);

const People = () => {
    return (
        <>
            <PageNavigation/>
            <section className={cx("sub_container","peopleCont")}>
                <h1 className={cx("sub_top_title")}>일반인대상 창업교육</h1>
                <p className={cx("sub_top_txt")}>창업과 관련된 다양한 회원서비스를 이용하실 수 있습니다.</p>

                <div className={cx("tab_style_3")}>
                    <ul className={"clfx"}>
                        <li className={cx("on")}>
                            <a href="#">
                                <div className={cx("inner")}>
                                    <strong>스타트업 Learn</strong>
                                    <span>창업을 시작하는 일반인을 위한 <br/>엑셀러레이팅 프로그램</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={cx("inner")}>
                                    <strong>스타트업 Make</strong>
                                    <span>창업을 시작하는 일반인을 위한 <br/>엑셀러레이팅 프로그램</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={cx("inner")}>
                                    <strong>스타트업 Launch</strong>
                                    <span>창업을 시작하는 일반인을 위한 <br/>엑셀러레이팅 프로그램</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={cx("gallery_list")}>
                    <ul>
                        <li>
                            <div className={cx("img_area")}>
                                <a href="#">
                                    <Image src="/assets/image/gallery_list.jpg"layout={"fill"} alt="gallery_list"/>
                                </a>
                            </div>
                            <div className={cx("txt_area")}>
                                <Link href="#"><a>린스타트업</a></Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx("img_area")}>
                                <a href="#">
                                    <Image src="/assets/image/gallery_list.jpg"layout={"fill"} alt="gallery_list"/>
                                </a>
                            </div>
                            <div className={cx("txt_area")}>
                                <Link href="#"><a>린스타트업</a></Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx("img_area")}>
                                <a href="#">
                                    <Image src="/assets/image/gallery_list.jpg"layout={"fill"} alt="gallery_list"/>
                                </a>
                            </div>
                            <div className={cx("txt_area")}>
                                <Link href="#"><a>린스타트업</a></Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx("img_area")}>
                                <a href="#">
                                    <Image src="/assets/image/gallery_list.jpg"layout={"fill"} alt="gallery_list"/>
                                </a>
                            </div>
                            <div className={cx("txt_area")}>
                                <Link href="#"><a>린스타트업</a></Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx("img_area")}>
                                <a href="#">
                                    <Image src="/assets/image/gallery_list.jpg"layout={"fill"} alt="gallery_list"/>
                                </a>
                            </div>
                            <div className={cx("txt_area")}>
                                <Link href="#"><a>린스타트업</a></Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx("img_area")}>
                                <a href="#">
                                    <Image src="/assets/image/gallery_list.jpg"layout={"fill"} alt="gallery_list"/>
                                </a>
                            </div>
                            <div className={cx("txt_area")}>
                                <Link href="#"><a>린스타트업</a></Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx("img_area")}>
                                <a href="#">
                                    <Image src="/assets/image/gallery_list.jpg"layout={"fill"} alt="gallery_list"/>
                                </a>
                            </div>
                            <div className={cx("txt_area")}>
                                <Link href="#"><a>린스타트업</a></Link>
                            </div>
                        </li>
                        <li>
                            <div className={cx("img_area")}>
                                <a href="#">
                                    <Image src="/assets/image/gallery_list.jpg"layout={"fill"} alt="gallery_list"/>
                                </a>
                            </div>
                            <div className={cx("txt_area")}>
                                <Link href="#"><a>린스타트업</a></Link>
                            </div>
                        </li>
                        <li className={cx("list_more")}>
                            <a href="#">
                                <span>더보기</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

        </>
    );
};

export default People;
