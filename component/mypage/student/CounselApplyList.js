import React, {createRef, useCallback, useEffect, useRef, useState} from 'react';
import Link from "next/link";
import moment from "moment";
import {getCounselStatus} from "../../common/util/StatusUtil";
import {useDispatch, useSelector} from "react-redux";
import {Modal, Upload} from "antd";
import {fileDownload} from "../../../store/file/file";
import {Rate} from 'antd';
import {useRouter} from "next/router";
import {initializeForm, updateCounselApplyStatus} from "../../../store/mentoring/mentoring";

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

const CounselApplyListItem = React.memo(({item, handleShowAnswer, showAnswer, handleUpdateScore,cancelConfirm, cx}) => {
        const router =useRouter();
        const questionRef = useRef();
        const dispatch = useDispatch();
        const [updateScore, setUpdateScore] = useState(2.5)
        const {user, counselApply,statusUpdate, loading} = useSelector(({auth, mentoring, loading}) => ({
            user: auth.user,
            statusUpdate: mentoring.statusUpdate,
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
                <li className={cx("question")} >
                    <ul>
                        <li className={cx("w_1")}>{item.rownum}</li>
                        <li className={cx("w_2")}>{moment(item.regDate).format("YYYY.MM.DD")}</li>
                        <li className={cx("w_3")} onClick={() => {
                            item.applyStatus == "TEMP"?
                            router.push(`/mypage/mentee/${item.formId}`) : item.applyStatus == "CANCEL" ? "" : handleShowAnswer(item.formId)
                        }}><button type={"button"}>{item.title}</button></li>
                        <li className={cx("w_4")}>{getCounselStatus(item.applyStatus)}</li>
                        <li className={cx("w_5")}>{item.mentorName}</li>
                        <li className={cx("w_6")}>{(item.applyStatus == "APPLY" ||item.applyStatus == "TEMP") && <button type={"button"} onClick={() =>{cancelConfirm(item.formId)}}>상담 취소</button>}</li>

                    </ul>
                </li>
                {counselApply.counselApply != null && (
                    <li className={cx("answer", {show: showAnswer == item.formId, hidden: showAnswer != item.formId})}>
                        <div className={cx("info")}>
                            <ul className={"clfx"}>
                                <li>구분</li>
                                <ul className={cx("dep_2")}>
                                    {counselApply.counselApply.sortationItemList.map((item) => {
                                        return <li key={item.itemId}>-{item.item}</li>
                                    })}
                                </ul>
                                <li>상담멘토 : {counselApply.counselApply.mentorName}</li>
                                <li>창업진행상황 : {counselApply.counselApply.formProgressItemName}</li>
                                <li>희망상담방식 :</li>
                                <ul className={cx("dep_2")}>
                                    {counselApply.counselApply.wayItemList.map((item) => {
                                        return <li key={item.itemId}>-{item.item}</li>
                                    })}
                                </ul>
                                <li>희망멘토링분야
                                    : {counselApply.counselApply.fieldName}</li>
                                <li className={cx("counsel_content")}>문의 내용
                                    <div className={"ck-content"}
                                         dangerouslySetInnerHTML={{__html: counselApply.counselApply.content}}/>
                                </li>
                            </ul>
                            {
                                counselApply.files.length > 0 && (
                                    <div className={cx("attached_file")}>
                                        <span className={cx("title")}>첨부파일</span>
                                        <Upload
                                            listType="picture"
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
                                    <h3>·일시</h3>
                                    <div className={cx("mentors_opinion_content")}>{`${moment(counselApply.counselApply.start).format("YYYY년 MM월 DD일 hh")} ~ ${moment(counselApply.counselApply.end).format("YYYY년 MM월 DD일 hh")}`}</div>
                                    <h3>·방법</h3>
                                    <div className={cx("mentors_opinion_content")}>
                                        {counselApply.wayItemList.map((item) =>(
                                            <li key={item.itemId}>{item.item}</li>
                                        ))}
                                    </div>
                                    <h3>·장소</h3>
                                    <div className={cx("mentors_opinion_content")}>
                                        {counselApply.counselApply.place}
                                    </div>

                                    <h3>·멘토의견</h3>
                                    <div className={cx("mentors_opinion_content")}>
                                        <div className={"ck-content"} dangerouslySetInnerHTML={{__html: counselApply.counselApply.answer}}/>
                                        <Rate allowHalf value={counselApply.counselApply.score} disabled/>
                                    </div>
                                    {/*<div className={cx("attached_file")}>*/}
                                    {/*    <span className={cx("title")}>·첨부파일</span>*/}
                                    {/*    {*/}
                                    {/*        counselApply.answerFiles.length > 0 && (*/}
                                    {/*            <Upload*/}
                                    {/*                listType="picture-card"*/}
                                    {/*                fileList={counselApply.answerFiles.map((file) => {*/}
                                    {/*                    return {*/}
                                    {/*                        uid: file.fileName,*/}
                                    {/*                        name: file.fileOriginName,*/}
                                    {/*                        status: 'done',*/}
                                    {/*                        fileId: file.fileId*/}
                                    {/*                    }*/}
                                    {/*                })}*/}
                                    {/*                showUploadList={{*/}
                                    {/*                    showPreviewIcon: false,*/}
                                    {/*                    showRemoveIcon: false,*/}
                                    {/*                    showDownloadIcon: true*/}
                                    {/*                }}*/}
                                    {/*                onDownload={handleFileDownload}*/}
                                    {/*            >*/}
                                    {/*            </Upload>*/}
                                    {/*        )*/}
                                    {/*    }*/}
                                    {/*</div>*/}
                                </div>
                                : counselApply.counselApply.applyStatus == "RETURN" ? "반려" : "진행중"}
                    </li>
                )}
            </ul>

        )
    }
)
export default CounselApplyList;
