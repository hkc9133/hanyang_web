
import {useEffect} from "react";
import {port, url} from "../../lib/api/client";

const Editor = ({setEditor,content}) => {



    function MyCustomUploadAdapterPlugin(editor) {
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return new MyUploadAdapter(loader)
        }
    }


    useEffect(() => {
        console.log(window.editor)
        if(window.editor != null){
            window.DecoupledDocumentEditor
                .create(document.querySelector('#editor'), {
                    fontSize: {
                        options: [
                            10,
                            12,
                            14,
                            16,
                            18,
                            20,
                            24,
                            28,
                        ]
                    },
                    toolbarLocation: 'bottom',
                    toolbar: {
                        shouldNotGroupWhenFull: true,
                        items: [
                            'heading',
                            '|',
                            'fontSize',
                            'fontFamily',
                            '|',
                            'fontColor',
                            'fontBackgroundColor',
                            '|',
                            'bold',
                            'italic',
                            'underline',
                            'strikethrough',
                            '|',
                            'alignment',
                            '|',
                            'numberedList',
                            'bulletedList',
                            '|',
                            'outdent',
                            'indent',
                            '|',
                            'todoList',
                            'link',
                            'blockQuote',
                            'imageUpload',
                            'insertTable',
                            'mediaEmbed',
                            '|',
                            'undo',
                            'redo'
                        ]
                    },
                    mediaEmbed: {previewsInData: true},
                    language: 'ko',
                    image: {
                        styles: [
                            'alignLeft', 'alignCenter', 'alignRight'
                        ],
                        toolbar: [
                            'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
                            '|',
                            'resizeImage',
                            '|',
                            'imageTextAlternative'
                        ]
                    },
                    table: {
                        contentToolbar: [
                            'tableColumn',
                            'tableRow',
                            'mergeTableCells',
                            'tableCellProperties',
                            'tableProperties'
                        ]
                    },
                    licenseKey: '',
                    extraPlugins: [MyCustomUploadAdapterPlugin],
                })
                .then(newEditor => {
                    const toolbarContainer = document.querySelector('#toolbar-container');
                    console.log(toolbarContainer)
                    //
                    if(toolbarContainer != null){
                        toolbarContainer.appendChild(newEditor.ui.view.toolbar.element);
                    }
                    console.log(content)
                    if(content != null){
                        newEditor.setData(content)
                    }
                    setEditor(newEditor)
                    window.editor = newEditor;
                })
                .catch(error => {
                    console.error(error);
                });
        }else{
            window.editor.setData(content)
        }

        return () =>{
            // console.log(document.querySelector('#editor'))
            // document.querySelector('#editor').remove();
            // delete window.editor;
        }


    }, [])

    useEffect(() =>{

    },[content])



    return (
        <div id="editor_box">
            <div id="toolbar-container"></div>
            <div id="editor">

            </div>
        </div>
    );
};

export default Editor;




class MyUploadAdapter {
    constructor(props) {
        // CKEditor 5's FileLoader instance.
        this.loader = props;
        // URL where to send files.
        this.url = `${url}:${port}/api/board/content/img`;
    }

    // Starts the upload process.
    upload() {
        return new Promise((resolve, reject) => {
            this._initRequest();
            this._initListeners(resolve, reject);
            this._sendRequest();
        });
    }

    // Aborts the upload process.
    abort() {
        if (this.xhr) {
            this.xhr.abort();
        }
    }

    // Example implementation using XMLHttpRequest.
    _initRequest() {
        const xhr = this.xhr = new XMLHttpRequest();

        xhr.open('POST', this.url, true);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
        // xhr.setRequestHeader('Authorization', getToken())
    }

    // Initializes XMLHttpRequest listeners.
    _initListeners(resolve, reject) {
        const xhr = this.xhr;
        const loader = this.loader;
        const genericErrorText = 'Couldn\'t upload file:' + ` ${loader.file.name}.`;

        xhr.addEventListener('error', () => reject(genericErrorText));
        xhr.addEventListener('abort', () => reject());
        xhr.addEventListener('load', () => {
            const response = xhr.response;
            if (!response || response.error) {
                return reject(response && response.error ? response.error.message : genericErrorText);
            }

            // If the upload is successful, resolve the upload promise with an object containing
            // at least the "default" URL, pointing to the image on the server.
            resolve({
                default: response.url
            });
        });

        if (xhr.upload) {
            xhr.upload.addEventListener('progress', evt => {
                if (evt.lengthComputable) {
                    loader.uploadTotal = evt.total;
                    loader.uploaded = evt.loaded;
                }
            });
        }
    }

    // Prepares the data and sends the request.
    _sendRequest() {
        const data = new FormData();

        this.loader.file.then(result => {
                data.append('upload', result);
                this.xhr.send(data);
            }
        )
    }

    /**
     * Returns converter for links that wraps <img> or <figure> elements.
     *
     * @returns {Function}
     */

}
