import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../layout/header/Header";
import Favicon from "react-favicon";
import MainFooter from "../../layout/mainFooter/MainFooter";
import BtnPlusTop from "../../layout/btnPlus/BtnPlusTop";
import HomePage from "./homePage";
import Contact from "../../layout/conactPage/Contact";
import WebUser from "../../layout/webUser/WebUser";
import ServiceDetailPage from "./serviceDetailPage";
import ServiceIndexPage from "./serviceIndexPage";
import OurWorkPage from "./ourWorkPage";
import WorkDetailPage from "./workDetailPage";
import { AboutPage } from "./aboutPage";
function ThemeOne(props) {
  const { page } = props;

  const { featureIcon, titleHome } = page;

  // set title of home page add icon
  document.title = page.titleHome && titleHome;

  return (
    <>
      {featureIcon && <Favicon url={featureIcon.fields.file.url} />}
      <BtnPlusTop />
      <Header page={page} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/our-works" element={<OurWorkPage />} />
        <Route path="/our-works/:title" element={<WorkDetailPage />} />
        <Route path="/service" element={<ServiceIndexPage />} />
        <Route path="/service/:shortTitle" element={<ServiceDetailPage />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
      <WebUser />
      <MainFooter />
    </>
  );
}

export default ThemeOne;
