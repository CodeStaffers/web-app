import React, { useState, useEffect } from "react";
import WorkDetail from "../../layout/our-work/workDetail/WorkDetail";
import { useSelector } from "react-redux";

function WorkDetailPage() {
  const [ourWorkDetailPage, setOurWorkDetailPage] = useState([]);
  const pageData = useSelector((state) => {
    return state.ourWorkDetail.ourWorkDetail;
  });

  const getPageData = async () => {
    const d = await pageData;
    setOurWorkDetailPage(d);
  };

  useEffect(() => {
    getPageData();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {ourWorkDetailPage.length !== 0 ||
      ourWorkDetailPage.length === undefined ? (
        <WorkDetail ourWorkDetailPage={ourWorkDetailPage} />
      ) : (
        ""
      )}
    </>
  );
}

export default WorkDetailPage;
