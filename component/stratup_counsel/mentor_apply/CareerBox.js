import React, {useEffect, useRef, useState} from 'react';
import {Input, Tag} from "antd";

const CareerBox = ({cx,mentorInfo,setMentorInfo}) => {

    const [career, setCareer] = useState({
        inputVisible: false,
        inputValue: '',
        editInputIndex: -1,
        editInputValue: '',
    })

    const careerInput = useRef();
    const careerEditInput = useRef();

    useEffect(() =>{
        if(career.inputVisible){
            careerInput.current.focus();
        }

    },[career.inputVisible])

    useEffect(() =>{
        if(career.editInputIndex > -1 && career.editInputValue != ''){
            careerEditInput.current.focus();
        }

    },[career.editInputIndex,career.editInputValue])

    const removeCareer = (removedTag) => {
        const careers = mentorInfo.mentorCareer.filter(tag => tag !== removedTag);
        setMentorInfo({
            ...mentorInfo,
            mentorCareer: careers
        })
    }

    const showCareerInput = () => {
        setCareer({...career, inputVisible: true});
        // keywordInput.current.focus();
        // this.setState({inputVisible: true}, () => this.input.focus());
    };

    const changeCareerInput = (e) => {
        setCareer({...career, inputValue: e.target.value})
    };

    const confirmCareerInput = (e) => {
        const {inputValue} = career;
        let {mentorCareer} = mentorInfo
        if (inputValue && mentorCareer.indexOf(inputValue) === -1) {
            mentorCareer = [...mentorCareer, inputValue];
        }
        setMentorInfo({
            ...mentorInfo,
            mentorCareer: mentorCareer
        })

        setCareer({
            ...career,
            inputVisible: false,
            inputValue: '',
        })
    };

    const changeCareerInputEdit = (e) => {
        setCareer({
            ...career,
            editInputValue: e.target.value
        })
    };

    const confirmCareerInputEdit = () => {
        let newTags = [];
        newTags = [...mentorInfo.mentorCareer];
        newTags[career.editInputIndex] = career.editInputValue;

        setCareer({
            ...career,
            editInputIndex: -1,
            editInputValue: '',
        })

        setMentorInfo({
            ...mentorInfo,
            mentorCareer: newTags,
        })
    };

    return (
        <div className={cx("counsel_career_box")}>
            <div>
                {career.inputVisible && (
                    <Input
                        ref={careerInput}
                        className={cx("career_input")}
                        type="text"
                        size="small"
                        className="tag-input"
                        value={career.inputValue}
                        onChange={(e)=>{changeCareerInput(e);}}
                        onBlur={(e) =>{confirmCareerInput(e)}}
                        onPressEnter={(e) =>{confirmCareerInput(e)}}
                    />
                )}
                {!career.inputVisible && (
                    <Tag className={cx("site-tag-plus")} onClick={(e) =>{showCareerInput(e);}}>
                        + 경력 추가
                    </Tag>
                )}
            </div>
            {mentorInfo.mentorCareer.map((item, index) => {
                if (career.editInputIndex === index) {
                    return (
                        <Input
                            ref={careerEditInput}
                            key={item}
                            size="small"
                            className="tag-input"
                            value={career.editInputValue}
                            onChange={(e) => {
                                changeCareerInputEdit(e)
                            }}
                            onBlur={(e) => {
                                confirmCareerInputEdit(e)
                            }}
                            onPressEnter={() => {
                                confirmCareerInputEdit()
                            }}
                        />
                    );
                }
                // const isLongTag = item.length > 20;

                const tagElem = (
                    <>
                        <Tag
                            className={cx("edit-tag")}
                            key={item}
                            closable={true}
                            onClose={() => removeCareer(item)}
                        >
                                          <span
                                              onDoubleClick={(e) => {
                                                  setCareer({
                                                      ...career,
                                                      editInputIndex: index,
                                                      editInputValue: item
                                                  });
                                                  e.preventDefault();
                                              }}
                                          >
                                            {item}
                                          </span>
                        </Tag>
                    </>
                );
                return tagElem;
            })}

        </div>
    );
};

export default CareerBox;
