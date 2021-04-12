import React from 'react';
import Link from "next/link";

import styles from '../../../public/assets/styles/skin/board.module.css';
import classnames from "classnames/bind"
import Pagination from "../../common/Pagination";
import BoardContentListTable from "../../admin/board/BoardContentListTable";
import qs from 'query-string';
import {useRouter} from "next/router";

const cx = classnames.bind(styles);
import moment from 'moment';

const ListType01 = ({content,board,moveContentDetail,pageChange,category}) => {
    const router = useRouter();
    return (
        <>
            <div className={cx("bbs_tb_list")}>
                <table>
                    <colgroup>
                        <col style={{width: "5%"}}/>
                        {category.length >0 && (
                            <col style={{width: "10%"}}/>
                        )}
                        <col/>
                        <col style={{width: "12%"}}/>
                        <col style={{width: "12%"}}/>
                        <col style={{width: "10%"}}/>
                        <col style={{width: "10%"}}/>
                    </colgroup>
                    <thead>
                    <tr>
                        <th scope="col">번호</th>
                        {category.length >0 && (
                            <th scope="col">분류</th>
                        )}
                        <th scope="col">제목</th>
                        <th scope="col">작성자</th>
                        <th scope="col">작성일자</th>
                        <th scope="col">첨부</th>
                        <th scope="col">조회수</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        content.list.map((item)=>{
                            return (
                                <tr key={item.rownum}>
                                    <td>{item.rownum == 0 ? <strong className={cx("notice_icon")}>공지</strong> : item.rownum}</td>
                                    {category.length >0 && item.categoryCodeName != null &&(
                                        <td scope="col">{item.categoryCodeName}</td>
                                    )}
                                    <td className={cx("txt_l")}><Link href={`/board/${board.boardEnName}/view/${item.contentId}?${qs.stringify(router.query)}`}><a>{item.title}</a></Link></td>
                                    <td>{item.userName}</td>
                                    <td>{moment(item.regDate).format("YYYY년 MM월 DD일").toString()}</td>
                                    <td>
                                        {item.attachFileList != null && (
                                            item.attachFileList.map((attachFile)=>{
                                                return <span key={attachFile.fileId} className={cx("attach",attachFile.fileExtension.replace('.',''))}></span>
                                            })
                                        )}
                                    </td>
                                    <td>{item.viewCnt}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
            {content.page != null && (
                <Pagination
                    totalRecords={content.page.totalCount}
                    pageLimit={content.page.pageSize}
                    pageNeighbours={1}
                    currentPage={content.page.pageNo}
                    onPageChanged={pageChange}
                />
            )}
        </>
    );
};

export default ListType01;
