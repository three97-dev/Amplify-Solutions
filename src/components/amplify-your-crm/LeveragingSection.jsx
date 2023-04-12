import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Container from "../Container";
import RRichtext from "../RichtextRenderer";

const LeveragingSection = ({title, text}) => {
  return (
    <Container innerContainerClassName="!px-0" outerContainerClassName="bg-light-blue">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 items-center">
        <div className="h-[280px] md:h-full md:min-h-[593px] h-full">
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
        <div className="pt-[73px] pb-[84px] lg:pb-[51px] lg:pt-[62px] px-6 md:pr-0 md:pl-16 md:order-first">
          <RRichtext data={title} config={{ h2: "text-[28px] md:text-[38px] leading-[120%] lg:max-w-[551px]" }} />
          <RRichtext data={text} className="mt-[32px] md:mt-5" config={{p: "whitespace-break-spaces text-[16px] leading-[130%] lg:max-w-[560px]"}} />
        </div>
      </div>
    </Container>
  );
};

export default LeveragingSection;
