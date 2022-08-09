import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { blue, red } from "@mui/material/colors";

const HeaderStyled = styled(Box)(({ theme, alignment }) => ({
  backgroundColor: "#cfe8fc",
  padding: "10px",
  borderRadius: "5px",
  marginBottom: "10px",
  borderTop: `3px solid ${alignment === "good" ? blue[500] : red[500]}`,
}));

function Header(props) {
  return (
    <HeaderStyled alignment={props.alignment}>{props.children}</HeaderStyled>
  );
}

export default Header;
