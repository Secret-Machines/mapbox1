import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="App">
      <h1>Welcome to the Home Menu:</h1>
      <br />
      <Link className="Link" to="/map">
        2019 Murder Map in Beaumont, Texas
      </Link>
      <br />
      <br />
      <Link className="Link" to="/map2">
        2019 Reported Crimes in Beaumont, Texas
      </Link>
      <br />
      <br />
      <Link className="Link" to="/searchmap">
        Search Map
      </Link>
      <br />
      <br />
      <Link className="Link" to="/resources">
        Resources
      </Link>
      <br />
      <br />
      <Link className="Link" to="/about">
        About
      </Link>
    </div>
  );
};
