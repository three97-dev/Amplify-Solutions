import React from "react";
import classNames from "classnames";

import Container from "./Container";
import RRenderer from "./RichtextRenderer";
import Button from "./basic/Button";

import circles4 from "../assets/background/circles4.svg";

const HeroSection = ({ title, subtitle, buttons, titleClassNames, subtitleClassName }) => {
  return (
    <Container outerContainerClassName="bg-dark-blue" innerContainerClassName="relative">
      <img src={circles4} alt="Background circles 1" className="hidden md:block absolute top-8 -right-[116px] -z-10" />
      <img
        src={circles4}
        alt="Background circles 2"
        className="hidden md:block absolute w-[362px] h-[362px] top-[176px] -left-[76px] -z-10"
      />
      <div className="flex flex-col text-center md:min-h-[440px] pt-[27px] md:pt-[129px] pb-16">
        <div className="flex flex-col justify-center md:order-first text-white">
          <RRenderer
            data={title}
            config={{
              h1: classNames(
                "!text-[32px] md:!text-[52px] !leading-[38px] md:!leading-[62px] mx-auto",
                titleClassNames
              ),
            }}
          />
          <p className={classNames("mt-5 md:mt-3.5 mx-auto", subtitleClassName)}>{subtitle}</p>
          <div className="flex flex-col md:flex-row justify-center mt-6 md:mt-9">
            {buttons?.map((button, index) => (
              <Button
                key={index}
                link={button.url}
                className="md:ml-[22px] first:ml-0 mt-6 first:mt-0 md:mt-0"
                px="px-[26px] md:px-[52px]"
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
