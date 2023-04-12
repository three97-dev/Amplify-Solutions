import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Container from "../Container";
import RRichtext from "../RichtextRenderer";

const AdvantageSection = ({ title, text }) => {
  return (
    <Container innerContainerClassName="!px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 items-center">
        <div className="h-[325px] md:h-full md:min-h-[568px] h-full">
          <StaticImage
            src="../../images/careers/advantage.png"
            placeholder="blur"
            alt="Hero Image"
            layout="fullWidth"
            objectFit="cover"
            quality={100}
            className="w-full h-full"
          />
        </div>
        <div className="pt-[51px] pb-[84px] lg:pb-[51px] px-6 md:pr-0 md:pl-16 md:order-first">
          <RRichtext data={title} config={{ h2: "text-[32px] md:text-[38px] leading-[120%] [&_span]:inline-block" }} />
          <RRichtext data={text} className="mt-5 md:mt-5 lg:max-w-[545px]" />
        </div>
      </div>
    </Container>
  );
};

export default AdvantageSection;
