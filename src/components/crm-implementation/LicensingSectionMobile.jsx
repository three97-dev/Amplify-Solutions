import React from "react";

import Container from "../Container";
import RRichtext from "../RichtextRenderer";

const TableRow = ({ label, value }) => {
  return (
    <tr className="border-b-[3px] border-light-blue">
      <td className="border-r-[3px] border-light-blue">
        <h3 className="!text-[16px] py-2 pr-4">{label}</h3>
      </td>
      <td align="center" className="border-r-[3px] border-light-blue">
        <p className="px-4 py-2">{value}</p>
      </td>
    </tr>
  );
};

const LicensingSectionMobile = ({ title, subtitle, column1Title, column2Title, column3Title, rows }) => {
  return (
    <Container>
      <div className="pb-[95px]">
        <RRichtext data={title} config={{ h2: "text-[32px] md:text-[38px] leading-[120%]" }} />
        <RRichtext data={subtitle} config={{ h3: "text-[22px] leading-[29px]" }} className="mt-4" />
        <table className="w-full border-collapse border-spacing-0">
          <tbody>
            {rows.map((row, index) => (
              <React.Fragment key={index}>
                <tr className="h-[40px]">
                  <td colSpan={2}>
                    <div className="text-[22px] leading-[37px] py-[21px] pr-4 font-medium font-poppins">
                      {row.label}
                    </div>
                  </td>
                </tr>
                <TableRow label={column1Title} value={row.light} />
                <TableRow label={column2Title} value={row.professional} />
                <TableRow label={column3Title} value={row.enterprise} />
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default LicensingSectionMobile;
