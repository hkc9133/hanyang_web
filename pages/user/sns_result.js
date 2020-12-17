import React, {useEffect, useState} from 'react';
import {clientPort, url} from "../../lib/api/client";
import GoogleLogin from "react-google-login";
import {socialLogin} from "../../store/auth/auth";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import Modal from "../../component/common/Modal";
import SignUpInfo from "../../component/auth/SignUpInfo";

const SnsResult = () => {

    const dispatch = useDispatch();
    const router = useRouter()

    const [showJoinInfoModal, setShowJoinInfoModal] = useState(false);
    const [showJoinSuccessModal, setShowJoinSuccessModal] = useState(false);

    const {user, signup, loginLoading, signUpLoading, loading} = useSelector(({auth, loading}) => ({
        user: auth.user,
        signup: auth.signup,
        loginLoading: loading['auth/SOCIAL_LOGIN'],
        signUpLoading: loading['auth/SOCIAL_SIGNUP'],
        loading: loading
    }))

    useEffect(() => {
        if (!loginLoading && user.login == false && user.code == 401) {
            console.log("")
            setShowJoinInfoModal(true);
        }
        else if(!loginLoading && user.login == true && user.code == 200){
            router.push('/')
        }

    }, [user, loginLoading])

    const handleSocialLogin = (id, email, name, type) => {
        dispatch(socialLogin({id, email, name, type}))
    };

    return (
        <div>
            <GoogleLogin
                clientId='437495859189-616u9auj0k1161lsur2g1g0l88emj026.apps.googleusercontent.com'
                redirectUri={`${url}${clientPort != null && `:${clientPort}/test/sns_result`}`}
                uxMode="redirect"
                isSignedIn={true}
                render={(props) => (
                    <a href="#" onClick={props.onClick}>
                        <span>구글 <br/>로그인</span>
                    </a>
                )}
                onSuccess={result => {
                    console.log("== Google Login START ==")
                    console.log(result);
                    console.log("== Google Login START ==")
                    handleSocialLogin(result.profileObj.googleId, result.profileObj.email, result.profileObj.name, "google")
                }}
                onFailure={result => console.log(result)}
                cookiePolicy={'single_host_origin'}
            />

            {showJoinInfoModal &&
                <Modal visible={showJoinInfoModal} closable={true} maskClosable={true}
                       onClose={() => setShowJoinInfoModal(false)}>
                    <SignUpInfo handleSignUp={handleSignUp}/>
                    {showJoinSuccessModal &&
                    <Modal visible={showJoinSuccessModal} closable={true} maskClosable={true} onClose={() => {
                        setShowJoinSuccessModal(false);
                        setShowJoinInfoModal(false);
                        router.push('/')
                    }}>
                        <div>가입 완료</div>
                    </Modal>}
                </Modal>
            }
        </div>
    );
};

export default SnsResult;
