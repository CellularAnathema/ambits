import React from 'react';
// import DropDownMenu from 'material-ui/DropDownMenu';
// import MenuItem from 'material-ui/MenuItem';
import DropDownList from './dropdown';
import CommitButton from './commitButton';
import StartDate from './startDate';
import SelectDays from './selectDays';
import AmbitNameInput from './ambitNameValue';
import CommitButton from './CommitButton';

export default class ScheduleContainer extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      dropdownValue: 'Weekly',
      startDateValue: null,
      selectDaysValue: [],
      ambitNameValue: ''
    };
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
          <ambitName
            onNameInput={this.onNameInput.bind(this)}
            ambitNameValue={this.state.ambitNameValue}
          />
        </div>
        <div>
          <DropDownMenu
            onDropDownSelect={this.onDropDownSelect.bind(this)}
            dropdownValue={this.state.dropdownValue}>
          </DropDownMenu>
        </div>
        <div>
          <startDate
            onStartDateSet={this.onStartDateSet.bind(this)}
            startDateValue={this.state.startDateValue}
          />
        </div>
        <div>
          <selectDays
            onSelectDaysInput={this.onSelectDaysInput.bind(this)}
            selectDaysValue={this.state.selectDaysValue}
          />
        </div>
        <div>
          <CommitButton currentState = {this.state}/>
        </div>
      </div>
    );
  }
}
