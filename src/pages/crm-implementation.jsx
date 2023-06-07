import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../seo/Seo";

import Hero from "../components/Hero";
import ContactUs from "../components/common/ContactUs";
import BenefitsSection from "../components/crm-implementation/BenefitsSection";
import BusinessCaseFormSection from "../components/fractional-services/BusinessCaseFormSection";
import MoreBenefitsSection from "../components/crm-implementation/MoreBenefitsSection";
import IncludedSection from "../components/crm-implementation/IncludedSection";
import PricingSection from "../components/crm-implementation/PricingSection";
import PricingSectionMobile from "../components/crm-implementation/PricingSectionMobile";

import { useApplyAfterWidth } from "../utils/hooks";

const AmplifyYourCrmPage = ({ data }) => {
  const isDesktop = useApplyAfterWidth(1023);

  return (
    <Layout>
      <Seo title="CRM Implementation" />
      <Hero
        title={data.contentfulCrmImplementationPage.heroTitle}
        subtitle={data.contentfulCrmImplementationPage.heroSubtitle.heroSubtitle}
        buttons={data.contentfulCrmImplementationPage.heroButtons}
        titleClassNames="max-w-[1075px]"
        subtitleClassName="max-w-[884px]"
      />
      <BenefitsSection
        title={data.contentfulCrmImplementationPage.benefitsTitle}
        item1Text={data.contentfulCrmImplementationPage.benefitsItem1Text}
        item1Image={data.contentfulCrmImplementationPage.benefitsItem1Image}
        item2Text={data.contentfulCrmImplementationPage.benefitsItem2Text}
        item2Image={data.contentfulCrmImplementationPage.benefitsItem2Image}
        item3Text={data.contentfulCrmImplementationPage.benefitsItem3Text}
        item3Image={data.contentfulCrmImplementationPage.benefitsItem3Image}
        item4Text={data.contentfulCrmImplementationPage.benefitsItem4Text}
        item4Image={data.contentfulCrmImplementationPage.benefitsItem4Image}
      />
      <BusinessCaseFormSection
        image={data.contentfulCrmImplementationPage.signUpFormImage}
        title={data.contentfulCrmImplementationPage.signUpFormTitle}
        subtitle={data.contentfulCrmImplementationPage.signUpFormSubtitle.signUpFormSubtitle}
        buttonLabel={data.contentfulCrmImplementationPage.signUpFormButtonLabel}
        hubspotForm={data.hubspotForm}
      />
      <MoreBenefitsSection
        title={data.contentfulCrmImplementationPage.moreBenefitsTitle}
        slides={data.contentfulCrmImplementationPage.moreBenefitsSlides}
      />
      <IncludedSection
        title={data.contentfulCrmImplementationPage.includedTitle}
        item1Text={data.contentfulCrmImplementationPage.includedItem1Text}
        item2Text={data.contentfulCrmImplementationPage.includedItem2Text}
        item3Text={data.contentfulCrmImplementationPage.includedItem3Text}
        item4Text={data.contentfulCrmImplementationPage.includedItem4Text}
        item5Text={data.contentfulCrmImplementationPage.includedItem5Text}
        item6Text={data.contentfulCrmImplementationPage.includedItem6Text}
      />
      {isDesktop ? (
        <PricingSection
          title={data.contentfulCrmImplementationPage.pricingTitle}
          subtitle={data.contentfulCrmImplementationPage.pricingSubtitle}
          walkIcon={data.contentfulCrmImplementationPage.pricingWalkIcon}
          walkTitle={data.contentfulCrmImplementationPage.pricingWalkTitle}
          walkPrice={data.contentfulCrmImplementationPage.pricingWalkPrice}
          walkButtonLabel={data.contentfulCrmImplementationPage.pricingWalkButtonLabel}
          walkButtonLink={data.contentfulCrmImplementationPage.pricingWalkButtonLink}
          runIcon={data.contentfulCrmImplementationPage.pricingRunIcon}
          runTitle={data.contentfulCrmImplementationPage.pricingRunTitle}
          runPrice={data.contentfulCrmImplementationPage.pricingRunPrice}
          runButtonLabel={data.contentfulCrmImplementationPage.pricingRunButtonLabel}
          runButtonLink={data.contentfulCrmImplementationPage.pricingRunButtonLink}
          sprintIcon={data.contentfulCrmImplementationPage.pricingSprintIcon}
          sprintTitle={data.contentfulCrmImplementationPage.pricingSprintTitle}
          sprintPrice={data.contentfulCrmImplementationPage.pricingSprintPrice}
          sprintButtonLabel={data.contentfulCrmImplementationPage.pricingSprintButtonLabel}
          sprintButtonLink={data.contentfulCrmImplementationPage.pricingSprintButtonLink}
          features={data.contentfulCrmImplementationPage.pricingFeatures}
          notes={data.contentfulCrmImplementationPage.pricingNotes}
          info={data.contentfulCrmImplementationPage.pricingInfo}
        />
      ) : (
        <PricingSectionMobile
          title={data.contentfulCrmImplementationPage.pricingTitle}
          subtitle={data.contentfulCrmImplementationPage.pricingSubtitle}
          walkIcon={data.contentfulCrmImplementationPage.pricingWalkIcon}
          walkTitle={data.contentfulCrmImplementationPage.pricingWalkTitle}
          walkPrice={data.contentfulCrmImplementationPage.pricingWalkPrice}
          walkButtonLabel={data.contentfulCrmImplementationPage.pricingWalkButtonLabel}
          walkButtonLink={data.contentfulCrmImplementationPage.pricingWalkButtonLink}
          runIcon={data.contentfulCrmImplementationPage.pricingRunIcon}
          runTitle={data.contentfulCrmImplementationPage.pricingRunTitle}
          runPrice={data.contentfulCrmImplementationPage.pricingRunPrice}
          runButtonLabel={data.contentfulCrmImplementationPage.pricingRunButtonLabel}
          runButtonLink={data.contentfulCrmImplementationPage.pricingRunButtonLink}
          sprintIcon={data.contentfulCrmImplementationPage.pricingSprintIcon}
          sprintTitle={data.contentfulCrmImplementationPage.pricingSprintTitle}
          sprintPrice={data.contentfulCrmImplementationPage.pricingSprintPrice}
          sprintButtonLabel={data.contentfulCrmImplementationPage.pricingSprintButtonLabel}
          sprintButtonLink={data.contentfulCrmImplementationPage.pricingSprintButtonLink}
          features={data.contentfulCrmImplementationPage.pricingFeatures}
          notes={data.contentfulCrmImplementationPage.pricingNotes}
          info={data.contentfulCrmImplementationPage.pricingInfo}
        />
      )}
      <ContactUs
        title={data.contentfulCrmImplementationPage.contactUsTitle}
        text={data.contentfulCrmImplementationPage.contactUsText.contactUsText}
        buttonLabel={data.contentfulCrmImplementationPage.contactUsButtonLabel}
        buttonLink={data.contentfulCrmImplementationPage.contactUsButtonLink}
      />
    </Layout>
  );
};

