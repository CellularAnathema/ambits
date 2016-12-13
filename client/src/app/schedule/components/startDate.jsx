import React from 'react';
import DatePicker from 'material-ui/DatePicker';

const StartDate = (props) => (
  <div>
    <DatePicker
    hintText="Select Ambit Start Date"
    value = {props.startDate}
    onChange= {props.onStartDateSet}
    />
  </div>
);


export default StartDate;