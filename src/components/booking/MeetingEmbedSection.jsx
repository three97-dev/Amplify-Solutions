import React from "react";

import Container from "../Container";

const MeetingEmbedSection = () => {
  return (
    <Container>
      <div className="-mx-[12px] min-[360px]:mx-0 pt-20">
        <iframe
          title={"hubspot"}
          style={{
            width: "100%",
            height: "756px",
          }}
          src={"https://meetings.hubspot.com/mkennedy17/mike-meeting-link?embed=true"}
        />
      </div>
    </Container>
  );
};

export default MeetingEmbedSection;
