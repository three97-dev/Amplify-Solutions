import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../seo/Seo";
import Hero from "../components/privacy-policy/Hero";
import RRenderer from "../components/RichtextRenderer";
import Container from "../components/Container";

const privacyPolicyRendererConfig = {
  h2: "mt-[50px] md:mt-[44px] mb-6",
  h3: "!text-[28px] md:!text-[32px] !leading-[120%] mt-[50px] md:mt-[30px] first:!mt-0 mb-[18px] md:mb-4 md:-ml-[23px]",
  h4: "!text-[18px] !leading-[22px] !font-medium font-poppins mt-5 mb-6",
  p: "!text-[16px] !leading-[21px] !mb-[21px] last:!mb-0",
};

const PrivacyPolicyPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Privacy Policy" />
      <Hero title={data.contentfulPrivacyPolicyPage.heroTitle} />
      <Container outerContainerClassName="pt-[10px] pb-[129px]">
        <div className="md:px-9">
          <RRenderer data={data.contentfulPrivacyPolicyPage.content} config={privacyPolicyRendererConfig} />
        </div>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query PrivacyPolicyPageQuery {
    contentfulPrivacyPolicyPage {
      heroTitle {
        raw
      }
      content {
        raw
      }
    }
  }
`;

export default PrivacyPolicyPage;
