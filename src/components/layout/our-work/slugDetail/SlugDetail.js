import React, { useEffect } from "react";
import "./slugDetail.css";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "react-router-dom";
function SlugDetail() {
  const location = useLocation();

  const { item, tagSlug, clientInfo } =
    location.state === null
      ? JSON.parse(localStorage.getItem("slug"))
      : location.state;

  useEffect(() => {
    window.scrollTo(0, 0);

    localStorage.setItem(
      "slug",
      JSON.stringify({
        item: item,
        tagSlug: tagSlug,
        clientInfo: clientInfo,
      })
    );
    // eslint-disable-next-line
  }, []);

  const it = { tagSlug: tagSlug, clientInfo: clientInfo };

  return (
    <>
      <section className="slugDetailContainer">
        <div className="wrapper slugDetailWrapper">
          <div className="slugDetailTitle">
            <h1>{item && item.title}</h1>
            <ReactMarkdown>{item && item.shortText}</ReactMarkdown>
            <div className="Detailtags">
              {tagSlug &&
                tagSlug.map((tag, index) => {
                  const { slug, title } = tag ? tag.fields : "";
                  return (
                    <Link
                      to={`/${slug}`}
                      key={index}
                      state={{
                        item: it,
                      }}
                    >
                      <p>{title}</p>
                    </Link>
                  );
                })}
            </div>
          </div>

          <div className="slugDetailMedia">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5U7V1Xf6MxvKTn5VISVX7oPk0iDX0XPHRoQ&usqp=CAU"
              alt="media"
            />
          </div>

          <div className="slugDetailSummary">
            {documentToReactComponents(item && item.description)}
          </div>
        </div>
      </section>
    </>
  );
}

export default SlugDetail;
