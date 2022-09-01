import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Title from "../Title";

const RowStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  padding: "10px",
  borderRadius: "5px",
  marginBottom: "10px",
}));

function Row(props) {
  return (
    <RowStyled>
      <Title>{props.title}</Title>
      {props.children}
    </RowStyled>
  );
}

export default Row;
