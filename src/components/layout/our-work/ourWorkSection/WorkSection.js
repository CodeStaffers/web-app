import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./ourWorkSection.style.css";
import { Button } from "../../button/Button";

// import { getData } from "./tabs";

function OurWorkSection({ page, ourWorkTab, ourWorkDetailPage }) {
  // reverse the ourWorkTab

  let { ourWorkSectionTitle } = page;

  // console.log(ourWorkDetailPage);

  const location = useLocation();
  const matchUrl = location.search.slice(3);

  if (location.search !== "") {
    if (matchUrl !== "all") {
      ourWorkDetailPage = ourWorkDetailPage.filter(
        (item) => matchUrl === item.fields.uniqueTitle
      );
    }
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
              {ourWorkDetailPage &&
                ourWorkDetailPage.map((item, index) => {
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

export default OurWorkSection;
