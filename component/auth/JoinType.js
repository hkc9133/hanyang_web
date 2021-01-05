import React from 'react'
import styles from '../../public/assets/styles/user/user.module.css';
import classnames from "classnames/bind"
import Link from 'next/link'

const cx = classnames.bind(styles);

const JoinType = ({handleSignUp}) => {
    return (
        <section className={cx("container")}>
            <div className={`${cx("sub_container","join_type")} clfx `}>
                <h1 className={cx("sub_top_title")}>회원가입</h1>
                <p className={cx("sub_top_txt")}> 회원가입약관 및 개인정보처리방침안내의 <br/>내용에 동의하셔야 회원가입 하실 수 있습니다.</p>
                <h2>회원유형 선택</h2>
                <ul className={cx("member_type_list")}>
                    <li className={cx("member_type_1")}>
                        <button type="button" onClick={handleSignUp("ROLE_SD")}>
                            <span>일반인</span>
                        </button>
                    </li>
                    <li className={cx("member_type_2")}>
                        <button type="button" onClick={handleSignUp("ROLE_TC")}>
                            <span>교직원</span>
                        </button>
                    </li>
                    <li className={cx("member_type_3")}>
                        <button type="button" onClick={handleSignUp("ROLE_MT")}>
                            <span>멘토</span>
                        </button>
                    </li>
                </ul>
            </div>

        </section>
    );
};

export default React.memo(JoinType);
