import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../layout/header/Header";
import Favicon from "react-favicon";
import MainFooter from "../../layout/mainFooter/MainFooter";
import BtnPlusTop from "../../layout/btnPlus/BtnPlusTop";
import HomePage from "./homePage";
// import Contact from "../../layout/conactPage/Contact";
import WebUser from "../../layout/webUser/WebUser";
import ServiceDetailPage from "./serviceDetailPage";
import ServiceIndexPage from "./serviceIndexPage";
import OurWorkPage from "./ourWorkPage";
import ContactPage from "./contactPage";
import WorkDetailPage from "./workDetailPage";
import WorkSlugPage from "./WorkSlugPage";
import { AboutPage } from "./aboutPage";
import SlugDetail from "../../layout/our-work/slugDetail/SlugDetail";
import PricingPage from "./PricingPage";
function ThemeOne(props) {
  const { page } = props;

  const {
    featureIcon,
    titleHome,
    serviceTitle,
    testnomialTitle,
    testnomialSubTitle,
    projectTitle,
    projectDescription,
    projectSubTitle,
  } = page;

  // set title of home page add icon
  document.title = page.titleHome && titleHome;

  const project = { projectTitle, projectSubTitle, projectDescription };

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
              title={serviceTitle}
              testnomialTitle={testnomialTitle}
              testnomialSubTitle={testnomialSubTitle}
              project={project}
            />
          }
        />
        <Route path="/:slug" element={<WorkSlugPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/our-works" element={<OurWorkPage />} />
        <Route path="/our-works/content-hub/:detail" element={<SlugDetail />} />
        <Route path="/our-works/:title" element={<WorkDetailPage />} />
        <Route path="/services" element={<ServiceIndexPage />} />
        <Route path="/services/:shortTitle" element={<ServiceDetailPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
      <WebUser />
      <MainFooter />
    </>
  );
}

export default ThemeOne;
