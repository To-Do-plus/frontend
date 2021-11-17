import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AddTDItem from './AddTDItem';
import TDItems from './TDItems';
import Starburst from './Starburst';

class Main extends React.Component {

  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col justify-content-md-center><h1>Your To Do List! </h1></Col>
          </Row>
          <Row>
            <Col md="auto">
              <AddTDItem
                addToServer={this.props.addToServer}
                timeZone={this.props.timeZone}
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
                  showUpdate={this.props.showUpdate} />
            </Col>
            <Col style={{ width: '20rem' }}>
              <Starburst toDoList={this.props.toDoList} />
            </Col>
          </Row>

        </Container>
      </>
    );
  }
}

export default Main;
