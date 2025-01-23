import React from 'react';
import ListType01 from "./ListType01";
import ListType02 from "./ListType02";
import ListType03 from "./ListType03";
import ListType04 from "./ListType04";
import ListType05 from "./ListType05";
import GalleryType01 from "./GalleryType01";
import GalleryType02 from "./GalleryType02";
import Calendar01 from "./Calendar01";
import EventListType01 from "./EventListType01";
import NoticeListType01 from "./NoticeListType01";
import ListType06 from "./ListType06";
import EnNoticeListType01 from "./EnNoticeListType01";
import GalleryType03 from "./GalleryType03";

const BoardSkinSelector = (props) => {
    const setSkin = () =>{
        const skinName = props.skinName;

        switch (skinName){
            case 'ListType01':
                return <ListType01 {...props}/>
            case 'ListType02':
                return <ListType02 {...props}/>
            case 'ListType03':
                return <ListType03 {...props}/>
            case 'ListType04':
                return <ListType04 {...props}/>
            case 'ListType05':
                return <ListType05 {...props}/>
            case 'ListType06':
                return <ListType06 {...props}/>
            case 'GalleryType01':
                return <GalleryType01 {...props}/>
            case 'GalleryType02':
                return <GalleryType02 {...props}/>
            case 'GalleryType03':
                return <GalleryType03 {...props}/>
            case 'NoticeListType01':
                return <NoticeListType01 {...props}/>
            case 'EnNoticeListType01':
                return <EnNoticeListType01 {...props}/>
            case 'Calendar01':
                return <Calendar01 {...props}/>
            case 'EventListType01':
                return <EventListType01 {...props}/>
            case 'CompanyListType01':
                return <EventListType01 {...props}/>
        }
    }
    return (
        setSkin()
    );
};

export default BoardSkinSelector;
