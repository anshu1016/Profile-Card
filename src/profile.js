import React from "react";
import image from "./arun-modified.png";
export default function Profile() {
  return (
    <div className="img-container">
      <img src={image} alt="profile-pic" className="profile-img" />
    </div>
  );
}
