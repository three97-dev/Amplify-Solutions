import React from "react";

import Container from "../Container";
import RRichtext from "../RichtextRenderer";

const VisualizeBusiness = ({ title, text, videoLink }) => {
  return (
    <Container innerContainerClassName="!px-0">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(200px,591px)_minmax(200px,676px)] gap-x-[43px] items-center py-[104px] lg:px-16">
        <div className="lg:ml-[46px] px-6 lg:px-0">
          <RRichtext data={title} config={{ h2: "text-[32px] md:text-[38px] leading-[120%] [&_span]:inline-block" }} />
          <p className="mt-5 lg:mt-8">{text}</p>
        </div>
        <div className="relative w-full h-0 pb-[56.25%] pt-0 mx-auto mt-[62px] lg:mt-0">
          <iframe
            title="visualizeBusinessVideo"
            width="100%"
            allowFullScreen={true}
            allow="fullscreen"
            src={videoLink}
            className="absolute top-0 left-0 h-full rounded-[15px] overflow-hidden"
          />
          <div className="absolute w-[70%] h-[90%] right-4 bottom-0 bg-blue-secondary opacity-50 blur-[60px] -z-10"></div>
        </div>
      </div>
    </Container>
  );
};

export default VisualizeBusiness;
