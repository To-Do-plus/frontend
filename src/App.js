import React from 'react';
import Calendar from './Components/Calendar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './Header';
import Main from './Components/Main'
import AboutMe from './Components/AboutMe'
import ToDoPlus from './ToDoPlus.png';
import Image from 'react-bootstrap/Image';

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
      startDateTime: Date(),
      endDateTime: Date(),
      toDoList: [],
      showUpdate: false,
      updateForm: false,
      updatedObj: {},
      calendarRef: null,
      localKitKat: [],
      localRolos: [],
      localTwix: []
    }
  }

  handleStartDateTime = (date) => {
    this.setState({ startDateTime: date });
    console.log(this.state.startDateTime);
  }

  handleEndDateTime = (date) => {
    this.setState({ endDateTime: date });
    console.log(this.state.endDateTime);
  }

  resGoogle = (res) => {
    console.log(res);
    this.setState({ accessToken: res.tokenObj.access_token });
    this.setState({ google: res.profileObj })
    console.log(this.state.google);
    // this.getEventsAPI();
  }


  onLogout = () => {
    this.setState({ accessToken: '' });
    this.setState({ google: [] })
  }

  updateformHandler = (itemObj) => {
    this.setState({
      showUpdate: true,
      updateForm: true,
      updatedObj: itemObj,
    })
    console.log(itemObj);
  }

  closeUpdate = () => {
    this.setState({
      showUpdate: false,
    })
  }

  updateCalendarRef = (ref) => {
    this.setState({
      calendarRef: ref
    });
  }
  // getEventsAPI = async () => {
  //   // This function here is pulling things fromt he API NOT the server
  //   let URL = `https://www.googleapis.com/calendar/v3/calendars/primary/events`
  //   let config = {
  //     headers: { "Authorization": `Bearer ${this.state.accessToken}` }
  //   }
  //   try {
  //     let eventData = await axios.get(URL, config);

  //     this.setState({
  //       timeZone: eventData.data.timeZone
  //     });
  //     // eventData.data.items.map((events, idx) =>{
  //     //   let eachTask = {
  //     //     summary: events.summary,
  //     //     location: events.location,
  //     //     description: events.description,
  //     //     start: events.start,
  //     //     end: events.end
  //     //   }
  //     //   this.state.toDoList.push(eachTask);
  //     //   return this.state.toDoList;

  //     // })
  //     console.log(this.state.toDoList);
  //     console.log(this.state.timeZone);
  //   }
  //   catch (err) {
  //     console.log('there was an error with the API get', err);
  //   }
  // }

  kitKat = () => {
    const array = this.state.toDoList.map((tDThing) => tDThing.summary);
    array.push('Free Time!');
    this.setState({
      localKitKat: array,
    })
    return array;
  }

  rolos = () => {
    const array = this.state.toDoList.map((tDThing) => tDThing.occupation);
    console.log(array);
    let minutos = 0;

    for (let i = 0; i < array.length; i++) {
      minutos += array[i];
    }

    let remainder = 60 - (minutos % 60);

    array.push(remainder);
    console.log(remainder);
    this.setState({
      localRolos: array,
    })
    return array;
  }

  twix = () => {
    const array = this.state.toDoList.map((tDThing) => tDThing.occupation);

    let minutos = 0;

    for (let i = 0; i < array.length; i++) {
      minutos += array[i];
    }

    let horas = Math.ceil(minutos / 60);

    let progress = [];
    for (let i = 0; i < horas; i++) {
      progress.push(1);
    }
    this.setState({
      localTwix: array,
    })
    return progress;
  }


  getEventsServer = async () => {
    //THIS NEEDS TO BE UPDATED BEFORE DEPLOYING!!!!!
    let url = `http://localhost:3001/events`;
    axios.get(url)
      .then(eventObj => eventObj.data)
      .then(data => this.setState({ toDoList: data }))
      .catch(error => console.log('error', error.message));
  }

  // getFromServer =?email=${this.state.google.email}

  addToServer = async (TDThing) => {
    let newTask = await axios.post(`http://localhost:3001/events`, TDThing);
    this.setState({ toDoList: [...this.state.toDoList, newTask.data] })
    // this.getEventsAPI();
    this.getEventsServer();
    this.rolos();
    this.twix();
    console.log('newTask', newTask.data);
    return newTask.data;
  }

  handleUpdate = async (event) => {
    let url = `http://localhost:3001/events/${event._id}`;

    let putObj = {
      summary: event.summary,
      location: event.location,
      description: event.description,
      occupation: event.occupation,
      start: {
        dateTime: event.dateTime,
        timeZone: event.timeZone,
      },
      end: {
        dateTime: event.dateTime,
        timeZone: event.timeZone,
      },


    }
    let updatedTask = await axios.put(url, putObj);
    console.log(updatedTask);
    // let updatedData = updatedEvent.data;
    // let copyState = this.state.thDoList.map((event, idx) => {
    //   if(event._id === updatedData._id) return updatedData;
    //   else {return event};
    // })
    // this.setState({
    //   toDoList: copyState
    // })
    this.getEventsServer();
    this.rolos();
    this.twix();
  }

  deleteFromServer = async (passedId) => {
    console.log('click');
    let deletedEvent = await axios.delete(`http://localhost:3001/events/${passedId}`);
    console.log(passedId);
    let deletedEventData = deletedEvent.data
    console.log(deletedEventData);
    let copyState = this.state.toDoList
    let filteredEvents = copyState.filter((item) => item._id !== deletedEventData._id);
    this.setState({ toDoList: filteredEvents });
    // this.getEventsAPI(); STRETCH GOAL TO DELETE OFF OF GOOGLE CALENDAR
    // this.getEventsServer();
    let calendarApi = this.state.calendarRef.current.getApi();
    let event = calendarApi.getEventById(passedId);
    if (event) {
      event.remove();
    }
    this.rolos();
    this.twix();
  }


  async componentDidMount() {
    // this.getEventsAPI();
    await this.getEventsServer();
    this.rolos();
    this.twix();
    this.kitKat();
  }

  render() {

    return (
      <>


        <Router>

          <Header resGoogle={this.resGoogle} onLogout={this.onLogout} userName={this.state.google.name} />



          <Switch>
            <Route exact path="/">

              {this.state.google.name ?
                <Main
                  handleUpdate={this.handleUpdate}
                  deleteToDo={this.deleteFromServer}
                  addToServer={this.addToServer}
                  toDoList={this.state.toDoList}
                  timeZone={this.state.timeZone}
                  getEventsServer={this.getEventsServer}
                  updateformHandler={this.updateformHandler}
                  closeUpdate={this.closeUpdate}
                  updatedObj={this.state.updatedObj}
                  showUpdate={this.state.showUpdate}
                  googleState={this.state.google}
                  calendarRef={this.state.calendarRef}
                  updateCalendarRef={this.updateCalendarRef}
                  kitKat={this.kitKat}
                  twix={this.twix}
                  rolos={this.rolos}
                  localKitKat={this.state.localKitKat}
                  localTwix={this.state.localTwix}
                  localRolos={this.state.localRolos}
                // startDateTime={this.state.startDateTime}
                // endDateTime={this.state.endDateTime}
                // handleEndDateTime={this.handleEndDateTime}
                // handleStartDateTime={this.handleStartDateTime}
                /> : ""}
              {this.state.google.name ? "" : <Image fluid src={ToDoPlus} />}
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
