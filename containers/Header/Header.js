import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="HEADER" />
      <h1 className="app__header-h1">COMING SOON</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        INTRO
      </p>
      {/* <button type="button" className="custom__button">
        Explore Menu
      </button> */}
    </div>

    <div className="app__wrapper_img">
      {/* <img src={images.welcome} alt="header_img" /> */}
    </div>
  </div>
);

export default Header;
