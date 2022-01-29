import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.welcome} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Let me speak" />
      <h1 className="headtext__cormorant">CATCH PHRASE</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">COMING SOON</p>
        </div>
        <p className="p__opensans"> COMING SOON </p>
      </div>

      <div className="app__chef-sign">
        <p>Ogubuike emejuru</p>
        <p className="p__opensans">DEVELOPER & DESIGNER</p>
        {/* <img src={images.sign} alt="sign_image" /> */}
      </div>
    </div>
  </div>
);

export default Chef;
