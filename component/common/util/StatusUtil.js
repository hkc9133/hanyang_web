export const getCounselStatus = (status)=>{
    let returnStatus = '';
    switch (status){
        case "APPLY":
            returnStatus =  "신청"
            break;
        case "ASSIGN":
            returnStatus =  "배정 완료"
            break;
        case "RETURN":
            returnStatus =  "반려"
            break;
        case "PROCESS":
            returnStatus =  "상담 진행중"
            break;
        case "COMPLETED":
            returnStatus =  "상담 완료"
            break;
    }
    return returnStatus;
}

export const getUserRole = (role) =>{
    switch (role){
        case 'ROLE_USER':
            return "일반(미승인)"
        case 'ROLE_SD':
            return "학생"
        case 'ROLE_TC':
            return "교직"
        case 'ROLE_MT':
            return "멘토"
        case 'ROLE_ADMIN':
            return "관리자"
    }
}
export const getUserType = (type) =>{
    switch (type){
        case 'KAKAO':
            return "kakao_icon"
        case 'GOOGLE':
            return "google_icon"
        case 'FACEBOOK':
            return "facebook_icon"
        case 'NAVER':
            return "naver_icon"
        case 'HANYANG':
            return "hanyang_icon"
        case 'NORMAL':
            return "normal"
    }
}


export const getRentalType = (type) =>{
    switch (type){
        case 'APPLY':
            return "신청"
        case 'CANCEL':
            return "취소"
        case 'ACCEPT':
            return "확정"
        case 'RETURN':
            return "반려"
    }
}
