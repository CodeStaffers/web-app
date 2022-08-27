import React from "react";
import Content from "../../layout/content-section/Content";
import Header from "../../layout/header/Header";
import Rating from "../../layout/rating/Rating";
import Footer from "../../layout/footer/Footer";
import Favicon from "react-favicon";
import FunFact from "../../layout/funFact/FunFact";
import MainFooter from "../../layout/mainFooter/MainFooter";
import BtnPlusTop from "../../layout/btnPlus/BtnPlusTop";
import Service from "../../layout/service/Service";
import Testnomial from "../../layout/testnomials/Testnomial";

function ThemeOne({ page }) {
  // console.log(page);

  const { featureIcon, titleHome } = page;

  // set title of home page add icon
  document.title = page.titleHome && titleHome;

  return (
    <>
      {featureIcon && <Favicon url={featureIcon.fields.file.url} />}
      <BtnPlusTop />
      <Header page={page} />
      <Content page={page} />
      <Rating page={page} />
      <Service page={page} />
      <FunFact page={page} />

      <Testnomial page={page} />

      <Footer page={page} />

      <MainFooter page={page} />
    </>
  );
}

export default ThemeOne;
