import Content from "../../layout/content-section/Content";
import FunFact from "../../layout/funFact/FunFact";
import Project from "../../layout/project/Project";
import Service from "../../layout/service/Service";
import Testnomial from "../../layout/testnomials/Testnomial";
import HeroSection from "../../layout/heroSection/HeroSection";
import PricingPage from "./pricingPage";
function HomePage(props) {
  const { project } = props;

  return (
    <>
      <Content />
      <Service />
      <FunFact />
      <HeroSection />
      <Testnomial />
      <Project project={project} />
      <PricingPage />
    </>
  );
}

export default HomePage;
