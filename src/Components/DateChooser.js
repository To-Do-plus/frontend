
import DatePicker from "react-datepicker";
import React from "react";

import "react-datepicker/dist/react-datepicker.css";

class DateChooser extends React.Component{
  constructor(props){
    super(props); 
      this.state = {
        start : new Date(),
        end : new Date()
      }
    }
  
handleStart = (date) => {
  this.setState({start:date});
}
handleEnd = (date) => {
  this.setState({end:date});
}

render(){ 
return (
    
    <>
      <DatePicker
        selected={this.state.start}
        onChange={(date) => this.props.handleStartDateTime(date) & this.handleStart(date)}
        selectsStart
        startDate={this.state.start}
        endDate={this.state.end}
        showTimeSelect
        timeFormat="p"
        timeIntervals={15}
        dateFormat="Pp"
      />
      <DatePicker
        selected={this.state.end}
        onChange={(date) => this.props.handleEndDateTime(date) & this.handleEnd(date)}
        selectsEnd
        startDate={this.state.start}
        endDate={this.state.end}
        minDate={this.state.start}
        showTimeSelect
        timeFormat="p"
        timeIntervals={15}
        dateFormat="Pp"
      />
    </>
  )
}
}
export default DateChooser;