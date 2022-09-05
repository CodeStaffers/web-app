import React from "react";
import Content from "../../layout/content-section/Content";
import Header from "../../layout/header/Header";
import Favicon from "react-favicon";
import FunFact from "../../layout/funFact/FunFact";
import MainFooter from "../../layout/mainFooter/MainFooter";
import BtnPlusTop from "../../layout/btnPlus/BtnPlusTop";
import Service from "../../layout/service/Service";
import Testnomial from "../../layout/testnomials/Testnomial";
import HeroSection from "../../layout/heroSection/HeroSection";
import Project from "../../layout/project/Project";

function ThemeOne(props) {
  const { page, serviceData, testnomial, heroSection, project } = props;
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
      <Service serviceData={serviceData} />
      <FunFact page={page} />
      <HeroSection heroSection={heroSection} />
      <Testnomial testnomial={testnomial} />
      <Project project={project} />
      <MainFooter page={page} />
    </>
  );
}

export default ThemeOne;
