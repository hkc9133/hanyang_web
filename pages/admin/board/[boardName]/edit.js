import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {useSelector,useDispatch} from "react-redux";
import {getBoard, initializeForm, updateBoard} from "../../../../store/board/adminBoard";

import styles from '../.././../../public/assets/styles/admin/board/board.module.css';
import classnames from "classnames/bind"
import wrapper from "../../../../store/configureStore";
import client from "../../../../lib/api/client";
import {END} from "redux-saga";
import { Tag } from 'antd';
import 'antd/dist/antd.css';

const cx = classnames.bind(styles);

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    const cookie = context.req && context.req.headers.cookie ? context.req.headers.cookie : '';
    client.defaults.headers.Cookie = cookie;


    context.store.dispatch(getBoard(context.params.boardName));
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
})
const Edit = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [boardValue, setBoardValue] = useState({
        boardKrName:"",
        boardDesc:"",
        categoryId:""
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
        console.log(router)
        if(router.params == undefined){
            return
        }else{
            // dispatch(getBoard(router.params.boardName));
        }
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

    // useEffect(() => {
    // },[boardValue,categoryValue,categoryCodeValue])

    useEffect(() => {
        if(update.result === true && update.error === null){
            alert("업데이트 성공")
            router.push("/admin/board/list")
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
        console.log(boardValue)
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
                                    {/*<col style={{width:"14.6%"}}/>*/}
                                    {/*<col style={{width:"13.7%"}}/>*/}
                                    {/*<col style={{width:"13.6%"}}/>*/}
                                    {/*<col style={{width:"17.2%"}}/>*/}
                                    {/*<col/>*/}
                                </colgroup>
                                <thead>
                                {/*<tr>*/}
                                {/*    <th scope="col">NO</th>*/}
                                {/*    <th scope="col">아이디</th>*/}
                                {/*    <th scope="col">닉네임</th>*/}
                                {/*    <th scope="col">메일인증</th>*/}
                                {/*    <th scope="col">상태</th>*/}
                                {/*    <th scope="col">최근접속일</th>*/}
                                {/*    <th scope="col">권한</th>*/}
                                {/*</tr>*/}
                                </thead>
                                <tbody>
                                <tr>
                                    <td>게시판 이름</td>
                                    <td>
                                        <input className={cx("txt")} type="text" name="boardKrName" value={boardValue.boardKrName} onChange={(e)=>{changeBoardValue(e)}}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>설명</td>
                                    <td>
                                        <input className={cx("txt")} type="text" name="boardDesc" value={boardValue.boardDesc} onChange={(e)=>{changeBoardValue(e)}}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>카테고리</td>
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
                                {/*<tr>*/}
                                {/*    <td>디자인 템플릿</td>*/}
                                {/*    <td>*/}
                                {/*        <select>*/}
                                {/*            <option>템플릿1</option>*/}
                                {/*            <option>템플릿2</option>*/}
                                {/*            <option>템플릿3</option>*/}
                                {/*        </select>*/}
                                {/*    </td>*/}
                                {/*</tr>*/}
                                </tbody>
                            </table>
                            <div>
                                <button onClick={(e) => {saveBoard();}}>저장</button>
                                <button onClick={() => {router.push("/admin/board/list")}}>취소</button>
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
