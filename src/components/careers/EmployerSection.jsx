import React from "react";

import Container from "../Container";

import circles5 from "../../assets/background/circles5.svg";

const EmployerSection = ({ title, text }) => {
  return (
    <Container outerContainerClassName="bg-light-blue" innerContainerClassName="relative">
      <img
        src={circles5}
        alt="Background circles"
        className="hidden md:block absolute w-[966px] -bottom-[646px] -left-[518px] max-w-none -z-10"
      />
      <img
        src={circles5}
        alt="Background circles"
        className="hidden md:block absolute w-[966px] -top-[496px] -right-[550px] max-w-none -z-10"
      />
      <div className="py-[72px] md:pt-[57px] md:pb-16 max-w-[853px] mx-auto">
        <div className="text-[28px] leading-[120%] font-medium font-poppins">{title}</div>
        <p className="text-[14px] md:text-[20px] leading-[18px] md:leading-[26px] mt-7 md:mt-5">{text}</p>
      </div>
    </Container>
  );
};

export default EmployerSection;
