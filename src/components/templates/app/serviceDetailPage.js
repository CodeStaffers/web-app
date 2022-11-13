import Testnomial from "../../layout/testnomials/Testnomial";

import ServiceDetailHero from "../../layout/service/serviceDetailComp/ServiceDetailHero";

import ServiceDetailFeature from "../../layout/service/serviceDetailComp/ServiceDetailFeature";

import ServiceDetail from "../../layout/service/serviceDetail/ServiceDetail";

function ServiceDetailPage() {
  return (
    <>
      <ServiceDetail />
      <ServiceDetailHero />
      <ServiceDetailFeature />
      <Testnomial />
    </>
  );
}

export default ServiceDetailPage;
