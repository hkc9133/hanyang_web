import axios from 'axios'

export const isProd = process.env.NODE_ENV === 'production';
export const url = isProd ? "http://210.103.188.119" : "http://localhost";
export const clientPort = isProd ? null : 3000;
export const port = "8080";
export const serverAddr = "/api";

const client = axios.create();
client.defaults.baseURL = `${url}:${port}${serverAddr}`;
client.defaults.timeout = 5000;
client.defaults.withCredentials = true


// client.defaults.baseURL = 'http://210.103.188.119:8080';
// client.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem('token');

// axios.interceptors.response.use();

client.interceptors.request.use (
    function (config) {
        try{

            // const userToken = localStorage.getItem('token');
            // if (userToken !== null) {
            //     config.headers.Authorization = `Bearer ${userToken}`;
            // }
        } catch (error) {
            // Error retrieving data
        }
        return config;
    },
    function (error) {
        return Promise.reject (error);
    }
);

// client.interceptors.response.use(
//     function (response) {
//         return response;
//     },
//     function (error) {
//         // 오류 응답을 처리
//         // ...
//         console.log(error)
//         return Promise.reject(error);
//     });


export default client;
