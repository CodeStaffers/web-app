import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "./serviceHero.css";
// import { useSelector } from "react-redux";

function ServiceHeroHero({ summary, image, content }) {
  // const [data, setData] = useState([]);
  // const pageData = useSelector((state) => {
  //   return state.serviceDetail.serviceDetail;
  // });

  // const getPageData = async () => {
  //   const d = await pageData;
  //   setData(d);
  // };

  // useEffect(() => {
  //   getPageData();
  //   // eslint-disable-next-line
  // }, []);

  // const { summary, image, content } =
  //   props.data.lenght !== 0 ? props.data[0].fields : "";
  // console.log(props.data[0].fields);
  // const { summary, image, content } = data;

  return (
    <>
      <section className="sHeroContainer">
        <div className="wrapper">
          <div className="sHeroCard">
            <div className="sHeroTitle">
              {documentToReactComponents(summary)}
            </div>
          </div>

          <div className="sHeroItem">
            <div className="sHeroImage">
              <img src={image && image.fields.file.url} alt="img" />
            </div>
            <div className="sHeroItemList">
              <div className="sListItem">
                {documentToReactComponents(content)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceHeroHero;
