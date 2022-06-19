import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PlaylistCard = (props) => {
  const { id, name, artistName, albumNam, albumId } = props.data;
  const urlAlbum = `http://direct.rhapsody.com/imageserver/v2/albums/${albumId}/images/300x300.jpg`;

  let navigate = useNavigate();

  const chooseMusic = (musicDetail) => {
    navigate("/playing", { state: { musicDetail } });
  };

  return (
    <Card>
      <Card.Body>
        <Container fluid>
          <Row>
            <Col sm={4}>
              <Card.Img
                variant="top"
                style={{ "min-height": "120px", "max-height": "300px" }}
                src={urlAlbum}
              />
            </Col>
            <Col sm={8}>
              <Card.Title>
                {/* {name} */}
                {name.length > 18 ? name.substr(0, 18) + "..." : name}
              </Card.Title>
              <Card.Text>{artistName}</Card.Text>
              <div className="d-grid gap-2">
                <Button
                  variant={"danger"}
                  className="btn btn-block"
                  style={{
                    "padding-left": "30px",
                    "padding-right": "30px",
                  }}
                  onClick={(e) => chooseMusic(props.data)}
                >
                  Play{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-play"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                  </svg>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default PlaylistCard;
