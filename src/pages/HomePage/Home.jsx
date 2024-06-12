import React from "react";
import FirstSectionHomePage from "./components/FirstSectionHomePage";
// import OurProducts from "./components/OurProducts";
import OurServices from "./components/SecondSection";

const Home = () => {
  return (
    <div>
      <FirstSectionHomePage />
      {/* <OurProducts /> */}
      <OurServices />
    </div>
  );
};

export default Home;
