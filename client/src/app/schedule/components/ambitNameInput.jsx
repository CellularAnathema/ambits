import React from 'react';
import TextField from 'material-ui/TextField';

const AmbitNameInput = (props) => (
  <div>
    <TextField
      hintText= "Ambit Name"
      errorText="Please enter an Ambit Name"
      onKeyDown={props.onNameInput}
    />
  </div>
);

export default AmbitNameInput;