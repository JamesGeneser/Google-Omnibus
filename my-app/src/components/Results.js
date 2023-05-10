import React, { useState, useEffect, Component } from "react";
import { redirect } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ReactDOM from "react-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import SingleBook from "./pages/SingleBook";
const url = "https://www.googleapis.com/books/v1/volumes?q=";
const key = "AIzaSyDyUh9tTZjRYDn1uNQbyK8fgrSAGsMKnW4";

function RenderResult(searchQuery) {
  const [apiResponse, setApiResponse] = useState([]);
  const [isclicked, setIsClicked] = useState(false);
  //   const [selectedBook, setSelectedBook] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    callBooksApi(searchQuery);
  }, []);

  function BookSelector(e) {
    // setIsClicked(true);
    // const [clickedBook, setClickedBook] = useState(e.target.value);
    // setSelectedBook(e);
    console.log(e);
    setItems(e);
    window.location = "/singlebook";
  }

  //   const chooseBook = (book) => {
  //     setSelectedBook(book);
  //   };

  useSearch();

  return (
    <>
      <Row>
        {console.log(apiResponse)}
        {apiResponse.map((data) => {
          return (
            <Col xs={12} md={4} lg={3}>
              <Card key={data.id} className="bookCard">
                {!data.volumeInfo.imageLinks.thumbnail ? (
                  <Card.Text> no image </Card.Text>
                ) : (
                  <Card.Img
                    variant="top"
                    className="cardImg"
                    src={data.volumeInfo.imageLinks.thumbnail}
                  />
                )}

                <Card.Body>
                  <Card.Title>{data.volumeInfo.title}</Card.Title>
                  <Card.Text>{data.volumeInfo.authors}</Card.Text>
                  <Card.Text>{data.volumeInfo.categories}</Card.Text>
                  <Card.Text>{data.volumeInfo.pageCount} pages</Card.Text>
                  <Card.Text>{data.id}</Card.Text>

                  <Button
                    name="selectedBook"
                    value={data.id}
                    // onClick={HandleBookClick}
                    onClick={(e) => BookSelector(e.target.value)}
                  >
                    Read more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default RenderResult;
