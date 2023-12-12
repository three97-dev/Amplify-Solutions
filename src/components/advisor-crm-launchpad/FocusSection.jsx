import React from "react";
import Slider from "react-slick";
import classNames from "classnames";
import { GatsbyImage } from "gatsby-plugin-image";

import Container from "../Container";
import RRichtext from "../RichtextRenderer";

import arrowLeftIcon from "../../assets/crm-implementation/arrow-left.svg";
import arrowRightIcon from "../../assets/crm-implementation/arrow-right.svg";

const NextArrow = ({ className, onClick }) => {
  return (
    <div className={classNames(className, "before:hidden w-[75px] h-[75px] z-10")} onClick={onClick}>
      <img src={arrowRightIcon} alt="Arrow Right Icon" className="cursor-pointer" />
    </div>
  );
};

const PrevArrow = ({ className, onClick }) => {
  return (
    <div className={classNames(className, "before:hidden w-[75px] h-[75px] z-10")} onClick={onClick}>
      <img src={arrowLeftIcon} alt="Arrow Left Icon" className="cursor-pointer" />
    </div>
  );
};

const FocusSection = ({ title, text, slides }) => {
  const settings = {
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    draggable: false,
    swipe: false,
    touchMove: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          draggable: true,
          swipe: true,
          touchMove: true,
        },
      },
    ],
  };

  return (
    <Container innerContainerClassName="!px-0">
      <div className="flex flex-col items-center lg:px-16 pt-16 pb-[34px] lg:pb-0">
        <div className="px-6 lg:px-0">
          <RRichtext data={title} config={{ h2: "text-[32px] md:text-[38px] leading-[120%] text-center" }} />
        </div>
        <div className="px-6 lg:px-0 mt-2 text-center">
          <RRichtext data={text} config={{ ul: "list-inside !mt-0 !space-y-0", p: "inline !mb-0" }} />
        </div>
        <Slider {...settings} className="w-full max-w-[1219px] mt-[34px] sm:mt-6 lg:-mt-[56px]">
          {slides.map((slide, index) => (
            <div key={index} className="p-[30px] sm:p-10 lg:p-[120px] lg:pb-[91px]">
              <div className="relative p-4 lg:p-[25px] rounded-[10px] bg-white">
                <GatsbyImage
                  image={slide?.image?.gatsbyImageData}
                  alt={slide?.image?.title}
                  layout="fullWidth"
                  objectFit="cover"
                  quality={100}
                />
                <div className="flex items-center min-h-[124px] sm:min-h-[88px] md:min-h-[100px] lg:min-h-[109px] pt-4 lg:pt-[25px]">
                  <p>{slide?.description?.description}</p>
                </div>
                <div className="absolute left-0 right-0 top-0 bottom-0 bg-blue-secondary blur-[15px] sm:blur-[20px] lg:blur-[60px] opacity-50 -z-10"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default FocusSection;
