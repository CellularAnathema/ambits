import React from 'react';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};
const SelectDays = (props) => (
  <div style={styles.block}>
    <Checkbox
      label="Sunday"
      style={styles.checkbox}
      onCheck={props.onSelectDays.onSelectDaysInputSunday}
    />

    <Checkbox
      label="Monday"
      style={styles.checkbox}
      onCheck={props.onSelectDays.onSelectDaysInputMonday}
    />

    <Checkbox
      label="Tuesday"
      style={styles.checkbox}
      onCheck={props.onSelectDays.onSelectDaysInputTuesday}
    />

    <Checkbox
      label="Wednesday"
      style={styles.checkbox}
      onCheck={props.onSelectDays.onSelectDaysInputWednesday}
    />

    <Checkbox
      label="Thursday"
      style={styles.checkbox}
      onCheck={props.onSelectDays.onSelectDaysInputThursday}
    />

    <Checkbox
      label="Friday"
      style={styles.checkbox}
      onCheck={props.onSelectDays.onSelectDaysInputFriday}
    />

    <Checkbox
      label="Saturday"
      style={styles.checkbox}
      onCheck={props.onSelectDays.onSelectDaysInputSaturday}
    />



  </div>
);

    // <Checkbox
    //   label="Wednesday"
    //   style={styles.checkbox}
    //   onCheck={props.onSelectDaysInput.bind(this, 3)}
    // />

    // <Checkbox
    //   label="Thursday"
    //   style={styles.checkbox}
    //   onCheck={props.onSelectDaysInput.bind(this, 4)}
    // />

    // <Checkbox
    //   label="Friday"
    //   style={styles.checkbox}
    //   onCheck={props.onSelectDaysInput.bind(this, 5)}
    // />

    // <Checkbox
    //   label="Saturday"
    //   style={styles.checkbox}
    //   onCheck={props.onSelectDaysInput.bind(this, 6)}
    // />


export default SelectDays;