import React, { useEffect, useState } from "react";
import { Box, Button, Container } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";

import Header from "./Components/Header";
import Row from "./Components/Row";
import RowGroup from "./Components/RowGroup";
import RowLabel from "./Components/RowLabel";
import RowValue from "./Components/RowValue";
import { GetDataId } from "services/Data";

function Detail() {
  const { id } = useParams();
  const [person, setPerson] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const reg = GetDataId(id);

    setPerson([...reg]);
  }, []);

  const MakeItem = (item, index) => {
    return (
      <Container
        maxWidth="md"
        sx={{ marginTop: "15px" }}
        key={`container${index}`}
      >
        <Header
          alignment={item?.biography?.alignment}
          avatar={item?.images?.sm}
          name={item?.name}
        />

        <Row key={`biography${index}`} title="Biography">
          <RowGroup>
            <RowLabel size={3}>Full Name</RowLabel>
            <RowLabel size={3}>Alignment</RowLabel>
            <RowLabel size={3}>Alter Egos</RowLabel>
            <RowLabel size={3}>Place Of Birth</RowLabel>
          </RowGroup>
          <RowGroup>
            <RowValue size={3}>{item?.biography?.fullName}</RowValue>
            <RowValue size={3}>{item?.biography?.alignment}</RowValue>
            <RowValue size={3}>{item?.biography?.alterEgos}</RowValue>
            <RowValue size={3}>{item?.biography?.placeOfBirth}</RowValue>
          </RowGroup>

          <br />

          <RowGroup>
            <RowLabel size={3}>First Appearance</RowLabel>
            <RowLabel size={6}>Aliases</RowLabel>
            <RowLabel size={3}>Publisher</RowLabel>
          </RowGroup>
          <RowGroup>
            <RowValue size={3}>{item?.biography?.firstAppearance}</RowValue>
            <RowValue size={6}>{item?.biography?.aliases.join(", ")}</RowValue>
            <RowValue size={3}>{item?.biography?.publisher}</RowValue>
          </RowGroup>
        </Row>

        <Row key={`appearance${index}`} title="Appearance">
          <RowGroup>
            <RowLabel size={2}>Eye Color</RowLabel>
            <RowLabel size={2}>Gender</RowLabel>
            <RowLabel size={2}>Hair Color</RowLabel>
            <RowLabel size={2}>Height</RowLabel>
            <RowLabel size={2}>Race</RowLabel>
            <RowLabel size={2}>Weight</RowLabel>
          </RowGroup>
          <RowGroup>
            <RowValue size={2}>{item?.appearance?.eyeColor}</RowValue>
            <RowValue size={2}>{item?.appearance?.gender}</RowValue>
            <RowValue size={2}>{item?.appearance?.hairColor}</RowValue>
            <RowValue size={2}>{item?.appearance?.height[1]}</RowValue>
            <RowValue size={2}>{item?.appearance?.race}</RowValue>
            <RowValue size={2}>{item?.appearance?.weight[1]}</RowValue>
          </RowGroup>
        </Row>

        <Row key={`powerstats${index}`} title="Power Stats">
          <RowGroup>
            <RowLabel size={2}>Combat</RowLabel>
            <RowLabel size={2}>Durability</RowLabel>
            <RowLabel size={2}>Intelligence</RowLabel>
            <RowLabel size={2}>Power</RowLabel>
            <RowLabel size={2}>Speed</RowLabel>
            <RowLabel size={2}>Strength</RowLabel>
          </RowGroup>
          <RowGroup>
            <RowValue size={2}>{item?.powerstats?.combat}</RowValue>
            <RowValue size={2}>{item?.powerstats?.durability}</RowValue>
            <RowValue size={2}>{item?.powerstats?.intelligence}</RowValue>
            <RowValue size={2}>{item?.powerstats?.power}</RowValue>
            <RowValue size={2}>{item?.powerstats?.speed}</RowValue>
            <RowValue size={2}>{item?.powerstats?.strength}</RowValue>
          </RowGroup>
        </Row>

        <Row key={`connections${index}`} title="Connections">
          <RowGroup>
            <RowLabel size={6}>Group Affiliation</RowLabel>
            <RowLabel size={6}>Relatives</RowLabel>
          </RowGroup>
          <RowGroup>
            <RowValue size={6}>{item?.connections?.groupAffiliation}</RowValue>
            <RowValue size={6}>{item?.connections?.relatives}</RowValue>
          </RowGroup>
        </Row>

        <Row key={`work${index}`} title="Work">
          <RowGroup>
            <RowLabel size={6}>Base</RowLabel>
            <RowLabel size={6}>Occupation</RowLabel>
          </RowGroup>
          <RowGroup>
            <RowValue size={6}>{item?.work?.base}</RowValue>
            <RowValue size={6}>{item?.work?.occupation}</RowValue>
          </RowGroup>
        </Row>

        <Box
          sx={{
            padding: "10px",
            marginBottom: "10px",
          }}
          key={`navi${index}`}
        >
          <Button
            variant="back"
            // color="secondary"
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
