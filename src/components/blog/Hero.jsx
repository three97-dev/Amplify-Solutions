import React from "react";
import classNames from "classnames";

import Container from "../Container";

import circles4 from "../../assets/background/circles4.svg";

const HeroSection = ({ title, subtitle, titleClassName, subtitleClassName }) => {
  return (
    <Container outerContainerClassName="bg-dark-blue" innerContainerClassName="relative">
      <img src={circles4} alt="Background circles 1" className="hidden md:block absolute top-8 -right-[116px] -z-10" />
      <img
        src={circles4}
        alt="Background circles 2"
        className="hidden md:block absolute w-[362px] h-[362px] top-[176px] -left-[76px] -z-10"
      />
      <div className="flex flex-col text-center pt-[27px] lg:pt-[129px] pb-[56px] md:pb-[44px] lg:min-h-[368px]">
        <div className="flex flex-col justify-center md:order-first text-white">
          <h1
            className={classNames(
              "!text-[32px] md:!text-[52px] !leading-[38px] md:!leading-[62px] mx-auto",
              titleClassName
            )}
          >
            {title}
          </h1>
          <p className={classNames("mt-5 md:mt-3.5 mx-auto", subtitleClassName)}>{subtitle}</p>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
