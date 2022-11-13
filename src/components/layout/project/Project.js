import React, { useEffect, useState } from "react";
import "./project.css";
import ProjectCard from "./ProjectCard";
import { useSelector } from "react-redux";

function Project(pdata) {
  const { projectTitle, projectSubTitle, projectDescription } = pdata.pdata;

  const [project, setProject] = useState([]);
  const pageData = useSelector((state) => {
    return state.ourWorkDetail.ourWorkDetail;
  });

  const getPageData = async () => {
    const d = await pageData;
    setProject(d);
  };

  useEffect(() => {
    getPageData();
    // eslint-disable-next-line
  }, []);

  return (
    <section className="projectContainer">
      <div className="wrapper projectManage">
        <div className="projectWrapper">
          <div className="projectTitle">
            <span>{projectSubTitle}</span>
            <h2>{projectTitle}</h2>
            <p style={{ maxWidth: "60%" }}>{projectDescription}</p>
          </div>

          <div className="projectCardWrapper">
            {project
              ? project &&
                project.slice(0, 3).map((item, index) => {
                  let urlTitle = item.fields.title.replace(/\s+|[,/]/g, "-");
                  return (
                    <ProjectCard item={item} urlTitle={urlTitle} key={index} />
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
