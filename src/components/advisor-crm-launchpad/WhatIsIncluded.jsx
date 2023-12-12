import React from "react";

import Container from "../Container";
import RRichtext from "../RichtextRenderer";

const Item = ({ text, svgImage }) => {
  if (!text || !svgImage) return null;
  return (
    <div className="flex flex-col items-center lg:items-start mt-4 max-w-[378px] flex-none">
      <img src={svgImage.file.url} alt="Icon" height="100" width="100" />
      <div className="my-[24px] text-[28px] leading-[120%] font-medium font-poppins text-center lg:text-start">
        {text}
      </div>
    </div>
  );
};

const WhatIsIncluded = ({
  title,
  item1icon,
  item1text,
  item2icon,
  item2text,
  item3icon,
  item3text,
  item4icon,
  item4text,
  item5icon,
  item5text,
  item6icon,
  item6text,
  text,
}) => {
  return (
    <Container outerContainerClassName="bg-[#232049]">
      <div className="pt-[85px] pb-[50px] lg:pb-[70px] text-white">
        <div className="max-w-[713px] mx-auto text-center">
          <RRichtext data={title} config={{ h2: "text-[32px] md:text-[38px] leading-[38px] md:leading-[46px]" }} />
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap flex-wrap items-center lg:items-start justify-around xl:justify-between mt-12">
          <Item svgImage={item1icon} text={item1text} />
          <Item svgImage={item2icon} text={item2text} />
          <Item svgImage={item3icon} text={item3text} />
          <Item svgImage={item4icon} text={item4text} />
          <Item svgImage={item5icon} text={item5text} />
          <Item svgImage={item6icon} text={item6text} />
        </div>
        <div className="mt-[37px]">
          <RRichtext data={text} config={{ p: "mt-[27px] mb-[27px]" }} />
        </div>
      </div>
    </Container>
  );
};

export default WhatIsIncluded;
