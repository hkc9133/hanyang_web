import React, {useEffect, useState} from 'react';
import styles from '../../../../public/assets/styles/admin/rental/rental.module.css';
import classnames from "classnames/bind"
import RentalPlaceList from "../../../../component/admin/rental_place/RentalPlaceList";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {getPlaceInfoAll, initialize} from "../../../../store/spaceRental/adminSpaceRental";
import Link from 'next/link'
import {Input, Tag, Button, Select,Form,Checkbox } from 'antd';
import RentalPlaceAddModal from "../../../../component/admin/rental_place/RentalPlaceAddModal";
const cx = classnames.bind(styles);

const RentalPlaceManage = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [showPlaceAddModal, setShowPlaceAddModal] = useState(false)

    const {all} = useSelector(({adminSpaceRental, loading}) => ({
        all: adminSpaceRental.all,
    }))

    useEffect(() => {
        dispatch(getPlaceInfoAll())
        return () => {
            dispatch(initialize());

        };
    }, []);

    return (
        <section className={cx("container")}>
            <h1 className={cx("top_title")}>대여 공간 관리</h1>
            <div className={cx("adm_container","rental_info_all")}>
                {/*<div className={`${cx("rental", "box")} clfx `}>*/}
                {/*    <ul className={"clfx"}>*/}
                {/*        <li>*/}
                {/*            <span className={cx("title", "icon_1")}>총 대여공간 수</span>*/}
                {/*            <div className={cx("number")}>*/}
                {/*                <strong>5</strong>개*/}
                {/*            </div>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</div>*/}

                {/*<p className={cx("txt_style_1")}>회원자료 삭제 시 다른 회원이 기존 회원아이디를 사용하지 못하도록 회원아이디, 이름, 닉네임은 삭제하지 않고 영구*/}
                {/*    보관합니다.</p>*/}

                <div className={cx("admin_cont")}>
                    <h2 className={cx("title_style_1")}><span>전체목록</span></h2>
                    <div className={cx("tb_style_1")}>
                        <div className={cx("btn-box01")}>
                            <Link href={"/admin/rental_place/manage/add/place"}><a className={cx("basic-btn03")}>공간 추가</a></Link>
                            {/*<button className={cx("basic-btn03")} onClick={() => {setShowPlaceAddModal(true)}}>공간 추가</button>*/}
                        </div>
                        <RentalPlaceList cx={cx} all={all}/>
                    </div>
                </div>
            </div>
            <RentalPlaceAddModal cx={cx} showPlaceAddModal={showPlaceAddModal} setShowPlaceAddModal={setShowPlaceAddModal}/>
        </section>
    );
};

export default RentalPlaceManage;
