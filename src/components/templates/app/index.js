import React from "react";
import Content from "../../layout/content-section/Content";
import Header from "../../layout/header/Header";
import Rating from "../../layout/rating/Rating";
import Footer from "../../layout/footer/Footer";

function ThemeOne({ page }) {
  return (
    <>
      <Header />
      <Content page={page} />
      <Rating />
      <Footer />
    </>
  );
}

export default ThemeOne;
