import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class TDItems extends React.Component {

  render() {


    return (
      <section>

        <h2>Things on your List:</h2>
        {this.props.toDoList ?
          this.props.toDoList.map((tDThing) =>
            <Card border="primary" style={{ width: '30rem' }} key={tDThing._id}>
              <Card.Body>
                <Card.Title>{tDThing.summary}</Card.Title>
                <Card.Text>
                  <p>Details: {tDThing.description} </p>
                  <p>Location: {tDThing.location}</p>
                  <p>Start Time: {tDThing.start.dateTime} </p>
                  <p>End Time: {tDThing.end.dateTime}</p>
                </Card.Text>
                <Button variant="success" onClick={() => { this.props.deleteToDo(tDThing._id) }}>Done!</Button>

                <Button variant="secondary" onClick={() => { this.props.handleUpdate(tDThing._id) }}>Edit</Button>

                {/* <Button variant="primary" onClick={() => { this.props.ADDTOCALENDARFUNCTION(tDThing._id) }}>Add To Calendar</Button> */}
              </Card.Body>

            </Card>
          ) : ''
        }

        <Card >
          <Card.Header>Sample Task</Card.Header>
          <Card.Body>
            <Card.Title>Add Your To Do List!</Card.Title>
            <Card.Text>
              You can add To-Do List items, check them off, edit them, or even add them to your Google Calendar! Get started by entering something in the table to the left.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

      </section >
    );
  }
}


export default TDItems;
