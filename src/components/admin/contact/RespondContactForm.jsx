import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import { LoadingButton } from "@mui/lab";
import { openingResponseContact } from "../../../helpers/admin/responseHelpers";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const RespondContactForm = ({ data }) => {
  const responseInitial = openingResponseContact(data.firstName);
  const [checked, setChecked] = useState(true);

  const [emailData, setEmailData] = useState({
    email: data.email,
    subject: "Response regarding your contact",
    response: responseInitial,
    firstName: data.firstName,
    setAnswered: checked,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    state: false,
    message: "",
  });

  const handleCheckboxChange = (e) => {
    setEmailData({ ...emailData, setAnswered: e.target.checked });
  };

  const handleInputChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
    setError({ state: false, message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(emailData);
    setLoading(false);
  };

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems="center"
        justifyContent="center"
      >
        <FormControl error={error.status}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems="center"
            justifyContent="center"
          >
            <TextField
              label="subject"
              defaultValue={emailData.subject}
              name="subject"
              type="text"
              onChange={handleInputChange}
              error={error.status}
              sx={{ marginBottom: "15px", width: "500px" }}
            />
            <TextField
              label="email"
              defaultValue={emailData.email}
              name="email"
              type="text"
              onChange={handleInputChange}
              error={error.status}
              sx={{ marginBottom: "15px", width: "500px" }}
            />
            <TextField
              label="message"
              defaultValue={emailData.response}
              name="response"
              type="text"
              onChange={handleInputChange}
              error={error.status}
              sx={{ marginBottom: "15px", width: "500px" }}
              inputProps={{ maxLength: 1000 }}
              multiline
              rows={7}
            />

            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <FormControlLabel
                label="set contact request as answered"
                control={
                  <Checkbox
                    checked={emailData.setAnswered}
                    onChange={handleCheckboxChange}
                    name="setAnswered"
                  />
                }
              />
              <Typography
                variant="subtitle1"
                sx={{
                  height: "20px",
                  color: error.status === true ? "red" : "green",
                }}
              >
                {error.message}
              </Typography>
              <LoadingButton
                loading={!loading ? false : true}
                variant="contained"
                sx={{ marginTop: "15px" }}
                onClick={(e) => handleSubmit(e)}
              >
                Submit
              </LoadingButton>
            </Box>
          </Box>
        </FormControl>
      </Box>
    </>
  );
};

export default RespondContactForm;
