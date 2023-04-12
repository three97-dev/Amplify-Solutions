import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import Container from "../Container";
import RRichtext from "../RichtextRenderer";

import clockIcon from "../../assets/blog/clock.svg";

const BlogContent = ({ title, image, postingDate, minutesToRead, minutesToReadLabel, intro, content }) => {
  return (
    <Container>
      <div className="lg:pt-[48px] pb-[51px] md:pb-[107px] xl:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(400px,599px)_minmax(450px,553px)] gap-y-12">
          <div className="h-[256px] sm:h-[456px] -mx-6 md:-mx-16 lg:ml-8 xl:ml-[89px] lg:-mr-16 xl:-mr-[144px]">
            <GatsbyImage image={image?.gatsbyImageData} alt={image?.title} className="w-full h-full" />
          </div>
          <div className="lg:order-first">
            <h4 className="lg:mt-[36px]">{postingDate}</h4>
            <div className="flex mt-1">
              <img src={clockIcon} alt="Clock Icon" className="mr-2" />
              <h4 className="uppercase">
                {minutesToRead}
                <span className="ml-2">{minutesToReadLabel}</span>
              </h4>
            </div>
            <h2 className="!text-[28px] md:!text-[38px] !leading-[120%] lg:max-w-[433px] mt-[29px] md:mt-6">{title}</h2>
            <RRichtext config={{ p: "!text-[16px] !leading-[21px]" }} data={intro} className="mt-4" />
          </div>
        </div>
        <RRichtext
          data={content}
          config={{
            h2: "mt-[50px] md:mt-[44px] mb-6",
            h3: "!text-[28px] md:!text-[32px] !leading-[120%] mt-[50px] md:mt-[44px] mb-[18px] md:mb-4",
            h4: "!text-[18px] !leading-[22px] !font-medium font-poppins mt-5 mb-6",
            p: "!text-[16px] !leading-[21px]",
          }}
          className="mt-[50px] lg:mt-[56px]"
        />
      </div>
    </Container>
  );
};

export default BlogContent;
