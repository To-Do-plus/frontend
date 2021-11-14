
import React from "react";
import Calendar from "@ericz1803/react-google-calendar";

require('dotenv').config();

const API_KEY = "YOUR_API_KEY";
let calendars = [
  {calendarId: "YOUR_CALENDAR_ID"},
  {
    calendarId: "YOUR_CALENDAR_ID_2",
    color: "#B241D1" //optional, specify color of calendar 2 events
  }
];

class Example extends React.Component {
  render() {
    return (
      <div>
        <Calendar apiKey={API_KEY} calendars={calendars} />
      </div>
    )
  }
}

export default Example;
