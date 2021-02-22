import React, {useCallback, useEffect, useState} from 'react';
import {Checkbox, DatePicker, Form, Input, Modal, Tag, Upload} from "antd";
import locale from "antd/lib/date-picker/locale/ko_KR";

import styles from '../../../public/assets/styles/admin/partner/partner.module.css';
import classnames from "classnames/bind"
import {useDispatch, useSelector} from "react-redux";
import {addPartner, initialize} from "../../../store/partner/adminPartner";
import {PlusOutlined} from "@ant-design/icons";
import {useRouter} from "next/router";
import {getContinentList} from "../../../store/partner/adminPartner";

const cx = classnames.bind(styles);

const PartnerAddPage = () => {

    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const router = useRouter();

    const {continentList, addResult} = useSelector(({adminPartner, loading}) => ({
        continentList: adminPartner.getContinentList,
        addResult: adminPartner.addPartner,
    }))

    const [partnerForm, setPartnerForm] = useState({
        companyName: "",
        field: "",
        homepage: "",
        location: "",
        addAttachFileList: []
    });

    useEffect(() => {
        dispatch(getContinentList());

        return () => {
            dispatch(initialize())
        }

    }, [])

    const changePartnerFormValue = useCallback((e) => {
        const {name, value} = e.target

        setPartnerForm(reportForm => ({
            ...reportForm,
            [name]: value,

        }))

    }, [])

    const changeNewFileList = ({fileList}) => {
        setPartnerForm({...partnerForm, addAttachFileList: fileList})
    }

    const handlePreview = useCallback((file) => {
        const fileURL = URL.createObjectURL(file.originFileObj);
        window.open(fileURL);
    }, [])


    const submit = () => {
        const data = {
            ...partnerForm,
            companyLogo: partnerForm.addAttachFileList[0].originFileObj
        }

        dispatch(addPartner(data))
    }

    useEffect(() => {
        if (addResult.result && addResult.error == null) {
            Modal.success({
                title: '추가가 완료되었습니다',
                onOk: () => {
                    router.back();
                }
            });
        } else if (addResult.result == false && addResult.error != null) {
            Modal.warning({
                title: '추가 중 에러가 발생하였습니다'
            });
            dispatch(initialize())
        }

    }, [addResult])

    const uploadButton = (
        <div>
            <PlusOutlined/>
            <div style={{marginTop: 8}}>Upload</div>
        </div>
    );


    return (
        <>
            <section className={cx("container")}>
                <h1 className={cx("top_title")}>파트너 추가</h1>
                <Form form={form} onFinish={submit}
                >
                    <div className={cx("adm_container")}>
                        <div className={cx("box")}>
                            <div className={cx("startup_present_info")}>
                                {/*<h2>팝업 정보</h2>*/}
                                <div className={cx("tb_style_2")}>
                                    <table>
                                        <colgroup>
                                            <col style={{width: 270}}/>
                                            <col style={{width: 400}}/>
                                            <col style={{width: 270}}/>
                                            <col/>
                                        </colgroup>
                                        <tbody>
                                        <tr>
                                            <th scope="row">기업명</th>
                                            <td colSpan={3}>
                                                <Form.Item
                                                    name="companyName"
                                                    className={(cx("antd_input"))}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: '기업명은 필수 입니다.',
                                                        },
                                                    ]}
                                                >
                                                    <Input placeholder={"기업명"} name="companyName"
                                                           value={partnerForm.companyName}
                                                           onChange={(e) => {
                                                               changePartnerFormValue(e)
                                                           }}/>
                                                </Form.Item>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">분야</th>
                                            <td colSpan={3}>
                                                <Form.Item
                                                    name="field"
                                                    className={(cx("antd_input"))}
                                                    rules={[
                                                        {
                                                            required: false,
                                                            // message: '대표자 이름은 필수 입니다.',
                                                        },
                                                    ]}
                                                >
                                                    <Input placeholder={"분야"} name="field" value={partnerForm.field}
                                                           onChange={(e) => {
                                                               changePartnerFormValue(e)
                                                           }}/>
                                                </Form.Item>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">구분</th>
                                            <td>
                                                <Form.Item
                                                    name="continentId"
                                                    className={(cx("antd_input"))}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: '선택하여주세요',
                                                        },
                                                    ]}
                                                >
                                                    <select value={partnerForm.continentId} name="continentId"
                                                            onChange={changePartnerFormValue}>
                                                        <option value="">선택</option>
                                                        {continentList.map((item) => (
                                                            <option
                                                                value={item.continentId}>{item.continentName}</option>

                                                        ))}
                                                    </select>
                                                </Form.Item>
                                            </td>
                                            <th scope="row">국가/지역</th>
                                            <td>
                                                <Form.Item
                                                    name="location"
                                                    className={(cx("antd_input"))}
                                                    rules={[
                                                        {
                                                            required: false,
                                                            // message: "필수입력 입니다",
                                                        },
                                                    ]}
                                                >
                                                    <Input placeholder={"국가/지역"} name="location"
                                                           value={partnerForm.location}
                                                           onChange={(e) => {
                                                               changePartnerFormValue(e)
                                                           }}/>
                                                </Form.Item>
                                            </td>

                                        </tr>
                                        <tr>
                                            <th scope="row">홈페이지</th>
                                            <td colSpan={3}>
                                                <Form.Item
                                                    name="homepage"
                                                    className={(cx("antd_input"))}
                                                    rules={[
                                                        {
                                                            required: false,
                                                            message: '',
                                                        },
                                                    ]}
                                                >
                                                    <Input placeholder={"https://....."} name="homepage"
                                                           value={partnerForm.homepage}
                                                           onChange={(e) => {
                                                               changePartnerFormValue(e)
                                                           }}/>
                                                </Form.Item>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">기업 로고</th>
                                            <td colSpan={3}>
                                                <Form.Item
                                                    name="companyLogo"
                                                    className={(cx("antd_input"))}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: '기업 로고를 추가해주세요',
                                                        },
                                                    ]}
                                                >
                                                    <Upload
                                                        listType="picture-card"
                                                        fileList={partnerForm.addAttachFileList}
                                                        showUploadList={{
                                                            showPreviewIcon: true,
                                                            showRemoveIcon: true,
                                                            showDownloadIcon: false
                                                        }}
                                                        onPreview={handlePreview}
                                                        onChange={changeNewFileList}
                                                        accept="image/png, image/jpeg"
                                                    >
                                                        {partnerForm.addAttachFileList.length >= 1 ? null : uploadButton}
                                                    </Upload>

                                                </Form.Item>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className={cx("txt_c pt_60")}>
                                    <button type="submit" className={cx("basic-btn02", "btn-gray-bg")}>저장</button>
                                    <button type="button" className={cx("basic-btn02", "btn-gray-bd2")}
                                            onClick={() => {
                                                router.push("/admin/partner")
                                            }}>목록
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </section>
        </>
    );
};

export default PartnerAddPage;
