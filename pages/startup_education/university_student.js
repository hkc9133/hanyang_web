import React, {useEffect, useState} from 'react';
import PageNavigation from "../../component/layout/PageNavigation";
import Link from 'next/link'
import Image from "next/image";
import styles from '../../public/assets/styles/startup_education/startup_education.module.css';
import classnames from "classnames/bind"
import {Menu, Dropdown} from 'antd';
import Edu2030 from '../../component/startup_education/Edu2030';
import Edu2024 from '../../component/startup_education/Edu2024';
import Edu1619 from '../../component/startup_education/Edu1619';
import {
    isMobile
} from "react-device-detect";
import {baseUrl} from "../../lib/api/client";
import Head from "next/head";

const {SubMenu} = Menu;


const cx = classnames.bind(styles);

const UniversityStudent = () => {

    const [tabNum, setTabNum] = useState(0)
    const [showScore, setShowScore] = useState(false)

    useEffect(() => {

    }, [tabNum])
    return (
        <>
            <Head>
                <title>한양대학교 창업지원단 -대학(원)생 대상</title>
            </Head>
            <PageNavigation/>
            <section className={cx("university_student")}>
                <div className={cx("sub_cont", "sub_cont_top")}>
                    <h1 className={cx("sub_top_title")}>대학(원)생 대상</h1>
                    <p className={cx("sub_top_txt")}>창의적융합인재 양성을 위하여 체계적인 창업교육 커리큘럼을 운영</p>

                    <div className={cx("tab_style_2")}>
                        <ul>
                            <li className={cx("on")}><a href="#hakbu_1">학부 정규교과</a></li>
                            <li><a href="#hakbu_2">학부 창업융합전공</a></li>
                            <li><a href="#hakbu_3">대학원 정규교과</a></li>
                        </ul>
                    </div>
                </div>

                <div className={cx("gray_bg", "university_studentCont_1")} id="hakbu_1">
                    <div className={cx("sub_cont")}>
                        <h1 className={cx("title_style_3")}>학부 정규교과</h1>
                        <p>
                            한양대학교는 기업가정신을 지닌 창의적융합인재 양성을 위하여 체계적인 창업교육 커리큘럼을 운영하고 있습니다. <br/>창업융합전공 미신청 학생도 교양으로 강의를 수강할
                            수 있습니다. (일부 강좌 제외)
                        </p>
                        <div className={cx("university_student_step")}>
                            <ul className={"clfx"}>
                                <li>
                                    <Image src="/assets/image/university_student_icon_1.jpg" width={186} height={186}
                                           alt="university_student_icon_1"/>
                                    <span>기업가정신 함양</span>
                                    <br/>
                                </li>
                                <li>
                                    <Image src="/assets/image/university_student_icon_2.jpg" width={186} height={186}
                                           alt="university_student_icon_2"/>
                                    <span>사업 아이디어 구상</span>
                                    <br/>
                                </li>
                                <li>
                                    <Image src="/assets/image/university_student_icon_3.jpg" width={186} height={186}
                                           alt="university_student_icon_3"/>
                                    <span>초기 사업모델 구축</span>
                                    <br/>
                                </li>
                                <li>
                                    <Image src="/assets/image/university_student_icon_4.jpg" width={186} height={186}
                                           alt="university_student_icon_4"/>
                                    <span>창업 역량 강화<br/>실전 창업 준비</span>
                                </li>
                                <li>
                                    <Image src="/assets/image/university_student_icon_5.jpg" width={186} height={186}
                                           alt="university_student_icon_5"/>
                                    <span>창업실행</span>
                                    <br/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={cx("sub_cont", "university_studentCont_2")}>
                    <div className={cx("txt_style_1")}>
                        <div className={cx("left_title")}>
                            <h1 className={cx("title_style_2")}><strong>운영강좌</strong></h1>
                            <p>화살표를 누르면 표를 확인하실 수 있습니다.</p>
                        </div>
                        <div className={cx("txtArea")}>
                            <div className={cx("qa_list")}>
                                <Menu
                                    mode="inline"
                                    selectable={false}
                                    style={{height: '100%', borderRight: 'none'}}
                                >
                                    <SubMenu key="sub1" className={cx("dropdown_title")}
                                             title={<div className={cx("question")}>1학기 운영강좌</div>}>
                                        <Menu.Item key="0" className={cx("dropdown_content")} style={{height: 'auto'}}>
                                            <img src={"/assets/image/poster/university_student_class_1.jpg"} alt="1학기 운영강좌" />
                                        </Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub2" className={cx("dropdown_title")}
                                             title={<div className={cx("question")}>2학기 운영강좌</div>}>
                                        <Menu.Item key="1" className={cx("dropdown_content")}
                                                   style={{height: 'auto', padding: 10}}>
                                            <img src={"/assets/image/poster/university_student_class_2.jpg"} alt="2학기 운영강좌"/>
                                        </Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <div className={cx("txt_style_1")}>
                        <div className={cx("left_title")}>
                            <h1 className={cx("title_style_2")}>나에게 맞는 창업강좌는? <br/>창업강좌 추천 <strong>Roadmap</strong></h1>
                            <p>화살표를 누르면 표를 확인하실 수 있습니다.</p>
                        </div>
                        <div className={cx("txtArea")}>
                            <div className={cx("qa_list")}>
                                <Menu
                                    mode="inline"
                                    selectable={false}
                                    style={{height: '100%', borderRight: 'none'}}
                                >
                                    {/*<SubMenu key="sub3" className={cx("dropdown_title")}*/}
                                    {/*         title={<div className={cx("question")}>2016년~2019년 교육과정</div>}>*/}
                                    {/*    <Menu.Item key="2" className={cx("dropdown_content")}*/}
                                    {/*               style={{height: 'auto', padding: 10}}>*/}
                                    {/*        /!*<Edu1619 cx={cx}/>*!/*/}
                                    {/*        <img src={"/assets/image/university_student_class_3.jpg"}/>*/}
                                    {/*        <img src={"/assets/image/university_student_class_4.jpg"}/>*/}
                                    {/*    </Menu.Item>*/}
                                    {/*</SubMenu>*/}
                                    <SubMenu key="sub4" className={cx("dropdown_title")}
                                             title={<div className={cx("question")}>2020년~2023년 교육과정</div>}>
                                        <Menu.Item key="3" className={cx("dropdown_content")}
                                                   style={{height: 'auto', padding: 10}}>
                                            {/*<Edu2030 cx={cx}/>*/}
                                            <img src={"/assets/image/university_student_class_5.png"} alt="2020년~2023년 교육과정"/>
                                        </Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub5" className={cx("dropdown_title")}
                                             title={<div className={cx("question")}>2024년~2027년 교육과정</div>}>
                                        <Menu.Item key="5" className={cx("dropdown_content")}
                                                   style={{height: 'auto', padding: 10}}>
                                            <img src={"/assets/image/university_student_class_6.png"} alt="2024년~2027년 교육과정"/>
                                        </Menu.Item>
                                    </SubMenu>
                                </Menu>
                                <p>교양으로 창업강좌를 수강하는 학생들은 가장 최근 교육과정의 로드맵을, 융합전공생은 본인에게 해당하는 교육과정표를 확인해주세요.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx("gray_bg", "university_studentCont_3")} id="hakbu_2">
                    <div className={cx("sub_cont")}>
                        <div className={cx("txt_style_1")}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_3")}><strong>학부 창업융합전공</strong></h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <div className={cx("list_style_1")}>
                                    <ul>
                                        <li>
                                            <span className={cx("title")}>목적</span>
                                            주전공의 전문성에 창업교육 커리큘럼을 접목하여 전문성을 갖춘 창의융합 인재 양성
                                        </li>
                                        <li>
                                            <span className={cx("title")}>수여학위</span>
                                            벤처창업학사(제2전공)
                                        </li>
                                        <li>
                                            <span className={cx("title")}>신청대상 </span>
                                            창업에 관심있는 학생(학부성적 제한없음) <br/>
                                            1학년 2학기(1학기 이상 성적유효) 이상의 서울캠퍼스 재학생
                                        </li>
                                        <li>
                                            <span className={cx("title")}>이수학점</span>
                                            <a onClick={(e) => {
                                                e.preventDefault();
                                                setShowScore(!showScore)
                                            }}>이수학점 보기</a>
                                            <br/>
                                            {showScore && (
                                                <div>
                                                    <br/>
                                                    {/*<p>[2016~2019 교육과정 적용]</p>*/}
                                                    {/*<p>- 제 2전공 : 전공핵심 21학점, 전공심화 6학점 포함하여 전공과목 36학점 이상 이수<br/>*/}
                                                    {/*    - 부전공 : 전공핵심 12학점 포함하여 전공과목 21학점 이상 이수</p>*/}
                                                    {/*<br/>*/}
                                                    {/*<p>[2020~2023 교육과정 적용]</p>*/}
                                                    <p>- 제 2전공 : 200~300단위 21학점, 400단위 6학점, 자율선택 9학점 전체 36학점 이상 이수<br/>
                                                        - 부전공 : 200~300단위 12학점, 자율선택 9학점, 전체 21학점 이상 이수</p>
                                                </div>
                                            )}
                                        </li>
                                        <li>
                                            <span className={cx("title")}>신청기간</span>
                                            5월, 11월
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx("sub_cont", "university_studentCont_4")}>
                    <div className={cx("txt_style_1")}>
                        <div className={cx("left_title")}>
                            <h1 className={cx("title_style_2")}>신청방법</h1>
                        </div>
                        <div className={cx("txtArea")}>
                            {isMobile ?
                                <Image src="/assets/image/university_student_img_mo.jpg" width={375} height={394}
                                       alt="university_student_img"/> :
                                <Image src="/assets/image/university_student_img.jpg" width={920} height={394}
                                       alt="university_student_img"/>}
                        </div>
                        <span className={cx("f-16", "c-blue")}>※ 자기소개서 다운로드
                            <Link href={`${baseUrl}/hwp/양식_자기소개서_창업융합전공.hwp`}><a target="_blank" style={{marginLeft: 8}} download>
                                <Image
                                src="/assets/image/icon_download.gif" width={22} height={26} alt="다운로드"/></a></Link>
                        </span>
                    </div>

                    <div className={cx("txt_style_1")}>
                        <div className={cx("left_title")}>
                            <h1 className={cx("title_style_2")}>교육과정표</h1>
                        </div>
                        <div className={cx("txtArea")}>
                            <p>
                                융합전공교육과정(2016-2019 또는 2020-2023) 확인 후 <br/>본인에게 해당하는 교육과정표를 확인해주세요.
                                <span className={cx("f-16", "c-blue")}>* 교육과정 계산식: 융합전공신청연도–신청학년+ 1</span>
                            </p>

                            <h2 className={cx("title_style_4")}>교육과정표 확인 시 주의사항</h2>
                            <ul className={cx("list_style_2")}>
                                <li><span className={cx("number")}>1)</span> 교육과정표의 이수구분은 창업융합전공을 다중전공, 부전공으로 이수하는 학생에게만
                                    해당합니다.
                                </li>
                                <li><span className={cx("number")}>2)</span> 해당 학기 개설 강좌 목록은 페이지 상단 ‘개설강좌 현황’ 표를 참고하시기
                                    바랍니다.
                                </li>
                                <li><span className={cx("number")}>3)</span> 타 단과 대관장수업은 해당 학과의 전공생 수강신청 진행 후 여석이 있는 경우에
                                    수강신청이
                                    가능합니다.
                                </li>
                                <li><span className={cx("number")}>4)</span> 장기창업 현장실습은 최대 15학점까지 인정되며 창업융합전공 전공심화 학점으로는
                                    최대
                                    9학점까지 인정됩니다. <br/>(학점은 주전공 학부에서 심사)
                                </li>
                                <li><span className={cx("number")}>5)</span> 단기창업현장실습은 창업융합전공 전공심화 학점으로 3학점까지 이수 가능합니다.
                                </li>
                                {/*<li><span className={cx("number")}>6)</span> 창업대체학점제도의 일환인 장/단기창업 현장실습과 창업실습:스타트랙1 강좌를 통해
                                    최대18학점까지 이수 가능합니다.
    </li>*/}
                            </ul>
                        </div>
                    </div>

                    <div className={cx("txt_style_1")}>
                        <div className={cx("left_title")}>
                            {/*<h1 className={cx("title_style_2")}>교육과정표</h1>*/}
                        </div>
                        <div className={cx("qa_list")} style={{marginBottom: 15}}>
                            <Menu
                                mode="inline"
                                selectable={false}
                                style={{height: '100%', borderRight: 'none'}}
                            >
                                {/*<SubMenu key="sub2" className={cx("dropdown_title")}*/}
                                {/*         title={<div className={cx("question")}>2016년~2019년 교육과정</div>}>*/}
                                {/*    <Menu.Item key="2" className={cx("dropdown_content")}*/}
                                {/*               style={{height: 'auto', padding: 10}}>*/}
                                {/*        <Edu1619 cx={cx}/>*/}
                                {/*    </Menu.Item>*/}
                                {/*</SubMenu>*/}
                                <SubMenu key="sub1" className={cx("dropdown_title")}
                                         title={<div className={cx("question")}>2020년~2023년 교육과정</div>}>
                                    <Menu.Item key="1" className={cx("dropdown_content")}
                                               style={{height: 'auto', padding: 10}}>
                                        <Edu2030 cx={cx}/>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" className={cx("dropdown_title")}
                                         title={<div className={cx("question")}>2024년~2027년 교육과정</div>}>
                                    <Menu.Item key="2" className={cx("dropdown_content")}
                                               style={{height: 'auto', padding: 10}}>
                                        <Edu2024 cx={cx}/>
                                    </Menu.Item>
                                </SubMenu>
                            </Menu>
                        </div>
                    </div>

                    <div className={cx("txt_style_1")}>
                        <div className={cx("left_title")}>
                            <h1 className={cx("title_style_2")}>문의</h1>
                        </div>
                        <div className={cx("txtArea")}>
                            <ul className={cx("info")}>
                                <li>Tel. 02-2220-2533</li>
                                <li>E-mail. startup@hanyang.ac.kr</li>
                            </ul>
                            <span className={cx("kakao")}>카카오톡채널. 한양스타트업톡톡 </span>
                        </div>
                    </div>
                </div>


                <div className={cx("gray_bg", "university_studentCont_4")} id="hakbu_2">
                    {/*<div className={cx("university_studentCont_4")} id="hakbu_2">*/}
                    <div className={cx("sub_cont")}>
                        <div className={cx("txt_style_1")}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_3")}><strong>학부 4차산업혁명창업<br/><br/> 마이크로전공</strong></h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <div className={cx("list_style_1")}>
                                    <ul>
                                        <li>
                                            <span className={cx("title")}>목적</span>
                                            미래 산업 분야의 핵심 기술을 선도할 수 있는 창의융합 인재 양성
                                        </li>
                                        <li>
                                            <span className={cx("title")}>수여학위</span>
                                            부여되지않음(성적증명서에만 표시)
                                        </li>
                                        <li>
                                            <span className={cx("title")}>신청대상 </span>
                                            창업에 관심있는 서울캠퍼스 재학생(학년, 학부성적 제한없음)
                                        </li>
                                        <li>
                                            <span className={cx("title")}>이수학점</span>
                                            12학점
                                        </li>
                                        <li>
                                            <span className={cx("title")}>신청기간</span>
                                            5월, 11월
                                        </li>
                                    </ul>
                                    {/*<span className={cx("f-16", "c-blue")}>※ 운영 및 신청방법 매뉴얼 참고<Link
                                        href={`${baseUrl}/pdf/2021_1_마이크로전공_운영_및_학생신청_매뉴얼.pdf`}><a
                                        style={{marginLeft: 8}} target="_blank" download><Image
                                        src="/assets/image/icon_download.gif" width={22} height={26}
                                        alt="다운로드"/></a></Link></span>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx("gray_bg")} id="hakbu_3">
                    <div className={cx("sub_cont", "university_studentCont_5")}>
                        <div className={cx("txt_style_1")}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_3")}><strong>창업대학원 정규교과</strong></h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <div className={cx("grad_cont")}>
                                    <h3><strong>D.A.R.E.</strong> to be Better, <strong>D.A.R.E.</strong> to be Different</h3>
                                    <p>
                                        "창업대학원의 교육과정은 세계 최고 수준의 프로그램으로 구성되어 있으며, <br/>
                                        기술경영, 인공지능, 공학, 관광 등의 다른 대학원과 공동으로 추가 교육 커리큘럼을 제공합니다."
                                    </p>
                                </div>
                                <div className={cx("grad_list")}>
                                    <ul>
                                        <li>
                                            <h3>· <strong>D</strong>igital Powered (디지털 기술 한양대)</h3>
                                            <p>창업대학원 프로그램은 by the Digital, of the Digital and For the Digital입니다.</p>
                                        </li>
                                        <li>
                                            <h3>· <strong>A</strong>ction Oriented (실전기반, 경험기반)</h3>
                                            <p>한양대 창업대학원은 Experiential Education 철학에 기반한 실전기반의 대학원입니다.</p>
                                        </li>
                                        <li>
                                            <h3>· <strong>R</strong>esource and Resilience (회복 탄력성)</h3>
                                            <p>한양대 창업대학원은 회복탄력성의 확보에 모든 역량을 집중합니다.</p>
                                        </li>
                                        <li>
                                            <h3>· <strong>E</strong>ntrepreneurial Mindset (기업가 정신)</h3>
                                            <p>한양대 창업대학원과 기업가정신은 동치입니다.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx("sub_cont", "university_studentCont_6")}>
                    <div className={cx("tab_style_1", "tabTitle")}>
                        <ul>
                            {/*<li className={cx("on")} onClick={() =>{console.log("1")}}><Link href=""><a><span>기업가 역량 개발</span></a></Link></li>*/}
                            <li className={cx({on: tabNum == 0})} onClick={() => {
                                setTabNum(0)
                            }}>
                                <button><span>Digital Powered</span></button>
                            </li>
                            <li className={cx({on: tabNum == 1})} onClick={() => {
                                setTabNum(1)
                            }}>
                                <button><span>Action Oriented</span></button>
                            </li>
                            <li className={cx({on: tabNum == 2})} onClick={() => {
                                setTabNum(2)
                            }}>
                                <button><span>Resource and Resilience</span></button>
                            </li>
                            <li className={cx({on: tabNum == 3})} onClick={() => {
                                setTabNum(3)
                            }}>
                                <button><span>Entrepreneurial Mindset</span></button>
                            </li>
                        </ul>
                    </div>

                    <div className={cx("tabCont")}>

                        <div className={`${cx({show: tabNum == 0})} txt_style_1 `}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_2")}>Digital Powered</h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <ul>
                                    <li>
                                        <h2 className={cx("title_style_4")}>스타트업 프로그래밍</h2>
                                        <p>
                                            파이썬 등 스타트업의 운영 및 가치제안의 개발에 필요한 프로그래밍의 실무지식 함양
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>AI와 비즈니스</h2>
                                        <p>
                                            인공지능시대의 스타트업의 비즈니스 모델에 대한 개념적 이해 및 개발사례 분석
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>스타트업을 위한 기술 트랜드</h2>
                                        <p>
                                            다양한 첨단기술의 현재와 미래, 그리고 사회 트랜드에 대해 이해하고, 토론하여 스타트업의 전략적 방향을 도출
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>기술사업화</h2>
                                        <p>
                                            기술기반의 창업프로세스를 이해하고 기술의 사업화 과정에 대한 이론적, 실무적 접근을 학습
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>디지털혁신</h2>
                                        <p>
                                            디지털 기술을 기반으로한 다양한 혁신모델들을 이해
                                        </p>
                                    </li>
                                </ul>
                                <div className={cx("btn_area")} style={{textAlign: 'center'}}>
                                    <a href="http://entrepreneurship.hanyang.ac.kr/" className={cx("btn_more")}
                                       target="_blank">자세히 알아보기</a>
                                </div>
                            </div>
                        </div>

                        <div className={`${cx({show: tabNum == 1})} txt_style_1 `}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_2")}>Action Oriented</h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <ul>
                                    <li>
                                        <h2 className={cx("title_style_4")}>스타트업 프랙티컴</h2>
                                        <p>
                                            창업활동 중인 기업의 현안문제를 다양한 전문가의 멘토링을 통해 문제 해결
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>스타트업 인턴쉽</h2>
                                        <p>
                                            스타트업에 인턴십의 형태로 근무하면서 실전적 지식을 함양
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>비즈니스모델과 평가</h2>
                                        <p>
                                            비즈니스모델의 이론적 접근과 실전적 개발 및 사업적 평가모델에 대한 이해
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>디자인씽킹과 린스타업</h2>
                                        <p>
                                            디자인 씽킹에 기반한 창의적, 발산적 아이디에이션과 린스타트업 프로세스를 연계
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>스타트업 시뮬레이션</h2>
                                        <p>
                                            창업기업의 다양한 의사결정과정을 게임 시뮬레이션 방법을 통해 체험하고, 실전역량배양
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>글로벌 스타트업 실무</h2>
                                        <p>
                                            글로벌 스타트업이 되기위한 여러가지 실무적 지식의 함양
                                        </p>
                                    </li>
                                </ul>
                                <div className={cx("btn_area")} style={{textAlign: 'center'}}>
                                    <a href="http://entrepreneurship.hanyang.ac.kr/" className={cx("btn_more")}
                                       target="_blank">자세히 알아보기</a>
                                </div>
                            </div>
                        </div>

                        <div className={`${cx({show: tabNum == 2})} txt_style_1 `}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_2")}>Resource and Resilience</h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <ul>
                                    <li>
                                        <h2 className={cx("title_style_4")}>스타트업 툴킷101</h2>
                                        <p>
                                            스타트업을 위한 다양한 비즈니스 툴킷을 옴니버스식으로 구성하고 온라인으로 학습
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>투자유치와 M&amp;A</h2>
                                        <p>
                                            창업기업의 투자유치 및 기업합병 등과 관련한 이슈를 이해
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>인사조직 실무</h2>
                                        <p>
                                            창업기업의 인사/조직 문제를 각 단계별, 이슈별 실전사례학습을 통해 문제해결 역량 배양
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>마케팅 기획과 실무</h2>
                                        <p>
                                            창업기업의 다양한 마케팅 이슈를 다루며, 최근 들어 부각되고 있는 새로운 미디어에 대한 접근을 통해 마케팅 효과를 극대화 할 수 있는 방안을 도출
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>특허분쟁사례분석</h2>
                                        <p>
                                            창업기업의 특허분쟁사례를 기반으로 기술의 보호, 그리고, 사업화를 위한 전략을 수립
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>지속가능성과 소셜이슈</h2>
                                        <p>
                                            기후테크, ESG 등 지속가능성을 위한 전략을 탐구하고 창업으로의 연계학습
                                        </p>
                                    </li>
                                </ul>
                                <div className={cx("btn_area")} style={{textAlign: 'center'}}>
                                    <a href="http://entrepreneurship.hanyang.ac.kr/" className={cx("btn_more")}
                                       target="_blank">자세히 알아보기</a>
                                </div>
                            </div>
                        </div>

                        <div className={`${cx({show: tabNum == 3})} txt_style_1 `}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_2")}>Entrepreneurial Mindset</h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <ul>
                                    <li>
                                        <h2 className={cx("title_style_4")}>창업기업특허전략</h2>
                                        <p>
                                            기술창업에서 가장 중요한 특허에 대해 이해하고, 이의 개발, 활용 등 특허 전략을 수립하는 방법을 이해
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>기업가정신 이론과 실제</h2>
                                        <p>
                                            기업가정신에 대한 이론적 학습을 통한  창업가의 리더십에 대한 고찰, 실전 사례 분석을 통해 기업가 정신을 이해
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>실리콘밸리 라이브</h2>
                                        <p>
                                            실리콘밸리에서 활동 중인 다양한 창업관련 전문가들의 실시간 강의를 통해 글로벌 최신 트렌드를 학습
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>이머징마켓 창업전략</h2>
                                        <p>
                                            중국, 동남아, 인도 등 새롭게 부상하는 글로벌 시장을 이해하고 창업관점에서 기회요인 분석
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>창업가의 난제</h2>
                                        <p>
                                            창업활동 중 직면하는 다양한 난제에 대한 토론과 해결방안 도출
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>연구조사방법론</h2>
                                        <p>
                                            질적, 양적, 그리고 혼합연구 방법론에 대한 이해
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>창업기업 스케일업의 비밀</h2>
                                        <p>
                                            창업기업의 성장전략에 대한 이해 및 성공적인 스케일업을 위한 요건을 학습
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>창업연구특수논제</h2>
                                        <p>
                                            창업분야의 새로운 이론에 대한 토론 및 토의를 통해 새로운 연구의 주제를 발굴
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>스타트업 콜로퀴엄</h2>
                                        <p>
                                            스타트업과 관련한 다양한 주제와 이슈를 세미나형 수업으로 진행
                                        </p>
                                    </li>
                                </ul>
                                <div className={cx("btn_area")} style={{textAlign: 'center'}}>
                                    <a href="http://entrepreneurship.hanyang.ac.kr/" className={cx("btn_more")}
                                       target="_blank">자세히 알아보기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx("sub_cont")}>
                        <div className={`${cx({show: true})} txt_style_1 `}>
                            <div className={cx("txt_style_1")}>
                                <div className={cx("left_title")}>
                                    <h1 className={cx("title_style_3")}><strong>비교과 프로그램</strong></h1>
                                </div>
                                <div className={cx("txtArea")}>
                                    <ul>
                                        <li>
                                            <h2 className={cx("title_style_4")}>창업경진대회 </h2>
                                            <ul>
                                                <li>벤처창업경진대회 : 대학(원)생들의 창의적 · 혁신적인 비즈니스모델 조기 발굴 및 육성을 위한 창업경진대회</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h2 className={cx("title_style_4")}>창업 인턴십 </h2>
                                            <ul>
                                                <li>국내 창업인턴십 : 창업교육을 통해 쌓은 지식을 활용하여 스타트업 등 국내 기업에서 직접 창업실무 경험</li>
                                                <li>글로벌 창업인턴십 : 해외 기업인들과 함께 현지 시장조사 , 사업기회 발굴 등의 미션을 수행하며 글로벌 창업과정 체험</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h2 className={cx("title_style_4")}>학생창업보육 </h2>
                                            <ul>
                                                <li>창업동아리 : 한양대학교 · 재휴학생 중 참신한 아이디어를 보유한 3인 이상의 팀을 선발하여 사업화지원금,
                                                    학생창업준비공간(공용),
                                                    창업교육, 멘토링 등 지원​
                                                </li>
                                                <li>247 스타트업 돔 : 24시간 주 7일 내내 창업을 꿈꾸는 학생들을 위한 기숙형 창업 공간으로 입사생 대상 특별교육,
                                                    전담멘토링 등
                                                    지원​
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    );
};

export default UniversityStudent;
