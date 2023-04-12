import React from "react";
import classNames from "classnames";
import { GatsbyImage } from "gatsby-plugin-image";

import Container from "../Container";
import Button from "../basic/Button";
import RRichtext from "../RichtextRenderer";

import checkIcon from "../../assets/pricing//check.svg";
import checkWhiteIcon from "../../assets/pricing/check-white.svg";

const Card = ({ variant, icon, title, subtitle, price, features, info, buttonLabel, buttonLink }) => {
  return (
    <div className="relative">
      <GatsbyImage
        image={icon?.gatsbyImageData}
        alt={icon?.title}
        layout="fullWidth"
        objectFit="contain"
        quality={100}
        className="!absolute left-1/2 -translate-x-1/2 -top-[98px] w-[196px] z-10"
      />
      <div
        className={classNames(
          "flex flex-col items-center h-full pt-[100px] pb-[54px] px-[27px] xl:px-[38px] overflow-hidden rounded-[15px]",
          {
            "bg-light-blue text-dark-blue": variant === "light",
            "bg-dark-blue text-white": variant === "dark",
          }
        )}
      >
        <div className="text-[52px] leading-[66px] font-medium font-poppins uppercase">{title}</div>
        <div className="flex items-center font-poppins text-[18px] leading-[120%] font-medium mt-4">{subtitle}</div>
        <h2 className="text-red-primary text-[28px] xl:text-[32px] 2xl:text-[38px] leading-[34px] 2xl:leading-[46px] font-medium font-poppins mt-6">
          {price}
        </h2>
        <div className="flex-1 min-h-[353px] w-full py-[22px] mt-[39px] md:mt-[27px] lg:pr-10 border-y border-blue-secondary">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center py-2">
              {variant === "light" ? (
                <img src={checkIcon} alt="Check Icon" />
              ) : (
                <img src={checkWhiteIcon} alt="White Check Icon" />
              )}
              <div className="text-[18px] leading-[22px] font-medium font-poppins ml-[15px]">{feature.content}</div>
            </div>
          ))}
        </div>
        <RRichtext
          data={info}
          config={{
            h3: "text-[24px] min-[390px]:text-[28px] lg:text-[24px] xl:text-[32px] leading-[34px] lg:leading:-[29px] xl:leading-[38px] font-medium font-poppins",
          }}
          className="mt-[26px]"
        />
        <Button
          variant={variant === "light" ? "outline-red" : null}
          // link={buttonLink}
          className="!w-full flex items-center justify-center mt-6 pointer-events-none"
          px="px-3 lg:px-7"
        >
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
};

const PricingPlansSection = ({
  basicPlanImage,
  basicPlanTitle,
  basicPlanSubtitle,
  basicPlanPrice,
  basicPlanFeatures,
  basicPlanInfo,
  basicPlanButtonLabel,
  basicPlanButtonLink,
  standardPlanImage,
  standardPlanTitle,
  standardPlanSubtitle,
  standardPlanPrice,
  standardPlanFeatures,
  standardPlanInfo,
  standardPlanButtonLabel,
  standardPlanButtonLink,
  premiumPlanImage,
  premiumPlanTitle,
  premiumPlanSubtitle,
  premiumPlanPrice,
  premiumPlanFeatures,
  premiumPlanInfo,
  premiumPlanButtonLabel,
  premiumPlanButtonLink,
}) => {
  return (
    <Container outerContainerClassName="pt-[98px] -mt-[62px] md:-mt-[57px]">
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-x-4 lg:gap-x-[28px] gap-y-[121px] pb-[154px] md:pb-[139px] ">
        <Card
          variant="light"
          icon={basicPlanImage}
          title={basicPlanTitle}
          subtitle={basicPlanSubtitle}
          price={basicPlanPrice}
          features={basicPlanFeatures}
          info={basicPlanInfo}
          buttonLabel={basicPlanButtonLabel}
          buttonLink={basicPlanButtonLink}
        />
        <Card
          variant="dark"
          icon={standardPlanImage}
          title={standardPlanTitle}
          subtitle={standardPlanSubtitle}
          price={standardPlanPrice}
          features={standardPlanFeatures}
          info={standardPlanInfo}
          buttonLabel={standardPlanButtonLabel}
          buttonLink={standardPlanButtonLink}
        />
        <Card
          variant="light"
          icon={premiumPlanImage}
          title={premiumPlanTitle}
          subtitle={premiumPlanSubtitle}
          price={premiumPlanPrice}
          features={premiumPlanFeatures}
          info={premiumPlanInfo}
          buttonLabel={premiumPlanButtonLabel}
          buttonLink={premiumPlanButtonLink}
        />
        <div className="absolute hidden lg:block w-[90%] h-[60%] bottom-[80px] left-1/2 -translate-x-1/2 bg-blue-secondary blur-[60px] opacity-30 -z-10"></div>
      </div>
    </Container>
  );
};

export default PricingPlansSection;
