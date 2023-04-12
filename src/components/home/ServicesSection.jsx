import React from "react";

import RRichtext from "../RichtextRenderer";
import Container from "../Container";
import Button from "../basic/Button";

import redArrow from "../../assets/home-page/red-arrow.svg";
import redArrowShort from "../../assets/home-page/red-arrow-short.svg";

const ServicesSection = ({ title, subTitle, buttonLabel, buttonLink, servicesList }) => {
  return (
    <Container innerContainerClassName="!p-0">
      <div className="py-[88px] flex flex-col md:flex-row md:justify-between md:px-16 md:w-full md:py-[76px] lg:justify-start">
        <div className="px-6 md:px-0 mb-[52px]  lg:w-max lg:pr-[25px] xl:pr-[75px]">
          <div className="pb-[15px] md:min-w-[300px] md:max-w-[350px] lg:min-w-[350px] lg:max-w-[400px] lg:pt-[75px] xl:min-w-[512px]">
            <RRichtext data={title} />
          </div>
          <p className="text-dark-blue md:min-w-[300px] md:max-w-[350px] xl:min-w-[512px]">{subTitle}</p>
          <div className="pt-6">
            <Button link={buttonLink}>{buttonLabel}</Button>
          </div>
        </div>
        <div />
        <div className="lg:w-full lg:border-l lg:border-blue-secondary md:pl-[26px] xl:pl-[75px] md:py-[25px]">
          {servicesList.map((service, index) => (
            <div key={index} className="border-b border-blue-secondary pb-5  pl-6 pt-[23px] first:pt-[5px]">
              <div className="flex items-center lg:pl-[16px]">
                <img src={redArrow} alt="Red Arrow" className="hidden md:block" />
                <img src={redArrowShort} alt="Red Arrow Short" className="md:hidden" />

                <h3 className="pl-[15px] md:pl-[45px]">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ServicesSection;
