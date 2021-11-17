import React from 'react';
import { Doughnut } from 'react-chartjs-2';
// TO DO:
// Total Time/60 Minutes = How many data elements. Populate this table with 1's
// Proportion of time per tasks/total time goes into the second selector

class Starburst extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  everything = {
    labels: this.props.localKitKat,
    datasets: [
      {
        label: 'Tasks in Hours',
        data: this.props.localRolos,
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
      {
        label: 'Time in Hours',
        labels: [
          'hour',
        ],
        data: this.props.localTwix,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  render() {
    console.log(this.props);
    return (
      <>
        <div className='header'>
          <h1 className='title'>Your Time: Visualized</h1>
          <p className='inner'>The Inner Ring Shows How Many Hours OF Work You Have Ahead</p>
          <p className='outer'>The Outer Ring Shows How Your Tasks Compare to Your Time</p>
        </div>
        {this.props.localRolos.length > 1 ? <Doughnut data={this.everything} /> : ""}
      </>

    );
  }
}
export default Starburst;