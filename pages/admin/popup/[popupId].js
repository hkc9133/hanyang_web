import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {DatePicker, Form, Input, Modal, Upload} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import moment from "moment";
import locale from "antd/lib/date-picker/locale/ko_KR";
import styles from '../../../public/assets/styles/admin/popup/popup.module.css';
import classnames from "classnames/bind"
import {addPopup, deletePopup, getPopup, initialize, updatePopup} from "../../../store/popup/adminPopup";
import client from "../../../lib/api/client";
import {fileDownload} from "../../../store/file/file";
import dynamic from "next/dynamic";

const cx = classnames.bind(styles);
const QuillEditor = dynamic(() => import("../../../component/common/QuillEditor"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
});

const PopupEditPage = () => {

    const dispatch = useDispatch();
    const router = useRouter();
    const [form] = Form.useForm();
    const [popupInfo, setPopupInfo] = useState({
        popupId: null,
        title: "",
        leftPosition: 0,
        topPosition: 0,
        width: 0,
        height: 0,
        start: null,
        end: null,
        afterTime: 0,
        popupImg: null,
        isPc: true,
        isMobile: true,
    });

    const [content, setContent] = useState("");
    const [showRemoveModal, setShowRemoveModal] = useState(false);
    const {popup, update,deleteResult} = useSelector(({adminPopup, loading}) => ({
        popup: adminPopup.getPopup,
        update: adminPopup.updatePopup,
        deleteResult: adminPopup.deletePopup,
    }))

    useEffect(() => {

        dispatch(getPopup(router.query.popupId))

        return () => {
            dispatch(initialize());
        }

    }, [])

    useEffect(() => {

        if (popup != null) {
            setPopupInfo({
                ...popupInfo,
                ...popup,
                start: moment(popup.start),
                end: moment(popup.end),
            })
            setContent(popup.content)

        }

    }, [popup])

    const changePopupInfo = (e) => {
        const {name, value} = e.target
        if (name == "isPc" || name == "isMobile") {
            setPopupInfo({
                ...popupInfo,
                [name]: e.target.checked,
            })

        } else {
            setPopupInfo({
                ...popupInfo,
                [name]: value
            })
        }
    }

    const changeDate = (value) => {
        setPopupInfo({
            ...popupInfo,
            start: value[0],
            end: value[1],
        })
    }


    const submit = () => {
        const data = {
            ...popupInfo,
            start: popupInfo.start.format("YYYY-MM-DD HH:mm"),
            end: popupInfo.end.format("YYYY-MM-DD HH:mm"),
            content: content
        }

        dispatch(updatePopup(data));

    }

    const handleDeletePopup = () =>{
        dispatch(deletePopup(popupInfo.popupId))
    }

    useEffect(() => {
        if (update.result && update.error == null) {
            Modal.success({
                title: '저장이 완료되었습니다',
                onOk: () => {
                    router.push("/admin/popup")
                }
            });
        }

    }, [update])

    useEffect(() => {
        if (deleteResult.result && deleteResult.error == null) {
            Modal.success({
                title: '삭제가 완료되었습니다',
                onOk: () => {
                    router.push("/admin/popup")
                }
            });
        }

    }, [deleteResult])

    return (
        <>
            {popupInfo.popupId != null && (
                <section className={cx("container")}>
                    <h1 className={cx("top_title")}>팝업 관리</h1>
                    <Form form={form} onFinish={submit}
                          initialValues={{
                              title: popup.title,
                              leftPosition: popup.leftPosition,
                              topPosition: popup.topPosition,
                              width: popup.width,
                              height: popup.height,
                              afterTime: popup.afterTime,
                              start: [moment(popup.start), moment(popup.end)],
                          }}
                    >
                        <div className={cx("adm_container")}>
                            <div className={cx("box")}>
                                <div className={cx("popup_detail")}>
                                    <h2>팝업 정보</h2>
                                    <div className={cx("tb_style_2")}>
                                        <table>
                                            <colgroup>
                                                <col style={{width: 240}}/>
                                                <col/>
                                                <col  style={{width: 80}}/>
                                                <col  style={{width: 150}}/>
                                            </colgroup>
                                            <tbody>
                                            <tr>
                                                <th scope="row">팝업 이름</th>
                                                <td>
                                                    <Form.Item
                                                        name="title"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: '이름은 필수입니다',
                                                            },
                                                        ]}
                                                    >
                                                        <input type="text" name="title" onChange={changePopupInfo}
                                                               value={popupInfo.title}/>
                                                    </Form.Item>
                                                </td>
                                                <th scope="row">관리</th>
                                                <td>
                                                    <button type="button" className={cx("basic-btn01", "btn-red-bg")}
                                                            onClick={() => {
                                                                setShowRemoveModal(true)
                                                            }}>삭제
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">시간</th>
                                                <td colSpan={3}>
                                                    <Form.Item
                                                        name="afterTime"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: '시간은 필수입니다',
                                                            },
                                                        ]}
                                                    >
                                                        <Input type="number" className={cx("w_100p")}
                                                               name="afterTime" onChange={changePopupInfo}
                                                               value={popupInfo.afterTime}
                                                               placeholder="시간 입력"/>
                                                    </Form.Item>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">일시</th>
                                                <td colSpan={3}>
                                                    <Form.Item
                                                        name="start"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: '시간은 필수입니다',
                                                            },
                                                        ]}
                                                    >
                                                        <DatePicker.RangePicker showTime locale={locale}
                                                                                value={[popupInfo.start, popupInfo.end]}
                                                                                onOk={changeDate}
                                                                                format="YYYY-MM-DD HH:mm"/>
                                                    </Form.Item>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">좌측</th>
                                                <td colSpan={3}>
                                                    <Form.Item
                                                        name="leftPosition"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: '좌측 위치',
                                                            },
                                                        ]}
                                                    >
                                                        <Input type="number" className={cx("w_100p")}
                                                               name="leftPosition" onChange={changePopupInfo}
                                                               value={popupInfo.leftPosition}
                                                               placeholder="시간 입력"/>
                                                    </Form.Item>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">상단</th>
                                                <td colSpan={3}>
                                                    <Form.Item
                                                        name="topPosition"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: '상단 위치',
                                                            },
                                                        ]}
                                                    >
                                                        <Input type="number" className={cx("w_100p")}
                                                               name="topPosition" onChange={changePopupInfo}
                                                               value={popupInfo.topPosition}
                                                               placeholder="시간 입력"/>
                                                    </Form.Item>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">넓이</th>
                                                <td colSpan={3}>
                                                    <Form.Item
                                                        name="width"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: '넓이',
                                                            },
                                                        ]}
                                                    >
                                                        <Input type="number" className={cx("w_100p")}
                                                               name="width" onChange={changePopupInfo}
                                                               value={popupInfo.width}
                                                               placeholder="시간 입력"/>
                                                    </Form.Item>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">높이</th>
                                                <td colSpan={3}>
                                                    <Form.Item
                                                        name="height"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: '높이',
                                                            },
                                                        ]}
                                                    >
                                                        <Input type="number" className={cx("w_100p")}
                                                               name="height" onChange={changePopupInfo}
                                                               value={popupInfo.height}
                                                               placeholder="시간 입력"/>
                                                    </Form.Item>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">사용</th>
                                                <td colSpan={3}>
                                                    <Form.Item
                                                        name={["isPc,isMobile"]}
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: false
                                                            },
                                                        ]}
                                                    >
                                                        <label htmlFor="pc">PC</label>
                                                        <Input id="pc" type="checkbox" className={cx("w_100p")}
                                                               name="isPc" onChange={changePopupInfo}
                                                               checked={popupInfo.isPc}/>
                                                        <label htmlFor="mobile">MOBILE</label>
                                                        <Input id="mobile" type="checkbox" className={cx("w_100p")}
                                                               name="isMobile" onChange={changePopupInfo}
                                                               checked={popupInfo.isMobile}/>

                                                    </Form.Item>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">내용</th>
                                                <td colSpan={3}>
                                                    <QuillEditor Contents={content} QuillChange={setContent}/>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className={cx("txt_c pt_60")}>
                                        <button type="submit" className={cx("basic-btn02", "btn-gray-bg")}>저장</button>
                                        <button type="button" className={cx("basic-btn02", "btn-gray-bd2")}
                                                onClick={() => {
                                                    router.push("/admin/rental_place/manage")
                                                }}>목록
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                    <Modal
                        title="삭제하시겠습니까?"
                        visible={showRemoveModal}
                        // confirmLoading={deletePlaceResult.result}
                        onCancel={() =>{setShowRemoveModal(false)}}
                        footer={[
                            <button className={cx("basic-btn01","btn-red-bg")} onClick={() =>{handleDeletePopup()}}>삭제</button>,
                            <button className={cx("basic-btn01","btn-gray-bg")} onClick={() =>{setShowRemoveModal(false);}}>취소</button>
                        ]}
                    >
                    </Modal>
                </section>

            )}

        </>
    );
};

export default PopupEditPage;
