import React from 'react';
import Calendar from 'react-calendar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './Header';
import Main from './Components/Main'
import AboutMe from './Components/AboutMe'


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
      google: [],
      accessToken: '',
      timeZone: '',
      toDoList: []
    }
  }

  resGoogle = (res) => {
    console.log(res);
    this.setState({ accessToken: res.tokenObj.access_token });
    this.setState({ google: res.profileObj })
    console.log(this.state.google);
    this.getEventsAPI();
  }


  onLogout = () => {
    this.setState({ accessToken: '' });
    this.setState({ google: [] })
  }


  getEventsAPI = async () => {
    // This function here is pulling things fromt he API NOT the server
    let URL = `https://www.googleapis.com/calendar/v3/calendars/primary/events`
    let config = {
      headers: { "Authorization": `Bearer ${this.state.accessToken}` }
    }
    try {
      let eventData = await axios.get(URL, config);
      console.log(eventData);
      this.setState({
        timeZone: eventData.data.timeZone
      });
      this.setState({
        toDoList: eventData.data.items
      });

      console.log(this.state.timeZone);
    }
    catch (err) {
      console.log('there was an error with the API get', err);
    }
  }

  // getFromServer =

  addToServer = async (TDThing) => {
    let newTask = await axios.post(`${process.env.REACT_APP_API}/events`, TDThing);
    this.setState({ toDoList: [...this.state.toDoList, newTask.data] })
    this.getEventsAPI();
    console.log('newTask', newTask.data);
  }

  deleteToDo = async (passedId) => {
    await axios.delete(`${process.env.REACT_APP_API}/ROUTE/${passedId}`);
    this.getEventsAPI();
  }

  componentDidMount() {
    this.getEventsAPI();
  }

  render() {

    return (
      <>


        <Router>

          <Header resGoogle={this.resGoogle} onLogout={this.onLogout} userName={this.state.google.name} />

          {this.state.google.name ? <h2>Welcome:{this.state.google.name}</h2> : ''}

          <Switch>
            <Route exact path="/">
              {this.state.google.name ? (<Main
                deleteToDo={this.deleteToDo}
                addToServer={this.addToServer}
                toDoList={this.toDoList}
                timeZone={this.state.timeZone}
              />,
                <Calendar />) : ""}

            </Route>
            <Route exact path="/aboutme">
              <AboutMe />
            </Route>
          </Switch>
        </Router>


      </>
    )
  }
}

export default withAuth0(App);
