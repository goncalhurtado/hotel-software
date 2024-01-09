import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { getContactsReport } from "../../helpers/admin/adminContact";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import { getBookingsReports } from "../../helpers/admin/adminBookings";

const Admin = () => {
  const [reports, setReports] = useState({
    total: "",
    pending: "",
    answered: "",
    upcomings: "",
    currents: "",
  });

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const getReportsCalled = useRef(false);

  const getReports = async () => {
    if (getReportsCalled.current) {
      return;
    }
    getReportsCalled.current = true;

    try {
      const data = await getContactsReport();
      const dataBookings = await getBookingsReports();
      setReports({
        all: data.totalContacts,
        pending: data.totalPendingContacts,
        answered: data.totalAnsweredContacts,
        upcomings: dataBookings.upcomingBookings,
        currents: dataBookings.currentBookings,
      });

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getReports();
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
              {reports.pending === "" ? (
                <Alert severity="success">
                  All contact request are answered!
                </Alert>
              ) : (
                <Box>
                  {reports.pending > 0 && (
                    <Alert severity="warning" sx={{ marginBottom: "10px" }}>
                      You have {reports.pending} pending contacts —{" "}
                      <u
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/admin/contact")}
                      >
                        check it out!
                      </u>
                    </Alert>
                  )}
                  {reports.currents > 0 && (
                    <Alert severity="success" sx={{ marginBottom: "10px" }}>
                      {reports.currents} guests at the hotel —{" "}
                      <u
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/admin/bookings")}
                      >
                        check it out!
                      </u>
                    </Alert>
                  )}
                  {reports.upcomings > 0 && (
                    <Alert severity="info" sx={{ marginBottom: "10px" }}>
                      {reports.upcomings} upcoming reservations —{" "}
                      <u
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/admin/bookings")}
                      >
                        check it out!
                      </u>
                    </Alert>
                  )}
                </Box>
              )}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Admin;
