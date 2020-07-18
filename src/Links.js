import React from "react";
import { FaGithubAlt, FaTwitter } from "react-icons/fa";

const Links = () => {
  return (
    <div
      className="conatiner-fluid border-top text-center fixed-bottom"
      style={{ marginBottom: "1em" }}
    >
      <div>
        <a href="https://www.twitter.com/mistahBinary">
          <FaTwitter color="black" size="30" style={{ margin: "0.5em 2em" }} />
        </a>
        <a href="https://www.github.com/Binary00001">
          <FaGithubAlt
            color="black"
            size="30"
            style={{ margin: "0.5em 2em" }}
          />
        </a>
      </div>
      <div>
        <p>
          I'm hosted with{" "}
          <a
            href="https://pages.github.com/"
            style={{ textDecoration: "none", color: "black" }}
          >
            <strong>github pages</strong>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Links;
