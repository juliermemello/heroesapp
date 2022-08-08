import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  TablePagination,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import data from "data/data.json";

function ListView() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleReadMore = (event, id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <Typography variant="h3" marginBottom={"15px"}>
        List of Heroes
      </Typography>

      <Grid container spacing={2}>
        {data
          .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
          .map((item, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={item.id}>
              <Card elevation={1}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.images.md}
                  alt={item.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {item.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={(e) => handleReadMore(e, item.id)}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>

      <TablePagination
        component="div"
        count={data.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}

export default ListView;
