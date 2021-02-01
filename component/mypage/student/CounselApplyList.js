import React, {createRef, useCallback, useRef, useState} from 'react';
import Link from "next/link";
import moment from "moment";
import {getCounselStatus} from "../../common/util/StatusUtil";
import {useDispatch, useSelector} from "react-redux";
import {Upload} from "antd";
import {fileDownload} from "../../../store/file/file";
import {Rate} from 'antd';

const CounselApplyList = (props) => {
    return (
        <>
            {
                props.list.map((item) => {
                    return (
                        <CounselApplyListItem key={item.formId} item={item} {...props}/>
                    )
                })
            }
        </>

    );
};

const CounselApplyListItem = React.memo(({item, handleShowAnswer, showAnswer, handleUpdateScore, cx}) => {
        const questionRef = useRef();
        const dispatch = useDispatch();
        const [updateScore, setUpdateScore] = useState(2.5)
        const {user, counselApply, loading} = useSelector(({auth, mentoring, loading}) => ({
            user: auth.user,
            counselApply: mentoring.getCounselApply,
            loading: loading['mentoring/GET_COUNSEL_APPLY']
        }))


        const scrollToRef = (value) => {
            setTimeout(() => questionRef.current.scrollIntoView({behavior: "smooth", block: "start"}), 0)
        };


        const handleFileDownload = useCallback(({fileId}) => {
            if (fileId != undefined) {
                dispatch(fileDownload(fileId))
            }
        }, [])

        return (
            <ul ref={questionRef}>
                <li className={cx("question")} onClick={() => {
                    handleShowAnswer(item.formId);
                    scrollToRef();
                }}>
                    <ul>
                        <li className={cx("w_1")}>{item.rownum}</li>
                        <li className={cx("w_2")}>{moment(item.regDate).format("YYYY.MM.DD")}</li>
                        <li className={cx("w_3")}>{item.title}</li>
                        <li className={cx("w_4")}>{getCounselStatus(item.applyStatus)}</li>
                        <li className={cx("w_5")}>{item.mentorName}</li>
                    </ul>
                </li>
                {counselApply.counselApply != null && (
                    <li className={cx("answer", {show: showAnswer == item.formId, hidden: showAnswer != item.formId})}>
                        <div className={cx("info")}>
                            <ul className={"clfx"}>
                                <li>구분 : {counselApply.counselApply.formSortationItemName}</li>
                                <li>상담멘토 : {counselApply.counselApply.mentorName}</li>
                                <li>창업진행상황 : {counselApply.counselApply.formProgressItemName}</li>
                                <li>희망상담방식 : {counselApply.counselApply.formWayItemName}</li>
                                <li>희망멘토링분야
                                    : {counselApply.counselApply.counselFieldList.map((item) => (item.fieldName + ","))}</li>
                                <li className={cx("counsel_content")}>문의 내용
                                    <div dangerouslySetInnerHTML={{__html: counselApply.counselApply.content}}/>
                                </li>
                            </ul>
                            {
                                counselApply.files.length > 0 && (
                                    <div className={cx("attached_file")}>
                                        <span className={cx("title")}>첨부파일</span>
                                        <Upload
                                            listType="picture-card"
                                            fileList={counselApply.files.map((file) => {
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
                                    </div>
                                )
                            }
                        </div>
                        {(counselApply.counselApply.applyStatus == "COMPLETED" && counselApply.counselApply.score == null) ?
                            <div className={cx("satisfaction")}>
                                <span>멘토의 의견은 만족도 조사 후 열람이 가능합니다.</span>
                                <div className={cx("review")}>
                                    <Rate allowHalf defaultValue={updateScore} value={updateScore}
                                          onChange={setUpdateScore}/>
                                </div>
                                <button type="button" className={cx("btn_save")} onClick={() => {
                                    handleUpdateScore(counselApply.counselApply.formId, updateScore)
                                }}>저장
                                </button>
                            </div>
                            : (counselApply.counselApply.applyStatus == "COMPLETED") ?
                                <div className={cx("mentors_opinion")} style={{display: 'block'}}>
                                    <h3>멘토의견</h3>
                                    <div className={cx("mentors_opinion_content")}>
                                        <div dangerouslySetInnerHTML={{__html: counselApply.counselApply.answer}}/>
                                        <Rate allowHalf value={counselApply.counselApply.score} disabled/>
                                    </div>
                                    <div className={cx("attached_file")}>
                                        <span className={cx("title")}>첨부파일</span>
                                        {
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
                                        }
                                    </div>
                                </div> : counselApply.counselApply.applyStatus == "RETURN" ? "반려" : "진행중"}
                    </li>
                )}
            </ul>

        )
    }
)
export default CounselApplyList;
