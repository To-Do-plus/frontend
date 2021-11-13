import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import DateTimePicker from 'react-datetimepicker-bootstrap';

class AddTDItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formData: {}
    };
  }

  handleChange = (e) => {
    const thingsWeWant = e.target.thingsWeWant;
    const formData = e.target.formData;
    // formData[field] = value;
    this.setState({ formData });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addToDo(this.state.formData)
  }

  render() {

    return (
      <Form data-testid="add-form" onSubmit={this.handleSubmit}>
        <Card style={{ width: '18rem' }}>
          <Card.Header>What's On Your List?</Card.Header>
          <Card.Body>
            <Form.Group>
              <Form.Label>What do you need to do?</Form.Label>
              <Form.Control type="text" placeholder="To Do Item" thingsWeWant="thingsWeWant" onChange={this.handleChange} />
              <Form.Label>Anything special to remember?</Form.Label>
              <Form.Control type="text" placeholder="To Do Item" thingsWeWant="thingsWeWant" onChange={this.handleChange} />
              <Form.Label>To Do Item</Form.Label>
              <Form.Control type="text" placeholder="To Do Item" thingsWeWant="thingsWeWant" onChange={this.handleChange} />
              <Form.Label>To Do Item</Form.Label>
              <Form.Control type="text" placeholder="To Do Item" thingsWeWant="thingsWeWant" onChange={this.handleChange} />
              <Form.Label>To Do Item</Form.Label>
              <Form.Control type="text" placeholder="To Do Item" thingsWeWant="thingsWeWant" onChange={this.handleChange} />
              <Form.Label>To Do Item</Form.Label>
              <Form.Control type="text" placeholder="To Do Item" thingsWeWant="thingsWeWant" onChange={this.handleChange} />
              <DateTimePicker id="datetimepicker" />
            </Form.Group>
            <Button variant="primary" type="submit">Add To The List!</Button>
          </Card.Body>
        </Card>
      </Form>
    );
  }
}

export default AddTDItem;
