import React, {useEffect, useRef, useState} from 'react';
import {Button, Modal} from "antd";
import Draggable from 'react-draggable'; // The default
import Cookies from 'universal-cookie';
import {useRouter} from "next/router";
import {url} from "../../lib/api/client";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";




const PopupItem = ({popup,cx}) => {

    const router = useRouter();
    const [pass, setPass] = useState(true)
    const [showModal, setShowModal] = useState(true);
    const [bounds, setBounds] = useState({left: 0, top: 0, bottom: 0, right: 0});
    const [disabled, setDisabled] = useState(true);

    const dragRef = useRef();
    const cookies = new Cookies();

    useEffect(() =>{
        cookies.get(`popup-${popup.popupId}`) == undefined ? setPass(false) : setPass(true)
        if(!popup.isMobile && isMobile){
            setPass(true)
        }
    },[])

    useEffect(() =>{

    },[pass])

    const setAfterTime = () =>{
        const expires = new Date()
        expires.setHours(expires.getHours()+popup.afterTime)

        cookies.set(`popup-${popup.popupId}`, '1',
            {
            // path: '/',
            expires,
            // maxAge: expires.getSeconds(),
            // domain: url,
            // secure: true,
            // httpOnly: true
        })
        setShowModal(false)
    }


    const onStart = (event, uiData) => {
        const {clientWidth, clientHeight} = window?.document?.documentElement;
        const targetRect = dragRef?.current?.getBoundingClientRect();
        setBounds({
            left: -targetRect?.left + uiData?.x,
            right: clientWidth - (targetRect?.right - uiData?.x),
            top: -targetRect?.top + uiData?.y,
            bottom: clientHeight - (targetRect?.bottom - uiData?.y),
        });
    };


    // const trackPos = (data) => {
    //     setPosition({ x: data.x, y: data.y });
    // };
    return (
        <>
            {showModal && !pass && (
                <Draggable
                    defaultClassName={cx("drag")}
                    disabled={disabled}
                    bounds={bounds}
                    onStart={(event, uiData) => onStart(event, uiData)}>
                    <div className={cx("popup_content")} ref={dragRef} onMouseOver={() => {setDisabled(false)}}
                         onMouseOut={() => {
                             setDisabled(true)
                         }}
                         onFocus={() => {
                         }}
                         onBlur={() => {
                         }}
                         style={{
                             cursor: 'move',
                             position: 'absolute',
                             zIndex:3,
                             left:isMobile ? 0 : popup.leftPosition,
                             top:popup.topPosition,
                         }}
                    >
                        <div style={{width: popup.width, height: popup.height}}>
                            <div dangerouslySetInnerHTML={{__html: popup.content}}/>
                        </div>

                        <div className={cx("popup_footer")}>
                            <button className={cx("popup_footer_btn")} onClick={() =>{setAfterTime()}}>
                                {popup.afterTime} 시간 동안 보지않기
                            </button>
                            <button className={cx("popup_footer_btn")} onClick={() =>{setShowModal(false)}}>
                                닫기
                            </button>
                        </div>
                    </div>
                </Draggable>
            )}




                {/*<Modal*/}
                {/*    title={*/}
                {/*    <div*/}
                {/*        style={{*/}
                {/*            width: '100%',*/}
                {/*            cursor: 'move',*/}
                {/*            position: 'absolute',*/}
                {/*            height: '100%',*/}
                {/*            padding:0*/}
                {/*        }}*/}
                {/*        onMouseOver={() => {*/}
                {/*            if (disabled) {*/}
                {/*                setDisabled(false)*/}
                {/*            }*/}
                {/*        }}*/}
                {/*        onMouseOut={() => {*/}
                {/*            setDisabled(true)*/}
                {/*        }}*/}
                {/*        onFocus={() => {*/}
                {/*        }}*/}
                {/*        onBlur={() => {*/}
                {/*        }}*/}
                {/*    >*/}
                {/*    </div>*/}
                {/*}*/}
                {/*       visible={showModal}*/}
                {/*       onCancel={() => {*/}
                {/*           setShowModal(false)*/}
                {/*       }}*/}
                {/*       mask={false}*/}
                {/*       width={200}*/}

                {/*       bodyStyle={{width: 200, height: 200, padding: 0}}*/}
                {/*       footer={[*/}
                {/*           <Button key="back" onClick={() => {*/}
                {/*               setShowModal(false)*/}
                {/*           }}>*/}
                {/*               확인*/}
                {/*           </Button>,*/}
                {/*       ]}*/}
                {/*       maskClosable={false}*/}
                {/*       closable={false}*/}
                {/*       modalRender={modal => (*/}
                {/*           <Draggable*/}
                {/*               disabled={disabled}*/}
                {/*               bounds={bounds}*/}
                {/*               onStart={(event, uiData) => onStart(event, uiData)}>*/}
                {/*               <div ref={dragRef}>{modal}</div>*/}
                {/*           </Draggable>*/}
                {/*       )}*/}
                {/*>*/}
                {/*    <div style={{width: 200, height: 200}}>*/}
                {/*        <div dangerouslySetInnerHTML={{__html: popup.content}}/>*/}
                {/*    </div>*/}
                {/*</Modal>*/}
        </>
    )
        ;
};

export default PopupItem;
