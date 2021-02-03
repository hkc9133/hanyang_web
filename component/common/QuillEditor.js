import React, {useRef, useEffect, useState, useCallback} from 'react';
import axios from 'axios'
import 'react-quill/dist/quill.snow.css';
import {url,port,serverAddr} from '../../lib/api/client';
import styles from '../../public/assets/styles/quill.module.css';
import classnames from "classnames/bind"
const cx = classnames.bind(styles);

const QuillEditor = ({QuillChange,Contents}) => {

    const [showHtml, setShowHtml] = useState(false);
    let Quill = typeof window === "object" ? require("quill") : () => false;

    const quillElement = useRef(); // quill을 넣을 div
    const quillInstance = useRef(); // quill 인스턴스

    const fontSizeArr = ['8px','9px','10px','12px','14px','16px','20px','24px','32px','42px','54px','68px','84px','98px'];

    const BackgroundStyle = Quill.import('attributors/style/background');
    const ColorStyle = Quill.import('attributors/style/color');
    const SizeStyle = Quill.import('attributors/style/size');
    SizeStyle.whitelist = fontSizeArr;
    Quill.register(BackgroundStyle, true);
    Quill.register(ColorStyle, true);
    Quill.register(SizeStyle, true);
    const formats = [
        'header', 'font', 'size','color','background',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet','align', 'indent',
        'link', 'image', 'video','showHtml'
    ]

    const modules = {
        toolbar: {
            container: [
                [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                [{size: fontSizeArr}],
                [{color: []}],
                [{background: []}],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'},
                    {'indent': '-1'}, {'indent': '+1'}],
                [{align:[]}],
                ['link', 'image', 'video','showHtml'],
            ],
            handlers: {
                showHtml: function(value) {
                    if (quillInstance.current.txtArea.style.display === "") {
                        const html = quillInstance.current.txtArea.value;
                        if (html === '<p><br/></p>') {
                            quillInstance.current.html = null;
                        } else {
                            quillInstance.current.html = html.replace(new RegExp('<p><br/>', 'g'), '<p>')
                        }
                        quillInstance.current.pasteHTML(html);
                    }
                    quillInstance.current.txtArea.style.display =
                        quillInstance.current.txtArea.style.display === "none" ? "" : "none";
                }
            }
        },
    }




    useEffect(() => {
        if (quillElement.current) {
            quillInstance.current = new Quill(quillElement.current, {
                theme: "snow",
                placeholder: "내용을 입력해주세요",
                modules: modules,
                formats: formats,
            });

            // 퀼 인스턴스를 편하게 쓰기 위해 변수 설정
            const quill = quillInstance.current;

            // 텍스트를 쳤을 때 state에 담기
            quill.on("text-change", (delta, oldDelta, source) => {
                QuillChange(quill.root.innerHTML);
            });

            // 이미지 핸들링을 위한 커스텀 핸들러
            const toolbar = quill.getModule("toolbar");
            // toolbar.addHandler("showHtml", onClickShowHtmlBtn);
            toolbar.addHandler("image", onClickImageBtn);


            if (Quill.prototype.pasteHTML == undefined)
                Quill.prototype.pasteHTML = function(html) {
                    {
                        this.container.firstChild.innerHTML = html;
                    }
                }

            quill.txtArea = document.createElement("textarea");
            quill.txtArea.style.cssText =
                "width: 100%;margin: 0px;background: white;box-sizing: border-box;color: black;font-size: 15px;outline: none;padding: 20px;line-height: 24px;position: absolute;top: 0;bottom: 0;border: none;display:none;resize: none;";

            var htmlEditor = quill.addContainer("ql-custom");
            htmlEditor.appendChild(quill.txtArea);

            quill.on("text-change", (delta, oldDelta, source) => {
                var html = quillInstance.current.root.innerHTML;
                quill.txtArea.value = html;
            });

            quill.txtArea.value = quillInstance.current.root.innerHTML;

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


    const onClickShowHtmlBtn = useCallback((e) => {
        setShowHtml(showHtml =>(
            !showHtml
        ))
        quillInstance.current.root.innerHTML = Contents;

    }, [showHtml,Contents])

    const onClickImageBtn = () => {
        const input = document.createElement("input");

        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async () => {
            const file = input.files[0];
            const formData = new FormData();

            formData.append("upload", file);

            // Save current cursor state
            // Range {index: 48, length: 0} 꼴
            const range = quillInstance.current.getSelection(true);

            axios.post(`${url}:${port}/api/board/content/img`, formData).then((res) => {
                if (res.data.url) {
                    quillInstance.current.insertEmbed(
                        range.index,
                        "image",
                        res.data.url
                    );

                    // Move cursor to right side of image (easier to continue typing)
                    quillInstance.current.setSelection(range.index + 1);
                }else{
                    alert("에러")
                }
            });
        };
    };

    return (
        <>
        <div>
            <div className={cx({hidden:showHtml})} ref={quillElement}></div>
            <textarea className={cx("html_view",{hidden:!showHtml})} value={Contents} onChange={(e) =>{QuillChange(e.target.value)}}/>
        </div>
        </>
    );
};

export default QuillEditor;
