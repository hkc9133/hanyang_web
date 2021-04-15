import React, {useEffect, useState} from 'react';
import Image from "next/image";
import styles from '../../public/assets/styles/startup_h/startup_h.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {
    getBestStartupList,
    getStartupPresent,
    initialize,
    initializeForm
} from "../../store/startupPresent/startupPresent";
import wrapper from "../../store/configureStore";
import client from "../../lib/api/client";
import {END} from "redux-saga";
import {FileImageOutlined} from "@ant-design/icons";
import Modal from "../../component/common/Modal";
import Link from 'next/link';
import {HomeOutlined} from '@ant-design/icons';
import Head from "next/head";

const cx = classnames.bind(styles);

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    const cookie = context.req && context.req.headers.cookie ? context.req.headers.cookie : '';
    client.defaults.headers.Cookie = cookie;

    context.store.dispatch(getBestStartupList());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
})

const BestStartup = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const {bestStartupList, bestStartup} = useSelector(({startupPresent, loading}) => ({
        bestStartupList: startupPresent.getBestStartupList,
        bestStartup: startupPresent.getStartupPresent,
    }))

    const [showStartupDetail, setShowStartupDetail] = useState(false);

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

        return () => {
            dispatch(initialize())
        }

    }, [])

    useEffect(() => {

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

    const handleDetailModal = (startupId) => {
        if (!showStartupDetail) {
            dispatch(getStartupPresent(startupId))
            setShowStartupDetail(!showStartupDetail);
        } else {
            dispatch(initializeForm('getStartupPresent'))
            setShowStartupDetail(!showStartupDetail);
        }

    }
    return (
        <>
            <Head>
                <title>한양대학교 창업지원단 -우수 스타트업</title>
            </Head>
            <PageNavigation/>
            <section className={cx("sub_container", "best_startup")}>
                <h1 className={cx("sub_top_title")}>우수스타트업</h1>
                <p className={cx("sub_top_txt")}>한양대학교 우수 스타트업을 소개합니다.</p>


                <div className={cx("best_startup_list")}>
                    <div className={cx("box")}>
                        <div className={cx("title_area")}>
                            <h2>학생<span className={cx("txt_2")}>창업기업</span></h2>
                            {/*<span className={cx("txt_1")}>학생 창업기업</span>*/}
                            <span className={cx("number")}><strong>287</strong>개(’10~’20)</span>
                        </div>

                        <div className={cx("logo_list")}>
                            <ul>
                                {best.st.map((item) => (
                                    <li key={item.startupId} onClick={() => {
                                        handleDetailModal(item.startupId)
                                    }}>
                                        <div className={cx("logo")}>
                                            {item.attachFile != null ? <img
                                                src={`${client.defaults.baseURL}/resource${item.attachFile.filePath}/${item.attachFile.fileName + item.attachFile.fileExtension}`}
                                                width={38} height={38} alt={"LOGO"}/> : (
                                                <FileImageOutlined style={{fontSize: 33, verticalAlign: 'middle'}}/>
                                            )}
                                        </div>
                                        <span className={cx("name")}>{item.companyName}</span>
                                        <br/>
                                        <span className={cx("item")}>{item.item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={cx("box")}>
                        <div className={cx("title_area")}>
                            <h2>동문<span className={cx("txt_2")}>창업기업</span></h2>
                            {/*<span className={cx("txt_1")}>(스타트업아카테미)
                            </span>*/}
                            <span className={cx("number")}><strong>428</strong>개(’12~’20)</span>
                        </div>

                        <div className={cx("logo_list")}>
                            <ul>
                                {best.al.map((item) => (
                                    <li key={item.startupId} onClick={() => {
                                        handleDetailModal(item.startupId)
                                    }}>
                                        <div className={cx("logo")}>
                                            {item.attachFile != null ? <img
                                                src={`${client.defaults.baseURL}/resource${item.attachFile.filePath}/${item.attachFile.fileName + item.attachFile.fileExtension}`}
                                                width={38} height={38} alt={"LOGO"}/> : (
                                                <FileImageOutlined style={{fontSize: 33, verticalAlign: 'middle'}}/>
                                            )}
                                        </div>
                                        <span className={cx("name")}>{item.companyName}</span>
                                        <br/>
                                        <span className={cx("item")}>{item.item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={cx("box")}>
                        <div className={cx("title_area")}>
                            <h2>교원<span className={cx("txt_2")}>창업기업</span></h2>
                {/*            <span className={cx("txt_1")}>*/}
				{/*	<br/>교원 창업기업*/}
				{/*</span>*/}
                            <span className={cx("number")}><strong>49</strong>개(’00~’20)</span>
                        </div>

                        <div className={cx("logo_list")}>
                            <ul>
                                {best.tc.map((item) => (
                                    <li key={item.startupId} onClick={() => {
                                        handleDetailModal(item.startupId)
                                    }}>
                                        <div className={cx("logo")}>
                                            {item.attachFile != null ? <img
                                                src={`${client.defaults.baseURL}/resource${item.attachFile.filePath}/${item.attachFile.fileName + item.attachFile.fileExtension}`}
                                                width={38} height={38} alt={"LOGO"}/> : (
                                                <FileImageOutlined style={{fontSize: 33, verticalAlign: 'middle'}}/>
                                            )}
                                        </div>
                                        <span className={cx("name")}>{item.companyName}</span>
                                        <br/>
                                        <span className={cx("item")}>{item.item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={cx("box")}>
                        <div className={cx("title_area")}>
                            <h2>일반인<span className={cx("txt_2")}>창업기업</span></h2>
                {/*            <span className={cx("txt_1")}>*/}
				{/*	<br/>일반인 창업기업*/}
				{/*</span>*/}
                            <span className={cx("number")}><strong>216</strong>개(‘17~’20)</span>
                        </div>

                        <div className={cx("logo_list")}>
                            <ul>
                                {best.gn.map((item) => (
                                    <li key={item.startupId} onClick={() => {
                                        handleDetailModal(item.startupId)
                                    }}>
                                        <div className={cx("logo")}>
                                            {item.attachFile != null ? <img
                                                src={`${client.defaults.baseURL}/resource${item.attachFile.filePath}/${item.attachFile.fileName + item.attachFile.fileExtension}`}
                                                width={38} height={38} alt={"LOGO"}/> : (
                                                <FileImageOutlined style={{fontSize: 33, verticalAlign: 'middle'}}/>
                                            )}
                                        </div>
                                        <span className={cx("name")}>{item.companyName}</span>
                                        <br/>
                                        <span className={cx("item")}>{item.item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={cx("btn_box")}>
                        <Link href={"/startup_h/startup_present"}><a className={cx("btn-01")}>스타트업 더보기</a></Link>
                    </div>
                </div>
                <Modal visible={showStartupDetail} closable={true} maskClosable={true}
                       onClose={() => handleDetailModal(null)} cx={cx} className={cx("startup_popup")}>
                    {bestStartup != null ? (
                        <div className={cx("inner")}>
                            <div className={cx("logo")}>
                                {bestStartup.attachFile != null ? <img
                                    src={`${client.defaults.baseURL}/resource${bestStartup.attachFile.filePath}/${bestStartup.attachFile.fileName + bestStartup.attachFile.fileExtension}`}
                                    width={120} height={120} alt={"LOGO"}/> : (
                                    <FileImageOutlined style={{fontSize: 170, verticalAlign: 'middle'}}/>
                                )}
                            </div>
                            <div className={cx("content")}>
                                <strong>{bestStartup.companyName}</strong>
                                <h3>기업 정보</h3>
                                <ul className={cx("company_info")}>
                                    <li>대표자명 : {bestStartup.companyOwner}</li>
                                    <li>홈페이지 : {bestStartup.homepage != "" && bestStartup.homepage != null &&
                                    <a href={bestStartup.homepage} target="_blank"><HomeOutlined
                                        style={{fontSize: 20, verticalAlign: 'top'}}/></a>}</li>
                                    <li className={cx("sns_list")}>SNS :
                                        {bestStartup.insta != null && bestStartup.insta != "" &&
                                        <a href={bestStartup.insta} target="_blank"><Image
                                            src="/assets/image/startup_insta.png" width={25} height={25}
                                            alt="sns_logo"/></a>}
                                        {bestStartup.facebook != null && bestStartup.facebook != "" &&
                                        <a href={bestStartup.facebook} target="_blank"><Image
                                            src="/assets/image/startup_facebook.png" width={25} height={25}
                                            alt="sns_logo"/></a>}
                                        {bestStartup.naverBlog != null && bestStartup.naverBlog != "" &&
                                        <a href={bestStartup.naverBlog} target="_blank"><Image
                                            src="/assets/image/startup_naver_blog.png" width={25} height={25}
                                            alt="sns_logo"/></a>}
                                        {bestStartup.twitter != null && bestStartup.twitter != "" &&
                                        <a href={bestStartup.twitter} target="_blank"><Image
                                            src="/assets/image/startup_twitter.png" width={25} height={25}
                                            alt="sns_logo"/></a>}
                                    </li>
                                    <li>비즈니스 분야 : {bestStartup.businessFieldList.map((field, i) => (
                                        `${field.businessName} ${i != bestStartup.businessFieldList.length - 1 ? '|' : ''} `
                                    ))}
                                    </li>
                                    <li>활용 기술 : {bestStartup.techFieldList.map((field, i) => (
                                        `${field.techName} ${i != bestStartup.techFieldList.length - 1 ? '|' : ''} `
                                    ))}</li>
                                </ul>
                            </div>
                            <div className={cx("item")}>
                                <h3>사업 아이템</h3>
                                <p>{bestStartup.item}</p>
                            </div>
                        </div>
                    ) : <div style={{height: 200}}>loading....</div>}
                </Modal>
            </section>
        </>
    );
};

export default BestStartup;
