import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { getContactsReport } from "../../helpers/admin/adminContact";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [contacts, setContacts] = useState({
    total: "",
    pending: "",
    answered: "",
  });

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const getContactsNumber = async () => {
    try {
      const data = await getContactsReport();
      setContacts({
        all: data.totalContacts,
        pending: data.totalPendingContacts,
        answered: data.totalAnsweredContacts,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactsNumber();
  }, []);

  return (
    <Box display="flex" justifyContent="center" width="100%">
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        width={{ sm: "100", xs: "70%", md: "50%" }}
      >
        <Typography variant="h5" marginTop={1}>
          Hi! Nice to see you
        </Typography>
        <Box
          width={{ xs: "50%", md: "350px" }}
          display="flex"
          justifyContent="center"
          flexDirection={"column"}
          marginTop={2}
        >
          <Typography variant="body2">News:</Typography>

          {loading ? (
            <Alert icon={false} severity="success">
              Loading ...
            </Alert>
          ) : (
            <>
              {contacts.pending === "" ? (
                <Alert severity="success">
                  All contact request are answered!
                </Alert>
              ) : (
                <Alert severity="info">
                  You have {contacts.pending} pending contacts —{" "}
                  <u
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/admin/contact")}
                  >
                    check it out!
                  </u>
                </Alert>
              )}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Admin;
