import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../seo/Seo";

import Hero from "../components/Hero";
import AdvantageSection from "../components/careers/AdvantageSection";
import WhyWork from "../components/careers/WhyWork";
import OpenOpportunities from "../components/careers/OpenOpportunities";
import EmployerSection from "../components/careers/EmployerSection";

const CareersPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Careers" />
      <Hero
        title={data.contentfulCareersPage.heroTitle}
        subtitle={data.contentfulCareersPage.heroSubtitle.heroSubtitle}
        titleClassNames="max-w-[814px] px-8"
        subtitleClassName="max-w-[576px]"
      />
      <AdvantageSection
        title={data.contentfulCareersPage.advantageTitle}
        text={data.contentfulCareersPage.advantageText}
      />
      <WhyWork
        title={data.contentfulCareersPage.whyWorkTitle}
        item1title={data.contentfulCareersPage.whyWorkItem1Title}
        item1text={data.contentfulCareersPage.whyWorkItem1Text}
        item2title={data.contentfulCareersPage.whyWorkItem2Title}
        item2text={data.contentfulCareersPage.whyWorkItem2Text}
        item3title={data.contentfulCareersPage.whyWorkItem3Title}
        item3text={data.contentfulCareersPage.whyWorkItem3Text}
        item4title={data.contentfulCareersPage.whyWorkItem4Title}
        item4text={data.contentfulCareersPage.whyWorkItem4Text}
      />
      <OpenOpportunities
        title={data.contentfulCareersPage.openOpportunitiesTitle}
        data={data.allContentfulCareer.nodes}
      />
      <EmployerSection
        title={data.contentfulCareersPage.employerTitle}
        text={data.contentfulCareersPage.employerText.employerText}
      />
    </Layout>
  );
};

export const query = graphql`
  query CareersPageQuery {
    contentfulCareersPage {
      heroTitle {
        raw
      }
      heroSubtitle {
        heroSubtitle
      }
      advantageTitle {
        raw
      }
      advantageText {
        raw
      }
      whyWorkTitle {
        raw
      }
      whyWorkItem1Title
      whyWorkItem1Text
      whyWorkItem2Title
      whyWorkItem2Text
      whyWorkItem3Title
      whyWorkItem3Text
      whyWorkItem4Title
      whyWorkItem4Text
      openOpportunitiesTitle {
        raw
      }
      employerTitle
      employerText {
        employerText
      }
    }
    allContentfulCareer {
      nodes {
        title
        department
        postingDate
        fields {
          pageUrl
        }
      }
    }
  }
`;

export default CareersPage;
