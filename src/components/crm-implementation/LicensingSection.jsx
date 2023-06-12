import React from "react";

import Container from "../Container";
import RRichtext from "../RichtextRenderer";

const LicensingSection = ({ title, subtitle, column1Title, column2Title, column3Title, rows }) => {
  return (
    <Container>
      <div className="pb-[125px]">
        <table className="w-full border-collapse border-spacing-0">
          <thead>
            <tr>
              <th className="text-left">
                <div className="pr-4">
                  <RRichtext data={title} config={{ h2: "text-[32px] md:text-[38px] leading-[120%]" }} />
                  <RRichtext data={subtitle} config={{ h3: "text-[22px] leading-[29px]" }} className="mt-4" />
                </div>
              </th>
              <th className="align-bottom w-[200px] xl:w-[283px]">
                <div className="text-[22px] leading-[37px] font-medium font-poppins">{column1Title}</div>
              </th>
              <th className="align-bottom w-[200px] xl:w-[283px] p-0">
                <div className="text-[22px] leading-[37px] font-medium font-poppins">{column2Title}</div>
              </th>
              <th className="align-bottom w-[200px] xl:w-[283px]">
                <div className="text-[22px] leading-[37px] font-medium font-poppins">{column3Title}</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-[40px]"></tr>
            {rows.map((row, index) => (
              <tr key={index} className="border-b-[3px] border-r-[3px] border-light-blue">
                <td className="border-r-[3px] border-light-blue">
                  <div className="text-[22px] leading-[37px] py-[21px] pr-4 font-medium font-poppins">{row.label}</div>
                </td>
                <td align="center" className="border-r-[3px] border-light-blue">
                  <p className="px-2 xl:px-4">{row.light}</p>
                </td>
                <td align="center" className="border-r-[3px] border-light-blue">
                  <p className="px-2 xl:px-4">{row.professional}</p>
                </td>
                <td align="center" className="border-r-[3px] border-light-blue">
                  <p className="px-2 xl:px-4">{row.enterprise}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default LicensingSection;
