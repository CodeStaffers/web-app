import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./ourWorkSection.style.css";
import { Button } from "../../button/Button";
// import { getData } from "./tabs";

function Work({ page, ourWorkTab }) {
  // reverse the ourWorkTab
  // ourWorkTab.reverse();

  let { ourWorkSectionTitle, ourWorkSection } = page;

  const location = useLocation();
  const matchUrl = location.search.slice(3);
  // let tabs = getData(true);
  if (location.search !== "") {
    // tabs = getData(false);
    if (matchUrl !== "all") {
      ourWorkSection = ourWorkSection.filter(
        (item) => matchUrl === item.fields.uniqueTitle
      );
    }
  } else {
    // tabs = getData(true);
  }

  return (
    <>
      <section className="workSection">
        <div className="wrapper">
          <div className="workSectionWrapper">
            <div className="ourWorkSectionTitle">
              <span>Our work</span>
              <h2>{ourWorkSectionTitle}</h2>
              <div className="ourWorkTabs">
                <ul className="ourWorkTabWrapper">
                  {ourWorkTab &&
                    ourWorkTab.map((item, index) => {
                      return (
                        <NavLink
                          to={`/our-works?q=${item.fields.query}`}
                          key={index}
                        >
                          <li
                            className={
                              item.fields.matchUrl === matchUrl
                                ? //  ||
                                  // (item.fields.activeUrl ? true : false)
                                  "activeTabs ourWorkTabsItem"
                                : "ourWorkTabsItem"
                            }
                          >
                            {item.fields.title}
                          </li>
                        </NavLink>
                      );
                    })}
                </ul>
              </div>
            </div>

            <div className="ourWorkSectionWrapper">
              {ourWorkSection &&
                ourWorkSection.map((item, index) => {
                  let urlTitle = item.fields.title.replace(/\s+|[,/]/g, "-");

                  return (
                    <div className="ourWorkSectionCard" key={index}>
                      <div>
                        <Link
                          to={`/our-works/${urlTitle}`}
                          state={{ id: item.sys.id, titlePage: urlTitle }}
                        >
                          <div className="ourWorkSectionImage">
                            <img
                              src={item.fields.featureImage.fields.file.url}
                              alt=""
                            />
                          </div>
                          <div className="ourWorkSectionSubtitle">
                            {documentToReactComponents(item.fields.summary)}
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className="loadMore">
              <Button
                buttonSize="btn--large"
                // onClick={() => alert("Loading more")}
              >
                Load More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
