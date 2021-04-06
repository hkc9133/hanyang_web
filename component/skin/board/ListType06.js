import React from 'react';
import Link from "next/link";

import styles from '../../../public/assets/styles/skin/board.module.css';
import classnames from "classnames/bind"
import Pagination from "../../common/Pagination";
import moment from 'moment';
import BoardContentListTable from "../../admin/board/BoardContentListTable";
import ScrollToTop from "../../common/ScrollToTop";
import {useRouter} from "next/router";
import qs from 'query-string';


const cx = classnames.bind(styles);

const ListType06 = ({content,board,loading,moveContentDetail,pageChange}) => {
    const router = useRouter();

    return (
        <>
            <div className={cx("bbs_tb_list","list06")}>
                <table>
                    <colgroup>
                        <col style={{width:"5%"}}/>
                        <col style={{width:"50%"}}/>
                        {/*<col style={{width:"15%"}}/>*/}
                    </colgroup>
                    <thead>
                    <tr>
                        <th scope="col">번호</th>
                        <th scope="col">제목</th>
                        <th scope="col">매체</th>
                        <th scope="col">기업명</th>
                        {/*<th scope="col">아이템</th>*/}
                        <th scope="col">대표명</th>
                        <th scope="col">날짜</th>
                    </tr>
                    </thead>
                    <tbody>
                        {content.list.map((item) =>{
                            return (
                                <tr key={item.contentId}>
                                    <td>{item.rownum == 0 ? <strong className={cx("notice_icon")}>공지</strong> : item.rownum}</td>
                                    <td className={cx("txt_l")}><p><Link href={item.sub02}><a target="_blank">{item.title}</a></Link></p></td>
                                    <td><p>{item.sub01}</p></td>
                                    <td><p>{item.sub03}</p></td>
                                    {/*<td className={cx("txt_l")}><p>{item.sub04}</p></td>*/}
                                    <td><p>{item.sub05}</p></td>
                                    <td><p>{item.sub06}</p></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <>
                {content.page != null && loading == false && (
                    <Pagination
                        totalRecords={content.page.totalCount}
                        pageLimit={content.page.pageSize}
                        pageNeighbours={1}
                        currentPage={content.page.pageNo}
                        onPageChanged={pageChange}
                    />
                )}
            </>
        </>
    )
};

export default React.memo(ListType06);
