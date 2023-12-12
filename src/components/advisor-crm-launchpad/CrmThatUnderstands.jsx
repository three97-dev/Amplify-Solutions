import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";

import Container from "../Container";
import RRichtext from "../RichtextRenderer";

const CrmThatUnderstands = ({
  title,
  subtitle,
  item1image,
  item1text,
  item2image,
  item2text,
  item3image,
  item3text,
}) => {
  return (
    <Container outerContainerClassName="bg-[#232049]">
      <div className="pt-[64px] pb-[46px] text-white">
        <div className="max-w-[713px] mx-auto text-center">
          <RRichtext data={title} config={{ h2: "text-[32px] md:text-[38px] leading-[38px] md:leading-[46px]" }} />
        </div>
        <div className="max-w-[884px] mx-auto text-center">
          <p>{subtitle}</p>
        </div>
        <div className="mx-auto mt-[32px] grid xl:grid-cols-2 gap-x-[95px]">
          <div>
            <GatsbyImage
              image={item1image?.gatsbyImageData}
              alt={item1image?.title}
              layout="fullWidth"
              objectFit="cover"
              quality={100}
            />
            <div className="mt-[27px] mb-[32px]">
              <RRichtext data={item1text} config={{ p: "mt-[18px] mb-[18px]" }} />
            </div>
          </div>
          <div>
            <GatsbyImage
              image={item2image?.gatsbyImageData}
              alt={item2image?.title}
              layout="fullWidth"
              objectFit="cover"
              quality={100}
            />
            <div className="mt-[27px] mb-[32px]">
              <RRichtext data={item2text} config={{ p: "mt-[18px] mb-[18px]" }} />
            </div>
          </div>
        </div>
        <div>
          <GatsbyImage
            image={item3image?.gatsbyImageData}
            alt={item3image?.title}
            layout="fullWidth"
            objectFit="cover"
            quality={100}
          />
          <div className="mt-[27px]">
            <RRichtext data={item3text} config={{ p: "mt-[18px] mb-[18px]" }} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CrmThatUnderstands;
