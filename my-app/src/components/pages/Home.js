import React, { useState } from "react";
import BookSearch from "../Results";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import RenderResult from "../Results";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  const { handleSubmit, query, handleChange, results } = useSearch();

  // const [searchState, setSearchState] = useState({ searchQuery: "" });
  // console.log(searchState);

  // const [sentState, setSentState] = useState({ sent: false });

  function handleChange(event) {
    const { name, value } = event.target;
    setSearchState({
      ...searchState,
      [name]: value,
    });
    console.log(searchState);
  }

  // function submitSearch(event) {
  //   console.log("click");
  //   event.preventDefault();

  //   setSentState(true);
  //   console.log({ searchState } + "searchState");
  // }

  return (
    <>
      <h1></h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Search</Form.Label>
          <Form.Control
            name="searchQuery"
            type="searchQuery"
            placeholder="enter search here"
            value={searchState.searchQuery}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Container>
        {results?.length === 0 ? (
          console.log("input search term")
        ) : (
          <Results data={results} />
        )}
      </Container>
    </>
  );
};

export default Home;
