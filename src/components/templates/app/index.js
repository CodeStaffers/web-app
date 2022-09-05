import React from "react";

import { Routes, Route } from "react-router-dom";

import Header from "../../layout/header/Header";
import Favicon from "react-favicon";
import MainFooter from "../../layout/mainFooter/MainFooter";
import BtnPlusTop from "../../layout/btnPlus/BtnPlusTop";
import HomePage from "./homePage";

import ServiceIndex from "../../layout/service/servideIndex/ServiceIndex";

function ThemeOne(props) {
  const {
    page,
    serviceData,
    testnomial,
    heroSection,
    project,
    serviceIndexContent,
  } = props;
  // console.log(page);

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
        <Route
          path="/service"
          element={
            <ServiceIndex
              heroSection={heroSection}
              serviceIndexContent={serviceIndexContent}
            />
          }
        />
      </Routes>
      <MainFooter page={page} />
    </>
  );
}

export default ThemeOne;
