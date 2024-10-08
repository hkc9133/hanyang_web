import React from 'react';
import styles from '../public/assets/styles/startup_education/startup_education.module.css';
import classnames from "classnames/bind"
import Head from "next/head";

const cx = classnames.bind(styles);

const TermsPage = () => {
    return (
        <>
            <Head>
                <title>한양대학교 창업지원단 -이용약관</title>
            </Head>
            <section className={cx("container","privacyPolicy")}>
                <div className={cx("sub_container","startup_procedure")}>
                    <h1 className={cx("sub_top_title")}>이용약관</h1>
                </div>

                <div className={cx("sub_cont")}>
                    <h2>제 1 장 총칙</h2>
                    <br/>
                    <h3>제 1 조 (목적)</h3>
                    <p>이 약관은 한양대학교 창업지원단 사이트가 제공하는 모든 서비스(이하 ‘서비스’)의 이용 조건 및 절차, 창업지원단 및 이용자의 권리, 의무 및 책임 사항 등 기타 필요한
                        사항을 규정함을 목적으로 합니다.</p>
                    <br/>
                    <h3>제 2 조 (약관의 효력 및 변경)</h3>
                    <p>① 이 약관은 창업지원단 온라인 서비스 및 기타의 방법을 통하여 이를 공지함으로써 효력이 발생됩니다.</p>
                    <p>② 창업지원단 사정상 중요한 사유가 발생될 경우 사전 고지 없이 이 약관의 내용을 변경할 수 있으며, 변경된 약관은 ①항과 같은 방법으로 공지함으로써 효력이
                        발생됩니다.</p>
                    <p>③ 회원은 변경된 약관에 동의하지 않을 경우 회원 탈퇴를 요청할 수 있으며, 변경된 약관의 효력 발생일 이후에도 서비스를 계속 사용할 경우 약관의 변경 사항에 동의한 것으로
                        간주됩니다.</p>
                    <br/>
                    <h3>제 3 조 (약관 외 준칙)</h3>
                    <p>본 약관에 명시되지 않은 사항은 관계법령에 따릅니다.</p>
                    <br/>
                    <h3>제 4 조 (용어의 정의)</h3>
                    <p>이 약관에서 사용하는 주요한 용어의 정의는 다음과 같습니다.</p>
                    <br/>
                    <p>1. 기본회원 : 창업지원단과 서비스 이용 계약을 체결하고 이용자 아이디(ID)를 부여 받은 자를 말합니다.<br/>비회원 : 회원에 가입하지 않고 서비스를 이용하는 자를
                        말합니다.</p>
                    <p>2. 운영자 : 서비스의 전반적인 관리와 원활한 운영을 위하여 창업지원단에서 선정한 자를 말합니다.</p>
                    <br/>
                    <h2>제 2 장 서비스 이용 계약 체결</h2>
                    <br/>
                    <h3>제 5 조 (이용 계약의 성립)</h3>
                    <p>① 사용자는 회원가입 시 "동의합니다."를 선택하면 이 약관에 동의하는 것으로 간주됩니다. 약관 변경 시에도 이와 동일하며, 변경된 약관에 동의하지 않을 경우 회원 등록
                        취소가 가능합니다.</p>
                    <p>② 이용 계약은 서비스 이용 희망자의 이용약관 동의 후 이용 신청에 대하여 창업지원단이 승낙함으로써 성립합니다.</p>
                    <br/>
                    <h3>제 6 조 (이용 신청)</h3>
                    <p>회원으로 가입하여 서비스를 이용하기를 희망하는 자는 창업지원단이 요청하는 소정의 가입 신청 양식에서 요구하는 사항을 기록하여 신청합니다.</p>
                    <br/>
                    <h3>제 7 조 (이용 신청의 승낙)</h3>
                    <p>① 제 6 조에 따른 이용 신청에 대하여, 창업지원단은 특별한 사정이 없는 한 접수 순서대로 이용 신청을 승낙합니다.</p>
                    <p>② 다음 각 호에 해당하는 경우 창업지원단은 이용 신청에 대한 승낙을 제한할 수 있고, 그 사유가 해소될 때까지 승낙을 유보할 수 있습니다.</p>
                    <br/>
                    <p>1. 서비스 관련 설비에 여유가 없는 경우</p>
                    <p>2. 기술상 지장이 있는 경우</p>
                    <p>3. 기타 창업지원단의 사정상 필요하다고 인정되는 경우</p>
                    <br/>
                    <p>③ 창업지원단은 다음 각 호에 해당하는 사항을 인지하는 경우 이용 신청을 승낙하지 아니할 수 있습니다.</p>
                    <br/>
                    <p>1. 본인의 실명으로 신청하지 않은 경우</p>
                    <p>2. 다른 사람의 명의를 사용하여 신청한 경우</p>
                    <p>3. 이용 신청 시 필요 사항을 허위로 기재하여 신청한 경우</p>
                    <p>4. 사회의 안녕과 질서 혹은 미풍양속을 저해할 목적으로 신청한 경우</p>
                    <p>5. 기타 창업지원단이 정한 이용 신청 요건이 미비된 경우</p>
                    <br/>
                    <p>④ ②항 또는 ③항에 의하여 이용 신청의 승낙을 유보하거나 승낙하지 아니하는 경우, 창업지원단은 이를 이용하는 신청자에게 알려야 합니다. 다만, 창업지원단의 귀책 사유 없이
                        이용 신청자에게 통지할 수 없는 경우는 예외로 합니다.</p>
                    <br/>
                    <h3>제 8 조 (개인정보의 보호)</h3>
                    <p>① 창지원단은 회원의 개인정보를 보호하고 존중합니다.</p>
                    <p>② 창업지원단은 회원이 서비스를 이용함에 있어서 온라인 상에서 창업지원단에게 제공한 개인정보가 보호받을 수 있도록 최선을 다하고 있습니다. 이에 통신비밀보호법,
                        전기통신사업법, 정보통신망 이용촉진 등에 관한 법률 등 서비스 제공자가 준수하여야 할 관련 법규를 바탕으로 개인정보 보호정책을 만들어 이를 준수하고 있습니다. 자세한 사항은
                        창업지원단의 개인정보 보호정책을 참고하시기 바랍니다.</p>
                    <p>③ 창업지원단은 이용 신청 시 회원이 제공하는 정보, 커뮤니티 활동, 각종 이벤트 참가를 위하여 회원이 제공하는 정보, 기타 서비스 이용 과정에서 수집되는 정보 등을 통하여
                        회원에 관한 정보를 수집하며, 회원의 개인정보는 본 이용 계약의 이행과 본 이용 계약상의 서비스 제공을 위한 목적으로만 사용됩니다.</p>
                    <p>④ 창업지원단은 서비스 제공과 관련하여 취득한 회원의 신상정보를 본인의 승낙 없이 제 3자에게 누설 또는 배포할 수 없으며, 상업적 목적으로 사용할 수 없습니다. 다만,
                        다음의 각 호에 해당하는 경우에는 그러하지 아니합니다.</p>
                    <br/>
                    <p>1. 정보통신서비스의 제공에 따른 요금 정산을 위하여 필요한 경우</p>
                    <p>2. 통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로써 특정 개인을 식별할 수 없는 형태로 가공하여 제공하는 경우</p>
                    <p>3. 관계 법령에 의하여 수사상 목적으로 정해진 절차와 방법에 따라 관계 기관의 요구가 있는 경우</p>
                    <p>4. 다른 법률에 특별한 규정이 있는 경우</p>
                    <p>5. 정보통신윤리위원회의 요청이 있는 경우</p>
                    <br/>
                    <p>⑤ 창업지원단은 서비스를 통해 회원의 컴퓨터에 쿠키를 전송할 수 있습니다. 회원은 쿠키 수신을 거부하거나 쿠키 수신에 대해 경고하도록 브라우저 설정을 변경할 수
                        있습니다.</p>
                    <br/>
                    <h3>제 9 조 (계약 사항의 변경)</h3>
                    <p>① 회원은 개인정보 관리를 통해 언제든지 본인의 개인정보를 열람하고 수정할 수 있습니다.</p>
                    <p>② 회원은 이용 신청 시 기재한 사항이 변경되었을 경우 온라인으로 수정을 해야 하며 회원정보를 변경하지 아니하여 발생되는 문제의 책임은 회원에게 있습니다.</p>
                    <br/>
                    <h2>제 3 장 창업지원단과 회원의 권리 및 의무</h2>
                    <br/>
                    <h3>제 10 조 (창업지원단의 의무)</h3>
                    <p>① 창업지원단은 다음 각 호의 사유가 발생한 경우를 제외하고 계속적, 안정적으로 서비스를 제공할 의무가 있습니다.</p>
                    <br/>
                    <p>1. 서비스용 설비의 보수, 정기 점검 또는 공사로 인한 부득이한 경우</p>
                    <p>2. 전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지한 경우</p>
                    <p>3. 전시, 사변, 천재지변 또는 이에 준하는 국가비상사태가 발생하거나 발생할 우려가 있는 경우</p>
                    <p>4. 설비 장애 또는 이용 폭주 등으로 인하여 서비스 이용에 지장이 있는 경우</p>
                    <br/>
                    <p>② 창업지원단은 회원으로부터 소정의 절차에 의해 제기되는 의견에 대해서는 적절한 절차를 거처 처리하며, 처리 시 일정 기간이 소요될 경우 회원에게 그 사유와 처리 일정을
                        알려주어야 합니다.</p>
                    <br/>
                    <h3>제 11 조 (회원의 의무)</h3>
                    <p>① 회원은 관계 법령, 본 약관의 규정, 이용 안내 및 서비스 상에 공지한 주의사항, 창업지원단이 통지하는 사항을 준수하여야 하며, 기타 창업지원단의 업무에 방해되는 행위를
                        하여서는 안 됩니다.</p>
                    <p>② 회원은 서비스를 이용한 어떠한 영리행위도 창업지원단의 사전 동의 없이는 할 수 없으며, 법에 저촉되는 자료를 배포 또는 게재할 수 없습니다.</p>
                    <p>③ 회원은 자신의 ID와 비밀번호를 유지 관리할 책임이 있으며 자신의 ID와 비밀번호를 사용하여 발생하는 모든 결과에 대해 전적인 책임이 있습니다. 또한 자신의 ID와
                        비밀번호가 자신의 승낙 없이 사용되었을 경우 즉시 창업지원단에 통보하여야 하며, 통보를 하지 않음으로 인해 발생하는 모든 책임은 회원 본인이게 있습니다.</p>
                    <p>④ 회원은 서비스와 관련하여 다음 각 호에 해당하는 행위를 하여서는 안 됩니다.</p>
                    <br/>
                    <p>1. 서비스를 이용하여 얻은 정보를 창업지원단의 사전 승낙 없이 복사, 복제, 변경, 번역, 출판, 방송 기타의 방법으로 사용하거나 이를 타인에게 제공하는 행위</p>
                    <p>2. 음란물을 게재 또는 음란사이트를 링크하거나 유포하는 등 사회질서를 해치는 행위</p>
                    <p>3. 타인의 명예를 훼손하거나 모욕하는 행위, 타인의 지적재산권 등의 권리를 침해하는 행위</p>
                    <p>4. 해킹 또는 컴퓨터 바이러스를 유포하는 일, 타인의 의사에 반하여 광고성 정보 등 일정한 내용을 지속적으로 전송하는 행위</p>
                    <p>5. 다른 회원의 ID를 부정 사용하는 행위</p>
                    <p>6. 다른 사용자의 개인 정보를 수집, 저장하는 행위</p>
                    <p>7. 창업지원단 직원, 관리자 등을 포함한 타인을 사칭하는 행위</p>
                    <p>8. 서비스를 통해 전송된 컨텐츠의 발신인을 위조하는 행위</p>
                    <p>9. 타인을 스톡(stalk)하거나, 괴롭히는 행위</p>
                    <p>10. 서비스 운영에 지장을 주거나 줄 우려가 있는 일체의 행위, 기타 관계 법령에 위배되는 행위</p>
                    <br/>
                    <h3>제 12 조 (면책 조항)</h3>
                    <p>① 창업지원단은 회원이 서비스를 통해 게재 또는 전송한 정보, 자료, 사실에 관하여는 그 정확성, 신뢰성 등 내용에 대한 어떠한 보증도 하지 아니하며 회원의 서비스 자료에
                        대한 취사 선택 또는 이용으로 발생하는 손해 등에 대해 책임을 지지 아니합니다.</p>
                    <p>② 창업지원단은 회원이 서비스를 이용하여 기대하는 손익이나 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 아니합니다.</p>
                    <p>③ 창업지원단은 회원 상호간 또는 회원과 제 3자 상호간에 서비스를 매개로 발생한 분쟁에 대해서는 개입할 의무가 없으며 이로 인한 손해를 배상할 책임도 없습니다.</p>
                    <p>④ 회원의 서비스 이용에 있어 회원의 귀책사유로 인하여 발생한 장애에는 창업지원단의 책임이 면제됩니다.</p>
                    <p>⑤ 회원이 본 약관의 규정을 위반함으로 인하여 창업지원단에 손해가 발생하는 경우, 이 약관을 위반한 회원은 창업지원단에 발생하는 모든 손해를 배상하여야 하며, 동 손해로부터
                        창업지원단을 면책시켜야 합니다.</p>
                    <br/>
                    <h3>제 13 조 (손해배상)</h3>
                    <p>창업지원단이 제공하는 서비스와 관련하여 회원에게 어떠한 손해가 발생하더라도 창업지원단의 중대한 과실에 의한 경우를 제외하고는 창업지원단은 이에 대하여 책임을 부담하지
                        않습니다.</p>
                    <br/>
                    <h3>제 14 조 (양도 금지)</h3>
                    <p>회원은 서비스의 이용 권한, 기타 이용 계약상 지위를 타인에게 양도, 증여할 수 없으며, 이를 담보로 제공할 수 없습니다.</p>
                    <br/>
                    <h2>제 4 장 서비스 이용</h2>
                    <br/>
                    <h3>제 15 조 (서비스 이용 범위)</h3>
                    <p>회원은 창업지원단 회원 가입 시 발급된 ID 하나로 창업지원단 사이트 내에서 제공하는 서비스를 이용할 수 있습니다. 단, 별도로 제휴사에서 제공하는 컨텐츠의 경우 그렇지
                        아니한 경우도 있습니다.</p>
                    <br/>
                    <h3>제 16 조 (정보의 제공)</h3>
                    <p>창업지원단은 회원이 서비스 이용 중 필요가 있다고 인정되는 다양한 정보를 공지사항이나 전자우편 등의 방법으로 회원에게 제공할 수 있습니다.</p>
                    <br/>
                    <h3>제 17 조 (컨텐츠 이용 요금)</h3>
                    <p>① 창업지원단이 제공하는 서비스는 기본적으로 무료입니다. 단, 유료 서비스 및 유료 정보에 대해서는 해당 정보에 명시된 요금을 지불하여야 사용 가능합니다.</p>
                    <p>② 향후 유료정보 서비스시, 범위와 가격표를 별도 공지합니다.</p>
                    <br/>
                    <h3>제 18 조 (회원의 게시물)</h3>
                    <p>창업지원단은 회원이 게시하거나 등록하는 서비스 내의 내용물이 다음 각 호에 해당한다고 판단되는 경우에 사전 통지 없이 삭제할 수 있습니다.</p>
                    <br/>
                    <p>1. 다른 회원 또는 제 3자를 비방하거나 중상모략으로 명예를 손상시키는 내용인 경우</p>
                    <p>2. 공공질서 및 미풍양속에 위반되는 내용인 경우</p>
                    <p>3. 범죄적 행위에 결부된다고 인정되는 내용일 경우</p>
                    <p>4. 창업지원단의 저작권, 제 3자의 저작권 등 기타 권리를 침해하는 내용인 경우</p>
                    <p>5. 창업지원단에서 규정한 게시 기간이나 용량을 초과한 경우</p>
                    <p>6. 음란물을 게재하거나 음란사이트를 링크하는 경우</p>
                    <p>7. 불법복제 또는 해킹을 조장하는 내용인 경우</p>
                    <p>8. 영리를 목적으로 하는 광고일 경우</p>
                    <p>9. 게시판의 성격에 부합하지 않는 내용을 게시할 경우</p>
                    <p>10. 기타 관계법령에 위배된다고 판단되는 경우</p>
                    <br/>
                    <h3>제 19 조 (게시물의 저작권)</h3>
                    <p>서비스에 게재된 자료에 대한 권리는 다음 각 호와 같습니다.</p>
                    <br/>
                    <p>1. 게시물에 대한 권리와 책임은 게시자에게 있으며 창업지원단은 게시자의 동의 없이 이를 서비스 내 게재 이외의 영리적 목적으로 사용할 수 없습니다. 단, 비영리적인 경우에는
                        그러하지 아니하며 또한 창업지원단이 서비스 내의 게재권을 갖습니다.</p>
                    <p>2. 회원은 서비스를 이용하여 얻은 정보를 가공, 판매하는 행위 등 서비스에 게재된 자료를 상업적으로 사용할 수 없습니다.</p>
                    <br/>
                    <h3>제 20 조 (서비스의 이용시간)</h3>
                    <p>① 창업지원단은 회원의 이용 신청을 승낙한 때부터 즉시 서비스를 개시합니다. 단, 창업지원단의 업무상 또는 기술상의 장애로 인하여 서비스를 개시하지 못하는 경우, 서비스에
                        공지하거나 회원에게 즉시 이를 통지합니다.</p>
                    <p>② 서비스의 이용은 연중 무휴 1일 24시간을 원칙으로 합니다. 다만 창업지원단의 업무상 또는 기술상의 이유로 인하여 서비스의 전부 또는 일부가 일시 중지될 수 있으며,
                        운영상의 목적으로 창업지원단이 정한 기간에 서비스의 전부 또는 일부가 일시 중지될 수도 있습니다. 이러한 경우에는 창업지원단이 사전 또는 사후에 이를 공지합니다.</p>
                    <p>③ 창업지원단은 서비스 별로 이용 가능한 시간을 별도로 정할 수 있으며 이 경우 그 내용을 사전에 공지합니다.</p>
                    <br/>
                    <h3>제 21 조 (서비스 제공의 중지)</h3>
                    <p>무료 서비스의 경우, 창업지원단의 필요에 따라 언제든지 본 서비스의 전부 또는 일부를 수정하거나 중단할 수 있으며, 이 경우 창업지원단이 전자우편 또는 인터넷 홈페이지 등을
                        통하여 회원에게 즉시 이를 고지합니다.</p>
                    <br/>
                    <h2>제 5장 계약 해지 및 서비스 이용 제한</h2>
                    <br/>
                    <h3>제 22 조 (회원 탈퇴 및 이용 제한)</h3>
                    <p>① 회원이 이용 계약을 해지하고자 하는 때에는 회원 본인이 직접 창업지원단 사이트 내의 회원정보 관리를 이용하여 회원 탈퇴를 요청해야 합니다.</p>
                    <p>② 창업지원단은 회원이 다음 사항에 해당하는 행위를 하였을 경우, 사전 통지 없이 이용 계약을 해지하거나 또는 기간을 정하여 해당 회원의 서비스 이용을 차단할 수
                        있습니다.</p>
                    <br/>
                    <p>1. 공공 질서 및 미풍 양속에 반하는 행위를 한 경우</p>
                    <p>2. 범죄적 행위에 관련되는 행위를 한 경우</p>
                    <p>3. 국익 또는 사회적 공익을 저해할 목적으로 서비스 이용을 계획 또는 실행한 경우</p>
                    <p>4. 타인의 ID 및 비밀번호를 도용한 경우</p>
                    <p>5. 가입한 이름이 실명이 아닌 경우</p>
                    <p>6. 타인의 명예를 손상시키거나 타인에게 불이익을 주는 경우</p>
                    <p>7. 같은 사용자가 다른 ID로 이중 등록을 한 경우</p>
                    <p>8. 서비스에 위해를 가하는 등 건전한 이용을 저해하는 행위를 한 경우</p>
                    <p>9. 정보통신설비의 오작동이나 정보 등의 파괴를 유발시키는 컴퓨터 바이러스 프로그램 등을 유포하는 경우</p>
                    <p>10. 기타 관련 법령이나 창업지원단이 정한 이용 조건에 위배되는 행위를 한 경우</p>
                    <br/>
                    <h2>부 칙</h2>
                    <br/>
                    <h3>제 1 조 시행일</h3>
                    <p>이 약관은 2017년 01월 11일부터 시행합니다.</p>
                    <br/>
                    <br/>
                    <h2>개인정보수집 및 이용에 대한 안내</h2>
                    <p>&lt;한양대학교 창업지원단&gt;은<br/>「개인정보보호법」 제15조 제1항 제1호, 제17조 제1항 제1호, 제23조 제1항 제1호, 제24조 제1항 제1호 따라 아래와
                        같이 개인정보의 수집. 이용에 관하여 귀하의 동의를 얻고자 합니다.<br/>&lt;한양대학교 창업지원단&gt;은 이용자의 사전 동의 없이는 이용자의 개인정보를 함부로
                        공개하지 않으며, 수집된 정보는 아래와 같이 이용하고 있습니다.<br/>이용자가 제공한 모든 정보는 아래의 목적에 필요한 용도 이외로는 사용되지 않으며 이용 목적이 변경될
                        시에는 이를 알리고 동의를 구할 것입니다.</p>
                    <br/>
                    <h3>[개인정보의 수집 및 이에 대한 안내]</h3>
                    <p>1. 개인정보의 수집 및 이용 목적</p>
                    <br/>
                    <p>가. 서비스 제공에 관한 업무 이행<br/>- 컨텐츠 제공, 특정 맞춤 서비스 제공, 사용자 애로상담</p>
                    <p>나. 회원관리<br/>- 회원제 서비스 이용 및 제한적 본인 확인제에 따른 본인확인, 개인식별, 가입의사 확인, 가입 및 가입횟수 제한, 추후 법정 대리인 본인확인, 분쟁
                        조정을 위한 기록보존, 불만처리 등 민원처리, 공지사항 전달, 회원자격 유지 및 서비스 부정사용 방지</p>
                    <br/>
                    <p>2. 수집하는 개인정보의 항목</p>
                    <br/>
                    <p>* 개인회원 가입<br/>- 필수항목 : 아이디, 비밀번호, 이름, 핸드폰번호, 이메일</p>
                    <p>* 자동수집<br/>- IP주소, 쿠키, 서비스 이용기록, 방문기록, 브라우저 및 운영체제(OS) 종류 등</p>
                    <br/>
                    <p>3. 개인정보의 보유 및 이용기간</p>
                    <br/>
                    <p>&lt;한양대학교 창업지원단&gt;은 원칙적으로 보유기간의 경과, 개인정보의 수집 및 이용목적의 달성 등 그 개인정보가 불필요하게 되었을 때에는 지체 없이 파기합니다. 다만,
                        다른 법령에 따라 보존하여야 하는 경우에는 그러하지 않을 수 있습니다. 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.</p>
                    <p>* 회원정보<br/>- 탈퇴 후 지체 없이 파기</p>
                    <br/>
                    <p>4. 동의 거부권 및 불이익</p>
                    <br/>
                    <p>정보주체는 개인정보 수집에 동의를 거부할 권리가 있습니다. 다만, 필수 항목에 대한 동의를 거부할 시 저희가 제공하는 서비스를 이용할 수 없습니다.</p>
                </div>
            </section>
        </>
    );
};

export default TermsPage;
