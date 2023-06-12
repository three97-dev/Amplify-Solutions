import React from "react";

import Container from "../Container";
import RRichtext from "../RichtextRenderer";

const LicensingSectionMobile = ({ title, subtitle, column1Title, column2Title, column3Title, rows }) => {
  return (
    <Container>
      <div className="pb-20">
        <RRichtext data={title} config={{ h2: "text-[32px] md:text-[38px] leading-[120%]" }} />
        <RRichtext data={subtitle} config={{ h3: "text-[22px] leading-[29px]" }} className="mt-4" />
        <div className="grid grid-cols-3 gap-x-2 sm:gap-x-3 pt-4 text-center">
          <h3 className="max-[500px]:!text-[16px]">{column1Title}</h3>
          <h3 className="max-[500px]:!text-[16px]">{column2Title}</h3>
          <h3 className="max-[500px]:!text-[16px]">{column3Title}</h3>
        </div>
        {rows.map((row, index) => (
          <div key={index}>
            <h4 className="font-medium font-poppins py-4">{row.label}</h4>
            <div className="grid grid-cols-3 md:text-center">
              <div className="flex justify-center items-center border-r-[3px] border-light-blue">
                <p className="!text-[12px] md:!text-[14px] pr-1">{row.light}</p>
              </div>
              <div className="flex justify-center items-center border-r-[3px] border-light-blue">
                <p className="!text-[12px] md:!text-[14px] px-1">{row.professional}</p>
              </div>
              <div className="flex justify-center items-center">
                <p className="!text-[12px] md:!text-[14px] pl-1">{row.enterprise}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default LicensingSectionMobile;
