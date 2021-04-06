// import noImage from "../../../public/assets/image/gallery_list.jpg";

export const getThumbnail = (item) => {
    if(item != null){
        const strReg = new RegExp("(http|https)://*[^>]*\\.(jpg|gif|png)","gim");
        const imgSrc =  item.match(strReg);
        if(imgSrc != null){
            return imgSrc[0];
        }else{
            return "/assets/image/gallery_list.jpg";
        }

    }else{
        return "/assets/image/gallery_list.jpg";
    }
}


export const getBoardThumbnail = (item) => {
    if(item != null){
        const strReg = new RegExp("(http|https)://*[^>]*\\.(jpg|gif|png)","gim");
        const imgSrc =  item.match(strReg);
        if(imgSrc != null){
            return imgSrc[0];
        }else{
            return "/assets/image/main_notice_img.jpg";
        }

    }else{
        return "/assets/image/main_notice_img.jpg";
    }
}

export const getNoticeRanThumbnail = (item) => {
    if(item != null){
        const strReg = new RegExp("(http|https)://*[^>]*\\.(jpg|gif|png)","gim");
        const imgSrc =  item.match(strReg);
        if(imgSrc != null){
            return imgSrc[0];
        }else{
            const num = Math.floor(Math.random() * 4 + 1);
            return "/assets/image/board_thumbnail_0"+num+".jpeg";
        }

    }else{
        const num = Math.floor(Math.random() * 4 + 1);
        return "/assets/image/board_thumbnail_0"+num+".jpeg";
    }
}



export const getRanThumbnail = () => {
    const num = Math.floor(Math.random() * 4 + 1);
    return "/assets/image/board_thumbnail_0"+num+".jpeg";
}

