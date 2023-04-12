import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Container from "../Container";
import RRenderer from "../RichtextRenderer";
import Button from "../basic/Button";

import microsoftPartnerBlur1 from "../../assets/home-page/microsoft-partner-blur-1.svg";
import microsoftPartnerBlur2 from "../../assets/home-page/microsoft-partner-blur-2.svg";
import microsoftPartnerBlur3 from "../../assets/home-page/microsoft-partner-blur-3.svg";

const MicrosoftSection = ({ title, subtitle, buttonLink, buttonLabel }) => {
  return (
    <Container outerContainerClassName="bg-dark-blue">
      <div className="grid gap-16 grid-cols-1 md:grid-cols-2 pt-[84px] pb-[83px]">
        <div className="relative self-center">
          <StaticImage
            src="../../images/homepage/microsoft-partner.png"
            placeholder="blur"
            alt="Hero Image"
            layout="fullWidth"
            objectFit="contain"
            quality={100}
            className="mt-auto z-10"
          />
          <img
            src={microsoftPartnerBlur1}
            alt="microsoft-partner-blur-1"
            className="absolute w-[100px] h-[105px] -bottom-[30px] left-[9px] lg:w-[178px] lg:h-[188px] lg:-bottom-[65px]"
          />
          <img
            src={microsoftPartnerBlur2}
            alt="microsoft-partner-blur-2"
            className="absolute w-[250px] h-[190px] top-0 right-0  lg:w-[424px] lg:h-[296px] lg:top-[80px] lg:right-[40px]"
          />
          <img
            src={microsoftPartnerBlur3}
            alt="microsoft-partner-blur-3"
            className="absolute w-[150px] h-[80px] bottom-[10px] right-[20px] lg:w-[201px] lg:h-[101px] lg:bottom-0 lg:right-[100px]"
          />
        </div>
        <div className="flex flex-col justify-center md:order-first text-white">
          <RRenderer data={title} />
          <p className="mt-3.5 md:mt-4">{subtitle}</p>
          <Button link={buttonLink} className="mt-[22px] md:mt-8 md:self-start" px="px-[26px] md:px-12">
            {buttonLabel}
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default MicrosoftSection;
