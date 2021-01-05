import React from 'react';
import Image from "next/image";
import Link from "next/link";

import styles from '../../../public/assets/styles/skin/gallery.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../../component/layout/PageNavigation";
import Pagination from "../../common/Pagination";
import noImage from '../../../public/assets/image/gallery_list.jpg';
const cx = classnames.bind(styles);

const GalleryType01 = ({content, pageChange}) => {

    const getThumbnail = (item) =>{
        const strReg = new RegExp("(http|https)://*[^>]*\\.(jpg|gif|png)","gim");
        const imgSrc =  item.match(strReg);
        if(imgSrc != null){
            return imgSrc[0];
        }else{
            return noImage;
        }
    }

    return (
        <>
            <div className={cx("gallery_list")}>
                <ul>
                    {content.list.map((item) => {
                        return (
                            <li key={item.rownum}>
                                <div className={cx("img_area")}>
                                    <a href="#">
                                        <img src={getThumbnail(item.content)} alt="gallery_list"/>
                                    </a>
                                </div>
                                <div className={cx("txt_area")}>
                                    <Link href="#"><a>{item.title}</a></Link>
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
