import React from 'react';
import DatePicker from 'material-ui/DatePicker';

const StartDate = (props) => (
  <div>
    <DatePicker
    hintText="Select Ambit Start Date"
    value = {props.startDateValue}
    //set start date value in current state
    onChange= {props.onStartDateSet}
    />
  </div>
);

// (function() {
//       console.log('start date on change');
//     }, date)


export default StartDate;