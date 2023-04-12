import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../seo/Seo";

import Hero from "../components/Hero";
import MeetingEmbedSection from "../components/booking/MeetingEmbedSection";
import { Helmet } from "react-helmet";

const BookingPage = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <script
          type="text/javascript"
          src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
        ></script>
      </Helmet>
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
