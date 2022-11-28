import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AboutUs from "../../layout/about-us/About";

export const AboutPage = (props) => {
  const [about, setAbout] = useState([]);

  const pageData = useSelector((state) => {
    return state.about.about;
  });

  const getPageData = async () => {
    const d = await pageData;
    setAbout(d);
  };

  useEffect(() => {
    getPageData();
    document.querySelector(".nav-menu").classList.remove("active");
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {about.length !== 0 || about.length === undefined ? (
        <AboutUs about={about} />
      ) : (
        ""
      )}
    </>
  );
};
