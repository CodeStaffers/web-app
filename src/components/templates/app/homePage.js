import Content from "../../layout/content-section/Content";
import FunFact from "../../layout/funFact/FunFact";
import Project from "../../layout/project/Project";
import Service from "../../layout/service/Service";
import Testnomial from "../../layout/testnomials/Testnomial";
import HeroSection from "../../layout/heroSection/HeroSection";

function HomePage(props) {
  const { page, serviceData, heroSection, testnomial, project } = props;

  return (
    <>
      <Content page={page} />
      <Service serviceData={serviceData} />
      <FunFact page={page} />
      <HeroSection heroSection={heroSection} />
      <Testnomial testnomial={testnomial} />
      <Project project={project} />
    </>
  );
}

export default HomePage;
