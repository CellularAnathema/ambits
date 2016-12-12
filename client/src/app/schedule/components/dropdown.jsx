import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const dropDownStyles = {
  customWidth: {
    width: 256,
  },
};

const DropdownList = (props) => {
  return (
    <div className="dropdown">
    <DropDownMenu
      className="dropdown"
      title="Frequency"
      value={props.dropdownValue}
      style={dropDownStyles.customWidth}
      onChange={props.onDropDownSelect}/* add in parameter from MenuItem */
      >
      <MenuItem value={1} primaryText="Daily"></MenuItem>
      <MenuItem value={2} primaryText="Weekly"></MenuItem>
      <MenuItem value={3} primaryText="Monthly"></MenuItem>
    </DropDownMenu>
    </div>
  );
};


export default DropdownList;
