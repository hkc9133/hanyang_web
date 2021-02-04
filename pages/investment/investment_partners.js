import React from 'react';
import Link from 'next/link';
import styles from '../../public/assets/styles/investment/investment.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";

const cx = classnames.bind(styles);

const InvestmentPartners = () => {
    return (
        <>
            <PageNavigation/>
        <section className={cx("sub_container","irWrap")}>
            <h1 className={cx("sub_top_title")}>국내외 투자파트너스</h1>
            <p className={cx("sub_top_txt")}>
                국내외 VC 및 액셀러레이터와 협업하여 유망 창업기업을 지원합니다.
            </p>

            <div className={cx("search_type_2")}>
                <select name="" id="" className={cx("long")}>
                    <option value="#">국가/지역</option>
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

            <div className={cx("area_list")}>
                <ul>
                    <li className={cx("on")}><Link href="#"><a><span>KOREA</span></a></Link></li>
                    <li><Link href="#"><a><span>ASIA</span></a></Link></li>
                    <li><Link href="#"><a><span>AMERICAS</span></a></Link></li>
                    <li><Link href="#"><a><span>EUROPE</span></a></Link></li>
                    <li><Link href="#"><a><span>MIDDLE EAST <br/>&amp; AFRICA</span></a></Link></li>
                    <li><Link href="#"><a><span>OCEANIA</span></a></Link></li>
                </ul>
            </div>

            <div className={cx("bbs_tb_list")}>
                <table>
                    <colgroup>
                        <col style={{width:"11.7%"}}/>
                        <col style={{width:"18.18%"}}/>
                        <col style={{width:"24.24.%"}}/>
                        <col style={{width:"12.12%"}}/>
                        <col/>
                    </colgroup>
                    <thead>
                    <tr>
                        <th scope="col">구분</th>
                        <th scope="col">기관명</th>
                        <th scope="col">홈페이지</th>
                        <th scope="col">국가/지역</th>
                        <th scope="col">분야</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>ASIA</td>
                        <td>Taiwan Accelerator</td>
                        <td>www.TaiwanAccelerator.com</td>
                        <td>대만</td>
                        <td>Smart City, Manufacturing, Mobility, AI</td>
                    </tr>
                    <tr>
                        <td>ASIA</td>
                        <td>Taiwan Accelerator</td>
                        <td>www.TaiwanAccelerator.com</td>
                        <td>대만</td>
                        <td>Smart City, Manufacturing, Mobility, AI</td>
                    </tr>
                    <tr>
                        <td>ASIA</td>
                        <td>Taiwan Accelerator</td>
                        <td>www.TaiwanAccelerator.com</td>
                        <td>대만</td>
                        <td>Smart City, Manufacturing, Mobility, AI</td>
                    </tr>
                    <tr>
                        <td>ASIA</td>
                        <td>Taiwan Accelerator</td>
                        <td>www.TaiwanAccelerator.com</td>
                        <td>대만</td>
                        <td>Smart City, Manufacturing, Mobility, AI</td>
                    </tr>
                    <tr>
                        <td>ASIA</td>
                        <td>Taiwan Accelerator</td>
                        <td>www.TaiwanAccelerator.com</td>
                        <td>대만</td>
                        <td>Smart City, Manufacturing, Mobility, AI</td>
                    </tr>
                    <tr>
                        <td>ASIA</td>
                        <td>Taiwan Accelerator</td>
                        <td>www.TaiwanAccelerator.com</td>
                        <td>대만</td>
                        <td>Smart City, Manufacturing, Mobility, AI</td>
                    </tr>
                    <tr>
                        <td>ASIA</td>
                        <td>Taiwan Accelerator</td>
                        <td>www.TaiwanAccelerator.com</td>
                        <td>대만</td>
                        <td>Smart City, Manufacturing, Mobility, AI</td>
                    </tr>
                    <tr>
                        <td>ASIA</td>
                        <td>Taiwan Accelerator</td>
                        <td>www.TaiwanAccelerator.com</td>
                        <td>대만</td>
                        <td>Smart City, Manufacturing, Mobility, AI</td>
                    </tr>
                    <tr>
                        <td>ASIA</td>
                        <td>Taiwan Accelerator</td>
                        <td>www.TaiwanAccelerator.com</td>
                        <td>대만</td>
                        <td>Smart City, Manufacturing, Mobility, AI</td>
                    </tr>
                    <tr>
                        <td>ASIA</td>
                        <td>Taiwan Accelerator</td>
                        <td>www.TaiwanAccelerator.com</td>
                        <td>대만</td>
                        <td>Smart City, Manufacturing, Mobility, AI</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className={"paging"}>
                <Link href="#"><a><img src="/public/assets/image/page_prev.gif" alt=""/></a></Link>
                <Link href="#" className={cx("on")}><a>1</a></Link>
                <Link href="#"><a>2</a></Link>
                <Link href="#"><a>3</a></Link>
                <Link href="#"><a>4</a></Link>
                <Link href="#"><a>5</a></Link>
                <Link href="#"><a><img src="/public/assets/image/page_next.gif" alt=""/></a></Link>
            </div>
        </section>
            </>
    );
};

export default InvestmentPartners;
