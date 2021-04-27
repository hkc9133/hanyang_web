import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {useSelector,useDispatch} from "react-redux";
import {getBoard, initialize, initializeForm, updateBoard} from "../../../../store/board/adminBoard";

import styles from '../.././../../public/assets/styles/admin/board/board.module.css';
import classnames from "classnames/bind"
import wrapper from "../../../../store/configureStore";
import client from "../../../../lib/api/client";
import {END} from "redux-saga";
import {Modal, Tag} from 'antd';
import 'antd/dist/antd.css';

const cx = classnames.bind(styles);

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    // const cookie = context.req && context.req.headers.cookie ? context.req.headers.cookie : '';
    // client.defaults.headers.Cookie = cookie;
    //
    //
    // context.store.dispatch(getBoard(context.params.boardName));
    // context.store.dispatch(END);
    // await context.store.sagaTask.toPromise();
    return {
        props: {
            boardName: context.params.boardName,
        }
    }
})
const Edit = ({boardName}) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [boardValue, setBoardValue] = useState({
        boardKrName:"",
        boardDesc:"",
        categoryId:"",
        subName01:"",
        subName02:"",
        subName03:"",
        subName04:"",
        subName05:"",
        subName06:"",
        subName07:"",
    })
    const [categoryValue, setCategoryValue] = useState(null)
    const [categoryCodeValue, setCategoryCodeValue] = useState(null)

    const {board,category,categoryCode,update,boardLoading} = useSelector(({adminBoard,loading})=> ({
        board:adminBoard.board.board,
        category:adminBoard.board.category,
        update:adminBoard.update,
        categoryCode:adminBoard.board.categoryCode,
        boardLoading:loading['adminBoard/GET_BOARD'],
    }))

    useEffect(() =>{
        dispatch(getBoard(boardName))
        return () => {
            dispatch(initializeForm('update'))
        }
        // dispatch(getBoard(router.query.boardName))
    },[])

    useEffect(() => {
        if(boardLoading == false && board != null){
            setBoardValue({
                ...board,
                boardKrName:board.boardKrName != null ? board.boardKrName : "",
                boardDesc:board.boardDesc  != null ? board.boardDesc : "",
                categoryId: board.categoryId  != null ? board.categoryId : ""
            });
            setCategoryValue(category);
            setCategoryCodeValue(categoryCode);
        }
    },[board])

    useEffect(() => {
        console.log(boardValue)
    },[boardValue])

    useEffect(() => {
        if(update.result && update.error == null){
            Modal.success({
                title:"수정 완료",
                onOk:() =>{dispatch(initialize());router.back();}
            });
        }

    },[update])

    const changeBoardValue = (e) =>{
        const {name, value} = e.target
        setBoardValue({
            ...boardValue,
            [name]:value
        })
    }

    const changeCategoryValue = (e) =>{
        const {name, value} = e.target
        setCategoryValue({
            ...categoryValue,
            [name]:value
        })
    }

    const saveBoard = (e) =>{
        dispatch(updateBoard(boardValue))
    }

    return (
        <>
        {board == null ? <div>null...</div> : (
            <section className={cx("container","board_container")}>
                <h1 className={cx("top_title")}>게시판 수정</h1>
                <div className={cx("adm_container")}>
                    <div className={`${cx("member_info","box")} clfx `}>
                        <ul className={"clfx"}>
                            <li>
                                <span className={cx("title","icon_1")}>{board.boardKrName}</span>
                            </li>
                        </ul>
                    </div>

                    <p className={cx("txt_style_1")}>
                        {/*회원자료 삭제 시 다른 회원이 기존 회원아이디를 사용하지 못하도록 회원아이디, 이름, 닉네임은 삭제하지 않고 영구*/}
                        {/*보관합니다.*/}
                    </p>

                    <div className={cx("admin_cont")}>
                        <h2 className={cx("title_style_1")}><span>설정</span></h2>
                        <div className={cx("tb_style_1","edit_form")}>
                            <table>
                                <colgroup>
                                    <col style={{width:"30%"}}/>
                                    <col/>
                                </colgroup>
                                <thead>
                                </thead>
                                <tbody>
                                <tr>
                                    <th>게시판 이름</th>
                                    <td>
                                        <input className={cx("txt")} type="text" name="boardKrName" value={boardValue.boardKrName} onChange={(e)=>{changeBoardValue(e)}}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th>설명</th>
                                    <td>
                                        <input className={cx("txt")} type="text" name="boardDesc" value={boardValue.boardDesc} onChange={(e)=>{changeBoardValue(e)}}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th>카테고리</th>
                                    <td>
                                        <div>
                                            <select value={boardValue.categoryId} name="categoryId" onChange={(e)=>{changeBoardValue(e)}}>
                                                <option value={""}>사용안함</option>
                                                {categoryValue != null && (
                                                    categoryValue.map((item) => {
                                                        return <option key={item.categoryId} value={item.categoryId}>{item.categoryName}</option>
                                                    })
                                                )}
                                            </select>
                                        </div>
                                            {boardValue.categoryId != null && boardValue.categoryId != "" && (
                                                categoryCodeValue.filter((item) => (
                                                    item.categoryId == parseInt(boardValue.categoryId)
                                                )).map((categoryCode) => {
                                                    return <Tag className={cx("mg_t10")} key={categoryCode.categoryCodeId}>{categoryCode.categoryCodeName}</Tag>
                                                })
                                            )}
                                        {/*<input className={cx("txt")} type="text" name="boardKrName" value={boardValue.boardKrName} onChange={(e)=>{changeBoardValue(e)}}/>*/}
                                    </td>
                                </tr>
                                <tr>
                                    <th>첨부파일 사용</th>
                                    <td>
                                        <select value={boardValue.useFile} name="useFile" onChange={(e)=>{changeBoardValue(e)}}>
                                            <option value={false}>사용안함</option>
                                            <option value={true}>사용</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th>댓글 사용</th>
                                    <td>
                                        <select value={boardValue.useComment} name="useComment" onChange={(e)=>{changeBoardValue(e)}}>
                                            <option value={false}>사용안함</option>
                                            <option value={true}>사용</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th>서브 1</th>
                                    <td>
                                        <input className={cx("txt")} type="text" name="subName01" value={boardValue.subName01} onChange={(e)=>{changeBoardValue(e)}}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th>서브 2</th>
                                    <td>
                                        <input className={cx("txt")} type="text" name="subName02" value={boardValue.subName02} onChange={(e)=>{changeBoardValue(e)}}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th>서브 3</th>
                                    <td>
                                        <input className={cx("txt")} type="text" name="subName03" value={boardValue.subName03} onChange={(e)=>{changeBoardValue(e)}}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th>서브 4</th>
                                    <td>
                                        <input className={cx("txt")} type="text" name="subName04" value={boardValue.subName04} onChange={(e)=>{changeBoardValue(e)}}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th>서브 5</th>
                                    <td>
                                        <input className={cx("txt")} type="text" name="subName05" value={boardValue.subName05} onChange={(e)=>{changeBoardValue(e)}}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th>서브 6</th>
                                    <td>
                                        <input className={cx("txt")} type="text" name="subName06" value={boardValue.subName06} onChange={(e)=>{changeBoardValue(e)}}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th>서브 7</th>
                                    <td>
                                        <input className={cx("txt")} type="text" name="subName07" value={boardValue.subName07} onChange={(e)=>{changeBoardValue(e)}}/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <div className={cx("btn-box01")}>
                                <button className={cx("basic-btn01")} onClick={(e) => {saveBoard();}}>저장</button>
                                <button type="button" className={cx("basic-btn02","btn-gray-bd")} onClick={() => {router.push("/admin/board/list")}}>취소</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )}
        </>
    );
};

export default Edit;
