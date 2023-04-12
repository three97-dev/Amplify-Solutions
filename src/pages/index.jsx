import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../seo/Seo";

import HeroSection from "../components/home/HeroSection";
import FractionSection from "../components/home/FractionSection";
import ServicesSection from "../components/home/ServicesSection";
import QuoteSection from "../components/home/QuoteSection";
import ConnectSection from "../components/home/ConnectSection";
import MicrosoftSection from "../components/home/MicrosoftSection";
import BookFormSection from "../components/common/BookFormSection";

const HomePage = ({ data }) => {
  return (
    <Layout>
      <Seo />
      <HeroSection
        title={data.contentfulHomePage.heroTitle}
        subtitle={data.contentfulHomePage.heroSubtitle}
        buttonLabel={data.contentfulHomePage.heroButtonLabel}
        buttonLink={data.contentfulHomePage.heroButtonLink}
        image={data.contentfulHomePage.heroImage}
      />
      <FractionSection
        title={data.contentfulHomePage.fractionTitle}
        fractionList={data.contentfulHomePage.fractionList}
        buttonLabel={data.contentfulHomePage.fractionButton}
        buttonLink={data.contentfulHomePage.fractionButtonLink}
      />
      <ServicesSection
        title={data.contentfulHomePage.servicesTitle}
        subTitle={data.contentfulHomePage.servicesSubtitle}
        buttonLabel={data.contentfulHomePage.servicesButtonLabel}
        buttonLink={data.contentfulHomePage.servicesButtonLink}
        servicesList={data.contentfulHomePage.servicesList}
      />
      <QuoteSection
        image={data.contentfulHomePage.quoteImage}
        logo={data.contentfulHomePage.quoteLogo}
        info={data.contentfulHomePage.quoteInfo}
        title={data.contentfulHomePage.quoteTitle}
        subTitle={data.contentfulHomePage.quoteSubtitle}
        buttonLabel={data.contentfulHomePage.quoteButtonLabel}
        buttonLink={data.contentfulHomePage.quoteButtonLink}
      />
      <ConnectSection
        title={data.contentfulHomePage.connectTitle}
        subtitle={data.contentfulHomePage.connectSubtitle}
        logos={data.contentfulHomePage.connectLogos}
      />
      <MicrosoftSection
        title={data.contentfulHomePage.microsoftTitle}
        subtitle={data.contentfulHomePage.microsoftSubtitle.microsoftSubtitle}
        buttonLabel={data.contentfulHomePage.microsoftButtonLabel}
        buttonLink={data.contentfulHomePage.microsoftButtonLink}
      />
      <BookFormSection
        title={data.contentfulHomePage.bookFormTitle}
        subtitle={data.contentfulHomePage.bookFormSubtitle.bookFormSubtitle}
        buttonLabel={data.contentfulHomePage.bookFormButtonLabel}
        hubspotForm={data.hubspotForm}
      />
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
    contentfulHomePage {
      heroTitle {
        raw
      }
      heroSubtitle
      heroButtonLabel
      heroButtonLink
      heroImage {
        gatsbyImageData(placeholder: NONE)
        title
      }
      servicesTitle {
        raw
      }
      servicesSubtitle
      servicesButtonLabel
      servicesButtonLink
      servicesList {
        title
      }
      fractionTitle {
        raw
      }
      fractionList {
        img
        title
      }
      fractionButton
      fractionButtonLink
      bookFormTitle {
        raw
      }
      bookFormSubtitle {
        bookFormSubtitle
      }
      bookFormButtonLabel
      quoteImage {
        gatsbyImageData(placeholder: NONE)
        title
      }
      quoteLogo {
        gatsbyImageData(placeholder: NONE)
        title
      }
      quoteInfo {
        raw
      }
      quoteTitle {
        raw
      }
      quoteSubtitle {
        raw
      }
      quoteButtonLabel
      quoteButtonLink
      connectTitle {
        raw
      }
      connectSubtitle
      connectLogos {
        file {
          url
        }
        title
      }
      microsoftTitle {
        raw
      }
      microsoftSubtitle {
        microsoftSubtitle
      }
      microsoftButtonLabel
      microsoftButtonLink
    }
    hubspotForm(id: { eq: "2f8552d9-9866-42b9-8507-00dfa9d21560" }) {
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

export default HomePage;
