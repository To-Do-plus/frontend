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
                  Jae is a Software Developer with experience in Project Management and Accounts Management who loves learning, solving problems, and organizing teams. Jae enjoys working with Javascript in both front-end and back-end applications and hopes to use their skills to bring websites to life with people who are working to change the world for the better. In the unlikely event of having free time, Jae loves exploring New York City (and anywhere else they can get to!), writing, and performing Sketch Comedy.
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
