import client from "../client";
import qs from "query-string";

export const getStartupPresent = (startupPresentId) =>{
    return client.get(`/startupPresent/${startupPresentId}`);
}

export const getStartupPresentList = (startupPresentInfo) =>{
    const queryString = qs.stringify(startupPresentInfo);
    return client.get(`/startupPresent/list?${queryString}`);
}
