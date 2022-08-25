import React from "react";
import Content from "../../layout/content-section/Content";
import Header from "../../layout/header/Header";
import Rating from "../../layout/rating/Rating";

import Favicon from "react-favicon";

function ThemeOne({ page }) {
  const { featureIcon, titleHome } = page;

  // set title of home page
  document.title = page.titleHome && titleHome;

  return (
    <>
      <Favicon url={featureIcon && featureIcon.fields.file.url} />
      <Header page={page} />
      <Content page={page} />
      <Rating page={page} />
    </>
  );
}

export default ThemeOne;
