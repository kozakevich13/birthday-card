import Card from "./Card";
import React, { useState, useEffect } from "react";
import "./index.css";

export default function App() {

  let randomId = getRandomInt(40)
  const [wish, setWish] = useState ('hi')

  useEffect(() => {
    fetch("https://retoolapi.dev/FMGixB/birthdaywishes")
      .then((response) => response.json())
      .then((data) => {
        setWish(data[randomId].message);
      });
  }, []);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className="App">
      <Card wish={wish}/>
    </div>
  );
}
