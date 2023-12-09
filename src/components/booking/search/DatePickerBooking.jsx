import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

import "../../../style/datePicker.css";

const DatePickerBooking = ({ date, setDate }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = (ranges) => {
    const from = format(ranges.selection.startDate, "MM/dd/yyyy");
    const to = format(ranges.selection.endDate, "MM/dd/yyyy");

    setDateRange({
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
      key: "selection",
    });

    setDate({ start_date: from, end_date: to });
  };

  const selectionRange = {
    startDate: dateRange.startDate,
    endDate: dateRange.endDate,
    key: "selection",
  };

  return (
    <>
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        minDate={new Date()}
        showDateDisplay={false}
        showMonthAndYearPickers={true}
        showMonthArrow={true}
        className="rdrDateRangeWrapper"
        style={{ width: "326px" }}
      />
    </>
  );
};

export default DatePickerBooking;
