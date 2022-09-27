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

function ThemeOne(props) {
  const {
    page,
    serviceData,
    // project,
    serviceDetailPage,
    ourWorkPage,
    ourWorkDetailPage,
    ourWorkTab,
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
              project={ourWorkPage.ourWorkSection}
            />
          }
        />
        <Route
          path="/our-works"
          element={
            <OurWorkPage ourWorkPage={ourWorkPage} ourWorkTab={ourWorkTab} />
          }
        />
        <Route
          path="/our-works/:title"
          element={<WorkDetailPage ourWorkDetailPage={ourWorkDetailPage} />}
        />

        <Route
          path="/service"
          element={<ServiceIndexPage serviceData={serviceData} />}
        />
        <Route
          path="/service/:shortTitle"
          element={
            <ServiceDetailPage
              serviceData={serviceData}
              serviceDetailPage={serviceDetailPage}
            />
          }
        />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
      <WebUser />
      <MainFooter page={page} />
    </>
  );
}

export default ThemeOne;
