import React from "react";
import classNames from "classnames";

import Button from "../basic/Button";
import Container from "../Container";
import RRichtext from "../RichtextRenderer";

import lineIcon from "../../assets/crm-implementation/line.svg";
import checkIcon from "../../assets/crm-implementation/check-circle.svg";

const PricingPlanHeader = ({ icon, title, price, buttonLabel, buttonLink, isHighlighted, className }) => {
  return (
    <div
      className={classNames(
        "relative flex flex-col items-center p-[30px] -mb-[10px]",
        {
          "bg-white text-dark-blue rounded-[10px]": !isHighlighted,
          "bg-red-primary text-white rounded-t-[10px] -mx-[1.5px]": isHighlighted,
        },
        className
      )}
    >
      <img src={icon.file.url} alt={icon.title} />
      <h3 className={classNames("mt-7", { "text-dark-blue": isHighlighted, "text-red-primary": !isHighlighted })}>
        {title}
      </h3>
      <h2
        className={classNames(
          "text-[28px] xl:text-[32px] 2xl:text-[38px] leading-[34px] 2xl:leading-[46px] font-medium font-poppins mt-4",
          { "text-dark-blue": !isHighlighted, "text-wite": isHighlighted }
        )}
      >
        {price}
      </h2>
      <Button
        variant={isHighlighted ? "outline-white" : "outline-grey"}
        link={buttonLink}
        className="!w-full xl:!w-[200px] min-w-[130px] flex items-center justify-center mt-6 pointer-events-none"
        px="px-3 lg:px-3"
      >
        {buttonLabel}
      </Button>
      <div className="absolute left-[15px] right-[15px] bottom-[26px] h-[134px] bg-blue-secondary blur-[60px] opacity-50 -z-10"></div>
    </div>
  );
};

const PricingSection = ({
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
      <div className="pt-[144px] pb-[92px]">
        <table className="w-full border-collapse border-spacing-0">
          <thead>
            <tr>
              <th className="text-left">
                <div className="pr-4 -mb-[10px]">
                  <RRichtext data={title} config={{ h2: "text-[32px] md:text-[38px] leading-[120%]" }} />
                  <RRichtext data={subtitle} config={{ h3: "text-[22px] leading-[29px]" }} className="mt-4" />
                </div>
              </th>
              <th className="align-bottom">
                <PricingPlanHeader
                  icon={walkIcon}
                  title={walkTitle}
                  price={walkPrice}
                  buttonLabel={walkButtonLabel}
                  buttonLink={walkButtonLink}
                  className="mr-[21px]"
                />
              </th>
              <th className="align-bottom p-0">
                <PricingPlanHeader
                  icon={runIcon}
                  title={runTitle}
                  price={runPrice}
                  buttonLabel={runButtonLabel}
                  buttonLink={runButtonLink}
                  isHighlighted
                />
              </th>
              <th className="align-bottom">
                <PricingPlanHeader
                  icon={sprintIcon}
                  title={sprintTitle}
                  price={sprintPrice}
                  buttonLabel={sprintButtonLabel}
                  buttonLink={sprintButtonLink}
                  className="ml-[21px]"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-16">
              <td />
              <td />
              <td className="border-x-[3px] border-red-primary" />
              <td />
            </tr>
            {features.map((feature, index) => (
              <tr key={index} className="border-b-[3px] border-r-[3px] border-light-blue">
                <td className="border-r-[3px] border-light-blue">
                  <div className="text-[22px] leading-[37px] py-[21px] pr-4 font-medium font-poppins">
                    {feature.label}
                  </div>
                </td>
                <td align="center">
                  {feature.walk ? <img src={checkIcon} alt="Check Icon" /> : <img src={lineIcon} alt="Line Icon" />}
                </td>
                <td
                  align="center"
                  className={classNames({
                    "border-x-[3px] border-b-[3px] border-red-primary rounded-b-[10px] border-separate":
                      index === features?.length - 1,
                    "border-x-[3px] border-red-primary": index !== features?.length - 1,
                  })}
                >
                  <div>
                    {feature.run ? <img src={checkIcon} alt="Check Icon" /> : <img src={lineIcon} alt="Line Icon" />}
                  </div>
                </td>
                <td align="center" className="border-r-[3px] border-light-blue">
                  {feature.sprint ? <img src={checkIcon} alt="Check Icon" /> : <img src={lineIcon} alt="Line Icon" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <RRichtext data={notes} className="mt-7" />
        <div className="w-full py-7 mt-7 border-y border-blue-secondary">
          <RRichtext data={info} config={{ bold: "font-semibold !text-dark-blue" }} />
        </div>
      </div>
    </Container>
  );
};

export default PricingSection;
