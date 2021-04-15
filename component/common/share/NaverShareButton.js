import React, {useEffect} from 'react';
import Image from "next/image";

const NaverShareButton = ({url}) => {

    useEffect(() =>{
        // console.log(url)
        // let s = document.createElement("script");
        // s.setAttribute("src", "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=b348wme6ql");
        // s.onload = function () {
        //     let mapOptions = {
        //         center: new window.naver.maps.LatLng(37.55755459409449, 127.04686152506919),
        //         zoom: 15
        //     };
        //     let map = new naver.maps.Map(mapArea.current, mapOptions);
        //
        //     let marker = new naver.maps.Marker({
        //         position: new naver.maps.LatLng(37.55755459409449, 127.04686152506919),
        //         map: map,
        //     });
        // }
        // document.head.appendChild(s);
        // return () =>{
        //     s.remove();
        // }

    },[])
    const naverShare = () =>{
        let link = encodeURI(encodeURIComponent(url));
        let title = encodeURI("한양대학교 창업지원단");
        let shareURL = "https://share.naver.com/web/shareView?url=" + link + "&title=" + title;
        document.location = shareURL;
    }
    return (
        <button onClick={() =>{naverShare()}}><Image src="/assets/image/startup_naver_blog.png" width={40} height={40} alt="sns_logo"/></button>
    );
};

export default NaverShareButton;
