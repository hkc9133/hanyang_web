import React from 'react';

import css from './temp.module.css';



const TempPopup = ({onClose}) => {
    return (
        <div className={css.temp_popup}>

            <div className={css.wrap}>

                <div className={css.img_wrap}>
                    <img src="/assets/image/popup/popup1.jpg" alt="popup_head"/>
                    <img src="/assets/image/popup/popup2.png" alt="popup_top" onClick={onClose} style={{cursor: "pointer"}}/>

                    <a href="https://startup-gse.hanyang.ac.kr" target="_blank" onClick={onClose}>
                        <img src="/assets/image/popup/popup3.png" alt="popup_top" style={{cursor: "pointer"}}/>
                    </a>

                    <a href="https://startup.hanyang.ac.kr/board/notice/view/3501" target="_blank">
                        <img src="/assets/image/popup/popup4.jpg" alt="popup_top"/>
                    </a>
                </div>

                <div>
                    <button className={css.btn_close}
                            onClick={onClose}
                    ></button>
                </div>
            </div>


        </div>
    );
};

export default TempPopup;