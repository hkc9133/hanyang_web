import React, {useEffect, useState} from 'react';
import PageNavigation from "../../component/layout/PageNavigation";
import Link from 'next/link'
import Image from "next/image";
import styles from '../../public/assets/styles/startup_education/startup_education.module.css';
import classnames from "classnames/bind"
import {Menu, Dropdown} from 'antd';
import Edu2030 from '../../component/startup_education/Edu2030';
import Edu1619 from '../../component/startup_education/Edu1619';
import {
    isMobile
} from "react-device-detect";

const {SubMenu} = Menu;


const cx = classnames.bind(styles);

const UniversityStudent = () => {

    const [tabNum, setTabNum] = useState(0)
    const [showScore, setShowScore] = useState(false)

    useEffect(() => {
        console.log(tabNum)
    }, [tabNum])
    return (
        <>
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
                                            <img src={"/assets/image/university_student_class_1.jpg"}/>
                                        </Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub2" className={cx("dropdown_title")}
                                             title={<div className={cx("question")}>2학기 운영강좌</div>}>
                                        <Menu.Item key="1" className={cx("dropdown_content")}
                                                   style={{height: 'auto', padding: 10}}>
                                            <img src={"/assets/image/university_student_class_2.jpg"}/>
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
                                    <SubMenu key="sub3" className={cx("dropdown_title")}
                                             title={<div className={cx("question")}>2016년~2019년 교육과정</div>}>
                                        <Menu.Item key="2" className={cx("dropdown_content")}
                                                   style={{height: 'auto', padding: 10}}>
                                            {/*<Edu1619 cx={cx}/>*/}
                                            <img src={"/assets/image/university_student_class_3.jpg"}/>
                                            <img src={"/assets/image/university_student_class_4.jpg"}/>
                                        </Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub4" className={cx("dropdown_title")}
                                             title={<div className={cx("question")}>2020년~2023년 교육과정</div>}>
                                        <Menu.Item key="3" className={cx("dropdown_content")}
                                                   style={{height: 'auto', padding: 10}}>
                                            {/*<Edu2030 cx={cx}/>*/}
                                            <img src={"/assets/image/university_student_class_5.jpg"}/>
                                            <img src={"/assets/image/university_student_class_6.jpg"}/>
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
                                                    <p>[2016~2019 교육과정 적용]</p>
                                                    <p>- 제 2전공 : 전공핵심 21학점, 전공심화 6학점 포함하여 전공과목 36학점 이상 이수<br/>
                                                        - 부전공 : 전공핵심 12학점 포함하여 전공과목 21학점 이상 이수</p>
                                                    <br/>
                                                    <p>[2020~2023 교육과정 적용]</p>
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
                            <Link href="/assets/pdf/[양식]자기소개서_창업융합전공.hwp"><a target="_blank"
                                                                                                  style={{marginLeft: 8}}
                                                                                                  download><Image
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
                                <SubMenu key="sub2" className={cx("dropdown_title")}
                                         title={<div className={cx("question")}>2016년~2019년 교육과정</div>}>
                                    <Menu.Item key="2" className={cx("dropdown_content")}
                                               style={{height: 'auto', padding: 10}}>
                                        <Edu1619 cx={cx}/>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub1" className={cx("dropdown_title")}
                                         title={<div className={cx("question")}>2020년~2023년 교육과정</div>}>
                                    <Menu.Item key="1" className={cx("dropdown_content")}
                                               style={{height: 'auto', padding: 10}}>
                                        <Edu2030 cx={cx}/>
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
                                    <span className={cx("f-16", "c-blue")}>※ 운영 및 신청방법 매뉴얼 참고<Link
                                        href="/assets/pdf/2021-1 마이크로전공 운영 및 학생신청 매뉴얼.hwp"><a
                                        style={{marginLeft: 8}} target="_blank" download><Image
                                        src="/assets/image/icon_download.gif" width={22} height={26}
                                        alt="다운로드"/></a></Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx("gray_bg")} id="hakbu_3">
                    <div className={cx("sub_cont", "university_studentCont_5")}>
                        <div className={cx("txt_style_1")}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_3")}><strong>대학원 정규교과</strong></h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <div className={cx("list_style_3")}>
                                    <ul>
                                        <li>
                                            <span className={cx("title")}><b>01.</b> 기업가 역량 개발</span>
                                            벤처창업의 이해, 데이터 분석방법론, 창업가의 난제, 리더십과 커뮤니케이션, 사회적기업가정신
                                        </li>
                                        <li>
                                            <span className={cx("title")}><b>02.</b> 사업기회 포착과 사업계획 수립</span>
                                            글로벌창업트렌드, 창업기회론, 비즈니스모델 개발과 평가, 신제품개발론
                                        </li>
                                        <li>
                                            <span className={cx("title")}><b>03.</b> 창업기업 경영</span>
                                            창업기업 운영 특론, 창업마케팅
                                        </li>
                                        <li>
                                            <span className={cx("title")}><b>04.</b> 성장과 회수</span>
                                            창업기업과 성장전략, 자금조달과 투자유치
                                        </li>
                                        <li>
                                            <span className={cx("title")}><b>05.</b> 실전중심과목</span>
                                            디자인씽킹과 린스타트업, 창업인턴쉽 1,2
                                        </li>
                                        <li>
                                            <span className={cx("title")}><b>06.</b> 연구중심과목</span>
                                            창업융합연구세미나, 창업정책세미나, 연구조사방법론, 석사논문연구
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
                                <button><span>기업가 역량 개발</span></button>
                            </li>
                            <li className={cx({on: tabNum == 1})} onClick={() => {
                                setTabNum(1)
                            }}>
                                <button><span>사업기회 포착/사업계획 수립</span></button>
                            </li>
                            <li className={cx({on: tabNum == 2})} onClick={() => {
                                setTabNum(2)
                            }}>
                                <button><span>창업기업 경영</span></button>
                            </li>
                            <li className={cx({on: tabNum == 3})} onClick={() => {
                                setTabNum(3)
                            }}>
                                <button><span>성장과 회수</span></button>
                            </li>
                            <li className={cx({on: tabNum == 4})} onClick={() => {
                                setTabNum(4)
                            }}>
                                <button><span>실전창업</span></button>
                            </li>
                            <li className={cx({on: tabNum == 5})} onClick={() => {
                                setTabNum(5)
                            }}>
                                <button><span>창업연구</span></button>
                            </li>
                        </ul>
                    </div>

                    <div className={cx("tabCont")}>

                        <div className={`${cx({show: tabNum == 0})} txt_style_1 `}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_2")}>기업가 역량 개발</h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <ul>
                                    <li>
                                        <h2 className={cx("title_style_4")}>벤처창업의 이해</h2>
                                        <p>
                                            벤처창업에 대한 입문 과목으로 창업생태계 및 창업과 관련된 일련의 프로세스와 활동들에 관하여 다룬다. 구체적으로 기업가 정신과
                                            벤처기업가,
                                            벤처기업과 산업환경, 벤처 기업전략, 사업기회 발견, 자금조달과 관리, 벤처캐피털, 벤처마케팅, 벤처조직 및
                                            인사관리, M&A와 기업공개, 벤처의 글로벌화 등 벤처창업에 관한 전반적인 내용을 포함한다. 이를 통하여 학생들은 각 분야의 심화 교과목
                                            으로 들어가기전에 벤처창업의 전반적인 프로세스와 주요 내용을 이해할 수 있다.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>데이터 분석방법론</h2>
                                        <p>
                                            창업가들의 데이터 분석능력과 분석결과 해석을 통한 통찰력을 배양하기 위하여 다양한 데이터 분석방법과 해석방법을 다룬다. 구체적으로
                                            데이터의 이해, 데이터처리기술의 이해, 데이터분석과 기획, 데이터 분석방법론 및 데이터 시각화 등에 관하여 학습한다.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>창업가의 난제 </h2>
                                        <p>
                                            창업가는 창업과정과 창업기업을 경영하며 자금조달과 관리, 인력 관리, 리더십, 시장 니즈 검증, EXIT 등과 관련된 다양한 어려움에
                                            봉착하게 된다.
                                            본 과목을 통해 학생들은 창업 시 빈번하게 발생하고 있는 구체적인 문제상황을 인지하고 문제 해결을 위하여 여러 관련된
                                            stakeholder의 입장이 되어 토론을 수행한다. 이러한 과정을 통하여 학생들은 창업기업의 난제에 대한 간접 경험을 할 수 있고
                                            문제 해결 역량을 기를 수 있다. ​
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>리더십과 커뮤니케이션</h2>
                                        <p>
                                            창업가의 리더십과 커뮤니케이션 능력을 배양하는 것을 목표로 한다. 성공적인 창업가가 되기 위한 기초적 역량 중에 하나가
                                            리더십과 커뮤니케이션 스킬로서, 창업가의 리더십 및 커뮤니케이션 능력 개발을 위하여 각 개인의 리더십 형태와 커뮤니케이션
                                            방법을 진단하고 리더로서의 자질 개발 및 비즈니스 커뮤니케이션 역량 증진을 위한 각종 실전적 프로그램을 수행한다.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>사회적기업가정신</h2>
                                        <p>
                                            사회적 기업은 최근에 빠르게 등장하고 있는 미션 중심 기업을 지칭하는 것으로서, 사회적 기업 현상을 면밀히 살펴보고, 학생들로
                                            하여금 향후 사회적 기업을 위한 비즈니스플랜을 작성하는데 기초를 제공한다. 본 수업을 통해 학생들은 실제 운영중인 사회적 기업의 사례를
                                            학습한다.
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
                                <h1 className={cx("title_style_2")}>사업기회 포착/사업계획 수립</h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <ul>
                                    <li>
                                        <h2 className={cx("title_style_4")}>글로벌창업트렌드</h2>
                                        <p>
                                            최근 글로벌 시장에서 떠오르는 스타트업 비즈니스 모델과 사례에 관하여 학습한다. 지역별(유럽, 동남아시아,
                                            미국/캐나다, 중국), 기술별(ICT, 바이오 등), 산업별(패션, 음식, 농업) 등 다양한 분류를 기반으로 전 세계에 떠오르는 각종
                                            스타트업 사례를 소개하고 이들의 성공요인 및 유사 사례 등에 관하여 고찰해 본다. 이를 통하여 학생들은 새로운 비즈니스 모델에 관한
                                            통찰력 뿐 아니라 글로벌 비즈니스 마인드를 얻을 수 있다.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>창업기회론</h2>
                                        <p>
                                            창업가들은 지식과 경험, 취미 혹은 기획 발굴 등 다양한 방법을 통하여 창업기회를 포착할 수 있다. 창업가의 기회포착을 위한
                                            기술트렌드 및 방법론에 관하여 학습한다. 또한 특정 분야의 유망 스타트업 사례를 연구하고 학생들이 관심 있는 산업분야에 대한 심층적
                                            분석을 수행해 봄으로써 실제 창업기회의 가치를 평가해 보는 경험을 가진다.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>비즈니스 모델 개발과 평가 </h2>
                                        <p>
                                            비즈니스 모델 개발에 필요한 지식과 이를 평가하기 위한 방법론을 학습한다. 비즈니스 모델은 창업의 가장 핵심적인 부분으로
                                            제품이나 서비스를 어떻게 고객에서 전달하고 어떻게 수익을 창출하고 조직을 운영할 것인지에 관한 일련의 계획으로 볼 수 있다. 본
                                            과목에서는 비즈니스 모델 기획과 설계 방법론, 혁신적인 비즈니스 모델 전략, 비즈니스 모델 디자인 프로세스 및 성공한 비즈니스 모델 사례
                                            등을 다룬다. 본 과목을 통하여 학생들은 새로운 비즈니스 모델 수립에 대한 인사이트를 얻을 수 있다.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>신제품 개발론</h2>
                                        <p>
                                            창업가의 신제품개발 전략, 프로세스 및 론칭 전략을 다룬다. 구체적으로 신제품 기회발견, 신제품 기획 및 설계, 신제품
                                            수요예측, 신제품개발 프로세스, 시장 세분화, 신제품 마케팅 등에 관하여 학습한다. 또한 본 과목에서 학생들은 다양한 산업 분야의
                                            창업기업의 신제품 개발 사례를 선정하여 소논문을 작성하는 프로젝트를 수행할 수 있다.
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
                                <h1 className={cx("title_style_2")}>창업기업 경영</h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <ul>
                                    <li>
                                        <h2 className={cx("title_style_4")}>창업기업 운영 특론</h2>
                                        <p>
                                            스타트업 경영에 있어서 핵심적인 경영관리상의 이슈로 부각되는 특정주제를 정하고 이에 대한 관리 방안 및 사례 연구를 통하여 학생들이
                                            스타트업 경영에 대하여 이론적,
                                            실무적 이해를 높이고자 한다. 또한 성공한 스타트업 경영인의 특강을 통하여 학생들의 창업에 관한 관심을 높이고 현장감 있는 지식을
                                            전달하고자 한다.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>창업 마케팅 </h2>
                                        <p>
                                            초기 창업 기업에 바로 적용 가능한, 새로운 마케팅 기법을 다룬다. 전통적인 마케팅 기법과는 차별화된, 파괴적(Disruptive)
                                            마케팅,
                                            바이럴(Viral) 마케팅, 래디컬(Radical)마케팅, 컨버전스(Convergence) 마케팅, 탐험적(expeditionary)
                                            마케팅과 같은 새로운 시각의 개념을 학습하고 실습한다. 본 수업을 통해 학생들은 마케팅의 측면에서 현실 비즈니스의 실제 사례를 읽고
                                            토론한다.
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
                                <h1 className={cx("title_style_2")}>성장과 회수</h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <ul>
                                    <li>
                                        <h2 className={cx("title_style_4")}>창업기업과 성장전략</h2>
                                        <p>
                                            많은 창업가들은 기업가정신을 가지고 기업을 창업하지만 기업을 창업한 것으로 기업가 정신이 완성되는 것이 아니다. 스타트업들이 성장에 대한
                                            명확한 목표를 가지고 지속적인 시행착오를 거쳐 기업의 성장을 이루어 내야 하므로 창업 이후 성장을 지속하기 위한 성장 전략과 스타트업
                                            성장의 주요 핵심요인을 학습한다. 스타트업들의 성장전략과 성장의 주요핵심요인을 실전에 적용하기 위한 주요 사례와 구체적인 전략에 대하여
                                            학습하고 토론한다.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>자금조달과투자유치</h2>
                                        <p>
                                            자금조달은 창업기업의 성장과 성공에 있어 가장 중요한 부분 중에 하나이다. 본 과목은 창업기업의 입장에서 고려할 수 있는 다양한 자금조달
                                            방법과 투자유치에 관하여 자세히 다룬다. 구체적으로 금융시장의 구조, 성장별 자금조달 방법, 간접금융을 통한 자금조달, 정책자금,
                                            신용보증제도, 벤처캐피털과 엔젤, 주식시장과 M&A, 주식가치평가 및 크라우딩 펀등 등을 다룬다. 또한 투자자의 입장에서 사업계획서를
                                            평가하고 투자 의사결정이 루어지는 과정에 대해서도 상세히 다룬다.
                                        </p>
                                    </li>
                                </ul>
                                <div className={cx("btn_area")} style={{textAlign: 'center'}}>
                                    <a href="http://entrepreneurship.hanyang.ac.kr/" className={cx("btn_more")}
                                       target="_blank">자세히 알아보기</a>
                                </div>
                            </div>
                        </div>

                        <div className={`${cx({show: tabNum == 4})} txt_style_1 `}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_2")}>실전창업</h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <ul>
                                    <li>
                                        <h2 className={cx("title_style_4")}>디자인씽킹과 린스타트업</h2>
                                        <p>
                                            디자인씽킹을 활용하여 창업을 계획하고 수행하는 과정을 다루는 실전과목이다. 디자인씽킹은 디자인적 사고와 이를 구현하는 디자인
                                            기법으로 구성이 되는데 이러한 관점은 창업가의 신제품개발 및 새로운 비즈니스 모델 개발에 있어서도 매우 유용한 방법론이다. 본 과목을
                                            통하여 학생들은 문제를 공감하고 해결하기 위하여 솔루션을 시각화하고 고객에게 검증을 받고 문제를 재정의하는 디자인씽킹 기법을 활용하여
                                            비즈니스 모델 및 신제품을 시장에서 검증하며 지속적으로 업데이트하고 발전시키는 프로젝트를 수행한다.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>창업인턴십1</h2>
                                        <p>
                                            학생들에게 실전창업경험 및 창업기업에서의 근무 경험을 제공함으로써 실제 창업 현장에서 발생하는 문제들의 사전적 경험 및
                                            문제해결 역량을 기르기 위하여 개설되었다. 창업인턴십은 학생들이 각자 발견한 기회나 문제를 기반으로 창업모델을 세우고 발전시켜보는 경우와
                                            창업기업에 인턴으로 근무하여 창업기업의 당면한 문제 및 문제 해결 과정을 경험해보는 형태 두 가지로 구분된다. 또한 이러한 창업인턴십은
                                            학생 수요에 따라 국내와 해외에서 수행된다. 창업인턴십 종료 후 학생들은 인턴기간 동안 수행한 사업관련 리서치 결과물과 창업기업의 경험을
                                            공유하는 리포트를 제출해야 한다.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>창업인턴십2</h2>
                                        <p>
                                            학생들에게 실전창업경험 및 창업기업에서의 근무 경험을 제공함으로써 실제 창업 현장에서 발생하는 문제들의 사전적 경험 및
                                            문제해결 역량을 기르기 위하여 개설된 창업인턴십1의 심화과목이다. 창업인턴십은 학생들이 각자 발견한 기회나 문제를 기반으로 창업모델을
                                            세우고 발전시켜보는 경우와 창업기업에 인턴으로 근무하여 창업기업의 당면한 문제 및 문제 해결 과정을 경험해보는 형태 두 가지로 구분된다.
                                            또한 이러한 창업인턴십은 학생 수요에 따라 국내와 해외에서 수행된다. 창업인턴십 종료 후 학생들은 인턴기간 동안 수행한 사업관련 리서치
                                            결과물과 창업기업의 경험을 공유하는 리포트를 제출해야 한다.
                                        </p>
                                    </li>
                                </ul>
                                <div className={cx("btn_area")} style={{textAlign: 'center'}}>
                                    <a href="http://entrepreneurship.hanyang.ac.kr/" className={cx("btn_more")}
                                       target="_blank">자세히 알아보기</a>
                                </div>
                            </div>
                        </div>

                        <div className={`${cx({show: tabNum == 5})} txt_style_1`}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_2")}>창업연구</h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <ul>
                                    <li>
                                        <h2 className={cx("title_style_4")}>창업융합연구세미나 </h2>
                                        <p>
                                            창업융합학과 학생들의 논문주제 탐색을 위한 세미나 수업이다. 본 과목은 창업융합트렌드와 관련된 다양한 주제들을 학습한다. 관련
                                            분야는
                                            창업가특성, 기술창업, 창업정책, 창업생태계, 비즈니스모델 등으로 포괄적이다. 관련 세부 주제와 읽기자료는 학기마다 변동이 있을 수
                                            있다. 본
                                            수업에서 학생들은 매주 주어진 논문을 읽고 크리틱을 작성해서 제출해야 하고 수업은 학생들의 발표와 토론으로 이루어진다.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>창업정책세미나 </h2>
                                        <p>
                                            창업 정책 연구를 위한 세미나 수업이다. 학생들은 최근 창업 정책에 관한 연구를 학습하게 된다. 구체적으로, 창업 전반에 관한
                                            교육,
                                            금융, 법과 제도에대한 이론적 및 실증적 연구들을 접한다. 본 수업에서 학생들은 관련 논문을 읽고 수업은 학생들의 발표와 토론으로
                                            이루어진다.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>연구조사방법론 </h2>
                                        <p>
                                            석사논문 작성을 위한 논문작성 방법론을 다룬다. 본 과목에서는 논문작성 방법과 자료분석 방법 등을 다룬다. 구체적으로
                                            연구조사의
                                            개념, 연구조사를 위한 통계 방법론, 타당성 및 신뢰성 분석, 분산분석, 요인분석, 회귀분석과 같은 분석 방법론 등을 포함한다. 경우에
                                            따라서
                                            통계적 분석을 사용한 방법론 수업이 아닌 사례연구 방법론을 다룰 수도 있다.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>석사논문연구 </h2>
                                        <p>
                                            창업융합분야에 대하여 학생들이 선택한 주제를 가지고 지도교수와 석사 논문으로 확장한다. 학기 중 학생들과 지도교수간의 긴밀한 의사소통을
                                            통하여
                                            논문을 진행하고 추후 졸업 논문을 위한 기반을 마련한다.
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
                                                <li>벤처창업경진대회 : 대학(원)생들의 창의적 · 혁신적인 비즈니스모델 조기 발굴 및 육성을 위한 창업경진대회​</li>
                                                <li>라이언컵 경진대회 : 당해 창업경진대회 수상자 중 최고의 혁신 아이템을 선발하는 창업경진대회 왕중왕전​</li>
                                                <li>캠퍼스 CEO 창업경진대회 : 창업강좌 수강생들이 한 학기동안 발굴한 참신한 사업 아이디어를 점검하는 교내
                                                    창업경진대회​
                                                </li>
                                                <li>소프트웨어 창업아이디어 경진대회 : 대학생 개발자 , 디자이너 , 마케터 등이 한 팀을 구성해 소프트웨어 기반 혁신 창업
                                                    아이디어를<br/>발굴하는 창업경진대회
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h2 className={cx("title_style_4")}>창업 인턴십 </h2>
                                            <ul>
                                                <li>내가 바로 CEO: 사업계획서 집중 멘토링 , 비즈니스모델 고도화 등 사업아이템 검증을 위한 실전 창업캠프 창업인턴십​
                                                </li>
                                                <li>국내 창업인턴십 : 창업교육을 통해 쌓은 지식을 활용하여 스타트업 등 국내 기업에서 직접 창업실무 경험​</li>
                                                <li>글로벌 창업인턴십 : 해외 기업인들과 함께 현지 시장조사 , 사업기회 발굴 등의 미션을 수행하며 글로벌 창업과정 체험
                                                </li>
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
