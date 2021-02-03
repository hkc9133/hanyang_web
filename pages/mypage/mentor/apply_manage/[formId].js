import React, {useCallback, useEffect, useState} from 'react';
import Link from 'next/link';
import styles from '../../../../public/assets/styles/mypage/mentor.module.css';
import classnames from "classnames/bind"
import {useDispatch, useSelector} from "react-redux";
import {
    addDiary,
    getMentorCounselApply,
    getMentorCounselApplyList,
    initialize, initializeForm,
    updateCounselApplyStatus
} from "../../../../store/mentoring/mentoring";
import {useRouter} from "next/router";
import dynamic from "next/dynamic";
import {Form, Upload} from "antd";
import {fileDownload} from "../../../../store/file/file";
import {PlusOutlined} from "@ant-design/icons";
import {addBoardContent} from "../../../../store/board/board";
import Modal from "../../../../component/common/Modal";

const QuillEditor = dynamic(() => import("../../../../component/common/QuillEditor"), {
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
    const [answer, setAnswer] = useState({
        attachFiles: [],
    });
    const [content, setContent] = useState("");
    const {user, counselApply, statusUpdate, addDiaryResult} = useSelector(({auth, mentoring, loading}) => ({
        user: auth.user,
        counselApply: mentoring.getCounselApply,
        statusUpdate: mentoring.statusUpdate,
        addDiaryResult: mentoring.addDiary
    }))

    useEffect(() => {
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
        <div>
            <PlusOutlined/>
            <div style={{marginTop: 8}}>Upload</div>
        </div>
    );

    const changeStatus = () => {
        const data = {
            formId: apply.formId,
            applyStatus: applyStatus
        }
        dispatch(updateCounselApplyStatus(data));
    }

    const submitAnswer = (e) => {
        if (counselApply.counselApply.applyStatus != 'PROCESS') {
            setShowAlertModal(true);
        } else {
            const data = {
                ...answer,
                formId: apply.formId,
                answer: content,
                files: answer.attachFiles.map((item) => (item.originFileObj)),
            }
            dispatch(addDiary(data))

        }
    }

    return (
        <>
            {apply != null && (
                <section className={cx("container")}>
                    <div className={cx("sub_container", "mentor_group_write")}>
                        <h1 className={cx("sub_top_title")}>멘토단 소개</h1>
                        <p className={cx("sub_top_txt")}>전문 멘토로부터 듣는 창업 알짜 정보 예비창업자를 위한 <br/>창업 전문 상담코너입니다.</p>

                        <div className={cx("tab_style_2")}>
                            <ul>
                                <li className={cx("on")}><Link href="mentoring_management.html"><a>나의 멘토링현황</a></Link>
                                </li>
                                <li><Link href="/"><a>프로필변경</a></Link></li>
                                <li><Link href="/"><a>위촉장 리스트</a></Link></li>
                            </ul>
                        </div>

                        <div className={cx("my_mentoring")}>
                            <ul>
                                <li>창업지원단 관리자가 멘토님께 배정된 멘토링 진행 건 입니다.</li>
                                <li>요청시간 및 요건이 맞지 않으시면 반려, 가능하시다면 승인를 선택 후 저장 부탁 드립니다.</li>
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
                                    <option value="PROCESS">상담 진행중</option>
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
                                    <div className={"ql-editor"} dangerouslySetInnerHTML={{__html: apply.content}}/>
                                </div>
                            </li>
                            <li>
                                <span className={cx("title")}>첨부파일</span>
                                {
                                    apply.files.length > 0 && (
                                        // <div className={cx("bbs_attach_file")}>
                                        <Upload
                                            listType="picture-card"
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

                        {/*<h2>멘토링 일지 <span>(멘티)</span></h2>*/}
                        {/*<div className={cx("mentoring_applicants")}>*/}
                        {/*    <ul className={"clfx w_3 mb_50"}>*/}
                        {/*        <li>*/}
                        {/*            <label htmlFor="mentoring_diary_1">소속</label>*/}
                        {/*            <input type="text" id="mentoring_diary_1"/>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <label htmlFor="mentoring_diary_2">이름 </label>*/}
                        {/*            <input type="text" id="mentoring_diary_2"/>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <label htmlFor="mentoring_diary_3">아이템 </label>*/}
                        {/*            <input type="text" id="mentoring_diary_3"/>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}

                        <h2>멘토링 일지 <span>(멘토)</span></h2>
                        <Form form={form} onFinish={(e) => {
                            submitAnswer(e)
                        }}>
                            <div className={cx("mentoring_applicants")}>
                                <ul className={"clfx w_2"}>
                                    <li>
                                        <label htmlFor="mentoring_diary_8">멘토링 방법 </label>
                                        {counselApply.counselApply.applyStatus == 'COMPLETED' ? (
                                            <input type="text" id="mentoring_diary_8"
                                                   value={counselApply.counselApply.answerWay} readOnly={true}/>
                                        ) : (
                                            <input type="text" id="mentoring_diary_8" value={answer.way} name="way"
                                                   onChange={changeAnswer}/>
                                        )}
                                    </li>
                                </ul>
                            </div>

                            <h2>주요내용</h2>
                            <ul className={`${cx("consultation_details")} mb_50 `}>
                                <li>
                                    <label htmlFor="counseling_txt" className={cx("title")}>주요내용</label>
                                    {counselApply.counselApply.applyStatus == 'COMPLETED' ? (
                                        <div className={cx("apply_content_box")}>
                                            <div dangerouslySetInnerHTML={{__html: counselApply.counselApply.answer}}/>
                                        </div>
                                    ) : (
                                        <QuillEditor Contents={content} QuillChange={setContent}/>
                                    )}
                                </li>
                                <li>
                                    <span className={cx("title")}>첨부파일</span>
                                    {counselApply.counselApply.applyStatus == 'COMPLETED' ? (
                                        counselApply.answerFiles.length > 0 && (
                                            <Upload
                                                listType="picture-card"
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
                                        <Upload
                                            listType="picture-card"
                                            fileList={answer.attachFiles}
                                            onPreview={handlePreview}
                                            onChange={changeFileList}
                                        >
                                            {answer.attachFiles.length >= 2 ? null : uploadButton}
                                        </Upload>
                                    )}
                                    <p className={cx("help_txt")}>※ 멘토링 사진 첨부 (사진은 2매 첨부 부탁드리며, 옆사진과 다른 각도의 사진 요망)</p>
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
                            <button onClick={() => {
                                changeStatus()
                            }}>변경</button>
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
