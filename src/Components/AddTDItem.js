import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
// import DateTimePicker from 'react-datetimepicker-bootstrap';

class AddTDItem extends React.Component {


  handleChange = (e) => {
    e.preventDefault();
    const summary = e.target.summary;
    const location = e.target.location;
    const description = e.target.description;
    const startTime = e.target.startTime;
    const endTime = e.target.endTime;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let newTask = {
      summary: (e.target.summary),
      location: (e.target.location),
      description: (e.target.description),
      start: {
        dateTime: (e.target.startTime),
        timeZone: this.props.timeZone,
      },
      end: {
        dateTime: (e.target.endTime),
        timeZone: this.props.timeZone,
      },
    }
    this.props.addToServer(newTask)
  }

  render() {

    return (
      <Form data-testid="add-form" onSubmit={this.handleSubmit}>
        <Card style={{ width: '20rem' }}>
          <Card.Header>What's On Your List?</Card.Header>
          <Card.Body>
            <Form.Group>
              <Form.Label>Task Summary</Form.Label>
              <Form.Control type="text" placeholder="What do you need to do?" summary="summary" onChange={this.handleChange} />
              <Form.Label>Task Location</Form.Label>
              <Form.Control type="text" placeholder="Where do you need to do it?" location="location" onChange={this.handleChange} />
              <Form.Label>Task Description</Form.Label>
              <Form.Control type="text" placeholder="Any details to remember?" description="description" onChange={this.handleChange} />
              <Form.Label>Start Time</Form.Label>
              <Form.Control type="text" placeholder="When do you want to start?" startTime="startTime" onChange={this.handleChange} />
              <Form.Label>End Time</Form.Label>
              <Form.Control type="text" placeholder="How long will this task take?" endTime="endTime" onChange={this.handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit">Add To The List!</Button>
          </Card.Body>
        </Card>
      </Form>
    );
  }
}

export default AddTDItem;
