import React from 'react';

const ForumHistory = ({cx}) => {
    return (
        <>
            <div className={cx("tb_style_1","s_x")}>
                <table>
                    <colgroup>
                        <col style={{width:"5%"}} />
                        <col style={{width:"15%"}} />
                        <col style={{width:"40%"}} />
                        <col style={{width:"40%"}} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col">회차</th>
                            <th scope="col">개최일자</th>
                            <th scope="col">강연 주제</th>
                            <th scope="col">연사</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2009.12.01</td>
                            <td>실행중심의 혁신 KEPKO사례</td>
                            <td>김쌍수 한국전력공사 사장</td>
                        </tr>
                        <tr>
                            <td rowSpan="2">2</td>
                            <td rowSpan="2">2010.03.30</td>
                            <td>초심으로 하는 감성경영</td>
                            <td>신헌철 SK에너지 부회장</td>
                        </tr>
                        <tr>


                            <td>잃어버린 10년을 기회의 10년으로 바꾼 일본 기업들</td>
                            <td>조미나 IGM 상무</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>2010.06.30</td>
                            <td>실패에서 배우는 경영의 지혜</td>
                            <td>한정화 한양대 교수</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>2010.09.30</td>
                            <td>EXR의 혁신 스토리</td>
                            <td>민복기 EXR코리아 대표</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>2010.11.24</td>
                            <td>긍정과 사랑으로 꽃피운 창조혁신 이야기</td>
                            <td>윤석금 웅진그룹 회장</td>
                        </tr>
                        <tr>
                            <td rowSpan="2">6</td>
                            <td rowSpan="2">2011.03.30</td>
                            <td>스마트코리아로 가는길</td>
                            <td>이민화 벤처기업협회 명예회장</td>
                        </tr>
                        <tr>
                            <td>중소벤처기업의 성공적인 코스닥 상장전략</td>
                            <td>박상조 코스닥시장 본부장</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>2011.06.29</td>
                            <td>기업의 혁신과 변화</td>
                            <td>노기호 CEO지식나눔 공동대표</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>2011.09.28</td>
                            <td>국내 중소 벤처의 중국 진출 전략</td>
                            <td>노영식 ㈜ 노아종합상사 회장</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>2011.12.13</td>
                            <td>셀트리온의 혁신과 성공 스토리</td>
                            <td>서정진 셀트리온 회장</td>
                        </tr>
                        <tr>
                            <td rowSpan="2">10</td>
                            <td rowSpan="2">2012.03.28</td>
                            <td>정부의 중소기업 지원 정책</td>
                            <td>한미숙 청와대 중소기업비서관</td>
                        </tr>
                        <tr>
                            <td>스마트기기를 활용한 CEO의 정보관리 비법</td>
                            <td>홍순성 홍스랩 소장</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>2012.06.27</td>
                            <td>공항서비스 패러다임을 바꾼<br/>인천국제공항의 혁신사례</td>
                            <td>이채욱 인천국제공항공사 사장</td>
                        </tr>
                        <tr>
                            <td rowSpan="2">12</td>
                            <td rowSpan="2">2012.09.26</td>
                            <td>시대를 읽고 변화의 파도를 타라</td>
                            <td>이진우 SK플래닛 실장</td>
                        </tr>
                        <tr>
                            <td>PLATFORM 산업의 미래는?</td>
                            <td>방형빈 KT상무</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>2012.11.24</td>
                            <td>마인드 경영과 긍정적 에너지</td>
                            <td>박문일 한양대학교 의과대학 학장</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>2013.03.27</td>
                            <td>Understanding of the Market Dynamics</td>
                            <td>오덕환 서울엔젤스 대표</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>2013.06.26</td>
                            <td>창조경제 시대의 중소기업 정책방향</td>
                            <td>한정화 중소기업청 청장</td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>2013.09.27</td>
                            <td>100</td>
                            <td>박서기 IT혁신연구소 소장</td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td>2013.12.06</td>
                            <td>스트레스 많은 벤처 CEO 건강관리 해법</td>
                            <td>성경원 매경이코노미 컬럼니스트</td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>2014.03.24</td>
                            <td>‘1 + 9’ 투자기관 네트워킹 데이</td>
                            <td>글로벌 시장형 창업 R&D사업의<br/>운영기관</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>2014.06.25</td>
                            <td>5색 5감 Startup Talk! Talk!</td>
                            <td>이나리 은행권 청년재단 기업가정신센터장</td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>2014.09.23</td>
                            <td>지혜를 갖춘 사물의 시대, 사물 인터넷</td>
                            <td>임정선 KT경제경연구소 연구원</td>
                        </tr>
                        <tr>
                            <td>21</td>
                            <td>2014.10.29</td>
                            <td>창조적 혁신과 도전을 위한 자세</td>
                            <td>공병호 공병호경영연구소 소장</td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td>2015.04.02</td>
                            <td>모바일 산업의 Tech & Trend<br/>(MWC 2015 Review & Networking)</td>
                            <td>김기대 AVING NEWS 발행인</td>
                        </tr>
                        <tr>
                            <td>23</td>
                            <td>2015.09.16</td>
                            <td>창조적 파괴</td>
                            <td>손재권 매일경제 기자</td>
                        </tr>
                        <tr>
                            <td>24</td>
                            <td>2015.12.23</td>
                            <td>글로벌기업가센터 사업 추진경과 및 포럼 향후 계획 발표</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>25</td>
                            <td>2015.02.03</td>
                            <td>스타트업 R&D 투자자금 10억 유치, 나처럼 해봐요</td>
                            <td>조상용 글로브포인트 대표</td>
                        </tr>
                        <tr>
                            <td rowSpan="2">26</td>
                            <td rowSpan="2">2015.05.28</td>
                            <td>스타트업의 해외 마케팅 솔루션</td>
                            <td>김민수 GK21 GLOBAL 대표</td>
                        </tr>
                        <tr>
                            <td>완생을 꿈꾸는 미생의 스타트업에게</td>
                            <td>송명석 대우인터내셔널 이사</td>
                        </tr>
                        <tr>
                            <td>27</td>
                            <td>2015.10.31</td>
                            <td>사업기회 모색 및 추진전략</td>
                            <td>이종훈 국민대 교수</td>
                        </tr>
                        <tr>
                            <td>28</td>
                            <td>2015.12.07</td>
                            <td>사례로 보는 early stage IP 포트폴리오 전략</td>
                            <td>유철현 비엘티특허법률사무소 변리사</td>
                        </tr>
                        <tr>
                            <td rowSpan="3">29</td>
                            <td rowSpan="3">2016.04.09</td>
                            <td>사업계획서 작성법</td>
                            <td>이승철 스마트로스터 대표 외 2명</td>
                        </tr>
                        <tr>
                            <td>스타트업의 디자인 매니지먼트</td>
                            <td>서혁준 영남대학교<br/>산업디자인학과 교수</td>
                        </tr>
                        <tr>
                            <td>대면평가를 위한 비즈니스 플랜 및 PPT</td>
                            <td>한용복 에이스페이스디자인 대표</td>
                        </tr>
                        <tr>
                            <td>30</td>
                            <td>2016.07.08</td>
                            <td>웨어러블트렌드 및 IoT 플랫폼</td>
                            <td>박종섭 인텔코리아 이사</td>
                        </tr>
                        <tr>
                            <td>31</td>
                            <td>2016.08.31</td>
                            <td>기업가형 리더십의 ABC</td>
                            <td>한정화 한양대 교수</td>
                        </tr>
                        <tr>
                            <td>32</td>
                            <td>2016.12.22</td>
                            <td>연쇄창업가의 투자유치 스토리</td>
                            <td>김동호 한국신용데이터 대표</td>
                        </tr>
                        <tr>
                            <td>33</td>
                            <td>2017.04.26</td>
                            <td>Lab to market</td>
                            <td>유현오 한양대 창업지원단장</td>
                        </tr>
                        <tr>
                            <td>34</td>
                            <td>2017.07.26</td>
                            <td>'한양 가족기업 제도'의 모든것,<br/>신용보증기금 100% 활용법</td>
                            <td>김태식 한양대 교수,<br/>신용보증기금 김영헌 차장</td>
                        </tr>
                        <tr>
                            <td>35</td>
                            <td>2017.10.26</td>
                            <td>'티켓몬스터 성장 스토리로 배우는<br/>스타트업 경영마인드</td>
                            <td>김동현 티몬플러스 대표이사</td>
                        </tr>
                        <tr>
                            <td>36</td>
                            <td>2018.01.19</td>
                            <td>2018 정부창업지원금 활용하기</td>
                            <td>이종훈 폴리앤파트너스 대표</td>
                        </tr>
                        <tr>
                            <td>37</td>
                            <td>2018.04.19</td>
                            <td>실험실 성공창업 스토리</td>
                            <td>남학현 ㈜아이센스 대표</td>
                        </tr>
                        <tr>
                            <td>38</td>
                            <td>2018.06.11</td>
                            <td>4차산업혁명 기술트렌드(인공지능)</td>
                            <td>민경구 LG유플러스 연구위원</td>
                        </tr>
                        <tr>
                            <td>39</td>
                            <td>2018.07.10</td>
                            <td>글로벌 창업을 위한 한국형 창업 생태계 조성</td>
                            <td>김병윤 카이스트 창업원 원장</td>
                        </tr>
                        <tr>
                            <td>40</td>
                            <td>2018.09.04</td>
                            <td>스타트업을 위한 Q&A, 무엇이든 물어보세요</td>
                            <td>조영진 ㈜로제타텍 대표</td>
                        </tr>
                        <tr>
                            <td>41</td>
                            <td>2019.07.10</td>
                            <td>대학 창업 생태계 발전을 위한 아이디어 제안</td>
                            <td>서정민 브랜디 대표 외</td>
                        </tr>
                        <tr>
                            <td>42</td>
                            <td>2019.12.19</td>
                            <td>왜 스타트업인가?</td>
                            <td>고영하 한국엔젤투자협회 회장</td>
                        </tr>
                        <tr>
                            <td>43</td>
                            <td>2020.01.20</td>
                            <td>창업기업가로서 꼭 알아야 할 5초의 미학, 광고전략</td>
                            <td>김록 플래닛드림 대표이사</td>
                        </tr>
                        <tr>
                            <td>44</td>
                            <td>2020.07.09</td>
                            <td>정부지원사업, 출제자의 의도부터 파악하자</td>
                            <td>오성민 광운대 의료기기개발지원센터<br/>수석연구위원</td>
                        </tr>
                        <tr>
                            <td>45</td>
                            <td>2020.10.13</td>
                            <td>팁스 프로그램 소개 및 투자유치전략</td>
                            <td>안영일 팁스타운 센터장</td>
                        </tr>
                        <tr>
                            <td>46</td>
                            <td>2020.12.10</td>
                            <td>계륵 같은 창업 아이템 피봇이 답일까?</td>
                            <td>최병익 ㈜쿨잼컴퍼니 대표</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ForumHistory;
