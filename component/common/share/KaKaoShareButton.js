import React, {useEffect} from 'react';
import Image from "next/image";
import {port} from "../../../lib/api/client";

const imageUrl = `http://61.109.248.203${port != null ? `:${port}` : ''}/api/image/hanyang_logo.png`
const KaKaoShareButton = ({url,title,desc}) => {

    useEffect(() =>{

        let k = document.createElement("script");
        k.setAttribute("src", "https://developers.kakao.com/sdk/js/kakao.min.js");
        k.onload = function () {
            window.Kakao.init('e30e8790c8207f560e3b47879051adb8');
            // window.Kakao.Link.createDefaultButton({
            //     container: '#kakao_share',
            //     objectType: 'feed',
            //     content: {
            //         title: '한양대학교 창업지원단',
            //         // description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
            //         imageUrl: imageUrl,
            //         link: {
            //             mobileWebUrl: url,
            //             webUrl: url,
            //         }
            //     },
            //     buttons: [
            //         // {
            //         //     title: '웹으로 보기',
            //         //     link: {
            //         //         mobileWebUrl: mapUrl,
            //         //         webUrl: mapUrl,
            //         //     }
            //         // },
            //         // {
            //         //     title: '앱으로 보기',
            //         //     link: {
            //         //         mobileWebUrl: 'http://61.109.248.203',
            //         //         webUrl: 'http://61.109.248.203',
            //         //     }
            //         // }
            //     ],
            //     //
            //     // objectType: 'feed',
            //     // content: {
            //     //     title: '한양대학교 창업지원단',
            //     //     description: '창업지원단 지도',
            //     //     imageUrl:
            //     //         `${'http://61.109.248.203'}${port != null ? `:${port}` : ''}/api/image/logo.png`,
            //     //     link: {
            //     //         mobileWebUrl: 'https://map.naver.com/v5/entry/place/13341941?c=14110671.9385277,4513759.3942962,14,0,0,0,dh&placePath=%2Fhome%3Fentry=plt',
            //     //     },
            //     // },
            //     // buttons: [
            //     //     {
            //     //         title: '네이버 지도 확인',
            //     //         link: {
            //     //             mobileWebUrl: 'https://map.naver.com/v5/entry/place/13341941?c=14110671.9385277,4513759.3942962,14,0,0,0,dh&placePath=%2Fhome%3Fentry=plt',
            //     //         },
            //     //     },
            //     // ]
            // });

        }

        document.head.appendChild(k);

        return () =>{
            k.remove();
        }
    },[])

    const kakaoShare = () =>{
        window.Kakao.Link.sendDefault({
            // container: '.kakao_share',
            objectType: 'feed',
            content: {
                title: title != null ? title : '한양대학교 창업지원단',
                description: desc != null ? desc : "",
                imageUrl: imageUrl,
                link: {
                    mobileWebUrl: url,
                    webUrl: url,
                }
            },
        });
    }

    return (
        <button id="kakao_share" onClick={() =>{kakaoShare()}} ><Image src="/assets/image/startup_kakao.png" width={40} height={40} alt="sns_logo"/></button>
    );
};

export default KaKaoShareButton;
