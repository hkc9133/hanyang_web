import React from 'react';
import PageNavigation from "../../component/layout/PageNavigation";
import Link from 'next/link'
import Image from "next/image";
import styles from '../../public/assets/styles/startup_education/startup_education.module.css';
import classnames from "classnames/bind"
import BoardSkinSelector from "../../component/skin/board/BoardSkinSelector";
const cx = classnames.bind(styles);

const content  = {
    list:[
        {
            contentId:1,
            title:"Aaaa",
            content:"<p><br></p><h3><span class=\"ql-size-large\">에네이 클라우드를 활용하여 홈페이지를 제작하는 방법은 2가지가 있습니다.</span></h3><p><br></p><p>기본적인 호스팅 서비스와, 패키지 상품이 존재 합니다.</p><p>호스팅 서비스는 단순히 호스팅만을 제공하지만, 패키지 상품은 기존 템플릿에 웹디자인 작업을 통하여 고객의 요청에 맞게 커스트 마이징 하여 드립니다.</p><p><br></p><p><strong>패키지 상품 : </strong></p><p>모든 패키지상품의 프로젝트 진행은 에네이 클라우드의 프로젝트 메니저가 진행하며,</p><p>업무의 영역에 맞춰 자체 진행 또는 3rd 파트 참여자를 배정하여 진행합니다.</p><p><strong>모든 공정관리는 에네이에서 책임 집니다.</strong></p><p><br></p><p><br></p><p><br></p><p><a href=\"https://youtu.be/uI3COZqTcwU\" target=\"_blank\"><img src=\"https://210.103.188.124:4005/file/image/CONTENTIMG046f31cea65924e998792a0a28360fdf8.png\"></a></p><p><br></p><p><br></p><p><br></p><p><strong>1.홈페이지</strong></p><p><br></p><p>패키지 상품신청 하시면 홈페이지 구축을 위한 제반사항 부터 디자인변경까지 진행 됩니다.</p><p><br></p><p>웹호스팅</p><p>관리자페이지 :  로그인, 게시판관리, 대량문자송신,  로그인수집, </p><p>디자인 : </p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로고제작</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 메인 인페이지 디자인 1SET</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 서브 디자인 1SET JPG</span></p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로 제공하여 확인 할 수 있습니다.</span></p><p><span style=\"color: rgb(230, 0, 0);\">모두 서비스 신청한 요금으로 적용이 가능 합니다.</span></p><p><br></p><p><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">※ </span><span style=\"color: rgb(230, 0, 0);\">추가적인 작업문의에 대해서는 작업공수별로 별도의 비용을 협의하여 산정합니다.</span></p><p><br></p><p><br></p><p><br></p><p>ATYPE(커뮤니티), BTYPE(회사홈페이지),</p><p><br></p><p><br></p><p><br></p><p><strong>2.쇼핑몰</strong></p><p><br></p><p>패키지 상품신청 하시면 쇼핑몰 구축을 위한 제반사항 부터 디자인변경까지 진행합니다.</p><p><br></p><p> A TYPE ( 회사소개 + 쇼핑몰 )</p><p>간단한 회사소개 페이지와 제품을 구매 할 수 있는 기능을 제공합니다.  </p><p>관리자페이지에서 </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p>B TYPE (프리미엄 쇼핑몰)</p><p>알림, 문자, 이메일, 페이지를 연동하여 제공합니다. </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><strong>3. 이러닝사이트</strong></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>"
        },
        {
            contentId:2,
            title:"Aaaa2",
            content:"<p><br></p><h3><span class=\"ql-size-large\">에네이 클라우드를 활용하여 홈페이지를 제작하는 방법은 2가지가 있습니다.</span></h3><p><br></p><p>기본적인 호스팅 서비스와, 패키지 상품이 존재 합니다.</p><p>호스팅 서비스는 단순히 호스팅만을 제공하지만, 패키지 상품은 기존 템플릿에 웹디자인 작업을 통하여 고객의 요청에 맞게 커스트 마이징 하여 드립니다.</p><p><br></p><p><strong>패키지 상품 : </strong></p><p>모든 패키지상품의 프로젝트 진행은 에네이 클라우드의 프로젝트 메니저가 진행하며,</p><p>업무의 영역에 맞춰 자체 진행 또는 3rd 파트 참여자를 배정하여 진행합니다.</p><p><strong>모든 공정관리는 에네이에서 책임 집니다.</strong></p><p><br></p><p><br></p><p><br></p><p><a href=\"https://youtu.be/uI3COZqTcwU\" target=\"_blank\"><img src=\"https://210.103.188.124:4005/file/image/CONTENTIMG046f31cea65924e998792a0a28360fdf8.png\"></a></p><p><br></p><p><br></p><p><br></p><p><strong>1.홈페이지</strong></p><p><br></p><p>패키지 상품신청 하시면 홈페이지 구축을 위한 제반사항 부터 디자인변경까지 진행 됩니다.</p><p><br></p><p>웹호스팅</p><p>관리자페이지 :  로그인, 게시판관리, 대량문자송신,  로그인수집, </p><p>디자인 : </p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로고제작</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 메인 인페이지 디자인 1SET</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 서브 디자인 1SET JPG</span></p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로 제공하여 확인 할 수 있습니다.</span></p><p><span style=\"color: rgb(230, 0, 0);\">모두 서비스 신청한 요금으로 적용이 가능 합니다.</span></p><p><br></p><p><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">※ </span><span style=\"color: rgb(230, 0, 0);\">추가적인 작업문의에 대해서는 작업공수별로 별도의 비용을 협의하여 산정합니다.</span></p><p><br></p><p><br></p><p><br></p><p>ATYPE(커뮤니티), BTYPE(회사홈페이지),</p><p><br></p><p><br></p><p><br></p><p><strong>2.쇼핑몰</strong></p><p><br></p><p>패키지 상품신청 하시면 쇼핑몰 구축을 위한 제반사항 부터 디자인변경까지 진행합니다.</p><p><br></p><p> A TYPE ( 회사소개 + 쇼핑몰 )</p><p>간단한 회사소개 페이지와 제품을 구매 할 수 있는 기능을 제공합니다.  </p><p>관리자페이지에서 </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p>B TYPE (프리미엄 쇼핑몰)</p><p>알림, 문자, 이메일, 페이지를 연동하여 제공합니다. </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><strong>3. 이러닝사이트</strong></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>"
        },
        {
            contentId:3,
            title:"Aaaa3",
            content:"<p><br></p><h3><span class=\"ql-size-large\">에네이 클라우드를 활용하여 홈페이지를 제작하는 방법은 2가지가 있습니다.</span></h3><p><br></p><p>기본적인 호스팅 서비스와, 패키지 상품이 존재 합니다.</p><p>호스팅 서비스는 단순히 호스팅만을 제공하지만, 패키지 상품은 기존 템플릿에 웹디자인 작업을 통하여 고객의 요청에 맞게 커스트 마이징 하여 드립니다.</p><p><br></p><p><strong>패키지 상품 : </strong></p><p>모든 패키지상품의 프로젝트 진행은 에네이 클라우드의 프로젝트 메니저가 진행하며,</p><p>업무의 영역에 맞춰 자체 진행 또는 3rd 파트 참여자를 배정하여 진행합니다.</p><p><strong>모든 공정관리는 에네이에서 책임 집니다.</strong></p><p><br></p><p><br></p><p><br></p><p><a href=\"https://youtu.be/uI3COZqTcwU\" target=\"_blank\"><img src=\"https://210.103.188.124:4005/file/image/CONTENTIMG046f31cea65924e998792a0a28360fdf8.png\"></a></p><p><br></p><p><br></p><p><br></p><p><strong>1.홈페이지</strong></p><p><br></p><p>패키지 상품신청 하시면 홈페이지 구축을 위한 제반사항 부터 디자인변경까지 진행 됩니다.</p><p><br></p><p>웹호스팅</p><p>관리자페이지 :  로그인, 게시판관리, 대량문자송신,  로그인수집, </p><p>디자인 : </p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로고제작</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 메인 인페이지 디자인 1SET</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 서브 디자인 1SET JPG</span></p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로 제공하여 확인 할 수 있습니다.</span></p><p><span style=\"color: rgb(230, 0, 0);\">모두 서비스 신청한 요금으로 적용이 가능 합니다.</span></p><p><br></p><p><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">※ </span><span style=\"color: rgb(230, 0, 0);\">추가적인 작업문의에 대해서는 작업공수별로 별도의 비용을 협의하여 산정합니다.</span></p><p><br></p><p><br></p><p><br></p><p>ATYPE(커뮤니티), BTYPE(회사홈페이지),</p><p><br></p><p><br></p><p><br></p><p><strong>2.쇼핑몰</strong></p><p><br></p><p>패키지 상품신청 하시면 쇼핑몰 구축을 위한 제반사항 부터 디자인변경까지 진행합니다.</p><p><br></p><p> A TYPE ( 회사소개 + 쇼핑몰 )</p><p>간단한 회사소개 페이지와 제품을 구매 할 수 있는 기능을 제공합니다.  </p><p>관리자페이지에서 </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p>B TYPE (프리미엄 쇼핑몰)</p><p>알림, 문자, 이메일, 페이지를 연동하여 제공합니다. </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><strong>3. 이러닝사이트</strong></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>"
        },
        {
            contentId:4,
            title:"Aaaa4",
            content:"<p><br></p><h3><span class=\"ql-size-large\">에네이 클라우드를 활용하여 홈페이지를 제작하는 방법은 2가지가 있습니다.</span></h3><p><br></p><p>기본적인 호스팅 서비스와, 패키지 상품이 존재 합니다.</p><p>호스팅 서비스는 단순히 호스팅만을 제공하지만, 패키지 상품은 기존 템플릿에 웹디자인 작업을 통하여 고객의 요청에 맞게 커스트 마이징 하여 드립니다.</p><p><br></p><p><strong>패키지 상품 : </strong></p><p>모든 패키지상품의 프로젝트 진행은 에네이 클라우드의 프로젝트 메니저가 진행하며,</p><p>업무의 영역에 맞춰 자체 진행 또는 3rd 파트 참여자를 배정하여 진행합니다.</p><p><strong>모든 공정관리는 에네이에서 책임 집니다.</strong></p><p><br></p><p><br></p><p><br></p><p><a href=\"https://youtu.be/uI3COZqTcwU\" target=\"_blank\"><img src=\"https://210.103.188.124:4005/file/image/CONTENTIMG046f31cea65924e998792a0a28360fdf8.png\"></a></p><p><br></p><p><br></p><p><br></p><p><strong>1.홈페이지</strong></p><p><br></p><p>패키지 상품신청 하시면 홈페이지 구축을 위한 제반사항 부터 디자인변경까지 진행 됩니다.</p><p><br></p><p>웹호스팅</p><p>관리자페이지 :  로그인, 게시판관리, 대량문자송신,  로그인수집, </p><p>디자인 : </p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로고제작</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 메인 인페이지 디자인 1SET</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 서브 디자인 1SET JPG</span></p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로 제공하여 확인 할 수 있습니다.</span></p><p><span style=\"color: rgb(230, 0, 0);\">모두 서비스 신청한 요금으로 적용이 가능 합니다.</span></p><p><br></p><p><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">※ </span><span style=\"color: rgb(230, 0, 0);\">추가적인 작업문의에 대해서는 작업공수별로 별도의 비용을 협의하여 산정합니다.</span></p><p><br></p><p><br></p><p><br></p><p>ATYPE(커뮤니티), BTYPE(회사홈페이지),</p><p><br></p><p><br></p><p><br></p><p><strong>2.쇼핑몰</strong></p><p><br></p><p>패키지 상품신청 하시면 쇼핑몰 구축을 위한 제반사항 부터 디자인변경까지 진행합니다.</p><p><br></p><p> A TYPE ( 회사소개 + 쇼핑몰 )</p><p>간단한 회사소개 페이지와 제품을 구매 할 수 있는 기능을 제공합니다.  </p><p>관리자페이지에서 </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p>B TYPE (프리미엄 쇼핑몰)</p><p>알림, 문자, 이메일, 페이지를 연동하여 제공합니다. </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><strong>3. 이러닝사이트</strong></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>"
        },
        {
            contentId:5,
            title:"Aaaa5",
            content:"<p><br></p><h3><span class=\"ql-size-large\">에네이 클라우드를 활용하여 홈페이지를 제작하는 방법은 2가지가 있습니다.</span></h3><p><br></p><p>기본적인 호스팅 서비스와, 패키지 상품이 존재 합니다.</p><p>호스팅 서비스는 단순히 호스팅만을 제공하지만, 패키지 상품은 기존 템플릿에 웹디자인 작업을 통하여 고객의 요청에 맞게 커스트 마이징 하여 드립니다.</p><p><br></p><p><strong>패키지 상품 : </strong></p><p>모든 패키지상품의 프로젝트 진행은 에네이 클라우드의 프로젝트 메니저가 진행하며,</p><p>업무의 영역에 맞춰 자체 진행 또는 3rd 파트 참여자를 배정하여 진행합니다.</p><p><strong>모든 공정관리는 에네이에서 책임 집니다.</strong></p><p><br></p><p><br></p><p><br></p><p><a href=\"https://youtu.be/uI3COZqTcwU\" target=\"_blank\"><img src=\"https://210.103.188.124:4005/file/image/CONTENTIMG046f31cea65924e998792a0a28360fdf8.png\"></a></p><p><br></p><p><br></p><p><br></p><p><strong>1.홈페이지</strong></p><p><br></p><p>패키지 상품신청 하시면 홈페이지 구축을 위한 제반사항 부터 디자인변경까지 진행 됩니다.</p><p><br></p><p>웹호스팅</p><p>관리자페이지 :  로그인, 게시판관리, 대량문자송신,  로그인수집, </p><p>디자인 : </p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로고제작</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 메인 인페이지 디자인 1SET</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 서브 디자인 1SET JPG</span></p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로 제공하여 확인 할 수 있습니다.</span></p><p><span style=\"color: rgb(230, 0, 0);\">모두 서비스 신청한 요금으로 적용이 가능 합니다.</span></p><p><br></p><p><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">※ </span><span style=\"color: rgb(230, 0, 0);\">추가적인 작업문의에 대해서는 작업공수별로 별도의 비용을 협의하여 산정합니다.</span></p><p><br></p><p><br></p><p><br></p><p>ATYPE(커뮤니티), BTYPE(회사홈페이지),</p><p><br></p><p><br></p><p><br></p><p><strong>2.쇼핑몰</strong></p><p><br></p><p>패키지 상품신청 하시면 쇼핑몰 구축을 위한 제반사항 부터 디자인변경까지 진행합니다.</p><p><br></p><p> A TYPE ( 회사소개 + 쇼핑몰 )</p><p>간단한 회사소개 페이지와 제품을 구매 할 수 있는 기능을 제공합니다.  </p><p>관리자페이지에서 </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p>B TYPE (프리미엄 쇼핑몰)</p><p>알림, 문자, 이메일, 페이지를 연동하여 제공합니다. </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><strong>3. 이러닝사이트</strong></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>"
        },
        {
            contentId:6,
            title:"Aaaa4",
            content:"<p><br></p><h3><span class=\"ql-size-large\">에네이 클라우드를 활용하여 홈페이지를 제작하는 방법은 2가지가 있습니다.</span></h3><p><br></p><p>기본적인 호스팅 서비스와, 패키지 상품이 존재 합니다.</p><p>호스팅 서비스는 단순히 호스팅만을 제공하지만, 패키지 상품은 기존 템플릿에 웹디자인 작업을 통하여 고객의 요청에 맞게 커스트 마이징 하여 드립니다.</p><p><br></p><p><strong>패키지 상품 : </strong></p><p>모든 패키지상품의 프로젝트 진행은 에네이 클라우드의 프로젝트 메니저가 진행하며,</p><p>업무의 영역에 맞춰 자체 진행 또는 3rd 파트 참여자를 배정하여 진행합니다.</p><p><strong>모든 공정관리는 에네이에서 책임 집니다.</strong></p><p><br></p><p><br></p><p><br></p><p><a href=\"https://youtu.be/uI3COZqTcwU\" target=\"_blank\"><img src=\"https://210.103.188.124:4005/file/image/CONTENTIMG046f31cea65924e998792a0a28360fdf8.png\"></a></p><p><br></p><p><br></p><p><br></p><p><strong>1.홈페이지</strong></p><p><br></p><p>패키지 상품신청 하시면 홈페이지 구축을 위한 제반사항 부터 디자인변경까지 진행 됩니다.</p><p><br></p><p>웹호스팅</p><p>관리자페이지 :  로그인, 게시판관리, 대량문자송신,  로그인수집, </p><p>디자인 : </p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로고제작</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 메인 인페이지 디자인 1SET</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 서브 디자인 1SET JPG</span></p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로 제공하여 확인 할 수 있습니다.</span></p><p><span style=\"color: rgb(230, 0, 0);\">모두 서비스 신청한 요금으로 적용이 가능 합니다.</span></p><p><br></p><p><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">※ </span><span style=\"color: rgb(230, 0, 0);\">추가적인 작업문의에 대해서는 작업공수별로 별도의 비용을 협의하여 산정합니다.</span></p><p><br></p><p><br></p><p><br></p><p>ATYPE(커뮤니티), BTYPE(회사홈페이지),</p><p><br></p><p><br></p><p><br></p><p><strong>2.쇼핑몰</strong></p><p><br></p><p>패키지 상품신청 하시면 쇼핑몰 구축을 위한 제반사항 부터 디자인변경까지 진행합니다.</p><p><br></p><p> A TYPE ( 회사소개 + 쇼핑몰 )</p><p>간단한 회사소개 페이지와 제품을 구매 할 수 있는 기능을 제공합니다.  </p><p>관리자페이지에서 </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p>B TYPE (프리미엄 쇼핑몰)</p><p>알림, 문자, 이메일, 페이지를 연동하여 제공합니다. </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><strong>3. 이러닝사이트</strong></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>"
        },
        {
            contentId:7,
            title:"Aaaa5",
            content:"<p><br></p><h3><span class=\"ql-size-large\">에네이 클라우드를 활용하여 홈페이지를 제작하는 방법은 2가지가 있습니다.</span></h3><p><br></p><p>기본적인 호스팅 서비스와, 패키지 상품이 존재 합니다.</p><p>호스팅 서비스는 단순히 호스팅만을 제공하지만, 패키지 상품은 기존 템플릿에 웹디자인 작업을 통하여 고객의 요청에 맞게 커스트 마이징 하여 드립니다.</p><p><br></p><p><strong>패키지 상품 : </strong></p><p>모든 패키지상품의 프로젝트 진행은 에네이 클라우드의 프로젝트 메니저가 진행하며,</p><p>업무의 영역에 맞춰 자체 진행 또는 3rd 파트 참여자를 배정하여 진행합니다.</p><p><strong>모든 공정관리는 에네이에서 책임 집니다.</strong></p><p><br></p><p><br></p><p><br></p><p><a href=\"https://youtu.be/uI3COZqTcwU\" target=\"_blank\"><img src=\"https://210.103.188.124:4005/file/image/CONTENTIMG046f31cea65924e998792a0a28360fdf8.png\"></a></p><p><br></p><p><br></p><p><br></p><p><strong>1.홈페이지</strong></p><p><br></p><p>패키지 상품신청 하시면 홈페이지 구축을 위한 제반사항 부터 디자인변경까지 진행 됩니다.</p><p><br></p><p>웹호스팅</p><p>관리자페이지 :  로그인, 게시판관리, 대량문자송신,  로그인수집, </p><p>디자인 : </p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로고제작</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 메인 인페이지 디자인 1SET</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 서브 디자인 1SET JPG</span></p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로 제공하여 확인 할 수 있습니다.</span></p><p><span style=\"color: rgb(230, 0, 0);\">모두 서비스 신청한 요금으로 적용이 가능 합니다.</span></p><p><br></p><p><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">※ </span><span style=\"color: rgb(230, 0, 0);\">추가적인 작업문의에 대해서는 작업공수별로 별도의 비용을 협의하여 산정합니다.</span></p><p><br></p><p><br></p><p><br></p><p>ATYPE(커뮤니티), BTYPE(회사홈페이지),</p><p><br></p><p><br></p><p><br></p><p><strong>2.쇼핑몰</strong></p><p><br></p><p>패키지 상품신청 하시면 쇼핑몰 구축을 위한 제반사항 부터 디자인변경까지 진행합니다.</p><p><br></p><p> A TYPE ( 회사소개 + 쇼핑몰 )</p><p>간단한 회사소개 페이지와 제품을 구매 할 수 있는 기능을 제공합니다.  </p><p>관리자페이지에서 </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p>B TYPE (프리미엄 쇼핑몰)</p><p>알림, 문자, 이메일, 페이지를 연동하여 제공합니다. </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><strong>3. 이러닝사이트</strong></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>"
        },
        {
            contentId:8,
            title:"Aaaa4",
            content:"<p><br></p><h3><span class=\"ql-size-large\">에네이 클라우드를 활용하여 홈페이지를 제작하는 방법은 2가지가 있습니다.</span></h3><p><br></p><p>기본적인 호스팅 서비스와, 패키지 상품이 존재 합니다.</p><p>호스팅 서비스는 단순히 호스팅만을 제공하지만, 패키지 상품은 기존 템플릿에 웹디자인 작업을 통하여 고객의 요청에 맞게 커스트 마이징 하여 드립니다.</p><p><br></p><p><strong>패키지 상품 : </strong></p><p>모든 패키지상품의 프로젝트 진행은 에네이 클라우드의 프로젝트 메니저가 진행하며,</p><p>업무의 영역에 맞춰 자체 진행 또는 3rd 파트 참여자를 배정하여 진행합니다.</p><p><strong>모든 공정관리는 에네이에서 책임 집니다.</strong></p><p><br></p><p><br></p><p><br></p><p><a href=\"https://youtu.be/uI3COZqTcwU\" target=\"_blank\"><img src=\"https://210.103.188.124:4005/file/image/CONTENTIMG046f31cea65924e998792a0a28360fdf8.png\"></a></p><p><br></p><p><br></p><p><br></p><p><strong>1.홈페이지</strong></p><p><br></p><p>패키지 상품신청 하시면 홈페이지 구축을 위한 제반사항 부터 디자인변경까지 진행 됩니다.</p><p><br></p><p>웹호스팅</p><p>관리자페이지 :  로그인, 게시판관리, 대량문자송신,  로그인수집, </p><p>디자인 : </p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로고제작</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 메인 인페이지 디자인 1SET</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 서브 디자인 1SET JPG</span></p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로 제공하여 확인 할 수 있습니다.</span></p><p><span style=\"color: rgb(230, 0, 0);\">모두 서비스 신청한 요금으로 적용이 가능 합니다.</span></p><p><br></p><p><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">※ </span><span style=\"color: rgb(230, 0, 0);\">추가적인 작업문의에 대해서는 작업공수별로 별도의 비용을 협의하여 산정합니다.</span></p><p><br></p><p><br></p><p><br></p><p>ATYPE(커뮤니티), BTYPE(회사홈페이지),</p><p><br></p><p><br></p><p><br></p><p><strong>2.쇼핑몰</strong></p><p><br></p><p>패키지 상품신청 하시면 쇼핑몰 구축을 위한 제반사항 부터 디자인변경까지 진행합니다.</p><p><br></p><p> A TYPE ( 회사소개 + 쇼핑몰 )</p><p>간단한 회사소개 페이지와 제품을 구매 할 수 있는 기능을 제공합니다.  </p><p>관리자페이지에서 </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p>B TYPE (프리미엄 쇼핑몰)</p><p>알림, 문자, 이메일, 페이지를 연동하여 제공합니다. </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><strong>3. 이러닝사이트</strong></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>"
        },
        {
            contentId:9,
            title:"Aaaa5",
            content:"<p><br></p><h3><span class=\"ql-size-large\">에네이 클라우드를 활용하여 홈페이지를 제작하는 방법은 2가지가 있습니다.</span></h3><p><br></p><p>기본적인 호스팅 서비스와, 패키지 상품이 존재 합니다.</p><p>호스팅 서비스는 단순히 호스팅만을 제공하지만, 패키지 상품은 기존 템플릿에 웹디자인 작업을 통하여 고객의 요청에 맞게 커스트 마이징 하여 드립니다.</p><p><br></p><p><strong>패키지 상품 : </strong></p><p>모든 패키지상품의 프로젝트 진행은 에네이 클라우드의 프로젝트 메니저가 진행하며,</p><p>업무의 영역에 맞춰 자체 진행 또는 3rd 파트 참여자를 배정하여 진행합니다.</p><p><strong>모든 공정관리는 에네이에서 책임 집니다.</strong></p><p><br></p><p><br></p><p><br></p><p><a href=\"https://youtu.be/uI3COZqTcwU\" target=\"_blank\"><img src=\"https://210.103.188.124:4005/file/image/CONTENTIMG046f31cea65924e998792a0a28360fdf8.png\"></a></p><p><br></p><p><br></p><p><br></p><p><strong>1.홈페이지</strong></p><p><br></p><p>패키지 상품신청 하시면 홈페이지 구축을 위한 제반사항 부터 디자인변경까지 진행 됩니다.</p><p><br></p><p>웹호스팅</p><p>관리자페이지 :  로그인, 게시판관리, 대량문자송신,  로그인수집, </p><p>디자인 : </p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로고제작</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 메인 인페이지 디자인 1SET</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 서브 디자인 1SET JPG</span></p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로 제공하여 확인 할 수 있습니다.</span></p><p><span style=\"color: rgb(230, 0, 0);\">모두 서비스 신청한 요금으로 적용이 가능 합니다.</span></p><p><br></p><p><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">※ </span><span style=\"color: rgb(230, 0, 0);\">추가적인 작업문의에 대해서는 작업공수별로 별도의 비용을 협의하여 산정합니다.</span></p><p><br></p><p><br></p><p><br></p><p>ATYPE(커뮤니티), BTYPE(회사홈페이지),</p><p><br></p><p><br></p><p><br></p><p><strong>2.쇼핑몰</strong></p><p><br></p><p>패키지 상품신청 하시면 쇼핑몰 구축을 위한 제반사항 부터 디자인변경까지 진행합니다.</p><p><br></p><p> A TYPE ( 회사소개 + 쇼핑몰 )</p><p>간단한 회사소개 페이지와 제품을 구매 할 수 있는 기능을 제공합니다.  </p><p>관리자페이지에서 </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p>B TYPE (프리미엄 쇼핑몰)</p><p>알림, 문자, 이메일, 페이지를 연동하여 제공합니다. </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><strong>3. 이러닝사이트</strong></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>"
        },
        // {
        //     contentId:10,
        //     title:"Aaaa4",
        //     content:"<p><br></p><h3><span class=\"ql-size-large\">에네이 클라우드를 활용하여 홈페이지를 제작하는 방법은 2가지가 있습니다.</span></h3><p><br></p><p>기본적인 호스팅 서비스와, 패키지 상품이 존재 합니다.</p><p>호스팅 서비스는 단순히 호스팅만을 제공하지만, 패키지 상품은 기존 템플릿에 웹디자인 작업을 통하여 고객의 요청에 맞게 커스트 마이징 하여 드립니다.</p><p><br></p><p><strong>패키지 상품 : </strong></p><p>모든 패키지상품의 프로젝트 진행은 에네이 클라우드의 프로젝트 메니저가 진행하며,</p><p>업무의 영역에 맞춰 자체 진행 또는 3rd 파트 참여자를 배정하여 진행합니다.</p><p><strong>모든 공정관리는 에네이에서 책임 집니다.</strong></p><p><br></p><p><br></p><p><br></p><p><a href=\"https://youtu.be/uI3COZqTcwU\" target=\"_blank\"><img src=\"https://210.103.188.124:4005/file/image/CONTENTIMG046f31cea65924e998792a0a28360fdf8.png\"></a></p><p><br></p><p><br></p><p><br></p><p><strong>1.홈페이지</strong></p><p><br></p><p>패키지 상품신청 하시면 홈페이지 구축을 위한 제반사항 부터 디자인변경까지 진행 됩니다.</p><p><br></p><p>웹호스팅</p><p>관리자페이지 :  로그인, 게시판관리, 대량문자송신,  로그인수집, </p><p>디자인 : </p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로고제작</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 메인 인페이지 디자인 1SET</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 서브 디자인 1SET JPG</span></p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로 제공하여 확인 할 수 있습니다.</span></p><p><span style=\"color: rgb(230, 0, 0);\">모두 서비스 신청한 요금으로 적용이 가능 합니다.</span></p><p><br></p><p><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">※ </span><span style=\"color: rgb(230, 0, 0);\">추가적인 작업문의에 대해서는 작업공수별로 별도의 비용을 협의하여 산정합니다.</span></p><p><br></p><p><br></p><p><br></p><p>ATYPE(커뮤니티), BTYPE(회사홈페이지),</p><p><br></p><p><br></p><p><br></p><p><strong>2.쇼핑몰</strong></p><p><br></p><p>패키지 상품신청 하시면 쇼핑몰 구축을 위한 제반사항 부터 디자인변경까지 진행합니다.</p><p><br></p><p> A TYPE ( 회사소개 + 쇼핑몰 )</p><p>간단한 회사소개 페이지와 제품을 구매 할 수 있는 기능을 제공합니다.  </p><p>관리자페이지에서 </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p>B TYPE (프리미엄 쇼핑몰)</p><p>알림, 문자, 이메일, 페이지를 연동하여 제공합니다. </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><strong>3. 이러닝사이트</strong></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>"
        // },
        // {
        //     contentId:11,
        //     title:"Aaaa5",
        //     content:"<p><br></p><h3><span class=\"ql-size-large\">에네이 클라우드를 활용하여 홈페이지를 제작하는 방법은 2가지가 있습니다.</span></h3><p><br></p><p>기본적인 호스팅 서비스와, 패키지 상품이 존재 합니다.</p><p>호스팅 서비스는 단순히 호스팅만을 제공하지만, 패키지 상품은 기존 템플릿에 웹디자인 작업을 통하여 고객의 요청에 맞게 커스트 마이징 하여 드립니다.</p><p><br></p><p><strong>패키지 상품 : </strong></p><p>모든 패키지상품의 프로젝트 진행은 에네이 클라우드의 프로젝트 메니저가 진행하며,</p><p>업무의 영역에 맞춰 자체 진행 또는 3rd 파트 참여자를 배정하여 진행합니다.</p><p><strong>모든 공정관리는 에네이에서 책임 집니다.</strong></p><p><br></p><p><br></p><p><br></p><p><a href=\"https://youtu.be/uI3COZqTcwU\" target=\"_blank\"><img src=\"https://210.103.188.124:4005/file/image/CONTENTIMG046f31cea65924e998792a0a28360fdf8.png\"></a></p><p><br></p><p><br></p><p><br></p><p><strong>1.홈페이지</strong></p><p><br></p><p>패키지 상품신청 하시면 홈페이지 구축을 위한 제반사항 부터 디자인변경까지 진행 됩니다.</p><p><br></p><p>웹호스팅</p><p>관리자페이지 :  로그인, 게시판관리, 대량문자송신,  로그인수집, </p><p>디자인 : </p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로고제작</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 메인 인페이지 디자인 1SET</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 서브 디자인 1SET JPG</span></p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로 제공하여 확인 할 수 있습니다.</span></p><p><span style=\"color: rgb(230, 0, 0);\">모두 서비스 신청한 요금으로 적용이 가능 합니다.</span></p><p><br></p><p><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">※ </span><span style=\"color: rgb(230, 0, 0);\">추가적인 작업문의에 대해서는 작업공수별로 별도의 비용을 협의하여 산정합니다.</span></p><p><br></p><p><br></p><p><br></p><p>ATYPE(커뮤니티), BTYPE(회사홈페이지),</p><p><br></p><p><br></p><p><br></p><p><strong>2.쇼핑몰</strong></p><p><br></p><p>패키지 상품신청 하시면 쇼핑몰 구축을 위한 제반사항 부터 디자인변경까지 진행합니다.</p><p><br></p><p> A TYPE ( 회사소개 + 쇼핑몰 )</p><p>간단한 회사소개 페이지와 제품을 구매 할 수 있는 기능을 제공합니다.  </p><p>관리자페이지에서 </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p>B TYPE (프리미엄 쇼핑몰)</p><p>알림, 문자, 이메일, 페이지를 연동하여 제공합니다. </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><strong>3. 이러닝사이트</strong></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>"
        // },
        // {
        //     contentId:12,
        //     title:"Aaaa4",
        //     content:"<p><br></p><h3><span class=\"ql-size-large\">에네이 클라우드를 활용하여 홈페이지를 제작하는 방법은 2가지가 있습니다.</span></h3><p><br></p><p>기본적인 호스팅 서비스와, 패키지 상품이 존재 합니다.</p><p>호스팅 서비스는 단순히 호스팅만을 제공하지만, 패키지 상품은 기존 템플릿에 웹디자인 작업을 통하여 고객의 요청에 맞게 커스트 마이징 하여 드립니다.</p><p><br></p><p><strong>패키지 상품 : </strong></p><p>모든 패키지상품의 프로젝트 진행은 에네이 클라우드의 프로젝트 메니저가 진행하며,</p><p>업무의 영역에 맞춰 자체 진행 또는 3rd 파트 참여자를 배정하여 진행합니다.</p><p><strong>모든 공정관리는 에네이에서 책임 집니다.</strong></p><p><br></p><p><br></p><p><br></p><p><a href=\"https://youtu.be/uI3COZqTcwU\" target=\"_blank\"><img src=\"https://210.103.188.124:4005/file/image/CONTENTIMG046f31cea65924e998792a0a28360fdf8.png\"></a></p><p><br></p><p><br></p><p><br></p><p><strong>1.홈페이지</strong></p><p><br></p><p>패키지 상품신청 하시면 홈페이지 구축을 위한 제반사항 부터 디자인변경까지 진행 됩니다.</p><p><br></p><p>웹호스팅</p><p>관리자페이지 :  로그인, 게시판관리, 대량문자송신,  로그인수집, </p><p>디자인 : </p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로고제작</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 메인 인페이지 디자인 1SET</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 서브 디자인 1SET JPG</span></p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로 제공하여 확인 할 수 있습니다.</span></p><p><span style=\"color: rgb(230, 0, 0);\">모두 서비스 신청한 요금으로 적용이 가능 합니다.</span></p><p><br></p><p><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">※ </span><span style=\"color: rgb(230, 0, 0);\">추가적인 작업문의에 대해서는 작업공수별로 별도의 비용을 협의하여 산정합니다.</span></p><p><br></p><p><br></p><p><br></p><p>ATYPE(커뮤니티), BTYPE(회사홈페이지),</p><p><br></p><p><br></p><p><br></p><p><strong>2.쇼핑몰</strong></p><p><br></p><p>패키지 상품신청 하시면 쇼핑몰 구축을 위한 제반사항 부터 디자인변경까지 진행합니다.</p><p><br></p><p> A TYPE ( 회사소개 + 쇼핑몰 )</p><p>간단한 회사소개 페이지와 제품을 구매 할 수 있는 기능을 제공합니다.  </p><p>관리자페이지에서 </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p>B TYPE (프리미엄 쇼핑몰)</p><p>알림, 문자, 이메일, 페이지를 연동하여 제공합니다. </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><strong>3. 이러닝사이트</strong></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>"
        // },
        // {
        //     contentId:13,
        //     title:"Aaaa5",
        //     content:"<p><br></p><h3><span class=\"ql-size-large\">에네이 클라우드를 활용하여 홈페이지를 제작하는 방법은 2가지가 있습니다.</span></h3><p><br></p><p>기본적인 호스팅 서비스와, 패키지 상품이 존재 합니다.</p><p>호스팅 서비스는 단순히 호스팅만을 제공하지만, 패키지 상품은 기존 템플릿에 웹디자인 작업을 통하여 고객의 요청에 맞게 커스트 마이징 하여 드립니다.</p><p><br></p><p><strong>패키지 상품 : </strong></p><p>모든 패키지상품의 프로젝트 진행은 에네이 클라우드의 프로젝트 메니저가 진행하며,</p><p>업무의 영역에 맞춰 자체 진행 또는 3rd 파트 참여자를 배정하여 진행합니다.</p><p><strong>모든 공정관리는 에네이에서 책임 집니다.</strong></p><p><br></p><p><br></p><p><br></p><p><a href=\"https://youtu.be/uI3COZqTcwU\" target=\"_blank\"><img src=\"https://210.103.188.124:4005/file/image/CONTENTIMG046f31cea65924e998792a0a28360fdf8.png\"></a></p><p><br></p><p><br></p><p><br></p><p><strong>1.홈페이지</strong></p><p><br></p><p>패키지 상품신청 하시면 홈페이지 구축을 위한 제반사항 부터 디자인변경까지 진행 됩니다.</p><p><br></p><p>웹호스팅</p><p>관리자페이지 :  로그인, 게시판관리, 대량문자송신,  로그인수집, </p><p>디자인 : </p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로고제작</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 메인 인페이지 디자인 1SET</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 서브 디자인 1SET JPG</span></p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로 제공하여 확인 할 수 있습니다.</span></p><p><span style=\"color: rgb(230, 0, 0);\">모두 서비스 신청한 요금으로 적용이 가능 합니다.</span></p><p><br></p><p><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">※ </span><span style=\"color: rgb(230, 0, 0);\">추가적인 작업문의에 대해서는 작업공수별로 별도의 비용을 협의하여 산정합니다.</span></p><p><br></p><p><br></p><p><br></p><p>ATYPE(커뮤니티), BTYPE(회사홈페이지),</p><p><br></p><p><br></p><p><br></p><p><strong>2.쇼핑몰</strong></p><p><br></p><p>패키지 상품신청 하시면 쇼핑몰 구축을 위한 제반사항 부터 디자인변경까지 진행합니다.</p><p><br></p><p> A TYPE ( 회사소개 + 쇼핑몰 )</p><p>간단한 회사소개 페이지와 제품을 구매 할 수 있는 기능을 제공합니다.  </p><p>관리자페이지에서 </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p>B TYPE (프리미엄 쇼핑몰)</p><p>알림, 문자, 이메일, 페이지를 연동하여 제공합니다. </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><strong>3. 이러닝사이트</strong></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>"
        // },
        // {
        //     contentId:14,
        //     title:"Aaaa4",
        //     content:"<p><br></p><h3><span class=\"ql-size-large\">에네이 클라우드를 활용하여 홈페이지를 제작하는 방법은 2가지가 있습니다.</span></h3><p><br></p><p>기본적인 호스팅 서비스와, 패키지 상품이 존재 합니다.</p><p>호스팅 서비스는 단순히 호스팅만을 제공하지만, 패키지 상품은 기존 템플릿에 웹디자인 작업을 통하여 고객의 요청에 맞게 커스트 마이징 하여 드립니다.</p><p><br></p><p><strong>패키지 상품 : </strong></p><p>모든 패키지상품의 프로젝트 진행은 에네이 클라우드의 프로젝트 메니저가 진행하며,</p><p>업무의 영역에 맞춰 자체 진행 또는 3rd 파트 참여자를 배정하여 진행합니다.</p><p><strong>모든 공정관리는 에네이에서 책임 집니다.</strong></p><p><br></p><p><br></p><p><br></p><p><a href=\"https://youtu.be/uI3COZqTcwU\" target=\"_blank\"><img src=\"https://210.103.188.124:4005/file/image/CONTENTIMG046f31cea65924e998792a0a28360fdf8.png\"></a></p><p><br></p><p><br></p><p><br></p><p><strong>1.홈페이지</strong></p><p><br></p><p>패키지 상품신청 하시면 홈페이지 구축을 위한 제반사항 부터 디자인변경까지 진행 됩니다.</p><p><br></p><p>웹호스팅</p><p>관리자페이지 :  로그인, 게시판관리, 대량문자송신,  로그인수집, </p><p>디자인 : </p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로고제작</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 메인 인페이지 디자인 1SET</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 서브 디자인 1SET JPG</span></p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로 제공하여 확인 할 수 있습니다.</span></p><p><span style=\"color: rgb(230, 0, 0);\">모두 서비스 신청한 요금으로 적용이 가능 합니다.</span></p><p><br></p><p><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">※ </span><span style=\"color: rgb(230, 0, 0);\">추가적인 작업문의에 대해서는 작업공수별로 별도의 비용을 협의하여 산정합니다.</span></p><p><br></p><p><br></p><p><br></p><p>ATYPE(커뮤니티), BTYPE(회사홈페이지),</p><p><br></p><p><br></p><p><br></p><p><strong>2.쇼핑몰</strong></p><p><br></p><p>패키지 상품신청 하시면 쇼핑몰 구축을 위한 제반사항 부터 디자인변경까지 진행합니다.</p><p><br></p><p> A TYPE ( 회사소개 + 쇼핑몰 )</p><p>간단한 회사소개 페이지와 제품을 구매 할 수 있는 기능을 제공합니다.  </p><p>관리자페이지에서 </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p>B TYPE (프리미엄 쇼핑몰)</p><p>알림, 문자, 이메일, 페이지를 연동하여 제공합니다. </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><strong>3. 이러닝사이트</strong></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>"
        // },
        // {
        //     contentId:15,
        //     title:"Aaaa5",
        //     content:"<p><br></p><h3><span class=\"ql-size-large\">에네이 클라우드를 활용하여 홈페이지를 제작하는 방법은 2가지가 있습니다.</span></h3><p><br></p><p>기본적인 호스팅 서비스와, 패키지 상품이 존재 합니다.</p><p>호스팅 서비스는 단순히 호스팅만을 제공하지만, 패키지 상품은 기존 템플릿에 웹디자인 작업을 통하여 고객의 요청에 맞게 커스트 마이징 하여 드립니다.</p><p><br></p><p><strong>패키지 상품 : </strong></p><p>모든 패키지상품의 프로젝트 진행은 에네이 클라우드의 프로젝트 메니저가 진행하며,</p><p>업무의 영역에 맞춰 자체 진행 또는 3rd 파트 참여자를 배정하여 진행합니다.</p><p><strong>모든 공정관리는 에네이에서 책임 집니다.</strong></p><p><br></p><p><br></p><p><br></p><p><a href=\"https://youtu.be/uI3COZqTcwU\" target=\"_blank\"><img src=\"https://210.103.188.124:4005/file/image/CONTENTIMG046f31cea65924e998792a0a28360fdf8.png\"></a></p><p><br></p><p><br></p><p><br></p><p><strong>1.홈페이지</strong></p><p><br></p><p>패키지 상품신청 하시면 홈페이지 구축을 위한 제반사항 부터 디자인변경까지 진행 됩니다.</p><p><br></p><p>웹호스팅</p><p>관리자페이지 :  로그인, 게시판관리, 대량문자송신,  로그인수집, </p><p>디자인 : </p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로고제작</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 메인 인페이지 디자인 1SET</span></p><p><span style=\"color: rgb(230, 0, 0);\">PC 서브 디자인 1SET JPG</span></p><p><br></p><p><span style=\"color: rgb(230, 0, 0);\">로 제공하여 확인 할 수 있습니다.</span></p><p><span style=\"color: rgb(230, 0, 0);\">모두 서비스 신청한 요금으로 적용이 가능 합니다.</span></p><p><br></p><p><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">※ </span><span style=\"color: rgb(230, 0, 0);\">추가적인 작업문의에 대해서는 작업공수별로 별도의 비용을 협의하여 산정합니다.</span></p><p><br></p><p><br></p><p><br></p><p>ATYPE(커뮤니티), BTYPE(회사홈페이지),</p><p><br></p><p><br></p><p><br></p><p><strong>2.쇼핑몰</strong></p><p><br></p><p>패키지 상품신청 하시면 쇼핑몰 구축을 위한 제반사항 부터 디자인변경까지 진행합니다.</p><p><br></p><p> A TYPE ( 회사소개 + 쇼핑몰 )</p><p>간단한 회사소개 페이지와 제품을 구매 할 수 있는 기능을 제공합니다.  </p><p>관리자페이지에서 </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p>B TYPE (프리미엄 쇼핑몰)</p><p>알림, 문자, 이메일, 페이지를 연동하여 제공합니다. </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><strong>3. 이러닝사이트</strong></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>"
        // },
    ],
    page:{
        pageNo:1,
        totalCount:15,
        pageSize:9
    }
}

