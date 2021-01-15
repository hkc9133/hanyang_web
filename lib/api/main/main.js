import client from '../client';

export const getMainData = () =>
    client.get('/main/data');
