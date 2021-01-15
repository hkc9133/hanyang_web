import noImage from "../../../public/assets/image/gallery_list.jpg";

export const getThumbnail = (item) => {
    const strReg = new RegExp("(http|https)://*[^>]*\\.(jpg|gif|png)","gim");
    const imgSrc =  item.match(strReg);
    if(imgSrc != null){
        return imgSrc[0];
    }else{
        return noImage;
    }

}




