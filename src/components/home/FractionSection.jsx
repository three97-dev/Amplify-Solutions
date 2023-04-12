import React from "react";

import RRichtext from "../RichtextRenderer";
import Container from "../Container";
import Button from "../basic/Button";

import circles3 from "../../assets/background/circles3.svg";
import fractionFirst from "../../assets/home-page/fraction-first.svg";
import fractionSecond from "../../assets/home-page/fraction-second.svg";
import fractionThird from "../../assets/home-page/fraction-third.svg";

const FractionSection = ({ title, fractionList, buttonLabel, buttonLink }) => {
  const icons = {
    first: fractionFirst,
    second: fractionSecond,
    third: fractionThird,
  };

  return (
    <Container outerContainerClassName="bg-light-blue" innerContainerClassName="relative">
      <img
        src={circles3}
        alt="Background circles 3"
        className="hidden md:block absolute -top-[190px] -left-[190px] z-10"
      />
      <img
        src={circles3}
        alt="Background circles 3"
        className="hidden md:block absolute -bottom-[190px] -right-[190px]  -z-10"
      />
      <div className="py-[69px]">
        <div className="text-center lg:max-w-[756px] mx-auto">
          <RRichtext data={title} />
        </div>
        <div className="relative py-[58px] flex flex-col gap-y-6 w-full lg:flex-row lg:gap-y-0 lg:gap-x-[11px] lg:py-[67px]">
          {fractionList.map((fraction, index) => (
            <div key={index} className="relative">
              <div className="relative bg-white py-22 px-34 flex flex-col rounded-[10px] px-[34px] py-[21px] z-10 md:flex-row lg:px-[19px] lg:items-center lg:h-[180px] xl:h-[128px] lg:max-w-[430px]">
                <img src={icons[fraction.img]} alt={fraction.img} className="w-[80px] h-[80px]" />
                <p className="pt-[17px] lg:pt-0 md:pl-[21px]">{fraction.title}</p>
              </div>
              <div className="absolute w-[calc(100%_-_63px)] h-[201px] bg-[#678EC9] opacity-50 blur-[31.291px] z-0 top-[21px] left-[40px] mr-[63px] md:h-[101px] lg:hidden" />
            </div>
          ))}
          <div className="hidden absolute w-[calc(100%_-_125px)] h-[80px] bg-[#678EC9] opacity-50 blur-[60px] z-0 top-[113px] left-[40px] mr-[63px] lg:block" />
        </div>
        <div className="md:flex md:justify-center">
          <Button variant="outline-grey" link={buttonLink}>
            {buttonLabel}
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default FractionSection;
