import React, {useEffect, useState} from 'react';
import Image from "next/image";
import styles from '../../public/assets/styles/startup_h/startup_h.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {getBestStartupList, initialize} from "../../store/startupPresent/startupPresent";

const cx = classnames.bind(styles);
const BestStartup = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const {bestStartupList} = useSelector(({startupPresent, loading}) => ({
        bestStartupList: startupPresent.getBestStartupList,
    }))

    const [best, setBest] = useState({
        st: [],
        tc: [],
        al: [],
        gn: [],
    });
    const [startupCount, setStartupCount] = useState({
        st: 0,
        tc: 0,
        al: 0,
        gn: 0,
    });

    useEffect(() => {
        dispatch(getBestStartupList())

        return () => {
            dispatch(initialize())
        }

    }, [])

    useEffect(() => {

        console.log(bestStartupList)
        let list = {
            st: [],
            al: [],
            tc: [],
            gn: [],
        }

        let countList = {
            st: 0,
            al: 0,
            tc: 0,
            gn: 0,
        }

        bestStartupList.list.forEach((item, index) => {
            switch (item.gubun) {
                case "학생":
                    list.st.push(item)
                    break;
                case "동문":
                    list.al.push(item)
                    break;
                case "교원":
                    list.tc.push(item)
                    break;
                case "일반인":
                    list.gn.push(item)
                    break;
            }
        })

        bestStartupList.count.forEach((item, index) => {
            console.log(item)
            switch (item.gubun) {
                case "학생":
                    countList.st = item.count
                    break;
                case "동문":
                    countList.al = item.count
                    break;
                case "교원":
                    countList.tc = item.count
                    break;
                case "일반인":
                    countList.gn = item.count
                    break;
            }
        })

        setBest(list)
        setStartupCount(countList)

    }, [bestStartupList])
    return (
        <>
            <PageNavigation/>
            <section className={cx("sub_container", "best_startup")}>
                <h1 className={cx("sub_top_title")}>우수스타트업</h1>
                <p className={cx("sub_top_txt")}>한양대학교는 창업기업은 3939개 기업과 함께하고 있습니다. <br/>검색 버튼을 활용하면 한양대학교와 함께하는 창업기업들을
                    모두 확인
                    할 수
                    있습니다.</p>

                {/*<div className={cx("search_type_2")}>*/}
                {/*    <select name="" id="" className={cx("long")}>*/}
                {/*        <option value="#">학생창업기업</option>*/}
                {/*    </select>*/}
                {/*    <select name="" id="">*/}
                {/*        <option value="#">IT</option>*/}
                {/*    </select>*/}
                {/*    <select name="" id="">*/}
                {/*        <option value="#">2020</option>*/}
                {/*    </select>*/}
                {/*    <input type="text" placeholder="검색어를 입력하세요."/>*/}
                {/*    <button type="button" className={cx("btn_search")}>검색</button>*/}
                {/*</div>*/}

                {/*<div className={cx("graph_area")}>*/}
                {/*    <Image src="/assets/image/best_startup_graph.jpg" width={1318} height={288} alt="best_startup_graph"/>*/}
                {/*</div>*/}

                <div className={cx("best_startup_list")}>
                    <div className={cx("box")}>
                        <div className={cx("title_area")}>
                            <h2>학생 창업기업</h2>
                            <span className={cx("txt_1")}>
					한양대학교 배출 <br/>학생 창업기업
				</span>
                            <span className={cx("number")}><strong>{startupCount.st}</strong>개</span>
                        </div>

                        {/*<div className={cx("info")}>*/}
                        {/*    <ul>*/}
                        {/*        <li>매출액 382억원</li>*/}
                        {/*        <li>고용인원 382명</li>*/}
                        {/*        <li>투자유치 392억원</li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}

                        <div className={cx("logo_list")}>
                            <ul>
                                {best.st.map((item) => (
                                    <li key={item.startupId}>
                                        <div className={cx("logo")}>
                                            <img src="/assets/image/best_startup_logo1.jpg" alt=""/>
                                        </div>
                                        <span className={cx("name")}>{item.companyName}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={cx("box")}>
                        <div className={cx("title_area")}>
                            <h2>동문 창업기업</h2>
                            <span className={cx("txt_1")}>
					한양대학교 배출 <br/>동문 창업기업
				</span>
                            <span className={cx("number")}><strong>{startupCount.al}</strong>개</span>
                        </div>

                        {/*<div className={cx("info")}>*/}
                        {/*    <ul>*/}
                        {/*        <li>매출액 382억원</li>*/}
                        {/*        <li>고용인원 382명</li>*/}
                        {/*        <li>투자유치 392억원</li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}

                        <div className={cx("logo_list")}>
                            <ul>
                                {best.al.map((item) => (
                                    <li key={item.startupId}>
                                        <div className={cx("logo")}>
                                            <img src="/assets/image/best_startup_logo1.jpg" alt=""/>
                                        </div>
                                        <span className={cx("name")}>{item.companyName}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={cx("box")}>
                        <div className={cx("title_area")}>
                            <h2>교원 창업기업</h2>
                            <span className={cx("txt_1")}>
					한양대학교 배출 <br/>교원 창업기업
				</span>
                            <span className={cx("number")}><strong>{startupCount.tc}</strong>개</span>
                        </div>

                        <div className={cx("logo_list")}>
                            <ul>
                                {best.tc.map((item) =>(
                                    <li key={item.startupId}>
                                        <div className={cx("logo")}>
                                            <img src="/assets/image/best_startup_logo1.jpg" alt=""/>
                                        </div>
                                        <span className={cx("name")}>{item.companyName}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={cx("box")}>
                        <div className={cx("title_area")}>
                            <h2>일반인 창업기업</h2>
                            <span className={cx("txt_1")}>
					한양대학교 배출 <br/>일반인 창업기업
				</span>
                            <span className={cx("number")}><strong>{startupCount.gn}</strong>개</span>
                        </div>

                        <div className={cx("logo_list")}>
                            <ul>
                                {best.gn.map((item) =>(
                                    <li key={item.startupId}>
                                        <div className={cx("logo")}>
                                            <img src="/assets/image/best_startup_logo1.jpg" alt=""/>
                                        </div>
                                        <span className={cx("name")}>{item.companyName}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default BestStartup;
