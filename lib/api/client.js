import axios from 'axios'

// export const url = "http://172.30.1.32";
// export const url = "http://192.168.0.14";
export const url = "http://210.103.188.119";
export const port = "8080";

const client = axios.create();
client.defaults.baseURL = `${url}:${port}`;
client.defaults.timeout = 5000;


// client.defaults.baseURL = 'http://210.103.188.119:8080';
// client.defaults.headers.common['Authorization'] = 'Bearer '+ AsyncStorage.getItem('userToken');

// axios.interceptors.response.use();

client.interceptors.request.use(async function (config) {
            try {
                // const userToken = await AsyncStorage.getItem('companyToken');
                // console.log(userToken)
                // console.log(config)
                // if (userToken !== null) {
                //     config.headers.Authorization = `Bearer ${userToken}`;
                // }
            } catch (error) {
                // Error retrieving data
            }
        return config;
    },
    function (error) {
        console.log(error)
        return Promise.reject (error);
    }
);

// client.interceptors.response.use(
//     function (response) {
//         // console.log(response)
//         // const [cookie] = response.headers['set-cookie'];
//         // console.log(cookie)
//
//         // CookieManager.get(url)
//         //     .then((cookies) => {
//         //         console.log(cookies['COMPANY_ID']['value'])
//         //     });
//         // console.log("==")
//         // console.log(JSON.stringify(cookie))
//         // console.log("==")
//         return response;
//     },
//     function (error) {
//         // 오류 응답을 처리
//         // ...
//         console.log(error)
//         return Promise.reject(error);
//     });


export default client;
