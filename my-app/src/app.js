import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navigation from "./components/Navigation";
// import Project from "./components/Project";
import Home from "./components/pages/Home";

// import Header from "./components/Header";
// import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import "./app.css";
import SingleBook from "./components/pages/SingleBook";

function App() {
  const [selectedBook, setSelectedBook] = useState()
  return (
    <>
      <Router>
        {/* <Header />
        <Navigation /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singlebook" element={<SingleBook />} />
          {/* <Route path="/official-portfolio/project" element={<Project />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
