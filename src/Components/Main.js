import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import AddTDItem from './AddTDItem';
import TDItems from './TDItems';


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toDoList: []
    }
  }

  addToDo = async (TDThing) => {
    await axios.post(`${process.env.REACT_APP_API}/ROUTE`, TDThing);
    this.getToDos();
  }

  getToDos = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API}/ROUTE`);
    const toDoList = response.data;
    console.log(response.data)
    this.setState({ toDoList });
  }

  deleteToDo = async (passedId) => {
    await axios.delete(`${process.env.REACT_APP_API}/ROUTE/${passedId}`);
    this.getToDos();
  }

  componentDidMount() {
    this.getToDos();
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
              <AddTDItem addToDo={this.addToDo} />
            </Col>
            <Col>
              <TDItems toDoList={this.state.toDoList} deleteToDo={this.deleteToDo} />
            </Col>
          </Row>

        </Container>
      </>
    );
  }
}

export default Main;
