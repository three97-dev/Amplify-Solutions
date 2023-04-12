import React from "react";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const Text = ({ data, config, className }) => {
  if (!data) {
    return null;
  }

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <span className={`text-red-primary ${config?.bold || ""}`}>{text}</span>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className={`whitespace-pre-wrap ${config?.p || ""}`}>{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1 className={`${config?.h1 || ""}`}>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className={`${config?.h2 || ""}`}>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3 className={`${config?.h3 || ""}`}>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4 className={`${config?.h4 || ""}`}>{children}</h4>,
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className={`list-disc ml-6 space-y-[21px] md:space-y-0 ${config?.ul || ""}`}>{children}</ul>
      ),
      [INLINES.HYPERLINK]: (node) => {
        const { content, data } = node;

        return (
          <a className="cursor-pointer underline" href={data.uri} target="_blank" rel="noreferrer">
            {content[0].value}
          </a>
        );
      },
    },
  };

  return <div className={className}>{renderRichText(data, options)}</div>;
};

export default Text;
