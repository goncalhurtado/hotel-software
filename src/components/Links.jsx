import React from "react";
import { Link } from "react-router-dom";

export const CustomLink = ({ page }) => {
  return (
    <Link to={page.path} style={{ color: "white", textDecoration: "none" }}>
      {page.name}
    </Link>
  );
};

export const CustomLinkMobile = ({ page }) => {
  return (
    <Link to={page.path} style={{ color: "black", textDecoration: "none" }}>
      {page.name}
    </Link>
  );
};
