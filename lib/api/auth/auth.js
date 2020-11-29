import client from '../client';


export const login = (loginInfo) =>{
    console.log(loginInfo)
    return client.post('/user/login',loginInfo);
}

export const signup = (signUpInfo) =>
    client.post('/user/signup',signUpInfo);

export const logout = () =>
    client.post('/user/logout');

// export const authCheck = async () =>{
//     return client.post('/user/authCheck')
// }

export const authCheck = async () =>{
    return client.post('/auth/test')
}
