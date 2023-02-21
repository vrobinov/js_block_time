import moment from "moment";
import 'moment-precise-range-plugin';

export const getTodayDateFormat = (date) => {
    return moment(date).format("MMM Do YY");
}

export const getPreciseDateDifferce = (date1, date2) => {
    const dateFormat1 = moment(date1);
    const dateFormat2 = moment(date2);
    return moment.preciseDiff(dateFormat1, dateFormat2);
}