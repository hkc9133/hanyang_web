import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {Form, Upload,TimePicker} from "antd";
const { RangePicker } = TimePicker;
import {fileDownload} from "../../../../../../store/file/file";
import {PlusOutlined} from "@ant-design/icons";
import {getUUID} from "../../../../../../component/common/util/RandomVal";
import {addRoom, initialize, updateRoom} from "../../../../../../store/spaceRental/adminSpaceRental";
import moment from "moment";
import locale from "antd/lib/date-picker/locale/ko_KR";
import Modal from "../../../../../../component/common/Modal";

import styles from '../../../../../../public/assets/styles/admin/rental/rental.module.css';
import classnames from "classnames/bind"
const cx = classnames.bind(styles);


const RoomAdd = () => {

    const dispatch = useDispatch();
    const router = useRouter();
    const [form] = Form.useForm();

    const {add} = useSelector(({adminSpaceRental, loading}) => ({
        add:adminSpaceRental.addRoom,
    }))

    const [roomInfo, setRoomInfo] = useState({
        placeId:router.query.placeId,
        rentalRole: "",
        roomName:"",
        roomDesc:"",
        capacity:0,
        possibleDay:"",
        addRentalRoomTimeList:[],
        addAttachFileList:[],
    });
    const [newRentalTime, setNewRentalTime] = useState({
        timeId:null,
        startTime:moment("00:00","HH:mm").format("HH:mm"),
        endTime:moment("01:00","HH:mm").format("HH:mm"),
    });
    const [showResultModal,setShowResultModal] = useState(false);

    useEffect(() =>{
        console.log(roomInfo)
    },[roomInfo])

    useEffect(() =>{
        return () =>{
            dispatch(initialize())
        }
    },[])

    const changeRoomInfo = (e) =>{
        const {name, value} = e.target
        const regEx = new RegExp(value, "gi");

        if(name == "isActive" || name == 'isHoliday'){
            setRoomInfo({
                ...roomInfo,
                [name]:e.target.checked,
            })
        }else if(name.includes("possibleDay")){
            setRoomInfo({
                ...roomInfo,
                possibleDay: roomInfo.possibleDay.includes(value) ? roomInfo.possibleDay.replace(regEx, '') : roomInfo.possibleDay+value
            })
        }else if(name.includes("rentalRole")){
            const regEx = new RegExp(value, "gi");

            setRoomInfo({
                ...roomInfo,
                rentalRole: roomInfo.rentalRole.includes(value) ? roomInfo.rentalRole.replace(regEx, '') : roomInfo.rentalRole+value
            })

        }else{
            setRoomInfo({
                ...roomInfo,
                [name]:value
            })
        }
    }

    const changeNewFileList = ({fileList}) =>{
        setRoomInfo({...roomInfo,addAttachFileList:fileList})
    }

    const handlePreview = useCallback((file) =>{
        const fileURL = URL.createObjectURL(file.originFileObj);
        window.open(fileURL);
    },[roomInfo])

    const handleFileDownload = useCallback(({fileId}) => {
        if (fileId != undefined) {
            dispatch(fileDownload(fileId))
        }
    }, [])

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    const changeRentalRoomTime = (newTime,value) =>{
        setRoomInfo({
            ...roomInfo,
            rentalRoomTimeList:roomInfo.rentalRoomTimeList.map((time) =>
                newTime.timeId == time.timeId ? {...time,startTime:value[0].format("HH:mm").toString(),endTime:value[1].format("HH:mm").toString()} : time
            )

        })

    }
    const changeNewRentalRoomTime = (newTime,value) =>{
        setRoomInfo({
            ...roomInfo,
            addRentalRoomTimeList:roomInfo.addRentalRoomTimeList.map((time) =>
                newTime.timeId == time.timeId ? {...time,startTime:value[0].format("HH:mm").toString(),endTime:value[1].format("HH:mm").toString()} : time
            )
        })
    }

    const changeNewRentalTimeInput = (value) =>{
        setNewRentalTime({
            ...newRentalTime,
            startTime: value[0] != null ? value[0].format("HH:mm").toString() : null,
            endTime: value[1] != null ? value[1].format("HH:mm").toString() : null,
        })

    }

    const addNewRentalRoomTime = () =>{
        if(newRentalTime.startTime == null || newRentalTime.endTime == null){
            return
        }
        setRoomInfo({
            ...roomInfo,
            addRentalRoomTimeList: roomInfo.addRentalRoomTimeList.concat({...newRentalTime,timeId:getUUID()})
        })

        setNewRentalTime({
            ...newRentalTime,
            timeId:null,
            startTime:moment("00:00","HH:mm").format("HH:mm"),
            endTime:moment("00:00","HH:mm").format("HH:mm"),
        })
    }

    const removeNewRoomTime = (removeTime) =>{
        setRoomInfo({
            ...roomInfo,
            addRentalRoomTimeList: roomInfo.addRentalRoomTimeList.filter((time) =>
                removeTime.timeId != time.timeId
            ),
        })
    }

    const submit = () =>{

        const data = {
            ...roomInfo,
            addAttachFileList:roomInfo.addAttachFileList.map((item) => (item.originFileObj)),
            addRentalRoomTimeList:roomInfo.addRentalRoomTimeList.concat(null)

        }

        data.addRentalRoomTimeList <= 0 ? delete data.addRentalRoomTimeList : data.addRentalRoomTimeList
        data.addAttachFileList <= 0 ? delete data.addAttachFileList : data.addAttachFileList

        dispatch(addRoom(data));
    }

    useEffect(() =>{
        if(add.result && add.error == null){
            setShowResultModal(true)
        }

    },[add])

    return (
        <>
            {roomInfo != null && (
                <section className={cx("container")}>
                    <h1 className={cx("top_title")}>이용정보관리</h1>
                    <Form form={form}
                          onFinish={submit}
                          // initialValues={{
                          //     roomName: room.roomName,
                          //     roomDesc: room.roomDesc,
                          //     capacity: room.capacity,
                          //     rentalRole01:room.rentalRole !=  null && room.rentalRole.includes("ROLE_ADMIN"),
                          //     rentalRole02:room.rentalRole !=  null && room.rentalRole.includes("ROLE_MT"),
                          //     rentalRole03:room.rentalRole !=  null && room.rentalRole.includes("ROLE_SD"),
                          //     rentalRole04:room.rentalRole !=  null && room.rentalRole.includes("ROLE_TC"),
                          // }}
                    >
                        <div className={cx("adm_container")}>
                            <div className={cx("box")}>
                                <div className={cx("mentor_detail")}>
                                    <h2>이용상세정보</h2>
                                    <div className={cx("tb_style_2")}>
                                        <table>
                                            <colgroup>
                                                <col style={{width:240}}/>
                                                <col />
                                            </colgroup>
                                            <tbody>
                                            <tr>
                                                <th scope="row">장소명</th>
                                                <td>
                                                    <Form.Item
                                                        name="roomName"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: '이름은 필수입니다',
                                                            },
                                                        ]}
                                                    >
                                                        <input type="text" placeholder="장소 이름" name="roomName" value={roomInfo.roomName} onChange={changeRoomInfo}/>
                                                    </Form.Item>
                                                </td>

                                            </tr>
                                            <tr>
                                                <th scope="row">간단설명</th>
                                                <td>
                                                    <Form.Item
                                                        name="roomDesc"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: false,
                                                                // message: '이름은 필수입니다',
                                                            },
                                                        ]}
                                                    >
                                                        <input type="text" className={cx("w_100p")}
                                                               placeholder="창업지원단에 소속되어 있는 기업들만 사용가능합니다."
                                                               name="roomDesc"
                                                               value={roomInfo.roomDesc} onChange={changeRoomInfo}
                                                        />
                                                    </Form.Item>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">수용인원</th>
                                                <td>
                                                    <Form.Item
                                                        name="capacity"
                                                        className={(cx("antd_input"))}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: '수용 인원을 입력해주세요',
                                                            },
                                                        ]}
                                                    >
                                                        <input type="number" name="capacity"  value={roomInfo.capacity} onChange={changeRoomInfo}/>
                                                    </Form.Item>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">예약가능권한</th>
                                                <td>
                                                    <label htmlFor="role01">관리자</label>
                                                    <input id="role01" name="rentalRole01" checked={roomInfo.rentalRole.includes("ROLE_ADMIN;")} type='checkbox' value={"ROLE_ADMIN;"} onChange={changeRoomInfo}/>
                                                    <label htmlFor="role02">멘토</label>
                                                    <input id="role02" name="rentalRole02" checked={roomInfo.rentalRole.includes("ROLE_MT;")} type='checkbox' value={"ROLE_MT;"} onChange={changeRoomInfo}/>
                                                    <label htmlFor="role03">학생</label>
                                                    <input id="role03" name="rentalRole03" checked={roomInfo.rentalRole.includes("ROLE_SD;")} type='checkbox' value={"ROLE_SD;"} onChange={changeRoomInfo}/>
                                                    <label htmlFor="role04">교사</label>
                                                    <input id="role04" name="rentalRole04" checked={roomInfo.rentalRole.includes("ROLE_TC;")} type='checkbox' value={"ROLE_TC;"} onChange={changeRoomInfo}/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">공유일예약허용</th>
                                                <td>
                                                    <input id="isHoliday" type="checkbox" name="isHoliday"  checked={roomInfo.isHoliday} onChange={changeRoomInfo}/>
                                                    <label htmlFor={"isHoliday"}>체크하시면 공휴일에도 예약이 가능합니다.</label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">예약가능요일</th>
                                                <td>
                                                    <p className={cx("day_info")}>※ 아래 체크된 요일에만 예약이 가능하게 됩니다.</p>
                                                    <input type="checkbox" id="day01" name="possibleDay01" value={"0;"} checked={roomInfo.possibleDay.includes("0;")} onChange={changeRoomInfo} /><label htmlFor="day01">일</label>
                                                    <input type="checkbox" id="day02" name="possibleDay02" value={"1;"} checked={roomInfo.possibleDay.includes("1;")} onChange={changeRoomInfo} /><label htmlFor="day02">월</label>
                                                    <input type="checkbox" id="day03" name="possibleDay03" value={"2;"} checked={roomInfo.possibleDay.includes("2;")} onChange={changeRoomInfo} /><label htmlFor="day03">화</label>
                                                    <input type="checkbox" id="day04" name="possibleDay04" value={"3;"} checked={roomInfo.possibleDay.includes("3;")} onChange={changeRoomInfo} /><label htmlFor="day04">수</label>
                                                    <input type="checkbox" id="day05" name="possibleDay05" value={"4;"} checked={roomInfo.possibleDay.includes("4;")} onChange={changeRoomInfo} /><label htmlFor="day05">목</label>
                                                    <input type="checkbox" id="day06" name="possibleDay06" value={"5;"} checked={roomInfo.possibleDay.includes("5;")} onChange={changeRoomInfo} /><label htmlFor="day06">금</label>
                                                    <input type="checkbox" id="day07" name="possibleDay07" value={"6;"} checked={roomInfo.possibleDay.includes("6;")} onChange={changeRoomInfo} /><label htmlFor="day07">토</label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">대표이미지</th>
                                                <td>
                                                    <Upload
                                                        listType="picture-card"
                                                        fileList={roomInfo.addAttachFileList}
                                                        showUploadList={{
                                                            showPreviewIcon: true,
                                                            showRemoveIcon: true,
                                                            showDownloadIcon: true
                                                        }}
                                                        onPreview={handlePreview}
                                                        onChange={changeNewFileList}
                                                        onDownload={handleFileDownload}
                                                        accept="image/png, image/jpeg"
                                                    >
                                                        {roomInfo.addAttachFileList.length >= 3 ? null : uploadButton}
                                                    </Upload>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">사용여부</th>
                                                <td>
                                                    <input type="checkbox" name="isActive" id="isActive" onChange={changeRoomInfo} checked={roomInfo.isActive}/><label htmlFor="isActive">사용</label>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h2>이용시간정보</h2>
                                    <div className={cx("tb_style_1")}>
                                        <table>
                                            <colgroup>
                                                <col style={{width:"30%"}}/>
                                                <col style={{width:"30%"}}/>
                                                <col/>
                                                <col/>
                                            </colgroup>
                                            <thead>
                                            <tr>
                                                <th scope="col">시작 시간</th>
                                                <th scope="col">종료 시간</th>
                                                <th scope="col"></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {roomInfo.addRentalRoomTimeList.map((time) =>(
                                                <tr key={time.timeId}>
                                                    <td>
                                                        <RangePicker onOk={(value)=>{changeNewRentalRoomTime(time,value)}} value={[moment(time.startTime, "HH:mm"),moment(time.endTime, "HH:mm")]} format='HH:mm' locale={locale}/>
                                                    </td>
                                                    <td>
                                                        <button type="button"  onClick={()=>{removeNewRoomTime(time)}}>삭제</button>
                                                    </td>
                                                </tr>
                                            ))}

                                            <tr>
                                                <td>
                                                    <RangePicker placeholder={["시작 시간","종료 시간"]} onOk={changeNewRentalTimeInput} format='HH:mm' locale={locale} value={[moment(newRentalTime.startTime,'HH:mm'), moment(newRentalTime.endTime,'HH:mm')]}/>
                                                </td>
                                                <td>
                                                    <button type="button" onClick={() =>{addNewRentalRoomTime()}}>추가</button>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className={cx("txt_c pt_60")}>
                                        <button type="submit" className={cx("basic-btn02","btn-gray-bg")}>저장</button>
                                        <button type="button" className={cx("basic-btn02","btn-gray-bd2")} onClick={() =>{router.push("/admin/rental_place/manage")}}>목록</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </section>
            )}

            <Modal visible={showResultModal} closable={true} maskClosable={true} onClose={() => {
                setShowResultModal(false);
            }} cx={cx} className={"rental_popup"}>
                <h2 className={cx("popup_title")}>저장이 완료되었습니다</h2>
                <div className={cx("btn_box")}>
                    <button className={cx("close_btn")} onClick={() =>{setShowResultModal(false);router.push("/admin/rental_place/manage")}}>확인</button>
                </div>
            </Modal>
        </>
    );
};

export default RoomAdd;
