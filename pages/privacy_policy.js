import React from 'react';
import Link from 'next/link';
import styles from '../public/assets/styles/startup_education/startup_education.module.css';
import classnames from "classnames/bind"
import Head from "next/head";

const cx = classnames.bind(styles);
const PrivacyPolicy = () => {
    return (
        <>
            <Head>
                <title>한양대학교 창업지원단 -개인정보처리방침</title>
            </Head>
            <section className={cx("container","privacyPolicy")}>
                <div className={cx("sub_container","startup_procedure")}>
                    <h1 className={cx("sub_top_title")}>개인정보처리방침</h1>
                </div>

                <div className={cx("sub_cont")}>
                    <h3>한양대학교 창업지원단 개인정보 처리방침</h3>
                    <p>한양대학교 창업지원단은 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립·공개합니다.</p>
                    <br/>
                    <h3>제1조(개인정보의 처리목적)</h3>
                    <p>한양대학교 창업지원단은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
                    <br/>
                    <p>1. (회원관리)한양대학교 창업지원단 홈페이지에서 제공하는 회원제 서비스 이용에 따른 본인확인, 개인 식별, 불량회원의 부정 이용 방지와 비인가 사용방지, 분쟁조정을 위한 기록보존, 불만처리 등 민원처리, 공지사항 전달 등의 목적으로 개인정보를 처리합니다.</p>
                    <br/>
                    <p>2. (서비스 이용)한양대학교 창업지원단 홈페이지에서 제공하는 회원서비스(창업상담, 공간예약, 학생창업자 신고) 이용에 따른 서비스를 제공하기 위해 개인정보를 처리합니다.</p>
                    <br/>
                    <h3>제2조(처리하는 개인정보 항목)</h3>
                    <p>한양대학교 창업지원단은 다음과 같은 개인정보 법적 근거로 정보주체의 개인정보를 수집 및 이용하고 있습니다.</p>
                    <div className={cx("tb_style_1")}>
                        <table>
                            <colgroup>
                                <col style={{width:"25%"}}/>
                                <col style={{width:"25%"}}/>
                                <col style={{width:"25%"}}/>
                                <col style={{width:"25%"}}/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th scope="col">법적근거</th>
                                <th scope="col">구분</th>
                                <th scope="col">수집ㆍ이용 목적</th>
                                <th scope="col">개인정보의 항목</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>정보주체 동의</td>
                                <td>회원 정보</td>
                                <td>홈페이지 회원관리</td>
                                <td>아이디, 이름, 이메일</td>
                            </tr>
                            <tr>
                                <td>정보주체 동의</td>
                                <td>창업상담</td>
                                <td>상담 이력 관리</td>
                                <td>이름, 이메일, 전화번호</td>
                            </tr>
                            <tr>
                                <td>정보주체 동의</td>
                                <td>공간예약</td>
                                <td>공간 예약 관리</td>
                                <td>이름, 이메일, 전화번호, 소속(학과, 기업, 동아리)</td>
                            </tr>
                            <tr>
                                <td>정보주체 동의</td>
                                <td>학생창업자 신고</td>
                                <td>학생 창업자 신고 및 관리</td>
                                <td>이름, 이메일, 전화번호, 학번, 생년월일</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <br/>
                    <h3>제3조(개인정보의 처리 및 보유기간)</h3>
                    <p>① 한양대학교 창업지원단은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
                    <br/>
                    <p>② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</p>
                    <div className={cx("tb_style_1")}>
                        <table>
                            <colgroup>
                                <col style={{width:"33%"}}/>
                                <col style={{width:"33%"}}/>
                                <col style={{width:"33%"}}/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th scope="col">내용</th>
                                <th scope="col">보유기간</th>
                                <th scope="col">개인정보의 항목 (작성권장사항)</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>회원 정보</td>
                                <td>준영구</td>
                                <td>아이디, 이름, 이메일</td>
                            </tr>
                            <tr>
                                <td>창업상담</td>
                                <td rowSpan="3">3년</td>
                                <td>이름, 이메일, 전화번호</td>
                            </tr>
                            <tr>
                                <td>공간예약</td>
                                <td>이름, 이메일, 전화번호, 소속(학과, 기업, 동아리)</td>
                            </tr>
                            <tr>
                                <td>학생창업자 신고</td>
                                <td>이름, 이메일, 전화번호, 학번, 생년월일</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <br/>
                    <h3>제4조(개인정보의 파기 절차 및 방법에 관한 사항)</h3>
                    <p>① 한양대학교 창업지원단은 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</p>
                    <p>② 정보주체로부터 동의 받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보(또는 개인정보파일)을 별도의 데이터베이스(DB)로 옮기거나 보관 장소를 달리하여 보존합니다.</p>
                    <p>③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.</p>
                    <br/>
                    <p>
                        1. 파기절차 <br/>
                        한양대학교 창업지원단은 파기하여야 하는 개인정보(또는 개인정보파일)에 대해 개인정보 파기계획을 수립하여 파기합니다. 한양대학교 창업지원단은 파기 사유가 발생한 개인정보(또는 개인정보파일)을 선정하고, 개인정보 보호책임자의 승인을 받아 개인정보(또는 개인정보파일)을 파기합니다.
                    </p>
                    <br/>
                    <p>
                        2. 파기방법 <br/>
                        한양대학교 창업지원단은 전자적 파일 형태로 기록·저장된 개인정보는 기록을 재생할 수 없도록 로우레밸포멧(Low Level Format) 등의 방법을 이용하여 파기하며, 종이 문서에 기록·저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.
                    </p>
                    <br/>
                    <h3>제5조(개인정보처리의 위탁에 관한 사항)</h3>
                    <p>① 한양대학교 창업지원단은 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.</p>
                    <div className={cx("tb_style_1")}>
                        <table>
                            <colgroup>
                                <col style={{width:"50%"}}/>
                                <col style={{width:"50%"}}/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th scope="col">위탁받는 자(수탁자)</th>
                                <th scope="col">위탁업무</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>주식회사 에네이</td>
                                <td>홈페이지 유지보수</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>② 한양대학교 창업지원단은 위탁계약 체결시 개인정보 보호법 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.</p>
                    <p>③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.</p>
                    <br/>
                    <h3>제6조(정보주체의 권리·의무 및 행사방법에 관한 사항)</h3>
                    <p>① 정보주체는 한양대학교 창업지원단에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
                    <br/>
                    <p>1. 개인정보 열람요구</p>
                    <p>2. 오류 등이 있을 경우 정정 요구</p>
                    <p>3. 삭제요구</p>
                    <p>4. 처리정지 요구</p>
                    <p>5. 정보주체 이외로부터 수집한 개인정보를 처리할 경우 고지 요구</p>
                    <br/>
                    <p>② 제1항에 따른 권리 행사는 한양대학교 창업지원단에 대해 서면, 전화, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 한양대학교 창업지원단은 이에 대해 지체없이 조치하겠습니다.</p>
                    <p>③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 한양대학교 창업지원단은 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.</p>
                    <p>④ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 처리 방법에 관한 고시 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.</p>
                    <p>⑤ 정보주체는 개인정보 보호법 등 관계법령을 위반하여 한양대학교 창업지원단이 처리하고 있는 정보주체 본인이나 타인의 개인정보 및 사생활을 침해하여서는 아니 됩니다.</p>
                    <br/>
                    <h3>제7조(개인정보의 안전성 확보 조치에 관한 사항)</h3>
                    <p>① 한양대학교는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
                    <br/>
                    <p>1. 관리적 조치 : 내부관리계획 수립·시행, 정기적 직원 교육 등</p>
                    <p>2. 기술적 조치 : 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치</p>
                    <p>3. 물리적 조치 : 전산실, 자료보관실 등의 접근통제</p>
                    <br/>
                    <br/>
                    <h3>제8조(개인정보 업무 담당부서 및 고충사항을 처리하는 부서에 관한 사항)</h3>
                    <p>정보주체께서는 한양대학교 창업지원단의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 담당부서로 문의하실 수 있습니다. 한양대학교 창업지원단은 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.</p>
                    <div className={cx("tb_style_1")}>
                        <table>
                            <colgroup>
                                <col style={{width:"20%"}}/>
                                <col style={{width:"20%"}}/>
                                <col style={{width:"20%"}}/>
                                <col style={{width:"20%"}}/>
                                <col style={{width:"20%"}}/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th scope="col">부서명</th>
                                <th scope="col">구분</th>
                                <th scope="col">성명</th>
                                <th scope="col">직위</th>
                                <th scope="col">연락처</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td rowSpan="3">한양대학교 창업지원단</td>
                                <td>개인정보보호 분야별 책임자</td>
                                <td>구태용</td>
                                <td>팀장</td>
                                <td>전화 : 02-2220-8261<br/>메일 : danielku@hanyang.ac.kr</td>
                            </tr>
                            <tr>
                                <td>개인정보보호 분야별 담당자</td>
                                <td>장상길</td>
                                <td>과장</td>
                                <td>전화 : 02-2220-2871<br/>메일 : sgch77@hanyang.ac.kr</td>
                            </tr>
                            <tr>
                                <td>개인정보취급자</td>
                                <td>김효진</td>
                                <td>대리</td>
                                <td>전화 : 02-2220-2857<br/>메일 : summerwave@hanyang.ac.kr</td>
                            </tr>
                            <tr>
                                <td>-</td>
                                <td>위탁업체</td>
                                <td>전재혁</td>
                                <td></td>
                                <td>전화 : 070-7933-1616<br/>메일 : accounts@eney.co.kr</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <br/>
                    <h3>제9조(권익침해 구제방법에 관한 사항)</h3>
                    <p>① 정보주체가 개인정보를 침해당했을 때는 아래와 같이 한양대학교에 민원접수를 할 수 있습니다.</p>
                    <br/>
                    <p>▶ 개인정보 침해관련 민원 접수·처리부서 </p>
                    <p>부서명 : 총무처 총무팀 (개인정보 처리에 관한 업무 총괄 부서)</p>
                    <p>담당자 : 한양대학교 개인정보보호 담당자</p>
                    <p>연락처 : 02-2220-0117, privacy@hanyang.ac.kr</p>
                    <br/>
                    <p>▶ 개인정보보호 총괄 책임자 및 담당자</p>
                    <div className={cx("tb_style_1")}>
                        <table>
                            <colgroup>
                                <col style={{width:"50%"}}/>
                                <col style={{width:"50%"}}/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th scope="col">구분</th>
                                <th scope="col">직위</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>개인정보보호 책임자</td>
                                <td>총무처장</td>
                            </tr>
                            <tr>
                                <td>개인정보보호 담당자</td>
                                <td>총무팀장</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>② 정보주체는 한양대학교의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이 필요하시면 아래 기관으로 문의하실 수 있습니다.</p>
                    <br/>
                    <p>▶ 개인정보 분쟁조정 : (국번없이) 1833-6792 (www.privacy.go.kr) <a href="https://www.privacy.go.kr/front/main/main.do" target="_blank" rel="noopener noreferrer">[링크]</a></p>
                    <p>▶ 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr) <a href="https://privacy.kisa.or.kr/main.do" target="_blank" rel="noopener noreferrer">[링크]</a></p>
                    <p>▶ 대검찰청 : (국번없이) 1301 (spo.go.kr) <a href="https://spo.go.kr/site/spo/main.do" target="_blank" rel="noopener noreferrer">[링크]</a></p>
                    <p>▶ 경찰청 : (국번없이) 182 (ecrm.cyber.go.kr/minwon/main) <a href="https://ecrm.police.go.kr/minwon/main" target="_blank" rel="noopener noreferrer">[링크]</a></p>
                    <br/>
                    <h3>제10조(개인정보 처리방침의 변경에 관한 사항) </h3>
                    <p>① 이 개인정보 처리방침은 2025. 8. 6 부터 적용됩니다.</p>
                    <p>② 이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다.</p>
                    <Link href="/privacy_policy-before">- 2018. 3. 1 ~ 2025. 8. 5 적용</Link>
                </div>
            </section>

        </>
    );
};

export default PrivacyPolicy;
