import React, {useEffect, useRef, useState} from 'react';
import {Input, Tag} from "antd";

const KeywordBox = ({cx, mentorInfo, setMentorInfo}) => {

    const [keyword, setKeyWord] = useState({
        inputVisible: false,
        inputValue: '',
        editInputIndex: -1,
        editInputValue: '',
    })

    const keywordInput = useRef();
    const keywordEditInput = useRef();

    useEffect(() => {
        if (keyword.inputVisible) {
            keywordInput.current.focus();
        }

    }, [keyword.inputVisible])

    useEffect(() => {
        if (keyword.editInputIndex > -1 && keyword.editInputValue != '') {
            keywordEditInput.current.focus();
        }

    }, [keyword.editInputIndex, keyword.editInputValue])

    const removeKeyword = (removedTag) => {
        const keywords = mentorInfo.mentorKeyword.filter(tag => tag !== removedTag);
        setMentorInfo({
            ...mentorInfo,
            mentorKeyword: keywords
        })
    }

    const showKeywordInput = () => {
        setKeyWord({...keyword, inputVisible: true});
        // keywordInput.current.focus();
        // this.setState({inputVisible: true}, () => this.input.focus());
    };

    const changeKeywordInput = (e) => {
        setKeyWord({...keyword, inputValue: e.target.value})
    };

    const confirmKeywordInput = (e) => {
        const {inputValue} = keyword;
        let {mentorKeyword} = mentorInfo
        if (inputValue && mentorKeyword.indexOf(inputValue) === -1) {
            mentorKeyword = [...mentorKeyword, inputValue];
        }
        setMentorInfo({
            ...mentorInfo,
            mentorKeyword: mentorKeyword
        })

        setKeyWord({
            ...keyword,
            inputVisible: false,
            inputValue: '',
        })

    };

    const changeKeywordInputEdit = (e) => {
        setKeyWord({
            ...keyword,
            editInputValue: e.target.value
        })
    };

    const confirmKeywordInputEdit = () => {
        let newTags = [];
        newTags = [...mentorInfo.mentorKeyword];
        newTags[keyword.editInputIndex] = keyword.editInputValue;

        setKeyWord({
            ...keyword,
            editInputIndex: -1,
            editInputValue: '',
        })

        setMentorInfo({
            ...mentorInfo,
            mentorKeyword: newTags,
        })
    };

    return (
        <div className={cx("counsel_keyword_box")}>
            <div>
                {keyword.inputVisible && (
                    <Input
                        ref={keywordInput}
                        className={cx("keyword_input")}
                        type="text"
                        size="small"
                        className="tag-input"
                        value={keyword.inputValue}
                        onChange={(e) => {
                            changeKeywordInput(e);
                        }}
                        onBlur={(e) => {
                            confirmKeywordInput(e)
                        }}
                        onPressEnter={(e) => {
                            confirmKeywordInput(e)
                        }}
                    />
                )}
                {!keyword.inputVisible && (
                    <Tag className={cx("site-tag-plus")} onClick={(e) => {
                        showKeywordInput(e);
                    }}>
                        + KEYWORD 추가
                    </Tag>
                )}
            </div>
            {mentorInfo.mentorKeyword.map((item, index) => {
                if (keyword.editInputIndex === index) {
                    return (
                        <Input
                            ref={keywordEditInput}
                            key={item}
                            size="small"
                            className="tag-input"
                            value={keyword.editInputValue}
                            onChange={(e) => {
                                changeKeywordInputEdit(e)
                            }}
                            onBlur={(e) => {
                                confirmKeywordInputEdit(e)
                            }}
                            onPressEnter={() => {
                                confirmKeywordInputEdit()
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
                            onClose={() => removeKeyword(item)}
                        >
                              <span
                                  onDoubleClick={(e) => {
                                      setKeyWord({
                                          ...keyword,
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

export default KeywordBox;
