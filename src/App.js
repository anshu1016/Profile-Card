import React from "react"
import "./style.css";
import Profile from "./profile";
import Bio from "./bio";
import Social from "./social";
import Main from "./main";
import Footer from "./footer";
//import Profile from "./img";
export default function App() {
  return (
    <div className="container">
      <Profile/>
      <Bio />
      <Social />
      <Main />
      <Footer />
    </div>
  );
}
