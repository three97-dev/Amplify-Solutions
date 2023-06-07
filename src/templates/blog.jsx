import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../seo/Seo";

import Hero from "../components/blog/Hero";
import BlogContent from "../components/blog/BlogContent";
import ContactUs from "../components/common/ContactUs";

const BlogOpenPage = ({ data }) => {
  const blogData = data.allContentfulBlog.nodes[0];

  return (
    <Layout>
      <Seo title={`${blogData.title} - Blog`} />
      <Hero title={blogData.title} subtitle={blogData.subtitle} titleClassName="max-w-[710px]" />
      <BlogContent
        title={blogData.title}
        image={blogData.previewImage}
        postingDate={blogData.postingDate}
        minutesToRead={blogData.minutesToRead}
        minutesToReadLabel={data.contentfulBlogOpenPage.minutesToReadLabel}
        content={blogData.content}
      />
      <ContactUs
        title={data.contentfulBlogOpenPage.contactUsTitle}
        text={data.contentfulBlogOpenPage.contactUsText.contactUsText}
        buttonLabel={data.contentfulBlogOpenPage.contactUsButtonLabel}
        buttonLink={data.contentfulBlogOpenPage.contactUsButtonLink}
      />
    </Layout>
  );
};

export const query = graphql`
  query BlogOpenPageQuery($id: String) {
    contentfulBlogOpenPage {
      minutesToReadLabel
      contactUsTitle {
        raw
      }
      contactUsText {
        contactUsText
      }
      contactUsButtonLabel
      contactUsButtonLink
    }
    allContentfulBlog(filter: { contentful_id: { eq: $id } }) {
      nodes {
        title
        subtitle
        previewImage {
          gatsbyImageData
          title
        }
        postingDate(formatString: "dddd, MMMM DD, YYYY")
        minutesToRead
        content {
          raw
          references {
            ... on ContentfulAsset {
              contentful_id
              __typename
              title
              gatsbyImageData
            }
            url
          }
        }
      }
    }
  }
`;

export default BlogOpenPage;
