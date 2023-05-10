import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useGetBook } from '../../hooks/useGetBook';

const SingleBook = () => {
  const { search } = window.location;
  const searchParameters = new URLSearchParams(search);
  const id = searchParameters.get('id');

  const {
    data
  } = useGetBook(id);


  console.log(data); // book object

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  //   return (
  //     <>
  //       <Button variant="primary" onClick={handleShow}>
  //         Launch demo modal
  //       </Button>

  //       <Modal show={show} onHide={handleClose}>
  //         <Modal.Header closeButton>
  //           <Modal.Title>Modal heading</Modal.Title>
  //         </Modal.Header>
  //         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
  //         <Modal.Footer>
  //           <Button variant="secondary" onClick={handleClose}>
  //             Close
  //           </Button>
  //           <Button variant="primary" onClick={handleClose}>
  //             Save Changes
  //           </Button>
  //         </Modal.Footer>
  //       </Modal>
  //     </>
  //   );

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
