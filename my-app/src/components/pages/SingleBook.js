import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useGetVolume } from "../hooks/useGetVolume";

const SingleBook = async () => {
  const { search } = window.location;
  const searchParameters = new URLSearchParams(search);
  const id = searchParameters.get("id");
  console.log(id + "singleBook 10");

  // const UseVolumeGetter = async (id) => {
  //   useGetVolume(id);
  //   // const { data } = useGetVolume(id);
  // };

  // UseVolumeGetter().catch(console.error);

  // console.log(data);

  // useGetVolume(id);
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