export const query = graphql`
  query AmplifyYourCRMPageQuery {
    contentfulCrmImplementationPage {
      heroTitle {
        raw
      }
      heroSubtitle {
        heroSubtitle
      }
      heroButtons {
        label
        url
      }
      benefitsTitle {
        raw
      }
      benefitsItem1Text {
        raw
      }
      benefitsItem1Image {
        gatsbyImageData(placeholder: NONE)
        title
      }
      benefitsItem2Text {
        raw
      }
      benefitsItem2Image {
        gatsbyImageData(placeholder: NONE)
        title
      }
      benefitsItem3Text {
        raw
      }
      benefitsItem3Image {
        gatsbyImageData(placeholder: NONE)
        title
      }
      benefitsItem4Text {
        raw
      }
      benefitsItem4Image {
        gatsbyImageData(placeholder: NONE)
        title
      }
      signUpFormImage {
        gatsbyImageData(placeholder: NONE)
        title
      }
      signUpFormTitle {
        raw
      }
      signUpFormSubtitle {
        signUpFormSubtitle
      }
      signUpFormButtonLabel
      moreBenefitsTitle {
        raw
      }
      moreBenefitsSlides {
        image {
          gatsbyImageData(placeholder: NONE)
          title
        }
        description {
          description
        }
      }
      includedTitle {
        raw
      }
      includedItem1Text
      includedItem2Text
      includedItem3Text
      includedItem4Text
      includedItem5Text
      includedItem6Text
      pricingTitle {
        raw
      }
      pricingSubtitle {
        raw
      }
      pricingWalkIcon {
        file {
          url
        }
        title
      }
      pricingWalkTitle
      pricingWalkPrice
      pricingWalkButtonLabel
      pricingWalkButtonLink
      pricingRunIcon {
        file {
          url
        }
        title
      }
      pricingRunTitle
      pricingRunPrice
      pricingRunButtonLabel
      pricingRunButtonLink
      pricingSprintIcon {
        file {
          url
        }
        title
      }
      pricingSprintTitle
      pricingSprintPrice
      pricingSprintButtonLabel
      pricingSprintButtonLink
      pricingFeatures {
        label
        walk
        run
        sprint
      }
      pricingNotes {
        raw
      }
      pricingInfo {
        raw
      }
      contactUsTitle {
        raw
      }
      contactUsText {
        contactUsText
      }
      contactUsButtonLabel
      contactUsButtonLink
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

export default AmplifyYourCrmPage;
