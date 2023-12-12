import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../seo/Seo";

import Hero from "../components/Hero";
import BenefitsSection from "../components/advisor-crm-launchpad/BenefitsSection";
import FocusSection from "../components/advisor-crm-launchpad/FocusSection";
import CrmThatUnderstands from "../components/advisor-crm-launchpad/CrmThatUnderstands";
import WhatIsIncluded from "../components/advisor-crm-launchpad/WhatIsIncluded";
import PricingSection from "../components/crm-implementation/PricingSection";
import PricingSectionMobile from "../components/crm-implementation/PricingSectionMobile";
import BookDemoFormSection from "../components/advisor-crm-launchpad/BookDemoFormSection";

import { useApplyAfterWidth } from "../utils/hooks";

const AdvisorCrmLaunchpadPage = ({ data }) => {
  const pageData = data.contentfulAdvisorCrmLaunchpadPage;
  const isDesktop = useApplyAfterWidth(1023);

  return (
    <Layout>
      <Seo title="Advisor CRM Launchpad" />
      <Hero
        image={pageData.heroImage}
        title={pageData.heroTitle}
        subtitle={pageData.heroSubtitle.heroSubtitle}
        buttons={pageData.heroButtons}
        titleClassNames="max-w-[1075px]"
        subtitleClassName="max-w-[784px]"
      />
      <BenefitsSection
        item1Title={pageData.benefitsItem1Title}
        item1Text={pageData.benefitsItem1Text}
        item1ButtonLabel={pageData.benefitsItem1ButtonLabel}
        item1ButtonLink={pageData.benefitsItem1ButtonLink}
        item1Image={pageData.benefitsItem1Image}
        item2Title={pageData.benefitsItem2Title}
        item2Text={pageData.benefitsItem2Text}
        item2ButtonLabel={pageData.benefitsItem2ButtonLabel}
        item2ButtonLink={pageData.benefitsItem2ButtonLink}
        item2Image={pageData.benefitsItem2Image}
      />
      <CrmThatUnderstands
        title={pageData.crmThatUnderstandsTitle}
        subtitle={pageData.crmThatUnderstandsSubtitle.crmThatUnderstandsSubtitle}
        item1image={pageData.crmThatUnderstandsItem1Image}
        item1text={pageData.crmThatUnderstandsItem1Text}
        item2image={pageData.crmThatUnderstandsItem2Image}
        item2text={pageData.crmThatUnderstandsItem2Text}
        item3image={pageData.crmThatUnderstandsItem3Image}
        item3text={pageData.crmThatUnderstandsItem3Text}
      />
      <FocusSection title={pageData.focusTitle} text={pageData.focusText} slides={pageData.focusSlides} />
      <WhatIsIncluded
        title={pageData.whatIsIncludedTitle}
        text={pageData.whatIsIncludedText}
        item1icon={pageData.whatIsIncludedIcons[0]}
        item1text={pageData.whatIsIncludedItems[0].text}
        item2icon={pageData.whatIsIncludedIcons[1]}
        item2text={pageData.whatIsIncludedItems[1].text}
        item3icon={pageData.whatIsIncludedIcons[2]}
        item3text={pageData.whatIsIncludedItems[2].text}
        item4icon={pageData.whatIsIncludedIcons[3]}
        item4text={pageData.whatIsIncludedItems[3].text}
        item5icon={pageData.whatIsIncludedIcons[4]}
        item5text={pageData.whatIsIncludedItems[4].text}
        item6icon={pageData.whatIsIncludedIcons[5]}
        item6text={pageData.whatIsIncludedItems[5].text}
      />
      {isDesktop ? (
        <>
          <PricingSection
            title={pageData.pricingTitle}
            subtitle={pageData.pricingSubtitle}
            walkIcon={pageData.pricingWalkIcon}
            walkTitle={pageData.pricingFeatures.columns[0].title}
            walkPrice={pageData.pricingFeatures.columns[0].price}
            walkButtonLabel={pageData.pricingFeatures.columns[0].buttonLabel}
            walkButtonLink={pageData.pricingFeatures.columns[0].buttonLink}
            runIcon={pageData.pricingRunIcon}
            runTitle={pageData.pricingFeatures.columns[1].title}
            runPrice={pageData.pricingFeatures.columns[1].price}
            runButtonLabel={pageData.pricingFeatures.columns[1].buttonLabel}
            runButtonLink={pageData.pricingFeatures.columns[1].buttonLink}
            sprintIcon={pageData.pricingSprintIcon}
            sprintTitle={pageData.pricingFeatures.columns[2].title}
            sprintPrice={pageData.pricingFeatures.columns[2].price}
            sprintButtonLabel={pageData.pricingFeatures.columns[2].buttonLabel}
            sprintButtonLink={pageData.pricingFeatures.columns[2].buttonLink}
            features={pageData.pricingFeatures.rows}
            notes={pageData.pricingNotes}
          />
        </>
      ) : (
        <>
          <PricingSectionMobile
            title={pageData.pricingTitle}
            subtitle={pageData.pricingSubtitle}
            walkIcon={pageData.pricingWalkIcon}
            walkTitle={pageData.pricingFeatures.columns[0].title}
            walkPrice={pageData.pricingFeatures.columns[0].price}
            walkButtonLabel={pageData.pricingFeatures.columns[0].buttonLabel}
            walkButtonLink={pageData.pricingFeatures.columns[0].buttonLink}
            runIcon={pageData.pricingRunIcon}
            runTitle={pageData.pricingFeatures.columns[1].title}
            runPrice={pageData.pricingFeatures.columns[1].price}
            runButtonLabel={pageData.pricingFeatures.columns[1].buttonLabel}
            runButtonLink={pageData.pricingFeatures.columns[1].buttonLink}
            sprintIcon={pageData.pricingSprintIcon}
            sprintTitle={pageData.pricingFeatures.columns[2].title}
            sprintPrice={pageData.pricingFeatures.columns[2].price}
            sprintButtonLabel={pageData.pricingFeatures.columns[2].buttonLabel}
            sprintButtonLink={pageData.pricingFeatures.columns[2].buttonLink}
            features={pageData.pricingFeatures.rows}
            notes={pageData.pricingNotes}
          />
        </>
      )}
      <BookDemoFormSection
        image={pageData.signUpFormImage}
        title={pageData.signUpFormTitle}
        text={pageData.signUpFormText}
        buttonLabel={pageData.signUpFormButtonLabel}
        hubspotForm={data.hubspotForm}
      />
    </Layout>
  );
};

