import React, { useEffect } from "react";
import ServiceIndex from "../../layout/service/servideIndex/ServiceIndex";
import ServiceIndexSection from "../../layout/service/servideIndex/ServiceIndexSection";
function ServiceIndexPage() {
  useEffect(() => {
    document.querySelector(".nav-menu").classList.remove("active");
  }, []);

  return (
    <>
      <ServiceIndex />
      <ServiceIndexSection />
    </>
  );
}

export default ServiceIndexPage;
