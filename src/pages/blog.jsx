import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../seo/Seo";

import Hero from "../components/Hero";
import ContactUs from "../components/common/ContactUs";
import BlogsListSection from "../components/blog/BlogsListSection";

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Blog" />
      <Hero
        title={data.contentfulBlogPage.heroTitle}
        subtitle={data.contentfulBlogPage.heroSubtitle.heroSubtitle}
        titleClassNames="max-w-[710px] md:whitespace-pre-wrap"
        subtitleClassName="mb-[113px] md:mb-[108px] max-w-[487px]"
      />
      <BlogsListSection blogs={data.allContentfulBlog.nodes} />
      <ContactUs
        title={data.contentfulBlogPage.contactUsTitle}
        text={data.contentfulBlogPage.contactUsText.contactUsText}
        buttonLabel={data.contentfulBlogPage.contactUsButtonLabel}
        buttonLink={data.contentfulBlogPage.contactUsButtonLink}
      />
    </Layout>
  );
};

export const query = graphql`
  query BlogPageQuery {
    contentfulBlogPage {
      heroTitle {
        raw
      }
      heroSubtitle {
        heroSubtitle
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
    allContentfulBlog {
      nodes {
        title
        subtitle
        previewImage {
          gatsbyImageData
          title
        }
        postingDate(formatString: "YYYY-MM-DD")
        fields {
          pageUrl
        }
      }
    }
  }
`;

export default BlogPage;
