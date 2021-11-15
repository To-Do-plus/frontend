import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const DateTimeEnd = () => {
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsStart
        showTimeSelect
        timeFormat="p"
        timeIntervals={15}
        dateFormat="Pp"
      />
    </>
  );
};

export default DateTimeEnd;