import React from "react";

import { Routes, Route } from "react-router-dom";

import Header from "../../layout/header/Header";
import Favicon from "react-favicon";
import MainFooter from "../../layout/mainFooter/MainFooter";
import BtnPlusTop from "../../layout/btnPlus/BtnPlusTop";
import HomePage from "./homePage";
import OurWork from "../../layout/our-work/";

import ServiceIndex from "../../layout/service/servideIndex/ServiceIndex";
// import ServiceDetail from "../../layout/service/serviceDetail/ServiceDetail";
import Contact from "../../layout/conactPage/Contact";
import WebUser from "../../layout/webUser/WebUser";
import ServiceDetailPage from "./serviceDetailPage";

function ThemeOne(props) {
  const {
    page,
    serviceData,
    testnomial,
    heroSection,
    project,
    serviceIndexContent,
    topUser,
    serviceDetailPage,
    ourWorkPage,
  } = props;

  const { featureIcon, titleHome } = page;

  // set title of home page add icon
  document.title = page.titleHome && titleHome;

  return (
    <>
      {featureIcon && <Favicon url={featureIcon.fields.file.url} />}
      <BtnPlusTop />
      <Header page={page} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              page={page}
              serviceData={serviceData}
              testnomial={testnomial}
              heroSection={heroSection}
              project={project}
            />
          }
        />
        <Route path="/our-works" element={<OurWork page={ourWorkPage} />} />
        <Route
          path="/service"
          element={
            <ServiceIndex
              serviceData={serviceData}
              serviceIndexContent={serviceIndexContent}
            />
          }
        />
        <Route
          path="/service/:shortTitle"
          element={
            <ServiceDetailPage
              serviceData={serviceData}
              testnomial={testnomial}
              serviceDetailPage={serviceDetailPage}
            />
          }
        />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
      <WebUser topUser={topUser} />
      <MainFooter page={page} />
    </>
  );
}

export default ThemeOne;