const People = () => {
    return (
        <>
            <PageNavigation/>
            <section className={cx("sub_container","peopleCont")}>
                <h1 className={cx("sub_top_title")}>일반인대상 창업교육</h1>
                <p className={cx("sub_top_txt")}>창업과 관련된 다양한 회원서비스를 이용하실 수 있습니다.</p>

                <div className={cx("tab_style_3")}>
                    <ul className={"clfx"}>
                        <li className={cx("on")}>
                            <a href="#">
                                <div className={cx("inner")}>
                                    <strong>스타트업 Learn</strong>
                                    <span>창업을 시작하는 일반인을 위한 <br/>엑셀러레이팅 프로그램</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={cx("inner")}>
                                    <strong>스타트업 Make</strong>
                                    <span>창업을 시작하는 일반인을 위한 <br/>엑셀러레이팅 프로그램</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={cx("inner")}>
                                    <strong>스타트업 Launch</strong>
                                    <span>창업을 시작하는 일반인을 위한 <br/>엑셀러레이팅 프로그램</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <BoardSkinSelector skinName={"GalleryType01"} content={content}/>

                {/*<div className={cx("gallery_list")}>*/}
                {/*    <ul>*/}
                {/*        <li>*/}
                {/*            <div className={cx("img_area")}>*/}
                {/*                <a href="#">*/}
                {/*                    <Image src="/assets/image/gallery_list.jpg"layout={"fill"} alt="gallery_list"/>*/}
                {/*                </a>*/}
                {/*            </div>*/}
                {/*            <div className={cx("txt_area")}>*/}
                {/*                <Link href="#"><a>린스타트업</a></Link>*/}
                {/*            </div>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <div className={cx("img_area")}>*/}
                {/*                <a href="#">*/}
                {/*                    <Image src="/assets/image/gallery_list.jpg"layout={"fill"} alt="gallery_list"/>*/}
                {/*                </a>*/}
                {/*            </div>*/}
                {/*            <div className={cx("txt_area")}>*/}
                {/*                <Link href="#"><a>린스타트업</a></Link>*/}
                {/*            </div>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <div className={cx("img_area")}>*/}
                {/*                <a href="#">*/}
                {/*                    <Image src="/assets/image/gallery_list.jpg"layout={"fill"} alt="gallery_list"/>*/}
                {/*                </a>*/}
                {/*            </div>*/}
                {/*            <div className={cx("txt_area")}>*/}
                {/*                <Link href="#"><a>린스타트업</a></Link>*/}
                {/*            </div>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <div className={cx("img_area")}>*/}
                {/*                <a href="#">*/}
                {/*                    <Image src="/assets/image/gallery_list.jpg"layout={"fill"} alt="gallery_list"/>*/}
                {/*                </a>*/}
                {/*            </div>*/}
                {/*            <div className={cx("txt_area")}>*/}
                {/*                <Link href="#"><a>린스타트업</a></Link>*/}
                {/*            </div>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <div className={cx("img_area")}>*/}
                {/*                <a href="#">*/}
                {/*                    <Image src="/assets/image/gallery_list.jpg"layout={"fill"} alt="gallery_list"/>*/}
                {/*                </a>*/}
                {/*            </div>*/}
                {/*            <div className={cx("txt_area")}>*/}
                {/*                <Link href="#"><a>린스타트업</a></Link>*/}
                {/*            </div>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <div className={cx("img_area")}>*/}
                {/*                <a href="#">*/}
                {/*                    <Image src="/assets/image/gallery_list.jpg"layout={"fill"} alt="gallery_list"/>*/}
                {/*                </a>*/}
                {/*            </div>*/}
                {/*            <div className={cx("txt_area")}>*/}
                {/*                <Link href="#"><a>린스타트업</a></Link>*/}
                {/*            </div>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <div className={cx("img_area")}>*/}
                {/*                <a href="#">*/}
                {/*                    <Image src="/assets/image/gallery_list.jpg"layout={"fill"} alt="gallery_list"/>*/}
                {/*                </a>*/}
                {/*            </div>*/}
                {/*            <div className={cx("txt_area")}>*/}
                {/*                <Link href="#"><a>린스타트업</a></Link>*/}
                {/*            </div>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <div className={cx("img_area")}>*/}
                {/*                <a href="#">*/}
                {/*                    <Image src="/assets/image/gallery_list.jpg"layout={"fill"} alt="gallery_list"/>*/}
                {/*                </a>*/}
                {/*            </div>*/}
                {/*            <div className={cx("txt_area")}>*/}
                {/*                <Link href="#"><a>린스타트업</a></Link>*/}
                {/*            </div>*/}
                {/*        </li>*/}
                {/*        <li className={cx("list_more")}>*/}
                {/*            <a href="#">*/}
                {/*                <span>더보기</span>*/}
                {/*            </a>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
            </section>

        </>
    );
};

export default People;
