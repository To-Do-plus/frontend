import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class UpdateTask extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('click');
    
    let newObj = {
        summary: (event.target.summary.value)? event.target.summary.value : this.props.updatedObj.summary,
        location: (event.target.location.value)? event.target.location.value : this.props.updatedObj.location,
        description: (event.target.description.value)? event.target.description.value : this.props.updatedObj.description,
        start: this.props.updatedObj.start,
        end: this.props.updatedObj.end,
        _id: this.props.updatedObj._id
      }
      console.log(newObj);    
      this.props.closeUpdate();
    this.props.handleUpdate(newObj);
    
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
                <Form.Label>Update Task Location</Form.Label>
                <Form.Control type="text" defaultValue={this.props.updatedObj.location} id="location" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Update Task Description</Form.Label>
                <Form.Control as="textarea" rows={3} id="description" defaultValue={this.props.updatedObj.description}  />
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