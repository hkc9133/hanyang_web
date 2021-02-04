import React, {useCallback, useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {
    getCounselApply,
    getMentor,
    getMentorList,
    initialize, updateCounselApply,
    updateMentor
} from "../../../../store/mentoring/adminMentoring";
import client from "../../../../lib/api/client";
import Link from 'next/link';
import {Tag, Upload,Modal} from "antd";
import moment from 'moment';
import styles from '../../../../public/assets/styles/admin/mentor/mentor.module.css';
import classnames from "classnames/bind"
import qs from "query-string";
import MentorListTable from "../../../../component/admin/mentor/MentorListTable";
import Pagination from "../../../../component/common/Pagination";
import AssignMentorListTable from "../../../../component/admin/counsel_apply/AssignMentorListTable";
import Image from "next/image";
import {getCounselStatus} from "../../../../component/common/util/StatusUtil";
import {fileDownload} from "../../../../store/file/file";
// import Modal from "../../../../component/common/Modal";

const cx = classnames.bind(styles);

const CounselApplyFormDetail = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [applyValue, setApplyValue] = useState(null);
    const [searchInfo, setSearchInfo] = useState({
        searchField: "",
        searchValue: ""
    })
    const [showResultModal,setShowResultModal] = useState(false);
    const [showMentorAssign, setShowMentorAssign] = useState(false);
    const [selectMentor, setSelectMentor] = useState({
        mentorId: null,
        mentorName: null
    });

    const {counselApply,update, mentorList} = useSelector(({adminMentoring}) => ({
        counselApply: adminMentoring.counselApply,
        update:adminMentoring.counselApplyUpdate,
        mentorList: adminMentoring.mentorList
    }))

    useEffect(() => {
        if (counselApply.counselApply != null) {
            setApplyValue({
                ...counselApply.counselApply,
                files:counselApply.files,
            })
        }
    }, [counselApply.counselApply])

    useEffect(() => {
        dispatch(getCounselApply(router.query.formId))
        return () => {
            dispatch(initialize())
        }
    }, [])

    useEffect(() => {
        setSelectMentor({
            mentorId: null,
            mentorName: null
        })
        if (showMentorAssign) {
            const {page = 1, searchValue = null, searchField = null, mentorStatus = null} = router.query
            const data = {
                page: page,
                ...searchInfo
            }
            dispatch(getMentorList(data));
        }

    }, [showMentorAssign, router.query])

    const changeMentorSearchInfo = (e) => {
        const {name, value} = e.target;

        setSearchInfo({
            ...searchInfo,
            [name]: value
        })
    }

    const searchMentor = (e) => {
        const queryString = qs.stringify(router.query);
        router.push(`${router.pathname}?${queryString}`)
    }

    const pageChange = (pageNum) => {
        const queryString = qs.stringify({...router.query, page: pageNum});
        router.push(`${router.pathname}?${queryString}`)
    }

    const changeApplyValue = (e) => {
        const {name, value} = e.target
        setApplyValue({
            ...applyValue,
            [name]: value
        })
    }

    const assignMentor = () => {
        if (selectMentor != null) {
            setApplyValue({
                ...applyValue,
                applyStatus:'ASSIGN',
                mentorName:null,
                assignMentorId: selectMentor.mentorId,
                assignMentorName: selectMentor.mentorName,
            });
        }
        setShowMentorAssign(false);

    }

    const saveApply = () => {
        dispatch(updateCounselApply(applyValue))
    }

    useEffect(() => {
        if(update.result === true && update.error === null){
            Modal.success({
                content: '저장이 완료되었습니다',
                onOk:() => {router.push("/admin/counsel_apply");}
            });
        }

    },[update])


    const MentorAssignButton = () => {
        return (
            <button className={cx("basic-btn01")} onClick={() => {setShowMentorAssign(!showMentorAssign)}}>멘토 배정 하기</button>
        )

    }

    const handleFileDownload = useCallback(({fileId}) => {
        if (fileId != undefined) {
            dispatch(fileDownload(fileId))
        }
    }, [])

    return (
        <>
            {applyValue == null ? <div>null...</div> : (
                <section className={cx("container")}>
                    <h1 className={cx("top_title")}>상담 신청서</h1>
                    <div className={cx("adm_container")}>
                        {/*<div className={`${cx("mentor_info","box")} clfx `}>*/}
                        {/*    <ul className={"clfx"}>*/}
                        {/*        <li>*/}
                        {/*            <span className={cx("title","icon_1")}>{mentorValue.mentorName}</span>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}

                        <p className={cx("txt_style_1")}>
                            {/*회원자료 삭제 시 다른 회원이 기존 회원아이디를 사용하지 못하도록 회원아이디, 이름, 닉네임은 삭제하지 않고 영구*/}
                            {/*보관합니다.*/}
                        </p>

                        <div className={cx("admin_cont")}>
                            <h2 className={cx("title_style_1")}><span>신청서 상세</span></h2>
                            <div className={cx("tb_style_2", "apply_form")}>
                                {!showMentorAssign ? (
                                        <>
                                            <table>
                                                <colgroup>
                                                    <col style={{width: "20%"}}/>
                                                    <col style={{width: "20%"}}/>
                                                    <col style={{width: "20%"}}/>
                                                    <col/>
                                                </colgroup>
                                                <thead>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <th>
                                                        신청일
                                                    </th>
                                                    <td colSpan={5}>
                                                        {moment(applyValue.regDatr).format("YYYY년 MM월 DD일 hh:mm")}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>신청 상태</th>
                                                    <td>
                                                        {getCounselStatus(applyValue.applyStatus)}
                                                    </td>
                                                    <th>
                                                        담당 멘토
                                                    </th>
                                                    <td>
                                                        {applyValue.applyStatus == "APPLY" &&
                                                        <>
                                                            <MentorAssignButton/>
                                                        </>
                                                        }
                                                        {applyValue.assignMentorName != null &&
                                                        <>
                                                            {applyValue.assignMentorName}
                                                            <button className={cx("basic-btn03")} onClick={() =>{setApplyValue({...applyValue,assignMentorId:null,assignMentorName:null,applyStatus:'APPLY'})}}>배정 취소</button>
                                                        </>
                                                        }
                                                        {applyValue.assignMentorId != null && applyValue.mentorName && (
                                                            <>
                                                                <Link href={`/admin/mentor/detail/${applyValue.assignMentorId}`}><a>{applyValue.mentorName}</a></Link>
                                                                <button className={cx("basic-btn03")}  onClick={() =>{setApplyValue({...applyValue,assignMentorId:null,assignMentorName:null,applyStatus:'APPLY'})}}>배정 취소</button>
                                                            </>
                                                        )}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>아이디</th>
                                                    <td colSpan={1}>
                                                        {applyValue.userId}
                                                    </td>
                                                    <th>
                                                        이름
                                                    </th>
                                                    <td colSpan={1}>
                                                        {applyValue.menteeName}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>희망 멘토</th>
                                                    <td>
                                                        <Link
                                                            href={`/admin/mentor/detail/${applyValue.mentorId}`}><a>{applyValue.mentorName}</a></Link>
                                                    </td>
                                                    <th>희망 멘토링 분야</th>
                                                    <td>
                                                        {/*{applyValue.counselFieldList.map((item, index) => (*/}
                                                        {/*    <Tag className={cx("mg_t10")} key={index}>{item.fieldName}</Tag>*/}
                                                        {/*))}*/}
                                                        {applyValue.fieldName}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>구분</th>
                                                    <td colSpan={5}>
                                                        <ul>
                                                        {applyValue.sortationItemList.map((item) =>{
                                                            return <li key={item.itemId}>{item.item}</li>
                                                        })}
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>창업 진행 상황</th>
                                                    <td colSpan={5}>
                                                        {applyValue.formProgressItemName}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>희망 상담 방식</th>
                                                    <td colSpan={5}>
                                                        <ul>
                                                            {applyValue.wayItemList.map((item) =>{
                                                                return <li key={item.itemId}>{item.item}</li>
                                                            })}
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>상담 제목</th>
                                                    <td colSpan={5}>
                                                        {applyValue.title}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>상담 내용</th>
                                                    <td colSpan={5}>
                                                        <div className={"ql-editor"} dangerouslySetInnerHTML={{__html: applyValue.content}}/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>첨부파일</th>
                                                    <td colSpan={5}>
                                                        {
                                                            applyValue.files.length > 0 && (
                                                                // <div className={cx("bbs_attach_file")}>
                                                                    <Upload
                                                                        listType="picture-card"
                                                                        fileList={applyValue.files.map((file) => {
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
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <div className={cx("btn-box01")}>
                                                <button className={cx("basic-btn02", "btn-gray-bg")} onClick={() => {
                                                    router.back()
                                                }}>뒤로가기
                                                </button>
                                                <button className={cx("basic-btn02", "btn-gray-bd2")} onClick={() => {
                                                    saveApply()
                                                }}>저장
                                                </button>
                                            </div>
                                        </>
                                    ) :
                                    <div>
                                        <div className={cx("admin_cont")}>
                                            <div className={`${cx("mentor_id_search")} clfx`}>
                                                <select name="searchField" onChange={(e) => {
                                                    changeMentorSearchInfo(e)
                                                }}>
                                                    <option value="">검색조건</option>
                                                    <option value="user_id">아이디</option>
                                                    <option value="mentor_name">이름</option>
                                                    <option value="mentor_company">소속</option>
                                                    <option value="mentorPhoneNumber">핸드폰번호</option>
                                                    <option value="mentor_email">E-MAIL</option>
                                                </select>
                                                <input type="text" name="searchValue" onChange={(e) => {
                                                    changeMentorSearchInfo(e)
                                                }}/>
                                                <button type="button" className={cx("btn_search")} onClick={() => {
                                                    searchMentor()
                                                }}>
                                                    <Image src="/assets/image/admin/btn_search.gif" width={40}
                                                           height={33} alt="검색하기"/>
                                                </button>
                                            </div>
                                            <div className={cx("tb_style_1")}>
                                                <AssignMentorListTable cx={cx} list={mentorList.list}
                                                                       selectMentor={selectMentor}
                                                                       setSelectMentor={setSelectMentor}/>
                                            </div>
                                            {mentorList.page != null && (
                                                <Pagination
                                                    totalRecords={mentorList.page.totalCount}
                                                    pageLimit={mentorList.page.pageSize}
                                                    pageNeighbours={1}
                                                    currentPage={mentorList.page.pageNo}
                                                    onPageChanged={pageChange}
                                                />
                                            )}
                                        </div>
                                        <div className={cx("btn-box01")}>

                                            <button className={cx("basic-btn02", "btn-gray-bg")} onClick={() => {
                                                setShowMentorAssign(false)
                                            }}>취소
                                            </button>
                                            <button className={cx("basic-btn02", "btn-gray-bd2")} onClick={() => {
                                                assignMentor();
                                            }}>배정
                                            </button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    {/*<Modal visible={showResultModal} closable={true} maskClosable={true} onClose={() => {*/}
                    {/*    setShowResultModal(false);*/}
                    {/*}} cx={cx} className={"mentor_popup"}>*/}
                    {/*    <h2 className={cx("popup_title")}>저장이 완료되었습니다</h2>*/}
                    {/*    <div className={cx("btn_box")}>*/}
                    {/*        <button className={cx("basic-btn01","btn-gray-bg")} onClick={() =>{setShowResultModal(false);router.push("/admin/counsel_apply")}}>확인</button>*/}
                    {/*    </div>*/}
                    {/*</Modal>*/}
                </section>
            )}
        </>
    );
};

// const MentorAssignButton = () =>{
//     return (
//         <button onClick={() =>{}}>멘토 배정</button>
//     )
// }


export default CounselApplyFormDetail;
