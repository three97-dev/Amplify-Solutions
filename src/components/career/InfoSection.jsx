import React from "react";

import Container from "../Container";
import RRichtext from "../RichtextRenderer";

import bookIcon from "../../assets/career/book.svg";
import faceIcon from "../../assets/career/face.svg";
import caseIcon from "../../assets/career/case.svg";
import brainIcon from "../../assets/career/brain.svg";

const Item = ({ svgImage, title, text }) => {
  return (
    <div className="mt-[54px] mt-[57px]">
      <div className="flex items-center">
        <img src={svgImage} alt="Scenario Icon" className="w-[52px] md:w-[72px] h-[52px] md:h-[72px]" />
        <div className="text-[28px] md:text-[32px] leading-[120%] font-medium font-poppins ml-[27px] overflow-hidden text-ellipsis">
          {title}
        </div>
      </div>
      <RRichtext data={text} config={{ p: "!text-[16px] !leading-[21px]" }} className="mt-[31px] md:mt-[21px]" />
    </div>
  );
};

const InfoSection = ({
  title,
  whoWeAreTitle,
  whoWeAreText,
  idealCandidateTitle,
  idealCandidateText,
  responsibilitiesTitle,
  responsibilitiesText,
  qualificationsTitle,
  qualificationsText,
}) => {
  return (
    <Container>
      <div className="pt-[72px] md:pt-[92px] pb-[118px] md:pb-[107px] lg:px-[80px]">
        <h2 className="!text-[32px] md:!text-[38px] !leading-[120%]">{title}</h2>
        <div>
          <Item svgImage={bookIcon} title={whoWeAreTitle} text={whoWeAreText} />
          {idealCandidateText && <Item svgImage={faceIcon} title={idealCandidateTitle} text={idealCandidateText} />}
          {responsibilitiesText && (
            <Item svgImage={caseIcon} title={responsibilitiesTitle} text={responsibilitiesText} />
          )}
          {qualificationsText && <Item svgImage={brainIcon} title={qualificationsTitle} text={qualificationsText} />}
        </div>
      </div>
    </Container>
  );
};

export default InfoSection;
