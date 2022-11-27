import React, { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./ourWorkSection.style.css";
import { Button } from "../../button/Button";

function OurWorkSection({ page, ourWorkTab, ourWorkDetailPage }) {
  const [workData, setWorkData] = useState([]);
  const [load, setLoad] = useState(6);
  const [loadText, setLoadText] = useState("");
  const location = useLocation();
  let { ourWorkSectionTitle } = page;

  const matchUrl = location.search.slice(3);

  if (location.search !== "") {
    if (matchUrl !== "all") {
      ourWorkDetailPage = ourWorkDetailPage.filter(
        (item) => matchUrl === item.fields.uniqueTitle
      );
    }
  }

  useEffect(() => {
    setWorkData(ourWorkDetailPage.slice(0, load));
    // eslint-disable-next-line
  }, [ourWorkDetailPage, load]);
  // load more

  const loadMore = () => {
    setLoadText("loading...");

    setTimeout(() => {
      setLoad(load + 3);
      setLoadText("");
    }, 500);
  };

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
                                ? "activeTabs  ourWorkTabsItem"
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
              {workData &&
                workData.map((item, index) => {
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

                        <div className="ourWorkTags">
                          {item.fields &&
                            item.fields.tagSlug.map((tag, index) => {
                              const { slug, title } = tag ? tag.fields : "";
                              return (
                                <Link
                                  to={`/${slug}`}
                                  state={{ item: item.fields }}
                                  key={index}
                                >
                                  <p>{title}</p>
                                </Link>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className="loadMore">
              <h6>{loadText}</h6>

              {load >= ourWorkDetailPage.length ? (
                ""
              ) : (
                <Button buttonSize="btn--large" onClick={() => loadMore()}>
                  Load More
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurWorkSection;
