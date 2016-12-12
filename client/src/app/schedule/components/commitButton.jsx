import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import * as Utils from '../../utils/utils.js';
const style = {
  margin: 12,
};

const CommitButton = (props) => (
  <div>
    <RaisedButton
    label="Schedule It!"
    style={style}
    onTouchEnd= {Utils.addNewAmbit(props.currentState, () => {
        console.log('Successfully added ambit');
      })
    } // create ambit using date, name etc from current state
    />
  </div>
);


export default CommitButton;
