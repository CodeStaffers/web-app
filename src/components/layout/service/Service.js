import React, { useEffect, useState } from "react";
import "./service.css";
import ServiceCard from "./ServiceCard";
import { useSelector } from "react-redux";

function Service() {
  const [data, setData] = useState([]);
  const pageData = useSelector((state) => {
    return state.servicePage.servicePage;
  });

  const getPageData = async () => {
    const d = await pageData;
    setData(d);
  };

  useEffect(() => {
    getPageData();
    // eslint-disable-next-line
  }, []);

  return (
    <section className="service">
      <div className="wrapper">
        <div className="serviseTitle">
          <h2>Ours services</h2>
        </div>
        <div className="serviceCardWrapper">
          {data &&
            data.map((item, index) => {
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
