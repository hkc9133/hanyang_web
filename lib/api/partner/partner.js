import client from "../client";
import qs from "query-string";

export const getContinentList = () =>{
    return client.get(`/partner/continent`);
}

export const getPartner = (partnerId) =>{
    return client.get(`/partner/${partnerId}`);
}

export const getPartnerList = (searchInfo) =>{
    return client.post(`/partner/list`,searchInfo);
}
