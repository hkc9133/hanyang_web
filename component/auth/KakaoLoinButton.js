import React from 'react';
import KaKaoLogin from 'react-kakao-login';
const KakaoLoginButton = ({handleSocialLogin}) => {
    return (
        <KaKaoLogin

            token='e30e8790c8207f560e3b47879051adb8'
            onSuccess={result => {
                handleSocialLogin(result.profile.id, result.profile.kakao_account.email, result.profile.kakao_account.profile.nicname, "KAKAO")
            }}
            onFail={(e) => {
            }}
            getProfile={true}
            render={({ onClick }) => {
                return (
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            onClick();
                        }}
                    >
                        <span>카카오 <br/>로그인</span>
                    </a>

                );
            }}/>
    );
};

export default KakaoLoginButton;
