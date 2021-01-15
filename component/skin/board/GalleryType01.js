import React from 'react';
import Image from "next/image";
import Link from "next/link";

import styles from '../../../public/assets/styles/skin/gallery.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../../component/layout/PageNavigation";
import Pagination from "../../common/Pagination";
const cx = classnames.bind(styles);
import qs from 'query-string';
import {useRouter} from "next/router";
import {getThumbnail} from '../../common/util/ThumbnailUtil';


const GalleryType01 = ({content,board, pageChange}) => {
    const router = useRouter();

    return (
        <>
            <div className={cx("gallery_list")}>
                <ul>
                    {content.list.map((item) => {
                        return (
                            <li key={item.rownum}>
                                <div className={cx("img_area")}>
                                    <Link href={`/board/${board.boardEnName}/view/${item.contentId}?${qs.stringify(router.query)}`}>
                                    <a href="#">
                                        <img src={getThumbnail(item.content)} alt="gallery_list"/>
                                    </a>
                                    </Link>
                                </div>
                                <div className={cx("txt_area")}>
                                    <Link href={`/board/${board.boardEnName}/view/${item.contentId}?${qs.stringify(router.query)}`}><a>{item.title}</a></Link>
                                </div>
                            </li>
                        )
                    })}
                </ul>
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

export default GalleryType01;
