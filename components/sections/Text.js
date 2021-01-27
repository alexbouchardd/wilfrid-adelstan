import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import theme from "../theme";

const Text = ({ fields }) => {
  return (
    <section id={fields.slug}>
      <div className="content">
        {documentToReactComponents(fields.text, {
          renderNode: {
            [BLOCKS.HEADING_1]: (node, children) => (
              <p className="h1">{children}</p>
            ),
            [BLOCKS.HEADING_2]: (node, children) => (
              <p className="h2">{children}</p>
            ),
            [BLOCKS.HEADING_3]: (node, children) => (
              <p className="h3">{children}</p>
            ),
          },
        })}
      </div>
      <style jsx>{`
        .content {
          max-width: 900px;
          margin: 0 auto;
        }

        .h1,
        .h2,
        .h3 {
          margin-top: 0;
          max-width: 580px;
          line-height: 1.2;
        }

        :first-child {
          color: ${theme.colors.primary};
          margin-bottom: 0
        }

        .image {
          position: relative;
          width: 100%;
          border: 1px solid ${theme.colors.primary};
          box-sizing: border-box;
          box-shadow: 0px 0px 0px 20px ${theme.colors.light_primary};
        }
      `}</style>
    </section>
  );
};

export default Text;
