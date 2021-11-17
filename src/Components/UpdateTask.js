import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class UpdateTask extends React.Component {
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

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log('click');

  
    let calendarApi = this.props.calendarRef.current.getApi();
    
    let newObj = {
      summary: (event.target.summary.value) ? event.target.summary.value : this.props.updatedObj.summary,
      // location: (event.target.location.value)? event.target.location.value : this.props.updatedObj.location,
      description: (event.target.description.value)? event.target.description.value : this.props.updatedObj.description,
      // start: this.props.updatedObj._id ? this.props.updatedObj.start : {
      //   dateTime: new Date(this.props.updatedObj.start),
      //   timeZone: 'UTC',
      // },
      // end: this.props.updatedObj._id  ? this.props.updatedObj.end : {
      //   dateTime: new Date(this.props.updatedObj.end),
      //   timeZone: 'UTC',
      // },
      // allDay: !!this.props.updatedObj.allDay,
      occupation: (event.target.time.value)? event.target.time.value : this.props.updatedObj.occupation,
      _id: this.props.updatedObj._id
    } 

    // if it's from the calendar, then add to server rather than update
    if (newObj._id) { 
      this.props.handleUpdate(newObj) 
      let event = calendarApi.getEventById(newObj._id);
      if (event) {
        event.setProp('title', newObj.summary);
      }
    } else {
      const newTask =  await this.props.addToServer(newObj) 
      newObj._id = newTask._id;
      calendarApi.unselect() // clear date selection

      calendarApi.addEvent({
        id: newObj._id,
        title: newObj.summary,
        // start: new Date(newObj.start.dateTime).toISOString(),
        // end: new Date(newObj.end.dateTime).toISOString(),
        // allDay: !!newObj.allDay
        occupation: newObj.occupation
      });
    }
    
    
      
    console.log(newObj);    
    this.props.closeUpdate();

    

    
    
  }

  render() {
    return(
      <>
      <Modal show={this.props.showUpdate}>
        <Modal.Dialog>
          <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Update Task Summary</Form.Label>
                <Form.Control type="text" defaultValue={this.props.updatedObj.summary} id="summary" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Update Task Description</Form.Label>
                <Form.Control as="textarea" rows={3} id="description" defaultValue={this.props.updatedObj.description}  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>How Many Minutes will this task take?</Form.Label>
              <Form.Control placeholder="IN MINUTES!" id="time" input type="text" pattern="[0-9]*" onInput={this.handleNumber.bind(this)} value={this.state.busyTime} />
              </Form.Group>

              <Button variant="primary" type="submit">Submit</Button>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
        </Modal>
      </>
    )
  }
}

export default UpdateTask;