import client from "../client";
import qs from "query-string";

export const getFieldList = () =>{
    return client.get(`/startup_present/field`);
}
export const getBestStartupList = () =>{
    return client.get(`/startup_present/best`);
}

export const getStartupPresent = (startupId) =>{
    return client.get(`/startup_present/${startupId}`);
}

export const getStartupPresentList = (searchInfo) =>{
    return client.post(`/startup_present/list`,searchInfo);
}
