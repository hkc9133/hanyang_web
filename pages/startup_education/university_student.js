import React from 'react';
import PageNavigation from "../../component/layout/PageNavigation";
import Link from 'next/link'
import Image from "next/image";
import styles from '../../public/assets/styles/startup_education/startup_education.module.css';
import classnames from "classnames/bind"


const cx = classnames.bind(styles);

const UniversityStudent = () => {
    return (
        <>
            <PageNavigation/>
            <section className={cx("university_student")}>
                <div className={cx("sub_cont","sub_cont_top")}>
                    <h1 className={cx("sub_top_title")}>대학(원)생 대상</h1>
                    <p className={cx("sub_top_txt")}>창의적융합인재 양성을 위하여 체계적인 창업교육 커리큘럼을 운영</p>

                    <div className={cx("tab_style_2")}>
                        <ul>
                            <li className={cx("on")}><Link href="#"><a>학부 정규교과</a></Link></li>
                            <li><Link href="#"><a>학부 창업융합전공</a></Link></li>
                            <li><Link href="#"><a>대학원 정규교과</a></Link></li>
                        </ul>
                    </div>
                </div>

                <div className={cx("gray_bg","university_studentCont_1")}>
                    <div className={cx("sub_cont")}>
                        <h1 className={cx("title_style_3")}>학부정규교과</h1>
                        <p>
                            한양대학교는 기업가정신을 지닌 창의적융합인재 양성을 위하여 체계적인 창업교육 커리큘럼을 운영하고 있습니다. <br/>창업융합전공 미신청 학생도 교양으로 강의를 수강할
                            수 있습니다. (일부 강좌 제외)
                        </p>
                        <div className={cx("university_student_step")}>
                            <ul className={"clfx"}>
                                <li>
                                    <Image src="/assets/image/university_student_icon_1.jpg" width={186}height={186} alt="university_student_icon_1"/>
                                    <span>기업가정신 함양</span>
                                </li>
                                <li>
                                    <Image src="/assets/image/university_student_icon_2.jpg" width={186}height={186} alt="university_student_icon_2"/>
                                    <span>사업 아이디어 구상</span>
                                </li>
                                <li>
                                    <Image src="/assets/image/university_student_icon_3.jpg" width={186}height={186} alt="university_student_icon_3"/>
                                    <span>초기 사업모델 구축</span>
                                </li>
                                <li>
                                    <Image src="/assets/image/university_student_icon_4.jpg" width={186}height={186} alt="university_student_icon_4"/>
                                    <span>창업 역량 강화</span>
                                </li>
                                <li>
                                    <Image src="/assets/image/university_student_icon_5.jpg" width={186}height={186} alt="university_student_icon_5"/>
                                    <span>실전 창업 준비</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={cx("sub_cont","university_studentCont_2")}>
                    <div className={cx("txt_style_1")}>
                        <div className={cx("left_title")}>
                            <h1 className={cx("title_style_2")}><strong>2021</strong>년 개설강좌</h1>
                            <p>화살표를 누르면 표를 확인하실 수 있습니다.</p>
                        </div>
                        <div className={cx("txtArea")}>
                            <div className={cx("qa_list")}>
                                <ul>
                                    <li>
                                        <div className={cx("question")}>
                                            2021학년도 1학기 개설 강좌현황
                                        </div>
                                        <div className={cx("answer")}>

                                        </div>
                                    </li>
                                    <li>
                                        <div className={cx("question")}>
                                            2021학년도 2학기 개설 강좌현황
                                        </div>
                                        <div className={cx("answer")}>

                                        </div>
                                    </li>
                                </ul>
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
                                <ul>
                                    <li>
                                        <div className={cx("question")}>
                                            2016년~2019년 교육과정
                                        </div>
                                        <div className={cx("answer")}>

                                        </div>
                                    </li>
                                    <li>
                                        <div className={cx("question")}>
                                            2020년~2023년 교육과정
                                        </div>
                                        <div className={cx("answer")}>

                                        </div>
                                    </li>
                                </ul>
                                <p>교양으로 창업강좌를 수강하는 학생들은 가장 최근 교육과정의 로드맵을,<br/>융합전공생은 본인에게 해당하는 교육과정표를 확인해 주세요.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx("gray_bg","university_studentCont_3")}>
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
                                            <Link href="#"><a>이수학점 보기</a></Link>
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

                <div className={cx("sub_cont","university_studentCont_4")}>
                    <div className={cx("txt_style_1")}>
                        <div className={cx("left_title")}>
                            <h1 className={cx("title_style_2")}>신청방법</h1>
                        </div>
                        <div className={cx("txtArea")}>
                            <Image src="/assets/image/university_student_img.jpg" width={920}height={394} alt="university_student_img"/>
                        </div>
                    </div>

                    <div className={cx("txt_style_1")}>
                        <div className={cx("left_title")}>
                            <h1 className={cx("title_style_2")}>교육과정표</h1>
                        </div>
                        <div className={cx("txtArea")}>
                            <p>
                                융합전공교육과정(2016-2019 또는 2020-2023) 확인 후 <br/>본인에게 해당하는 교육과정표를 확인해 주세요.
                                <span className={cx("f-16","c-blue")}>* 교육과정 계산식: 융합전공신청연도–신청학년+ 1</span>
                            </p>
                            <h2 className={cx("title_style_4")}>교육과정표 확인 시 주의사항</h2>
                            <ul className={cx("list_style_2")}>
                                <li><span className={cx("number")}>1)</span> 교육과정표의 이수구분은 창업융합전공을 다중전공, 부전공으로 이수하는 학생에게만
                                    해당합니다.
                                </li>
                                <li><span className={cx("number")}>2)</span> 해당 학기 개설 강좌 목록은 페이지 상단 ‘개설강좌 현황’ 표를 참고하시기 바랍니다.
                                </li>
                                <li><span className={cx("number")}>3)</span> 타 단과 대관장수업은 해당 학과의 전공생 수강신청 진행 후 여석이 있는 경우에 수강신청이
                                    가능합니다.
                                </li>
                                <li><span className={cx("number")}>4)</span> 장기창업 현장실습은 최대 15학점까지 인정되며 창업융합전공 전공심화 학점으로는 최대
                                    9학점까지 인정됩니다. <br/>(학점은 주전공 학부에서 심사)
                                </li>
                                <li><span className={cx("number")}>5)</span> 단기창업현장실습은 창업융합전공 전공심화 학점으로 3학점까지 이수 가능합니다.</li>
                                {/*<li><span className={cx("number")}>6)</span> 창업대체학점제도의 일환인 장/단기창업 현장실습과 창업실습:스타트랙1 강좌를 통해
                                    최대18학점까지 이수 가능합니다.
    </li>*/}
                            </ul>
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

                <div className={cx("gray_bg")}>
                    <div className={cx("sub_cont","university_studentCont_5")}>
                        <div className={cx("txt_style_1")}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_3")}><strong>대학원 정규교과</strong></h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <div className={cx("list_style_3")}>
                                    <ul>
                                        <li>
                                            <span className={cx("title")}><b>01.</b> 기업가 역량 개발</span>
                                            벤처창업의 이해, 데이터분석방법론, 리더쉽과 커뮤니케이션
                                        </li>
                                        <li>
                                            <span className={cx("title")}><b>02.</b> 사업기회 포착과 사업계획 수립</span>
                                            글로벌창업트렌드, 창업기업론, 자금조달과 투자유치, 비즈니스 모델 개발과 평가, 신제품개발론
                                        </li>
                                        <li>
                                            <span className={cx("title")}><b>03.</b> 창업기업 경영</span>
                                            창업기업 운영 특론, 창업기업 법률과 지적재산권, 창업기업 세무와 회계,<br/>창업기업 지속가능 경영론
                                        </li>
                                        <li>
                                            <span className={cx("title")}><b>04.</b> 성장과 회수</span>
                                            창업기업과 성장전략
                                        </li>
                                        <li>
                                            <span className={cx("title")}><b>05.</b> 실전중심과목</span>
                                            디자인씽킹과 린스타트업, 창업인턴쉽
                                        </li>
                                        <li>
                                            <span className={cx("title")}><b>06.</b> 연구중심과목</span>
                                            연구조사방법론, 창업융합연구세미나
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx("sub_cont","university_studentCont_6")}>
                    <div className={cx("tab_style_1","tabTitle")}>
                        <ul>
                            <li className={cx("on")}><Link href="#"><a><span>기업가 역량 개발</span></a></Link></li>
                            <li><Link href="#"><a><span>사업기회 포착/​사업계획 수립​</span></a></Link></li>
                            <li><Link href="#"><a><span>창업기업 경영</span></a></Link></li>
                            <li><Link href="#"><a><span>성장과 회수</span></a></Link></li>
                            <li><Link href="#"><a><span>실전중심과목</span></a></Link></li>
                            <li><Link href="#"><a><span>연구중심과목</span></a></Link></li>
                        </ul>
                    </div>

                    <div className={cx("tabCont")}>
                        <div className={cx("txt_style_1")}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_2")}>기업가 역량 개발</h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <ul>
                                    <li>
                                        <h2 className={cx("title_style_4")}>벤처창업의 이해</h2>
                                        <p>
                                            본 과목은 벤처창업에 대한 입문 과목으로 창업생태계 및 창업과 관련된 일련의 프로세스와 활동들에 관하여 다룬다. 구체적으로 본 과목은 기업가
                                            정신과 벤처기업가, 벤처기업과 산업환경, 벤처 기업전략, 사업 기회 발견, 자금조달과 관리, 벤처캐피털, 벤처마케팅, 벤처조직 및
                                            인사관리, M&A와 기업공개, 벤처의 글로벌화 등 벤처창업에 관한 전반적인 내용을 포함한다. 이를 통하여 학생들은 각 분야의 심화 교과목
                                            으로 들어가기전에 벤처창업의 전반적인 프로세스와 주요 내용을 이해할 수 있다.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>창업가의 난제 </h2>
                                        <p>
                                            창업가는 창업과정과 창업기업을 경영하며 자금조달과 관리, 인력 관리, 리더십, 시장 니즈 검증, EXIT 등과 관련된 다양한 어려움에 봉착하게 된다.
                                            본 과목을 통해 학생들은 창업 시 빈번하게 발생하고 있는 구체적인 문제상황을 인지하고 문제 해결을 위하여 여러 관련된
                                            stakeholder의 입장이 되어 토론을 수행한다. 이러한 과정을 통하여 학생들은 창업기업의 난제에 대한 간접 경험을 할 수 있고
                                            문제 해결 역량을 기를 수 있다. ​
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
                                        <h2 className={cx("title_style_4")}>창업가의 난제</h2>
                                        <p>
                                            본 과목은 창업가의 리더십과 커뮤니케이션 능력을 배양하는 것을 목표로 한다. 성공적인 창업가가 되기 위한 기초적 역량 중에 하나가 리더
                                            십과 커뮤니케이션 스킬로서 본 과목에서는 창업가의 리더십 및 커뮤니케이션 능력 개발을 위하여 각 개인의 리더십 형태와 커뮤니케이션 방법을
                                            진단하고 리더로서의 자질 개발 및 비즈니스 커뮤니케이션 역량 증진을 위한 각종 실전적 프로그램을 수행한다.
                                        </p>
                                    </li>
                                </ul>
                                <div className={cx("btn_area")}>
                                    <a href="http://entrepreneurship.hanyang.ac.kr/" className={cx("btn_more")}
                                       target="_blank">자세히 알아보기</a>
                                </div>
                            </div>
                        </div>

                        <div className={cx("txt_style_1")}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_2")}>사업기회 포착/​사업계획 수립</h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <ul>
                                    <li>
                                        <h2 className={cx("title_style_4")}>글로벌창업트렌드</h2>
                                        <p>
                                            본 과목은 최근 글로벌 시장에서 떠오르는 스타트업 비즈니스 모델과 사례에 관하여 학습한다. 본 과목에서는 지역별(유럽, 동남아시아,
                                            미국/캐나다, 중국), 기술별(ICT, 바이오 등), 산업별(패션, 음식, 농업) 등 다양한 분류를 기반으로 전 세계에 떠오르는 각종
                                            스타트업 사례를 소개하고 이들의 성공요인 및 유사 사례 등에 관하여 고찰해 본다. 이를 통하여 학생들은 새로운 비즈니스 모델에 관한
                                            통찰력 뿐 아니라 글로벌 비즈니스 마인드를 얻을 수 있다.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>비즈니스 모델 개발과 평가 </h2>
                                        <p>
                                            본 과목은 비즈니스 모델 개발에 필요한 지식과 이를 평가하기 위한 방법론을 학습한다. 비즈니스 모델은 창업의 가장 핵심적인 부분으로
                                            제품이나 서비스를 어떻게 고객에서 전달하고 어떻게 수익을 창출하고 조직을 운영할 것인지에 관한 일련의 계획으로 볼 수 있다. 본
                                            과목에서는 비즈니스 모델 기획과 설계 방법론, 혁신적인 비즈니스 모델 전략, 비즈니스 모델 디자인 프로세스 및 성공한 비즈니스 모델 사례
                                            등을 다룬다. 본 과목을 통하여 학생들은 새로운 비즈니스 모델 수립에 대한 인사이트를 얻을 수 있다.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>창업기회론</h2>
                                        <p>
                                            창업가들은 지식과 경험, 취미 혹은 기획 발굴 등 다양한 방법을 통하여 창업기회를 포착할 수 있다. 본 과목은 창업가의 기회포착을 위한
                                            기술트렌드 및 방법론에 관하여 학습한다. 또한 특정 분야의 유망 스타트업 사례를 연구하고 학생들이 관심 있는 산업분야에 대한 심층적
                                            분석을 수행해 봄으로써 실제 창업기회의 가치를 평가해 보는 경험을 가진다.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>신제품 개발론</h2>
                                        <p>
                                            본 과목은 창업가의 신제품개발 전략, 프로세스 및 론칭 전략을 다룬다. 구체적으로 신제품 기회발견, 신제품 기획 및 설계, 신제품
                                            수요예측, 신제품개발 프로세스, 시장 세분화, 신제품 마케팅 등에 관하여 학습한다. 또한 본 과목에서 학생들은 다양한 산업 분야의
                                            창업기업의 신제품 개발 사례를 선정하여 소논문을 작성하는 프로젝트를 수행할 수 있다.
                                        </p>
                                    </li>
                                </ul>
                                <div className={cx("btn_area")}>
                                    <a href="http://entrepreneurship.hanyang.ac.kr/" className={cx("btn_more")}
                                       target="_blank">자세히 알아보기</a>
                                </div>
                            </div>
                        </div>

                        <div className={cx("txt_style_1")}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_2")}>창업기업 경영</h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <ul>
                                    <li>
                                        <h2 className={cx("title_style_4")}>창업기업운영특론</h2>
                                        <p>
                                            본과목은스타트업경영에있어서핵심적인경영관리상의이슈로부각되는특정주제를정하고이에대한관리방안및사례연구를통하여학생들이스타트업경영에대하여이론적,
                                            실무적이해를높이고자한다. 또한성공한스타트업경영인의특강을통하여학생들의창업에관한관심을높이고현장감있는지식을전달하고자한다.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>창업마케팅 </h2>
                                        <p>
                                            본과목은초기창업기업에바로적용가능한, 새로운마케팅기법을다룬다. 전통적인마케팅기법과는차별화된, 파괴적(Disruptive) 마케팅,
                                            바이럴(Viral) 마케팅, 래디컬(Radical)마케팅, 컨버전스(Convergence) 마케팅, 탐험적(expeditionary)
                                            마케팅과같은새로운시각의개념을학습하고실습한다. 본수업을통해학생들은마케팅의측면에서현실비즈니스의실제사례를읽고토론한다.
                                        </p>
                                    </li>
                                </ul>
                                <div className={cx("btn_area")}>
                                    <a href="http://entrepreneurship.hanyang.ac.kr/" className={cx("btn_more")}
                                       target="_blank">자세히 알아보기</a>
                                </div>
                            </div>
                        </div>

                        <div className={cx("txt_style_1")}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_2")}>성장과 회수</h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <ul>
                                    <li>
                                        <h2 className={cx("title_style_4")}>창업기업성장전략</h2>
                                        <p>
                                            본과목은스타트업경영에있어서핵심적인경영관리상의이슈로부각되는특정주제를정하고이에대한관리방안및사례연구를통하여학생들이스타트업경영에대하여이론적,
                                            실무적이해를높이고자한다. 또한성공한스타트업경영인의특강을통하여학생들의창업에관한관심을높이고현장감있는지식을전달하고자한다.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>자금조달과투자유치</h2>
                                        <p>
                                            본과목은초기창업기업에바로적용가능한, 새로운마케팅기법을다룬다. 전통적인마케팅기법과는차별화된, 파괴적(Disruptive) 마케팅,
                                            바이럴(Viral) 마케팅, 래디컬(Radical)마케팅, 컨버전스(Convergence) 마케팅, 탐험적(expeditionary)
                                            마케팅과같은새로운시각의개념을학습하고실습한다. 본수업을통해학생들은마케팅의측면에서현실비즈니스의실제사례를읽고토론한다.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>디자인씽킹과린스타트업</h2>
                                        <p>
                                            본과목은디자인씽킹을활용하여창업을계획하고수행하는과정을다루는실전과목이다.
                                            디자인씽킹은디자인적사고와이를구현하는디자인기법으로구성이되는데이러한관점은창업가의신제품개발및새로운비즈니스모델개발에있어서도매우유용한방법론이다.
                                            본과목을통하여학생들은문제를공감하고해결하기위하여솔루션을시각화하고고객에게검증을받고문제를재정의하는디자인씽킹기법을활용하여비즈니스모델및신제품을시장에서검증하며지속적으로업데이트하고발전시키는프로젝트를수행한다.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>창업인턴십</h2>
                                        <p>
                                            과목개요추후업데이트예정
                                        </p>
                                    </li>
                                </ul>
                                <div className={cx("btn_area")}>
                                    <a href="http://entrepreneurship.hanyang.ac.kr/" className={cx("btn_more")}
                                       target="_blank">자세히 알아보기</a>
                                </div>
                            </div>
                        </div>

                        <div className={cx("txt_style_1")}>
                            <div className={cx("left_title")}>
                                <h1 className={cx("title_style_2")}>연구중심과목</h1>
                            </div>
                            <div className={cx("txtArea")}>
                                <ul>
                                    <li>
                                        <h2 className={cx("title_style_4")}>창업융합연구세미나</h2>
                                        <p>
                                            본 과목은 창업융합학과 학생들의 논문주제 탐색을 위한 세미나 수업이다 . 본 과목은 창업융합트렌드와 관련된 다양한 주제들을 학습한다 .
                                            관련 분야는 창업가특성 , 기술창업 , 창업정책 , 창업생태계 , 비즈니스모델 등으로 포괄적이다 . 관련 세부 주제와 읽기자료는 학기마다
                                            변동이 있을 수 있다 . 본 수업에서 학생들은 매주 주어진 논문을 읽고 크리틱을 작성해서 제출해야 하고 수업은 학생들의 발표와 토론으로
                                            이루어진다
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>창업정책세미나</h2>
                                        <p>
                                            본 과목은 창업 정책 연구를 위한 세미나 수업이다 . 학생들은 최근 창업 정책에 관한 연구를 학습하게 된다 . 구체적으로 , 창업 전반에
                                            관한 교육 , 금융 , 법과 제도에대한 이론적 및 실증적 연구들을 접한다 . 본 수업에서 학생들은 관련 논문을 읽고 수업은 학생들의
                                            발표와 토론으로 이루어진다
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>연구조사방법론</h2>
                                        <p>
                                            본과목은 석사논문 작성을 위한 논문작성 방법론을 다룬다 . 본 과목에서는 논문작성 방법과 자료분석 방법 등을 다룬다 . 구체적으로
                                            연구조사의 개념 , 연구조사를 위한 통계 방법론 , 타당성 및 신뢰성 분석 , 분산분석 , 요인분석 , 회귀분석과 같은 분석 방법론등을
                                            포함한다 . 경우에 따라서 통계적 분석을 사용한 방법론 수업이 아닌 사례연구 방법론을 다룰 수도 있다.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className={cx("title_style_4")}>석사논문연구</h2>
                                        <p>
                                            창업융합분야에 대하여 학생들이 선택한 주제를 가지고 지도교수와 석사 논문으로 확장한다 . 학기 중 학생들과 지도교수간의 긴밀한 의사소통을
                                            통하여 논문을 진행하고 추후 졸업 논문을 위한 기반을 마련한다 .
                                        </p>
                                    </li>
                                </ul>
                                <div className={cx("btn_area")}>
                                    <a href="http://entrepreneurship.hanyang.ac.kr/" className={cx("btn_more")}
                                       target="_blank">자세히 알아보기</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={cx("txt_style_1","university_studentCont_6_list")}>
                        <div className={cx("left_title")}>
                            <h1 className={cx("title_style_2")}>비교과 프로그램</h1>
                        </div>
                        <div className={cx("txtArea")}>
                            <ul>
                                <li>
                                    <h2 className={cx("title_style_4")}>창업경진대회 </h2>
                                    <ul>
                                        <li>벤처창업경진대회 : 대학(원)생들의 창의적 · 혁신적인 비즈니스모델 조기 발굴 및 육성을 위한 창업경진대회​</li>
                                        <li>라이언컵 경진대회 : 당해 창업경진대회 수상자 중 최고의 혁신 아이템을 선발하는 창업경진대회 왕중왕전​</li>
                                        <li>캠퍼스 CEO 창업경진대회 : 창업강좌 수강생들이 한 학기동안 발굴한 참신한 사업 아이디어를 점검하는 교내 창업경진대회​</li>
                                        <li>소프트웨어 창업아이디어 경진대회 : 대학생 개발자 , 디자이너 , 마케터 등이 한 팀을 구성해 소프트웨어 기반 혁신 창업 아이디어를<br/>발굴하는 창업경진대회
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <h2 className={cx("title_style_4")}>창업 인턴십 </h2>
                                    <ul>
                                        <li>내가 바로 CEO: 사업계획서 집중 멘토링 , 비즈니스모델 고도화 등 사업아이템 검증을 위한 실전 창업캠프 창업인턴십​</li>
                                        <li>국내 창업인턴십 : 창업교육을 통해 쌓은 지식을 활용하여 스타트업 등 국내 기업에서 직접 창업실무 경험​</li>
                                        <li>글로벌 창업인턴십 : 해외 기업인들과 함께 현지 시장조사 , 사업기회 발굴 등의 미션을 수행하며 글로벌 창업과정 체험</li>
                                    </ul>
                                </li>
                                <li>
                                    <h2 className={cx("title_style_4")}>학생창업보육 </h2>
                                    <ul>
                                        <li>창업동아리 : 한양대학교 · 재휴학생 중 참신한 아이디어를 보유한 3인 이상의 팀을 선발하여 사업화지원금, 학생창업준비공간(공용),
                                            창업교육, 멘토링 등 지원​
                                        </li>
                                        <li>247 스타트업 돔 : 24시간 주 7일 내내 창업을 꿈꾸는 학생들을 위한 기숙형 창업 공간으로 입사생 대상 특별교육, 전담멘토링 등
                                            지원​
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            {/*<div className={cx("btn_area")}>
                                <a href="http://entrepreneurship.hanyang.ac.kr/" className={cx("btn_more")} target="_blank">자세히
                                    알아보기</a>
                                            </div>*/}
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default UniversityStudent;
