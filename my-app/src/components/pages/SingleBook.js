import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useGetBook } from "../../hooks/useGetBook";

const SingleBook = () => {
  const { search } = window.location;
  const searchParameters = new URLSearchParams(search);
  const id = searchParameters.get("id");

  const { data } = useGetBook(id);

  console.log(data);

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
