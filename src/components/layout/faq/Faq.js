import React, { useState, useEffect } from "react";
import "./faq.css";
import FaqComp from "react-faq-component";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useSelector } from "react-redux";
function Faq() {
  const [fData, setFdata] = useState([]);
  const pageData = useSelector((state) => {
    return state.faq.faq;
  });

  const getPageData = async () => {
    const d = await pageData;
    setFdata(d);
  };

  useEffect(() => {
    getPageData();
    // eslint-disable-next-line
  }, []);

  const styles = {
    bgColor: "transparent",
    rowTitleColor: "#fcc1ff",
    rowContentColor: "black",
    titleTextColor: "blue",
  };

  const config = {
    animate: true,
    expandIcon: "+",
    collapseIcon: "-",
    tabFocus: true,
  };

  const { faq, title, rows } = fData;
  const faqData =
    rows &&
    rows.map((item) => {
      return {
        title: item.fields.title,
        content: documentToReactComponents(item.fields.content),
      };
    });

  return (
    <section className="faqContainer">
      <div className="wrapper">
        <div className="faqTitle">
          <p>{faq}</p>
          <h2>{title}</h2>
        </div>
        <div className="faqDiv">
          <FaqComp
            data={{
              rows: faqData,
            }}
            styles={styles}
            config={config}
          />
        </div>
      </div>
    </section>
  );
}

export default Faq;
