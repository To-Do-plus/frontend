import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import DateChooser from './DateChooser';


class AddTDItem extends React.Component {


  // handleChange = (e) => {
  //   e.preventDefault();
  //   const summary = e.target.summary.value;
  //   const location = e.target.location.value;
  //   const description = e.target.description.value;
  //   const startTime = e.target.startTime.value;
  //   const endTime = e.target.endTime.value;
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    let newTask = {
      summary: (e.target.summary.value),
      location: (e.target.location.value),
      description: (e.target.description.value),
      start: {
        dateTime: (e.target.startTime.value),
        timeZone: this.props.timeZone,
      },
      end: {
        dateTime: (e.target.endTime.value),
        timeZone: this.props.timeZone,
      },
    }
    this.props.addToServer(newTask)
  }

  render() {
    // onChange={this.handleChange}
    return (
      <Form data-testid="add-form" onSubmit={this.handleSubmit}>
        <Card style={{ width: '20rem' }}>
          <Card.Header>What's On Your List?</Card.Header>
          <Card.Body>
            <Form.Group>
              <Form.Label>Task Summary</Form.Label>
              <Form.Control type="text" placeholder="What do you need to do?" id="summary" />
              <Form.Label>Task Location</Form.Label>
              <Form.Control type="text" placeholder="Where does this need to happen?" id="location" />
              <Form.Label>Task Description</Form.Label>
              <Form.Control type="text" placeholder="Any details to remember?" id="description" />

              <Form.Label>Start Time</Form.Label>
              <Form.Control type="text" placeholder="When do you want to start?" id="startTime" />
              <Form.Label>End Time</Form.Label>
              <Form.Control type="text" placeholder="How long will this task take?" id="endTime" />
            </Form.Group>
            <DateChooser />

            <Button variant="primary" type="submit">Add To The List!</Button>
          </Card.Body>
        </Card>
      </Form>
    );
  }
}

export default AddTDItem;
