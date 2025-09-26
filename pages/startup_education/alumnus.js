import React from 'react';
import Link from 'next/link'
import styles from '../../public/assets/styles/startup_education/startup_education.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";
import {Menu} from "antd";
import AcaHistory from '../../component/startup_education/AcaHistory';
import ForumHistory from '../../component/startup_education/ForumHistory';
import Head from "next/head";
const {SubMenu} = Menu;

const cx = classnames.bind(styles);
const Alumnus = () => {
    return (
        <>
            <Head>
                <title>한양대학교 창업지원단 -동문 대상</title>
            </Head>
            <PageNavigation/>
        <section className={cx("container", "alumnus")}>
            <div className={cx("sub_cont", "sub_cont_top")}>
                <h1 className={cx("sub_top_title")}>동문 대상</h1>
                <p className={cx("sub_top_txt")}>한양 동문 및 일반 예비창업자를 적극적으로 발굴, 육성 사업화 과정을 지원</p>
            </div>

            <div className={cx("gray_bg", "teacherCont")}>
                <div className={cx("sub_cont")}>
                    <div className={cx("txt_style_1")}>
                        <div className={cx("left_title")}>
                            <h1 className={cx("title_style_3")}>한양스타트업아카데미</h1>
                            <div>
                                <Link href="https://startup.hanyang.ac.kr/board/notice/view/3817?boardName=notice"><a className={cx("basic-btn03","btn-blue-bg")}>최근 모집공고 보기</a></Link>
                            </div>
                        </div>
                        <div className={cx("txtArea")}>
                            <p className={cx("txt_1")}>
                                한양대학교가 운영하는 CEO 양성 프로젝트 핵심 프로그램으로 한양 동문 및 일반 예비창업자를 적극적으로 발굴, 육성하여 성공적인 창업과 사업화 과정을
                                지원합니다​
                            </p>
                            <div className={cx("list_style_1")}>
                                <ul>
                                    <li>
                                        <span className={cx("title")}>모집대상 </span>
                                        한양대학교 · 한양여자대학교 · 한양사이버대학교 재·휴 학생, 졸업 동문 등 예비 초기 창업자 대상​<br/>
                                        ※ 한양대 재학생에 한해 수료 시 3학점 절대평가 인정
                                    </li>
                                    <li>
                                        <span className={cx("title")}>일정</span>
                                        매년 하반기 (14주 과정)
                                    </li>
                                    <li>
                                        <span className={cx("title")}>세부내용 </span>
                                        기업가정신 창업 아이템 발굴 창업경영 세무 특허 법률 비즈니스 모델, 마케팅, 자금조달 투자유치 등의 창업에 대한 입문 / 핵심 / 심화교육
                                        전문가 멘토링 등
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx("sub_cont", "alumnusCont_1")}>
                <div className={cx("txt_style_1")}>
                    <div className={cx("left_title")}>
                        <h1 className={cx("title_style_2")}>교육과정</h1>
                    </div>
                    <div className={cx("txtArea")}>
                        <ul>
                            <li>
                                <span className={cx("title")}>기본 과정 (1~8주차)</span>
                                <ul>
                                    <li>- 오리엔테이션 및 교육생 창업아이템 소개</li>
                                    <li>- 스타트업 기본 지식 강의</li>
                                </ul>
                            </li>
                            <li>
                                <span className={cx("title")}>실전마케팅 과정 (9~10주차)</span>
                                <ul>
                                    <li>- 마케팅 판로개척 강의</li>
                                    <li>- 디지털 마케팅 전략, SNS 마케팅</li>
                                </ul>
                            </li>
                            <li>
                                <span className={cx("title")}>투자유치 과정 (11~14주차)</span>
                                <ul>
                                    <li>- 정부 정책 자금 조달 및 활용법</li>
                                    <li>- 자금조달과 투자유치, 데모데이, 네트워킹 데이</li>
                                </ul>
                            </li>
                            <li>
                                <span className={cx("title")}>네트워킹 데이</span>
                                <ul>
                                    <li>- 교육생 간 정보 교류 및 역량 강화를 위한 실습교육, 네트워킹 프로그램 등 진행</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={cx("sub_cont", "alumnusCont_2")}>
                <div className={cx("txt_style_1")}>
                    <div className={cx("left_title")}>
                        <h1 className={cx("title_style_2")}>교육혜택</h1>
                    </div>
                    <div className={cx("txtArea")}>
                        <ul>
                            <li>ㆍ 한양대학교 총장 명의 수료증 발급</li>
                            <li>ㆍ 데모데이 우수팀, 한양대 기술지주회사 투자 연계 기회 제공</li>
                            <li>ㆍ 특허‧법률‧회계 등 창업전문분야 100명 내외 멘토링 연계</li>
                            <li>ㆍ 한양스타트업아카데미 원우회 네트워킹 지원</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={cx("sub_cont", "alumnusCont_3")}>
                <div className={cx("txt_style_1")}>
                    <div className={cx("left_title")}>
                        <h1 className={cx("title_style_2")}>선발 과정 및 기준</h1>
                    </div>
                    <div className={cx("txtArea")}>

                        <img src="/assets/image/alumnus_step.jpg" alt=""/>
                    </div>
                </div>
            </div>

            <div className={cx("sub_cont", "alumnusCont_2")}>
                <div className={cx("txt_style_1")}>
                    <div className={cx("left_title")}>
                        <h1 className={cx("title_style_2")}>평가기준</h1>
                    </div>
                    <div className={cx("txtArea")}>
                        <ul>
                            <li>기업가정신 및 창업실행의지, 실현가능성, 아이템 우수성 및 시장성, 교육참여의지 등</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={cx("sub_cont", "alumnusCont_5")}>
                <div className={cx("txt_style_1")}>
                    <div className={cx("left_title")}>
                        <h1 className={cx("title_style_2")}>활동 모습</h1>
                    </div>
                    <div className={cx("txtArea")}>
                        <ul>
                            <li>
                                <div className={cx("img_area")}><img src="/assets/image/alumnus_img_17.jpg" alt=""/></div>
                            </li>
                            <li>
                                <div className={cx("img_area")}><img src="/assets/image/alumnus_img_18.jpg" alt=""/></div>
                            </li>
                            <li>
                                <div className={cx("img_area")}><img src="/assets/image/alumnus_img_19.jpg" alt=""/></div>
                            </li>
                            <li>
                                <div className={cx("img_area")}><img src="/assets/image/alumnus_img_20.jpg" alt=""/></div>
                            </li>
                            <li>
                                <div className={cx("img_area")}><img src="/assets/image/alumnus_img_21_1.jpg" alt=""/></div>
                            </li>
                            <li>
                                <div className={cx("img_area")}><img src="/assets/image/alumnus_img_21_2.jpg" alt=""/></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={cx("sub_cont", "alumnusCont_6")}>
                <div className={cx("txt_style_1")}>
                    <div className={cx("left_title")}>
                        <h1 className={cx("title_style_2")}>History&amp;원우회</h1>
                        <span>화살표를 누르면 표를 확인하실 수 있습니다.</span>
                    </div>
                    <div className={cx("txtArea")}>
                        <div className={cx("qa_list")}>
                            <Menu
                                mode="inline"
                                selectable={false}
                                style={{height: '100%', borderRight: 'none'}}
                            >
                                <SubMenu key="sub1" className={cx("dropdown_title")} title={<div className={cx("question")}>한양스타트업아카데미 HISTORY</div>}>
                                    <Menu.Item key="0" className={cx("dropdown_content")} style={{height: 'auto'}} >
                                        <AcaHistory cx={cx}/>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" className={cx("dropdown_title")} title={<div className={cx("question")}>한양스타트업아카데미 원우회</div>}>
                                    <Menu.Item key="1" className={cx("dropdown_content")}
                                               style={{height: 'auto', padding: 10}}>
                                                <div className={cx("answer")}>
                                                    <p className={cx("txt_1")} style={{fontSize:18,color:"#222"}}>
                                                        한양 스타트업 아카데미 수료생이 중심이 되어 원우회가 운영되고 있습니다. <br/>
                                                        2019년 기준 770여명의 원우회원이 활동 중입니다.
                                                    </p>
                                                    <div className={cx("txt_c mb_30")}>

                                                        <img src="/assets/image/alumnus_organization.jpg" alt=""/>
                                                    </div>
                                                    <h2 className={cx("title_style_4")}>원우회 운영진 명단(2020년)</h2>
                                                    <table>
                                                        <colgroup>

                                                            <col style={{width:"33.33%"}}/>
                                                            <col style={{width:"33.33%"}}/>
                                                            <col style={{width:"33.33%"}}/>
                                                        </colgroup>
                                                        <thead>
                                                        <tr>
                                                            <th scope="col">운영위원회 직위</th>
                                                            <th scope="col">기수</th>
                                                            <th scope="col">성명</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>회장</td>
                                                            <td>1기</td>
                                                            <td>조상용</td>
                                                        </tr>
                                                        <tr>
                                                            <td>고문</td>
                                                            <td>3기</td>
                                                            <td>유해정</td>
                                                        </tr>
                                                        <tr>
                                                            <td>부회장</td>
                                                            <td>8기</td>
                                                            <td>정혜영</td>
                                                        </tr>
                                                        <tr>
                                                            <td>부회장</td>
                                                            <td>3기</td>
                                                            <td>방장혁</td>
                                                        </tr>
                                                        <tr>
                                                            <td>사무총장</td>
                                                            <td>1기</td>
                                                            <td>한성원</td>
                                                        </tr>
                                                        <tr>
                                                            <td>사무차장</td>
                                                            <td>12기</td>
                                                            <td>김하영</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>

                                                    <h2 className={cx("title_style_4")}>연간활동사항</h2>
                                                    <ul className={cx("list_1")}>
                                                        <li>- 한양 스타트업 아카데미 교육생 네트워킹, 멘토링 등 지원</li>
                                                        <li>- 한양 스타트업 포럼 운영(연 4회)</li>
                                                        <li>- 정부지원사업 설명회</li>
                                                        <li>- 원우회 조직 구성</li>
                                                        <li>- 원우회 자체 세미나, 체육활동 등</li>
                                                        <li>- 원우 기업 성과조사</li>
                                                        <li>- 기타 원우회 활동</li>
                                                    </ul>
                                                </div>
                                    </Menu.Item>
                                </SubMenu>
                            </Menu>

                            {/*<ul>*/}
                            {/*    <li>*/}
                            {/*        <div className={cx("question")}>*/}
                            {/*            한양스타트업아카데미 HISTORY*/}
                            {/*        </div>*/}
                            {/*        <div className={cx("answer")}>*/}

                            {/*        </div>*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <div className={cx("question")}>*/}
                            {/*            한양스타트업아카데미 원우회*/}
                            {/*        </div>*/}
                            {/*        <div className={cx("answer")}>*/}
                            {/*            <p className={cx("txt_1")}>*/}
                            {/*                한양 스타트업 아카데미 수료생이 중심이 되어원우회가 운영되고있습니다. <br/>*/}
                            {/*                2019년기준 770여명의 원우회원이 활동중입니다.*/}
                            {/*            </p>*/}
                            {/*            <div className={cx("txt_c mb_30")}>*/}

                            {/*                <img src="/assets/image/alumnus_organization.jpg" alt=""/>*/}
                            {/*            </div>*/}
                            {/*            <h2 className={cx("title_style_4")}>원우회운영진명단(2020년)</h2>*/}
                            {/*            <table>*/}
                            {/*                <colgroup>*/}

                            {/*                    <col style={{width:"33.33%"}}/>*/}
                            {/*                    <col style={{width:"33.33%"}}/>*/}
                            {/*                    <col style={{width:"33.33%"}}/>*/}
                            {/*                </colgroup>*/}
                            {/*                <thead>*/}
                            {/*                <tr>*/}
                            {/*                    <th scope="col">운영위원회 직위</th>*/}
                            {/*                    <th scope="col">기수</th>*/}
                            {/*                    <th scope="col">성명</th>*/}
                            {/*                </tr>*/}
                            {/*                </thead>*/}
                            {/*                <tbody>*/}
                            {/*                <tr>*/}
                            {/*                    <td>회장</td>*/}
                            {/*                    <td>1기</td>*/}
                            {/*                    <td>조상용</td>*/}
                            {/*                </tr>*/}
                            {/*                <tr>*/}
                            {/*                    <td>고문</td>*/}
                            {/*                    <td>1기</td>*/}
                            {/*                    <td>조상용</td>*/}
                            {/*                </tr>*/}
                            {/*                <tr>*/}
                            {/*                    <td>고문</td>*/}
                            {/*                    <td>1기</td>*/}
                            {/*                    <td>조상용</td>*/}
                            {/*                </tr>*/}
                            {/*                <tr>*/}
                            {/*                    <td>고문</td>*/}
                            {/*                    <td>1기</td>*/}
                            {/*                    <td>조상용</td>*/}
                            {/*                </tr>*/}
                            {/*                <tr>*/}
                            {/*                    <td>고문</td>*/}
                            {/*                    <td>1기</td>*/}
                            {/*                    <td>조상용</td>*/}
                            {/*                </tr>*/}
                            {/*                <tr>*/}
                            {/*                    <td>고문</td>*/}
                            {/*                    <td>1기</td>*/}
                            {/*                    <td>조상용</td>*/}
                            {/*                </tr>*/}
                            {/*                </tbody>*/}
                            {/*            </table>*/}

                            {/*            <h2 className={cx("title_style_4")}>연간활동사항</h2>*/}
                            {/*            <ul className={cx("list_1")}>*/}
                            {/*                <li>- 한양스타트업아카데미교육생네트워킹, 멘토링등지원</li>*/}
                            {/*                <li>- 한양스타트업포럼운영(연4회)</li>*/}
                            {/*                <li>- 정부지원사업설명회</li>*/}
                            {/*                <li>- 원우회조직구성</li>*/}
                            {/*                <li>- 원우회자체세미나, 체육활동등</li>*/}
                            {/*                <li>- 원우기업성과조사</li>*/}
                            {/*                <li>- 기타원우회활동</li>*/}
                            {/*            </ul>*/}
                            {/*        </div>*/}
                            {/*    </li>*/}
                            {/*</ul>*/}
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx("sub_cont", "alumnusCont_1")}>
                <div className={cx("txt_style_1")}>
                    <div className={cx("left_title")}>
                        <h1 className={cx("title_style_2")}>한양스타트업포럼</h1>
                    </div>
                    <div className={cx("txtArea")}>
                        <p className={cx("txt_1")}>
                            한양스타트업포럼은 선배기업인, 교수, 예비창업자가 함께 참여하는 이슈 중심의 세미나로 기업간 협업 촉진을 위한 교류 및 지식 공유의 장을 제공합니다.
                        </p>
                        <div className={cx("list_style_1")}>
                            <ul>
                                <li>
                                    <span className={cx("title")}>모집대상 </span>
                                    한양스타트업아카데미 수료생 및 차기 교육생 후보군 100여명 (온라인 참여는 누구나 가능)
                                </li>
                                <li>
                                    <span className={cx("title")}>일정</span>
                                    연 2회 분기별 개최
                                </li>
                            </ul>
                            <div className={cx("qa_list")}>
                                <Menu
                                    mode="inline"
                                    selectable={false}
                                    style={{height: '100%', borderRight: 'none'}}
                                >
                                    <SubMenu key="sub3" className={cx("dropdown_title")} title={<div className={cx("question")}>한양스타트업포럼 HISTORY</div>}>
                                        <Menu.Item key="2" className={cx("dropdown_content")} style={{height: 'auto',padding:0}}>
                                            <ForumHistory cx={cx}/>
                                        </Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${cx("sub_cont","university_studentCont_4")} pb_50 `}>
                <div className={cx("txt_style_1")}>
                    <div className={cx("left_title")}>
                        <h1 className={cx("title_style_2")}>문의</h1>
                    </div>
                    <div className={cx("txtArea")}>
                        <ul className={cx("info")}>
                            <li>Tel. 02-2220-2866</li>
                            <li>E-mail. startup@hanyang.ac.kr</li>
                        </ul>
                        <span className={cx("kakao")}>카카오톡채널. 한양스타트업톡톡 </span>
                    </div>
                </div>
            </div>

        </section>
            </>
    );
};

export default Alumnus;
