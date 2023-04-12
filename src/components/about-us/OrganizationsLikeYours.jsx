import React from "react";

import Container from "../Container";
import RRichtext from "../RichtextRenderer";

import icon1 from "../../assets/about-us/block-chain-tech.svg";
import icon2 from "../../assets/about-us/instagram.svg";
import icon3 from "../../assets/about-us/hierarchy.svg";
import icon4 from "../../assets/about-us/pie-chart.svg";
import icon5 from "../../assets/about-us/mind-map.svg";

const Feature = ({ text, svgImage, className }) => {
  return (
    <div className={`flex mt-[30px] lg:mt-[74px] max-w-[400px] ${className}`}>
      <img src={svgImage} alt="Feature Icon" height="72" width="72" className="mr-[24px] lg:mr-[40px]" />
      <div className="md:w-[256px] flex items-center font-poppins text-[18px] leading-[120%] font-medium">{text}</div>
    </div>
  );
};

const OrganizationsLikeYours = ({ title, text, feature1, feature2, feature3, feature4, feature5 }) => {
  return (
    <Container>
      <div className="pt-10 md:pt-[70px] pb-[100px] lg:pb-[98px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:items-center gap-y-6 lg:gap-x-16">
          <div className="">
            <RRichtext data={title} config={{ h1: "whitespace-pre-wrap" }} />
          </div>
          <RRichtext data={text} />
        </div>

        <div className="mt-6">
          <div className="md:hidden flex flex-col items-center">
            <Feature text={feature1} svgImage={icon1} />
            <Feature text={feature2} svgImage={icon2} />
            <Feature text={feature3} svgImage={icon3} />
            <Feature text={feature4} svgImage={icon4} />
            <Feature text={feature5} svgImage={icon5} />
          </div>

          <div className="hidden md:block xl:hidden">
            <div className="flex justify-around">
              <Feature text={feature1} svgImage={icon1} className="mr-8" />
              <Feature text={feature2} svgImage={icon2} />
            </div>
            <div className="flex justify-around">
              <Feature text={feature3} svgImage={icon3} className="mr-8" />
              <Feature text={feature4} svgImage={icon4} />
            </div>
            <div className="flex justify-center">
              <Feature text={feature5} svgImage={icon5} />
            </div>
          </div>

          <div className="hidden xl:block">
            <div className="flex justify-between">
              <Feature text={feature1} svgImage={icon1} />
              <Feature text={feature2} svgImage={icon2} />
              <Feature text={feature3} svgImage={icon3} />
            </div>
            <div className="flex justify-center">
              <Feature text={feature4} svgImage={icon4} className="mr-[130px]" />
              <Feature text={feature5} svgImage={icon5} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OrganizationsLikeYours;
