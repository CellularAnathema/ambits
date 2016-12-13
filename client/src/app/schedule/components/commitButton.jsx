import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const CommitButton = (props) => (
  <div>
    <RaisedButton
    label="Schedule It!"
    style={style}
    onTouchTap= {props.onScheduleAmbit
    } // create ambit using date, name etc from current state
    />
  </div>
);


export default CommitButton;
