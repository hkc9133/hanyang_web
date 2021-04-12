import React, {useEffect, useState} from 'react';
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

const ListType02 = ({content,board,loading,moveContentDetail,pageChange}) => {
    const router = useRouter();
    const [selectItem,setSelectItem] = useState(null);

    const changeItem = (item) =>{
        if(selectItem == item){
            setSelectItem(null)
        }else{
            setSelectItem(item)
        }

    }

    useEffect(() =>{

    },[])

    return (
        <>
            <div className={cx("bbs_tb_list")}>
                <table>
                    <colgroup>
                        <col style={{width:"12%"}}/>
                        <col/>
                        {board.categoryId != null && (
                            <col style={{width:"15%"}}/>
                        )}
                        <col style={{width:"13.6%"}}/>
                    </colgroup>
                    <tbody>
                        {content.list.map((item) =>{
                            return (
                                <TableItem item={item} board={board} selectItem={selectItem} changeItem={changeItem}/>
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

export default React.memo(ListType02);

const TableItem = ({item,board,selectItem,changeItem}) =>{
    return (
        <>
            <tr key={item.contentId}>
                <td>{item.rownum == 0 ? <strong className={cx("notice_icon")}>공지</strong> : item.rownum}</td>
                <td className={cx("txt_l")}>
                    <button onClick={() =>{changeItem(item.contentId)}}>{item.title}</button>
                </td>
                {board.categoryId != null && (
                    <td><span className={cx("category")} style={{borderColor:item.color,color:item.color}}>{item.categoryCodeName}</span></td>
                )}
                <td>{moment(item.regDate).format("YYYY.MM.DD")}</td>
            </tr>
            {selectItem == item.contentId && (
                <tr className={cx("content_view")}>
                    <td >A</td>
                    <td colSpan={2}>
                        <div className={"ck-content"} dangerouslySetInnerHTML={{__html: item.content}}/>
                    </td>
                </tr>
            )}
        </>
        )
}
