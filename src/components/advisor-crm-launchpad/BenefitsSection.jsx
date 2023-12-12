import React from "react";
import classNames from "classnames";
import { GatsbyImage } from "gatsby-plugin-image";

import Container from "../Container";
import RRichtext from "../RichtextRenderer";
import Button from "../basic/Button";

const BenefitItem = ({ title, text, buttonLabel, buttonLink, image, isRightVariant }) => {
  return (
    <div
      className={classNames("grid gap-x-[50px] gap-y-12 items-center py-16", {
        "xl:grid-cols-[minmax(340px,582px)_minmax(500px,680px)]": isRightVariant,
        "xl:grid-cols-[minmax(500px,680px)_minmax(340px,582px)]": !isRightVariant,
      })}
    >
      <div
        className={classNames("lg:max-w-[700px] lg:mx-auto shadow-[0px_20px_50px_0px_rgba(91,87,136,0.25)]", {
          "xl:order-last": isRightVariant,
        })}
      >
        <GatsbyImage
          image={image?.gatsbyImageData}
          alt={image?.title}
          layout="fullWidth"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div>
        <RRichtext data={title} />
        <RRichtext data={text} config={{ h3: "mt-6", bold: "!text-dark-blue" }} />
        <Button link={buttonLink} className="mt-6 min-w-[223px]">
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
};

const BenefitsSection = ({
  item1Title,
  item1Text,
  item1ButtonLabel,
  item1ButtonLink,
  item1Image,
  item2Title,
  item2Text,
  item2ButtonLabel,
  item2ButtonLink,
  item2Image,
}) => {
  return (
    <>
      <Container outerContainerClassName="bg-light-blue">
        <BenefitItem
          title={item1Title}
          text={item1Text}
          buttonLabel={item1ButtonLabel}
          buttonLink={item1ButtonLink}
          image={item1Image}
          isRightVariant
        />
      </Container>
      <Container>
        <BenefitItem
          title={item2Title}
          text={item2Text}
          buttonLabel={item2ButtonLabel}
          buttonLink={item2ButtonLink}
          image={item2Image}
        />
      </Container>
    </>
  );
};

export default BenefitsSection;
