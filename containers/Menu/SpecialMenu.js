import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Welcome to My World" />
      {/* <h1 className="headtext__cormorant">MY&apos;s SKILLS</h1> */}
      <h1 className="headtext__cormorant">SKILLS</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">PROGRAMMING</p>
        <div className="app__specialMenu_menu_items">
          {data.programming.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        {/* <img src={images.menu} alt="menu__img" /> */}
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">GRAPHICS </p>
        <div className="app__specialMenu_menu_items">
          {data.graphics.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">VIDEO EDITING</p>
        <div className="app__specialMenu_menu_items">
          {data.video.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        {/* <img src={images.menu} alt="menu__img" /> */}
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">UI/UX</p>
        <div className="app__specialMenu_menu_items">
          {data.ui.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>

    {/* <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div> */}
  </div>
);

export default SpecialMenu;
