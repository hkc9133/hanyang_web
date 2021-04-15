import React, {useEffect} from 'react';
import Image from "next/image";

const FaceBookShareButton = ({url}) => {

    useEffect(() =>{
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

    const facebookShare = () =>{
        let currentUrl = window.document.location.href;

        window.FB.ui({
                method: 'share',
                href: url
            }, function (response) {
                if (response && !response.error_code) {
                    // alert('공유 완료');
                } else {
                    // alert('공유 실패');
                }
            }
        );
    }


    return (
        <button onClick={() =>{facebookShare()}}><Image src="/assets/image/startup_facebook.png" width={40} height={40} alt="sns_logo"/></button>
    );
};

export default FaceBookShareButton;
