import React, { useState, useEffect } from "react";
import AboutUs from "../../layout/about-us/About";
import { useSelector } from "react-redux";

export const AboutPage = () => {
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
