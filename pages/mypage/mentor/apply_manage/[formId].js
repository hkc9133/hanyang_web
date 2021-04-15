import React, {useCallback, useEffect, useState} from 'react';
import Link from 'next/link';
import styles from '../../../../public/assets/styles/mypage/mentor.module.css';
import classnames from "classnames/bind"
import {useDispatch, useSelector} from "react-redux";
import {
    addDiary,
    getMentorCounselApply,
    getMentorCounselApplyList, getWayItem,
    initialize, initializeForm,
    updateCounselApplyStatus
} from "../../../../store/mentoring/mentoring";
import {useRouter} from "next/router";
import dynamic from "next/dynamic";
import {Checkbox, Form, Upload, DatePicker, Button} from "antd";
import {fileDownload} from "../../../../store/file/file";
import {PlusOutlined} from "@ant-design/icons";
import {addBoardContent} from "../../../../store/board/board";
import Modal from "../../../../component/common/Modal";
import moment from "moment";
import locale from "antd/lib/date-picker/locale/ko_KR";
const {RangePicker} = DatePicker;
import { UploadOutlined } from '@ant-design/icons';
import client from "../../../../lib/api/client";
import Head from "next/head";
const Editor = dynamic(() => import("../../../../component/common/Editor"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
});
const cx = classnames.bind(styles);

