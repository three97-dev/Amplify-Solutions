import React from "react";
import { Link } from "gatsby";

import Container from "../Container";
import RRichtext from "../RichtextRenderer";

import redArrow from "../../assets/home-page/red-arrow.svg";

const DesktopTable = ({ data }) => {
  return (
    <>
      <div className="grid grid-cols-[minmax(49px,134px)_minmax(350px,679px)_minmax(140px,355px)_144px] text-[20px]">
        <div className="flex items-center">
          <hr className="w-full mr-[30px] border-blue-secondary" />
        </div>
        <div className="flex items-center">
          ROLE
          <hr className="w-full mx-[30px] border-blue-secondary" />
        </div>
        <div className="flex items-center">
          DEPARTMENT
          <hr className="w-full mx-[30px] border-blue-secondary" />
        </div>
        <div className="flex items-center">POSTING DATE</div>
      </div>
      {data?.map((opportunity, index) => (
        <div
          key={index}
          className="grid grid-cols-[minmax(49px,134px)_minmax(350px,679px)_minmax(140px,355px)_144px] items-center pt-[33px] first:pt-[38px] pb-[37px] border-b border-blue-secondary"
        >
          <img src={redArrow} alt="Red Arrow" className="justify-self-end mr-[45px] shrink-0" />
          <Link
            to={opportunity.fields?.pageUrl}
            className="text-[32px] leading-[120%] font-medium font-poppins mr-[30px]"
          >
            {opportunity?.title}
          </Link>
          <h4>{opportunity?.department}</h4>
          <h4 className="text-red-primary">{opportunity?.postingDate}</h4>
        </div>
      ))}
    </>
  );
};

const MobileTable = ({ data }) => {
  return (
    <div className="border-t border-blue-secondary -mx-6 md:-mx-16">
      {data?.map((opportunity, index) => (
        <div key={index} className="border-b border-blue-secondary px-6 md:px-16 pt-[37px] pb-8">
          <h4>ROLE</h4>
          <Link
            to={opportunity.fields?.pageUrl}
            className="mt-[18px] text-[32px] leading-[38px] font-medium font-poppins"
          >
            {opportunity?.title}
          </Link>
          <div className="grid grid-cols-2 gap-y-[41px] gap-x-6 mt-[46px]">
            <h4>DEPARTMENT</h4>
            <h4>POSTING DATE</h4>
            <h4>{opportunity?.department}</h4>
            <h4 className="text-red-primary">{opportunity?.postingDate}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

const OpenOpportunities = ({ title, data }) => {
  return (
    <Container>
      <div className="pt-[88px] pb-[112px] lg:py-[82px]">
        <RRichtext
          data={title}
          config={{ h2: "text-[32px] md:text-[38px] leading-[120%]" }}
          className="-mr-2 md:mr-0"
        />
        <div className="hidden lg:block mt-[69px]">
          <DesktopTable data={data} />
        </div>
        <div className="lg:hidden mt-[64px]">
          <MobileTable data={data} />
        </div>
      </div>
    </Container>
  );
};

export default OpenOpportunities;
