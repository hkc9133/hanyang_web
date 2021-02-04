import React,{useRef,useEffect} from 'react';
import axios from 'axios'
import 'react-quill/dist/quill.snow.css';
import {url,port,serverAddr} from '../../lib/api/client';


const QuillEditor = ({Contents}) => {

    let Quill = typeof window === "object" ? require("quill") : () => false;

    const quillElement = useRef(); // quill을 넣을 div
    const quillInstance = useRef(); // quill 인스턴스





    useEffect(() => {
        if (quillElement.current) {
            quillInstance.current = new Quill(quillElement.current, {
                theme: "snow",
                placeholder: "내용을 입력해주세요",
            });

            // 퀼 인스턴스를 편하게 쓰기 위해 변수 설정
            const quill = quillInstance.current;

        }

        return () =>{
            // quillInstance.current.destroy();
        }
    }, []);

    const mounted = useRef(false);
    useEffect(() => {
        if (Contents === "" || mounted.current) return;
        mounted.current = true;
        quillInstance.current.root.innerHTML = Contents;
    }, [Contents]);


    return (
        <div>
            <div ref={quillElement}></div>
        </div>
    );
};

export default QuillEditor;
