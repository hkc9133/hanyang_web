import client from '../client';

export const selectCompany = (id) =>
    client.get(`/company/selectCompany?companyId=${id}`);

export const getContact = () =>
    client.get(`/member/contact`);
