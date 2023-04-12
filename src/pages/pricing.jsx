import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../seo/Seo";

import Hero from "../components/Hero";
import BookFormSection from "../components/common/BookFormSection";
import ExpectSection from "../components/pricing/ExpectSection";
import PricingPlansSection from "../components/pricing/PricingPlansSection";
import SpecializeSection from "../components/common/SpecializeSection";
import Container from "../components/Container";

const PricingPage = ({ data }) => {
  console.log(data.contentfulPricingPage);
  return (
    <Layout>
      <Seo title="Pricing" />
      <Hero
        title={data.contentfulPricingPage.heroTitle}
        subtitle={data.contentfulPricingPage.heroSubtitle.heroSubtitle}
        titleClassNames="max-w-[814px]"
        subtitleClassName="mb-8 md:mb-0 max-w-[487px]"
      />
      <PricingPlansSection
        basicPlanImage={data.contentfulPricingPage.basicPlanImage}
        basicPlanTitle={data.contentfulPricingPage.basicPlanTitle}
        basicPlanSubtitle={data.contentfulPricingPage.basicPlanSubtitle}
        basicPlanPrice={data.contentfulPricingPage.basicPlanPrice}
        basicPlanFeatures={data.contentfulPricingPage.basicPlanFeatures}
        basicPlanInfo={data.contentfulPricingPage.basicPlanInfo}
        basicPlanButtonLabel={data.contentfulPricingPage.basicPlanButtonLabel}
        basicPlanButtonLink={data.contentfulPricingPage.basicPlanButtonLink}
        standardPlanImage={data.contentfulPricingPage.standardPlanImage}
        standardPlanTitle={data.contentfulPricingPage.standardPlanTitle}
        standardPlanSubtitle={data.contentfulPricingPage.standardPlanSubtitle}
        standardPlanPrice={data.contentfulPricingPage.standardPlanPrice}
        standardPlanFeatures={data.contentfulPricingPage.standardPlanFeatures}
        standardPlanInfo={data.contentfulPricingPage.standardPlanInfo}
        standardPlanButtonLabel={data.contentfulPricingPage.standardPlanButtonLabel}
        standardPlanButtonLink={data.contentfulPricingPage.standardPlanButtonLink}
        premiumPlanImage={data.contentfulPricingPage.premiumPlanImage}
        premiumPlanTitle={data.contentfulPricingPage.premiumPlanTitle}
        premiumPlanSubtitle={data.contentfulPricingPage.premiumPlanSubtitle}
        premiumPlanPrice={data.contentfulPricingPage.premiumPlanPrice}
        premiumPlanFeatures={data.contentfulPricingPage.premiumPlanFeatures}
        premiumPlanInfo={data.contentfulPricingPage.premiumPlanInfo}
        premiumPlanButtonLabel={data.contentfulPricingPage.premiumPlanButtonLabel}
        premiumPlanButtonLink={data.contentfulPricingPage.premiumPlanButtonLink}
      />
      <ExpectSection
        title={data.contentfulPricingPage.whatToExpectTitle}
        text={data.contentfulPricingPage.whatToExpectText.whatToExpectText}
        item1Title={data.contentfulPricingPage.whatToExpectItem1Title}
        item2Title={data.contentfulPricingPage.whatToExpectItem2Title}
        item3Title={data.contentfulPricingPage.whatToExpectItem3Title}
        item1Text={data.contentfulPricingPage.whatToExpectItem1Text.whatToExpectItem1Text}
        item2Text={data.contentfulPricingPage.whatToExpectItem2Text.whatToExpectItem2Text}
        item3Text={data.contentfulPricingPage.whatToExpectItem3Text.whatToExpectItem3Text}
      />
      <Container>
        <div className="w-full bg-red-primary h-px"></div>
      </Container>
      <SpecializeSection
        title={data.contentfulPricingPage.areasWeSpecializeTitle}
        list={data.contentfulPricingPage.areasWeSpecializeItems}
        buttonLabel={data.contentfulPricingPage.areasWeSpecializeButtonLabel}
        buttonLink={data.contentfulPricingPage.areasWeSpecializeButtonLink}
      />
      <BookFormSection
        title={data.contentfulPricingPage.bookFormTitle}
        subtitle={data.contentfulPricingPage.bookFormSubtitle.bookFormSubtitle}
        buttonLabel={data.contentfulPricingPage.bookFormButtonLabel}
        hubspotForm={data.hubspotForm}
      />
    </Layout>
  );
};

export const query = graphql`
  query PricingPageQuery {
    contentfulPricingPage {
      heroTitle {
        raw
      }
      heroSubtitle {
        heroSubtitle
      }
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
      whatToExpectTitle {
        raw
      }
      whatToExpectText {
        whatToExpectText
      }
      whatToExpectItem1Title
      whatToExpectItem1Text {
        whatToExpectItem1Text
      }
      whatToExpectItem2Title
      whatToExpectItem2Text {
        whatToExpectItem2Text
      }
      whatToExpectItem3Title
      whatToExpectItem3Text {
        whatToExpectItem3Text
      }
      areasWeSpecializeTitle {
        raw
      }
      areasWeSpecializeItems {
        content
      }
      areasWeSpecializeButtonLabel
      areasWeSpecializeButtonLink
      bookFormTitle {
        raw
      }
      bookFormSubtitle {
        bookFormSubtitle
      }
      bookFormButtonLabel
    }
    hubspotForm(id: { eq: "c054b02b-db3d-4a63-a2be-c36cec643db9" }) {
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

export default PricingPage;
