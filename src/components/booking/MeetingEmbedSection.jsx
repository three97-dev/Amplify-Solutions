import React, { useEffect } from "react";

import Container from "../Container";

const MeetingEmbedSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container>
      <div className="-mx-[12px] min-[360px]:mx-0 pt-20">
        <div
          className="meetings-iframe-container"
          data-src="https://meetings.hubspot.com/mkennedy17/mike-meeting-link?embed=true"
        ></div>
      </div>
    </Container>
  );
};

export default MeetingEmbedSection;
