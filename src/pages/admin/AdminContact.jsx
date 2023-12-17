import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { getAdminContact } from "../../helpers/admin/adminContact";
import ContactTable from "../../components/admin/contact/ContactTable";
import { set } from "date-fns";

const AdminContact = () => {
  const PENDING = "pending";
  const ANSWERED = "answered";
  const ALL = "all";
  const [value, setValue] = useState(PENDING);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResult, setNoResult] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getContacts = async (query) => {
    try {
      setLoading(true);
      const contacts = await getAdminContact(query);

      setLoading(false);
      if (contacts.length === 0) {
        setNoResult(true);
        return;
      }
      setData(contacts);
      setNoResult(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContacts(value);
  }, []);

  return (
    <Box paddingRight={10} paddingLeft={10}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant="h5">Contacts</Typography>

        <Box
          sx={{
            // borderBottom: "1px solid black",
            // borderTop: "1px solid black",
            // textAlign: "end",
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <Tabs
            value={value}
            textColor="primary"
            indicatorColor="primary"
            onChange={handleChange}
          >
            <Tab
              value={PENDING}
              label="Pending"
              onClick={() => getContacts(PENDING)}
              disabled={loading}
            />
            <Tab
              value={ANSWERED}
              label="Answered"
              onClick={() => getContacts(ANSWERED)}
              disabled={loading}
            />
            <Tab
              value={ALL}
              label="All"
              onClick={() => getContacts(ALL)}
              disabled={loading}
            />
          </Tabs>
        </Box>
      </Box>
      {/* <Box></Box> */}
      {!noResult ? (
        <ContactTable data={data} getContacts={getContacts} />
      ) : (
        <p>You dont have any request contact with this filter</p>
      )}
    </Box>
  );
};

export default AdminContact;
