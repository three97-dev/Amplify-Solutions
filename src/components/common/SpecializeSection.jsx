import React from "react";

import RRichtext from "../RichtextRenderer";
import Container from "../Container";
import Button from "../basic/Button";

import Specialize1icon from "../../assets/amplify-your-crm/specialize1icon.svg";
import Specialize2icon from "../../assets/amplify-your-crm/specialize2icon.svg";
import Specialize3icon from "../../assets/amplify-your-crm/specialize3icon.svg";
import Specialize4icon from "../../assets/amplify-your-crm/specialize4icon.svg";
import Specialize5icon from "../../assets/amplify-your-crm/specialize5icon.svg";
import Specialize6icon from "../../assets/amplify-your-crm/specialize6icon.svg";
import Specialize7icon from "../../assets/amplify-your-crm/specialize7icon.svg";
import Specialize8icon from "../../assets/amplify-your-crm/specialize8icon.svg";

const SpecializeSection = ({ title, list, buttonLabel, buttonLink }) => {
  const images = [
    Specialize1icon,
    Specialize2icon,
    Specialize3icon,
    Specialize4icon,
    Specialize5icon,
    Specialize6icon,
    Specialize7icon,
    Specialize8icon,
  ];
  return (
    <Container>
      <div className="pt-[96px] pb-[84px] lg:py-[106px] flex flex-col items-center">
        <RRichtext
          data={title}
          config={{ h2: "text-[28px] md:text-[38px] leading-[120%] text-center max-w-[200px] sm:max-w-[100%]" }}
        />
        <div className="grid grid-cols-1 mt-[48px] mb-[59px] gap-y-[48px] md:grid-cols-2 xl:grid-cols-4 lg:mt-[63px] lg:mb-[72px] lg:gap-y-[40px] lg:gap-x-[30px]">
          {list.map((item, index) => (
            <div key={index} className="flex items-center pl-[12px] lg:pl-0">
              <div className="w-[72px] h-[72px] flex justify-center items-center border border-blue-secondary rounded-[12px] mr-[40px] shrink-0">
                <img src={images[index]} alt={"item.content"} className="w-[50px] h-[50px]" />
              </div>
              <div className={`text-[18px] leading-[120%] font-medium text-dark-blue ${index > 3 && "max-w-[170px]"}`}>
                {item.content}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button link={buttonLink} className="whitespace-break-spaces lg:px-[43px]">
            {buttonLabel}
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default SpecializeSection;
