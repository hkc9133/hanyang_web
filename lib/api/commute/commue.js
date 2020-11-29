import client from '../client';

export const getCommuteStatus = (id) =>
    client.get('/commute');

export const workIn = (location) =>{
    return client.post('/commute/workIn',location);

}

export const workOut = (location) =>
    client.post('/commute/workOut',location);
