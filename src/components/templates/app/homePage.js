import Content from "../../layout/content-section/Content";
import FunFact from "../../layout/funFact/FunFact";
import Project from "../../layout/project/Project";
import Service from "../../layout/service/Service";
import Testnomial from "../../layout/testnomials/Testnomial";
import HeroSection from "../../layout/heroSection/HeroSection";
import Faq from "../../layout/faq/Faq";

function HomePage(props) {
  const { project, title, testnomialSubTitle, testnomialTitle } = props;

  return (
    <>
      <Content />
      <Service serviceTitle={title} />
      <FunFact />
      <HeroSection />
      <Testnomial
        testnomialTitle={testnomialTitle}
        testnomialSubTitle={testnomialSubTitle}
      />
      <Project pdata={project} />
      <Faq />
    </>
  );
}

export default HomePage;
