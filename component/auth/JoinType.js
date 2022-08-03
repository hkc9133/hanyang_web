import React, {useState} from 'react'
import styles from '../../public/assets/styles/user/user.module.css';
import classnames from "classnames/bind"
import Link from 'next/link'
import {initializeForm} from "../../store/mentoring/mentoring";
import Modal from "../common/Modal";

const cx = classnames.bind(styles);

const JoinType = ({handleSignUp}) => {
    const [showCheckModal, setShowCheckModal] = useState(false);
    const [type, setType] = useState("");

    const checkRole = (type) =>{
        setType(type);
        setShowCheckModal(true)
    }
    return (
        <section className={cx("container")}>
            <div className={`${cx("sub_container","join_type")} clfx `}>
                {/*<h1 className={cx("sub_top_title")}>회원가입</h1>*/}
                {/*<p className={cx("sub_top_txt")}> 회원가입약관 및 개인정보처리방침안내의 <br/>내용에 동의하셔야 회원가입 하실 수 있습니다.</p>*/}
                <h2>회원유형 선택</h2>
                <ul className={cx("member_type_list")}>
                    <li className={cx("member_type_1")}>
                        <button type="button" onClick={(e) =>{checkRole("ROLE_SD")}}>
                            <span>일반인</span>
                        </button>
                    </li>
                    <li className={cx("member_type_2")}>
                        <button type="button" onClick={(e) =>{checkRole("ROLE_TC")}}>
                            <span>교직원</span><br/>
                            <p style={{fontSize:13}}>(한양대 창업지원단 교직원만 선택)</p>

                        </button>
                    </li>
                    <li className={cx("member_type_3")}>
                        <button type="button" onClick={(e) =>{checkRole("ROLE_MT")}}>
                            <span>멘토</span>
                        </button>
                    </li>
                </ul>
            </div>
            <Modal visible={showCheckModal} closable={true} maskClosable={true} onClose={() => {
                setShowCheckModal(false);
            }} cx={cx} className={"counsel_apply_status_popup"}>
                <h2 className={cx("popup_title")}>가입을 진행하시겠습니까?</h2>
                <div className={cx("popup_btn_box")}>
                    <button className={cx("signup_btn")} onClick={() => {
                        handleSignUp(type)
                    }}>확인</button>
                    <button className={cx("cancel_btn")} onClick={() => {
                        setShowCheckModal(false);
                    }}>닫기</button>
                </div>
            </Modal>

        </section>
    );
};

export default React.memo(JoinType);
