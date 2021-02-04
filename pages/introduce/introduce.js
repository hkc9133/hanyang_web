import React from 'react';

import Link from 'next/link';
import styles from '../../public/assets/styles/introduce/introduce.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";

const cx = classnames.bind(styles);

const Introduce = () => {
    return (
        <>
            <PageNavigation/>
        <section className={cx("container")}>
            <div className={cx("introduction")}>
                <div className={cx("sub_cont")}>
                    <h1 className={cx("sub_top_title")}>기관소개</h1>
                    <p className={cx("sub_top_txt")}>한양대학교는 (예비)창업자가 창업과정에서 겪는 다양한 문제점을 <br/>해결하고 창업자의 사업화 수준별 맞춤형 컨설팅을 제공하기
                        위한 <br/>원스톱 창업상담 플랫폼을 구축, 온오프라인 창업상담을 지원하고 있습니다. </p>

                    <div className={"clfx"}>
                        <div className={cx("ceo_info")}>
                            <h2>인사말</h2>
                            <div className={cx("ceo_img")}>
                                <img src="/assets/image/ceo.jpg" alt="ceo"/>
                            </div>
                            {/*<div className={cx("info")}>
                                <span className={cx("name")}>류 창 완</span>
                                <ul>
                                    <li>창업지원단장</li>
                                    <li>산업융합학부 교수</li>
                                    <li>대학원 창업융합학과 주임교수</li>
                                    <li>한양사이버대학교 창업지원단장</li>
                                </ul>
                                <p>
                                    “벤처기업을 창업하여 투자유치, 코스닥상장, <br/>
                                    인수합병 등 다양한 실전경험을 쌓았습니다. <br/>
                                    20년간 현장에서 체득한 지혜가 청년들의 <br/>
                                    기업가정신으로 여물기를 바라며 후학들을 <br/>
                                    지도하고 있습니다.”
                                </p>
                                <div className={cx("btn_area")}>
                                    <a href="https://brunch.co.kr/@bidulgi2dbs#articles" target="_blank">류창완 교수의 브런치
                                        바로가기</a>
                                </div>
    </div>*/}
                        </div>
                        <div className={cx("ceo_txt")}>
                            <p className={cx("txt_1")}>
                                120세 시대를 살아가야 할 청년들에게 기업가정신 교육은 미래를 대비하는 Life Skill 이요 ,필수 교양입니다 . 또한 , 자신의 삶을 도전적이고 자기
                                주도적으로 설계할 수 있는 역량을 키워줄 뿐 아니라 몰입의 경험을 제공하고 , 자신의 새로운 잠재력을 발견할 수 있게 합니다 .
                            </p>
                            <p>
                                실용인재를 육성해 우리나라 경제 발전의 큰 축을 담당해 온 한양대학교는 국내에서 창업기업가를 가장 많이 양성하는 대학입니다 . 창업지원단은 창직과 창업을 통한
                                산업구조 고도화라는 시대적 요구에 부응하고, CEO 사관학교’로서 우리 대학의 전통을 능동적으로 계승 , 발전시키기 위해 2009 년 국내 대학 최초로
                                설립되었습니다.
                            </p>
                            <p>
                                창업지원단은 예비 창업기업가가 갖추어야 할 기업가적 소양과 역량 교육 , 현장 중심의 실전 훈련을 통해 창업 성공률을 높이고 성공한 동문 기업가들의 지혜와
                                실전 경험을 전수해 혁신 기술창업인 양성에 힘쓰고 있습니다 .
                            </p>
                            <p>
                                한양대학교는 창업지원단 설립 이래 국내 대학 창업교육의 롤모델을 구축하고 청년 창업 문화를 선도하고 있으며, 최근 창업교육 최우수대학, 벤처기업가 배출 1 위
                                대학, 학생창업자 배출 1 위 대학으로 선정되는 등 CEO 사관학교’의 지위를 확고히 하고 있습니다. 특히, 우리 대학은 창업교육 · 창업훈련 · 네트워킹 ·
                                창업보육 · 투자유치 · 글로벌 진출까지 한국형 창업교육 시스템을 구축하고, 연간 70 여개의 창업 강좌를 개설해 매년 6,000명 이상의 수강생을 배출하고
                                있습니다 .
                            </p>
                            <p>
                                또한 , 학부와 일반대학원에 창업융합학과를 설치해 창업 단계별 맞춤형 교육체계를 정립했으며 , 미국 실리콘밸리 · 뉴욕, 중국 상하이 · 북경 , 베트남
                                하노이 등에 글로벌 창업센터를 개소하고 스타트업 기업의 해외 시장 진출도 적극 지원하고 있습니다.
                            </p>
                            <p>
                                평생 직장도, 평생 직업도 없는 21 세기에는 누구나 한 번 이상은 창업의 기회를 마주하게 될 것입니다 . 아이디어나 기술만으로도 창업에 도전할 수 있지만,
                                지속 가능한 성공을 위해서는 체계적인 교육과 훈련이 필요합니다 . 다양한 분야의 전문 지식을 알아야 하고, 실전 경험을 통해 촉’을 체득해야 합니다 .
                            </p>
                            <p>
                                창업지원단을 통해 많은 학생들이 120 세 시대를 사는 지혜’를 터득하고 역량 있는 기업가로 성장하여 국가발전의 주역이 되기를 기원합니다 . <br/>감사합니다.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={cx("history")}>
                    <div className={cx("sub_cont")}>
                        <h2>연혁</h2>
                        <div className={`${cx("history_list")} clfx `}>
                            <ul>
                                <li>
                                    <span className={cx("year")}>2009</span>
                                    <ul>
                                        <li>기업가센터설립준비위원회발족</li>
                                        <li>기업가센터설립기금(10억원) 기부약정식개최</li>
                                        <li className={cx("c-blue")}>글로벌기업가센터설립(국내대학최초)</li>
                                        <li>기업가양성교육학부교양운영</li>
                                        <li>기업가포럼운영</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className={cx("year")}>2010</span>
                                    <ul>
                                        <li>기업가캠프운영</li>
                                        <li>YES 리더기업가정신대회공동주관</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className={cx("year")}>2011</span>
                                    <ul>
                                        <li>전국대학(원)생기술사업화경진대회개최</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className={cx("year")}>2012</span>
                                    <ul>
                                        <li className={cx("c-blue")}>한양스타트업아카데미운영</li>
                                        <li>창업보육센터조직통합</li>
                                        <li>서울시캠퍼스CEO 양성사업주관기관선정</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className={cx("year")}>2013</span>
                                    <ul>
                                        <li>일반인, 대학생창업아카데미사업주관기관동시선정</li>
                                        <li>글로벌시장형창업R&D 지원사업BI 협력기관선정</li>
                                        <li>글로벌창업교육프로그램주관기관선정</li>
                                        <li>2013 산학협력EXPO 인력양성부문우수상수상</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className={cx("year")}>2014</span>
                                    <ul>
                                        <li>대학기업가센터사업주관기관선정</li>
                                        <li>스마트창작터사업주관기관선정</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className={cx("year")}>2015</span>
                                    <ul>
                                        <li className={cx("c-blue")}>실리콘밸리, 뉴욕, 상하이해외기업가센터사무소설립</li>
                                        <li className={cx("c-blue")}>창업융합전공신설및운영</li>
                                        <li>아이디어팩토리사업주관기관선정</li>
                                        <li>창업맞춤형사업화지원사업주관기관선정</li>
                                        <li>동문후원창업센터개소</li>
                                        <li>창업교육최우수대학선정(교육부장관상수상)</li>
                                        <li>SK 청년비상프로그램주관기관선정</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className={cx("year")}>2016</span>
                                    <ul>
                                        <li className={cx("c-blue")}>CES 2016 한양스타트업관운영</li>
                                        <li>업사이클링3D프린팅디자인어워드개최</li>
                                        <li>창업지원부문전국대학1위선정(한경2016 이공계대학평가)</li>
                                        <li>학생창업자배출전국대학1위선정(2016 대학정보공시)</li>
                                        <li>청년드림베스트프랙티스창업부문최우수대학선정</li>
                                    </ul>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span className={cx("year")}>2017</span>
                                    <ul>
                                        <li>CES 2017 한양스타트업관운영</li>
                                        <li>창업선도대학육성사업주관기관선정</li>
                                        <li className={cx("c-blue")}>글로벌기업가센터, 대학본부산하창업지원단으로확대개편</li>
                                        <li>교원창업포럼개최</li>
                                        <li>학생창업자배출전국대학1위선정(2017 대학정보공시)</li>
                                        <li className={cx("c-blue")}>미국실리콘밸리글로벌스타트업멘토단1기위촉</li>
                                        <li className={cx("c-blue")}>대학원창업융합학과신설및운영</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className={cx("year")}>2018</span>
                                    <ul>
                                        <li>CES 2018 한양스타트업관운영</li>
                                        <li>코맥스스타트업타운준공</li>
                                        <li className={cx("c-blue")}>창업기숙사247 스타트업돔개관</li>
                                        <li>학생창업자배출전국대학1위선정(2018 대학정보공시)</li>
                                        <li>실험실특화형창업선도대학지원사업선정</li>
                                        <li>미국실리콘밸리글로벌스타트업멘토단2기위촉</li>
                                        <li className={cx("c-blue")}>베트남하노이아세안진출지원거점사무소개소></li>
                                        <li>글로벌액셀러레이터(34개사)와업무협약체결</li>
                                        <li>2018 벤처창업진흥유공국무총리표창수상</li>
                                        <li>청년드림베스트프랙티스창업지원분야고용노동부장관상수상</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className={cx("year")}>2019</span>
                                    <ul>
                                        <li>예비창업패키지지원사업주관기관선정</li>
                                        <li>캠퍼스CEO 육성사업주관기관선정</li>
                                        <li>실전창업교육주관기관선정</li>
                                        <li>개교80주년기념글로벌액셀러레이터& 스타트업피치개최</li>
                                        <li>4년연속학생창업자배출전국대학1위선정(2019 대학정보공시)</li>
                                        <li>한양스타트업아카데미13기, 14기수료</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className={cx("year")}>2020</span>
                                    <ul>
                                        <li>한양글로벌스타트업챌린지운영</li>
                                        <li className={cx("c-blue")}>중국상하이, 베트남하노이·호치민글로벌스타트업멘토단위촉</li>
                                        <li>서울시캠퍼스타운조성사업주관기관선정</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className={cx("btn_area")}>
                            <button type="button"><span>접기</span></button>
                        </div>
                    </div>
                </div>

                <div className={cx("briefing")}>
                    <div className={`${cx("sub_cont")} clfx `}>
                        <div className={cx("left_area")}>
                            <h2>스타트업 한양 <br/>브리핑</h2>
                            <div className={cx("video_area")}>
                                <img src="/assets/image/briefing_img.jpg" alt="briefing_img"/>
                            </div>
                        </div>
                        <ul className={cx("briefing_list")}>
                            <li className={cx("icon_1")}>
                                <h3><strong className={cx("c-sky")}>창업기업</strong> 배출실적</h3>
                                <ul>
                                    <li>
                                        학생창업기업 배출 국내대학 1위 <span className={cx("sky")}>4년 연속</span><br/>
                                        <span className={cx("c-gray")}>16년 43개, 17년 53개, 18년 55개, 19년 58개</span>
                                    </li>
                                    <li>
                                        벤처인증기업 배출 국내대학 1위<span className={cx("sky")}>5년 연속</span>
                                    </li>
                                    <li>
                                        7년 미만 초기 창업기업 배출 국내대학 1위<span className={cx("sky")}>3년 연속</span><br/>
                                        <span className={cx("c-gray")}>창업기업 2,153개사 6개 주요 대학 대비 평균 1.5배 (2018년 12월)</span>
                                    </li>
                                    <li>
                                        7년 미만 초기 창업기업 배출 국내대학 1위<br/>
                                        <span className={cx("c-gray")}>창업기업 2,153개사 6개 주요 대학 대비 평균 1.5배 (2018년 12월)</span>
                                    </li>
                                </ul>
                            </li>
                            <li className={cx("icon_2")}>
                                <h3>국내 최고의 <strong className={cx("c-sky")}>창업교육</strong> 역량</h3>
                                <ul>
                                    <li>국내 대학 최초 창업기업 양성을 위한 글로벌기업가센터 설립 <br/><span className={cx("c-gray")}>(2009년)</span>
                                    </li>
                                    <li>교육부, 창업교육 최우수 대학 <span className={cx("c-gray")}>(2015년~2016년)</span> <span
                                        className={cx("sky")}>2년 연속</span></li>
                                    <li>연간 39개 창업교과 운영 8,490명 이수 <span className={cx("c-gray")}>(2019년)</span></li>
                                </ul>
                            </li>
                            <li className={cx("icon_3")}>
                                <h3>국내 최고의 <strong className={cx("c-sky")}>산학협력 및 기술사업화</strong> 역량</h3>
                                <ul>
                                    <li>국내 사립대 최초의 산학협력단 설립<span className={cx("c-gray")}>(2003년)</span></li>
                                    <li>국내 대학 최초 대학기술지주회사 설립 <span className={cx("c-gray")}>(2008년)</span></li>
                                    <li>TIPS운영사 지위확보, 대학창업펀드 조성 <span className={cx("c-gray")}>(2018년)</span></li>
                                    <li>
                                        기술이전 및 기술 사업화 역량<br/>
                                        <span className={cx("c-gray f-16")}>기술이전: 45건 / 30억원 (2019년)</span><br/>
                                        <span className={cx("c-gray f-16")}>실험실 창업: 24개(2017년~2019년)</span>
                                    </li>
                                </ul>
                            </li>
                            <li className={cx("icon_4")}>
                                <h3><strong className={cx("c-sky")}>글로벌 창업지원 인프라</strong> 구축</h3>
                                <ul>
                                    <li>글로벌 창업거점센터(미국,중국,베트남), 글로벌 스타트업 멘토단 구축운영</li>
                                    <li>
                                        34개 글로벌 파트너사 업무 협력, 액셀러레이팅 프로그램 운영 <br/>
                                        <span className={cx("c-gray f-16")}>87개사 대상 엑셀러레이팅 계약 35건, 14개사 해외진출 및 투자유치 등 성과창출 (2019년)</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={cx("vision")}>
                    <div className={cx("sub_cont")}>
                        <h2>비젼 &amp; 미션</h2>
                        <div className={cx("img_area")}>
                            <img src="/assets/image/mission_img.jpg" alt="mission_img"/>
                        </div>
                        <span className={cx("txt_1")}>설립목적</span>
                        <ul className={cx("vision_list")}>
                            <li className={cx("icon_1")}>
                                창업기업가가 갖추어야 할 소양, 태도 <br/>
                                및 역량을 체계적으로 교육함으로써 <br/>
                                <strong className={cx("c-sky")}>“혁신 기술창업인” 양성</strong>
                            </li>
                            <li className={cx("icon_2")}>
                                실용인재 육성을 통해 국가발전의 큰 <br/>
                                축을 담당해 온 한양대학교의 <strong className={cx("c-sky")}>실용학풍과 <br/>
                                건학이념을 지속적 계승.발전</strong>
                            </li>
                            <li className={cx("icon_3")}>
                                지식 전달만이 아닌<strong className={cx("c-sky")}> 현장 중심의 실질적<br/>
                                교육.훈련</strong>을 통해 창업 성공률 제고 및 <br/>
                                지속 경영능력 배양
                            </li>
                            <li className={cx("icon_4")}>
                                기업가정신(Entrepreneurship) 부활 및 <br/>
                                창업 마인드 고취를 통한 <strong className={cx("c-sky")}>일자리 창출과 <br/>
                                산업구조 고도화에 기여</strong>
                            </li>
                            <li className={cx("icon_5")}>
                                지우수한 예비창업자를 발굴하여 창업을 <br/>
                                지원하고, <strong className={cx("c-sky")}>동문 인프라 연계를 통한 <br/>
                                체계적 육성</strong>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={cx("organization")}>
                    <div className={cx("sub_cont")}>
                        <h2>조직도</h2>
                        <div className={cx("img_area")}>
                            <img src="/assets/image/organization.jpg" alt="mission_img"/>
                        </div>
                        <table>
                            <colgroup>
                                <col style={{width:"34%"}}/>
                                <col style={{width:"18.18%"}}/>
                                <col/>
                            </colgroup>
                            <tbody>
                            <tr>
                                <td>창업지원단 총괄</td>
                                <td>2861</td>
                                <td className={cx("c-sky")}>danielku@hanyang.ac.kr</td>
                            </tr>
                            <tr>
                                <td>창업강좌, 학생/동문 창업지원</td>
                                <td>2856, 2865</td>
                                <td className={cx("c-sky")}>ksy0521@hanyang.ac.kr, lsyhy@hanyang.ac.kr</td>
                            </tr>
                            <tr>
                                <td>창업강좌, 창업융합전공</td>
                                <td>2533, 2859</td>
                                <td className={cx("c-sky")}>pleasure@hanyang.ac.kr, yes1003kr@hanyang.ac.kr</td>
                            </tr>
                            <tr>
                                <td>창업동아리, 창업경진대회</td>
                                <td>2858</td>
                                <td className={cx("c-sky")}>wooli44@hanyang.ac.kr</td>
                            </tr>
                            <tr>
                                <td>한양스타트업아카데미, 247 스타트업 돔</td>
                                <td>2866</td>
                                <td className={cx("c-sky")}>mhparkhy@hanyang.ac.kr</td>
                            </tr>
                            <tr>
                                <td>창업팀 발굴 및 육성</td>
                                <td>1341</td>
                                <td className={cx("c-sky")}>chose@hanyang.ac.kr</td>
                            </tr>
                            <tr>
                                <td>초기창업패키지 사업화지원</td>
                                <td>2851, 1979</td>
                                <td className={cx("c-sky")}>rywmy@hanyang.ac.kr, byunjihee@hanyang.ac.kr</td>
                            </tr>
                            <tr>
                                <td>예비창업패키지 사업화지원</td>
                                <td>2857, 2982, 2852</td>
                                <td className={cx("c-sky")}>mindhaje@hanyang.ac.kr, stella0815@hanyang.ac.kr, areumj@hanyang.ac.kr</td>
                            </tr>
                            <tr>
                                <td>글로벌 창업지원 프로그램 운영</td>
                                <td>2230</td>
                                <td className={cx("c-sky")}>jhkim511@hanyang.ac.kr</td>
                            </tr>
                            <tr>
                                <td>창업지원단 운영</td>
                                <td>2871</td>
                                <td className={cx("c-sky")}>sgch77@hanyang.ac.kr</td>
                            </tr>
                            <tr>
                                <td>예산, 기부금 관리</td>
                                <td>2867</td>
                                <td className={cx("c-sky")}>ohhyerin@hanyang.ac.kr</td>
                            </tr>
                            <tr>
                                <td>홍보, 마케팅</td>
                                <td>2871</td>
                                <td className={cx("c-sky")}>sgch77@hanyang.ac.kr</td>
                            </tr>
                            </tbody>
                        </table>

                        <h2>IAB 자문위원회</h2>
                        <table>
                            <colgroup>
                                <col style={{width:"34%"}}/>
                                <col style={{width:"32.5%"}}/>
                                <col/>
                            </colgroup>
                            <tbody>
                            <tr>
                                <td>고영하</td>
                                <td>한국엔젤투자협회</td>
                                <td>회장</td>
                            </tr>
                            <tr>
                                <td>김문선</td>
                                <td>㈜넥스트챌린지</td>
                                <td>팀장</td>
                            </tr>
                            <tr>
                                <td>김영복</td>
                                <td>㈜넥스트챌린지</td>
                                <td>대표이사</td>
                            </tr>
                            <tr>
                                <td>최영준</td>
                                <td>베텍</td>
                                <td>대표이사</td>
                            </tr>
                            <tr>
                                <td>한정수</td>
                                <td>서울창조경제혁신센터</td>
                                <td>센터장</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
            </>
    );
};

export default Introduce;
