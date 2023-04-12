import React from "react";
import classNames from "classnames";

import Container from "../Container";
import Button from "../basic/Button";

import circles4 from "../../assets/background/circles4.svg";

const HeroSection = ({ title, titleClassNames, buttonLabel }) => {
  return (
    <Container outerContainerClassName="bg-dark-blue" innerContainerClassName="relative">
      <img src={circles4} alt="Background circles 1" className="hidden md:block absolute top-8 -right-[116px] -z-10" />
      <img
        src={circles4}
        alt="Background circles 2"
        className="hidden md:block absolute w-[362px] h-[362px] top-[176px] -left-[76px] -z-10"
      />
      <div className="flex flex-col text-center pt-[27px] lg:pt-[129px] pb-[60px] md:pb-[44px]">
        <div className="flex flex-col justify-center md:order-first text-white">
          <h1
            className={classNames(
              "!text-[32px] md:!text-[52px] !leading-[38px] md:!leading-[62px] mx-auto",
              titleClassNames
            )}
          >
            {title}
          </h1>
          <div className="md:mt-7 sm:mx-auto">
            <Button className="md:ml-[22px] first:ml-0 mt-6 md:mt-0" px="px-[26px] sm:px-[68px]">
              {buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
