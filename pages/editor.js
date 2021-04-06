import React from 'react';
import dynamic from "next/dynamic";



const Editor = dynamic(() => import("../component/common/Editor"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
});
const EditorPage = () => {
    return (
        <div>
            <Editor/>
        </div>
    );
};

export default EditorPage;
