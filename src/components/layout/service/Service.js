import React from "react";
import "./service.css";
import ServiceCard from "./ServiceCard";

function Service({ serviceData }) {
  return (
    <section className="service">
      <div className="wrapper">
        <div className="serviseTitle">
          <h2>Ours services</h2>
        </div>
        <div className="serviceCardWrapper">
          {serviceData &&
            serviceData.map((item, index) => {
              return (
                <ServiceCard
                  key={index}
                  logo={item.fields.logo}
                  title={item.fields.title}
                  shortText={item.fields.shortText}
                  url={item.fields.url}
                  color={item.fields.color}
                  id={item.sys.id}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Service;
