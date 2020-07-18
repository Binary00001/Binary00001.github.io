import React from "react";
import Nav from "../Nav";
import Card from "react-bootstrap/Card";
import ShotorNot from "./shotClock";

const Projects = () => {
  return (
    <div>
      <Nav />

      <div style={{ margin: 0 }}>
        <p
          className="display-4 bg-dark text-danger text-center"
          style={{ padding: "1em" }}
        >
          projects
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 text-center">
            <Card>
              {/* <Card.Img
                variant="top"
                src="https://pixy.org/images/placeholder.png"
              /> */}
              <Card.Body>
                <Card.Title>Shot Or Not</Card.Title>
                <Card.Text>
                  <ShotorNot />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-4 text-center">
            <img
              src="https://pixy.org/images/placeholder.png"
              className="img-thumbnail"
              alt="placeholder"
            />
            Placeholder
          </div>
          <div className="col-sm-4 text-center">
            <img
              src="https://pixy.org/images/placeholder.png"
              className="img-thumbnail"
              alt="placeholder"
            />
            Placeholder
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
