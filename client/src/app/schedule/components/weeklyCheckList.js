
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

const WeeklyCheckList = () => (
  <div style={styles.block}>
    <Checkbox
      label="Sunday"
      style={styles.checkbox}
      onCheck={}
    />

    <Checkbox
      label="Monday"
      style={styles.checkbox}
      onCheck={}
    />

    <Checkbox
      label="Tuesday"
      style={styles.checkbox}
      onCheck={}
    />

    <Checkbox
      label="Wednesday"
      style={styles.checkbox}
      onCheck={}
    />

    <Checkbox
      label="Thursday"
      style={styles.checkbox}
      onCheck={}
    />

    <Checkbox
      label="Friday"
      style={styles.checkbox}
      onCheck={}
    />

    <Checkbox
      label="Saturday"
      style={styles.checkbox}
      onCheck={}
    />

  </div>
);


export default WeeklyCheckList;
