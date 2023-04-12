import React from "react";
import Slider from "react-slick";

import Container from "../Container";
import RRichtext from "../RichtextRenderer";

const ConnectSection = ({ title, subtitle, logos }) => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 20000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    variableWidth: true,
    draggable: false,
    swipe: false,
    touchMove: false,
  };

  return (
    <Container>
      <div className="pt-[73px] pb-[89px] md:pb-[114px]">
        <div className="text-center lg:max-w-[756px] mx-auto">
          <RRichtext
            data={title}
            config={{ h2: "text-[32px] md:text-[38px] leading-[38px] md:leading-[46px] [&_span]:inline-block" }}
          />
        </div>
        <p className="mt-5 md:mt-7 text-center">{subtitle}</p>
        <div className="relative mt-[72px] md:mt-24 -mx-6 md:-mx-16">
          <div className="hidden md:block absolute left-0  h-12 w-[405px] bg-gradient-to-r from-white to-transparent z-10" />
          <div className="hidden md:block absolute right-0 h-12 w-[405px] bg-gradient-to-l from-white to-transparent z-10" />
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.file.url}
                alt={logo.title}
                className="h-[31px] md:h-12 px-[30px] md:px-[45px] object-contain"
              />
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default ConnectSection;
