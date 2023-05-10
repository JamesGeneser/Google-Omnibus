import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useSearch } from '../../hooks/useSearch';
import { Results } from '../Results';

const Home = () => {
  const {
    handleSubmit,
    query,
    handleChange,
    results,
  } = useSearch();

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
            value={query}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Container>
        {results?.length === 0 ? (
          <div>Please enter a search term to get started</div>
        ) : (
          <Results data={results} />
        )}
      </Container>
    </>
  );
};

export default Home;
