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
            <meta name="keywords" content="SEO,검색엔진 최적화,메타 태그"></meta>
            <Editor content={content} handleContent={handleContent}/>
        </>
    );
};

export default Board;
