import React from 'react';
import Link from 'next/link'
import styles from '../../public/assets/styles/startup_h/startup_h.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";

const cx = classnames.bind(styles);
const StartupPresent = () => {
    return (
        <>
            <section className={cx("sub_container","startup_emissions")}>
                <h1 className={cx("sub_top_title")}>스타트업배출현황</h1>
                <p className={cx("sub_top_txt")}>한양대학교는 창업기업은 3939개 기업과 함께하고 있습니다. <br/>검색 버튼을 활용하면 한양대학교와 함께하는 창업기업들을 모두 확인 할
                    수 있습니다. </p>

                <div className={cx("search_type_2")}>
                    <select name="" id="" className={cx("long")}>
                        <option value="#">학생창업기업</option>
                    </select>
                    <select name="" id="">
                        <option value="#">IT</option>
                    </select>
                    <select name="" id="">
                        <option value="#">2020</option>
                    </select>
                    <input type="text" placeholder="검색어를 입력하세요."/>
                    <button type="button" className={cx("btn_search")}>검색</button>
                </div>

                <div className={cx("txt_r mb_20")}>
                    <button type="button" className={cx("icon_plus")} onClick="popup_open('.startup_emissions_popup');">추가</button>
                    <Link href="#"><a className={cx("icon_setting")}>설정</a></Link>
                </div>

                <div className={cx("bbs_tb_list")}>
                    <table>
                        <colgroup>
                            <col style={{width:"10%"}}/>
                            <col style={{width:"14.3%"}}/>
                            <col style={{width:"16.3%"}}/>
                            <col style={{width:"15.15%"}}/>
                            <col/>
                            <col style={{width:"18%"}}/>
                        </colgroup>
                        <thead>
                        <tr>
                            <th scope="col">NO</th>
                            <th scope="col">기업명</th>
                            <th scope="col">아이템 소개</th>
                            <th scope="col">키워드</th>
                            <th scope="col">홈페이지</th>
                            <th scope="col">관련기사</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>20</td>
                            <td>창업닷컴</td>
                            <td>재무∙회계</td>
                            <td>스마트팜</td>
                            <td>www.changup.com</td>
                            <td><Link href="#"><a>버즈분석</a></Link></td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>창업닷컴</td>
                            <td>재무∙회계</td>
                            <td>스마트팜</td>
                            <td>www.changup.com</td>
                            <td><Link href="#"><a>버즈분석</a></Link></td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>창업닷컴</td>
                            <td>재무∙회계</td>
                            <td>스마트팜</td>
                            <td>www.changup.com</td>
                            <td><Link href="#"><a>버즈분석</a></Link></td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>창업닷컴</td>
                            <td>재무∙회계</td>
                            <td>스마트팜</td>
                            <td>www.changup.com</td>
                            <td><Link href="#"><a>버즈분석</a></Link></td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>창업닷컴</td>
                            <td>재무∙회계</td>
                            <td>스마트팜</td>
                            <td>www.changup.com</td>
                            <td><Link href="#"><a>버즈분석</a></Link></td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>창업닷컴</td>
                            <td>재무∙회계</td>
                            <td>스마트팜</td>
                            <td>www.changup.com</td>
                            <td><Link href="#"><a>버즈분석</a></Link></td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>창업닷컴</td>
                            <td>재무∙회계</td>
                            <td>스마트팜</td>
                            <td>www.changup.com</td>
                            <td><Link href="#"><a>버즈분석</a></Link></td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>창업닷컴</td>
                            <td>재무∙회계</td>
                            <td>스마트팜</td>
                            <td>www.changup.com</td>
                            <td><Link href="#"><a>버즈분석</a></Link></td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>창업닷컴</td>
                            <td>재무∙회계</td>
                            <td>스마트팜</td>
                            <td>www.changup.com</td>
                            <td><Link href="#"><a>버즈분석</a></Link></td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>창업닷컴</td>
                            <td>재무∙회계</td>
                            <td>스마트팜</td>
                            <td>www.changup.com</td>
                            <td><Link href="#"><a>버즈분석</a></Link></td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className={cx("paging")}>
                    <Link href="#"><a><img src="/assets/image/page_prev.gif" alt=""/></a></Link>
                    <Link href="#" className={cx("on")}><a>1</a></Link>
                    <Link href="#"><a>2</a></Link>
                    <Link href="#"><a>3</a></Link>
                    <Link href="#"><a>4</a></Link>
                    <Link href="#"><a>5</a></Link>
                    <Link href="#"><a><img src="/assets/image/page_next.gif" alt=""/></a></Link>
                </div>
            </section>

        </>
    );
};

export default StartupPresent;
