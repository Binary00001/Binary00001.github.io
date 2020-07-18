import React from "react";
import Nav from "../Nav";
import Links from "../Links";

const MainPage = () => {
  return (
    <div>
      <Nav />

      <div className="text-center" style={{ margin: 0 }}>
        <p className="display-4 bg-dark text-danger" style={{ padding: "1em" }}>
          BINARY00001
        </p>

        <p className="display-5" style={{ margin: "6em 0" }}>
          01000111
          <br />
          01100101
          <br />
          01100101
          <br />
          01101011
        </p>
      </div>
      <Links />
    </div>
  );
};

export default MainPage;
