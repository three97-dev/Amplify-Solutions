import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../seo/Seo";

import Hero from "../components/Hero";
import BookFormSection from "../components/common/BookFormSection";
import OrganizationsLikeYours from "../components/about-us/OrganizationsLikeYours";
import CrmChartSection from "../components/about-us/CrmChartSection";
import WeProvide from "../components/about-us/WeProvide";

const AboutUsPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="About Us" />
      <Hero
        title={data.contentfulAboutUsPage.heroTitle}
        subtitle={data.contentfulAboutUsPage.heroSubtitle.heroSubtitle}
        buttons={data.contentfulAboutUsPage.heroButtons}
      />
      <OrganizationsLikeYours
        title={data.contentfulAboutUsPage.organizationsTitle}
        text={data.contentfulAboutUsPage.organizationsText}
        feature1={data.contentfulAboutUsPage.organizationsFeature1}
        feature2={data.contentfulAboutUsPage.organizationsFeature2}
        feature3={data.contentfulAboutUsPage.organizationsFeature3}
        feature4={data.contentfulAboutUsPage.organizationsFeature4}
        feature5={data.contentfulAboutUsPage.organizationsFeature5}
      />
      <CrmChartSection
        title={data.contentfulAboutUsPage.crmTitle}
        text={data.contentfulAboutUsPage.crmText}
        buttonLabel={data.contentfulAboutUsPage.crmButtonLabel}
        buttonLink={data.contentfulAboutUsPage.crmButtonLink}
        image={data.contentfulAboutUsPage.crmImage}
      />
      <WeProvide
        title={data.contentfulAboutUsPage.provideTitle}
        text={data.contentfulAboutUsPage.provideText.provideText}
        buttonLabel={data.contentfulAboutUsPage.provideButtonLabel}
        buttonLink={data.contentfulAboutUsPage.provideButtonLink}
        item1={data.contentfulAboutUsPage.provideItem1}
        item2={data.contentfulAboutUsPage.provideItem2}
        item3={data.contentfulAboutUsPage.provideItem3}
      />
      <BookFormSection
        title={data.contentfulAboutUsPage.bookFormTitle}
        subtitle={data.contentfulAboutUsPage.bookFormSubtitle.bookFormSubtitle}
        buttonLabel={data.contentfulAboutUsPage.bookFormButtonLabel}
        hubspotForm={data.hubspotForm}
      />
    </Layout>
  );
};

export const query = graphql`
  query AboutUsPageQuery {
    contentfulAboutUsPage {
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
      organizationsTitle {
        raw
      }
      organizationsText {
        raw
      }
      organizationsFeature1
      organizationsFeature2
      organizationsFeature3
      organizationsFeature4
      organizationsFeature5
      crmTitle {
        raw
      }
      crmText {
        raw
      }
      crmButtonLabel
      crmButtonLink
      crmImage {
        gatsbyImageData(placeholder: NONE)
        title
      }
      provideTitle {
        raw
      }
      provideText {
        provideText
      }
      provideButtonLabel
      provideButtonLink
      provideItem1
      provideItem2
      provideItem3
      bookFormTitle {
        raw
      }
      bookFormSubtitle {
        bookFormSubtitle
      }
      bookFormButtonLabel
    }
    hubspotForm(id: { eq: "382af47d-4880-4382-b732-aeb9b1008510" }) {
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

export default AboutUsPage;
