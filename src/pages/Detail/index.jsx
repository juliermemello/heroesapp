import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import data from "data/data.json";
import { blue, lightBlue, red } from "@mui/material/colors";

function Detail() {
  const { id } = useParams();
  const [person, setPerson] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const reg = data.filter((x) => parseInt(x.id) === parseInt(id));

    setPerson([...reg]);
  }, []);

  const values = person.map((item, index) => (
    <Container
      maxWidth="md"
      sx={{ marginTop: "15px" }}
      key={`container${index}`}
    >
      <Box
        sx={{
          bgcolor: "#cfe8fc",
          padding: "10px",
          borderRadius: "5px",
          marginBottom: "10px",
          borderTop: `2px solid ${
            item?.biography?.alignment === "good" ? blue[500] : red[500]
          }`,
        }}
        key={`avatar${index}`}
      >
        <Grid container direction="row" alignItems="center" spacing={2}>
          <Grid item>
            <Avatar
              src={item?.images?.sm}
              sx={{ height: "72px", width: "72px" }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h3" component="div">
              {item.name}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          bgcolor: lightBlue[50],
          padding: "10px",
          borderRadius: "5px",
          marginBottom: "10px",
        }}
        key={`biography${index}`}
      >
        <Typography variant="h5" fontWeight={700}>
          Biography
        </Typography>

        <br />

        <Grid container spacing={2}>
          <Grid item md={3}>
            <Typography variant="button" fontWeight={700}>
              Full Name
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography variant="button" fontWeight={700}>
              Alignment
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography variant="button" fontWeight={700}>
              Alter Egos
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography variant="button" fontWeight={700}>
              Place Of Birth
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <Typography variant="body1">{item?.biography?.fullName}</Typography>
          </Grid>
          <Grid item md={3}>
            <Typography variant="body1">
              {item?.biography?.alignment}
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography variant="body1">
              {item?.biography?.alterEgos}
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography variant="body1">
              {item?.biography?.placeOfBirth}
            </Typography>
          </Grid>
        </Grid>

        <br />

        <Grid container spacing={2}>
          <Grid item md={3}>
            <Typography variant="button" fontWeight={700}>
              First Appearance
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Typography variant="button" fontWeight={700}>
              Aliases
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography variant="button" fontWeight={700}>
              Publisher
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <Typography variant="body1">
              {item?.biography?.firstAppearance}
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Typography variant="body1">
              {item?.biography?.aliases.join(", ")}
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography variant="body1">
              {item?.biography?.publisher}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          bgcolor: lightBlue[50],
          padding: "10px",
          borderRadius: "5px",
          marginBottom: "10px",
        }}
        key={`appearance${index}`}
      >
        <Typography variant="h5" fontWeight={700}>
          Appearance
        </Typography>

        <br />

        <Grid container spacing={2}>
          <Grid item md={2}>
            <Typography variant="button" fontWeight={700}>
              Eye Color
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="button" fontWeight={700}>
              Gender
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="button" fontWeight={700}>
              Hair Color
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="button" fontWeight={700}>
              Height
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="button" fontWeight={700}>
              Race
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="button" fontWeight={700}>
              Weight
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={2}>
            <Typography variant="body1">
              {item?.appearance?.eyeColor}
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="body1">{item?.appearance?.gender}</Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="body1">
              {item?.appearance?.hairColor}
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="body1">
              {item?.appearance?.height[1]}
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="body1">{item?.appearance?.race}</Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="body1">
              {item?.appearance?.weight[1]}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          bgcolor: lightBlue[50],
          padding: "10px",
          borderRadius: "5px",
          marginBottom: "10px",
        }}
        key={`powerstats${index}`}
      >
        <Typography variant="h5" fontWeight={700}>
          Power Stats
        </Typography>

        <br />

        <Grid container spacing={2}>
          <Grid item md={2}>
            <Typography variant="button" fontWeight={700}>
              Combat
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="button" fontWeight={700}>
              Durability
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="button" fontWeight={700}>
              Intelligence
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="button" fontWeight={700}>
              Power
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="button" fontWeight={700}>
              Speed
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="button" fontWeight={700}>
              Strength
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={2}>
            <Typography variant="body1">{item?.powerstats?.combat}</Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="body1">
              {item?.powerstats?.durability}
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="body1">
              {item?.powerstats?.intelligence}
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="body1">{item?.powerstats?.power}</Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="body1">{item?.powerstats?.speed}</Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="body1">
              {item?.powerstats?.strength}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          bgcolor: lightBlue[50],
          padding: "10px",
          borderRadius: "5px",
          marginBottom: "10px",
        }}
        key={`connections${index}`}
      >
        <Typography variant="h5" fontWeight={700}>
          Connections
        </Typography>

        <br />

        <Grid container spacing={2}>
          <Grid item md={6}>
            <Typography variant="button" fontWeight={700}>
              Group Affiliation
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Typography variant="button" fontWeight={700}>
              Relatives
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Typography variant="body1">
              {item?.connections?.groupAffiliation}
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Typography variant="body1">
              {item?.connections?.relatives}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          bgcolor: lightBlue[50],
          padding: "10px",
          borderRadius: "5px",
          marginBottom: "10px",
        }}
        key={`work${index}`}
      >
        <Typography variant="h5" fontWeight={700}>
          Work
        </Typography>

        <br />

        <Grid container spacing={2}>
          <Grid item md={6}>
            <Typography variant="button" fontWeight={700}>
              Base
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Typography variant="button" fontWeight={700}>
              Occupation
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Typography variant="body1">{item?.work?.base}</Typography>
          </Grid>
          <Grid item md={6}>
            <Typography variant="body1">{item?.work?.occupation}</Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          padding: "10px",
          marginBottom: "10px",
        }}
        key={`navi${index}`}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate("/")}
        >
          Back
        </Button>
      </Box>
    </Container>
  ));

  return <>{values}</>;
}

export default Detail;
