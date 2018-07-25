import format from 'date-fns/format';
import getDay from 'date-fns/get_day';
import getDaysInMonth from 'date-fns/get_days_in_month';
import startOfMonth from 'date-fns/start_of_month';
import times from 'ramda/src/times';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddReminder from '../components/AddReminder';
import Grid, { GridItem } from '../components/Grid';
import Event from './Event';
import remindersForMonth from './remindersForMonth';

// if content adjusts to < 1 then it's a space filler
const createCalendarDay = (adjuster, monthYear, events) => day => {
  const dayNum = day + 1 - adjuster;
  const dayDate = format(`${monthYear}-${dayNum}`, 'YYYY-MM-DD');
  const eventsToday = events[dayDate];
  return (
    <GridItem key={day} className={dayNum > 0 ? 'is-active' : 'in-active'}>
      <span className="day-indicator">{dayNum}</span>
      {
        eventsToday
          ? eventsToday.map(event => <Event key={event.id} {...event} />)
          : null
      }
    </GridItem>
  );
};

const createCalendar = (activeDate, events) => {
  // num days to create
  // loop through
  //  - check if day is filler
  //  -  check if day has events
  //        -> lookup YYYY-MMM-DD in events (calculated from remindersForMonth)
  const daysInMonth = getDaysInMonth(activeDate);
  const firstDay = getDay(startOfMonth(activeDate));
  const calendarDay = createCalendarDay(firstDay, format(activeDate, 'YYYY-MM'), events);
  return times(calendarDay, daysInMonth);
}

class Container extends Component {
  render() {
    const { activeDate, reminders } = this.props;
    
    return (
      <div>
        <h2>Calendar Component</h2>
        <p>Active date = {format(activeDate, 'MMMM YYYY')}</p>

        <AddReminder />

        <Grid>
          <div>Sun</div>
          <div>Mon</div>
          <div>Tues</div>
          <div>Wed</div>
          <div>Thur</div>
          <div>Fri</div>
          <div>Sat</div>
          {
            createCalendar(activeDate, reminders)
          }
        </Grid>
      </div>
    )
  };
};

const select = state => {
  return {
    activeDate: state.activeDate,
    reminders: remindersForMonth(state.reminders)
  };
};

export default connect(select)(Container);
