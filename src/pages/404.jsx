import React from "react";
import Nav from "../Nav";

const ErrorPage = () => {
  return (
    <div>
      <Nav />
      <div
        className="jumbotron text-center"
        style={{ margin: 0, paddingTop: "5em" }}
      >
        <h1>404</h1>
        <h3>Page Not Found</h3>
      </div>
    </div>
  );
};

export default ErrorPage;
