import React from "react";

import Container from "../Container";
import RRichtext from "../RichtextRenderer";

import circles3 from "../../assets/background/circles3.svg";
import icon1 from "../../assets/crm-implementation/hierarchy.svg";
import icon2 from "../../assets/crm-implementation/segmentation.svg";
import icon3 from "../../assets/crm-implementation/schedule.svg";
import icon4 from "../../assets/crm-implementation/web-analytics.svg";
import icon5 from "../../assets/crm-implementation/contact-details.svg";
import icon6 from "../../assets/crm-implementation/privacy-policy.svg";

const IncludedItem = ({ text, svgImage }) => {
  return (
    <div className="flex items-center w-full max-w-[500px] mx-auto pl-4 xl:pl-[27px] pr-[34px] xl:pr-[37px] py-4 xl:py-6 bg-white rounded-[10px] relative">
      <img src={svgImage} alt="Included Item Icon" height="80" width="80" />
      <div className="ml-4 xl:ml-[38px] text-[16px] leading-[21px]">{text}</div>
      <div className="absolute h-[58px] left-6 -right-6 bottom-2 bg-blue-secondary opacity-50 blur-[60px] -z-10"></div>
    </div>
  );
};

const IncludedSection = ({ title, item1Text, item2Text, item3Text, item4Text, item5Text, item6Text }) => {
  return (
    <Container outerContainerClassName="bg-light-blue" innerContainerClassName="relative">
      <img src={circles3} alt="Background circles 1" className="absolute -top-[194px] -left-[200px] max-w-none -z-10" />
      <div className="py-20 lg:pt-[72px] pb-[128px]">
        <RRichtext data={title} config={{ h2: "text-[32px] md:text-[38px] leading-[120%] text-center" }} />
        <div className="grid justify-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-[56px] gap-y-6 lg:gap-y-12 mt-20 lg:mt-[72px]">
          <IncludedItem text={item1Text} svgImage={icon1} />
          <IncludedItem text={item2Text} svgImage={icon2} />
          <IncludedItem text={item3Text} svgImage={icon3} />
          <IncludedItem text={item4Text} svgImage={icon4} />
          <IncludedItem text={item5Text} svgImage={icon5} />
          <IncludedItem text={item6Text} svgImage={icon6} />
        </div>
      </div>
    </Container>
  );
};

export default IncludedSection;
