import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import RRichtext from "../RichtextRenderer";
import Container from "../Container";
import Button from "../basic/Button";

import quoteTitleIcon from "../../assets/home-page/quote-title-icon.svg";
import circles5 from "../../assets/background/circles5.svg";

const MicrosoftSection = ({ image, logo, info, title, subTitle, buttonLabel, buttonLink }) => {
  return (
    <Container outerContainerClassName="bg-light-blue" innerContainerClassName="relative">
      <img
        src={circles5}
        alt="Background circles"
        className="absolute w-[762px] md:w-[800px] lg:w-[966px] -top-[246px] md:-top-[118px] -left-[172px] md:-left-[357px] max-w-none"
      />
      <div className="grid items-center grid-cols-1 lg:grid-cols-[528px_auto] gap-x-6 lg:gap-x-14 md:min-h-[576px]">
        <div className="relative max-w-[528px] lg:w-full sm:h-[500px] pl-5 sm:pl-[49px] pr-8 sm:pr-[100px] mb-16 md:mb-0 lg:-ml-14 mt-[50px] lg:mt-0 lg:-mt-8">
          <GatsbyImage
            image={image?.gatsbyImageData}
            alt={image?.title}
            layout="fullWidth"
            objectFit="contain"
            quality={100}
          />
          <div className="absolute bottom-[21%] sm:bottom-[122px] right-0 p-3 sm:py-[18px] px-[18px] sm:px-[23px] rounded-[10px] bg-white">
            <GatsbyImage
              image={logo?.gatsbyImageData}
              alt={logo?.title}
              layout="fullWidth"
              objectFit="contain"
              quality={100}
              className="w-[114px]"
            />
          </div>
          <div className="absolute top-[82%] sm:top-[388px] max-w-[75%] sm:max-w-[370px] right-0 p-3 sm:p-[18px] rounded-[10px] bg-white">
            <RRichtext data={info} config={{ bold: "font-semibold !text-dark-blue" }} />
          </div>
          <div className="absolute w-[60%] h-[50%] bg-[#678EC9] opacity-50 blur-[60px] bottom-[2%] right-[8%] -z-10" />
        </div>
        <div className="pb-[64px] lg:pb-[97px] pt-[38px] md:pt-[98px]">
          <div>
            <div className="relative lg:max-w-[650px]">
              <img
                src={quoteTitleIcon}
                alt="quote-title-icon"
                className="absolute -top-[40px] -left-[10px] lg:w-[204px] lg:h-[160px] lg:-left-[30px] lg:-top-[45px]"
              />
              <RRichtext data={title} config={{ h2: "text-[32px] md:text-[38px] leading-[120%]" }} />
            </div>
            <div className="mt-7 md:mt-[22px] lg:max-w-[680px]">
              <RRichtext
                data={subTitle}
                config={{
                  p: "font-sans italic text-[22px] md:text-[22px] leading-[120%] font-normal whitespace-pre-wrap text-dark-blue",
                }}
              />
            </div>
            <div className="md:flex md:justify-start mt-7 md:mt-[36px]">
              <Button link={buttonLink} variant="outline-grey" px="px-4 md:px-[46px]">
                {buttonLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MicrosoftSection;
