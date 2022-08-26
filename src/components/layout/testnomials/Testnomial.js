import React from "react";
import "./testnomial.css";
// import { FcPrevious, FcNext } from "react-icons/fc";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Testnomial() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const data = [
    {
      img: "https://media.istockphoto.com/photos/3d-rendering-four-golden-stars-picture-id1033034258?k=20&m=1033034258&s=612x612&w=0&h=1iBEOo2TBC6tJL90IULRUued9b8nERKzDD6V9kG_rdo=",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elit make over man perfect text fine ok",
    },
    {
      img: "https://media.istockphoto.com/photos/3d-rendering-four-golden-stars-picture-id1033034258?k=20&m=1033034258&s=612x612&w=0&h=1iBEOo2TBC6tJL90IULRUued9b8nERKzDD6V9kG_rdo=",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elit make over man perfect text fine ok",
    },
    {
      img: "https://media.istockphoto.com/photos/3d-rendering-four-golden-stars-picture-id1033034258?k=20&m=1033034258&s=612x612&w=0&h=1iBEOo2TBC6tJL90IULRUued9b8nERKzDD6V9kG_rdo=",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elit make over man perfect text fine ok",
    },
  ];

  return (
    <div className="testnomialWrapper">
      <div className="testnomialCard">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {data &&
            data.map((item, index) => {
              return (
                <div key={index} className="testnomialCardItems">
                  <div className="star_image">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="testnomialSummary">{item.text}</div>

                  <div className="testnomialAuthor">
                    <img src={item.img} alt="" />
                  </div>
                </div>
              );
            })}
        </Carousel>
      </div>
      {/* <div className="testnomialBtn">
        <div className="prevTest">
          <FcPrevious size={20} />
        </div>
        <div className="nextTest">
          <FcNext size={20} />
        </div>
      </div> */}
    </div>
  );
}

export default Testnomial;
