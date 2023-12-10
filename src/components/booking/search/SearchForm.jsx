import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import SelectCapacity from "../../SelectCapacity";
import DatePickerBooking from "./DatePickerBooking";
import { LoadingButton } from "@mui/lab";
import {
  nightsCalculator,
  searchAvailableRooms,
} from "../../../helpers/booking";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import DatePreview from "./DatePreview";
import Grid from "@mui/material/Grid";

const SearchForm = ({ setAvailables, selected, setSelected }) => {
  const [loading, setLoading] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [capacity, setCapacity] = useState(1);

  const [date, setDate] = useState({
    start_date: "",
    end_date: "",
  });

  const handleSubmit = async () => {
    const nights = nightsCalculator(date.start_date, date.end_date);

    setSelected({
      check_in: date.start_date,
      check_out: date.end_date,
      capacity: capacity,
      nights: nights,
    });

    const queryString = `search?check_in=${date.start_date}&check_out=${date.end_date}&capacity=${capacity}`;

    searchAvailableRooms(queryString, setLoading, setAvailables);
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        sx={{
          width: { xs: "90%", sm: "80%", lg: "50%" },
          height: { xs: "140px", sm: "80px", lg: "100%" },
          marginBottom: { xs: "20px", sm: "25px" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            left: "0",
            marginTop: "25px",
            marginLeft: { xs: "0px", sm: "10px", md: "60px" },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              zIndex: "1",
              marginTop: "-3px",
              cursor: "pointer",
            }}
            onClick={() => setShowDate(!showDate)}
          >
            <DatePreview date={date} />
          </Box>
          <Box
            sx={{
              display: showDate ? "block" : "none",
              position: "absolute",
              border: "3px solid #dadadb",
              zIndex: "1",
              marginTop: "48px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <DatePickerBooking date={date} setDate={setDate} />
          </Box>
        </Box>

        <Box
          display="flex"
          sx={{
            justifyContent: { xs: "end", sm: "center" },
            alignItems: { xs: "flex-start", sm: "center" },
            marginTop: { xs: "-18px", sm: "0px" },
          }}
        >
          <Box
            onClick={() => setShowDate(!showDate)}
            sx={{ cursor: "pointer", marginTop: { xs: "25px", sm: "20px" } }}
          >
            {!showDate ? (
              <ExpandMoreIcon style={{ fontSize: 40, color: "gray" }} />
            ) : (
              <CloseIcon style={{ fontSize: 40, color: "gray" }} />
            )}
          </Box>
          <Box sx={{ marginLeft: { xs: "0px", sm: "20px" } }}>
            <SelectCapacity capacity={capacity} setCapacity={setCapacity} />
          </Box>
        </Box>

        <Box
          sx={{
            margin: { xs: "0", sm: "auto" },
            display: { xs: "flex", sm: "initial" },
            justifyContent: "center",

            marginLeft: { xs: "0px", sm: "20px" },
          }}
        >
          <LoadingButton
            loading={!loading ? false : true}
            variant="contained"
            sx={{ marginTop: { xs: "5px", sm: "24px" } }}
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
