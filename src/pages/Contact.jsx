import React, { useState } from "react";
import ContactForm from "../components/contact/ContactForm";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      textAlign={"center"}
      alignItems={"center"}
      padding={1}
    >
      <Typography variant="h4">Contact us!</Typography>
      <ContactForm setFormData={setFormData} formData={formData} />
    </Box>
  );
};

export default Contact;
