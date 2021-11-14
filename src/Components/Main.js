import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import AddTDItem from './AddTDItem';
import TDItems from './TDItems';


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }




  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col><h1>Your To Do List!</h1></Col>
          </Row>
          <Row>
            <Col md="auto">
              <AddTDItem addToServer={this.props.addToServer} timeZone={this.props.timeZone} />
            </Col>
            <Col>
              <TDItems toDoList={this.props.toDoList} deleteToDo={this.props.deleteToDo} />
            </Col>
          </Row>

        </Container>
      </>
    );
  }
}

export default Main;
