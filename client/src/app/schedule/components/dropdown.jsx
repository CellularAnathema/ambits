import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


const DropdownList = (props) => {
  return (
    <div className="dropdown">
    <DropDownMenu
      className="dropdown"
      bsStyle="default"
      title="Frequency"
      value={this.props.dropdownValue}
      onChange={(event) => onDropDownSelect(event) /* add in parameter from MenuItem */
      }>
      <MenuItem value={1} primaryText="Daily">Daily</MenuItem>
      <MenuItem value={2} primaryText="Weekly">Weekly</MenuItem>
      <MenuItem value={3} primaryText="Monthly">Monthly</MenuItem>
    </DropDownMenu>
    </div>
  );
};


export default DropdownList;