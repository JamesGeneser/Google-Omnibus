import React, { useState, useEffect, Component } from "react";
import Card from "react-bootstrap/Card";
import ReactDOM from "react-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const url = "https://www.googleapis.com/books/v1/volumes?q=";
const key = "AIzaSyDyUh9tTZjRYDn1uNQbyK8fgrSAGsMKnW4";
// import Button from "react-bootstrap/Button";

// function BookSearch(searchQuery) {
// console.log(searchQuery);

// console.log(apiURL);
// console.log(searchQuery + "search query");
//   const node = document.getElementById("bookCard");
//   const bookCard = ReactDOM.findDOMNode(node);
// const [bookState, setBookState] = useState({
//   bookTitle: "",
//   bookAuthor: "",
//   bookDescription: "",
// });

// function handleChange(title, author, description) {
//   // setBookTitle((bookTitle = title));
//   // setBookState(
//   //   (bookState.bookTitle = title)
//   //   (bookState.bookAuthor = author)
//   // );
// }
let bookDataArr = [];
// const [data, setData] = useState([]);

function RenderResult(searchQuery) {
  const [apiResponse, setApiResponse] = useState([]);
  useEffect(() => {
    callBooksApi(searchQuery);
    // console.log(searchQuery);
    // callBooksApi(searchQuery).then((response) =>
    //   setApiResponse(response.json())
    // );
  }, []);
  const callBooksApi = async (searchQuery) => {
    const query = searchQuery.data;
    const apiURL = url + query + "&maxResults=9" + "&key=" + key;
    const response = await fetch(apiURL);
    // console.log(await response.json());
    const jsonResponse = await response.json();
    // console.log(jsonResponse.items);
    const items = jsonResponse.items;
    setApiResponse(items);

    // .then(function (response) {
    //   return response.json();
    // })
    // .then(function (data) {
    //   //   let bookDataArr = [];
    //   console.log(data);
    //   let bookDataArr = data.items;

    //   function titleFunction(bookDataArr) {
    //     return bookDataArr.volumeInfo.title;
    //   }
    //   const titleArr = bookDataArr.map(titleFunction);
    //   console.log(titleArr);
    //   console.log([{ bookDataArr }] + "array");
    //   for (let i = 0; i < 2; i++) {
    //     console.log(bookData);
    //     let title = bookData[i].volumeInfo.title;

    //     console.log(title);
    //     // let bookInfo = book.volumeInfo;
    //     // let title = bookInfo.title;
    //     // bookDataArr.push(title);
    //     // console.log(bookDataArr + " bookdata Arr");
    //     // let author = [bookInfo.authors];
    //     // let description = bookInfo.description;
    //     return title;
    //   }
    //       return titleArr;
    //     });
    //   //   const jsonResponse = await response.json();
    //   //   return JSON.stringify(jsonResponse);
    //   return response;
  };
  console.log(apiResponse);

  return (
    <>
      <Row>
        {apiResponse.map((data) => {
          return (
            <Col xs={12} md={4} lg={3}>
              <Card key={data.id} className="bookCard">
                <Card.Img
                  variant="top"
                  className="cardImg"
                  src={data.volumeInfo.imageLinks.thumbnail}
                />
                <Card.Body>
                  <Card.Title>{data.volumeInfo.title}</Card.Title>
                  <Card.Text>{data.volumeInfo.authors}</Card.Text>
                  <Card.Text>{data.volumeInfo.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            //   <li className="Name"  title={data.title}>
            //
            //   </li>
          );
        })}
      </Row>
    </>
  );
  //   }

  //   return (
  //     <>
  //       <p>Book returns</p>
  //       {Object.keys(bookDataArr).map((key) => (
  //         <p>{bookDataArr[key]}</p>
  //       ))}
  //       <p>{bookDataArr}</p>
  //     </>
  //     // <div id="bookCard">
  //     //   <Card>
  //     //     <Card.Body>
  //     //       <Card.Title></Card.Title>
  //     //       {/* <Card.Title>{bookState.bookTitle}</Card.Title> */}
  //     //     </Card.Body>
  //     //   </Card>
  //     // </div>
  //   );
}
//   useEffect(() => {
//     localStorage.setItem("dataKey", JSON.stringify(data));
//   }, [data]);

export default RenderResult;
