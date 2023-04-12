import React from "react";

import Container from "../Container";
import MapsComponent from "./MapsComponent";
import RRichtext from "../RichtextRenderer";

const InfoSection = ({ title, location, address, phone, email, googleMapsCredentials }) => {
  return (
    <Container innerContainerClassName="!px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 md:items-center md:justify-items-center">
        <div className="h-[372px] md:h-[492px] w-full">
          <MapsComponent location={location} googleMapsCredentials={googleMapsCredentials} />
        </div>
        <div className="pt-[58px] pb-[116px] px-6 md:p-6 lg:-ml-12 md:max-w-[357px]">
          <RRichtext
            data={title}
            config={{ h2: "text-[32px] md:text-[38px] leading-[38px] md:leading-[46px] whitespace-pre-wrap" }}
          />
          <div className="grid grid-cols-[80px_auto] gap-x-[18px] md:gap-x-6 gap-y-5 mt-6 text-[16px] leading-[21px]">
            <div className="font-semibold">Address:</div>
            <div className="max-w-[194px]">{address}</div>
            <div className="font-semibold">Phone:</div>
            <div className="text-red-primary">{phone}</div>
            <div className="font-semibold">Email:</div>
            <div className="text-red-primary whitespace-nowrap">{email}</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default InfoSection;
