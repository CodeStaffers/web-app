import React from "react";
import Content from "../../layout/content-section/Content";
import Header from "../../layout/header/Header";
import Rating from "../../layout/rating/Rating";
import Footer from "../../layout/footer/Footer";
import Favicon from "react-favicon";
import Section from "../../layout/section/Section";
import FunFact from "../../layout/funFact/FunFact";
import MainFooter from "../../layout/mainFooter/MainFooter";

function ThemeOne({ page }) {
  console.log(page);

  const { featureIcon, titleHome } = page;

  // set title of home page
  document.title = page.titleHome && titleHome;

  return (
    <>
      <Favicon url={featureIcon && featureIcon.fields.file.url} />
      <Header page={page} />
      <Content page={page} />
      <Rating page={page} />
      <Section page={page} />
      <FunFact page={page} />
      <Footer page={page} />
      <MainFooter page={page} />
    </>
  );
}

export default ThemeOne;
