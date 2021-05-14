import React from "react";
import ReactDOM from "react-dom";
import Common from "./Common";
import web from "../src/image/dev.png";

const Home = () => (
  <>
    <Common
      title="Grow and build with "
      bname="DevelTops"
      desc="Here is the team of developers"
      link="/service"
      btn="Start With"
      imgsrc={web}
    />
  </>
);

export default Home;
