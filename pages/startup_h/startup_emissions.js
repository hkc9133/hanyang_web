import React from 'react';

import styles from '../../public/assets/styles/startup_h/startup_h.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";

const cx = classnames.bind(styles);

const StartupEmissions = () => {
    return (
        <>
            <PageNavigation/>
        <section className={cx("sub_container","startup_graph")}>
            <h1 className={cx("sub_top_title")}>스타트업배출현황</h1>
            <p className={cx("sub_top_txt")}>스타트업 배출현황을 한 눈에 볼 수 있는 그래프입니다.</p>

            <div className={"clfx"}>
                <div className={cx("startup_graph_left")}>
                    <div className={cx("search_type_3")}>
                        <select name="" id="">
                            <option value="#">사회</option>
                        </select>
                        <select name="" id="">
                            <option value="#">경제</option>
                        </select>
                        <button type="button" className={cx("btn_search")}>검색</button>
                    </div>
                    <div className={cx("graph_1")}>
                        <img src="/assets/image/startup_emissions_graph1.jpg" alt=""/>
                    </div>
                    <div className={cx("graph_2")}>
                        <img src="/assets/image/startup_emissions_graph2.jpg" alt=""/>
                    </div>
                    <div className={cx("graph_3")}>
                        <img src="/assets/image/startup_emissions_graph3.jpg" alt=""/>
                    </div>
                </div>

                <div className={cx("startup_graph_right")}>
                    <h2>삼성전자</h2>
                    <div className={cx("graph_4")}>
                        <img src="/assets/image/startup_emissions_graph4.jpg" alt=""/>
                    </div>
                    <div className={cx("graph_5")}>
                        <img src="/assets/image/startup_emissions_graph5.jpg" alt=""/>
                    </div>
                    <div className={cx("list")}>
                        <ul>
                            <li>
                                <div className={cx("title")}>임원인사 마친 삼성전자, 내년 사업전략 위해 머리 맞댄다</div>
                                <div className={cx("txt")}>
                                    올해는 신종 코로나바이러스 감염증(코로나19)으로 인해 온라인을 통한 회의 진행이 확실시되는 가운데 글로벌 불확실성을 극복하고 핵심 사업의 초격차 유지
                                    방안을 마련하기 위해 머리를 맞댈 것으로 보인다.
                                </div>
                            </li>
                            <li>
                                <div className={cx("title")}>임원인사 마친 삼성전자, 내년 사업전략 위해 머리 맞댄다</div>
                                <div className={cx("txt")}>
                                    올해는 신종 코로나바이러스 감염증(코로나19)으로 인해 온라인을 통한 회의 진행이 확실시되는 가운데 글로벌 불확실성을 극복하고 핵심 사업의 초격차 유지
                                    방안을 마련하기 위해 머리를 맞댈 것으로 보인다.
                                </div>
                            </li>
                            <li>
                                <div className={cx("title")}>임원인사 마친 삼성전자, 내년 사업전략 위해 머리 맞댄다</div>
                                <div className={cx("txt")}>
                                    올해는 신종 코로나바이러스 감염증(코로나19)으로 인해 온라인을 통한 회의 진행이 확실시되는 가운데 글로벌 불확실성을 극복하고 핵심 사업의 초격차 유지
                                    방안을 마련하기 위해 머리를 맞댈 것으로 보인다.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
            </>
    );
};

export default StartupEmissions;
