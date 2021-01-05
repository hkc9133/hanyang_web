import React from 'react';
import Image from "next/image";
import Link from "next/link";

import styles from '../../../public/assets/styles/skin/gallery.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../../component/layout/PageNavigation";
import Pagination from "../../common/Pagination";
import noImage from '../../../public/assets/image/gallery_list.jpg';
const cx = classnames.bind(styles);

const GalleryType02 = ({content, pageChange}) => {

    const getThumbnail = (item) =>{
        const strReg = new RegExp("(http|https)://*[^>]*\\.(jpg|gif|png)","gim");
        const imgSrc =  item.match(strReg);
        console.log(imgSrc)
        if(imgSrc != null){
            return imgSrc[0];
        }else{
            return noImage;
        }
    }

    return (
        <>
            <div className={cx("gallery_list_2")}>
                <ul>
                    {content.list.map((item) =>{
                        return (
                            <li>
                                <div className={cx("img_area")}>
                                    <a href="#">
                                        <img src={getThumbnail(item.content)} alt="gallery_list"/>
                                    </a>
                                </div>
                                <div className={cx("txt_area")}>
                                    <a href="#">
                                        <div className={cx("title")}>
                                            {item.title}
                                        </div>
                                        <span className={cx("date")}>2020.12.21</span>
                                    </a>
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
            {/*{content.page != null && (*/}
            {/*    <Pagination*/}
            {/*        totalRecords={content.page.totalCount}*/}
            {/*        pageLimit={content.page.pageSize}*/}
            {/*        pageNeighbours={1}*/}
            {/*        currentPage={content.page.pageNo}*/}
            {/*        onPageChanged={pageChange}*/}
            {/*    />*/}
            {/*)}*/}
        </>
    );
};

export default GalleryType02;
