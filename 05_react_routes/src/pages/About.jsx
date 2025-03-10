import React from "react";
import { useLocation } from "react-router-dom";
const About = () => {
  const location = useLocation();
  const parmas = new URLSearchParams(location.search);
  const name = parmas.get("name");
  const age = parmas.get("age");

  return (
    <div>
      <h2>About</h2>
      <h3>Name : {name}</h3>
      <h3>Age : {age}</h3>
    </div>
  );
};

export default About;
