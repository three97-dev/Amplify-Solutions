import React from "react";

import Container from "../Container";
import RRichtext from "../RichtextRenderer";
import Button from "../basic/Button";

import LongArrow from "../../assets/amplify-your-crm/long-arrow.svg";

const Card = ({ title, highlight, text, children }) => {
  return (
    <div className="relative">
      <div className="flex flex-col items-start bg-light-blue h-full px-[18px] sm:px-10 xl:px-[74px] pt-[49px] pb-[41px] overflow-hidden rounded-[15px] text-left">
        <div className="text-[24px] leading-[29px] font-medium font-poppins">{title}</div>
        <div className="text-[38px] leading-[46px] font-medium font-poppins text-red-primary mt-[18px] -mr-2 md:mr-0">
          {highlight}
        </div>
        <div className="text-[16px] leading-[21px] mt-2 mr-[13px] md:-mr-2">{text}</div>
        <div className="mt-auto w-full">{children}</div>
        <div className="absolute w-[80%] h-[40%] -bottom-[3px] left-1/2 -translate-x-1/2 bg-blue-secondary blur-[60px] opacity-50 -z-10"></div>
      </div>
    </div>
  );
};

const OvercomeObstaclesSection = ({
  title,
  text,
  item1Title,
  item1Highlight,
  item1Text,
  item2Title,
  item2Highlight,
  item2Text,
  item2ButtonLabel,
  item2ButtonLink,
}) => {
  return (
    <Container>
      <div className="flex flex-col items-center pt-[72px] pb-[89px] md:pt-[96px] md:pb-[137px] text-center">
        <RRichtext data={title} config={{ h2: "[&_span]:block" }} className="max-w-[820px]" />
        <div className="max-w-[860px] mt-5 md:mt-[25px] text-[16px] leading-[21px]">{text}</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-16 xl:gap-x-[88px] max-w-[1048px] mt-[44px] md:mt-[77px]">
          <Card title={item1Title} highlight={item1Highlight} text={item1Text}>
            <div className="max-w-[321px]">
              <img
                src={LongArrow}
                alt="Long Arrow Right"
                className="py-[9px] mt-1 md:mt-6 pl-1 pr-[11px] md:px-0 object-none object-right h-[46px]"
              />
            </div>
          </Card>
          <Card title={item2Title} highlight={item2Highlight} text={item2Text}>
            <div className="-mx-1.5 md:mx-0">
              {/* <Button variant="outline-grey" link={item2ButtonLink} className="mt-6" px="px-[27px] xl:px-[49px]">
                {item2ButtonLabel}
              </Button> */}
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default OvercomeObstaclesSection;
