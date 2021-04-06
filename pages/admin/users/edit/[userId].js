import React, {useEffect, useState} from 'react';
import {Checkbox, DatePicker, Form,Modal, Upload} from "antd";
import locale from "antd/lib/date-picker/locale/ko_KR";
// import Modal from "../../../../component/common/Modal";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {getUser, initialize, updateUser} from "../../../../store/user/user";
import moment from "moment";


import styles from '../.././../../public/assets/styles/admin/board/board.module.css';
import classnames from "classnames/bind"
import {getUserRole, getUserType} from "../../../../component/common/util/StatusUtil";
const cx = classnames.bind(styles);

const UserDetail = () => {

    const [form] = Form.useForm();
    const router = useRouter();
    const dispatch = useDispatch();

    const [user,setUser] = useState();
    const [updateResultModal, setUpdateResultModal] = useState(false)
    const {searchUser,update} = useSelector(({user, loading}) => ({
        searchUser: user.searchUser,
        update: user.update,
    }))

    useEffect(() =>{
        dispatch(getUser(router.query.userId))
        return() =>{
            dispatch(initialize())
        }
    },[])

    useEffect(() =>{
        if(update.result && update.error == null){
            // setUpdateResultModal(true);
            Modal.success({
                title: '사용자 저장 완료',
                onOk:() =>{router.back();}
            });
        }
    },[update])

    useEffect(() =>{
        if(searchUser.user != null){
            setUser({
                ...searchUser.user
            })
        }
    },[searchUser])

    const changeUserInfo = (e) =>{
        const {name, value} = e.target
        setUser({
            ...user,
            [name]:value
        })

    }

    const submitApply = () =>{
        const data = {
            userId:user.userId,
            role:user.role
        }
        dispatch(updateUser(data))
    }

    return (
        <>
            {user != null && (
                <section className={cx("container","board_container")}>
                    <h1 className={cx("top_title")}>사용자</h1>
                    <div className={cx("adm_container")}>
                        <div className={`${cx("member_info","box")} clfx `}>
                            <ul className={"clfx"}>
                                <li>
                                    <span className={cx("title","icon_1")}>{"유저정보"}</span>
                                </li>
                            </ul>
                        </div>

                        <p className={cx("txt_style_1")}>
                            {/*회원자료 삭제 시 다른 회원이 기존 회원아이디를 사용하지 못하도록 회원아이디, 이름, 닉네임은 삭제하지 않고 영구*/}
                            {/*보관합니다.*/}
                        </p>

                        <div className={cx("admin_cont")}>
                            <Form form={form} onFinish={(e) =>{submitApply(e)}}
                                // initialValues={{
                                //     ["title"]:view.content.title,
                                //     // ["categoryCodeId"]:view.content.categoryCodeId
                                // }}
                            >
                                <h2 className={cx("title_style_1")}><span>관리</span></h2>
                                <div className={cx("tb_style_1","edit_form","content")}>
                                    <table>
                                        <colgroup>
                                            <col style={{width:"30%"}}/>
                                            <col/>
                                        </colgroup>
                                        <thead>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">권한</th>
                                            <td>
                                                <select name='role' className={cx("cate")} onChange={changeUserInfo} value={user.role}>
                                                    <option value="ROLE_ADMIN">관리자</option>
                                                    <option value="ROLE_TC">교직원</option>
                                                    <option value="ROLE_MT">멘토</option>
                                                    <option value="ROLE_SD">일반</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">가입 신청 권한</th>
                                            <td>
                                                {getUserRole(user.applyRole)}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">아이디</th>
                                            <td>
                                                {user.userId}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">가입구분</th>
                                            <td>
                                                <span className={cx(getUserType(user.type), "id_name")}>&nbsp;</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">이름</th>
                                            <td>
                                                {user.userName}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">E-MAIL</th>
                                            <td>
                                                {user.userEmail}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">최근 로그인</th>
                                            <td>
                                                {moment(user.lastLogin).format("YYYY-MM-DD HH:mm:ss").toString()}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">가입일</th>
                                            <td>
                                                {moment(user.regDate).format("YYYY-MM-DD HH:mm:ss").toString()}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">상태</th>
                                            <td>
                                                {user.status}
                                            </td>
                                        </tr>

                                        </tbody>
                                    </table>
                                    <div className={cx("btn-box01")}>
                                        <button className={cx("basic-btn01")}>저장</button>
                                        <button type="button" className={cx("basic-btn02","btn-gray-bd")} onClick={router.back}>취소</button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                    {/*<Modal visible={updateResultModal} closable={true} maskClosable={true} onClose={() => {setUpdateResultModal(false);router.back();}} cx={cx} className={"add_result_popup"}>*/}
                    {/*    <h1 className={cx("popup_title")}>사용자 저장 완료</h1>*/}
                    {/*</Modal>*/}
                </section>

            )}
        </>
    );
};

export default UserDetail;
