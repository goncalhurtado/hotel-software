import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { validateContact } from "../../helpers/validation";
import { LoadingButton } from "@mui/lab";
import Typography from "@mui/material/Typography";
import { postContact } from "../../helpers/contact";

const ContactForm = ({ setFormData, formData }) => {
  const [error, setError] = useState({ status: false, message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setError({ status: false, message: "" });

    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateContact(formData, setError)) {
      return;
    }
    postContact(formData, setLoading);
  };

  return (
    <Box>
      {" "}
      <Grid
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "row" },
          justifyContent: "center",
        }}
      >
        <TextField
          type="text"
          label="First Name"
          variant="outlined"
          name="firstName"
          onChange={handleChange}
          sx={{
            marginRight: { xs: "10px", sm: "10px", md: "10px" },
            margin: "10px",
          }}
          inputProps={{ maxLength: 20 }}
        />{" "}
        <TextField
          type="text"
          label="Last Name"
          variant="outlined"
          name="lastName"
          onChange={handleChange}
          sx={{
            margin: "10px",
          }}
          inputProps={{ maxLength: 20 }}
        />
      </Grid>
      <Grid
        sx={{
          flexDirection: { xs: "column", sm: "row", md: "row" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          type="email"
          label="Email Address"
          variant="outlined"
          name="email"
          onChange={handleChange}
          sx={{
            marginRight: { xs: "10px", sm: "10px", md: "10px" },
            margin: "10px",
          }}
          inputProps={{ maxLength: 35 }}
        />
        <TextField
          type="number"
          onChange={handleChange}
          name="phone"
          label="Phone Number"
          sx={{
            marginRight: { xs: "10px", sm: "10px", md: "10px" },
            margin: "10px",
          }}
          inputProps={{ maxLength: 20 }}
        />
      </Grid>
      <Grid
        sx={{
          flexDirection: { xs: "column", sm: "row", md: "row" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          label="Message"
          variant="outlined"
          name="message"
          onChange={handleChange}
          sx={{
            width: { xs: "331px", sm: "464px", md: "464px" },
            margin: "10px",
          }}
          inputProps={{ maxLength: 130 }}
          multiline
          rows={4}
        />
      </Grid>
      <Box height={35} textAlign={"center"} sx={{ color: "red" }}>
        <Typography>{error.status && error.message}</Typography>
      </Box>
      <LoadingButton
        loading={!loading ? false : true}
        variant="contained"
        sx={{
          display: "flex",
          margin: "auto",
          width: { xs: "50%", sm: "20%", md: "20%" },
          marginBottom: "20px",
        }}
        onClick={handleSubmit}
      >
        Submit
      </LoadingButton>
    </Box>
  );
};

export default ContactForm;
