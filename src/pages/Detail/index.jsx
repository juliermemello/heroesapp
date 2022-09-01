import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import EventNoteTwoToneIcon from "@mui/icons-material/EventNoteTwoTone";
import MovieTwoToneIcon from "@mui/icons-material/MovieTwoTone";
import AutoStoriesTwoToneIcon from "@mui/icons-material/AutoStoriesTwoTone";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Header from "./Components/Header";
import Row from "./Components/Row";
import RowGroup from "./Components/RowGroup";
import RowLabel from "./Components/RowLabel";
import RowValue from "./Components/RowValue";
import TabPanel from "./Components/TabPanel";
import { GetCharacter } from "services/Data";

function Detail() {
  const [value, setValue] = useState(0);
  const { id } = useParams();

  const { data, isLoading, error, isFetching } = useQuery(
    ["data"],
    async () => {
      return await GetCharacter(id);
    }
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const index = id;
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
            avatar={`${data?.thumbnail?.path}.${data?.thumbnail?.extension}`}
            name={data?.name}
          />

          <Row key={`description${index}`} title="Description">
            <RowGroup>
              <RowValue size={12}>
                {data?.description || "No Description"}
              </RowValue>
            </RowGroup>
            <br />
            <RowGroup>
              <RowLabel size={2}>Last Modified</RowLabel>
              <RowValue size={3}>{data?.modified.split("T")[0]}</RowValue>
            </RowGroup>
          </Row>

          <Row key={`details${index}`} title="Details">
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={value} onChange={handleChange} variant="fullWidth">
                <Tab label={`Comics (${data?.comics.available})`} />
                <Tab label={`Events (${data?.events.available})`} />
                <Tab label={`Series (${data?.series.available})`} />
                <Tab label={`Stories (${data?.stories.available})`} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              {!isLoading && !isFetching && (
                <List component="nav">
                  {data?.comics.items.map((item, index) => (
                    <ListItemButton key={`comics${index}`}>
                      <ListItemIcon>
                        <MenuBookTwoToneIcon />
                      </ListItemIcon>
                      <ListItemText primary={item?.name} />
                    </ListItemButton>
                  ))}
                </List>
              )}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {!isLoading && !isFetching && (
                <List component="nav">
                  {data?.events.items.map((item, index) => (
                    <ListItemButton key={`events${index}`}>
                      <ListItemIcon>
                        <EventNoteTwoToneIcon />
                      </ListItemIcon>
                      <ListItemText primary={item?.name} />
                    </ListItemButton>
                  ))}
                </List>
              )}
            </TabPanel>
            <TabPanel value={value} index={2}>
              {!isLoading && !isFetching && (
                <List component="nav">
                  {data?.series.items.map((item, index) => (
                    <ListItemButton key={`series${index}`}>
                      <ListItemIcon>
                        <MovieTwoToneIcon />
                      </ListItemIcon>
                      <ListItemText primary={item?.name} />
                    </ListItemButton>
                  ))}
                </List>
              )}
            </TabPanel>
            <TabPanel value={value} index={3}>
              {!isLoading && !isFetching && (
                <List component="nav">
                  {data?.stories.items.map((item, index) => (
                    <ListItemButton key={`series${index}`}>
                      <ListItemIcon>
                        <AutoStoriesTwoToneIcon />
                      </ListItemIcon>
                      <ListItemText primary={item?.name} />
                    </ListItemButton>
                  ))}
                </List>
              )}
            </TabPanel>
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
