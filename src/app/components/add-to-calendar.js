import React, { Component } from 'react';
import AddToCalendar from 'react-add-to-calendar';

import '../../stylesheets/components/add-to-calendar.css';

class AddToCalendarWidget extends Component {
  render() {
    const event = {
        title: 'Jessica %2B Anh’s Wedding',
        description: 'Labor Day weekend destination wedding',
        location: '72056 CA-70 Portola, CA 96122',
        startTime: '2017-09-02T15:30:00-08:00',
        endTime: '2017-09-04T10:00:00-08:00'
    };

    return (
      <AddToCalendar
        event={event}
        buttonTemplate={{ textOnly: 'none' }}
        buttonLabel="Add to calendar"
      />
    );
  }
}

export default AddToCalendarWidget;
