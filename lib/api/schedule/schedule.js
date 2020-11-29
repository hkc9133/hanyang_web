import client from '../client';

export const getSchedule = (day) =>
    client.get(`/schedule?day=${day}`);

export const getMonthSchedule = (date) =>
    client.get(`/schedule/member/month?year=${date.year}&month=${date.month}`);

export const getRangeMemberSchedule = (date) =>
    client.get(`/schedule/member/list?startDate=${date.startDate}&endDate=${date.endDate}`);


export const addSchedule = (scheduleInfo) =>
    client.post(`/schedule`,scheduleInfo);
