import React, { useEffect } from "react";
import {
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  TablePagination,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import Display from "./Components/Display";
import { useLocalStorage } from "hooks/useLocalStorage";
import { useFilter } from "hooks/useFilter";
import { GetData } from "services/Data";

function ListView() {
  const [page, setPage] = useLocalStorage("page", 0);
  const [rowsPerPage, setRowsPerPage] = useLocalStorage("rowsPerPage", 25);
  const [heroes, setHeroes] = useLocalStorage("heroes", true);
  const [villains, setVillains] = useLocalStorage("villains", true);
  const [others, setOthers] = useLocalStorage("others", true);

  const navigate = useNavigate();
  const filter = useFilter();

  useEffect(() => {
    setPage(0);
  }, [heroes, villains, others]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleReadMore = (id) => {
    navigate(`/detail/${id}`);
  };

  const displayItems = GetData(
    page,
    rowsPerPage,
    filter.filterValue,
    heroes,
    villains,
    others
  );

  return (
    <>
      <Grid container marginTop="5px">
        <Grid item md={2}></Grid>
        <Grid item md={10}>
          <Typography variant="h3" marginBottom={"15px"}>
            List of Heroes
          </Typography>
        </Grid>
      </Grid>

      <Grid container marginBottom="40px">
        <Grid item md={2}>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={!!heroes}
                  onChange={(e) => setHeroes(e.target.checked)}
                />
              }
              label="Heroes"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={!!villains}
                  onChange={(e) => setVillains(e.target.checked)}
                />
              }
              label="Villains"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={!!others}
                  onChange={(e) => setOthers(e.target.checked)}
                />
              }
              label="Others"
            />
          </FormGroup>
        </Grid>
        <Grid item md={10}>
          <Grid container spacing={2}>
            {displayItems.list.map((item) => (
              <Display
                key={item?.id}
                name={item?.name}
                image={item?.images?.md}
                onReadMore={() => handleReadMore(item?.id)}
              />
            ))}
          </Grid>

          {!filter.filterValue && (
            <TablePagination
              component="div"
              count={displayItems.total}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default ListView;
