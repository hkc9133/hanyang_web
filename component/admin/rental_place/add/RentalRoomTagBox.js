import React, {useEffect, useRef, useState} from 'react';
import {Input, Tag} from "antd";

const RentalRoomTagBox = ({cx,placeInfo,setPlaceInfo}) => {

    const [room, setRoom] = useState({
        inputVisible: false,
        inputValue: '',
        editInputIndex: -1,
        editInputValue: '',
    })
    const roomInput = useRef();
    const roomEditInput = useRef();

    useEffect(() =>{
        if(room.inputVisible){
            roomInput.current.focus();
        }

    },[room.inputVisible])

    useEffect(() =>{
        if(room.editInputIndex > -1 && room.editInputValue != ''){
            roomEditInput.current.focus();
        }

    },[room.editInputIndex,room.editInputValue])

    const removeRoom = (removedTag) => {
        const list = placeInfo.rentalRoomList.filter(tag => tag !== removedTag);
        setPlaceInfo({
            ...placeInfo,
            rentalRoomList: list
        })
    }

    const showRoomInput = () => {
        setRoom({...room, inputVisible: true});
        // keywordInput.current.focus();
        // this.setState({inputVisible: true}, () => this.input.focus());
    };

    const changeRoomInput = (e) => {
        setRoom({...room, inputValue: e.target.value})
    };

    const confirmRoomInput = (e) => {
        const {inputValue} = room;
        let {rentalRoomList} = placeInfo
        if (inputValue && rentalRoomList.indexOf(inputValue) === -1) {
            rentalRoomList = [...rentalRoomList, inputValue];
        }
        setPlaceInfo({
            ...placeInfo,
            rentalRoomList: rentalRoomList
        })

        setRoom({
            ...room,
            inputVisible: false,
            inputValue: '',
        })
    };

    const changeRoomInputEdit = (e) => {
        setRoom({
            ...room,
            editInputValue: e.target.value
        })
    };

    const confirmRoomInputEdit = () => {
        let newTags = [];
        newTags = [...placeInfo.rentalRoomList];
        newTags[room.editInputIndex] = room.editInputValue;

        setRoom({
            ...room,
            editInputIndex: -1,
            editInputValue: '',
        })

        setPlaceInfo({
            ...placeInfo,
            rentalRoomList: newTags,
        })
    };

    return (
        <div className={cx("rental_room_tag_box")}>
            <ul>
            <li>
                {room.inputVisible && (
                    <Input
                        ref={roomInput}
                        className={cx("room_input")}
                        type="text"
                        size="small"
                        className="tag-input"
                        value={room.inputValue}
                        onChange={(e)=>{changeRoomInput(e);}}
                        onBlur={(e) =>{confirmRoomInput(e)}}
                        onPressEnter={(e) =>{confirmRoomInput(e)}}
                    />
                )}
                {!room.inputVisible && (
                    <Tag className={cx("site-tag-plus","tag")} onClick={(e) =>{showRoomInput(e);}}>
                        + 장소 추가
                    </Tag>
                )}
            </li>
            {placeInfo.rentalRoomList.map((item, index) => {
                if (room.editInputIndex === index) {
                    return (
                        <li>
                        <Input
                            ref={roomEditInput}
                            key={index}
                            size="small"
                            type="text"
                            className="tag-input"
                            value={room.editInputValue}
                            onChange={(e) => {
                                changeRoomInputEdit(e)
                            }}
                            onBlur={(e) => {
                                confirmRoomInputEdit(e)
                            }}
                            onPressEnter={() => {
                                confirmRoomInputEdit()
                            }}
                        />
                        </li>
                    );
                }
                // const isLongTag = item.length > 20;

                const tagElem = (
                        <Tag
                            className={cx("edit-tag","tag")}
                            key={index}
                            closable={true}
                            onClose={() => removeRoom(item)}
                        >
                                          <span
                                              onDoubleClick={(e) => {
                                                  setRoom({
                                                      ...room,
                                                      editInputIndex: index,
                                                      editInputValue: item
                                                  });
                                                  e.preventDefault();
                                              }}
                                          >
                                            {item}
                                          </span>
                        </Tag>
                );
                return <li>{tagElem}</li>;
            })}

            </ul>

        </div>
    );
};

export default RentalRoomTagBox;
