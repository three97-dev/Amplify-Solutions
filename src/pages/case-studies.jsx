import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../seo/Seo";

import Hero from "../components/Hero";
import BookFormSection from "../components/common/BookFormSection";
import CaseStudiesListSection from "../components/case-studies/CaseStudiesListSection";

const CaseStudiesPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Case Studies" />
      <Hero
        title={data.contentfulCaseStudiesPage.heroTitle}
        subtitle={data.contentfulCaseStudiesPage.heroSubtitle.heroSubtitle}
        titleClassNames="max-w-[1060px] [&_span]:block"
        subtitleClassName="mb-[80px] pt-2.5 md:mb-[128px] max-w-[576px]"
      />
      <CaseStudiesListSection caseStudies={data.contentfulCaseStudiesPage.caseStudies} />
      <BookFormSection
        title={data.contentfulCaseStudiesPage.bookFormTitle}
        subtitle={data.contentfulCaseStudiesPage.bookFormSubtitle.bookFormSubtitle}
        buttonLabel={data.contentfulCaseStudiesPage.bookFormButtonLabel}
        hubspotForm={data.hubspotForm}
      />
    </Layout>
  );
};

export const query = graphql`
  query CaseStudiesQuery {
    contentfulCaseStudiesPage {
      heroTitle {
        raw
      }
      heroSubtitle {
        heroSubtitle
      }
      caseStudies {
        title
        text {
          text
        }
        buttonLabel
        document {
          file {
            fileName
            url
          }
        }
        previewImage {
          gatsbyImageData
          title
        }
      }
      bookFormTitle {
        raw
      }
      bookFormSubtitle {
        bookFormSubtitle
      }
      bookFormButtonLabel
    }
    hubspotForm(id: { eq: "a38117e7-4048-4a9c-938e-2244fae89d50" }) {
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

export default CaseStudiesPage;
