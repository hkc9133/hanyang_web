import React from 'react';
import ListType01 from "./ListType01";
import ListType02 from "./ListType02";
import GalleryType01 from "./GalleryType01";
import GalleryType02 from "./GalleryType02";
import Calendar01 from "./Calendar01";
import EventListType01 from "./EventListType01";
import NoticeListType01 from "./NoticeListType01";

const BoardSkinSelector = (props) => {
    const setSkin = () =>{
        const skinName = props.skinName;

        switch (skinName){
            case 'ListType01':
                return <ListType01 {...props}/>
            case 'ListType02':
                return <ListType02 {...props}/>
            case 'GalleryType01':
                return <GalleryType01 {...props}/>
            case 'GalleryType02':
                return <GalleryType02 {...props}/>
            case 'NoticeListType01':
                return <NoticeListType01 {...props}/>
            case 'Calendar01':
                return <Calendar01 {...props}/>
            case 'EventListType01':
                return <EventListType01 {...props}/>
        }
    }
    return (
        setSkin()
    );
};

export default React.memo(BoardSkinSelector);