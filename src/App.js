import React from 'react';
// import Calendar from 'react-calendar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main'
import AboutMe from './Components/AboutMe'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }


  render() {
    return (
      <>
        {/* <Calendar /> */}
        <Main />
        <AboutMe />
        {/* <Router>
          <Switch>
            <Route exact path="/">
            <Calendar />
            </Route>
            <Route exact path="/">
            </Route>
            <Route exact path="/aboutme">
            <AboutMe />
            </Route>
          </Switch>
        </Router> */}

      </>
    )
  }
}

export default App;
