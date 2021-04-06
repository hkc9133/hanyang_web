import React from 'react';
import moment from 'moment';
import Link from 'next/link'
import { EditOutlined } from '@ant-design/icons';
const BoardListTable = ({cx, list,moveBoardConfig,moveBoardContentList}) => {
    return (
        <div className={cx("tb_style_1","board_list")}>
            <table>
                <colgroup>
                    <col style={{width: "8.6%"}}/>
                    <col style={{width: "50.5%"}}/>
                    <col/>
                </colgroup>
                <thead>
                <tr>
                    <th scope="col">번호</th>
                    <th scope="col">게시판 이름</th>
                    {/*<th scope="col">게시판 영문</th>*/}
                    <th scope="col">생성일</th>
                    {/*<th scope="col">글 작성</th>*/}
                    {/*<th scope="col">바로가기</th>*/}
                    {/*<th scope="col">글 목록</th>*/}
                </tr>
                </thead>
                <tbody>
                {list.map((item) => {
                    return (
                        <tr key={item.boardEnName}>
                            <td>
                                {item.rownum}
                            </td>
                            <td className={cx("td_btn")} onClick={() => {moveBoardConfig(item.boardEnName)}}>
                                {item.boardKrName}
                            </td>
                            {/*<td>*/}
                            {/*    {item.boardEnName}*/}
                            {/*</td>*/}
                            <td>
                                {moment(item.regDate).format("YYYY-MM-DD")}
                            </td>
                            {/*<td>*/}
                            {/*    <Link href={`/admin/board/content/${item.boardEnName}/write`}>*/}
                            {/*        <a>*/}
                            {/*        <EditOutlined />*/}
                            {/*        </a>*/}
                            {/*    </Link>*/}
                            {/*</td>*/}
                            {/*<td>*/}
                            {/*    <Link href={`/board/${item.boardEnName}/list`}><a>이동</a></Link>*/}
                            {/*</td>*/}
                            {/*<td>*/}
                            {/*    <button onClick={() => {moveBoardContentList(item.boardEnName)}}>이동</button>*/}
                            {/*</td>*/}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
};

export default BoardListTable;
