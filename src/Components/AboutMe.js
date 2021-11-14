import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Chris from './headshots/Chris.jfif';
import Jae from './headshots/Jae.jpg';



class AboutMe extends React.Component {
  render() {
    return (
      <>
        <Container>
          <h1>About the Creators:</h1>

          <div className="card mb-1" style={{ width: '70rem' }}>
            <div className="row no-gutters">
              <div className="col-md-2 ">
                <Image style={{ width: '100%' }} src={Chris} rounded />
              </div>
              <div className="col-md-10">
                <div>
                  <h5 >Chris Rarig</h5>
                  <p className="text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-1" style={{ width: '70rem' }}>
            <div className="row no-gutters">

              <div className="col-md-10">
                <div >
                  <h5 className="text-end">Jae Loney</h5>
                  <p className="text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
              <div className="col-md-2 ">
                <Image style={{ width: '100%' }} src={Jae} rounded />
              </div>
            </div>
          </div>

          <div className="card mb-1" style={{ width: '70rem' }}>
            <div className="row no-gutters">
              <div className="col-md-2 ">
                <Image style={{ width: '100%' }} src={Chris} rounded />
              </div>
              <div className="col-md-10">
                <div >
                  <h5>Anthony Turinski</h5>
                  <p className="text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </div>


        </Container >
      </>
    )
  }
}

export default AboutMe;
