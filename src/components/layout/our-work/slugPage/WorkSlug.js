import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import "./workSlug.css";
import { useSelector } from "react-redux";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function WorkSlugPage() {
  const [data, setData] = useState([]);

  const location = useLocation();
  const { slug } = useParams();

  const pageData = useSelector((state) => {
    return state.ourGlobalWork.ourGlobalWork;
  });

  const getPageData = async () => {
    const d = await pageData;
    const filterData = d.filter((data) => slug === data.fields.tag);
    setData(filterData);
  };

  useEffect(() => {
    getPageData();

    window.scrollTo(0, 0);

    // eslint-disable-next-line
  }, []);

  const { clientInfo, tagSlug } = location.state.item;

  return (
    <>
      <section className="slugPageContainer">
        <div className="wrapper slugWrapper">
          <div className="slugDetails">
            <div className="slugItem">
              <h2>{slug}</h2>
              <p>{clientInfo.fields.clientContent}</p>
            </div>
            <div className="slugItem">
              <img src="./bg-about.jpeg" alt="bg" />
            </div>
          </div>
          <div className="slugRelated">
            <h2>Related Work</h2>
          </div>
          <div className="relatedBlog">
            {data &&
              data.map((item, index) => {
                const { title, summary, tag, featuredImage } = item.fields;

                return (
                  <div className="blogItem" key={index}>
                    <Link
                      to={`/our-works/content-hub/${tag}`}
                      key={index}
                      state={{
                        tagSlug: tagSlug,
                        item: item.fields,
                        clientInfo: clientInfo,
                      }}
                    >
                      <div className="blogImg">
                        <img src={featuredImage.fields.file.url} alt="blog" />
                      </div>
                      <div className="blogTitle">
                        <h5>{title}</h5>
                        {documentToReactComponents(summary)}
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkSlugPage;
