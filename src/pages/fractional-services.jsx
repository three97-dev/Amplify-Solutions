import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../seo/Seo";

import Hero from "../components/Hero";
import YouIdentify from "../components/fractional-services/YouIdentify";
import ExperienceBenefits from "../components/fractional-services/ExperienceBenefits";
import VisualizeBusiness from "../components/fractional-services/VisualizeBusiness";
import PricingPlansSection from "../components/pricing/PricingPlansSection";
import BusinessCaseFormSection from "../components/fractional-services/BusinessCaseFormSection";

const FractionalServicesPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Fractional Services" />
      <Hero
        title={data.contentfulFractionalServicesPage.heroTitle}
        subtitle={data.contentfulFractionalServicesPage.heroSubtitle.heroSubtitle}
        // buttons={data.contentfulFractionalServicesPage.heroButtons}
        titleClassNames="max-w-[1075px]"
        subtitleClassName="max-w-[884px]"
      />
      <YouIdentify
        title={data.contentfulFractionalServicesPage.scenariosTitle}
        item1text={data.contentfulFractionalServicesPage.scenariosText1}
        item2text={data.contentfulFractionalServicesPage.scenariosText2}
        item3text={data.contentfulFractionalServicesPage.scenariosText3}
      />
      <ExperienceBenefits
        title={data.contentfulFractionalServicesPage.benefitsTitle}
        item1title={data.contentfulFractionalServicesPage.benefitsItem1Title}
        item1text={data.contentfulFractionalServicesPage.benefitsItem1Text.benefitsItem1Text}
        item2title={data.contentfulFractionalServicesPage.benefitsItem2Title}
        item2text={data.contentfulFractionalServicesPage.benefitsItem2Text.benefitsItem2Text}
        item3title={data.contentfulFractionalServicesPage.benefitsItem3Title}
        item3text={data.contentfulFractionalServicesPage.benefitsItem3Text.benefitsItem3Text}
        item4title={data.contentfulFractionalServicesPage.benefitsItem4Title}
        item4text={data.contentfulFractionalServicesPage.benefitsItem4Text.benefitsItem4Text}
      />
      <VisualizeBusiness
        title={data.contentfulFractionalServicesPage.visualizeTitle}
        text={data.contentfulFractionalServicesPage.visualizeText.visualizeText}
        videoLink={data.contentfulFractionalServicesPage.visualizeVideoLink}
      />
      <PricingPlansSection
        basicPlanImage={data.contentfulFractionalServicesPage.basicPlanImage}
        basicPlanTitle={data.contentfulFractionalServicesPage.basicPlanTitle}
        basicPlanSubtitle={data.contentfulFractionalServicesPage.basicPlanSubtitle}
        basicPlanPrice={data.contentfulFractionalServicesPage.basicPlanPrice}
        basicPlanFeatures={data.contentfulFractionalServicesPage.basicPlanFeatures}
        basicPlanInfo={data.contentfulFractionalServicesPage.basicPlanInfo}
        basicPlanButtonLabel={data.contentfulFractionalServicesPage.basicPlanButtonLabel}
        basicPlanButtonLink={data.contentfulFractionalServicesPage.basicPlanButtonLink}
        standardPlanImage={data.contentfulFractionalServicesPage.standardPlanImage}
        standardPlanTitle={data.contentfulFractionalServicesPage.standardPlanTitle}
        standardPlanSubtitle={data.contentfulFractionalServicesPage.standardPlanSubtitle}
        standardPlanPrice={data.contentfulFractionalServicesPage.standardPlanPrice}
        standardPlanFeatures={data.contentfulFractionalServicesPage.standardPlanFeatures}
        standardPlanInfo={data.contentfulFractionalServicesPage.standardPlanInfo}
        standardPlanButtonLabel={data.contentfulFractionalServicesPage.standardPlanButtonLabel}
        standardPlanButtonLink={data.contentfulFractionalServicesPage.standardPlanButtonLink}
        premiumPlanImage={data.contentfulFractionalServicesPage.premiumPlanImage}
        premiumPlanTitle={data.contentfulFractionalServicesPage.premiumPlanTitle}
        premiumPlanSubtitle={data.contentfulFractionalServicesPage.premiumPlanSubtitle}
        premiumPlanPrice={data.contentfulFractionalServicesPage.premiumPlanPrice}
        premiumPlanFeatures={data.contentfulFractionalServicesPage.premiumPlanFeatures}
        premiumPlanInfo={data.contentfulFractionalServicesPage.premiumPlanInfo}
        premiumPlanButtonLabel={data.contentfulFractionalServicesPage.premiumPlanButtonLabel}
        premiumPlanButtonLink={data.contentfulFractionalServicesPage.premiumPlanButtonLink}
      />
      <BusinessCaseFormSection
        image={data.contentfulFractionalServicesPage.businessCaseFormImage}
        title={data.contentfulFractionalServicesPage.businessCaseFormTitle}
        subtitle={data.contentfulFractionalServicesPage.businessCaseFormSubtitle.businessCaseFormSubtitle}
        buttonLabel={data.contentfulFractionalServicesPage.businessCaseFormButtonLabel}
        hubspotForm={data.hubspotForm}
      />
    </Layout>
  );
};

export const query = graphql`
  query FractionalServicesPageQuery {
    contentfulFractionalServicesPage {
      heroTitle {
        raw
      }
      heroSubtitle {
        heroSubtitle
      }
      heroButtons {
        url
        label
      }
      scenariosTitle {
        raw
      }
      scenariosText1
      scenariosText2
      scenariosText3
      benefitsTitle {
        raw
      }
      benefitsItem1Title
      benefitsItem1Text {
        benefitsItem1Text
      }
      benefitsItem2Title
      benefitsItem2Text {
        benefitsItem2Text
      }
      benefitsItem3Title
      benefitsItem3Text {
        benefitsItem3Text
      }
      benefitsItem4Title
      benefitsItem4Text {
        benefitsItem4Text
      }
      visualizeTitle {
        raw
      }
      visualizeText {
        visualizeText
      }
      visualizeVideoLink
      basicPlanImage {
        gatsbyImageData(placeholder: NONE)
        title
      }
      basicPlanTitle
      basicPlanSubtitle
      basicPlanPrice
      basicPlanFeatures {
        content
      }
      basicPlanInfo {
        raw
      }
      basicPlanButtonLabel
      basicPlanButtonLink
      standardPlanImage {
        gatsbyImageData(placeholder: NONE)
        title
      }
      standardPlanTitle
      standardPlanSubtitle
      standardPlanPrice
      standardPlanFeatures {
        content
      }
      standardPlanInfo {
        raw
      }
      standardPlanButtonLabel
      standardPlanButtonLink
      premiumPlanImage {
        gatsbyImageData(placeholder: NONE)
        title
      }
      premiumPlanTitle
      premiumPlanSubtitle
      premiumPlanPrice
      premiumPlanFeatures {
        content
      }
      premiumPlanInfo {
        raw
      }
      premiumPlanButtonLabel
      premiumPlanButtonLink
      businessCaseFormImage {
        gatsbyImageData(placeholder: NONE)
        title
      }
      businessCaseFormTitle {
        raw
      }
      businessCaseFormSubtitle {
        businessCaseFormSubtitle
      }
      businessCaseFormButtonLabel
    }
    hubspotForm(id: { eq: "98d8d90c-9881-4fff-8d63-0aeb36e5eadc" }) {
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

export default FractionalServicesPage;
