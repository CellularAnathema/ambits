import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
//import Schedule from './schedule/schedule.js'
import CheckinContainer from './checkin/components/checkinContainer.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main'; // Our custom react components

import Create from './createAmbit/createAmbit.jsx';
import Display from './displayAmbit/displayAmbit.jsx';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


class Home extends React.Component {
  render(){
    return (
      <div>
        <h1>This is the Home Page</h1>
        <Link to="/create">Create Ambit</Link>
        <Link to="/checkin">Check-In</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/display">Display</Link>
      </div>
    );
  }
}

// class Create extends React.Component {
//   render(){
//     return (
//       <div>
//         <h1>This page will create the Ambits</h1>
//         <Link to="/">Home</Link>
//       </div>
//     );
//   }
// }

// class CheckIn extends React.Component {
//   render(){
//     return (
//       <div>
//         <h1>This page will submit check-ins</h1>
//         <Link to="/">Home</Link>
//       </div>
//     );
//   }
// }

class Schedule extends React.Component {
  render(){
    return (
      <div>
        <h1>This page will show how much of a failure you are</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}
// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(
  //React-Router with nested routes
  <Router history={browserHistory}>
    <Route component={Main}>
      <Route path='/' component={Home}/>
      <Route path='/create' component={Create}/>
      <Route path='checkin' component={CheckIn}/>
      <Route path='schedule' component={Schedule}/>
      <Route path='display' component={Display}/>
    </Route>
  </Router>,
  document.getElementById('app'));
