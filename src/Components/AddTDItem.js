import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

class AddTDItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formData: {}
    };
  }

  handleChange = (e) => {
    const summary = e.target.summary;
    const description = e.target.description;
    const startTime = e.target.startTime;
    const endTime = e.target.endTime;
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
              <Form.Label>Task Summary</Form.Label>
              <Form.Control type="text" placeholder="What do you need ttot do?" summary="summary" onChange={this.handleChange} />
              <Form.Label>Task Description</Form.Label>
              <Form.Control type="text" placeholder="Any details to remember?" thingsWeWant="thingsWeWant" onChange={this.handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit">Add To The List!</Button>
          </Card.Body>
        </Card>
      </Form>
    );
  }
}

export default AddTDItem;
