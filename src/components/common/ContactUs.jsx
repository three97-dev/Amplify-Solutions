import React from "react";

import Container from "../Container";
import RRichtext from "../RichtextRenderer";
import Button from "../basic/Button";

import circles5 from "../../assets/background/circles5.svg";

const ContactUs = ({ title, text, buttonLabel, buttonLink }) => {
  return (
    <Container outerContainerClassName="bg-light-blue" innerContainerClassName="relative">
      <img
        src={circles5}
        alt="Background circles"
        className="hidden md:block absolute w-[966px] -bottom-[642px] -left-[368px] max-w-none -z-10"
      />
      <img
        src={circles5}
        alt="Background circles"
        className="hidden lg:block absolute w-[966px] -top-[425px] -right-[445px] max-w-none -z-10"
      />
      <div className="pt-16 pb-[57px] md:py-[49px] text-center">
        <div className="hidden md:block">
          <RRichtext data={title} />
        </div>
        <div className="md:hidden">
          <RRichtext data={title} config={{ h1: "[&_span]:text-inherit" }} />
        </div>
        <div className="max-w-[482px] mx-auto mt-5 md:mt-2.5 text-[16px] leading-[21px]">{text}</div>
        <Button link={buttonLink} className="mt-[27px] md:mt-5 mx-auto" px="px-[26px] md:px-[73px]">
          {buttonLabel}
        </Button>
      </div>
    </Container>
  );
};

export default ContactUs;
