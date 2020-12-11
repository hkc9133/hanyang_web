import React,{useState,useEffect} from 'react';
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../../component/common/Editor"), {
    ssr: false
});

const Board = () => {
    const [content,setContent] = useState("");

    useEffect(()=> {
        console.log(content)
    },[content])

    const handleContent = (value) => {
        setContent(value);
    }
    return (
        <>
            <Editor content={content} handleContent={handleContent}/>
        </>
    );
};

export default Board;
