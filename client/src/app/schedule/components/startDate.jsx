import React from 'react';
import DatePicker from 'material-ui/DatePicker';

const StartDate = (props) => (
  <div>
    <DatePicker
    hintText="Select Ambit Start Date"
    value = {props.startDateValue}
    onChange= {props.onStartDateSet}
    />
  </div>
);


export default StartDate;