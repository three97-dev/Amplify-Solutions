import React from "react";

import Container from "../Container";
import RRichtext from "../RichtextRenderer";
import Button from "../basic/Button";

import checkIcon from "../../assets/about-us/check.svg";

const Item = ({ text, className }) => {
  return (
    <div className={`flex flex-col lg:flex-row items-center mt-[44px] lg:mt-0 first:mt-0 ${className}`}>
      <img src={checkIcon} alt="Check Icon" height="72" width="72" className="lg:mr-[40px]" />
      <div className="flex items-center font-poppins text-[18px] leading-[120%] font-medium text-center lg:text-start mt-[35px] lg:mt-0">
        {text}
      </div>
    </div>
  );
};

const WeProvide = ({ title, text, buttonLabel, buttonLink, item1, item2, item3 }) => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-[auto_464px] items-center pt-[62px] pb-[85px] lg:py-[95px]">
        <div className="lg:max-w-[664px] -mr-1 lg:mr-12">
          <RRichtext data={title} config={{ h2: "text-[32px] md:text-[38px] leading-[120%]" }} />
          <p className="mt-6">{text}</p>
          <div className="mt-8">
            <Button link={buttonLink} px="px-[27px] md:px-10">
              {buttonLabel}
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-between lg:w-[464px] lg:h-[328px] max-w-[464px] max-w-none mx-auto mt-[66px] lg:mt-0">
          <Item text={item1} />
          <Item text={item2} />
          <Item text={item3} />
        </div>
      </div>
    </Container>
  );
};

export default WeProvide;
