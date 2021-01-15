import React from 'react';
import moment from "moment";
import {useRouter} from "next/router";
import Link from 'next/link'

const BoardContentListTable = ({cx, list,moveBoardContent}) => {
    const router = useRouter();
    return (
        <div className={cx("tb_style_1","content_list")}>
            <table>
                <colgroup>
                    <col/>
                    <col style={{width: "40.5%"}}/>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                </colgroup>
                <thead>
                <tr>
                    <th scope="col">NO</th>
                    <th scope="col">제목</th>
                    <th scope="col">카테고리</th>
                    <th scope="col">작성일</th>
                    <th scope="col">작성자 이름</th>
                    <th scope="col">작성자 아이디</th>
                    <th scope="col">조회수</th>
                </tr>
                </thead>
                <tbody>
                {list.map((item) => {
                    return (
                        <tr key={item.rownum}>
                            <td>
                                <span>{item.rownum}</span>
                            </td>
                            <td className={cx("td_btn")}>
                                <Link href={`/admin/board/content/${item.boardEnName}/${item.contentId}`}>
                                    <span>{item.title}</span>
                                </Link>
                            </td>
                            <td className={cx("td_btn")} onClick={() => {moveBoardContent(item.contentId)}}>
                                <span>{item.categoryCodeName}</span>
                            </td>
                            <td>
                                <span>{moment(item.regDate).format("YYYY-MM-DD")}</span>
                            </td>
                            <td>
                                <span>{item.userName}</span>
                            </td>
                            <td>
                                <span>{item.writerId}</span>
                            </td>
                            <td>
                                <span>{item.viewCnt}</span>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
};

export default BoardContentListTable;
