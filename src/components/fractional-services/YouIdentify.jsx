import React from "react";

import Container from "../Container";
import RRichtext from "../RichtextRenderer";

import icon1 from "../../assets/careers/stack-of-coins.svg";
import icon2 from "../../assets/careers/tree-structure.svg";
import icon3 from "../../assets/careers/statistics.svg";

const Item = ({ text, svgImage }) => {
  return (
    <div className="mt-[48px] md:mt-[62px] max-w-[400px] lg:max-w-[256px] xl:max-w-[342px] lg:mr-[24px]">
      <img src={svgImage} alt="Scenario Icon" height="72" width="72" className="mx-auto" />
      <div className="mt-[30px] text-center font-poppins text-[18px] leading-[120%] font-medium">{text}</div>
    </div>
  );
};

const YouIdentify = ({ title, item1text, item2text, item3text }) => {
  return (
    <Container>
      <div className="pt-[98px] pb-[100px] lg:pt-[86px] lg:pb-[92px]">
        <div className="max-w-[580px] px-5 md:px-0 mx-auto text-center">
          <RRichtext data={title} config={{ h2: "text-[32px] md:text-[38px] leading-[120%]" }} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center">
          <Item text={item1text} svgImage={icon1} />
          <Item text={item2text} svgImage={icon2} />
          <Item text={item3text} svgImage={icon3} />
        </div>
      </div>
    </Container>
  );
};

export default YouIdentify;
