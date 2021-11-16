import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick
import { formatDate } from '@fullcalendar/react';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import UpdateTask from './UpdateTask';

class Calendar extends React.Component {
  
  state = {
    weekendsVisible: true,
    currentEvents: [],
  }

  calendarRef = React.createRef();

  calendar = {
    plugins: [ googleCalendarPlugin ],
    googleCalendarApiKey: 'AIzaSyCV81aGBz0ZSJjUpP1k7R8UvwQrt7sSqxk', // Console API_KEY here
    events: {
      googleCalendarId: this.props.googleState.email,
      className: 'gcal-event' // an option!
    }
  }

  constructor(props) {
    super(props);
    this.props.updateCalendarRef(this.calendarRef);
  }

  

  runUpdateForm = (item) => {
    this.props.updateformHandler(item);
    console.log(this.props.showUpdate);
  }

  render() {
    return (
      <div className='demo-app'>
        {this.renderSidebar()}
        <div className='demo-app-main'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, googleCalendarPlugin]}
            googleCalendarApiKey={this.calendar.googleCalendarApiKey}
            events={this.calendar.events}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            select={this.handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            themeSystem='standard'
            ref={this.calendarRef}
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
        </div>
        <UpdateTask showUpdate={this.props.showUpdate} closeUpdate={this.props.closeUpdate} handleUpdate={this.props.handleUpdate} updatedObj={this.props.updatedObj} addToServer={this.props.addToServer} calendarRef={this.calendarRef}/>

      </div>
    )
  }

  renderSidebar() {
    return (
      <div className='demo-app-sidebar'>
        <div className='demo-app-sidebar-section'>
          <h2>Instructions</h2>
          <ul>
            <li>Select dates and you will be prompted to create a new event</li>
            <li>Drag, drop, and resize events</li>
            <li>Click an event to delete it</li>
          </ul>
        </div>
        <div className='demo-app-sidebar-section'>
        </div>
      </div>
    )
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }

  handleDateSelect = (selectInfo) => {
    this.runUpdateForm(selectInfo);
  }

  handleEventClick = (clickInfo) => {
    if (`Are you sure you want to delete the event '${clickInfo.event.title}'`) {
      // clickInfo.event.remove()
    }
  }

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }

}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <i>{event.title}</i>
    </li>
  )
}

export default Calendar;
