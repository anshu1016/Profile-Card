//import { func } from "prop-types"
import React from "react";
export default function Main() {
  return (
    <div className="main">
      <h2>About</h2>
      <p>
        I has just started learning web Development. I am working in Nagarro
        as an IT Supprt. I am also pursuing MCA from Chandigarh University.
      </p>
      <br />
      <h2>Projects</h2>
      <p>
        I have created some projects while learning Web Development. You can
        see my projects {" "}
        <a
          href="https://arunshukla.netlify.app/project.html"
          target="_blank"
          className="Project-link"
        >
          here
        </a>
        .
      </p>
    </div>
  );
}