const CounselApplyDetail = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [apply, setApply] = useState(null);
    const [showStatusConfirmModal, setShowStatusConfirmModal] = useState(false);
    const [showAlertModal, setShowAlertModal] = useState(false);
    const [showResultModal, setShowResultModal] = useState(false);
    const [applyStatus, setApplyStatus] = useState(null);
    const [editor, setEditor] = useState(null);
    const [answer, setAnswer] = useState({
        attachFiles: [],
        wayIdList:[],
        place:"",
        answer:""
    });
    const [content, setContent] = useState("");
    const {user, counselApply, statusUpdate, addDiaryResult,wayItem} = useSelector(({auth, mentoring, loading}) => ({
        user: auth.user,
        counselApply: mentoring.getCounselApply,
        statusUpdate: mentoring.statusUpdate,
        addDiaryResult: mentoring.addDiary,
        wayItem:mentoring.wayItem,
    }))

    useEffect(() => {
        dispatch(getWayItem())
        dispatch(getMentorCounselApply(router.query.formId))
        return () => {
            dispatch(initialize());
        };
    }, []);

    useEffect(() => {
        if (counselApply.counselApply != null) {
            setApply({
                ...counselApply.counselApply,
                files: counselApply.files,
            })
            setAnswer({
                ...answer,
                ...counselApply.counselApply.answer
            })
            setApplyStatus(counselApply.counselApply.applyStatus)
        }
    }, [counselApply]);

    useEffect(() => {
        if (statusUpdate.result && applyStatus == 'RETURN') {
            router.push("/mypage/mentor")
        }

    }, [statusUpdate, applyStatus])

    useEffect(() => {
        if (addDiaryResult.result && addDiaryResult.error == null) {
            setShowResultModal(true);
        }
    }, [addDiaryResult])

    const handleFileDownload = useCallback(({fileId}) => {
        if (fileId != undefined) {
            dispatch(fileDownload(fileId))
        }
    }, [])

    const changeAnswer = useCallback((e) => {
        const {name, value} = e.target;

        setAnswer(answer => ({
            ...answer,
            [name]: value
        }))
    }, [])

    const changeWayItem = (e) =>{
        setAnswer(answer => ({
            ...answer,
            wayIdList: e
        }))
    }

    const changeFileList = useCallback(({fileList}) => {
        setAnswer(answer => ({
            ...answer,
            attachFiles: fileList
        }))
    }, [])

    const handlePreview = useCallback((file) => {
        const fileURL = URL.createObjectURL(file.originFileObj);
        window.open(fileURL);

    }, [])

    const uploadButton = (
        <Button style={{marginTop:7}} className={"upload"} icon={<UploadOutlined />}>업로드</Button>
    );

    const changeStatus = () => {
        const data = {
            formId: apply.formId,
            applyStatus: applyStatus
        }
        dispatch(updateCounselApplyStatus(data));
    }


    const changeDate = (value) => {
        setAnswer({
            ...answer,
            start: value[0],
            end: value[1],
        })
    }

    const submitAnswer = (e) => {
        if (counselApply.counselApply.applyStatus != 'PROCESS') {
            setShowAlertModal(true);
        } else {
            const data = {
                ...answer,
                formId: apply.formId,
                answer: editor.getData(),
                start: answer.start.format("YYYY-MM-DD HH:mm").toString(),
                end: answer.end.format("YYYY-MM-DD HH:mm").toString(),
                files: answer.attachFiles.map((item) => (item.originFileObj)),
            }
            dispatch(addDiary(data))

        }
    }

    return (
        <>
            <Head>
                <title>한양대학교 창업지원단 -학생창업신고 현황</title>
            </Head>
            {apply != null && (
                <section className={cx("container")}>
                    <div className={cx("sub_container", "mentor_group_write")}>
                        <h1 className={cx("sub_top_title")}>학생창업신고 현황</h1>
                        <p className={cx("sub_top_txt")}>전문 멘토로부터 듣는 창업 알짜 정보 예비창업자를 위한 <br/>창업 전문 상담코너입니다.</p>

                        <div className={cx("tab_style_2")}>
                            <ul>
                                <li className={cx("on")}><Link href="/mypage/mentor"><a>나의 멘토링현황</a></Link></li>
                                <li><Link href="/mypage/mentor/profile"><a>프로필 변경</a></Link></li>
                                <li><a href={`${client.defaults.baseURL}/mentoring/commission`}>위촉장 발급</a></li>
                            </ul>
                        </div>

                        <div className={cx("my_mentoring")}>
                            <ul>
                                <li>창업지원단 관리자가 멘토님께 배정된 멘토링 진행 건 입니다.</li>
                                <li>요청시간 및 요건이 맞지 않으시면 반려, 가능하시다면 상담 진행중을 선택 후 저장 부탁 드립니다.</li>
                            </ul>
                            <div className={cx("progressArea")}>
                                <label htmlFor="progress">진행상태</label>
                                <select name="applyStatus" id="applyStatus" value={applyStatus} onChange={(e) => {
                                    setApplyStatus(e.target.value)
                                }}>
                                    <option value="ASSIGN" disabled={true}>배정</option>
                                    {counselApply.counselApply.applyStatus != 'COMPLETED' && (
                                        <option value="RETURN">반려</option>
                                    )}
                                    <option value="PROCESS" disabled={counselApply.counselApply.applyStatus == 'COMPLETED'}>상담 진행중</option>
                                    <option value="COMPLETED" disabled={true}>완료</option>
                                </select>
                                <button type="button" className={cx("btn_save")} onClick={() => {
                                    setShowStatusConfirmModal(true)
                                }} disabled={applyStatus == apply.applyStatus}>저장
                                </button>
                            </div>
                        </div>

                        <h2>멘토링 지원자 정보</h2>
                        <div className={cx("mentoring_applicants")}>
                            <ul className={"clfx"}>
                                <li>
                                    <label htmlFor="mentoring_applicants_info3">이름</label>
                                    <input type="text" id="mentoring_applicants_info3" value={apply.menteeName}
                                           readOnly={true}/>
                                </li>
                                <li>
                                    <label htmlFor="mentoring_applicants_info5">E-mail </label>
                                    <div className={cx("email")}>
                                        <input type="text" id="mentoring_applicants_info5" value={apply.menteeEmail}
                                               readOnly={true}/>
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="mentoring_applicants_info2">희망분야</label>
                                    <div className={cx("apply_value_box")}>
                                        {/*{apply.counselFieldList != null && apply.counselFieldList.map((item) => (item.fieldName))}*/}
                                        {apply.fieldName}
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="mentoring_applicants_info4">창업진행상황</label>
                                    <input type="text" id="mentoring_applicants_info4"
                                           value={apply.formProgressItemName} readOnly={true}/>
                                </li>
                                <li className={cx("w_50")}>
                                    <label htmlFor="mentoring_applicants_info1">구분</label>
                                    {apply.sortationItemList.map((item) =>{
                                        return <input type="text" className={cx("bor_no")} id="mentoring_applicants_info1" value={item.item} readOnly={true}/>
                                    })}
                                </li>
                                <li className={cx("w_50","gubun")}>
                                    <label htmlFor="mentoring_applicants_info6">희망상담방식</label>
                                    {apply.wayItemList.map((item) =>{
                                        return <input className={cx("bor_no")} type="text" id="mentoring_applicants_info1" value={item.item} readOnly={true}/>
                                    })}
                                </li>
                            </ul>
                        </div>

                        <h2>멘토링 요청 상세내용</h2>
                        <ul className={`${cx("consultation_details")} mb_50 `}>
                            <li>
                                <label htmlFor="counseling_title" className={cx("title")}>제목</label>
                                <input type="text" id="counseling_title" value={apply.title} readOnly={true}/>
                            </li>
                            <li>
                                <label htmlFor="counseling_txt" className={cx("title")}>상담내용</label>
                                <div className={cx("apply_content_box")}>
                                    <div className={"ck-content"} dangerouslySetInnerHTML={{__html: apply.content}}/>
                                </div>
                            </li>
                            <li>
                                <span className={cx("title")}>첨부파일</span>
                                {
                                    apply.files.length > 0 && (
                                        // <div className={cx("bbs_attach_file")}>
                                        <Upload
                                            listType="picture"
                                            fileList={apply.files.map((file) => {
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
                                        // </div>
                                    )
                                }
                                <p className={cx("help_txt")}>※ 신청하신 멘토링과 관련된 참고자료를 첨부해주세요. 첨부파일은 담당 멘토에게 전달되며, 최대3개까지
                                    첨부 가능합니다.</p>
                            </li>
                        </ul>


                        <h2>멘토링 일지 <span>(멘토)</span></h2>
                        <Form form={form} onFinish={(e) => {
                            submitAnswer(e)
                        }}>
                            <div className={cx("mentoring_applicants")}>
                                <ul className={"clfx w_2"}>
                                    <li className={cx("w_100","counsel")}>
                                        <label htmlFor="mentoring_diary_8" className={cx("title")}>멘토링 방법 </label>
                                        {counselApply.counselApply.applyStatus == 'COMPLETED' ? (
                                            // <input type="text" id="mentoring_diary_8"
                                            //        value={counselApply.counselApply.answerWay} readOnly={true}/>
                                            <Checkbox.Group name="formWayItem" options={wayItem.list}  value={counselApply.wayItemList.map((item) =>(item.itemId))} disabled={true}/>
                                        ) : (
                                            <Form.Item
                                                name="formWayItem"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: '1개 이상 선택',
                                                    },
                                                ]}
                                            >
                                                <Checkbox.Group name="formWayItem" options={wayItem.list}  value={answer.wayIdList} onChange={changeWayItem} />
                                            </Form.Item>
                                            // <input type="text" id="mentoring_diary_8" value={answer.way} name="way"
                                            //        onChange={changeAnswer}/>
                                        )}
                                    </li>
                                    <li className={cx("w_100","counsel")}>
                                        <label htmlFor="mentoring_diary_8" className={cx("title")}>멘토링 장소</label>
                                        {counselApply.counselApply.applyStatus == 'COMPLETED' ? (
                                            <input type="text" id=""
                                                   value={counselApply.counselApply.place} disabled={true}/>
                                        ) : (
                                            <Form.Item
                                                name="place"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: '장소를 입력해주세요',
                                                    },
                                                ]}
                                            >
                                                <input className={cx("place_input")} type="text" id="" value={answer.place} name="place" onChange={changeAnswer}/>
                                            </Form.Item>
                                        )}
                                    </li>
                                    <li className={cx("w_100","counsel","date")}>
                                        <label htmlFor="mentoring_diary_8" className={cx("title")}>멘토링 일시</label>
                                        {counselApply.counselApply.applyStatus == 'COMPLETED' ? (
                                            <DatePicker.RangePicker showTime locale={locale}
                                                                    className={cx("date_picker")}
                                                                    disabled={true}
                                                                    value={[moment(counselApply.counselApply.start),moment(counselApply.counselApply.end)]}
                                                                    format="YYYY-MM-DD HH:mm"/>
                                        ) : (
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
                                                                        className={cx("date_picker")}
                                                                        value={[answer.start, answer.end]}
                                                                        onOk={changeDate}
                                                                        format="YYYY-MM-DD HH:mm"/>
                                            </Form.Item>
                                        )}
                                    </li>
                                </ul>
                            </div>

                            <h2>주요내용</h2>
                            <ul className={`${cx("consultation_details")} mb_50 `}>
                                <li>
                                    <label htmlFor="counseling_txt" className={cx("title")}>주요내용<span style={{color:'gray',fontSize:13,marginLeft:4}}>※멘티에게 보여지는 내용입니다</span></label>
                                    {counselApply.counselApply.applyStatus == 'COMPLETED' ? (
                                        <div className={cx("apply_content_box")}>
                                            <div dangerouslySetInnerHTML={{__html: counselApply.counselApply.answer}}/>
                                        </div>
                                    ) : (
                                        <Form.Item
                                            name="answer"
                                            // rules={[
                                            //     ({ getFieldValue }) => ({
                                            //         validator(rule, value) {
                                            //             if(content == null || content == ""){
                                            //                 return Promise.reject('내용을 입력해주세요')
                                            //             }
                                            //             return Promise.resolve()
                                            //         }
                                            //     })
                                            // ]}
                                        >
                                            <Editor setEditor={setEditor} content={counselApply.counselApply.answer}/>
                                        </Form.Item>
                                    )}
                                </li>
                                <li>
                                    <span className={cx("title")}>멘토일지<span style={{color:'gray',fontSize:13,marginLeft:4}}>※관리자만 확인하는 내용입니다</span></span>
                                    {counselApply.counselApply.applyStatus == 'COMPLETED' ? (
                                        counselApply.answerFiles.length > 0 && (
                                            <Upload
                                                listType="picture"
                                                fileList={counselApply.answerFiles.map((file) => {
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
                                        )
                                    ) : (
                                        <Form.Item
                                            name="answer"
                                            rules={[
                                                ({ getFieldValue }) => ({
                                                    validator(rule, value) {
                                                        if(answer.attachFiles.length < 2){
                                                            return Promise.reject('멘토일 일지를 첨부해주세요')

                                                        }
                                                        return Promise.resolve()
                                                    }
                                                })
                                            ]}
                                        >
                                            <Upload
                                                listType="picture"
                                                fileList={answer.attachFiles}
                                                onPreview={handlePreview}
                                                onChange={changeFileList}
                                            >
                                                {answer.attachFiles.length >= 2 ? null : uploadButton}
                                            </Upload>
                                        </Form.Item>
                                    )}
                                    <p className={cx("help_txt")}>※ 대면 상담시 멘토링 사진(다른 각도의 사진 2매) 첨부</p>
                                    <p className={cx("help_txt")}>※ 비대면 상담시 통화내역 캡쳐화면 등 증빙사진 첨부</p>
                                </li>
                            </ul>
                            <div className={cx("txt_c")}>
                                {counselApply.counselApply.applyStatus == 'COMPLETED' ? (
                                    <input type="button" value="뒤로가기" className={cx("basic-btn03", "btn-black-bd")}
                                           onClick={() => {
                                               router.back();
                                           }}/>

                                ) : (
                                    <input type="submit" value="제출하기" className={cx("basic-btn03", "btn-black-bd")}/>
                                )}
                            </div>
                        </Form>
                    </div>
                    <Modal visible={showStatusConfirmModal} closable={true} maskClosable={true} onClose={() => {
                        setShowStatusConfirmModal(false);
                        initializeForm('statusUpdate');
                    }} cx={cx} className={"counsel_apply_status_popup"}>
                        {!statusUpdate.result && (
                            <h2 className={cx("popup_title")}>신청서 상태를 변경하시겠습니까?</h2>
                        )}
                        {applyStatus == "RETURN" && <p>반려 신청 시 상담 신청 리스트에서 확인 할 수 없습니다.</p>}
                        {statusUpdate.result && <p>변경 완료되었습니다</p>}
                        {!statusUpdate.result ? (
                            <div style={{textAlign:'center',marginTop:7}}>
                                <button style={{fontSize:14,padding:'4px 8px',border:'1px solid gray',borderRadius:4}} onClick={() => {changeStatus()}}>확인</button>
                            </div>
                        ) : (
                            <button onClick={() => {
                                setShowStatusConfirmModal(false);
                                initializeForm('statusUpdate')
                            }}>닫기</button>
                        )}
                    </Modal>
                    <Modal visible={showAlertModal} closable={true} maskClosable={true} onClose={() => {
                        setShowAlertModal(false);
                    }} cx={cx} className={"counsel_apply_status_popup"}>
                        <h2 className={cx("popup_title")}>상담 진행중 상태에서만 제출이 가능합니다</h2>
                    </Modal>
                    <Modal visible={showResultModal} closable={true} maskClosable={true} onClose={() => {
                        setShowResultModal(false);
                    }} cx={cx} className={"counsel_apply_status_popup"}>
                        <h2 className={cx("popup_title")}>일지 작성이 완료되었습니다</h2>
                        <button onClick={() => {
                            router.push("/mypage/mentor")
                        }}>확인
                        </button>
                    </Modal>
                </section>
            )}

        </>
    );
};

export default CounselApplyDetail;
