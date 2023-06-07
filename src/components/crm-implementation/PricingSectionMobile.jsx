import React from "react";
import classNames from "classnames";

import Button from "../basic/Button";
import Container from "../Container";
import RRichtext from "../RichtextRenderer";

import lineIcon from "../../assets/crm-implementation/line.svg";
import checkIcon from "../../assets/crm-implementation/check-circle.svg";
import arrowIconWhite from "../../assets/arrow-hide-white.svg";
import arrowIcon from "../../assets/arrow-hide.svg";

const PricingPlanHeader = ({ icon, title, price, buttonLabel, buttonLink, isHighlighted }) => {
  return (
    <div
      className={classNames("relative flex flex-col items-center px-2 sm:px-6 py-6 sm:py-7 rounded-[10px]", {
        "bg-white text-dark-blue": !isHighlighted,
        "bg-red-primary text-white": isHighlighted,
      })}
    >
      <div className="flex justify-center shrink-0 h-[50px] sm:h-[75px] w-[87px]">
        <img src={icon.file.url} alt={icon.title} />
      </div>
      <h3
        className={classNames("max-[480px]:!text-[16px] mt-7", {
          "text-dark-blue": isHighlighted,
          "text-red-primary": !isHighlighted,
        })}
      >
        {title}
      </h3>
      <h2
        className={classNames(
          "text-[22px] sm:text-[28px] xl:text-[32px] 2xl:text-[38px] leading-[34px] 2xl:leading-[46px] font-medium font-poppins mt-4",
          { "text-dark-blue": !isHighlighted, "text-wite": isHighlighted }
        )}
      >
        {price}
      </h2>
      <Button
        variant={isHighlighted ? "outline-white" : "outline-grey"}
        link={buttonLink}
        className="hidden sm:block !w-[50px] sm:!w-full h-[50px] sm:h-auto flex items-center justify-center mt-6 pointer-events-none"
        px="px-3"
      >
        <span className="hidden sm:inline">{buttonLabel}</span>
        <img
          src={isHighlighted ? arrowIconWhite : arrowIcon}
          alt="Arrow Icon"
          className="sm:hidden rotate-90 h-[16px]"
        />
      </Button>
      <div className="absolute left-[15px] right-[15px] bottom-[26px] h-[134px] bg-blue-secondary blur-[60px] opacity-50 -z-10"></div>
    </div>
  );
};

const PricingSectionMobile = ({
  title,
  subtitle,
  walkIcon,
  walkTitle,
  walkPrice,
  walkButtonLabel,
  walkButtonLink,
  runIcon,
  runTitle,
  runPrice,
  runButtonLabel,
  runButtonLink,
  sprintIcon,
  sprintTitle,
  sprintPrice,
  sprintButtonLabel,
  sprintButtonLink,
  features,
  notes,
  info,
}) => {
  return (
    <Container>
      <div className="py-20">
        <RRichtext data={title} config={{ h2: "text-[32px] md:text-[38px] leading-[120%]" }} />
        <RRichtext data={subtitle} config={{ h3: "text-[22px] leading-[29px]" }} className="mt-4" />
        <div className="grid grid-cols-3 gap-x-2 sm:gap-x-3 py-10">
          <PricingPlanHeader
            icon={walkIcon}
            title={walkTitle}
            price={walkPrice}
            buttonLabel={walkButtonLabel}
            buttonLink={walkButtonLink}
          />
          <PricingPlanHeader
            icon={runIcon}
            title={runTitle}
            price={runPrice}
            buttonLabel={runButtonLabel}
            buttonLink={runButtonLink}
            isHighlighted
          />
          <PricingPlanHeader
            icon={sprintIcon}
            title={sprintTitle}
            price={sprintPrice}
            buttonLabel={sprintButtonLabel}
            buttonLink={sprintButtonLink}
          />
        </div>
        {features.map((feature, index) => (
          <div key={index}>
            <h4 className="font-medium font-poppins py-4">{feature.label}</h4>
            <div className="grid grid-cols-3 h-[30px]">
              <div className="flex justify-center border-r-[3px] border-light-blue">
                {feature.walk ? (
                  <img src={checkIcon} alt="Check Icon" width={30} />
                ) : (
                  <img src={lineIcon} alt="Line Icon" width={30} />
                )}
              </div>
              <div className="flex justify-center border-r-[3px] border-light-blue">
                {feature.run ? (
                  <img src={checkIcon} alt="Check Icon" width={30} />
                ) : (
                  <img src={lineIcon} alt="Line Icon" width={30} />
                )}
              </div>
              <div className="flex justify-center">
                {feature.sprint ? (
                  <img src={checkIcon} alt="Check Icon" width={30} />
                ) : (
                  <img src={lineIcon} alt="Line Icon" width={30} />
                )}
              </div>
            </div>
          </div>
        ))}
        <RRichtext data={notes} className="mt-7" />
        <div className="w-full py-7 mt-7 border-y border-blue-secondary">
          <RRichtext data={info} config={{ bold: "font-semibold !text-dark-blue" }} />
        </div>
      </div>
    </Container>
  );
};

export default PricingSectionMobile;
