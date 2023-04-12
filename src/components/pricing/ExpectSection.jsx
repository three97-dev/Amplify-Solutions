import React from "react";

import Container from "../Container";
import RRichtext from "../RichtextRenderer";

import checkIcon from "../../assets/about-us/check.svg";

const Item = ({ text, className, title }) => {
  return (
    <div className={`flex flex-col mt-[44px] lg:flex-row lg:mt-0 first:mt-0 lg:items-center ${className}`}>
      <img src={checkIcon} alt="Check Icon" height="72" width="72" className="lg:mr-[69px]" />
      <div className="pt-[13px] pb-[32px] lg:py-[20px]">
        <h3 className="leading-[120%]">{title}</h3>
        <div className="flex font-poppins text-[18px] leading-[120%] font-normal mt-[13px] lg:text-start lg:mt-[13px] lg:text-[16px] lg:leading-[130%]">
          {text}
        </div>
      </div>
    </div>
  );
};

const ExpectSection = ({ title, text, item1Title, item2Title, item3Title, item1Text, item2Text, item3Text }) => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-[auto_530px] xl:grid-cols-[auto_648px] items-center pt-[91px] pb-[73px] lg:pt-[95px] lg:pb-[60px]">
        <div className="lg:max-w-[512px] -mr-1 lg:mr-12">
          <RRichtext data={title} config={{ h2: "text-[28px] md:text-[38px] leading-[120%]" }} />
          <p className="mt-[11px] lg:mt-[22px] text-[16px] leading-[130%] whitespace-break-spaces">{text}</p>
        </div>
        <div className="flex flex-col justify-between lg:w-[530px] xl:w-[648px] max-w-[648px] max-w-none mx-auto mt-[66px] lg:mt-0">
          <Item text={item1Text} title={item1Title} className={"border-b border-blue-secondary"} />
          <Item text={item2Text} title={item2Title} className={"border-b border-blue-secondary"} />
          <Item text={item3Text} title={item3Title} />
        </div>
      </div>
    </Container>
  );
};

export default ExpectSection;
