import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../seo/Seo";

import HeroSection from "../components/contact/HeroSection";
import InfoSection from "../components/contact/InfoSection";

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Contact Us" />
      <HeroSection
        title={data.contentfulContactPage.heroTitle}
        subtitle={data.contentfulContactPage.heroSubtitle.heroSubtitle}
        buttonLabel={data.contentfulContactPage.heroFormButtonLabel}
        hubspotForm={data.hubspotForm}
      />
      <InfoSection
        title={data.contentfulContactPage.contactInfoTitle}
        location={data.contentfulContactPage.location}
        address={data.contentfulContactPage.address}
        phone={data.contentfulContactPage.phone}
        email={data.contentfulContactPage.email}
        googleMapsCredentials={data.contentfulContactPage.googleMapsCredentials}
      />
    </Layout>
  );
};

export const query = graphql`
  query ContactPageQuery {
    contentfulContactPage {
      heroTitle {
        raw
      }
      heroSubtitle {
        heroSubtitle
      }
      heroFormButtonLabel
      contactInfoTitle {
        raw
      }
      location {
        lat
        lon
      }
      address
      phone
      email
      googleMapsCredentials {
        id
        googleMapsApiKey
      }
    }
    hubspotForm(id: { eq: "84670d9a-daf8-4b49-ac94-28b2ac2b635f" }) {
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

export default ContactPage;
