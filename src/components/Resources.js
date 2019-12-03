import React from "react";

export default () => {
  return (
    <div className="App">
      <h1>Crime Resources: </h1>
      <p className="Link">
        Beaumont Police Reports
        <a
          style={{ color: "black" }}
          href="https://p2c.beaumonttexas.gov/p2c/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {""}
          https://p2c.beaumonttexas.gov/p2c/
        </a>
      </p>
      <p className="Link">
        CrimeMapping.com
        <a
          style={{ color: "black" }}
          href="https://www.crimemapping.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {""}
          https://www.crimemapping.com/
        </a>
      </p>
      <p className="Link">
        LexisNexis Community Crime Map
        <a
          style={{ color: "black" }}
          href="https://communitycrimemap.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {""}
          https://communitycrimemap.com/
        </a>
      </p>
      <p className="Link">
        Crime Reports
        <a
          style={{ color: "black" }}
          href="https://www.crimereports.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {""}
          https://www.crimereports.com/
        </a>
      </p>
      <p className="Link">
        ADT Crime Map
        <a
          style={{ color: "black" }}
          href="https://www.adt.com/crime"
          target="_blank"
          rel="noopener noreferrer"
        >
          {""}
          https://www.adt.com/crime
        </a>
      </p>
    </div>
  );
};
