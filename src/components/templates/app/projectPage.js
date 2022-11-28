import React, { useState, useEffect } from "react";
import Project from "../../layout/project-page/Project";
import { useSelector } from "react-redux";

function ProjectPage() {
  const [data, setData] = useState([]);
  const pageData = useSelector((state) => {
    return state.project.project;
  });

  const getPageData = async () => {
    const d = await pageData;
    setData(d);
  };

  useEffect(() => {
    getPageData();
    // eslint-disable-next-line
  }, []);

  return <>{data && <Project project={data} />}</>;
}

export default ProjectPage;
