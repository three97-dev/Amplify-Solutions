import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../seo/Seo";

import Hero from "../components/Hero";
import BenefitSection from "../components/amplify-your-crm/BenefitSection";
import OvercomeObstaclesSection from "../components/amplify-your-crm/OvercomeObstaclesSection";
import SandboxFormSection from "../components/amplify-your-crm/SandboxFormSection";
import LeveragingSection from "../components/amplify-your-crm/LeveragingSection";
import SpecializeSection from "../components/common/SpecializeSection";

const AmplifyYourCrmPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Amplify Your Crm" />
      <Hero
        title={data.contentfulAmplifyYourCrmPage.heroTitle}
        subtitle={data.contentfulAmplifyYourCrmPage.heroSubtitle.heroSubtitle}
        titleClassNames="max-w-[1043px]"
      />
      <BenefitSection
        title={data.contentfulAmplifyYourCrmPage.benefitTitle}
        text={data.contentfulAmplifyYourCrmPage.benefitText.benefitText}
        highlight={data.contentfulAmplifyYourCrmPage.benefitHighlight}
        chartTitle={data.contentfulAmplifyYourCrmPage.benefitChartTitle}
        image={data.contentfulAmplifyYourCrmPage.benefitImage}
      />
      <OvercomeObstaclesSection
        title={data.contentfulAmplifyYourCrmPage.obstaclesTitle}
        text={data.contentfulAmplifyYourCrmPage.obstaclesText.obstaclesText}
        item1Title={data.contentfulAmplifyYourCrmPage.obstaclesItem1Title}
        item1Highlight={data.contentfulAmplifyYourCrmPage.obstaclesItem1Highlight}
        item1Text={data.contentfulAmplifyYourCrmPage.obstaclesItem1Text.obstaclesItem1Text}
        item2Title={data.contentfulAmplifyYourCrmPage.obstaclesItem2Title}
        item2Highlight={data.contentfulAmplifyYourCrmPage.obstaclesItem2Highlight}
        item2Text={data.contentfulAmplifyYourCrmPage.obstaclesItem2Text.obstaclesItem2Text}
        item2ButtonLabel={data.contentfulAmplifyYourCrmPage.obstaclesItem2ButtonLabel}
        item2ButtonLink={data.contentfulAmplifyYourCrmPage.obstaclesItem2ButtonLink}
      />
      <LeveragingSection
        title={data.contentfulAmplifyYourCrmPage?.leveragingTitle}
        text={data.contentfulAmplifyYourCrmPage?.leveragingText}
      />
      <SpecializeSection
        title={data.contentfulAmplifyYourCrmPage.areasWeSpecializeTitle}
        list={data.contentfulAmplifyYourCrmPage.areasWeSpecializeItems}
        buttonLabel={data.contentfulAmplifyYourCrmPage.areasWeSpecializeButtonLabel}
        buttonLink={data.contentfulAmplifyYourCrmPage.areasWeSpecializeButtonLink}
      />
      <SandboxFormSection
        title={data.contentfulAmplifyYourCrmPage.sandboxFormTitle}
        subtitle={data.contentfulAmplifyYourCrmPage.sandboxFormSubtitle.sandboxFormSubtitle}
        buttonLabel={data.contentfulAmplifyYourCrmPage.sandboxFormButtonLabel}
        hubspotForm={data.hubspotForm}
      />
    </Layout>
  );
};

export const query = graphql`
  query AmplifyYourCRMPageQuery {
    contentfulAmplifyYourCrmPage {
      heroTitle {
        raw
      }
      heroSubtitle {
        heroSubtitle
      }
      benefitTitle
      benefitText {
        benefitText
      }
      benefitHighlight
      benefitChartTitle
      benefitImage {
        gatsbyImageData(placeholder: NONE)
        title
      }
      obstaclesTitle {
        raw
      }
      obstaclesText {
        obstaclesText
      }
      obstaclesItem1Title
      obstaclesItem1Highlight
      obstaclesItem1Text {
        obstaclesItem1Text
      }
      obstaclesItem2Title
      obstaclesItem2Highlight
      obstaclesItem2Text {
        obstaclesItem2Text
      }
      obstaclesItem2ButtonLabel
      obstaclesItem2ButtonLink
      leveragingTitle {
        raw
      }
      leveragingText {
        raw
      }
      areasWeSpecializeTitle {
        raw
      }
      areasWeSpecializeItems {
        content
      }
      areasWeSpecializeButtonLabel
      areasWeSpecializeButtonLink
      sandboxFormTitle {
        raw
      }
      sandboxFormSubtitle {
        sandboxFormSubtitle
      }
      sandboxFormButtonLabel
    }
    hubspotForm(id: { eq: "4d7d944e-6380-4fd1-8714-489a32381d5b" }) {
      guid
      portalId
      name
      submitText
      redirect
      formFieldGroups {
        fields {
          label
          name
          required
          fieldType
          placeholder
        }
      }
    }
  }
`;

export default AmplifyYourCrmPage;
