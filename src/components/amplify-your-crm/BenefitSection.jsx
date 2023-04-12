import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import Container from "../Container";

import circles5 from "../../assets/background/circles5.svg";

const BenefitSection = ({ title, text, highlight, chartTitle, image }) => {
  return (
    <Container outerContainerClassName="bg-light-blue" innerContainerClassName="relative">
      <img
        src={circles5}
        alt="Background circles 1"
        className="absolute max-w-none w-[814px] -bottom-[340px] lg:-bottom-[160px] -right-[405px] lg:-right-[150px] -z-10"
      />
      <div className="flex flex-col lg:flex-row justify-between lg:items-center pt-16 lg:pb-16">
        <div className="lg:mr-8">
          <h2 className="max-w-[477px]">{title}</h2>
          <div className="text-[16px] leading-[21px] max-w-[464px] mt-3">{text}</div>
          <h3 className="mt-4">{chartTitle}</h3>
          <div className="text-[38px] leading-[46px] font-medium font-poppins text-red-primary mt-4 lg:mt-6">
            {highlight}
          </div>
        </div>
        <div className="shrink-0 lg:h-[516px] lg:w-[591px] mt-8 lg:mt-0">
          <GatsbyImage
            image={image?.gatsbyImageData}
            alt={image?.title}
            layout="fullWidth"
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>
    </Container>
  );
};

export default BenefitSection;
