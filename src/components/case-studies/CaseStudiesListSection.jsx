import React from "react";
import { saveAs } from "file-saver";
import { GatsbyImage } from "gatsby-plugin-image";

import Container from "../Container";
import Button from "../basic/Button";

import DownloadIcon from "../../assets/case-studies/download.svg";

const Card = ({ image, title, text, buttonLabel, downloadFile }) => {
  return (
    <div className="relative">
      <div className="flex flex-col lg:min-h-[599px] h-full bg-light-blue overflow-hidden rounded-[15px]">
        <GatsbyImage image={image?.gatsbyImageData} alt={image?.title} className="w-full h-[216px]" />
        <div className="flex flex-col justify-between grow pt-[30px] lg:pt-10 pb-[38px] lg:pb-[49px] px-[26px] lg:px-[34px]">
          <div>
            <div className="text-[24px] leading-[120%] font-medium font-poppins">{title}</div>
            <div className="text-[16px] leading-[21px] mt-5 md:mt-3.5">{text}</div>
          </div>
          <div>
            <Button
              variant="outline-red"
              className="!w-full flex items-center justify-center mt-6"
              px="px-3 lg:px-7"
              onClick={downloadFile}
            >
              <img src={DownloadIcon} alt="Download Icon" className="mr-[11px]" />
              {buttonLabel}
            </Button>
          </div>
        </div>
        <div className="absolute w-[80%] h-[40%] -bottom-[3px] left-1/2 -translate-x-1/2 bg-blue-secondary blur-[60px] opacity-50 -z-10"></div>
      </div>
    </div>
  );
};

const CaseStudiesListSection = ({ caseStudies }) => {
  const downloadFile = async (file) => {
    if (typeof window != "undefined") {
      const downloadResult = await fetch(file.url);
      const blob = await downloadResult.blob();
      saveAs(blob, file.fileName);
    }
  };

  return (
    <Container outerContainerClassName="-mt-[112px] md:-mt-[138px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 lg:gap-x-[28px] gap-y-6 md:gap-y-[58px] pb-[154px] md:pb-[139px] ">
        {caseStudies?.map((caseStudy, index) => (
          <Card
            key={index}
            image={caseStudy.previewImage}
            title={caseStudy.title}
            text={caseStudy.text.text}
            buttonLabel="Download Case Study"
            downloadFile={() => downloadFile(caseStudy.document.file)}
          />
        ))}
      </div>
    </Container>
  );
};

export default CaseStudiesListSection;
