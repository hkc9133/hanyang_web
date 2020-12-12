import client from '../client';


export const socialLogin = (loginInfo) =>{
    return client.post('/auth/login/social',loginInfo);
}

export const socialSignUp = (signUpInfo) =>{
    return client.post('/auth/signup/social',signUpInfo);
}

export const authCheck = () =>{
    return client.post('/auth/check')
}

export const signup = (signUpInfo) =>
    client.post('/user/signup',signUpInfo);

export const logout = () =>
    client.post('/user/logout');

// export const authCheck = async () =>{
//     return client.post('/user/authCheck')
// }

