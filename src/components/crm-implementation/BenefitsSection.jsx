import React from "react";
import classNames from "classnames";
import { GatsbyImage } from "gatsby-plugin-image";

import Container from "../Container";
import RRichtext from "../RichtextRenderer";

import circles5 from "../../assets/background/circles5.svg";

const BenefitItem = ({ text, image, isRightVariant }) => {
  return (
    <div
      className={classNames("grid gap-x-[50px] gap-y-12 items-center py-[80px] lg:pt-[77px] lg:pb-[160px]", {
        "lg:grid-cols-[minmax(340px,582px)_minmax(500px,680px)]": isRightVariant,
        "lg:grid-cols-[minmax(500px,680px)_minmax(340px,582px)]": !isRightVariant,
      })}
    >
      <div className={classNames("relative", { "lg:order-last": isRightVariant })}>
        <GatsbyImage
          image={image?.gatsbyImageData}
          alt={image?.title}
          layout="fullWidth"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute h-[92px] left-0 right-0 bottom-0 bg-blue-secondary opacity-50 blur-[60px] -z-10"></div>
      </div>
      <RRichtext data={text} />
    </div>
  );
};

const BenefitsSection = ({
  title,
  item1Text,
  item1Image,
  item2Text,
  item2Image,
  item3Text,
  item3Image,
  item4Text,
  item4Image,
}) => {
  return (
    <>
      <Container outerContainerClassName="bg-light-blue" innerContainerClassName="relative">
        <div className="pt-20 lg:pt-[80px] text-center">
          <RRichtext data={title} config={{ h2: "text-[32px] md:text-[38px] leading-[120%]" }} />
        </div>
      </Container>
      <Container outerContainerClassName="bg-light-blue">
        <BenefitItem text={item1Text} image={item1Image} />
      </Container>
      <Container innerContainerClassName="relative">
        <img
          src={circles5}
          alt="Background circles 1"
          className="absolute max-w-none w-[496px] md:w-[700px] lg:w-[966px] -top-[250px] lg:-top-[200px] -right-[80px] lg:-right-[100px] -z-10"
        />
        <BenefitItem text={item2Text} image={item2Image} isRightVariant />
      </Container>
      <Container outerContainerClassName="bg-light-blue">
        <BenefitItem text={item3Text} image={item3Image} />
      </Container>
      <Container innerContainerClassName="relative">
        <img
          src={circles5}
          alt="Background circles 2"
          className="absolute max-w-none w-[496px] md:w-[700px] lg:w-[966px] -top-[250px] lg:-top-[200px] -left-[80px] lg:left-[74px] -z-10"
        />
        <BenefitItem text={item4Text} image={item4Image} isRightVariant />
      </Container>
    </>
  );
};

export default BenefitsSection;
