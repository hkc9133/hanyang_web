import React, {useEffect} from 'react';
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const FaceBookLoginButton = ({handleSocialLogin,onFormCheck}) => {

    useEffect(() => {
        initFacebookSdk();
    },[])

    const initFacebookSdk = () =>{
        return new Promise(resolve => {
            // wait for facebook sdk to initialize before starting the react app
            window.fbAsyncInit = function () {
                window.FB.init({
                    appId: 718848628746534,
                    cookie: true,
                    xfbml: true,
                    version: 'v9.0'
                });
            };
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) { return; }
                js = d.createElement(s); js.id = id;
                js.src = "https://connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        });
    }

    const fbLoginClick = async () => {
        window.FB.login((response) => {
            window.FB.api('/me?fields=email', function(response) {
                if (response.status === 'connected') {
                    handleSocialLogin(response.id, response.email, response.name, 'FACEBOOK')
                } else {
                    // The person is not logged into your webpage or we are unable to tell.
                }
            });
        }, {scope: 'email,public_profile'});
    }

    return (
        <a href="#" onClick={(e) => {onFormCheck != undefined && onFormCheck(e);fbLoginClick()}}>
            <span>페이스북 <br/>로그인</span>
        </a>
    );
};

export default FaceBookLoginButton;
