import ServiceIndex from "../../layout/service/servideIndex/ServiceIndex";
import ServiceIndexSection from "../../layout/service/servideIndex/ServiceIndexSection";
function ServiceIndexPage({ serviceData, serviceIndexContent }) {
  return (
    <>
      <ServiceIndex serviceIndexContent={serviceIndexContent} />
      <ServiceIndexSection serviceData={serviceData} />
    </>
  );
}

export default ServiceIndexPage;
