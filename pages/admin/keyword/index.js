import React, {useCallback, useEffect, useState} from 'react';
import styles from '../../../public/assets/styles/admin/keyword/keyword.module.css';
import classnames from "classnames/bind"
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import qs from "query-string";
import Link from "next/link";
import Pagination from "../../../component/common/Pagination";
import {
    addKeyword,
    deleteKeyword,
    getKeyword,
    getKeywordList,
    initialize,
    updateKeyword
} from "../../../store/keyword/adminKeyword";
const cx = classnames.bind(styles);
import {DatePicker, Form, Input, Modal} from 'antd';
import moment from "moment";
import locale from "antd/lib/date-picker/locale/ko_KR";

const KeywordManagePage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [addForm] = Form.useForm();
    const [editForm] = Form.useForm();


    const [showAddModal, setShowAddModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)

    const [addInfo, setAddInfo] = useState({
        keyword:"",
        count:1
    })
    const [editInfo, setEditInfo] = useState({
        keywordId:null,
        keyword:"",
        count:1
    })

    const [searchInfo, setSearchInfo] = useState({
        searchField:"",
        searchValue:"",
    })

    const {keywordList,keyword,addResult,addLoading,editResult,editLoading,deleteResult,deleteLoading} = useSelector(({adminKeyword,loading})=> ({
        keywordList:adminKeyword.getKeywordList,
        keyword:adminKeyword.getKeyword,
        addResult:adminKeyword.addKeyword,
        addLoading:loading['adminKeyword/ADD_KEYWORD'],
        editResult:adminKeyword.updateKeyword,
        editLoading:loading['adminKeyword/UPDATE_KEYWORD'],
        deleteResult:adminKeyword.deleteKeyword,
        deleteLoading:loading['adminKeyword/DELETE_KEYWORD']
    }))

    const getList = () =>{
        const { page = 1,searchValue = null,searchField = null} = router.query

        const data = {
            page:page,
            searchValue:searchValue,
            searchField:searchField,
        }
        dispatch(getKeywordList(data))

    }

    useEffect(() => {
        getList();

    },[router.query])

    useEffect(() =>{
        if(keyword != null){
            setEditInfo({...keyword})
            setShowEditModal(true)
        }

    },[keyword])

    useEffect(() =>{
        // console.log(editInfo)

    },[editInfo])



    const pageChange = useCallback((page) =>{
        const {} = router.query
        const data = {
            page:page,
        }
        const queryString = qs.stringify(data);
        router.push(`${router.pathname}?${queryString}`)
    },[router.query])

    const changeSearchInfo = (e) => {
        const {name, value} = e.target;

        setSearchInfo({
            ...searchInfo,
            [name]:value
        })
    }

    const searchEvent = (e) => {
        const queryString = qs.stringify(searchInfo);
        router.push(`${router.pathname}?${queryString}`)
    }


    const changeAddInfo = (e) =>{
        const {value, name} = e.target;

        setAddInfo({
            ...addInfo,
            [name]:value
        })
    }

    useEffect(() =>{
        // console.log(addInfo)


    },[addInfo])

    const changeEditInfo = (e) =>{
        const {value, name} = e.target;
        setEditInfo({
            ...editInfo,
            [name]:value
        })
    }

    const handleAdd = () =>{
        // console.log(addInfo)
    }

    const handleAddCancel = () =>{
        setShowAddModal(false)
        setAddInfo({
            keyword:"",
            count:1
        })
    }

    const handleEdit = () =>{
        // console.log(editInfo)
    }

    const handleShowEditModal = (keywordId) =>{
        dispatch(getKeyword(keywordId))
        // setShowEditModal(true)
    }


    const handleEditCancel = () =>{
        setShowEditModal(false)
        setEditInfo({
            keywordId:null,
            keyword:"",
            count:1
        })
    }

    const addSubmit = () =>{
        dispatch(addKeyword(addInfo))
    }

    useEffect(() =>{
        if(addResult.result && addResult.error == null){
            Modal.success({
                content: '키워드 추가가 완료되었습니다',
                onOk:() => {handleAddCancel();getList();dispatch(initialize());}
            });
        }else if(addResult.result == false && addResult.error != null){
            Modal.warning({
                title: '추가 중 에러가 발생하였습니다'
            });
            dispatch(initialize())
        }

    },[addResult])

    const editSubmit = () =>{
        dispatch(updateKeyword(editInfo))
    }

    useEffect(() =>{
        if(editResult.result && editResult.error == null){
            Modal.success({
                content: '키워드 수정이 완료되었습니다',
                onOk:() => {handleEditCancel();getList();dispatch(initialize());}
            });
        }else if(editResult.result == false && editResult.error != null){
            Modal.warning({
                title: '수정 중 에러가 발생하였습니다'
            });
            dispatch(initialize())
        }

    },[editResult])

    const deleteSubmit = () =>{
        dispatch(deleteKeyword(editInfo.keywordId))
    }

    useEffect(() =>{
        if(deleteResult.result && deleteResult.error == null){
            Modal.success({
                content: '키워드 삭제 완료되었습니다',
                onOk:() => {handleEditCancel();getList();dispatch(initialize());}
            });
        }else if(deleteResult.result == false && deleteResult.error != null){
            Modal.warning({
                title: '삭제 중 에러가 발생하였습니다'
            });
            dispatch(initialize())
        }

    },[deleteResult])

    return (
        <>
            <section className={cx("container")}>
                <h1 className={cx("top_title")}>검색어 목록</h1>
                <div className={cx("adm_container")}>
                    <div className={`${cx("keyword_info","box")} clfx `}>
                        <ul className={"clfx"}>
                            <li>
                                <span className={cx("title","icon_1")}>키워드</span>
                                <div className={cx("number")}>
                                    <strong>{keywordList.page !== null && keywordList.page.totalCount}</strong>개
                                </div>
                            </li>
                        </ul>

                    </div>

                    <p className={cx("txt_style_1")}>
                        {/*회원자료 삭제 시 다른 회원이 기존 회원아이디를 사용하지 못하도록 회원아이디, 이름, 닉네임은 삭제하지 않고 영구*/}
                        {/*보관합니다.*/}
                    </p>

                    <div className={cx("admin_cont")}>
                        <h2 className={cx("title_style_1")}><span>목록</span></h2>
                        <div className={cx("btn-box01")}>
                            <button className={cx("basic-btn03")} onClick={()=>{setShowAddModal(true)}}>검색어 추가</button>
                        </div>
                        <div className={cx("tb_style_1","keyword_list")}>
                            <table>
                                <colgroup>
                                    <col style={{width: "70%"}}/>
                                    <col/>
                                    <col/>
                                </colgroup>
                                <thead>
                                <tr>
                                    {/*<th scope="col">NO</th>*/}
                                    <th scope="col">키워드</th>
                                    <th scope="col">검색 수</th>
                                </tr>
                                </thead>
                                <tbody>
                                {keywordList.list.map((item) => {
                                    return (
                                        <tr key={item.keywordId}>
                                            {/*<td>*/}
                                            {/*    {item.rownum}*/}
                                            {/*</td>*/}
                                            <td>
                                                <a onClick={() =>{handleShowEditModal(item.keywordId)}}>{item.keyword}</a>
                                            </td>
                                            <td>
                                                {item.count}
                                            </td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                        </div>

                        {keywordList.page != null && (
                            <Pagination
                                totalRecords={keywordList.page.totalCount}
                                pageLimit={keywordList.page.pageSize}
                                pageNeighbours={1}
                                currentPage={keywordList.page.pageNo}
                                onPageChanged={pageChange}
                            />
                        )}
                    </div>
                </div>
                <Modal key="add" title="키워드 추가" visible={showAddModal} onOk={addForm.submit} onCancel={handleAddCancel}
                       footer={[
                           <button key="cancelBtn" className={cx("basic-btn01","btn-gray2-bg")} onClick={handleAddCancel}>취소</button>,
                           <button key="addBtn" className={cx("basic-btn01","btn-blue-bg")} onClick={addForm.submit} disabled={addLoading}>확인</button>
                       ]}
                >
                    <Form form={addForm} onFinish={addSubmit}>
                        <div className={cx("adm_container")}>
                                <div className={cx("keyword_detail")}>
                                    {/*<h2>팝업 정보</h2>*/}
                                    <div className={cx("tb_style_2")}>
                                        <table>
                                            <colgroup>
                                                <col/>
                                                <col/>
                                            </colgroup>
                                            <tbody>
                                            <tr>
                                                <th scope="row">키워드</th>
                                                <td>
                                                    <Form.Item
                                                        name="keyword"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: '키워드는 필수입니다',
                                                            },
                                                        ]}
                                                    >
                                                        <input type="text" name="keyword" onChange={changeAddInfo}
                                                               placeholder="키워드"
                                                               value={addInfo.keyword}/>
                                                    </Form.Item>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">조회수</th>
                                                <td colSpan={3}>
                                                        <input type="number" className={cx("w_100p")}
                                                               name="count" onChange={changeAddInfo}
                                                               value={addInfo.count}
                                                               placeholder="조회수"/>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                        </div>
                    </Form>
                </Modal>

                <Modal key="edit" title="키워드 수정" visible={showEditModal} onCancel={handleEditCancel}
                       footer={[
                           <button key="removeBtn" className={cx("basic-btn01","btn-red-bg")} onClick={deleteSubmit}>삭제</button>,
                           <button key="cancelBtn" className={cx("basic-btn01","btn-gray2-bg")} onClick={handleEditCancel}>취소</button>,
                           <button key="editBtn" className={cx("basic-btn01","btn-blue-bg")} onClick={editForm.submit} disabled={editLoading}>확인</button>
                       ]}
                >
                    {keyword != null && (
                        <Form form={editForm} onFinish={editSubmit}
                              initialValues={{
                                  keyword: editInfo.keyword,
                                  count: editInfo.count,
                              }}>
                            <div className={cx("adm_container")}>
                                <div className={cx("keyword_detail")}>
                                    {/*<h2>팝업 정보</h2>*/}
                                    <div className={cx("tb_style_2")}>
                                        <table>
                                            <colgroup>
                                                <col/>
                                                <col/>
                                            </colgroup>
                                            <tbody>
                                            <tr>
                                                <th scope="row">키워드</th>
                                                <td>
                                                    <Form.Item
                                                        name="keyword"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: '키워드는 필수입니다',
                                                            },
                                                        ]}
                                                    >
                                                        <input type="text" name="keyword" onChange={changeEditInfo}
                                                               placeholder="키워드"
                                                               value={editInfo.keyword}/>
                                                    </Form.Item>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">조회수</th>
                                                <td colSpan={3}>
                                                    <input type="number" className={cx("w_100p")}
                                                           name="count" onChange={changeEditInfo}
                                                           value={editInfo.count}
                                                           placeholder="조회수"/>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}

                </Modal>
            </section>
        </>
    );
};

export default KeywordManagePage;
