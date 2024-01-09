import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "100px",
        // marginTop: "auto",
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
        <Box display={"flex"} alignItems={"center"}>
          <Typography
            variant="body1"
            paddingTop={2}
            paddingBottom={2}
            paddingLeft={2}
          >
            Develop by{" "}
            <a
              style={{
                color: "#FFFFFF",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              href="https://goncalhurtado.netlify.app/"
              target="_blank"
            >
              Goncal Hurtado
            </a>
          </Typography>
          <GitHubIcon
            style={{ cursor: "pointer", marginLeft: "2px" }}
            onClick={(e) => {
              window.open("https://github.com/goncalhurtado", "_blank");
            }}
          />
          <LinkedInIcon
            style={{ cursor: "pointer", marginLeft: "2px" }}
            onClick={(e) => {
              window.open(
                "https://www.linkedin.com/in/goncalhurtado/",
                "_blank"
              );
            }}
          />
        </Box>
        <Box padding={{ xs: 0, sm: 2 }}>
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
