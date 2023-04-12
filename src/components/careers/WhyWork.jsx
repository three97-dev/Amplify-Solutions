import React from "react";

import Container from "../Container";
import RRichtext from "../RichtextRenderer";

import icon1 from "../../assets/careers/handshake.svg";
import icon2 from "../../assets/careers/trophy.svg";
import icon3 from "../../assets/careers/user-account.svg";
import icon4 from "../../assets/careers/account.svg";

const Item = ({ title, text, svgImage }) => {
  return (
    <div className="mt-[24px] max-w-[400px] lg:max-w-[256px] md:mr-4 lg:mr-6 last:mr-0 grow basis-0">
      <img src={svgImage} alt="Why Work Icon" height="100" width="100" />
      <div className="mt-6 mb-4 text-[28px] leading-[120%] font-medium font-poppins">{title}</div>
      <p>{text}</p>
    </div>
  );
};

const WhyWork = ({
  title,
  item1title,
  item1text,
  item2title,
  item2text,
  item3title,
  item3text,
  item4title,
  item4text,
}) => {
  return (
    <Container outerContainerClassName="bg-light-blue">
      <div className="pt-[64px] md:pt-[80px] pb-[90px] lg:pb-[96px]">
        <div className="text-center mb-[40px] px-16 md:px-0">
          <RRichtext data={title} config={{ h2: "text-[32px] md:text-[38px] leading-[38px] md:leading-[46px]" }} />
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          <Item title={item1title} text={item1text} svgImage={icon1} />
          <Item title={item2title} text={item2text} svgImage={icon2} />
          <Item title={item3title} text={item3text} svgImage={icon3} />
          <Item title={item4title} text={item4text} svgImage={icon4} />
        </div>
      </div>
    </Container>
  );
};

export default WhyWork;
