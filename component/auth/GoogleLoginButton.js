import React from 'react';
import GoogleLogin from 'react-google-login';

const GoogleLoginButton = ({handleSocialLogin,onFormCheck}) => {
    return (
        <GoogleLogin
            clientId='437495859189-616u9auj0k1161lsur2g1g0l88emj026.apps.googleusercontent.com'
            // redirectUri={`${url}:${port}${serverAddr}/test/sns_result`}
            // uxMode="redirect"
            // isSignedIn={true}
            render={(props) => (
                <a href="#" onClick={(e) => {onFormCheck != undefined && onFormCheck(e);props.onClick()}}>
                    <span>구글 <br/>로그인</span>
                </a>
            )}
            onSuccess={result => {
                handleSocialLogin(result.profileObj.googleId, result.profileObj.email, result.profileObj.name, "GOOGLE")
            }}
            // onFailure={result => console.log(result)}
            cookiePolicy={'single_host_origin'}
        />
    );
};

export default GoogleLoginButton;
