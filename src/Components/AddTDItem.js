import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
// import DateChooser from './DateChooser';


class AddTDItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busyTime: ''
    }
  }

  handleNumber(evt) {
    const busyTime = (evt.target.validity.valid) ? evt.target.value : prompt('Please enter time in minutes');

    this.setState({ busyTime });
  }

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
      // location: (e.target.location.value),
      description: (e.target.description.value),
      occupation: (this.state.busyTime),
      start: {
        dateTime: this.props.startDateTime,
        timeZone: this.props.timeZone,
      },
      end: {
        dateTime: this.props.endDateTime,
        timeZone: this.props.timeZone,
      },
    }
    this.props.addToServer(newTask)
    console.log(newTask)
  }

  render() {
    // onChange={this.handleChange}
    return (
      <Form onSubmit={this.handleSubmit}>
        <Card style={{ width: '21rem' }}>
          <Card.Header>What's On Your List?</Card.Header>
          <Card.Body>
            <Form.Group>
              <Form.Label>Task Summary</Form.Label>
              <Form.Control type="text" placeholder="What do you need to do?" id="summary" />
              {/* <Form.Label>Task Location</Form.Label>
              <Form.Control type="text" placeholder="Where does this need to happen?" id="location" /> */}
              <Form.Label>Task Details</Form.Label>
              <Form.Control type="text" placeholder="Any details to remember?" id="description" />
              <Form.Label>How Many Minutes will this task take?</Form.Label>
              <Form.Control placeholder="IN MINUTES!" input type="text" pattern="[0-9]*" onInput={this.handleNumber.bind(this)} value={this.state.busyTime} />
            </Form.Group>
            {/* <DateChooser startDateTime={this.props.startDateTime} endDateTime={this.props.endDateTime} handleStartDateTime={this.props.handleStartDateTime}
              handleEndDateTime={this.props.handleEndDateTime} /> */}

            <Button variant="primary" type="submit">Add To The List!</Button>
          </Card.Body>
        </Card>
      </Form>
    );
  }
}

export default AddTDItem;
