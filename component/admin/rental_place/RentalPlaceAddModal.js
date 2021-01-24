import React, {useState} from 'react';

import {Input, Tag, Button, Select, Form, Checkbox} from 'antd';
import Modal from "../../common/Modal";
import CareerBox from "../../stratup_counsel/mentor_apply/CareerBox";
import RentalRoomTagBox from "./add/RentalRoomTagBox";

const {CheckableTag} = Tag;

const RentalPlaceAddModal = ({cx, showPlaceAddModal, setShowPlaceAddModal}) => {
    const [placeInfo, setPlaceInfo] = useState({
        rentalPlaceName: "",
        rentalRoomList: []
    });

    const closeModal = () =>{
        setPlaceInfo({
            rentalPlaceName:'',
            rentalRoomList: []
        })
        setShowPlaceAddModal(false)
    }
    return (
        <>
            <Modal visible={showPlaceAddModal} closable={true} maskClosable={true} onClose={() => {
                setShowPlaceAddModal(false);
            }}>
                <div className={cx("popup_title")}>공간추가</div>
                <div className={cx("tb_style_1")}>
                    <table>
                        <thead></thead>
                        <tbody>
                        <tr>
                            <th scope="row">공간 이름</th>
                            <td><input className={cx("place_input")} type="text" value={placeInfo.rentalPlaceName} onChange={(e) => {
                                setPlaceInfo({...placeInfo, rentalPlaceName: e.target.value})
                            }}/></td>
                        </tr>
                        <tr>
                            <th scope="row">장소</th>
                            <td>
                                <RentalRoomTagBox placeInfo={placeInfo} setPlaceInfo={setPlaceInfo} cx={cx}/>
                            </td>

                        </tr>
                        </tbody>
                    </table>
                    <div className={cx("btn-box02")}>
                        <button className={cx("basic-btn01")}>저장</button>
                        <button type="button" className={cx("basic-btn02","btn-gray-bd")} onClick={closeModal}>취소</button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default RentalPlaceAddModal;
