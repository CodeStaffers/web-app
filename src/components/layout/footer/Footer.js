import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { RiArrowRightFill } from "react-icons/ri";
import "./footer.css";
import FooterCard from "./FooterCard";

function Footer({ page }) {
  const {
    leftFooterCardTitle,
    leftCardImage,
    visualDesignLogo,
    visualContent,
    visualUrl,
    uiDesignLogo,
    uiSummary,
    uiUrl,
    digitalMarketingLogo,
    digitalMarketingSummary,
    digitalUrl,
    developmentLogo,
    developmentSummary,
    developmentUrl,
  } = page.sectionFooter ? page.sectionFooter.fields : "";

  return (
    <>
      <div
        className="footer"
        style={{ backgroundColor: page.footer && page.footer.bgColor }}
      >
        <div className="left__footer">
          <div className="footer__left__card">
            <div className="footer__left__card__title">
              {documentToReactComponents(leftFooterCardTitle)}
            </div>
            <div className="left__footer__image">
              <img
                src={leftCardImage && leftCardImage.fields.file.url}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="right__footer">
          <div className="right__footerCard">
            <FooterCard
              logo={visualDesignLogo}
              content={visualContent}
              url={visualUrl}
              className="visual_design"
              arrowClass="arrow_visual"
              arrow={<RiArrowRightFill size={25} />}
            />
            <FooterCard
              logo={uiDesignLogo}
              content={uiSummary}
              url={uiUrl}
              arrow={<BsArrowUpRightCircleFill size={25} />}
            />
            <FooterCard
              logo={digitalMarketingLogo}
              content={digitalMarketingSummary}
              url={digitalUrl}
              arrow={<BsArrowUpRightCircleFill size={25} />}
            />
            <FooterCard
              logo={developmentLogo}
              content={developmentSummary}
              url={developmentUrl}
              arrow={<BsArrowUpRightCircleFill size={25} />}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
