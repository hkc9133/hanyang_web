import css from 'styled-jsx/css'

export default css.global`
        body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,textarea,button{margin:0;padding:0;}
        html {height:100%;}
        body {height:100%;}
        a:link {text-decoration:none;}
        a:visited {text-decoration:none;}
        a:hover {text-decoration:none; }
        a:active {text-decoration:none;}
        img{border:0px; max-width:100%;}
        img, a, label, span{vertical-align:middle;}
        li{list-style: none;}
        table{border-collapse:collapse;width:100%;}
        address,caption,cite,code,dfn,em,var,h1,h2,h3,h4,h5,h6 {font-style:normal;font-weight:normal;}
        caption,legend,caption *,legend *{position:absolute; left:-10000px; line-height:0; font-size:0;}
        fieldset{border:solid 0px black;padding:0;}
        button{border:none; background:none; cursor:pointer; outline:none;}
        
        body,a,[type=text], [type=password], [type=file], [type=email], [type=number], [type=tel], [type=submit],select,h1, h2, h3, h4, h5, h6, pre,textarea, button{
            font-family:"noto","nanum","나눔고딕","MalgunGothic","맑은 고딕","돋움","tahoma","sans-serif"; font-size:13px; line-height:1.4; color:#333;}
        
        [type=text], [type=password], [type=file], [type=email], [type=number], [type=tel], [type=submit]{padding-left:10px; box-sizing:border-box; vertical-align:middle; border:solid 1px #ddd; background-color:#fff; height:40px; line-height:38px; outline:none;}
        [type=checkbox], [type=radio]{vertical-align:middle;margin:6px 4px 4px 4px;}
        select{height:40px; line-height:38px; border:1px solid #ddd; box-sizing:border-box; outline:none;}
        
        [type=file], [type=submit]{padding:0; height:auto; }
        textarea{padding:15px; width:100%; border:1px solid #ddd; box-sizing:border-box; resize:none; box-sizing:border-box; outline:none;}
        button:focus,
        textarea:focus,
        input:focus{outline:none;}
        
        body{background-color:#f9faff; min-width:1290px;}
        #wrap{position:relative;}
        
        /*!*-- font --*!*/
        
        /*!*나눔스퀘어*!*/
        // @font-face {
        //     font-family: 'noto';
        //     font-style: normal;
        //     font-weight: 100;
        //     src: url(../font/NotoSans-Thin.eot);
        //     src: url(../font/NotoSans-Thin.eot?#iefix) format('embedded-opentype'),
        //     url(../font/NotoSans-Thin.woff2) format('woff2'),
        //     url(../font/NotoSans-Thin.woff) format('woff');
        // }
        //
        // @font-face {
        //     font-family: 'noto';
        //     font-style: normal;
        //     font-weight: 200;
        //     src: url(../font/NotoSans-Light.eot);
        //     src: url(../font/NotoSans-Light.eot?#iefix) format('embedded-opentype'),
        //     url(../font/NotoSans-Light.woff2) format('woff2'),
        //     url(../font/NotoSans-Light.woff) format('woff');
        // }
        //
        //
        // @font-face {
        //     font-family: 'noto';
        //     font-style: normal;
        //     font-weight: 300;
        //     src: url(../font/NotoSans-DemiLight.eot);
        //     src: url(../font/NotoSans-DemiLight.eot?#iefix) format('embedded-opentype'),
        //     url(../font/NotoSans-DemiLight.woff2) format('woff2'),
        //     url(../font/NotoSans-DemiLight.woff) format('woff');
        // }
        //
        //
        // @font-face {
        //     font-family: 'noto';
        //     font-style: normal;
        //     font-weight: 400;
        //     src: url(../font/NotoSans-Regular.eot);
        //     src: url(../font/NotoSans-Regular.eot?#iefix) format('embedded-opentype'),
        //     url(../font/NotoSans-Regular.woff2) format('woff2'),
        //     url(../font/NotoSans-Regular.woff) format('woff');
        // }
        //
        //
        // @font-face {
        //     font-family: 'noto';
        //     font-style: normal;
        //     font-weight: 500;
        //     src: url(../font/NotoSans-Medium.eot);
        //     src: url(../font/NotoSans-Medium.eot?#iefix) format('embedded-opentype'),
        //     url(../font/NotoSans-Medium.woff2) format('woff2'),
        //     url(../font/NotoSans-Medium.woff) format('woff');
        // }
        //
        //
        // @font-face {
        //     font-family: 'noto';
        //     font-style: normal;
        //     font-weight: 600;
        //     src: url(../font/NotoSans-Bold.eot),
        //         url(../font/NotoSans-Bold.woff2) format('woff2'),
        //         url(../font/NotoSans-Bold.woff) format('woff');
        // }
        //
        // @font-face {
        //     font-family: 'noto';
        //     font-style: normal;
        //     font-weight: 700;
        //     src: url(../font/NotoSans-Black.eot);
        //     src: url(../font/NotoSans-Black.eot?#iefix) format('embedded-opentype'),
        //     url(../font/NotoSans-Black.woff2) format('woff2'),
        //     url(../font/NotoSans-Black.woff) format('woff');
        // }
`