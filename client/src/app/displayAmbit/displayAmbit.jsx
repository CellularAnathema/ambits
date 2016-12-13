import React from 'react';
import {List, ListItem} from 'material-ui/list'
import * as Utils from '../utils/utils.js';

export default class displayAmbit extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      today: new Date(),
      offset: 0,

      //hardcoded data for mock-up purposes
      ambit: {weekdays: [true,true,false,true,false,true,true]}, //mon, wed, fri, sat, sun
      log: {"Sat Dec 10 2016": true, "Mon Dec 12 2016": true}
    }
  }

  componentWillMount() {
    this.setState({startDate: new Date( this.state.today.toDateString() )});
  }

  modifyStart(change) {
    var changedOffset = this.state.offset + change;
    this.setState({offSet: changedOffset});
  }

  dateInLog(date){
    if (this.state.log[date.toDateString()]){
      return true;
    } else {
      return false;
    }
  }

  render() {
    var startDate = this.state.startDate;
    startDate.setDate(startDate.getDate() + this.state.modifier);
    var dates = [];
    for (var i = 0; i < 7; i++){
      var itemInfo = {};
      var itemDate = new Date(startDate);
      itemDate.setDate(itemDate.getDate() + i);

      itemInfo.date = itemDate;

      //if this list item's day of the week doesn't match ambit.weekdays
      console.log(itemDate.getDay);
      if(this.state.ambit.weekdays[itemDate.getDay()] === false){
        itemInfo.status = 'Free';
      }
      else{
        //if this item's day matches weekdays,
        //and there is a check-in in the log for this date
        if (this.dateInLog(itemDate)){
          itemInfo.status = 'Accomplished';
        } else {
          //if there's no check-in and the item is for after today
          if (itemDate > this.state.today){
            itemInfo.status = 'Committed';
          } else{
            //if there's no check-in and the item is from before today
            itemInfo.status = 'Failed';
          }
        }
      }
      dates.push(itemInfo);
    }
    var listItems = dates.map(function(info){
      return(
        <ListItem primaryText={info.status} secondaryText={info.date.toDateString()}/>
      )
    });

    return(
      <div>
        <button onClick={this.modifyStart(-7)}>prev week</button>
        <button onClick={this.modifyStart(7)}>next week</button>
        <List>
          {listItems}
        </List>
      </div>
    );
  }
}
