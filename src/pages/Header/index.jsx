import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

import { useFilter } from "hooks/useFilter";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./Components/Search";

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
}));

function Header() {
  const [filterValue, setFilterValue] = useState("");

  const filter = useFilter();

  useEffect(() => {
    const timeOutId = setTimeout(() => filter.setFilterValue(filterValue), 500);

    return () => clearTimeout(timeOutId);
  }, [filterValue]);

  return (
    <AppBarStyled position="sticky" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Heroes App
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
        </Search>
      </Toolbar>
    </AppBarStyled>
  );
}

export default Header;
