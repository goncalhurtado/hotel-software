import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        // width: "100%",
        height: "100px",
        marginTop: "auto",
        backgroundColor: "#1976D2",
        color: "#FFFFFF",
        textAlign: "center",
      }}
    >
      <Box
        display={"flex"}
        justifyContent={{ xs: "center", md: "space-between" }}
        alignItems={"center"}
        flexDirection={{ xs: "column", md: "row" }}
        height={"100%"}
      >
        <Box>
          <Typography variant="body1" padding={2}>
            Develop by{" "}
            <a
              style={{
                color: "#FFFFFF",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              // href="goncalhurtado.netlify.app"
              target="_blank"
            >
              Goncal Hurtado
            </a>
          </Typography>
        </Box>
        <Box padding={2}>
          <a
            onClick={() => {
              navigate("/");
              window.location.reload();
            }}
            target="_blank"
            style={{
              color: "#FFFFFF",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            HOME
          </a>
          {" | "}
          <a
            onClick={() => navigate("/admin")}
            target="_blank"
            style={{
              color: "#FFFFFF",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            ADMIN
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
