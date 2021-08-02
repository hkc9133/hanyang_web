import axios from 'axios'

export const isProd = process.env.NODE_ENV === 'production';
export const url = isProd ? "https://startup.hanyang.ac.kr" : "http://localhost";
export const clientPort = isProd ? null : 3000;
export const port = isProd ? 443 : 3005;
export const serverAddr = "/api";
export const baseUrl = `${url}:${port}${serverAddr}`;
const client = axios.create();
client.defaults.baseURL = `${url}:${port}${serverAddr}`;
client.defaults.withCredentials = true


client.interceptors.request.use (
    function (config) {
        try{

        } catch (error) {
            // Error retrieving data
        }
        return config;
    },
    function (error) {
        return Promise.reject (error);
    }
);

client.interceptors.response.use(
    function (response) {
        // if(response.headers['access-token'] != null && response.headers['access-token'] != undefined){
        //     localStorage.setItem('token',response.headers['access-token'])
        // }
        return response;
    },
    function (error) {
        // 오류 응답을 처리
        // ...
        // console.log("에러")
        // console.log(error)
        return Promise.reject(error);
    }
);


export default client;
