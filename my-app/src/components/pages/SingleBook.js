import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
// import getSingleBook from "../../utils/getSingleBook";

const SingleBook = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let searchQuery = "";
    console.log("test");
    setItems(JSON.parse(localStorage.getItem("items")));
  }, []);

  console.log(items);

  //   console.log(apiURL);

  return (
    <>
      <h1>Single Book</h1>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Button href="/">Go Home</Button>
    </>
  );
};

export default SingleBook;
