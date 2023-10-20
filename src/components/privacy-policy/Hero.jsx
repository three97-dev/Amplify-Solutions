import React from "react";

import Container from "../Container";
import RRenderer from "../RichtextRenderer";

import circles4 from "../../assets/background/circles4.svg";

const HeroSection = ({ title }) => {
  return (
    <Container
      outerContainerClassName="bg-[linear-gradient(to_bottom,_#232049_0%,_#232049_76%,__transparent_76%,__transparent_100%)]"
      innerContainerClassName="relative"
    >
      <img src={circles4} alt="Background circles 1" className="hidden md:block absolute top-16 -right-[116px] -z-10" />
      <img src={circles4} alt="Background circles 2" className="hidden md:block absolute top-0 -right-[340px] -z-10" />
      <img
        src={circles4}
        alt="Background circles 3"
        className="hidden md:block absolute w-[362px] h-[362px] md:top-[176px] -left-[76px] -z-10"
      />
      <div className="flex flex-col text-center pt-[27px] lg:pt-[129px] pb-[129px] md:pb-[200px]">
        <div className="max-w-[743px] text-white mx-auto">
          <RRenderer
            data={title}
            config={{
              h1: "!text-[32px] md:!text-[52px] !leading-[38px] md:!leading-[62px] whitespace-pre-wrap",
            }}
          />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
