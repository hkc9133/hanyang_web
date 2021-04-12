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
import {getRanThumbnail, getThumbnail} from '../../common/util/ThumbnailUtil';
import client from "../../../lib/api/client";

const GalleryType02 = ({content,board, pageChange}) => {
    const router = useRouter();


    return (
        <>
            <div className={cx("gallery_list_2")}>
                <ul>
                    {content.list.map((item) =>{
                        return (
                            <li key={item.rownum}>
                                <div className={cx("img_area")}>
                                    <Link href={`/board/${board.boardEnName}/view/${item.contentId}?${qs.stringify(router.query)}`}>
                                    <a href="#">
                                        <img src={item.thumbList.length > 0 ? `${client.defaults.baseURL}/resource${item.thumbList[0].filePath}/${item.thumbList[0].fileName + item.thumbList[0].fileExtension}` : getRanThumbnail()}
                                             alt={"게시글 썸네일"}/>
                                    </a>
                                    </Link>
                                </div>
                                <div className={cx("txt_area")}>
                                    <Link href={`/board/${board.boardEnName}/view/${item.contentId}?${qs.stringify(router.query)}`}>
                                    <a href="#">
                                        <div className={cx("title")}>
                                            {item.title}
                                        </div>
                                        <span className={cx("date")}>2020.12.21</span>
                                    </a>
                                    </Link>
                                </div>
                            </li>
                        )
                    })}
                    {/*<li>*/}
                    {/*    <div className={cx("img_area")}>*/}
                    {/*        <a href="#">*/}
                    {/*            <Image src="/assets/image/gallery_img.jpg" layout={"fill"} alt="gallery_img"/>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*    <div className={cx("txt_area")}>*/}
                    {/*        <a href="#">*/}
                    {/*            <div className={cx("title")}>*/}
                    {/*                옷에 사회적 가치를 담다, 소셜패션 브랜드 ‘모예’ (송하윤 대표, 김승현, 김승현*/}
                    {/*            </div>*/}
                    {/*            <span className={cx("date")}>2020.12.21</span>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <div className={cx("img_area")}>*/}
                    {/*        <a href="#">*/}
                    {/*            <Image src="/assets/image/gallery_img.jpg" layout={"fill"} alt="gallery_img"/>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*    <div className={cx("txt_area")}>*/}
                    {/*        <a href="#">*/}
                    {/*            <div className={cx("title")}>*/}
                    {/*                옷에 사회적 가치를 담다, 소셜패션 브랜드 ‘모예’ (송하윤 대표, 김승현, 김승현*/}
                    {/*            </div>*/}
                    {/*            <span className={cx("date")}>2020.12.21</span>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <div className={cx("img_area")}>*/}
                    {/*        <a href="#">*/}
                    {/*            <Image src="/assets/image/gallery_img.jpg" layout={"fill"} alt="gallery_img"/>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*    <div className={cx("txt_area")}>*/}
                    {/*        <a href="#">*/}
                    {/*            <div className={cx("title")}>*/}
                    {/*                옷에 사회적 가치를 담다, 소셜패션 브랜드 ‘모예’ (송하윤 대표, 김승현, 김승현*/}
                    {/*            </div>*/}
                    {/*            <span className={cx("date")}>2020.12.21</span>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <div className={cx("img_area")}>*/}
                    {/*        <a href="#">*/}
                    {/*            <Image src="/assets/image/gallery_img.jpg" layout={"fill"} alt="gallery_img"/>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*    <div className={cx("txt_area")}>*/}
                    {/*        <a href="#">*/}
                    {/*            <div className={cx("title")}>*/}
                    {/*                옷에 사회적 가치를 담다, 소셜패션 브랜드 ‘모예’ (송하윤 대표, 김승현, 김승현*/}
                    {/*            </div>*/}
                    {/*            <span className={cx("date")}>2020.12.21</span>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <div className={cx("img_area")}>*/}
                    {/*        <a href="#">*/}
                    {/*            <Image src="/assets/image/gallery_img.jpg" layout={"fill"} alt="gallery_img"/>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*    <div className={cx("txt_area")}>*/}
                    {/*        <a href="#">*/}
                    {/*            <div className={cx("title")}>*/}
                    {/*                옷에 사회적 가치를 담다, 소셜패션 브랜드 ‘모예’ (송하윤 대표, 김승현, 김승현*/}
                    {/*            </div>*/}
                    {/*            <span className={cx("date")}>2020.12.21</span>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <div className={cx("img_area")}>*/}
                    {/*        <a href="#">*/}
                    {/*            <Image src="/assets/image/gallery_img.jpg" layout={"fill"} alt="gallery_img"/>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*    <div className={cx("txt_area")}>*/}
                    {/*        <a href="#">*/}
                    {/*            <div className={cx("title")}>*/}
                    {/*                옷에 사회적 가치를 담다, 소셜패션 브랜드 ‘모예’ (송하윤 대표, 김승현, 김승현*/}
                    {/*            </div>*/}
                    {/*            <span className={cx("date")}>2020.12.21</span>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*</li>*/}
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

export default GalleryType02;
