import React from 'react';
import * as Utils from '../utils/utils.js';
import Map from '../map/map.jsx'

export default class CheckinContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Family Court'};
    this.handleCreateAmbit = this.handleCreateAmbit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleCreateAmbit(){
    var ambit = {
      refId : this.state.name.length,
      name: this.state.name,
      coords: {longitude: 2525, latitude: 2525},
      weekdays: {
        mon: true,
        tue: false,
        wed: true,
        thu: false,
        fri: true,
        sat: false,
        sun: false
      },
      startDate: new Date()
    };
    //Utils.postAmbit(ambit, console.log);
    console.log(JSON.stringify(ambit));
  }

  handleChange(event){
    this.setState({name: event.target.name});
  }

  render() {
    return(
      <div>
        <h1>Create a new Ambit</h1>
          <Map />
          <input type='text' value={this.state.name} onChange={this.handleChange}/>
          <p>fake coords</p>
          <p>monday, wednesday and friday</p>
          <p>starts today!!!!!!!!!!!!!!!</p>
          <button onClick={this.handleCreateAmbit}> create </button>
      </div>
    )
  }

}
