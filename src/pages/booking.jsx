import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../seo/Seo";

import Hero from "../components/Hero";
import MeetingEmbedSection from "../components/booking/MeetingEmbedSection";

const BookingPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Booking" />
      <Hero
        title={data.contentfulBookingPage.heroTitle}
        subtitle={data.contentfulBookingPage.heroSubtitle.heroSubtitle}
      />
      <MeetingEmbedSection />
    </Layout>
  );
};

export const query = graphql`
  query BookingPageQuery {
    contentfulBookingPage {
      heroTitle {
        raw
      }
      heroSubtitle {
        heroSubtitle
      }
    }
  }
`;

export default BookingPage;
