import { useState, useEffect } from "react";

const BOOKS_URL = "https://www.googleapis.com/books/v1/volumes?q=";
const KEY = "AIzaSyDyUh9tTZjRYDn1uNQbyK8fgrSAGsMKnW4";

const searchBooks = async (query) => {
  const url = BOOKS_URL + query + "&maxResults=1" + "&key=" + KEY;

  try {
    const response = await fetch(url);
    console.log(response);
    const jsonResponse = await response.json();
    const items = jsonResponse.items;
    console.log(items);
    return items;
  } catch (err) {
    alert(err);
  }
};

export const useSearch = () => {
  const [query, setQuery] = useState("");
  console.log(query + "23");
  const [results, setResults] = useState([]);
  const handleChange = (e) => {
    console.log("handle change");
    console.log(query);
    setQuery(e.target.value);
  };
  //   const searchMaps = async () => [];

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("test");
    const books = await searchBooks(query);
    // const locations = await searchMaps(query);
    console.log({ books });
    // transform the data to conform to a standard
    setResults([books]);
  };

  return {
    query,
    handleChange,
    results,
    handleSubmit,
  };
};
