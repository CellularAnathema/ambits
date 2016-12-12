import React from 'react';
import {List, ListItem} from 'material-ui/list'
import * as Utils from '../utils/utils.js';

export default class displayAmbit extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      today: new Date(),
      ambit: {weekdays: [false,true,false,true,false,true,false]}
    }
  }

  dateInLog(date){
    return false;
  }

  render() {
    console.log('today', this.state.today);
    var startDate = new Date(this.state.today.toDateString());
    console.log(startDate);
    var dates = [];
    for (var i = 0; i < 7; i++){
      var itemInfo = {};
      var itemDate = startDate.setDate(startDate.getDate() + 1);
      console.log(itemDate);

      itemInfo.date = itemDate;

      //if this list item's day of the week doesn't match ambit.weekdays
      if(this.state.ambit.weekdays[itemDate.getDay] === false){
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
        <ListItem primaryText={info.status} secondaryText={info.date}/>
      )
    });

    return(
      <List>
        {listItems}
      </List>
    );
  }
}
