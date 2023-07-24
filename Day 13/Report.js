import React, { useState, useEffect } from "react";
import axios from "axios";
//import BlogItem from "./BlogItem";
//import "./styles.css";
import Details from"./Details";

const Report = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchShows();
    
}, []);

const fetchShows = () => {
    axios
    .get("http://localhost:8080/get/") // Replace with your backend URL
    .then((response) => {
        setShows(response.data);
        console.log(shows);
      })
      .catch((error) => {
        console.error("Error fetching data :", error);
      });
  };

  return (
    <div>
     {shows.map((show) => (
        <Details key={show.fname}show={show}/>
     ))} 
    </div>
  );
};

export default Report;