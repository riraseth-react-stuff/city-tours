import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TourList from "./components/TourList";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <TourList></TourList>
    </React.Fragment>
  );
}

export default App;
