import { useState, useEffect } from 'react';

export const useGetBook = (id) => {
    const url = "https://www.googleapis.com/books/v1/volumes/";
    const key = "AIzaSyDyUh9tTZjRYDn1uNQbyK8fgrSAGsMKnW4";
    const apiURL = url + id + "?key=" + key;

    const [book, setBook] = useState();

    useEffect(() => {
      fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
          setBook(data);
        });
    }, []);

    return {
        book
    }
}