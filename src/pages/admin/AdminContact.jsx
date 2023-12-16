import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { getAdminContact } from "../../helpers/admin/adminContact";
import ContactTable from "../../components/admin/contact/ContactTable";

const AdminContact = () => {
  const PENDING = "pending";
  const ANSWERED = "answered";
  const ALL = "all";

  const [value, setValue] = useState(ALL);

  const [data, setData] = useState("");

  const handleChange = (event, newValue) => {
    console.log(newValue.value);
    setValue(newValue);
  };

  const getContacts = async (query) => {
    try {
      const response = await getAdminContact(query);
      console.log(response);
      // setData(response.data.categories);
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
            />
            <Tab
              value={ANSWERED}
              label="Answered"
              onClick={() => getContacts(ANSWERED)}
            />
            <Tab value={ALL} label="All" onClick={() => getContacts(ALL)} />
          </Tabs>
        </Box>
      </Box>
      {/* <Box></Box> */}
      <ContactTable data={data} />
    </Box>
  );
};

export default AdminContact;
