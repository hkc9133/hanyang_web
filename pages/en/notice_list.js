import React from 'react';
import Link from "next/link";
import styles from '../../public/assets/styles/en/en_sub.module.css';
import classnames from "classnames/bind"
import Pagination from "../../component/common/Pagination";
import qs from 'query-string';
import {useRouter} from "next/router";

const cx = classnames.bind(styles);
import moment from 'moment';

const NoticeList = ({content,pageChange,board,category}) => {
    const router = useRouter();

    console.log(content)
    return (
        <>
            <div className={cx("bbs_tb_list")}>
                <table>
                    <colgroup>
                        <col style={{width:"12%"}}/>
                        <col/>
                        <col style={{width:"13.6%"}}/>
                    </colgroup>
                    <tbody>
                    {content.list.map((item) =>{
                        return (
                            <tr key={item.contentId} className={cx(item.isNotice ? "notice" : "")}>
                                <td>{item.isNotice  ? "공지" : item.rownum}</td>
                                <td className={cx("txt_l")}><Link href={`/board/notice/view/${item.contentId}?${qs.stringify(router.query)}`}><a>{item.title}</a></Link></td>
                                {/*{board.categoryId != null &&*/}
                                {/*    <td><span className={cx("category")} style={{borderColor:item.color,color:item.color}}>{item.categoryCodeName}</span></td>*/}
                                {/*}*/}
                                <td>{moment(item.regDate).format("YYYY.MM.DD")}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            <>
                {content.page != null &&(
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
    );
};

export default NoticeList;