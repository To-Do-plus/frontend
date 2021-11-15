import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const DateTime = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        showTimeSelect
        timeFormat="p"
        timeIntervals={15}
        dateFormat="Pp"
      />
    </>
  );
};

export default DateTime;