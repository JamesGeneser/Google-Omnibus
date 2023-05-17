import { useState, useEffect } from "react";

export const useGetVolume = (id) => {
  console.log(id + " useGetVolume");
  const endPoint = "https://www.googleapis.com/books/v1/volumes/";
  const key = "AIzaSyDyUh9tTZjRYDn1uNQbyK8fgrSAGsMKnW4";
  const url = endPoint + id + "?key=" + key;
  console.log(url);

  const [book, setBook] = useState();

  useEffect(() => {
    const fetchVolumeData = async () => {
      const data = await fetch(url);
      console.log(data);
      const jsonData = await data.json();
      console.log(jsonData);
      setBook(jsonData);
    };

    fetchVolumeData().catch(console.error);

    // const response = fetch(url);
    // console.log(response).then((response) => {
    //   console.log(response.json());
    // });
    // .then((response) => response.json());
    // console.log(response).then((data) => {
    //   console.log(data + "useGet Book 16");
    //   setBook(data);
    // });
  }, []);

  // return book;
};
