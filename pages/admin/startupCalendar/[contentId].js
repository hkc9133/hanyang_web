import React, {useCallback, useEffect, useState} from 'react';
import wrapper from "../../../store/configureStore";
import client from "../../../lib/api/client";
import {END} from "redux-saga";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {fileDownload} from "../../../store/file/file";
import moment from "moment";
import {Checkbox, Form, Input, Modal, Select, Upload} from "antd";
import Link from "next/link";

import styles from '../../../public/assets/styles/admin/board/board.module.css';
import classnames from "classnames/bind"
import {deleteStartupCalendar, getStartupCalendar,initialize} from "../../../store/startupCalendar/adminStartupCalendar";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';



const cx = classnames.bind(styles);


export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    const cookie = context.req && context.req.headers.cookie ? context.req.headers.cookie : '';
    client.defaults.headers.Cookie = cookie;

    context.store.dispatch(getStartupCalendar(context.params.contentId));
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
})

const ContentView = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const {view,deleteResult} = useSelector(({adminStartupCalendar, loading}) => ({
        view: adminStartupCalendar.view,
        deleteResult:adminStartupCalendar.delete
    }))
    const [showRemoveModal, setShowRemoveModal] = useState(false);

    useEffect(() =>{
        return () =>{
            dispatch(initialize());
        }

    },[])
    const handleFileDownload = useCallback(({fileId}) => {
        if (fileId != undefined) {
            dispatch(fileDownload(fileId))
        }
    }, [])

    const handleDeleteContent = () =>{
        dispatch(deleteStartupCalendar(view.startupCalendar.startupCalendarId))
    }

    useEffect(() =>{
        if(deleteResult.result && deleteResult.error == null){
            Modal.success({
                content: '글 삭제 완료되었습니다',
                onOk:() => {dispatch(initialize());router.back();}
            });
        }else if(deleteResult.result == false && deleteResult.error != null){
            Modal.warning({
                title: '삭제 중 에러가 발생하였습니다'
            });
            // dispatch(initialize())
        }

    },[deleteResult])



    return (
        view.startupCalendar != null && (
            <>
            <section className={cx("container","board_container")}>
                <h1 className={cx("top_title")}>글 내용</h1>
                <div className={cx("adm_container")}>
                    <div className={`${cx("member_info","box")} clfx `}>
                        <ul className={"clfx"}>
                            <li>
                                <span className={cx("title","icon_1")}>{"공지사항"}</span>
                            </li>
                        </ul>
                    </div>

                    <p className={cx("txt_style_1")}>
                        {/*회원자료 삭제 시 다른 회원이 기존 회원아이디를 사용하지 못하도록 회원아이디, 이름, 닉네임은 삭제하지 않고 영구*/}
                        {/*보관합니다.*/}
                    </p>

                    <div className={cx("admin_cont")}>
                            <h2 className={cx("title_style_1")}><span>내용</span></h2>
                            <div className={cx("tb_style_2","edit_form")}>
                                <div className={cx("btn_box")}>
                                    <Link href={`/admin/startupCalendar/list`}><a className={cx("basic-btn01")}>목록</a></Link>
                                    <Link href={`/admin/startupCalendar/edit/${view.startupCalendar.startupCalendarId}`}><a className={cx("basic-btn02")}>수정</a></Link>
                                    <button onClick={() =>{setShowRemoveModal(true)}} className={cx("basic-btn02","btn-red-bg")}>삭제</button>
                                </div>
                                <table>
                                    <colgroup>
                                        <col style={{width:"30%"}}/>
                                        <col/>
                                    </colgroup>
                                    <thead>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className={cx("title_box")}>
                                            <h1 className={cx("title")}>
                                                {/*{view.startupCalendar.isNotice && (*/}
                                                {/*   <span className={cx("notice_icon")}>공지</span>*/}
                                                {/*)}*/}
                                                {view.startupCalendar.title}
                                            </h1>
                                            <span className={cx("cate")}>{view.startupCalendar.categoryCodeName}</span>
                                            <span className={cx("date")}>작성일: {moment(view.startupCalendar.regDate).format("YYYY.MM.DD HH:MM")}</span>
                                            <span className={cx("view_cnt")}>조회수: {view.startupCalendar.viewCnt}</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div className={"ql-editor"} dangerouslySetInnerHTML={{__html: view.startupCalendar.content}}/>
                                        </td>
                                    </tr>
                                    {
                                        view.files.length > 0 && (
                                            <tr className={cx("bbs_attach_file")}>
                                                <td>
                                                <Upload
                                                    listType="picture-card"
                                                    fileList={view.files.map((file) => {
                                                        return {
                                                            uid: file.fileName,
                                                            name: file.fileOriginName,
                                                            status: 'done',
                                                            fileId: file.fileId
                                                        }
                                                    })}
                                                    showUploadList={{
                                                        showPreviewIcon: false,
                                                        showRemoveIcon: false,
                                                        showDownloadIcon: true
                                                    }}
                                                    onDownload={handleFileDownload}
                                                >
                                                </Upload>
                                                </td>
                                            </tr>
                                        )
                                    }
                                    </tbody>
                                </table>
                                <div className={cx("prev_next")}>
                                    <ul>
                                        {view.next != null && (
                                            <li>
                                                <span className={cx("title")}>다음글</span>
                                                <Link
                                                    href={`/admin/startupCalendar/${view.next.startupCalendarId}`}><a>{view.next.title}</a></Link>
                                                <span
                                                    className={cx("date")}>{moment(view.next.regDate).format("YYYY.MM.DD")}</span>
                                            </li>
                                        )}
                                        {view.prev != null && (
                                            <li>
                                                <span className={cx("title")}>이전글</span>
                                                <Link
                                                    href={`/admin/startupCalendar/${view.prev.startupCalendarId}`}><a>{view.prev.title}</a></Link>
                                                <span
                                                    className={cx("date")}>{moment(view.prev.regDate).format("YYYY.MM.DD")}</span>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>
                <Modal
                    title="삭제하시겠습니까?"
                    visible={showRemoveModal}
                    onCancel={() =>{setShowRemoveModal(false)}}
                    footer={[
                        <button key={"cancel_btn"} className={cx("basic-btn01","btn-gray-bg")} onClick={() =>{setShowRemoveModal(false);}}>취소</button>,
                        <button key={"delete_btn"} className={cx("basic-btn02","btn-red-bg")} onClick={handleDeleteContent}>삭제</button>
                    ]}
                >
                    <p className={cx("warning")}>{view.startupCalendar.title}</p>
                </Modal>
            </section>

            </>
        )
    );
};

export default ContentView;