export const query = graphql`
  query AdvisorCrmLaunchpadPageQuery {
    contentfulAdvisorCrmLaunchpadPage {
      heroImage {
        title
        file {
          url
        }
      }
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
      benefitsItem1Title {
        raw
      }
      benefitsItem1Text {
        raw
      }
      benefitsItem1ButtonLabel
      benefitsItem1ButtonLink
      benefitsItem1Image {
        gatsbyImageData
        title
      }
      benefitsItem2Title {
        raw
      }
      benefitsItem2Text {
        raw
      }
      benefitsItem2ButtonLabel
      benefitsItem2ButtonLink
      benefitsItem2Image {
        gatsbyImageData
        title
      }
      crmThatUnderstandsTitle {
        raw
      }
      crmThatUnderstandsSubtitle {
        crmThatUnderstandsSubtitle
      }
      crmThatUnderstandsItem1Image {
        gatsbyImageData
        title
      }
      crmThatUnderstandsItem1Text {
        raw
      }
      crmThatUnderstandsItem2Image {
        gatsbyImageData
        title
      }
      crmThatUnderstandsItem2Text {
        raw
      }
      crmThatUnderstandsItem3Image {
        gatsbyImageData
        title
      }
      crmThatUnderstandsItem3Text {
        raw
      }
      focusTitle {
        raw
      }
      focusText {
        raw
      }
      focusSlides {
        image {
          gatsbyImageData
          title
        }
        description {
          description
        }
      }
      whatIsIncludedTitle {
        raw
      }
      whatIsIncludedItems {
        text
      }
      whatIsIncludedIcons {
        file {
          url
        }
        title
      }
      whatIsIncludedText {
        raw
      }
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
      pricingRunIcon {
        file {
          url
        }
        title
      }
      pricingSprintIcon {
        file {
          url
        }
        title
      }
      pricingFeatures {
        columns {
          title
          price
          buttonLabel
          buttonLink
        }
        rows {
          label
          walk
          run
          sprint
        }
      }
      pricingNotes {
        raw
      }
      signUpFormImage {
        gatsbyImageData(placeholder: NONE)
        title
      }
      signUpFormText {
        raw
      }
      signUpFormTitle {
        raw
      }
      signUpFormButtonLabel
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

export default AdvisorCrmLaunchpadPage;
