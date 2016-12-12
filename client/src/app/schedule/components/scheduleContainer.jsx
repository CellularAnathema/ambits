import React from 'react';
// import DropDownMenu from 'material-ui/DropDownMenu';
// import MenuItem from 'material-ui/MenuItem';
import DropDownList from './dropdown.jsx';
import CommitButton from './commitButton.jsx';
import StartDate from './startDate.jsx';
import SelectDays from './selectDays.jsx';
import AmbitNameInput from './ambitNameInput.jsx';

export default class ScheduleContainer extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      dropdownValue: 'Weekly',
      startDateValue: null,
      selectDaysValue: [],
      ambitNameValue: ''
    };
    this.onNameInput = this.onNameInput.bind(this);
    this.onDropDownSelect = this.onDropDownSelect.bind(this);
    this.onStartDateSet = this.onStartDateSet.bind(this);
    this.onSelectDaysInput = this.onSelectDaysInput.bind(this);
  }

  onDropDownSelect(dropdownEvent) {
    this.setState({
      dropdownValue: dropdownEvent.target.value
    });
    console.log(dropdownValue, 'dropdownvalue select');
  }

  onStartDateSet(event, date) {
    // var currentState = this.state;
    // currentState.startDateValue = date;
    // this.setState(currentState);
    this.setState({
      startDateValue: date
    });
    console.log(currentState.startDateValue, 'startDateValue');

  }

  onNameInput(nameInputEvent) {
    console.log(nameInputEvent, 'nameinput');
    if (nameInputEvent.keyCode === 13) {
      this.setState({
        ambitNameValue: nameInputEvent.target.value
      });
      console.log(currentState.ambitNameValue, 'ambitNameValue');
    }
  }

  onSelectDaysInput() {
  }

  render() {
    return (
      <div>
        <div>
          <AmbitNameInput
            onNameInput={this.onNameInput}
            ambitNameValue={this.state.ambitNameValue}
            />
        </div>
        <div>
          <DropDownList
            onDropDownSelect={this.onDropDownSelect}
            dropdownValue={this.state.dropdownValue}/>
        </div>
        <div>
          <StartDate
            onStartDateSet={this.onStartDateSet}
            startDateValue={this.state.startDateValue}/>
        </div>
        <div>
          <SelectDays
            onSelectDaysInput={this.onSelectDaysInput}
            selectDaysValue={this.state.selectDaysValue}/>
        </div>
        <div>
          <CommitButton currentState = {this.state}/>
        </div>
      </div>
    );
  }
}
