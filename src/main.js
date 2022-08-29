//import { func } from "prop-types"
import React from "react";
export default function Main() {
  return (
    <div className="main">
      <h2>About</h2>
      <p>
        Arun has just started learning web Development. He is working in Nagarro
        for two months. He is also pursuing MCA from Chandigarh University.
      </p>
      <br />
      <h2>Projects</h2>
      <p>
        Arun has created some projects while learning Web Development. You can
        see his projects by{" "}
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
