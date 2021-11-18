import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AddTDItem from './AddTDItem';
import TDItems from './TDItems';
import Starburst from './Starburst';
import EmptyStarburst from './EmptyStarburst';
import Calendar from './Calendar';

class Main extends React.Component {

  render() {
    console.log(this.props.toDoList)
    return (
      <>
        <Container fluid>
          {/* <Row>
            <Col justify-content-md-center><h1>Your To Do List! </h1></Col>
          </Row> */}
          <br></br>
          <br></br>
          <Row>
            <Col md="auto">

              <AddTDItem
                addToServer={this.props.addToServer}
                timeZone={this.props.timeZone}
                calendarRef={this.props.calendarRef}
              // startDateTime={this.props.startDateTime} 
              // endDateTime={this.props.endDateTime}
              // handleStartDateTime={this.props.handleStartDateTime} 
              // handleEndDateTime={this.props.handleEndDateTime} 
              />

            </Col>
            <Col>
              <TDItems toDoList={this.props.toDoList} deleteToDo={this.props.deleteToDo} handleUpdate={this.props.handleUpdate} updateformHandler={this.props.updateformHandler}
                closeUpdate={this.props.closeUpdate}
                updatedObj={this.props.updatedObj}
                showUpdate={this.props.showUpdate}
                addToServer={this.props.addToServer}
                calendarRef={this.props.calendarRef} />
            </Col>
            <Col md="auto">
              {this.props.toDoList.length ? <Starburst toDoList={this.props.toDoList} getEventsServer={this.props.getEventsServer} /> : <EmptyStarburst toDoList={this.props.toDoList} getEventsServer={this.props.getEventsServer} />}
            </Col>
          </Row>
        </Container>
        <Calendar googleState={this.props.googleState} deleteToDo={this.props.deleteToDo}
          handleUpdate={this.props.handleUpdate} updateformHandler={this.props.updateformHandler}
          showUpdate={this.props.showUpdate} updatedObj={this.props.updatedObj}
          closeUpdate={this.props.closeUpdate}
          updateCalendarRef={this.props.updateCalendarRef}
          calendarRef={this.props.calendarRef}
          addToServer={this.props.addToServer}
          toDoList={this.props.toDoList} />
      </>
    );
  }
}

export default Main;
