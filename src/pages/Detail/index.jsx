import React from "react";
import { Alert, Box, Button, Container } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Header from "./Components/Header";
import Row from "./Components/Row";
import RowGroup from "./Components/RowGroup";
import RowLabel from "./Components/RowLabel";
import RowValue from "./Components/RowValue";
import { GetDataId } from "services/Data";

function Detail() {
  const { id } = useParams();
  const index = id;

  const { data, isLoading, error, isFetching, refetch } = useQuery(
    ["data"],
    async () => {
      return await GetDataId(id);
    }
  );

  const navigate = useNavigate();

  return (
    <>
      {(isLoading || isFetching) && (
        <Container maxWidth="md" sx={{ marginTop: "15px" }}>
          <Alert icon={false} severity="warning">
            Loading ...
          </Alert>
        </Container>
      )}
      {!isLoading && !isFetching && (
        <Container maxWidth="md" sx={{ marginTop: "15px" }}>
          <Header
            alignment={data?.biography?.alignment}
            avatar={data?.images?.sm}
            name={data?.name}
          />

          <Row key={`biography${index}`} title="Biography">
            <RowGroup>
              <RowLabel size={3}>Full Name</RowLabel>
              <RowLabel size={3}>Alignment</RowLabel>
              <RowLabel size={3}>Alter Egos</RowLabel>
              <RowLabel size={3}>Place Of Birth</RowLabel>
            </RowGroup>
            <RowGroup>
              <RowValue size={3}>{data?.biography?.fullName}</RowValue>
              <RowValue size={3}>{data?.biography?.alignment}</RowValue>
              <RowValue size={3}>{data?.biography?.alterEgos}</RowValue>
              <RowValue size={3}>{data?.biography?.placeOfBirth}</RowValue>
            </RowGroup>

            <br />

            <RowGroup>
              <RowLabel size={3}>First Appearance</RowLabel>
              <RowLabel size={6}>Aliases</RowLabel>
              <RowLabel size={3}>Publisher</RowLabel>
            </RowGroup>
            <RowGroup>
              <RowValue size={3}>{data?.biography?.firstAppearance}</RowValue>
              <RowValue size={6}>
                {data?.biography?.aliases.join(", ")}
              </RowValue>
              <RowValue size={3}>{data?.biography?.publisher}</RowValue>
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
              <RowValue size={2}>{data?.appearance?.eyeColor}</RowValue>
              <RowValue size={2}>{data?.appearance?.gender}</RowValue>
              <RowValue size={2}>{data?.appearance?.hairColor}</RowValue>
              <RowValue size={2}>{data?.appearance?.height[1]}</RowValue>
              <RowValue size={2}>{data?.appearance?.race}</RowValue>
              <RowValue size={2}>{data?.appearance?.weight[1]}</RowValue>
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
              <RowValue size={2}>{data?.powerstats?.combat}</RowValue>
              <RowValue size={2}>{data?.powerstats?.durability}</RowValue>
              <RowValue size={2}>{data?.powerstats?.intelligence}</RowValue>
              <RowValue size={2}>{data?.powerstats?.power}</RowValue>
              <RowValue size={2}>{data?.powerstats?.speed}</RowValue>
              <RowValue size={2}>{data?.powerstats?.strength}</RowValue>
            </RowGroup>
          </Row>

          <Row key={`connections${index}`} title="Connections">
            <RowGroup>
              <RowLabel size={6}>Group Affiliation</RowLabel>
              <RowLabel size={6}>Relatives</RowLabel>
            </RowGroup>
            <RowGroup>
              <RowValue size={6}>
                {data?.connections?.groupAffiliation}
              </RowValue>
              <RowValue size={6}>{data?.connections?.relatives}</RowValue>
            </RowGroup>
          </Row>

          <Row key={`work${index}`} title="Work">
            <RowGroup>
              <RowLabel size={6}>Base</RowLabel>
              <RowLabel size={6}>Occupation</RowLabel>
            </RowGroup>
            <RowGroup>
              <RowValue size={6}>{data?.work?.base}</RowValue>
              <RowValue size={6}>{data?.work?.occupation}</RowValue>
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
              startIcon={<ArrowBack />}
              onClick={() => navigate("/")}
            >
              Back
            </Button>
          </Box>
        </Container>
      )}
    </>
  );
}

export default Detail;
