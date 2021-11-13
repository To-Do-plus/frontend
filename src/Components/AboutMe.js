import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row } from 'react-bootstrap';
import Chris from './headshots/Chris.jfif';
import Jae from './headshots/Jae.jpg';


class AboutMe extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Chris} />
              <Card.Body>
                <Card.Title>Chris Rarig</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Jae} />
              <Card.Body>
                <Card.Title>Jae Loney</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Chris} />
              <Card.Body>
                <Card.Title>Anthony Turinski</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

          </Row>
        </Container >
      </>
    )
  }
}

export default AboutMe;
