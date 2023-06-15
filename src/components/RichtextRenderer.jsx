import React from "react";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage } from "gatsby-plugin-image";

const Text = ({ data, config, className }) => {
  if (!data) {
    return null;
  }

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <span className={`${config?.bold || "text-red-primary"}`}>{text}</span>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className={`whitespace-pre-wrap first:mt-0 mt-[18px] md:mt-[21px] ${config?.p || ""}`}>{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node, children) => <h1 className={`${config?.h1 || ""}`}>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className={`${config?.h2 || ""}`}>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3 className={`${config?.h3 || ""}`}>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4 className={`${config?.h4 || ""}`}>{children}</h4>,
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className={`list-disc ml-6 first:mt-0 mt-[18px] md:mt-[21px] space-y-2 ${config?.ul || ""}`}>{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className={`list-decimal ml-6 first:mt-0 mt-[18px] md:mt-[21px] space-y-2 ${config?.ol || ""}`}>
          {children}
        </ol>
      ),
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <a className="cursor-pointer underline" href={node.data.uri} target="_blank" rel="noreferrer">
            {children}
          </a>
        );
      },
      [BLOCKS.HR]: () => <hr className="my-5 border-t border-dark-blue" />,

      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { gatsbyImageData, title } = node.data.target;
        if (!gatsbyImageData) {
          // asset is not an image
          return null;
        }

        return (
          <div className="flex justify-center">
            <GatsbyImage className="mb-10 lg:mb-12" image={gatsbyImageData} alt={title} />
          </div>
        );
      },

      [INLINES.ASSET_HYPERLINK]: (node, children) => {
        return (
          <a className="cursor-pointer underline" href={node.data.target.url} target="_blank" rel="noreferrer">
            {children}
          </a>
        );
      },
    },
  };

  return <div className={className}>{renderRichText(data, options)}</div>;
};

export default Text;
