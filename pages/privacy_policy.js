import React from 'react';
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
                    <p>한양대학교 창업지원단은 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보
                        처리지침을 수립·공개합니다.</p>
                    <br/>
                    <h3>제1조(개인정보의 처리목적)</h3>
                    <p>한양대학교 창업지원단은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는
                        개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
                    <br/>
                    <p>가. 한양대학교 창업지원단 홈페이지에서 제공하는 회원서비스(창업상담, 공간예약, 학생창업자 신고) 이용에 따른 서비스를 제공하기 위해 개인정보(신청자 성명, e-mail,
                        전화번호)를 처리합니다.</p>
                    <br/>
                    <h3>제2조(개인정보의 처리 및 보유기간)</h3>
                    <p>가. 한양대학교 창업지원단은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를
                        처리·보유합니다.</p>
                    <br/>
                    <p>나. 각각의 개인정보 처리 및 보유기간은 다음과 같습니다.</p>
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
                                <th scope="col">보유목적</th>
                                <th scope="col">보유근건</th>
                                <th scope="col">기록항목</th>
                                <th scope="col">보유기간</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>홈페이지<br/>(창업상담, 공간예약, 학생창업자 신고)</td>
                                <td>정보주체동의</td>
                                <td>성명, 이메일, 전화번호</td>
                                <td>3년</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <br/>
                    <h3>제3조(개인정보의 제3자 제공)</h3>
                    <p>한양대학교 창업지원단은 원칙적으로 정보주체의 개인정보를 수집·이용 목적으로 명시한 범위 내에서 처리하며, 다음의 경우를 제외하고는 정보주체의 사전 동의 없이는 본래의 목적
                        범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다.</p>
                    <br/>
                    <p>가. 정보주체로부터 별도의 동의를 받는 경우</p>
                    <p>나. 법률에 특별한 규정이 있는 경우</p>
                    <p>다. 정보주체 또는 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히 정보주체 또는 제3자의 급박한 생명, 신체,
                        재산의 이익을 위하여 필요하다고 인정되는 경우</p>
                    <p>라. 통계작성 및 학술연구 등의 목적을 위하여 필요한 경우로서 특정 개인을 알아 볼 수 없는 형태로 개인정보를 제공하는 경우</p>
                    <p>마. 개인정보를 목적 외의 용도로 이용하거나 이를 제3자에게 제공하지 아니하면 다른 법률에서 정하는 소관 업무를 수행할 수 없는 경우로서 보호위원회의 심의·의결을 거친
                        경우</p>
                    <p>바. 조약, 그 밖의 국제협정의 이행을 위하여 외국정보 또는 국제기구에 제공하기 위하여 필요한 경우</p>
                    <p>사. 범죄의 수사와 공소의 제기 및 유지를 위하여 필요한 경우</p>
                    <p>아. 법원의 재판업무 수행을 위하여 필요한 경우</p>
                    <p>차. 형 및 감호, 보호처분의 집행을 위하여 필요한 경우</p>
                    <br/>
                    <h3>제4조(개인정보처리의 위탁)</h3>
                    <p>가. 한양대학교 창업지원단은 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.</p>
                    <div className={cx("tb_style_1")}>
                        <table>
                            <colgroup>
                                <col/>
                                <col/>
                                <col/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th scope="col">수탁업체</th>
                                <th scope="col">위탁업무 내용</th>
                                <th scope="col">보육 및 이용기간</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>주식회사 에네이</td>
                                <td>홈페이지 유지보수</td>
                                <td>처리목적 달성 시 또는 <br/>위탁계약 종료 시 까지</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>나. 한양대학교 창업지원단은 위탁계약 시 개인정보 보호 관련 법규의 준수, 개인정보에 관한 3자 제공 금지 및 책임부담 등을 명확히 규정하여 계약내용을 보관하고 있으며, 업체
                        변경 시 공지사항 및 개인정보 처리방침을 통해 고지하겠습니다.</p>
                    <br/>
                    <h3>제5조(정보주체의 권리 ·의무 및 행사방법)</h3>
                    <p>가. 정보주체는 한양대학교 창업지원단에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
                    <br/>
                    <p>1. 개인정보 열람 요구</p>
                    <p>2. 오류 등이 있을 경우 정정 요구</p>
                    <p>3. 삭제 요구</p>
                    <p>4. 처리정지 요구</p>
                    <br/>
                    <p>나. 제1항에 따른 권리 행사는 한양대학교 창업지원단에 대해 서면, 전화, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 한양대학교 창업지원단은 이에 대해 지체없이
                        조치하겠습니다.</p>
                    <p>다. 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 한양대학교 창업지원단은 정정 또는 삭제를 완료할 때까지 당해 개인 정보를 이용하거나 제공하지
                        않습니다.</p>
                    <p>라. 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행 규칙 별지 제11호 서식에 따른
                        위임장을 제출하셔야 합니다.</p>
                    <p>마. 정보주체는 개인정보 보호법 등 관계법령을 위반하여 한양대학교 창업지원단이 처리하고 있는 정보주체 본인이나 타인의 개인정보 및 사생활을 침해하면 안됩니다.</p>
                    <br/>
                    <h3>제6조(처리하는 개인정보 항목)</h3>
                    <p>한양대학교 창업지원단은 다음의 개인정보 항목을 처리하고 있습니다.</p>
                    <div className={cx("tb_style_1")}>
                        <table>
                            <colgroup>
                                <col style={{width:"50%"}}/>
                                <col/>
                            </colgroup>
                            <tbody>
                            <tr style={{borderTop:"1px solid #aaa"}}>
                                <td>창업상담</td>
                                <td style={{textAlign:"left",borderLeft:"1px solid #ddd"}}>성명, 이메일, 전화번호</td>
                            </tr>
                            <tr style={{borderTop:"1px solid #aaa"}}>
                                <td>공간예약</td>
                                <td style={{textAlign:"left",borderLeft:"1px solid #ddd"}}>성명, 이메일, 전화번호</td>
                            </tr>
                            <tr style={{borderTop:"1px solid #aaa"}}>
                                <td>학생창업자 신고</td>
                                <td style={{textAlign:"left",borderLeft:"1px solid #ddd"}}>성명, 이메일, 전화번호</td>
                            </tr>
                            <tr style={{borderTop:"1px solid #aaa"}}>
                                <td>개인정보파일명칭</td>
                                <td style={{textAlign:"left",borderLeft:"1px solid #ddd"}}>개인정보파일에 기록되는 개인정보의 항목</td>
                            </tr>
                            <tr>
                                <td>창업상담(온라인)</td>
                                <td style={{textAlign:"left",borderLeft:"1px solid #ddd"}}>성명, 이메일, 전화번호</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <br/>
                    <h3>제7조(개인정보 파기)</h3>
                    <p>가. 한양대학교 창업지원단은 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기 합니다.</p>
                    <p>나. 정보주체로부터 동의 받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존 하여야 하는 경우에는, 해당
                        개인정보(또는 개인정보파일)를 별도의 데이터베이스(DB)로 옮기거나 보관 장소를 달리하여 보존합니다.</p>
                    <p>다. 개인정보 파기의 절차 및 방법은 다음과 같습니다.</p>
                    <br/>
                    <p>(1) 파기절차</p>
                    <p>한양대학교 창업지원단은 파기하여야 하는 개인정보(또는 개인정보파일)에 대해 개인정보 파기계획을 수립하여 파기합니다. 한양대학 교 입학처는 파기 사유가 발생한 개인정보(또는
                        개인정보파일)을 선정하고, 개인정보 보호책임자의 승인을 받아 개인정보(또는 개 인정보파일)을 파기합니다.</p>
                    <p>(2) 파기방법</p>
                    <p>한양대학교 창업지원단은 전자적 파일 형태로 기록·저장된 개인정보는 기록을 재생할 수 없도록 로우레밸포멧(Low Level Format) 등의 방법을 이용하여 파기하며, 종이
                        문서에 기록·저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.</p>
                    <br/>
                    <h3>제8조(개인정보의 안전성 확보조치)</h3>
                    <p>가. 한양대학교 창업지원단은 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
                    <br/>
                    <p>1.관리적 조치 : 내부관리계획 수립·시행, 정기적 직원 교육 등</p>
                    <p>2.기술적 조치 : 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유 식별 정보 등의 암호화, 보안프로그램 설치</p>
                    <p>3.물리적 조치 : 전산실, 자료보관실 등의 접근통제</p>
                    <br/>
                    <h3>제9조(개인정보의 보호책임자)</h3>
                    <p>가. 한양대학교 창업지원단은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인 정보
                        보호책임자를 지정하고 있습니다.</p>
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
                                <th scope="col">구분</th>
                                <th scope="col">부서명</th>
                                <th scope="col">담당자</th>
                                <th scope="col">연락처</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>개인정보 보호책임자</td>
                                <td>한양대학교 창업지원단</td>
                                <td>진기철</td>
                                <td>전화 : 02-2220-2861<br/>메일 : danielku@hanyang.ac.kr</td>
                            </tr>
                            <tr>
                                <td>개인정보 보호관리자</td>
                                <td>한양대학교 창업지원단</td>
                                <td>장상길</td>
                                <td>전화 : 02-2220-2871<br/>메일 : sgch77@hanyang.ac.kr</td>
                            </tr>
                            <tr>
                                <td>위탁업체</td>
                                <td></td>
                                <td>전재혁</td>
                                <td>전화 : 0506-191-0025<br/>메일 : accounts@eney.co.kr</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>나. 정보주체께서는 한양대학교 창업지원단의 서비스(또는 사업)를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자
                        및 담당부서로 문의하실 수 있습니다. 한양대학교 창업지원단은 정보주체의 문의에 대해 지체 없이 답변 및 처리해 드릴 것입니다.</p>
                    <br/>
                    <h3>제10조(개인정보 열람청구)</h3>
                    <p>정보주체는 개인정보 보호법 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. 한양대학교 창업지원단은 정보주체의 개인 정보 열람청구가 신속하게 처리되도록
                        노력하겠습니다.</p>
                    <br/>
                    <p>개인정보 열람청구 접수·처리 부서</p>
                    <p>- 부서명 : 한양대학교 창업지원단</p>
                    <p>- 담당자 : 장상길</p>
                    <p>- 연락처 : Tel) 02-2220-2871 / sgch77@hanyang.ac.kr</p>
                    <br/>
                    <p>② 정보주체께서는 제1항의 열람청구 접수·처리부서 이외에, 행정안전부의 ‘개인정보보호 종합지원 포털’ 웹사이트(www.privacy.go.kr)를 통하여 서도 개인정보
                        열람청구를 하실 수 있습니다.</p>
                    <br/>
                    <p>행정안전부 개인정보보호 종합지원 포털 → 개인정보 민원 → 개인정보 열람 등 요구 (공공 아이핀을 통한 실명인증 필요)</p>
                    <br/>
                    <h3>제11조(권익침해 구제방법)</h3>
                    <p>개인정보주체는 개인정보침해로 인한 피해를 구제 받기 위하여 개인정보 분쟁조정위원회, 한국인터넷진흥원 개인정보 침해-신고 센터 등에 분쟁해결이나 상담 등을 신청할 수
                        있습니다.</p>
                    <br/>
                    <p>☞ 개인정보 분쟁조정위원회 : 1833-6972(www.kopico.go.kr)</p>
                    <br/>
                    <p>☞ 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)</p>
                    <br/>
                    <p>☞ 대검찰청 사이버범죄수사단 : 02-3480-3571(cybercid@spo.go.kr)</p>
                    <br/>
                    <p>☞ 경찰청 사이버안전국 : (국번없이) 182 (cyberbureau.police.go.kr)</p>
                    <br/>
                    <p>또한, 개인정보의 열람, 정정·삭제, 처리정지 등에 대한 정보주체자의 요구에 대하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익을 침해 받은 자는
                        행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.</p>
                    <br/>
                    <p>☞ 온라인행정심판(www.simpan.go.kr)</p>
                    <br/>
                    <h3>제12조(개인정보 처리방침 변경)</h3>
                    <p>① 이 개인정보 처리방침은 2018.03.01부터 적용됩니다.</p>
                </div>
            </section>

        </>
    );
};

export default PrivacyPolicy;
