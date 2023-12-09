import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import SelectCapacity from "../../SelectCapacity";
import DatePickerBooking from "./DatePickerBooking";
import { LoadingButton } from "@mui/lab";
import { searchAvailableRooms } from "../../../helpers/booking";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import DatePreview from "./DatePreview";

const SearchForm = ({ setAvailables, selected, setSelected }) => {
  const [loading, setLoading] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [capacity, setCapacity] = useState(1);

  const [date, setDate] = useState({
    start_date: "",
    end_date: "",
  });

  const handleSubmit = async () => {
    setSelected({
      check_in: date.start_date,
      check_out: date.end_date,
      capacity: capacity,
    });

    const queryString = `search?check_in=${date.start_date}&check_out=${date.end_date}&capacity=${capacity}`;

    searchAvailableRooms(queryString, setLoading, setAvailables);
  };

  return (
    <>
      <Box
        display="flex"
        sx={{
          width: { xs: "90%", sm: "80%", lg: "50%" },
          height: { xs: "80px", sm: "80px", lg: "100%" },
        }}
        // backgroundColor="red"
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            left: "0",
            marginTop: "25px",
            marginLeft: "50px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              zIndex: "1",
              marginTop: "-3px",
            }}
          >
            <DatePreview date={date} />
          </Box>
          <Box
            sx={{
              display: showDate ? "block" : "none",
              position: "absolute",
              backgroundColor: "red",
              zIndex: "1",
              marginTop: "48px",
            }}
          >
            {<DatePickerBooking date={date} setDate={setDate} />}
          </Box>
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center">
          <a
            onClick={() => setShowDate(!showDate)}
            style={{ cursor: "pointer", marginTop: "10px" }}
          >
            {!showDate ? (
              <ExpandMoreIcon style={{ fontSize: 40, color: "gray" }} />
            ) : (
              <CloseIcon style={{ fontSize: 40, color: "gray" }} />
            )}
          </a>
          <Box sx={{ marginLeft: "20px" }}>
            <SelectCapacity capacity={capacity} setCapacity={setCapacity} />
          </Box>
        </Box>

        <Box
          sx={{
            margin: "auto",
            height: "100%",
            marginLeft: "20px",
          }}
        >
          <LoadingButton
            loading={!loading ? false : true}
            variant="contained"
            sx={{ marginTop: "24px" }}
            onClick={handleSubmit}
          >
            Search
          </LoadingButton>
        </Box>
      </Box>
    </>
  );
};

export default SearchForm;
