import React, {useCallback, useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {Checkbox, Form, Modal, Upload} from "antd";
import {addBoardContent, getBoard, initialize} from "../../../../../store/board/adminBoard";
import {PlusOutlined} from "@ant-design/icons";
const QuillEditor = dynamic(() => import("../../../../../component/common/QuillEditor"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
});
// import Modal from "../../../../../component/common/Modal";
import dynamic from "next/dynamic";

import styles from '../.././../../../public/assets/styles/admin/board/board.module.css';
import classnames from "classnames/bind"

const cx = classnames.bind(styles);


export async function getStaticPaths() {
    return {
        paths: [
            { params: { boardName: 'idea' } },
            { params: { boardName: 'data_room' } },
            { params: { boardName: 'notice' } },
            { params: { boardName: 'startup_info' } },
            { params: { boardName: 'startup_news' } },
            { params: { boardName: 'people' } },
            { params: { boardName: 'online_content' } },
            { params: { boardName: 'startup_support_coverage' } },
            { params: { boardName: 'ir' } },
        ],
        fallback: true
    };
}

export async function getStaticProps(context) {
    return {
        props: { boardName: context.params.boardName },
    };
}
const Write = (props) => {

    const router = useRouter();
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const [writeInfo, setWriteInfo] = useState({
        title: "",
        attachFiles:[],
        categoryCodeId:"",
    })
    const [content,setContent] = useState("");
    const [addResultModal, setAddResultModal] = useState(false)

    const {board,add,user} = useSelector(({adminBoard,auth,loading})=> ({
        board:adminBoard.board,
        add:adminBoard.add,
        user:auth.user,
    }))


    useEffect(() => {
        dispatch(getBoard(router.query.boardName))
        return () => {
            dispatch(initialize());
        };
    }, []);

    const changeWriteInfo = useCallback((e) =>{
        const {name, value} = e.target

        setWriteInfo(writeInfo =>({
            ...writeInfo,
            [name]: value,
        }))
    },[])

    // const changeCategory = useCallback((value) =>{
    //     setWriteInfo(writeInfo =>({
    //         ...writeInfo,
    //         categoryCodeId: value,
    //     }))
    // },[])


    const changeFileList = useCallback(({fileList}) =>{
        setWriteInfo(writeInfo =>({
            ...writeInfo,
            attachFiles: fileList
        }))
    },[])

    const handlePreview = useCallback((file) =>{

        const fileURL = URL.createObjectURL(file.originFileObj);
        window.open(fileURL);

    },[])

    useEffect(() =>{

        if(add.result && add.error == null){
            Modal.success({
                title:"글쓰기 완료",
                onOk:() =>{router.back();}
            });
            // setAddResultModal(true);
        }
    },[add])



    const submitApply = (e) => {
        const data = {
            ...writeInfo,
            content:content,
            files:writeInfo.attachFiles.map((item) => (item.originFileObj)),
            boardEnName:router.query.boardName
        }
        dispatch(addBoardContent(data));
    }

    if(board.board == null){
        return null;
    }

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );


    return (
        <>
            <section className={cx("container","board_container")}>
                <h1 className={cx("top_title")}>글 쓰기</h1>
                <div className={cx("adm_container")}>
                    <div className={`${cx("member_info","box")} clfx `}>
                        <ul className={"clfx"}>
                            <li>
                                <span className={cx("title","icon_1")}>{board.board.boardKrName}</span>
                            </li>
                        </ul>
                    </div>

                    <p className={cx("txt_style_1")}>
                        {/*회원자료 삭제 시 다른 회원이 기존 회원아이디를 사용하지 못하도록 회원아이디, 이름, 닉네임은 삭제하지 않고 영구*/}
                        {/*보관합니다.*/}
                    </p>

                    <div className={cx("admin_cont")}>
                        <Form form={form} onFinish={(e) =>{submitApply(e)}}
                        >
                            <h2 className={cx("title_style_1")}><span>작성</span></h2>
                            <div className={cx("tb_style_1","edit_form","content")}>
                                <table>
                                    <colgroup>
                                        <col style={{width:"30%"}}/>
                                        <col/>
                                    </colgroup>
                                    <thead>
                                    </thead>
                                    <tbody>
                                    {board.board.categoryId != null && (
                                        <tr>
                                            <td>분류</td>
                                            <td>
                                                <select name='categoryCodeId' className={cx("cate")} onChange={changeWriteInfo} value={writeInfo.categoryCodeId}>
                                                    {board.categoryCode.map((item) => {
                                                        if(board.board.categoryId == item.categoryId){
                                                            return <option key={item.categoryCodeId} value={item.categoryCodeId}>{item.categoryCodeName}</option>
                                                        }
                                                    })}}
                                                </select>

                                            </td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td>공지</td>
                                        <td>
                                            <Checkbox checked={writeInfo.isNotice} onChange={(e) =>{setWriteInfo({...writeInfo,isNotice: e.target.checked})}}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>제목</td>
                                        <td>
                                            <input type="text" placeholder={"제목을 입력하세요."} name="title" value={writeInfo.title} onChange={changeWriteInfo}/>
                                        </td>
                                    </tr>
                                    {board.board.subName01 != "" && board.board.subName01 != null &&(
                                        <tr>
                                            <td>{board.board.subName01}</td>
                                            <td>
                                                <input type="text" placeholder={""} name="sub01" value={writeInfo.sub01 == null ? "" : writeInfo.sub01} onChange={changeWriteInfo}/>
                                            </td>
                                        </tr>
                                    )}
                                    {board.board.subName02 != "" && board.board.subName02 != null &&(
                                        <tr>
                                            <td>{board.board.subName02}</td>
                                            <td>
                                                <input type="text" placeholder={""} name="sub02" value={writeInfo.sub02 == null ? "" : writeInfo.sub02} onChange={changeWriteInfo}/>
                                            </td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td>내용</td>
                                        <td>
                                            <QuillEditor Contents={content} QuillChange={setContent}/>
                                        </td>
                                    </tr>
                                    {board.board.useFile && (
                                        <tr>
                                            <th scope="row">첨부파일</th>
                                            <td>
                                                <Upload
                                                    listType="picture-card"
                                                    fileList={writeInfo.attachFiles}
                                                    onPreview={handlePreview}
                                                    onChange={changeFileList}
                                                    // previewFile={(e)=>{console.log(e)}}
                                                >
                                                    {writeInfo.attachFiles.length >= 8 ? null : uploadButton}
                                                </Upload>
                                                <span className={cx("title")}>첨부파일 (10MB 미만)</span>
                                            </td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                                <div className={cx("btn-box01")}>
                                    <button className={cx("basic-btn01")}>저장</button>
                                    <button type="button" className={cx("basic-btn02","btn-gray-bd")} onClick={router.back}>취소</button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </section>

        </>

    );
};

export default Write;
