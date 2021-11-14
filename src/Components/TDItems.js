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
            <Card key={tDThing._id}>
              <Card.Body>
                <p>To Do Item Info. Including a button for setting time stretch goal perhaps?</p>

                <Button variant="danger" onClick={() => { this.props.deleteToDo(tDThing._id) }}>You Did It!</Button>
              </Card.Body>

            </Card>
          ) : ''
        }


      </section >
    );
  }
}


export default TDItems;
