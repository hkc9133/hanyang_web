import client from '../client';
import qs from 'query-string';

export const getStartupCalendarList = (data) =>{
    const queryString = qs.stringify(data);
    return client.get(`/startup_calendar/list?${queryString}`);
}


export const getStartupCalendar = (noticeId) =>{
    return client.get(`/startup_calendar/${noticeId}`);
}
