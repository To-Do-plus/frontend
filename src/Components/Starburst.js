import React from 'react';
import { Doughnut } from 'react-chartjs-2';
// TO DO:
// Total Time/60 Minutes = How many data elements. Populate this table with 1's
// Proportion of time per tasks/total time goes into the second selector

class Starburst extends React.Component {

  kitKat = () => {
    const array = this.props.toDoList.map((tDThing) => tDThing.summary);
    array.push('Free Time!');
    return array;
  }

  rolos = () => {
    const array = this.props.toDoList.map((tDThing) => tDThing.occupado);

    let minutos = 0;

    for (let i = 0; i < array.length; i++) {
      minutos += array[i];
    }

    let remainder = 60 - (minutos % 60);

    array.push(remainder);
    console.log(remainder);
    return array;
  }

  twix = () => {
    const array = this.props.toDoList.map((tDThing) => tDThing.occupado);

    let minutos = 0;

    for (let i = 0; i < array.length; i++) {
      minutos += array[i];
    }

    let horas = Math.ceil(minutos / 60);

    let progress = [];
    for (let i = 0; i < horas; i++) {
      progress.push(1);
    }
    return progress;
  }


  everything = {
    // labels: this.props.toDoList.map((tDThing) => tDThing.summary),
    labels: this.kitKat(),
    datasets: [
      {
        label: 'Tasks in Hours',
        data: this.rolos(),
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
      {
        label: 'Time in Hours',
        data: this.twix(),
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
    return (
      <>
        <div className='header'>
          <h1 className='title'>Your Time: Visualized</h1>
          <p className='inner'>The Inner Ring Shows How Many Hours OF Work You Have Ahead</p>
          <p className='outer'>The Outer Ring Shows How Your Tasks Compare to Your Time</p>
        </div>
        <Doughnut data={this.everything} />
      </>

    );
  }
}
export default Starburst;