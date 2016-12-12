import React from 'react';
import DatePicker from 'material-ui/DatePicker';

const StartDate = (props) => (
  <div>
    <DatePicker
    hintText="Select Ambit Start Date"
    value = {props.startDateValue}
    onChange= {props.onStartDateSet(function() {
      console.log('start date on change');
    }, date)} //set start date value in current state
    />
  </div>
);

export default StartDate;