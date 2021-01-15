import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import qs from 'query-string';

const CounselFieldCateList = ({cx,list}) => {
    const router = useRouter();
    useEffect(() => {
        console.log(list)
        console.log(router.query.counselField)
    },[])

    const changeCate = (counselField) => {

        const {page = 1} = router.query;
        const queryString = qs.stringify({
            page, counselField
        });

        router.push(`${router.pathname}?${queryString}`)
    }

    return (
        <div className={cx("tab_style_1")}>
            <ul>
                <li className={cx({on : router.query.counselField == "" || router.query.counselField == undefined})}><a href="#" onClick={(e) => {e.preventDefault();changeCate(null);}}><span>전체</span></a></li>
                {list.map((item) => {
                    return <li key={item.value} className={cx({on : item.value == router.query.counselField})}><a href="#" onClick={(e) => {e.preventDefault();changeCate(item.value);}}><span>{item.label}</span></a></li>
                })}
                {/*<li><a href="#"><span>세무·회계</span></a></li>*/}
                {/*<li><a href="#"><span>법률·법무</span></a></li>*/}
                {/*<li><a href="#"><span>지식재산권</span></a></li>*/}
                {/*<li><a href="#"><span>마케팅·판로</span></a></li>*/}
                {/*<li><a href="#"><span>노무</span></a></li>*/}
                {/*<li><a href="#"><span>투자</span></a></li>*/}
                {/*<li><a href="#"><span>초기 창업자금 조달</span></a></li>*/}
                {/*<li><a href="#"><span>비즈니스모델링</span></a></li>*/}
                {/*<li><a href="#"><span>시제품·개발</span></a></li>*/}
                {/*<li><a href="#"><span>글로벌 진출</span></a></li>*/}
                {/*<li><a href="#"><span>스케일업(코스탁 CEO등)</span></a></li>*/}
                {/*<li><a href="#"><span>캠퍼스 기술자문(교수)</span></a></li>*/}
                {/*<li><a href="#"><span>민간기술자문(대기업 임직원)</span></a></li>*/}
                {/*<li><a href="#"><span>또래 CEO</span></a></li>*/}
            </ul>
        </div>
    );
};

export default CounselFieldCateList;
