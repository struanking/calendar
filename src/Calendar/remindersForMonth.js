import differenceInMilliseconds from 'date-fns/difference_in_milliseconds';
import format from 'date-fns/format';

const sortByDateTime = (d1, d2) => differenceInMilliseconds(d1, d2) > 0;

const groupByDay = (acc, cur) => {
  const dateOnly = format(cur.date, 'YYYY-MM-DD');
  if (acc[dateOnly]) {
    acc[dateOnly] = [...acc[dateOnly], cur].sort((a, b) => sortByDateTime(a.date, b.date));
  } else {
    acc[dateOnly] = [cur];
  }
  return acc;
};

/**
 * 
 * @param {array} reminders 
 * filter all reminders for month -> future requirement
 * sort by timestamp
 * group by day
 */
const remindersForMonth = (reminders) => {
  return reminders
    .sort((a, b) => sortByDateTime(a.date, b.date))
    .reduce(groupByDay, {}); 
};

export default remindersForMonth;
