import React, {useCallback, useEffect, useState} from 'react';
import Link from 'next/link'

import styles from '../../../public/assets/styles/board/board.module.css';
import classnames from "classnames/bind"
import {Button, Form, Input, Select} from "antd";
import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import {addBoardContent, getBoard, getBoardContentList, getBoardInfoAll, initialize} from "../../../store/board/board";
import {useDispatch, useSelector} from "react-redux";
// import Modal from "../../../component/common/Modal";
import { Upload,Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import AuthFail from "../../user/auth_fail";
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment';


const Editor = dynamic(() => import("../../../component/common/Editor"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
});
const { Option } = Select;

const cx = classnames.bind(styles);

export async function getStaticPaths() {
    return {
        paths: [
            { params: { boardName: 'idea' } },
            { params: { boardName: 'data_room' } },
            { params: { boardName: 'notice' } },
            { params: { boardName: 'notice_en' } },
            { params: { boardName: 'startup_info' } },
            { params: { boardName: 'startup_news' } },
            { params: { boardName: 'people' } },
            { params: { boardName: 'online_content' } },
        ],
        fallback: true
    };
}

export async function getStaticProps(context) {
    return {
        props: { boardName: context.params.boardName },
    };
}

const Write = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const [writeInfo, setWriteInfo] = useState({
        title: "",
        attachFiles:[],
        categoryCodeId:"",
    })
    const [content,setContent] = useState("");
    const [editor,setEditor] = useState(null);
    const [fileList,setFileList] = useState([]);
    const [addResultModal, setAddResultModal] = useState(false)

    const {board,add,user} = useSelector(({board,auth,loading})=> ({
        board:board.board,
        add:board.add,
        user:auth.user,
    }))


    useEffect(() => {
        dispatch(getBoard(router.query.boardName))
        return () => {
            dispatch(initialize());
        };
    }, []);


    useEffect(() => {
        form.setFieldsValue({
            categoryCodeId:""
        })
    }, [board]);

    const changeWriteInfo = useCallback((e) =>{
        const {name, value} = e.target

        setWriteInfo(writeInfo =>({
            ...writeInfo,
            [name]: value,

        }))
    },[])

    const changeCategory = useCallback((value) =>{
        setWriteInfo(writeInfo =>({
            ...writeInfo,
            categoryCodeId: value,
        }))
    },[])


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

    // useEffect(() =>{
    //
    //     if(add.result && add.error == null){
    //         setAddResultModal(true);
    //     }
    // },[add])


    useEffect(() =>{

        if(add.result && add.error == null){
            Modal.success({
                title:"글쓰기 완료",
                onOk:() =>{router.back();}
            });
        }
    },[add])



    const submitApply = (e) => {
        const data = {
            ...writeInfo,
            content:editor.getData(),
            files:writeInfo.attachFiles.map((item) => (item.originFileObj)),
            boardEnName:router.query.boardName,
            regDate: moment().format("YYYY-MM-DD HH:mm").toString()
        }

        dispatch(addBoardContent(data));
    }

    if(board.board == null){
        return null;
    }

    const uploadButton = (
        <Button style={{marginTop:7}} className={"upload"} icon={<UploadOutlined />}>업로드</Button>
    );


    return (
        <>
        {board.board != null && board.board.writeRole != null && board.board.writeRole.indexOf(user.role) < 0 && user.role != 'ROLE_ADMIN' ? <AuthFail/> : (
            <section className={cx("sub_container")}>
                <Form form={form} onFinish={(e) =>{submitApply(e)}}>
                    <h1 className={cx("sub_top_title")}>{board.board.boardKrName}</h1>
                    <p className={cx("sub_top_txt")}>{board.board.boardDesc != null  ? board.board.boardDesc : ""}</p>
                    <div className={cx("bbs_write")}>
                        <table>
                            <colgroup>
                                <col style={{width:"18%"}}/>
                                <col/>
                            </colgroup>
                            <tbody>
                            {board.cate != null &&  board.cate.length > 0 && (
                                <tr>
                                    <th scope="row">분류</th>
                                    <td>
                                        <Form.Item
                                            name="categoryCodeId"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '카테고리',
                                                },
                                            ]}
                                        >
                                            <Select size='large' className={cx("cate")} onChange={changeCategory} >
                                                <Option value="">선택</Option>
                                                {board.cate.map((item) => {
                                                    return <Option key={item.categoryCodeId} value={item.categoryCodeId}>{item.categoryCodeName}</Option>
                                                })}
                                            </Select>
                                        </Form.Item>
                                    </td>
                                </tr>
                            )}
                            <tr>
                                <th scope="row">제목</th>
                                <td>
                                    <Form.Item
                                        name="title"
                                        rules={[
                                            {
                                                required: true,
                                                message: '제목을 입력하세요.',
                                            },
                                        ]}
                                    >
                                        <Input placeholder={"제목을 입력하세요."} name="title" value={writeInfo.title}
                                               onChange={changeWriteInfo}/>
                                    </Form.Item>
                                    {/*<input type="text" placeholder="제목을 입력하세요."/>*/}
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">내용</th>
                                <td>
                                    <Editor setEditor={setEditor}/>
                                </td>
                            </tr>
                            {board.board.useFile && (
                                <tr>
                                    <th scope="row">첨부파일</th>
                                    <td>
                                        <Upload
                                            listType="picture"
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

                        <div className={"txt_c"}>
                            <button type="submit" className={cx("basic-btn02","btn-blue-bd")}>저장</button>
                            <button type="button" className={cx("basic-btn02","btn-gray-bd")} onClick={router.back}>취소</button>
                        </div>
                    </div>
                </Form>
                {/*<Modal visible={addResultModal} closable={true} maskClosable={true} onClose={() => {setAddResultModal(false);router.back();}} cx={cx} className={"add_result_popup"}>*/}
                {/*    <h1 className={cx("popup_title")}>글쓰기 완료</h1>*/}
                {/*</Modal>*/}
            </section>

        )}
            {/*if(board.board != null && board.board.writeRole != null && board.board.writeRole.indexOf(user.role) < 0){*/}
            {/*     return <AuthFail/>*/}
            {/*}*/}


        </>
    );
};

export default Write;
