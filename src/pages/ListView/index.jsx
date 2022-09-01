import React, { useEffect } from "react";
import { Grid, TablePagination, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Display from "./Components/Display";
import DisplaySkeleton from "./Components/DisplaySkeleton";
import { useLocalStorage } from "hooks/useLocalStorage";
import { useFilter } from "hooks/useFilter";
import { GetCharacters } from "services/Data";

function ListView() {
  const [page, setPage] = useLocalStorage("page", 0);
  const [rowsPerPage, setRowsPerPage] = useLocalStorage("rowsPerPage", 25);

  const navigate = useNavigate();
  const filter = useFilter();

  const { data, isLoading, error, isFetching, refetch } = useQuery(
    ["data"],
    async () => {
      return await GetCharacters(page, rowsPerPage, filter.filterValue);
    }
  );

  useEffect(() => {
    setPage(0);
    refetch();
  }, [filter.filterValue]);

  useEffect(() => {
    refetch();
  }, [page]);

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

  return (
    <>
      <Grid container marginTop="5px">
        <Grid item md={12}>
          <Typography variant="h3" marginBottom={"15px"}>
            List of Heroes
          </Typography>
        </Grid>
      </Grid>

      <Grid container marginBottom="40px">
        <Grid item md={12}>
          {(isLoading || isFetching) && <DisplaySkeleton />}

          <Grid container spacing={2}>
            {!isLoading &&
              !isFetching &&
              data?.results?.map((item) => (
                <Display
                  key={item?.id}
                  name={item?.name}
                  image={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                  onReadMore={() => handleReadMore(item?.id)}
                />
              ))}
          </Grid>

          {!filter.filterValue && !isLoading && !isFetching && (
            <TablePagination
              component="div"
              count={data?.total}
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
