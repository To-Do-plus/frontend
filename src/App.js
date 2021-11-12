import React from 'react';
import Calendar from 'react-calendar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './Header';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios';

class App extends React.Component {
  
  

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      google:[],
      accessToken:'',
    }
  }



  resGoogle = (res) => {
    console.log(res);
    this.setState({accessToken:res.tokenObj.access_token});
    this.setState({google:res.profileObj})
    console.log(this.state.google);
    this.getEvents();
}

  getEvents = async () => {
    let URL = `https://www.googleapis.com/calendar/v3/calendars/primary/events`
    let config = {
      headers: { "Authorization": `Bearer ${this.state.accessToken}` }
    }
    try{
      let eventData = await axios.get(URL,config);
      console.log(eventData);
    }
    catch (err){
      console.log('there was an error',err);
    }
  }

  render() {
    
    return (
      <>
        
         <Router>
           <Header resGoogle={this.resGoogle} />
           {this.state.google.name ? <h2>Welcome:{this.state.google.name}</h2>:<h2>Please Login</h2>}
          <Switch>
            <Route exact path="/">
            <Calendar />
            </Route>
            <Route exact path="/">
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
