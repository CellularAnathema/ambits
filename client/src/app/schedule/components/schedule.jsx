import React from 'react';
// import DropDownMenu from 'material-ui/DropDownMenu';
// import MenuItem from 'material-ui/MenuItem';
import DropDownList from './dropdown.jsx';
import CommitButton from './commitButton.jsx';
import StartDate from './startDate.jsx';
import SelectDays from './selectDays.jsx';
import AmbitNameInput from './ambitNameInput.jsx';
import SelectTime from './selectTime.jsx';
import * as Utils from '../../utils/utils.js';

export default class ScheduleContainer extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      coords:{
        latitude:0,
        longitude:0,
      },
      weekdays: [false, false, false, false, false, false, false],//[Su,M,T,w,Th,F,Sa]
      startDate: null,
      checkIns:[]
    };

    this.onNameInput = this.onNameInput.bind(this);
    this.onStartDateSet = this.onStartDateSet.bind(this);
    this.onSelectTime = this.onSelectTime.bind(this);
    this.onScheduleAmbit = this.onScheduleAmbit.bind(this);
    this.onSelectDays = {
      onSelectDaysInputSunday: this.onSelectDaysInputSunday.bind(this),
      onSelectDaysInputMonday: this.onSelectDaysInputMonday.bind(this),
      onSelectDaysInputTuesday: this.onSelectDaysInputTuesday.bind(this),
      onSelectDaysInputWednesday: this.onSelectDaysInputWednesday.bind(this),
      onSelectDaysInputThursday: this.onSelectDaysInputThursday.bind(this),
      onSelectDaysInputFriday: this.onSelectDaysInputFriday.bind(this),
      onSelectDaysInputSaturday: this.onSelectDaysInputSaturday.bind(this),
    };
  }


  onNameInput(nameInput) {
      this.setState({
        name: nameInput.target.value
      });
  }

  onStartDateSet(event, date) {
    this.setState({
      startDate: date //iso date TODO
    });
  }

  onSelectTime(event, time) {
    console.log(time);
  }

  onScheduleAmbit() {
    var ambitState = this.state;
    console.log(ambitState);
    Utils.postAmbit(ambitState, function() {
      console.log('posted!')
    })
  }
// this function was meant to take in the day index and the checked boolean, however 'this' being bound in the SelectDays module is causing issues with accessing this.state.
//////////////////////////////////////////////////
    // onSelectDaysInput(day, event, checked) {

      // var currentState = this.state;
      // currentState.weekdays[day] = checked;
      // console.log(day, checked);
      // this.setState(currentState);
      // this.setState({
      //   startDate[day] = checked
      // })
      // ;
    // }
    // // time to write some UGLY MFIN CODE.
//////////////////////////////////////////////////


// DONT JUDGE ME, IM PRESSED FOR TIME D;
//////////////////////////////////////////////////
onSelectDaysInputSunday(event, checked) {
  var currentState = this.state;
  currentState.weekdays[0] = checked;
  this.setState(currentState);
}

onSelectDaysInputMonday(event, checked) {
  var currentState = this.state;
  currentState.weekdays[1] = checked;
  this.setState(currentState)
}

onSelectDaysInputTuesday(event, checked) {
  var currentState = this.state;
  currentState.weekdays[2] = checked;
  this.setState(currentState);
}

onSelectDaysInputWednesday(event, checked) {
  var currentState = this.state;
  currentState.weekdays[3] = checked;
  this.setState(currentState)
}

onSelectDaysInputThursday(event, checked) {
  var currentState = this.state;
  currentState.weekdays[4] = checked;
  this.setState(currentState)
}

onSelectDaysInputFriday(event, checked) {
  var currentState = this.state;
  currentState.weekdays[5] = checked;
  this.setState(currentState)
}

onSelectDaysInputSaturday(event, checked) {
  var currentState = this.state;
  currentState.weekdays[6] = checked;
  this.setState(currentState)
}
//////////////////////////////////////////////////

  // onDropDownSelect(eventObj, selectedItemKey, selectedItemPayload) {
  //   this.setState({
  //     dropdownValue: selectedItemPayload
  //   });
  //   console.log(selectedItemPayload, 'dropdownvalue select');
  // }

  render() {
    return (
      <div>
        <div>
          <AmbitNameInput
            onNameInput={this.onNameInput}
            name={this.state.name}
            />
        </div>
        <div>
          <StartDate
            onStartDateSet={this.onStartDateSet}
            startDate={this.state.startDate}/>
        </div>
        <div>
          <DropDownList
            onDropDownSelect={this.onDropDownSelect}
            dropdownValue={this.state.sdropdownValue}
            handleDropDownChange={this.state.handleDropDownChange}/>
        </div>
        <div>
        <SelectTime
            onSelectTime={this.onSelectTime}/>
        </div>
        <div>
        <SelectDays
            onSelectDays={this.onSelectDays}
            weekdays={this.state.weekdays}/>
        </div>
        <div>
          <CommitButton
            currentState = {this.state}
            onScheduleAmbit = {this.onScheduleAmbit}/>
        </div>
      </div>
    );
  }
}
