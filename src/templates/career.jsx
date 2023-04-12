import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../seo/Seo";

import Hero from "../components/career/Hero";
import InfoSection from "../components/career/InfoSection";

const CareersInfoPage = ({ data }) => {
  const careerData = data.allContentfulCareer.nodes[0];

  return (
    <Layout>
      <Seo title={`${careerData.title} - Career`} />
      <Hero title={careerData.title} buttonLabel={data.contentfulCareersInfoPage.heroButtonLabel} />
      <InfoSection
        title={careerData.title}
        whoWeAreTitle={data.contentfulCareersInfoPage.whoWeAreTitle}
        whoWeAreText={data.contentfulCareersInfoPage.whoWeAreText}
        idealCandidateTitle={data.contentfulCareersInfoPage.idealCandidateTitle}
        idealCandidateText={careerData.idealCandidateText}
        responsibilitiesTitle={data.contentfulCareersInfoPage.responsibilitiesTitle}
        responsibilitiesText={careerData.responsibilitiesText}
        qualificationsTitle={data.contentfulCareersInfoPage.qualificationsTitle}
        qualificationsText={careerData.qualificationsText}
      />
    </Layout>
  );
};

export const query = graphql`
  query CareerInfoPageQuery($id: String) {
    allContentfulCareer(filter: { contentful_id: { eq: $id } }) {
      nodes {
        title
        idealCandidateText {
          raw
        }
        responsibilitiesText {
          raw
        }
        qualificationsText {
          raw
        }
      }
    }
    contentfulCareersInfoPage {
      heroButtonLabel
      whoWeAreTitle
      whoWeAreText {
        raw
      }
      idealCandidateTitle
      responsibilitiesTitle
      qualificationsTitle
    }
  }
`;

export default CareersInfoPage;
