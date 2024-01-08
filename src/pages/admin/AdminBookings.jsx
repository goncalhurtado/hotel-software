import React, { useEffect, useState } from "react";
import TableBookings from "../../components/admin/bookings/TableBookings";
import { axiosInstance } from "../../config/axiosInstance";
import ModalBookings from "../../components/admin/bookings/ModalBookings";
import EditBooking from "../../components/admin/bookings/EditBooking";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TableSkeleton from "../../components/skeletons/TableSkeleton";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [modal, setModal] = useState({ action: false, data: {} });
  const [editing, setEditing] = useState({ status: false, data: {} });
  const [loading, setLoading] = useState(false);
  const UPCOMING = "upcoming";
  const PAST = "past";
  const ALL = "all";
  const [value, setValue] = useState(UPCOMING);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getBookings = async (query) => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/bookings/${query}`);
      setLoading(false);

      setBookings(response.data.formattedBookings);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getBookings(value);
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          marginLeft: "30px",
        }}
      >
        <Tabs
          value={value}
          textColor="primary"
          indicatorColor="primary"
          onChange={handleChange}
        >
          <Tab
            value={UPCOMING}
            label="upcoming"
            onClick={() => getBookings(UPCOMING)}
            disabled={loading}
          />
          <Tab
            value={PAST}
            label="past"
            onClick={() => getBookings(PAST)}
            disabled={loading}
          />
          <Tab
            value={ALL}
            label="All"
            onClick={() => getBookings(ALL)}
            disabled={loading}
          />
        </Tabs>
      </Box>
      {!editing.status ? (
        <>
          {loading ? (
            <Box padding={1}>
              <TableSkeleton />
            </Box>
          ) : (
            <TableBookings
              bookings={bookings}
              getBookings={getBookings}
              setModal={setModal}
              setEditing={setEditing}
            />
          )}
        </>
      ) : (
        <EditBooking
          editing={editing}
          setEditing={setEditing}
          getBookings={getBookings}
        />
      )}

      <ModalBookings setModal={setModal} modal={modal} />
    </>
  );
};

export default AdminBookings;
