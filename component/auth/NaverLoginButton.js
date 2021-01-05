import React from 'react';
import NaverLogin from 'react-naver-login';
import {clientPort, url} from "../../lib/api/client";

const NaverLoginButton = ({handleSocialLogin}) => {
    return (
        <NaverLogin
            clientId="X1l09clZ_fftNuaDbjIz"
            redirectUri={`${url}${clientPort != null && `:${clientPort}`}`}
            render={(props) =>
                <a href="#" onClick={props.onClick}>
                    <span>네이버 <br/>로그인</span>
                </a>
            }
            onSuccess={(result) => {
                handleSocialLogin(result.id, result.email, result.name, "NAVER");
            }}
            onFailure={() => {
                console.error();
            }}
        />
    );
};

export default NaverLoginButton;
