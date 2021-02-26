import React from 'react';
import {Form, Input} from "antd";

const PersonalInfoForm = ({cx,changeApplyFormValue,applyForm}) => {
    return (
        <div className={`${cx("personal_info", "photo_no")} clfx `}>
            <ul className={"clfx"}>
                <li>
                    <div>
                        {/*<span>*</span>*/}
                        <Form.Item
                            label={<span><span style={{color:'red'}}>*</span>이름</span>}
                            className={(cx("antd_input"))}
                            name="menteeName"
                            rules={[
                                {
                                    required: true,
                                    message: '이름은 필수 입니다.',
                                },
                            ]}
                        >
                            <Input placeholder={"이름"} name="menteeName"
                                   value={applyForm.menteeName} onChange={changeApplyFormValue}/>
                        </Form.Item>
                    </div>
                </li>
                <li>
                    <div>
                        <Form.Item
                            label={<span><span style={{color:'red'}}>*</span>연락처</span>}
                            name="menteePhoneNumber"
                            className={(cx("antd_input"))}
                            rules={[
                                {
                                    required: true,
                                    pattern: new RegExp(
                                        /^-?\d*(\.\d*)?$/
                                    ),
                                    message: "'-' 없이 숫자만 입력 가능합니다",
                                },
                            ]}
                        >
                            <Input placeholder={"연락처"} name="menteePhoneNumber" value={applyForm.menteePhoneNumber}
                                   onChange={changeApplyFormValue}/>
                        </Form.Item>
                    </div>
                </li>
                <li className={cx("email")}>
                    <div className={cx("clfx")}>
                        <Form.Item
                            label={<span><span style={{color:'red'}}>*</span>E-MAIL</span>}
                            name="menteeEmail"
                            rules={[
                                {
                                    required: true,
                                    type: 'email',
                                    message: 'E-MAIL은 필수 입니다.',
                                },
                            ]}
                        >
                            <Input placeholder={"E-MAIL"} name="menteeEmail" value={applyForm.menteeEmail}
                                   onChange={changeApplyFormValue}/>
                        </Form.Item>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default React.memo(PersonalInfoForm);
