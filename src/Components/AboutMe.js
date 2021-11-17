import React from 'react';

import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Chris from './headshots/Chris.jfif';
import Jae from './headshots/Jae.jpg';
import Anthony from './headshots/Anthony.jpg';



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
                     Jae is a Software Developer with experience in Project Management and Accounts Management who loves learning, solving problems, and organizing teams. Jae enjoys working with Javascript in both front-end and back-end applications and hopes to use their skills to bring websites to life with people who are working to change the world for the better. In the unlikely event of having free time, Jae loves exploring New York City (and anywhere else they can get to!), writing, and performing Sketch Comedy.
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
                <Image style={{ width: '100%' }} src={Anthony} rounded />
              </div>
              <div className="col-md-10">
                <div >
                  <h5>Anthony Turinski</h5>
                  <p className="text-center">
                    Anthony is an aspiring Software Developer with a background in odd jobs. He believes the ultimate goal of technology should be to reduce humanity’s collective burden. Just like how the refrigerator solved food spoilage and the washing machine freed up hours of scrubbing, he wants to build programs that free people from their chains of labor.
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
