import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import ReactAudioPlayer from "react-audio-player";

import "./playing.css";

const Playing = () => {
  let location = useLocation().state;
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState([]);
  const [artist, setArtist] = useState([]);
  const [album, setAlbum] = useState([]);
  const [music, setMusic] = useState([]);

  const playMusic = () => {
    if (location) {
      const { name, artistName, albumId, albumName, previewURL } =
        location.musicDetail;
      const urlAlbum = `http://direct.rhapsody.com/imageserver/v2/albums/${albumId}/images/300x300.jpg`;

      setImage(urlAlbum);
      setTitle(name);
      setArtist(artistName);
      setAlbum(albumName);
      setMusic(previewURL);
      console.log(music);
    } else {
      setMusic("http://listen.vo.llnwd.net/g3/prvw/4/1/8/2/7/2591672814.mp3");
      console.log("data tidak ada");
    }
  };

  useEffect(() => {
    playMusic();
  }, []);

  return (
    <Container fluid className="mt-5">
      <Row className="g-4">
        <h1 className="text-white">Current Playing...</h1>
        <Col sm={8}>
          <Card>
            <Card.Body>
              <Container fluid>
                <Row>
                  <Col sm={4}>
                    <img src={image} />
                  </Col>
                  <Col sm={8}>
                    <h1>
                      <strong>{title}</strong>
                    </h1>
                    <h4 className="text-secondary">{artist}</h4>
                    <p className="text-secondary">{album}</p>

                    <div className="music-control">
                      <ReactAudioPlayer src={music} autoPlay controls />
                    </div>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>
            <Card.Body>
              <h1>Info</h1>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Playing;

{
  /* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-play-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-volume-up-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
                        <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
                        <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-three-dots-vertical"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                      </svg> */
}
