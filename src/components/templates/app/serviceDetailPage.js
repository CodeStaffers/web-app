import Testnomial from "../../layout/testnomials/Testnomial";

import ServiceDetailHero from "../../layout/service/serviceDetailComp/ServiceDetailHero";

import ServiceDetailFeature from "../../layout/service/serviceDetailComp/ServiceDetailFeature";

import ServiceDetail from "../../layout/service/serviceDetail/ServiceDetail";

function ServiceDetailPage(props) {
  const { serviceData, testnomial, serviceDetailPage } = props;

  const { brandCard, content, image, summary, title } = serviceDetailPage;

  return (
    <>
      <ServiceDetail serviceData={serviceData} />
      <ServiceDetailHero content={content} image={image} summary={summary} />

      <ServiceDetailFeature brandCard={brandCard} title={title} />
      <Testnomial testnomial={testnomial} />
    </>
  );
}

export default ServiceDetailPage;
