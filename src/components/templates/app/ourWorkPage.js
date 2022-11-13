import React, { useState, useEffect } from "react";
import OurWork from "../../layout/our-work/OurWork";
import WorkSection from "../../layout/our-work/ourWorkSection/WorkSection";
import { useSelector } from "react-redux";

function OurWorkPage() {
  const [ourWorkPage, SetOurWorkPage] = useState([]);
  const [ourWorkTab, setOurTabPage] = useState([]);
  const [ourWorkDetailPage, setOurWorkDetailPage] = useState([]);

  const pageData = useSelector((state) => {
    return state.ourWorkSection.ourWorkSection;
  });

  const pageTab = useSelector((state) => {
    return state.ourWorkTab.ourWorkTab;
  });

  const pageDetail = useSelector((state) => {
    return state.ourWorkDetail.ourWorkDetail;
  });

  const getPageData = async () => {
    const d = await pageData;
    const e = await pageTab;
    const f = await pageDetail;
    setOurWorkDetailPage(f);
    SetOurWorkPage(d);
    setOurTabPage(e);
  };

  useEffect(() => {
    getPageData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <OurWork />
      {ourWorkPage.length !== 0 || ourWorkPage.length === undefined ? (
        <WorkSection
          page={ourWorkPage}
          ourWorkTab={ourWorkTab}
          ourWorkDetailPage={ourWorkDetailPage}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default OurWorkPage;
