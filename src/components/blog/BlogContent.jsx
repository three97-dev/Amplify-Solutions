import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import Container from "../Container";
import RRichtext from "../RichtextRenderer";

import clockIcon from "../../assets/blog/clock.svg";

const blogRendererConfig = {
  bold: "font-semibold",
  h2: "mt-[50px] md:mt-[44px] mb-6",
  h3: "!text-[28px] md:!text-[32px] !leading-[120%] mt-[50px] md:mt-[44px] mb-[18px] md:mb-4",
  h4: "!text-[18px] !leading-[22px] !font-medium font-poppins mt-5 mb-6",
  p: "!text-[16px] !leading-[21px] mb-[21px]",
};

const BlogContent = ({ title, image, postingDate, minutesToRead, minutesToReadLabel, content }) => {
  return (
    <Container innerContainerClassName="!px-0">
      <div className="lg:pt-[48px] pb-[51px] md:pb-[107px]">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_608px] items-center">
          <div className="w-full h-full max-h-[456px] sm:max-h-full min-h-[256px] sm:min-h-[356px] md:min-h-[456px]">
            <GatsbyImage image={image?.gatsbyImageData} alt={image?.title} className="w-full h-full" />
          </div>
          <div className="lg:order-first px-6 md:px-16 xl:pl-[144px] py-12 md:py-[72px] bg-light-blue">
            <h2 className="!text-[28px] md:!text-[38px] !leading-[120%]">{title}</h2>
            <h4 className="mt-4 lg:mt-6">{postingDate}</h4>
            <div className="flex mt-1">
              <img src={clockIcon} alt="Clock Icon" className="mr-2" />
              <h4 className="uppercase">
                {minutesToRead}
                <span className="ml-2">{minutesToReadLabel}</span>
              </h4>
            </div>
          </div>
        </div>
        <RRichtext
          data={content}
          config={blogRendererConfig}
          className="mt-[50px] lg:mt-[56px] px-6 md:px-16 xl:px-[144px]"
        />
      </div>
    </Container>
  );
};

export default BlogContent;
