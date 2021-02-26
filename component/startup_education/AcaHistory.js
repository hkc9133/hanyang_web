import React from 'react';

const AcaHistory = ({cx}) => {
    return (
        <>
            <div className={cx("tb_style_1")}>
                <table>
                    <colgroup>
                        <col />
                        <col style={{width:"5%"}} />
                        <col style={{width:"35%"}} />
                        <col />
                        <col />
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col">연도</th>
                            <th scope="col">기수</th>
                            <th scope="col">교육기간</th>
                            <th scope="col">수료생</th>
                            <th scope="col">창업자</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2012</td>
                            <td>1</td>
                            <td>2012.07.07~08.18</td>
                            <td>82명</td>
                            <td>54명</td>
                        </tr>
                        <tr>
                            <td rowSpan="3">2013</td>
                            <td>2</td>
                            <td>2013.01.05~02.23</td>
                            <td>44명</td>
                            <td>44명</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>2013.07.06~09.07</td>
                            <td>60명</td>
                            <td>60명</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>2013.10.05~12.06</td>
                            <td>45명</td>
                            <td>45명</td>
                        </tr>
                        <tr>
                            <td rowSpan="2">2014</td>
                            <td>5</td>
                            <td>2014.07.05~09.05</td>
                            <td>53명</td>
                            <td>53명</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>2014.10.11~12.05</td>
                            <td>51명</td>
                            <td>51명</td>
                        </tr>
                        <tr>
                            <td>2015</td>
                            <td>7</td>
                            <td>2015.09.02~12.09</td>
                            <td>76명</td>
                            <td>76명</td>
                        </tr>
                        <tr>
                            <td>2016</td>
                            <td>8</td>
                            <td>(심화)2016.06.18~07.23<br />(정규)2016.08.31~11.23</td>
                            <td>96명</td>
                            <td>96명</td>
                        </tr>
                        <tr>
                            <td rowSpan="2">2017</td>
                            <td>9</td>
                            <td>2017.07.01~07.31</td>
                            <td>43명</td>
                            <td>43명</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>2017.09.07~11.16</td>
                            <td>36명</td>
                            <td>36명</td>
                        </tr>
                        <tr>
                            <td rowSpan="2">2018</td>
                            <td>11</td>
                            <td>2018.06.23~07.21</td>
                            <td>31명</td>
                            <td>31명</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>2018.09.06~11.08</td>
                            <td>36명</td>
                            <td>36명</td>
                        </tr>
                        <tr>
                            <td rowSpan="2">2019</td>
                            <td>13</td>
                            <td>2019.09.05~12.19</td>
                            <td>59명</td>
                            <td>59명</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>2019.10.14~12.19</td>
                            <td>58명</td>
                            <td>58명</td>
                        </tr>
                        <tr>
                            <td rowSpan="3">2020</td>
                            <td>15</td>
                            <td>2020.09.25~09.26</td>
                            <td>61명</td>
                            <td>49명</td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>2020.11.19~11.20</td>
                            <td>35명</td>
                            <td>35명</td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td>2020.08.29~12.10</td>
                            <td>56명</td>
                            <td>22명</td>
                        </tr>
                        <tr>
                            <th colSpan="3">총계</th>
                            <th>923명</th>
                            <th>508명 (55%)</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AcaHistory;