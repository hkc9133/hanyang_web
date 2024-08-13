import React from 'react';
import Image from "next/image";
import Link from "next/link";

import styles from '../../../public/assets/styles/en/en_sub.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../../component/layout/PageNavigation";
import Pagination from "../../common/Pagination";

const cx = classnames.bind(styles);
import qs from 'query-string';
import {useRouter} from "next/router";
import {getRanThumbnail, getThumbnail} from '../../common/util/ThumbnailUtil';
import client from "../../../lib/api/client";
import moment from "moment";

const GalleryType03 = ({content, board, pageChange}) => {
    const router = useRouter();


    return (
        <>
            <div className={cx("portfolio_cont_wrap")}>
                <div className={cx("container")}>
                    <div className={cx("portfolio_cont")}>
                        <div className={cx("company_list")}>
                            <ul>
                                {content.list.map((item) => (
                                    <li>
                                        <a href={item.sub01} target="_blank">
                                            <div className={cx("img_area")}>
                                                <img
                                                    src={item.thumbList.length > 0 ? `${client.defaults.baseURL}/resource${item.thumbList[0].filePath}/${item.thumbList[0].fileName + item.thumbList[0].fileExtension}` : ""}
                                                    alt={item.title}/>
                                            </div>
                                            <div className={cx("category")}>
                                                <div className={cx("top_cate")}>{item.title}</div>
                                                <ul>
                                                    <li>{item.sub02}</li>
                                                    {/*<li>{item.sub03}</li>*/}
                                                </ul>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
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

export default GalleryType03;
