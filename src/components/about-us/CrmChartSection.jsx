import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import Container from "../Container";
import RRichtext from "../RichtextRenderer";
import Button from "../basic/Button";

import circles5 from "../../assets/background/circles5.svg";

const CrmChartSection = ({ title, text, buttonLabel, buttonLink, image }) => {
  return (
    <Container outerContainerClassName="bg-light-blue" innerContainerClassName="relative">
      <img
        src={circles5}
        alt="Background circles"
        className="absolute w-[966px] -top-[446px] md:-top-[224px] -left-[321px] md:-left-[230px] max-w-none -z-10"
      />
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(400px,655px)_minmax(200px,568px)] items-center gap-x-[88px] gap-y-[120px] sm:gap-y-[88px] pt-[88px] pb-[105px] lg:pt-[90px] lg:pb-[94px]">
        <div className="relative">
          <GatsbyImage
            image={image?.gatsbyImageData}
            alt={image?.title}
            layout="fullWidth"
            objectFit="cover"
            quality={100}
            className="-ml-[11px] -mr-2 sm:mx-0 md:max-w-[655px]"
          />
          <div className="absolute w-[80%] md:max-w-[600px] h-[80%] bottom-[21px] left-5 bg-blue-secondary blur-[60px] opacity-50 -z-10"></div>
        </div>
        <div>
          <RRichtext data={title} config={{ h2: "text-[32px] md:text-[38px] leading-[120%] [&_span]:block" }} />
          <RRichtext data={text} className="mt-[40px] lg:mt-[27px]" />
          <div className="mt-9 lg:mt-7">
            <Button link={buttonLink} variant="outline-grey" px="px-[54px]">
              {buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CrmChartSection;
