import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import Container from "../Container";
import RRenderer from "../RichtextRenderer";
import Button from "../basic/Button";

import circles1 from "../../assets/background/circles1.svg";
import circles2 from "../../assets/background/circles2.svg";

const HeroSection = ({ title, subtitle, buttonLabel, buttonLink, image }) => {
  return (
    <Container outerContainerClassName="bg-dark-blue" innerContainerClassName="relative">
      <img
        src={circles1}
        alt="Background circles 1"
        className="hidden lg:block absolute -top-[470px] left-40 mix-blend-overlay -z-10"
      />
      <img
        src={circles1}
        alt="Background circles 2"
        className="hidden lg:block absolute w-[337px] h-[337px] -bottom-28 -left-48 mix-blend-overlay -z-10"
      />
      <img
        src={circles1}
        alt="Background circles 3"
        className="hidden lg:block absolute w-[337px] h-[337px] top-6 right-[490px] mix-blend-overlay -z-10"
      />
      <img
        src={circles2}
        alt="Background circles 4"
        className="absolute w-[299px] h-[299px] lg:w-[554px] lg:h-[554px] top-[6px] -right-12 lg:top-[70px] lg:right-9 -z-10"
      />
      <div className="grid gap-16 grid-cols-1 lg:grid-cols-2 min-h-[696px] pt-[55px] lg:pt-[125px] pb-16">
        <GatsbyImage
          image={image?.gatsbyImageData}
          alt={image?.title}
          layout="fullWidth"
          objectFit="contain"
          quality={100}
          className="-mx-[9px] lg:mx-0"
        />
        <div className="flex flex-col justify-center lg:order-first text-white">
          <RRenderer data={title} />
          <p className="mt-3.5 lg:mt-4">{subtitle}</p>
          <Button link={buttonLink} className="mt-[22px] lg:mt-8 lg:self-start" px="px-[26px] lg:px-12">
            {buttonLabel}
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
