import React, {useCallback, useEffect, useRef, useState} from 'react';
import styles from '../../public/assets/styles/user/user.module.css';
import classnames from "classnames/bind"
import PageNavigation from "../../component/layout/PageNavigation";
import {useDispatch, useSelector} from "react-redux";
import {initializeForm, socialLogin, socialSignUp} from "../../store/auth/auth";
import {useRouter} from "next/router";
import NaverLoginButton from "../../component/auth/NaverLoginButton";
import FaceBookLoginButton from "../../component/auth/FaceBookLoginButton";
import KakaoLoginButton from "../../component/auth/KakaoLoinButton";
import GoogleLoginButton from "../../component/auth/GoogleLoginButton";
import Modal from "../../component/common/Modal";
import SignUpInfo from "../../component/auth/SignUpInfo";
import JoinType from "../../component/auth/JoinType";
import {Checkbox, Form} from "antd";
import HanyangLoginButton from "../../component/auth/HanyangLoginButton";
import Head from "next/head";

const cx = classnames.bind(styles);

const Join = () => {
    const dispatch = useDispatch();
    const [showJoinInfoModal, setShowJoinInfoModal] = useState(true);
    const [showJoinSuccessModal, setShowJoinSuccessModal] = useState(false);
    const [agree, setAgree] = useState({
        terms:false,
        personal:false
    })
    const [form] = Form.useForm();
    const termsDev = useRef();
    const personalDev = useRef();

    const router = useRouter();

    const {user,loginCode, signup, loginLoading, signUpLoading, loading} = useSelector(({auth, loading}) => ({
        user: auth.user,
        loginCode:auth.loginCode.code,
        signup: auth.signup,
        loginLoading: loading['auth/SOCIAL_LOGIN'],
        signUpLoading: loading['auth/SOCIAL_SIGNUP'],
        loading: loading
    }))
    useEffect(() => {
        return () =>{
            dispatch(initializeForm('signup'))
            dispatch(initializeForm('loginCode'))
        }

    },[])

    useEffect(() => {
        if (!signUpLoading && signup.result == true && signup.error == null) {
            setShowJoinSuccessModal(true)
            // router.push('/')
        }

    }, [signup, signUpLoading,user])

    useEffect(() => {
        if ((user.login == false && loginCode == 401) || (user.login == false && user.info != null && user.info.type == 'HANYANG' && user.info.isLogin == true)) {
            setShowJoinInfoModal(true);
        }
        else if(user.login == true && loginCode == 200){
            router.push('/')
        }

    }, [user.login,loginCode])

    // const handleSocialLogin = (id, email, name, type) => {
    //     dispatch(socialLogin({id, email, name, type}))
    // };

    const handleSocialLogin = useCallback((id, email, name, type) =>{

        dispatch(socialLogin({id, email, name, type}))
    },[])

    const changeCheck = (e) =>{
        const {name, checked} = e.target

        if(name == 'all'){
            setAgree({
                terms:checked,
                personal: checked
            })
        }else{
            setAgree({
                ...agree,
                [name]:checked
            })
        }
    }

    const onFormCheck = async (e,onClick) => {
        try {
            const values = await form.validateFields();
            onClick();
        } catch (errorInfo) {
            if(errorInfo.errorFields[0].name[0] == 'terms'){
                termsDev.current.scrollIntoView();
            }else{
                personalDev.current.scrollIntoView();
            }
            e.preventDefault()
        }
    };
    const handleSignUp = (role) => {
        const signUpInfo = {
            ...user.info,
            role: role
        }
        dispatch(socialSignUp(signUpInfo))
    };
    return (
        <>
            <Head>
                <title>한양대학교 창업지원단 -회원가입</title>
            </Head>
            <PageNavigation/>

            {!showJoinInfoModal ? (
                <div className={`${cx("sub_container", "join_terms")} clfx`}>
                    <Form form={form} onFinish={(e) =>{console.log(e)}} onFinishFailed={(e) =>{console.log(e)}}>
                    <h1 className={cx("sub_top_title")}>회원가입</h1>
                    <p className={cx("sub_top_txt")}> 회원가입약관 및 개인정보처리방침안내의 내용에 동의하셔야 회원가입 하실 수 있습니다.</p>
                    <div className={cx("all_agree")}>
                        <Checkbox name="all" onChange={(e)=>{changeCheck(e)}}>전체 동의</Checkbox>
                    </div>

                    <div className={cx("terms_box")}>
                        <div className={cx("titleArea")}>
                            <h2>회원가입약관</h2>
                            <div className={cx("chk")} ref={termsDev}>
                                <Form.Item
                                    name="terms"
                                    rules={[
                                        {
                                            required: !agree.terms,
                                            message: '회원가입약관의 내용에 동의는 필수입니다',
                                        },
                                    ]}
                                >
                                    <Checkbox name="terms" checked={agree.terms} onChange={(e)=>{changeCheck(e)}}>회원가입약관의 내용에 동의 합니다</Checkbox>
                                </Form.Item>
                            </div>
                        </div>
                        <div className={cx("terms_content")}>
<pre>

제 1 장 총칙
 
제 1 조 (목적)
 
이 약관은 한양대학교 창업지원단 사이트가 제공하는 모든 서비스(이하 ‘서비스’)의 이용 조건 및 절차, 창업지원단 및 이용자의 권리, 의무 및 책임 사항 등 기타 필요한 사항을 규정함을 목적으로 합니다.
 
제 2 조 (약관의 효력 및 변경)
 
①이 약관은 창업지원단 온라인 서비스 및 기타의 방법을 통하여 이를 공지함으로써 효력이 발생됩니다.②창업지원단 사정상 중요한 사유가 발생될 경우 사전 고지 없이 이 약관의 내용을 변경할 수 있으며, 변경된 약관은
①항과 같은 방법으로 공지함으로써 효력이 발생됩니다.
③회원은 변경된 약관에 동의하지 않을 경우 회원 탈퇴를 요청할 수 있으며, 변경된 약관의 효력 발생일 이후에도 서비스를 계속 사용할 경우 약관의 변경 사항에 동의한 것으로 간주됩니다.
 
제 3 조 (약관 외 준칙)
 
본 약관에 명시되지 않은 사항은 관계법령에 따릅니다.
 
제 4 조 (용어의 정의)
 
이 약관에서 사용하는 주요한 용어의 정의는 다음과 같습니다.
1.기본회원 : 창업지원단과 서비스 이용 계약을 체결하고 이용자 아이디(ID)를 부여 받은 자를 말합니다.   비회원 : 회원에 가입하지 않고 서비스를 이용하는 자를 말합니다.
2.운영자 : 서비스의 전반적인 관리와 원활한 운영을 위하여 창업지원단에서 선정한 자를 말합니다.

제 2 장 서비스 이용 계약 체결
 
제 5 조 (이용 계약의 성립)
 
①사용자는 회원가입 시 "동의합니다."를 선택하면 이 약관에 동의하는 것으로 간주됩니다. 약관 변경 시에도 이와 동일하며, 변경된 약관에 동의하지 않을 경우 회원 등록 취소가 가능합니다.
②이용 계약은 서비스 이용 희망자의 이용약관 동의 후 이용 신청에 대하여 창업지원단이 승낙함으로써 성립합니다.

제 6 조 (이용 신청)
 
회원으로 가입하여 서비스를 이용하기를 희망하는 자는 창업지원단이 요청하는 소정의 가입 신청 양식에서 요구하는 사항을 기록하여 신청합니다.
 
제 7 조 (이용 신청의 승낙)
 
①제 6 조에 따른 이용 신청에 대하여, 창업지원단은 특별한 사정이 없는 한 접수 순서대로 이용 신청을 승낙합니다.
②다음 각 호에 해당하는 경우 창업지원단은 이용 신청에 대한 승낙을 제한할 수 있고, 그 사유가 해소될 때까지 승낙을 유보할 수 있습니다.
1. 서비스 관련 설비에 여유가 없는 경우
2. 기술상 지장이 있는 경우3. 기타 창업지원단의 사정상 필요하다고 인정되는 경우
③창업지원단은 다음 각 호에 해당하는 사항을 인지하는 경우 이용 신청을 승낙하지 아니할 수 있습니다.
1.본인의 실명으로 신청하지 않은 경우
2.다른 사람의 명의를 사용하여 신청한 경우
3.이용 신청 시 필요 사항을 허위로 기재하여 신청한 경우
4.사회의 안녕과 질서 혹은 미풍양속을 저해할 목적으로 신청한 경우5.기타 창업지원단이 정한 이용 신청 요건이 미비된 경우
④②항 또는 ③항에 의하여 이용 신청의 승낙을 유보하거나 승낙하지 아니하는 경우, 창업지원단은 이를 이용하는 신청자에게 알려야 합니다. 다만, 창업지원단의 귀책 사유 없이 이용 신청자에게 통지할 수 없는 경우는 예외로 합니다.


제 18 조 (회원의 게시물)
 
창업지원단은 회원이 게시하거나 등록하는 서비스 내의 내용물이 다음 각 호에 해당한다고 판단되는 경우에 사전 통지 없이 삭제할 수 있습니다.
1.다른 회원 또는 제 3자를 비방하거나 중상모략으로 명예를 손상시키는 내용인 경우
2.공공질서 및 미풍양속에 위반되는 내용인 경우
3.범죄적 행위에 결부된다고 인정되는 내용일 경우
4.창업지원단의 저작권, 제 3자의 저작권 등 기타 권리를 침해하는 내용인 경우
5.창업지원단에서 규정한 게시 기간이나 용량을 초과한 경우
6.음란물을 게재하거나 음란사이트를 링크하는 경우
7.불법복제 또는 해킹을 조장하는 내용인 경우
8.영리를 목적으로 하는 광고일 경우
9.게시판의 성격에 부합하지 않는 내용을 게시할 경우
10.기타 관계법령에 위배된다고 판단되는 경우
 
제 19 조 (게시물의 저작권)
 
서비스에 게재된 자료에 대한 권리는 다음 각 호와 같습니다.
1.게시물에 대한 권리와 책임은 게시자에게 있으며 창업지원단은 게시자의 동의 없이 이를 서비스 내 게재 이외의 영리적 목적으로 사용할 수 없습니다. 단, 비영리적인 경우에는 그러하지 아니하며 또한 창업지원단이 서비스 내의 게재권을 갖습니다.
2.회원은 서비스를 이용하여 얻은 정보를 가공, 판매하는 행위 등 서비스에 게재된 자료를 상업적으로 사용할 수 없습니다.
 
제 20 조 (서비스의 이용시간)
 
①창업지원단은 회원의 이용 신청을 승낙한 때부터 즉시 서비스를 개시합니다. 단, 창업지원단의 업무상 또는 기술상의 장애로 인하여 서비스를 개시하지 못하는 경우, 서비스에 공지하거나 회원에게 즉시 이를 통지합니다.
②서비스의 이용은 연중 무휴 1일 24시간을 원칙으로 합니다. 다만 창업지원단의 업무상 또는 기술상의 이유로 인하여 서비스의 전부 또는 일부가 일시 중지될 수 있으며, 운영상의 목적으로 창업지원단이 정한 기간에 서비스의 전부 또는 일부가 일시 중지될 수도 있습니다. 이러한 경우에는 창업지원단이 사전 또는 사후에 이를 공지합니다.
③창업지원단은 서비스 별로 이용 가능한 시간을 별도로 정할 수 있으며 이 경우 그 내용을 사전에 공지합니다.
 
제 21 조 (서비스 제공의 중지)
 
무료 서비스의 경우, 창업지원단의 필요에 따라 언제든지 본 서비스의 전부 또는 일부를 수정하거나 중단할 수 있으며, 이 경우 창업지원단이 전자우편 또는 인터넷 홈페이지 등을 통하여 회원에게 즉시 이를 고지합니다.
 
제 5장 계약 해지 및 서비스 이용 제한
 
제 22 조 (회원 탈퇴 및 이용 제한)
 
①회원이 이용 계약을 해지하고자 하는 때에는 회원 본인이 직접 창업지원단 사이트 내의 회원정보 관리를 이용하여 회원 탈퇴를 요청해야 합니다.②창업지원단은 회원이 다음 사항에 해당하는 행위를 하였을 경우, 사전 통지 없이 이용 계약을 해지하거나 또는 기간을 정하여 해당 회원의 서비스 이용을 차단할 수 있습니다.
1.공공 질서 및 미풍 양속에 반하는 행위를 한 경우
2.범죄적 행위에 관련되는 행위를 한 경우
3.국익 또는 사회적 공익을 저해할 목적으로 서비스 이용을 계획 또는 실행한 경우
4.타인의 ID 및 비밀번호를 도용한 경우
5.가입한 이름이 실명이 아닌 경우
6.타인의 명예를 손상시키거나 타인에게 불이익을 주는 경우
7.같은 사용자가 다른 ID로 이중 등록을 한 경우
8.서비스에 위해를 가하는 등 건전한 이용을 저해하는 행위를 한 경우
9.정보통신설비의 오작동이나 정보 등의 파괴를 유발시키는 컴퓨터 바이러스 프로그램 등을 유포하는 경우
10.기타 관련 법령이나 창업지원단이 정한 이용 조건에 위배되는 행위를 한 경우

</pre>
                        </div>
                    </div>

                    <div className={cx("terms_box")}>
                        <div className={cx("titleArea")}>
                            <h2>개인정보처리방침 </h2>
                            <div className={cx("chk")} ref={personalDev}>
                                {/*<label htmlFor="terms_agree_2">개인정보처리방침 내용에 동의 합니다.</label>*/}
                                {/*<input type="checkbox" id="terms_agree_2" name="personal"  onChange={(e) =>{changeCheck(e)}}/>*/}
                                {/*{agree.personal.isShow && <p>{agree.personal.msg}</p>}*/}
                                <Form.Item
                                    name="personal"
                                    rules={[
                                        {
                                            required: !agree.personal,
                                            message: '개인정보처리방침 내용에 동의는 필수입니다.',
                                        },
                                    ]}
                                >
                                    <Checkbox name="personal" checked={agree.personal} onChange={(e)=>{changeCheck(e)}}>개인정보처리방침 내용에 동의 합니다.</Checkbox>
                                </Form.Item>
                            </div>
                        </div>
                        <div className={cx("terms_content")}>
<pre>
개인정보처리방침
 
한양대학교 창업지원단 개인정보 처리방침
한양대학교 창업지원단은 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립·공개합니다.
 
제1조(개인정보의 처리목적)
한양대학교 창업지원단은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다
 
가. 한양대학교 창업지원단 홈페이지에서 제공하는 회원제 서비스(창업상담, 아이디어제안, 사업모델평가) 이용에 따른 서비스를 제공하기 위해 개인정보(신청자 성명, e-mail, 전화번호)를 처리합니다


제2조(개인정보의 처리 및 보유기간)
가. 한양대학교 창업지원단은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
 
나. 각각의 개인정보 처리 및 보유기간은 다음과 같습니다.

</pre>
                        </div>
                    </div>

                    <div className={cx("sns_login")}>
                        <h2 className={cx("title_style_1")}>SNS 계정가입</h2>
                        <ul className={cx("clfx")}>
                            <li className={cx("icon_5")}>
                                <HanyangLoginButton  onFormCheck={onFormCheck}/>
                            </li>
                            <li className={cx("icon_1")}>
                                <NaverLoginButton handleSocialLogin={handleSocialLogin} onFormCheck={onFormCheck}/>
                            </li>
                            <li className={cx("icon_2")}>
                                <FaceBookLoginButton handleSocialLogin={handleSocialLogin} onFormCheck={onFormCheck}/>
                            </li>
                            <li className={cx("icon_3")}>
                                <KakaoLoginButton handleSocialLogin={handleSocialLogin}  onFormCheck={onFormCheck}/>
                            </li>
                            <li className={cx("icon_4")}>
                                <GoogleLoginButton handleSocialLogin={handleSocialLogin}  onFormCheck={onFormCheck}/>
                            </li>
                        </ul>
                    </div>

                    </Form>
                </div>
            ) : (
                <JoinType handleSignUp={handleSignUp}/>
            )}
            {showJoinSuccessModal && <Modal visible={showJoinSuccessModal} closable={true} maskClosable={true} onClose={() => {setShowJoinSuccessModal(false);setShowJoinInfoModal(false);router.push('/')}}><div className={cx("popup_title")}>가입이 완료되었습니다</div></Modal>}


        </>
    );
};

export default Join;
