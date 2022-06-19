import React, { useState, useEffect } from "react";
// import "./index.css";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

import PlaylistCard from "./PlaylistCard.js";

const Playlist = () => {
  const [playlist, setPlaylist] = useState([]);

  const getData = () => {
    axios
      .get(
        `https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm`
      )
      .then((res) => {
        setPlaylist(res.data.tracks);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container fluid className="mt-5">
      <Row xs={1} sm={3} xl={4} className="g-4">
        {playlist.map((item, i) => {
          return (
            <Col>
              <PlaylistCard data={item} key={i} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Playlist;
