import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


export function Results({ data }) {
  return (
    <>
      <Row>
        {data.map((item) => {
          return (
            <Col xs={12} md={4} lg={3}>
              <Card key={item.id} className="bookCard">
                {!item.volumeInfo.imageLinks.thumbnail ? (
                  <Card.Text> no image </Card.Text>
                ) : (
                  <Card.Img
                    variant="top"
                    className="cardImg"
                    src={item.volumeInfo.imageLinks.thumbnail}
                  />
                )}

                <Card.Body>
                  <Card.Title>{item.volumeInfo.title}</Card.Title>
                  <Card.Text>{item.volumeInfo.authors}</Card.Text>
                  <Card.Text>{item.volumeInfo.categories}</Card.Text>
                  <Card.Text>{item.volumeInfo.pageCount} pages</Card.Text>
                  <Card.Text>{item.id}</Card.Text>

                  <a
                    href={`http://localhost:3000/singlebook?id=${item.id}`}
                  >
                    Read more
                  </a>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

