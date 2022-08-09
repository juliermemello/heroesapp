import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";

import data from "data/data.json";

import Label from "./Components/Label";
import Value from "./Components/Value";
import Header from "./Components/Header";
import Row from "./Components/Row";

function Detail() {
  const { id } = useParams();
  const [person, setPerson] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const reg = data.filter((x) => parseInt(x.id) === parseInt(id));

    setPerson([...reg]);
  }, []);

  const MakeItem = (item, index) => {
    return (
      <Container
        maxWidth="md"
        sx={{ marginTop: "15px" }}
        key={`container${index}`}
      >
        <Header alignment={item?.biography?.alignment}>
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
        </Header>

        <Row key={`biography${index}`} title="Biography">
          <Grid container spacing={2}>
            <Grid item md={3}>
              <Label>Full Name</Label>
            </Grid>
            <Grid item md={3}>
              <Label>Alignment</Label>
            </Grid>
            <Grid item md={3}>
              <Label>Alter Egos</Label>
            </Grid>
            <Grid item md={3}>
              <Label>Place Of Birth</Label>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={3}>
              <Value>{item?.biography?.fullName}</Value>
            </Grid>
            <Grid item md={3}>
              <Value>{item?.biography?.alignment}</Value>
            </Grid>
            <Grid item md={3}>
              <Value>{item?.biography?.alterEgos}</Value>
            </Grid>
            <Grid item md={3}>
              <Value>{item?.biography?.placeOfBirth}</Value>
            </Grid>
          </Grid>

          <br />

          <Grid container spacing={2}>
            <Grid item md={3}>
              <Label>First Appearance</Label>
            </Grid>
            <Grid item md={6}>
              <Label>Aliases</Label>
            </Grid>
            <Grid item md={3}>
              <Label>Publisher</Label>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={3}>
              <Value>{item?.biography?.firstAppearance}</Value>
            </Grid>
            <Grid item md={6}>
              <Value>{item?.biography?.aliases.join(", ")}</Value>
            </Grid>
            <Grid item md={3}>
              <Value>{item?.biography?.publisher}</Value>
            </Grid>
          </Grid>
        </Row>

        <Row key={`appearance${index}`} title="Appearance">
          <Grid container spacing={2}>
            <Grid item md={2}>
              <Label>Eye Color</Label>
            </Grid>
            <Grid item md={2}>
              <Label>Gender</Label>
            </Grid>
            <Grid item md={2}>
              <Label>Hair Color</Label>
            </Grid>
            <Grid item md={2}>
              <Label>Height</Label>
            </Grid>
            <Grid item md={2}>
              <Label>Race</Label>
            </Grid>
            <Grid item md={2}>
              <Label>Weight</Label>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={2}>
              <Value>{item?.appearance?.eyeColor}</Value>
            </Grid>
            <Grid item md={2}>
              <Value>{item?.appearance?.gender}</Value>
            </Grid>
            <Grid item md={2}>
              <Value>{item?.appearance?.hairColor}</Value>
            </Grid>
            <Grid item md={2}>
              <Value>{item?.appearance?.height[1]}</Value>
            </Grid>
            <Grid item md={2}>
              <Value>{item?.appearance?.race}</Value>
            </Grid>
            <Grid item md={2}>
              <Value>{item?.appearance?.weight[1]}</Value>
            </Grid>
          </Grid>
        </Row>

        <Row key={`powerstats${index}`} title="Power Stats">
          <Grid container spacing={2}>
            <Grid item md={2}>
              <Label>Combat</Label>
            </Grid>
            <Grid item md={2}>
              <Label>Durability</Label>
            </Grid>
            <Grid item md={2}>
              <Label>Intelligence</Label>
            </Grid>
            <Grid item md={2}>
              <Label>Power</Label>
            </Grid>
            <Grid item md={2}>
              <Label>Speed</Label>
            </Grid>
            <Grid item md={2}>
              <Label>Strength</Label>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={2}>
              <Value>{item?.powerstats?.combat}</Value>
            </Grid>
            <Grid item md={2}>
              <Value>{item?.powerstats?.durability}</Value>
            </Grid>
            <Grid item md={2}>
              <Value>{item?.powerstats?.intelligence}</Value>
            </Grid>
            <Grid item md={2}>
              <Value>{item?.powerstats?.power}</Value>
            </Grid>
            <Grid item md={2}>
              <Value>{item?.powerstats?.speed}</Value>
            </Grid>
            <Grid item md={2}>
              <Value>{item?.powerstats?.strength}</Value>
            </Grid>
          </Grid>
        </Row>

        <Row key={`connections${index}`} title="Connections">
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Label>Group Affiliation</Label>
            </Grid>
            <Grid item md={6}>
              <Label>Relatives</Label>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Value>{item?.connections?.groupAffiliation}</Value>
            </Grid>
            <Grid item md={6}>
              <Value>{item?.connections?.relatives}</Value>
            </Grid>
          </Grid>
        </Row>

        <Row key={`work${index}`} title="Work">
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Label>Base</Label>
            </Grid>
            <Grid item md={6}>
              <Label>Occupation</Label>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Value>{item?.work?.base}</Value>
            </Grid>
            <Grid item md={6}>
              <Value>{item?.work?.occupation}</Value>
            </Grid>
          </Grid>
        </Row>

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
            startIcon={<ArrowBack />}
            onClick={() => navigate("/")}
          >
            Back
          </Button>
        </Box>
      </Container>
    );
  };

  const values = person.map((item, index) => MakeItem(item, index));

  return <>{values}</>;
}

export default Detail;
