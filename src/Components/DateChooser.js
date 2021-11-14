import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const DateChooser = () => {
  const [startDate, setStartDate] = useState(new Date("2021/11/18"));
  const [endDate, setEndDate] = useState(new Date("2021/11/18"));
  // const [startDate, setStartDate] = useState(
  //   setHours(setMinutes(new Date(), 30), 16)
  // );
  // const [endDate, setEndDate] = useState(
  //   setHours(setMinutes(new Date(), 30), 16)
  // );
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
      {/* <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        includeTimes={[
          setHours(setMinutes(new Date(), 0), 17),
          setHours(setMinutes(new Date(), 30), 18),
          setHours(setMinutes(new Date(), 30), 19),
          setHours(setMinutes(new Date(), 30), 17),
        ]}
        dateFormat="MMMM d, yyyy h:mm aa"
      /> */}
    </>
  );
};

export default DateChooser;